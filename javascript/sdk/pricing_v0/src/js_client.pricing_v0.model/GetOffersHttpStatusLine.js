/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The GetOffersHttpStatusLine model module.
 * @module js_client.pricing_v0.model/GetOffersHttpStatusLine
 * @version v0
 */
export class GetOffersHttpStatusLine {
  /**
   * Constructs a new <code>GetOffersHttpStatusLine</code>.
   * The HTTP status line associated with the response.  For more information, consult [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html).
   * @alias module:js_client.pricing_v0.model/GetOffersHttpStatusLine
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetOffersHttpStatusLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.pricing_v0.model/GetOffersHttpStatusLine} obj Optional instance to populate.
   * @return {module:js_client.pricing_v0.model/GetOffersHttpStatusLine} The populated <code>GetOffersHttpStatusLine</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new GetOffersHttpStatusLine();
      if (data.hasOwnProperty('statusCode'))
        obj.statusCode = ApiClient.convertToType(data['statusCode'], 'Number');
      if (data.hasOwnProperty('reasonPhrase'))
        obj.reasonPhrase = ApiClient.convertToType(data['reasonPhrase'], 'String');
    }
    return obj;
  }
}

/**
 * The HTTP response Status Code.
 * @member {Number} statusCode
 */
GetOffersHttpStatusLine.prototype.statusCode = undefined;

/**
 * The HTTP response Reason-Phase.
 * @member {String} reasonPhrase
 */
GetOffersHttpStatusLine.prototype.reasonPhrase = undefined;


