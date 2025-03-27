/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The FulfillmentTime model module.
 * @module js_client.services_v1.model/FulfillmentTime
 * @version v1
 */
export class FulfillmentTime {
  /**
   * Constructs a new <code>FulfillmentTime</code>.
   * Input for fulfillment time details
   * @alias module:js_client.services_v1.model/FulfillmentTime
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FulfillmentTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.services_v1.model/FulfillmentTime} obj Optional instance to populate.
   * @return {module:js_client.services_v1.model/FulfillmentTime} The populated <code>FulfillmentTime</code> instance.
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
      obj = obj || new FulfillmentTime();
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'Date');
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'Date');
    }
    return obj;
  }
}

/**
 * The date, time in UTC of the fulfillment start time in ISO 8601 format.
 * @member {Date} startTime
 */
FulfillmentTime.prototype.startTime = undefined;

/**
 * The date, time in UTC of the fulfillment end time in ISO 8601 format.
 * @member {Date} endTime
 */
FulfillmentTime.prototype.endTime = undefined;


