/**
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The Error model module.
 * @module catalogitems_v2022_04_01/model/Error
 * @version 2022-04-01
 */
export class Error {
  /**
   * Constructs a new <code>Error</code>.
   * Error response returned when the request is unsuccessful.
   * @alias module:catalogitems_v2022_04_01/model/Error
   * @class
   * @param code {String} An error code that identifies the type of error that occurred.
   * @param message {String} A message that describes the error condition.
   */
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogitems_v2022_04_01/model/Error} obj Optional instance to populate.
   * @return {module:catalogitems_v2022_04_01/model/Error} The populated <code>Error</code> instance.
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
      obj = obj || new Error();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], 'String');
    }
    return obj;
  }
}

/**
 * An error code that identifies the type of error that occurred.
 * @member {String} code
 */
Error.prototype.code = undefined;

/**
 * A message that describes the error condition.
 * @member {String} message
 */
Error.prototype.message = undefined;

/**
 * Additional details that can help the caller understand or fix the issue.
 * @member {String} details
 */
Error.prototype.details = undefined;


