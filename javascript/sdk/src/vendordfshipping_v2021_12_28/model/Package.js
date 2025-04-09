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

/**
 * The Package model module.
 * @module vendordfshipping_v2021_12_28/model/Package
 * @version 2021-12-28
 */
export class Package {
  /**
   * Constructs a new <code>Package</code>.
   * The package that is associated with the container.
   * @alias module:vendordfshipping_v2021_12_28/model/Package
   * @class
   * @param packageTrackingNumber {String} The tracking number on the label of shipment package, that you can fetch from the `shippingLabels` response. You can also scan the bar code on the shipping label to get the tracking number.
   */
  constructor(packageTrackingNumber) {
    this.packageTrackingNumber = packageTrackingNumber;
  }

  /**
   * Constructs a <code>Package</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordfshipping_v2021_12_28/model/Package} obj Optional instance to populate.
   * @return {module:vendordfshipping_v2021_12_28/model/Package} The populated <code>Package</code> instance.
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
      obj = obj || new Package();
      if (data.hasOwnProperty('packageTrackingNumber'))
        obj.packageTrackingNumber = ApiClient.convertToType(data['packageTrackingNumber'], 'String');
    }
    return obj;
  }
}

/**
 * The tracking number on the label of shipment package, that you can fetch from the `shippingLabels` response. You can also scan the bar code on the shipping label to get the tracking number.
 * @member {String} packageTrackingNumber
 */
Package.prototype.packageTrackingNumber = undefined;


