/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
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
 * @module apluscontent_v2020_11_01/model/ErrorList
 * @version 2020-11-01
 */
export class ErrorList {
  /**
   * Constructs a new <code>ErrorList</code>.
   * The error response that is returned when a request is unsuccessful.
   * @alias module:apluscontent_v2020_11_01/model/ErrorList
   * @class
   * @param errors {Array.<module:apluscontent_v2020_11_01/model/Error>} A list of error responses that are returned when a request is unsuccessful.
   */
  constructor(errors) {
    this.errors = errors;
  }

  /**
   * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/ErrorList} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/ErrorList} The populated <code>ErrorList</code> instance.
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
 * A list of error responses that are returned when a request is unsuccessful.
 * @member {Array.<module:apluscontent_v2020_11_01/model/Error>} errors
 */
ErrorList.prototype.errors = undefined;


