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
import {Error} from './Error.js';

/**
 * The ErrorList model module.
 * @module supplysources_v2020_07_01/model/ErrorList
 * @version 2020-07-01
 */
export class ErrorList {
  /**
   * Constructs a new <code>ErrorList</code>.
   * A list of error responses returned when a request is unsuccessful.
   * @alias module:supplysources_v2020_07_01/model/ErrorList
   * @class
   * @param errors {Array.<module:supplysources_v2020_07_01/model/Error>} A list of error responses returned when a request is unsuccessful.
   */
  constructor(errors) {
    this.errors = errors;
  }

  /**
   * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplysources_v2020_07_01/model/ErrorList} obj Optional instance to populate.
   * @return {module:supplysources_v2020_07_01/model/ErrorList} The populated <code>ErrorList</code> instance.
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
      obj = obj || new ErrorList();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:supplysources_v2020_07_01/model/Error>} errors
 */
ErrorList.prototype.errors = undefined;


