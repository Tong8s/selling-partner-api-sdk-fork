/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Error} from './Error.js';

/**
 * The CancelFulfillmentOrderResponse model module.
 * @module js_client.fulfillmentoutbound_v2020_07_01.model/CancelFulfillmentOrderResponse
 * @version 2020-07-01
 */
export class CancelFulfillmentOrderResponse {
  /**
   * Constructs a new <code>CancelFulfillmentOrderResponse</code>.
   * The response schema for the &#x60;cancelFulfillmentOrder&#x60; operation.
   * @alias module:js_client.fulfillmentoutbound_v2020_07_01.model/CancelFulfillmentOrderResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CancelFulfillmentOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentoutbound_v2020_07_01.model/CancelFulfillmentOrderResponse} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentoutbound_v2020_07_01.model/CancelFulfillmentOrderResponse} The populated <code>CancelFulfillmentOrderResponse</code> instance.
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
      obj = obj || new CancelFulfillmentOrderResponse();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:js_client.fulfillmentoutbound_v2020_07_01.model/Error>} errors
 */
CancelFulfillmentOrderResponse.prototype.errors = undefined;


