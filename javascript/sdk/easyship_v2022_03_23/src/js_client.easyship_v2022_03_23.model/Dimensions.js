/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {UnitOfLength} from './UnitOfLength.js';

/**
 * The Dimensions model module.
 * @module js_client.easyship_v2022_03_23.model/Dimensions
 * @version 2022-03-23
 */
export class Dimensions {
  /**
   * Constructs a new <code>Dimensions</code>.
   * The dimensions of the scheduled package.
   * @alias module:js_client.easyship_v2022_03_23.model/Dimensions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Dimensions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.easyship_v2022_03_23.model/Dimensions} obj Optional instance to populate.
   * @return {module:js_client.easyship_v2022_03_23.model/Dimensions} The populated <code>Dimensions</code> instance.
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
      obj = obj || new Dimensions();
      if (data.hasOwnProperty('length'))
        obj.length = ApiClient.convertToType(data['length'], 'Number');
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('unit'))
        obj.unit = UnitOfLength.constructFromObject(data['unit']);
      if (data.hasOwnProperty('identifier'))
        obj.identifier = ApiClient.convertToType(data['identifier'], 'String');
    }
    return obj;
  }
}

/**
 * The numerical value of the specified dimension.
 * @member {Number} length
 */
Dimensions.prototype.length = undefined;

/**
 * The numerical value of the specified dimension.
 * @member {Number} width
 */
Dimensions.prototype.width = undefined;

/**
 * The numerical value of the specified dimension.
 * @member {Number} height
 */
Dimensions.prototype.height = undefined;

/**
 * @member {module:js_client.easyship_v2022_03_23.model/UnitOfLength} unit
 */
Dimensions.prototype.unit = undefined;

/**
 * A string of up to 255 characters.
 * @member {String} identifier
 */
Dimensions.prototype.identifier = undefined;


