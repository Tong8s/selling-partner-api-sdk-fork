/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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
import {Error} from './Error.js';
import {GetEligibleShipmentServicesResult} from './GetEligibleShipmentServicesResult.js';

/**
 * The GetEligibleShipmentServicesResponse model module.
 * @module js_client.merchantfulfillment_v0.model/GetEligibleShipmentServicesResponse
 * @version v0
 */
export class GetEligibleShipmentServicesResponse {
  /**
   * Constructs a new <code>GetEligibleShipmentServicesResponse</code>.
   * Response schema.
   * @alias module:js_client.merchantfulfillment_v0.model/GetEligibleShipmentServicesResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetEligibleShipmentServicesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.merchantfulfillment_v0.model/GetEligibleShipmentServicesResponse} obj Optional instance to populate.
   * @return {module:js_client.merchantfulfillment_v0.model/GetEligibleShipmentServicesResponse} The populated <code>GetEligibleShipmentServicesResponse</code> instance.
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
      obj = obj || new GetEligibleShipmentServicesResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = GetEligibleShipmentServicesResult.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.merchantfulfillment_v0.model/GetEligibleShipmentServicesResult} payload
 */
GetEligibleShipmentServicesResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:js_client.merchantfulfillment_v0.model/Error>} errors
 */
GetEligibleShipmentServicesResponse.prototype.errors = undefined;


