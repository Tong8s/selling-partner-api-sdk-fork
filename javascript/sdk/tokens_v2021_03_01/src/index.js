/**
 * Selling Partner API for Tokens 
 * The Selling Partner API for Tokens provides a secure way to access a customer's PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-03-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {CreateRestrictedDataTokenRequest} from './js_client.tokens_v2021_03_01.model/CreateRestrictedDataTokenRequest.js';
import {CreateRestrictedDataTokenResponse} from './js_client.tokens_v2021_03_01.model/CreateRestrictedDataTokenResponse.js';
import {Error} from './js_client.tokens_v2021_03_01.model/Error.js';
import {ErrorList} from './js_client.tokens_v2021_03_01.model/ErrorList.js';
import {RestrictedResource} from './js_client.tokens_v2021_03_01.model/RestrictedResource.js';
import {TokensApi} from './js_client.tokens_v2021_03_01.api/TokensApi.js';


/**
* The Selling Partner API for Tokens provides a secure way to access a customer&#39;s PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide)..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* @module index
* @version 2021-03-01
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CreateRestrictedDataTokenRequest model constructor.
     * @property {module:js_client.tokens_v2021_03_01.model/CreateRestrictedDataTokenRequest}
     */
    CreateRestrictedDataTokenRequest,

    /**
     * The CreateRestrictedDataTokenResponse model constructor.
     * @property {module:js_client.tokens_v2021_03_01.model/CreateRestrictedDataTokenResponse}
     */
    CreateRestrictedDataTokenResponse,

    /**
     * The Error model constructor.
     * @property {module:js_client.tokens_v2021_03_01.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:js_client.tokens_v2021_03_01.model/ErrorList}
     */
    ErrorList,

    /**
     * The RestrictedResource model constructor.
     * @property {module:js_client.tokens_v2021_03_01.model/RestrictedResource}
     */
    RestrictedResource,

    /**
    * The TokensApi service constructor.
    * @property {module:js_client.tokens_v2021_03_01.api/TokensApi}
    */
    TokensApi
};
