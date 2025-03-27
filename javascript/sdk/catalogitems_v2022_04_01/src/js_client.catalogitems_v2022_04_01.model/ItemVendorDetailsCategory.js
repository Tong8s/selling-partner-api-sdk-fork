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
 * The ItemVendorDetailsCategory model module.
 * @module js_client.catalogitems_v2022_04_01.model/ItemVendorDetailsCategory
 * @version 2022-04-01
 */
export class ItemVendorDetailsCategory {
  /**
   * Constructs a new <code>ItemVendorDetailsCategory</code>.
   * The product category or subcategory that is associated with an Amazon catalog item.
   * @alias module:js_client.catalogitems_v2022_04_01.model/ItemVendorDetailsCategory
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ItemVendorDetailsCategory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.catalogitems_v2022_04_01.model/ItemVendorDetailsCategory} obj Optional instance to populate.
   * @return {module:js_client.catalogitems_v2022_04_01.model/ItemVendorDetailsCategory} The populated <code>ItemVendorDetailsCategory</code> instance.
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
      obj = obj || new ItemVendorDetailsCategory();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * The display name of the product category or subcategory.
 * @member {String} displayName
 */
ItemVendorDetailsCategory.prototype.displayName = undefined;

/**
 * The code that identifies the product category or subcategory.
 * @member {String} value
 */
ItemVendorDetailsCategory.prototype.value = undefined;


