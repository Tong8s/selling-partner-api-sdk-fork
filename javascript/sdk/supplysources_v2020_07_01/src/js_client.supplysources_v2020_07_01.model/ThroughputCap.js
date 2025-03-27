/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
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
import {TimeUnit} from './TimeUnit.js';

/**
 * The ThroughputCap model module.
 * @module js_client.supplysources_v2020_07_01.model/ThroughputCap
 * @version 2020-07-01
 */
export class ThroughputCap {
  /**
   * Constructs a new <code>ThroughputCap</code>.
   * The throughput capacity
   * @alias module:js_client.supplysources_v2020_07_01.model/ThroughputCap
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ThroughputCap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.supplysources_v2020_07_01.model/ThroughputCap} obj Optional instance to populate.
   * @return {module:js_client.supplysources_v2020_07_01.model/ThroughputCap} The populated <code>ThroughputCap</code> instance.
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
      obj = obj || new ThroughputCap();
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('timeUnit'))
        obj.timeUnit = TimeUnit.constructFromObject(data['timeUnit']);
    }
    return obj;
  }
}

/**
 * An unsigned integer that can be only positive or zero.
 * @member {Number} value
 */
ThroughputCap.prototype.value = undefined;

/**
 * @member {module:js_client.supplysources_v2020_07_01.model/TimeUnit} timeUnit
 */
ThroughputCap.prototype.timeUnit = undefined;


