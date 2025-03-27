/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Pagination} from './Pagination.js';
import {ShippingLabel} from './ShippingLabel.js';

/**
 * The ShippingLabelList model module.
 * @module js_client.vendordfshipping_v2021_12_28.model/ShippingLabelList
 * @version 2021-12-28
 */
export class ShippingLabelList {
  /**
   * Constructs a new <code>ShippingLabelList</code>.
   * Response payload with the list of shipping labels.
   * @alias module:js_client.vendordfshipping_v2021_12_28.model/ShippingLabelList
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShippingLabelList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendordfshipping_v2021_12_28.model/ShippingLabelList} obj Optional instance to populate.
   * @return {module:js_client.vendordfshipping_v2021_12_28.model/ShippingLabelList} The populated <code>ShippingLabelList</code> instance.
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
      obj = obj || new ShippingLabelList();
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
      if (data.hasOwnProperty('shippingLabels'))
        obj.shippingLabels = ApiClient.convertToType(data['shippingLabels'], [ShippingLabel]);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.vendordfshipping_v2021_12_28.model/Pagination} pagination
 */
ShippingLabelList.prototype.pagination = undefined;

/**
 * An array containing the details of the generated shipping labels.
 * @member {Array.<module:js_client.vendordfshipping_v2021_12_28.model/ShippingLabel>} shippingLabels
 */
ShippingLabelList.prototype.shippingLabels = undefined;


