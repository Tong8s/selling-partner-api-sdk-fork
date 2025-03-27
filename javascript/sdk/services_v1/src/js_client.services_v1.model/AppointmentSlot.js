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
 * The AppointmentSlot model module.
 * @module js_client.services_v1.model/AppointmentSlot
 * @version v1
 */
export class AppointmentSlot {
  /**
   * Constructs a new <code>AppointmentSlot</code>.
   * A time window along with associated capacity in which the service can be performed.
   * @alias module:js_client.services_v1.model/AppointmentSlot
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AppointmentSlot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.services_v1.model/AppointmentSlot} obj Optional instance to populate.
   * @return {module:js_client.services_v1.model/AppointmentSlot} The populated <code>AppointmentSlot</code> instance.
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
      obj = obj || new AppointmentSlot();
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'Date');
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'Date');
      if (data.hasOwnProperty('capacity'))
        obj.capacity = ApiClient.convertToType(data['capacity'], 'Number');
    }
    return obj;
  }
}

/**
 * Time window start time in ISO 8601 format.
 * @member {Date} startTime
 */
AppointmentSlot.prototype.startTime = undefined;

/**
 * Time window end time in ISO 8601 format.
 * @member {Date} endTime
 */
AppointmentSlot.prototype.endTime = undefined;

/**
 * Number of resources for which a slot can be reserved.
 * @member {Number} capacity
 */
AppointmentSlot.prototype.capacity = undefined;


