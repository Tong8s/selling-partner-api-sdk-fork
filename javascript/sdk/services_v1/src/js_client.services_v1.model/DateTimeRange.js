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
 * The DateTimeRange model module.
 * @module js_client.services_v1.model/DateTimeRange
 * @version v1
 */
export class DateTimeRange {
  /**
   * Constructs a new <code>DateTimeRange</code>.
   * A range of time.
   * @alias module:js_client.services_v1.model/DateTimeRange
   * @class
   * @param startTime {Date} The beginning of the time range. Must be in UTC in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
   * @param endTime {Date} The end of the time range. Must be in UTC in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
   */
  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  /**
   * Constructs a <code>DateTimeRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.services_v1.model/DateTimeRange} obj Optional instance to populate.
   * @return {module:js_client.services_v1.model/DateTimeRange} The populated <code>DateTimeRange</code> instance.
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
      obj = obj || new DateTimeRange();
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'Date');
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'Date');
    }
    return obj;
  }
}

/**
 * The beginning of the time range. Must be in UTC in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
 * @member {Date} startTime
 */
DateTimeRange.prototype.startTime = undefined;

/**
 * The end of the time range. Must be in UTC in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
 * @member {Date} endTime
 */
DateTimeRange.prototype.endTime = undefined;


