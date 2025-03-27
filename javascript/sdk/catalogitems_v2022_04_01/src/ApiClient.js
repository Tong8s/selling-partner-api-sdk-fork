/**
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import superagent from "superagent";
import querystring from "querystring";
import { URL } from 'node:url';

/**
* @module ApiClient
* @version 2022-04-01
*/

/**
* Private class used by ApiClient class. Used for executing LWA refresh token flow.
* @class
*/
class LwaOAuthClient {
    /**
    * Private member to store LWA credential and refresh token.
    * @type {Object.<String, String>}
    */
    #lwaClientInfo = {};

    /**
    * Private member to cache one access token that is retrieved by auto-retrieval.
    * @type {String | null}
    */
    #cachedToken = null;

    /**
    * Private member to cache one access token that is retrieved by auto-retrieval.
    * @type {Number | null}
    */
    #cachedTokenExpiration = null;

    /**
    * Constructs a new LwaOAuthClient.
    * @param {String} clientId LWA Client ID.
    * @param {String} clientSecret LWA Client Secret.
    * @param {String} refreshToken LWA Refresh token.
    */
    constructor(clientId, clientSecret, refreshToken) {
        this.#lwaClientInfo = {
            clientId, clientSecret, refreshToken,
        };
    }

    /**
     * Execute LWA refresh token flow to retrieve access token to be used for SP-API calls.
     * @returns {Promise<String>} LWA access token.
     */
    retrieveAccessToken = async () => {
        if (this.#cachedToken && this.#cachedTokenExpiration && this.#cachedTokenExpiration > Date.now()) {
            return Promise.resolve(this.#cachedToken);
        }
        const res = await this.#doRefresh();
        this.#cachedToken = res.access_token;
        this.#cachedTokenExpiration = Date.now() + res.expires_in * 1000;
        return this.#cachedToken;
    }

    /**
     * Private method to execute LWA token refresh flow.
     * @returns {Promise<Object>} LWA token response.
     */
    #doRefresh = async () => {
        const res = await superagent.post('https://api.amazon.com/auth/o2/token')
            .send(`grant_type=refresh_token&refresh_token=${this.#lwaClientInfo.refreshToken}&client_id=${this.#lwaClientInfo.clientId}&client_secret=${this.#lwaClientInfo.clientSecret}`)
            .set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        return res.body;
    }
}

/**
* Private class used by ApiClient class. Used for executing LWA refresh token flow and calling Tokens API to retrieve RDT.
* @class
*/
class TokensApiClient {
    /**
    * Private member to execute LWA refresh token flow.
    * @type {Object.<LwaOAuthClient>}
    */
    #lwaClient = null;

    /**
    * Private member to store 'dataElements' parameter for Tokens API call.
    * @type {Array.<String>}
    */
    #dataElements = null;

    /**
    * Constructs a new TokensApiClient.
    * @param {String} clientId LWA Client ID.
    * @param {String} clientSecret LWA Client Secret.
    * @param {String} refreshToken LWA Refresh token.
    * @param {Array.<String>} dataElements Optional specifiers for PII data elements tp retrieve.
    */
    constructor(clientId, clientSecret, refreshToken, dataElements) {
        this.#lwaClient = new LwaOAuthClient(clientId, clientSecret, refreshToken, dataElements);
        if (dataElements && !Array.isArray(dataElements)) {
            throw new Error(`dataElements parameter to TokensApiClient constructor must be array of string. Illegal parameter:${dataElements}`);
        }
        this.#dataElements = dataElements ? dataElements : null;
    }

    /**
     * Execute createRestrictedDataToken to retrieve RDT to be used for PII-handling SP-API calls.
     * @param {String} method method for SP-API request.
     * @param {String} url URL for SP-API call to be made.
     * @param {Array.<String>} dataElements specify PII information to get from "buyerInfo", "shippingAddress" and "buyerTaxInformation".
     * @returns {Promise<String>} Restricted Data Token (RDT).
     */
    retrieveRestrictedDataToken = async (method, url) => {
        const accessToken = await this.#lwaClient.retrieveAccessToken();
        const urlToRequest = new URL(url);
        const res = await this.#doCreateRestrictedDataToken(accessToken, method, urlToRequest);
        return res.restrictedDataToken;
    }

     /**
     * Private method to execute createRestrictedDataToken
     * @param {String} accessToken Access token to call RDT request.
     * @param {URL} url URL object for URL string manipulation.
     * @param {Array.<String>} dataElements specify PII information to get from "buyerInfo", "shippingAddress" and "buyerTaxInformation".
     * @returns {Promise<Object>} createRestrictedDataToken response.
     */
    #doCreateRestrictedDataToken = async (accessToken, method, url) => {
        const tokenApiUrl = `${url.origin}/tokens/2021-03-01/restrictedDataToken`;
        const pathToRequest = url.pathname;
        const res = await superagent.post(tokenApiUrl)
            .send(
                {
                    restrictedResources: [
                        {
                            method: method,
                            path: pathToRequest,
                            dataElements: this.#dataElements ? this.#dataElements : undefined,
                        }
                    ]
                }
            ).set("Content-Type", "application/json")
            .set({"x-amz-access-token": accessToken});
        return res.body;
    }
}

/**
* Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
* application to use this class directly - the *Api and model classes provide the public API for the service. The
* contents of this file should be regarded as internal but are documented for completeness.
* @alias module:ApiClient
* @class
*/
export class ApiClient {
    #tokenForApiCall = null;
    #lwaClient = null;
    #rdtClient = null;

    /**
    * Constructs a new ApiClient.
    * @param {String} baseUrl Base URL of endpoint ex. "https://sellingpartnerapi-na.amazon.com"
    */
    constructor(baseUrl) {
        /**
         * The base URL against which to resolve every API call's (relative) path.
         * @type {String}
         * @default https://sellingpartnerapi-na.amazon.com
         */
        this.basePath = baseUrl ? baseUrl.replace(/\/+$/, '') : 'https://sellingpartnerapi-na.amazon.com'.replace(/\/+$/, '');

        /**
         * The authentication methods to be included for all API calls.
         * @type {Array.<String>}
         */
        this.authentications = {
        }

        /**
         * The default HTTP headers to be included for all API calls.
         * @type {Array.<String>}
         * @default {}
         */
        this.defaultHeaders = {};

        /**
         * The default HTTP timeout for all API calls.
         * @type {Number}
         * @default 60000
         */
        this.timeout = 60000;

        /**
         * If set to false an additional timestamp parameter is added to all API GET calls to
         * prevent browser caching
         * @type {Boolean}
         * @default true
         */
        this.cache = true;

        /**
         * If set to true, the client will save the cookies from each server
         * response, and return them in the next request.
         * @default false
         */
        this.enableCookies = false;

        /*
         * Used to save and return cookies in a node.js (non-browser) setting,
         * if this.enableCookies is set to true.
         */
        if (typeof window === 'undefined') {
          this.agent = new superagent.agent();
        }

        /*
         * Allow user to override superagent agent
         */
         this.requestAgent = null;
    }

    /**
    * Returns this ApiClient so that you can chain the methods.
    * @param {String} clientId LWA client ID.
    * @param {String} clientSecret LWA client secret.
    * @param {String} refreshToken LWA refresh token.
    * @param {Array.<String>} dataElementsOption specify PII information to get from "buyerInfo", "shippingAddress" and "buyerTaxInformation".
    * @returns {ApiClient} This ApiClient, which is going to use give accessToken for all API calls.
    */
    enableAutoRetrievalRestrictedDataToken(clientId, clientSecret, refreshToken, dataElementsOption) {
        // TODO
        if (!clientId || !clientSecret || !refreshToken) {
            throw new Error('invalid parameter(s) to enableAutoRetrievalRestrictedDataToken.');
        }
        this.#rdtClient = new TokensApiClient(clientId, clientSecret, refreshToken, dataElementsOption);
        return this;
    }

    /**
    * Returns this ApiClient so that you can chain the methods.
    * @param {String} clientId LWA client ID.
    * @param {String} clientSecret LWA client secret.
    * @param {String} refreshToken LWA refresh token.
    * @returns {ApiClient} This ApiClient, which is going to use give accessToken for all API calls.
    */
    enableAutoRetrievalAccessToken(clientId, clientSecret, refreshToken) {
        if (!clientId || !clientSecret || !refreshToken) {
            throw new Error('invalid parameter(s) to enableAutoRetrievalAccessToken.');
        }
        this.#lwaClient = new LwaOAuthClient(clientId, clientSecret, refreshToken);
        return this;
    }


    /**
    * Returns this ApiClient so that you can chain the methods.
    * @param {String} restrictedDataToken RDT token to use for SP-API call.
    * @returns {ApiClient} This ApiClient, which is going to use give RDT for all API calls.
    */
    applyRestrictedDataToken(restrictedDataToken) {
        this.#tokenForApiCall = restrictedDataToken;
        return this;
    }

    /**
    * Returns a string representation for an actual parameter.
    * @param param The actual parameter.
    * @returns {String} The string representation of <code>param</code>.
    */
    paramToString(param) {
        if (param == undefined || param == null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }

        return param.toString();
    }

    /**
    * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
    * NOTE: query parameters are not handled here.
    * @param {String} path The path to append to the base URL.
    * @param {Object} pathParams The parameter values to append.
    * @returns {String} The encoded path with parameter values substituted.
    */
    buildUrl(path, pathParams) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }

        var url = this.basePath + path;
        url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
            var value;
            if (pathParams.hasOwnProperty(key)) {
                value = this.paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }

            return encodeURIComponent(value);
        });

        return url;
    }

    /**
    * Checks whether the given content type represents JSON.<br>
    * JSON content type examples:<br>
    * <ul>
    * <li>application/json</li>
    * <li>application/json; charset=UTF8</li>
    * <li>APPLICATION/JSON</li>
    * </ul>
    * @param {String} contentType The MIME content type to check.
    * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
    */
    isJsonMime(contentType) {
        return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
    }

    /**
    * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
    * @param {Array.<String>} contentTypes
    * @returns {String} The chosen content type, preferring JSON.
    */
    jsonPreferredMime(contentTypes) {
        for (var i = 0; i < contentTypes.length; i++) {
            if (this.isJsonMime(contentTypes[i])) {
                return contentTypes[i];
            }
        }

        return contentTypes[0];
    }

    /**
    * Checks whether the given parameter value represents file-like content.
    * @param param The parameter to check.
    * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
    */
    isFileParam(param) {
        // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
        if (typeof require === 'function') {
            let fs;
            try {
                fs = require('fs');
            } catch (err) {}
            if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
                return true;
            }
        }

        // Buffer in Node.js
        if (typeof Buffer === 'function' && param instanceof Buffer) {
            return true;
        }

        // Blob in browser
        if (typeof Blob === 'function' && param instanceof Blob) {
            return true;
        }

        // File in browser (it seems File object is also instance of Blob, but keep this for safe)
        if (typeof File === 'function' && param instanceof File) {
            return true;
        }

        return false;
    }

    /**
    * Normalizes parameter values:
    * <ul>
    * <li>remove nils</li>
    * <li>keep files and arrays</li>
    * <li>format to string with `paramToString` for other cases</li>
    * </ul>
    * @param {Object.<String, Object>} params The parameters as object properties.
    * @returns {Object.<String, Object>} normalized parameters.
    */
    normalizeParams(params) {
        var newParams = {};
        for (var key in params) {
            if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
                var value = params[key];
                if (this.isFileParam(value) || Array.isArray(value)) {
                    newParams[key] = value;
                } else {
                    newParams[key] = this.paramToString(value);
                }
            }
        }

        return newParams;
    }

    /**
    * Enumeration of collection format separator strategies.
    * @enum {String}
    * @readonly
    */
    static CollectionFormatEnum = {
        /**
         * Comma-separated values. Value: <code>csv</code>
         * @const
         */
        CSV: ',',

        /**
         * Space-separated values. Value: <code>ssv</code>
         * @const
         */
        SSV: ' ',

        /**
         * Tab-separated values. Value: <code>tsv</code>
         * @const
         */
        TSV: '\t',

        /**
         * Pipe(|)-separated values. Value: <code>pipes</code>
         * @const
         */
        PIPES: '|',

        /**
         * Native array. Value: <code>multi</code>
         * @const
         */
        MULTI: 'multi'
    };

    /**
    * Builds a string representation of an array-type actual parameter, according to the given collection format.
    * @param {Array} param An array parameter.
    * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
    * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
    * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
    */
    buildCollectionParam(param, collectionFormat) {
        if (param == null) {
            return null;
        }
        switch (collectionFormat) {
            case 'csv':
                return param.map(this.paramToString).join(',');
            case 'ssv':
                return param.map(this.paramToString).join(' ');
            case 'tsv':
                return param.map(this.paramToString).join('\t');
            case 'pipes':
                return param.map(this.paramToString).join('|');
            case 'multi':
                //return the array directly as SuperAgent will handle it as expected
                return param.map(this.paramToString);
            default:
                throw new Error('Unknown collection format: ' + collectionFormat);
        }
    }

    /**
    * Applies authentication headers to the request.
    * @param {String} accessOrRdtToken Either Access Token or Restricted Data Token to add as 'x-amz-access-token'.
    * @returns {ApiClient} This ApiClient, which is going to use give RDT for all API calls.
    */
    applyXAmzAccessTokenToRequest(accessOrRdtToken) {
        if (!accessOrRdtToken) {
            throw new Error('empty string, null or undefined passed to applyXAmzAccessTokenToRequest');
        }
        this.#tokenForApiCall = accessOrRdtToken;
        return this;
    }

    /**
    * Deserializes an HTTP response body into a value of the specified type.
    * @param {Object} response A SuperAgent response object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns A value of the specified type.
    */
    deserialize(response, returnType) {
        if (response == null || returnType == null || response.status == 204) {
            return null;
        }

        // Rely on SuperAgent for parsing response body.
        // See http://visionmedia.github.io/superagent/#parsing-response-bodies
        var data = response.body;
        if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
            // SuperAgent does not always produce a body; use the unparsed response as a fallback
            data = response.text;
        }

        return ApiClient.convertToType(data, returnType);
    }

    

    /**
    * Invokes the REST service using the supplied settings and parameters.
    * @param {String} path The base URL to invoke.
    * @param {String} httpMethod The HTTP method to use.
    * @param {Object.<String, String>} pathParams A map of path parameters and their values.
    * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
    * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
    * @param {Object.<String, Object>} formParams A map of form parameters and their values.
    * @param {Object} bodyParam The value to pass as the request body.
    * @param {Array.<String>} contentTypes An array of request MIME types.
    * @param {Array.<String>} accepts An array of acceptable response MIME types.
    * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
    * constructor for a complex type.
    * @returns {Promise} A {@link https://www.promisejs.org/|Promise} object.
    */
    async callApi(path, httpMethod, pathParams,
        queryParams, headerParams, formParams, bodyParam, contentTypes, accepts,
        returnType) {

        var url = this.buildUrl(path, pathParams);
        var request = superagent(httpMethod, url);
        if (!this.#tokenForApiCall && !this.#lwaClient && !this.#rdtClient) {
            throw new Error('none of accessToken, RDT token and auto-retrieval is set.');
        }

        // set query parameters
        if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
            queryParams['_'] = new Date().getTime();
        }

        request.query(this.normalizeParams(queryParams));

        // set header parameters
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

        // set x-amz-access-token header
        if (this.#tokenForApiCall) {
            // add custom header for SP-API call.
            request.set({"x-amz-access-token": this.#tokenForApiCall});
        } else if (this.#rdtClient) {
            const rdt = await this.#rdtClient.retrieveRestrictedDataToken(httpMethod, url);
            request.set({"x-amz-access-token": rdt});
        } else if (this.#lwaClient) {
            // execute token refresh.
            const accessToken = await this.#lwaClient.retrieveAccessToken();
            request.set({"x-amz-access-token": accessToken});
        }

        // set requestAgent if it is set by user
        if (this.requestAgent) {
          request.agent(this.requestAgent);
        }

        // set request timeout
        request.timeout(this.timeout);

        var contentType = this.jsonPreferredMime(contentTypes);
        if (contentType) {
            // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
            if(contentType != 'multipart/form-data') {
                request.type(contentType);
            }
        } else if (!request.header['Content-Type']) {
            request.type('application/json');
        }

        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(querystring.stringify(this.normalizeParams(formParams)));
        } else if (contentType == 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (this.isFileParam(_formParams[key])) {
                        // file field
                        request.attach(key, _formParams[key]);
                    } else {
                        request.field(key, _formParams[key]);
                    }
                }
            }
        } else if (bodyParam) {
            request.send(bodyParam);
        }

        var accept = this.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }

        if (returnType === 'Blob') {
          request.responseType('blob');
        } else if (returnType === 'String') {
          request.responseType('string');
        }

        // Attach previously saved cookies, if enabled
        if (this.enableCookies){
            if (typeof window === 'undefined') {
                this.agent.attachCookies(request);
            }
            else {
                request.withCredentials();
            }
        }

        return new Promise((resolve, reject) => {
            request.end((error, response) => {
                if (error) {
                    reject(error);
                } else {
                    try {
                        var data = this.deserialize(response, returnType);
                        if (this.enableCookies && typeof window === 'undefined'){
                            this.agent.saveCookies(response);
                        }

                        resolve({data, response});
                    } catch (err) {
                        reject(err);
                    }
                }
            });
        });

        
    }

    /**
    * Parses an ISO-8601 string representation of a date value.
    * @param {String} str The date value as a string.
    * @returns {Date} The parsed date object.
    */
    static parseDate(str) {
        return new Date(str);
    }

    /**
    * Converts a value to the specified type.
    * @param {(String|Object)} data The data to convert, as a string or object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns An instance of the specified type or null or undefined if data is null or undefined.
    */
    static convertToType(data, type) {
        if (data === null || data === undefined)
            return data

        switch (type) {
            case 'Boolean':
                return Boolean(data);
            case 'Integer':
                return parseInt(data, 10);
            case 'Number':
                return parseFloat(data);
            case 'String':
                return String(data);
            case 'Date':
                return ApiClient.parseDate(String(data));
            case 'Blob':
                return data;
            default:
                if (type === Object) {
                    // generic object, return directly
                    return data;
                } else if (typeof type === 'function') {
                    // for model type like: User
                    return type.constructFromObject(data);
                } else if (Array.isArray(type)) {
                    // for array type like: ['String']
                    var itemType = type[0];

                    return data.map((item) => {
                        return ApiClient.convertToType(item, itemType);
                    });
                } else if (typeof type === 'object') {
                    // for plain object type like: {'String': 'Integer'}
                    var keyType, valueType;
                    for (var k in type) {
                        if (type.hasOwnProperty(k)) {
                            keyType = k;
                            valueType = type[k];
                            break;
                        }
                    }

                    var result = {};
                    for (var k in data) {
                        if (data.hasOwnProperty(k)) {
                            var key = ApiClient.convertToType(k, keyType);
                            var value = ApiClient.convertToType(data[k], valueType);
                            result[key] = value;
                        }
                    }

                    return result;
                } else {
                    // for unknown type, return the data directly
                    return data;
                }
        }
    }

    /**
    * Constructs a new map or array model from REST data.
    * @param data {Object|Array} The REST data.
    * @param obj {Object|Array} The target object or array.
    */
    static constructFromObject(data, obj, itemType) {
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                if (data.hasOwnProperty(i))
                    obj[i] = ApiClient.convertToType(data[i], itemType);
            }
        } else {
            for (var k in data) {
                if (data.hasOwnProperty(k))
                    obj[k] = ApiClient.convertToType(data[k], itemType);
            }
        }
    }
}
/**
* The default API client implementation.
* @type {module:ApiClient}
*/
ApiClient.instance = new ApiClient();
