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
import {ItemOffersResponse} from './ItemOffersResponse.js';

/**
 * The GetItemOffersBatchResponse model module.
 * @module js_client.pricing_v0.model/GetItemOffersBatchResponse
 * @version v0
 */
export class GetItemOffersBatchResponse {
  /**
   * Constructs a new <code>GetItemOffersBatchResponse</code>.
   * The response associated with the &#x60;getItemOffersBatch&#x60; API call.
   * @alias module:js_client.pricing_v0.model/GetItemOffersBatchResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetItemOffersBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.pricing_v0.model/GetItemOffersBatchResponse} obj Optional instance to populate.
   * @return {module:js_client.pricing_v0.model/GetItemOffersBatchResponse} The populated <code>GetItemOffersBatchResponse</code> instance.
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
      obj = obj || new GetItemOffersBatchResponse();
      if (data.hasOwnProperty('responses'))
        obj.responses = ApiClient.convertToType(data['responses'], [ItemOffersResponse]);
    }
    return obj;
  }
}

/**
 * A list of `getItemOffers` batched responses.
 * @member {Array.<module:js_client.pricing_v0.model/ItemOffersResponse>} responses
 */
GetItemOffersBatchResponse.prototype.responses = undefined;


