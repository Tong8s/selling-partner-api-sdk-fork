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
import {FulfillmentOrderStatus} from './FulfillmentOrderStatus.js';

/**
 * The SubmitFulfillmentOrderStatusUpdateRequest model module.
 * @module js_client.fulfillmentoutbound_v2020_07_01.model/SubmitFulfillmentOrderStatusUpdateRequest
 * @version 2020-07-01
 */
export class SubmitFulfillmentOrderStatusUpdateRequest {
  /**
   * Constructs a new <code>SubmitFulfillmentOrderStatusUpdateRequest</code>.
   * The request body schema for the &#x60;submitFulfillmentOrderStatusUpdate&#x60; operation.
   * @alias module:js_client.fulfillmentoutbound_v2020_07_01.model/SubmitFulfillmentOrderStatusUpdateRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubmitFulfillmentOrderStatusUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentoutbound_v2020_07_01.model/SubmitFulfillmentOrderStatusUpdateRequest} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentoutbound_v2020_07_01.model/SubmitFulfillmentOrderStatusUpdateRequest} The populated <code>SubmitFulfillmentOrderStatusUpdateRequest</code> instance.
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
      obj = obj || new SubmitFulfillmentOrderStatusUpdateRequest();
      if (data.hasOwnProperty('fulfillmentOrderStatus'))
        obj.fulfillmentOrderStatus = FulfillmentOrderStatus.constructFromObject(data['fulfillmentOrderStatus']);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentOrderStatus} fulfillmentOrderStatus
 */
SubmitFulfillmentOrderStatusUpdateRequest.prototype.fulfillmentOrderStatus = undefined;


