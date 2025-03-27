/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
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
 * The Errors model module.
 * @module js_client.pricing_v2022_05_01.model/Errors
 * @version 2022-05-01
 */
export class Errors {
  /**
   * Constructs a new <code>Errors</code>.
   * A list of error responses returned when a request is unsuccessful.
   * @alias module:js_client.pricing_v2022_05_01.model/Errors
   * @class
   * @param errors {Array.<module:js_client.pricing_v2022_05_01.model/Error>} A list of error responses that are returned when a request is unsuccessful.
   */
  constructor(errors) {
    this.errors = errors;
  }

  /**
   * Constructs a <code>Errors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.pricing_v2022_05_01.model/Errors} obj Optional instance to populate.
   * @return {module:js_client.pricing_v2022_05_01.model/Errors} The populated <code>Errors</code> instance.
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
      obj = obj || new Errors();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * A list of error responses that are returned when a request is unsuccessful.
 * @member {Array.<module:js_client.pricing_v2022_05_01.model/Error>} errors
 */
Errors.prototype.errors = undefined;


