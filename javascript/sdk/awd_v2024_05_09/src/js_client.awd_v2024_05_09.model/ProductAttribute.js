/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The ProductAttribute model module.
 * @module js_client.awd_v2024_05_09.model/ProductAttribute
 * @version 2024-05-09
 */
export class ProductAttribute {
  /**
   * Constructs a new <code>ProductAttribute</code>.
   * Product instance attribute that is not described at the SKU level in the catalog.
   * @alias module:js_client.awd_v2024_05_09.model/ProductAttribute
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProductAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.awd_v2024_05_09.model/ProductAttribute} obj Optional instance to populate.
   * @return {module:js_client.awd_v2024_05_09.model/ProductAttribute} The populated <code>ProductAttribute</code> instance.
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
      obj = obj || new ProductAttribute();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * Product attribute name.
 * @member {String} name
 */
ProductAttribute.prototype.name = undefined;

/**
 * Product attribute value.
 * @member {String} value
 */
ProductAttribute.prototype.value = undefined;


