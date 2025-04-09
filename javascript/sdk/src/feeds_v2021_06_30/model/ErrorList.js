/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * The version of the OpenAPI document: 2021-06-30
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
 * @module feeds_v2021_06_30/model/ErrorList
 * @version 2021-06-30
 */
export class ErrorList {
  /**
   * Constructs a new <code>ErrorList</code>.
   * A list of error responses returned when a request is unsuccessful.
   * @alias module:feeds_v2021_06_30/model/ErrorList
   * @class
   * @param errors {Array.<module:feeds_v2021_06_30/model/Error>} An error response returned when the request is unsuccessful.
   */
  constructor(errors) {
    this.errors = errors;
  }

  /**
   * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:feeds_v2021_06_30/model/ErrorList} obj Optional instance to populate.
   * @return {module:feeds_v2021_06_30/model/ErrorList} The populated <code>ErrorList</code> instance.
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
 * An error response returned when the request is unsuccessful.
 * @member {Array.<module:feeds_v2021_06_30/model/Error>} errors
 */
ErrorList.prototype.errors = undefined;


