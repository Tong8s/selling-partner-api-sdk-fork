/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The Currency model module.
 * @module js_client.shipping_v2.model/Currency
 * @version v2
 */
export class Currency {
  /**
   * Constructs a new <code>Currency</code>.
   * The monetary value in the currency indicated, in ISO 4217 standard format.
   * @alias module:js_client.shipping_v2.model/Currency
   * @class
   * @param value {Number} The monetary value.
   * @param unit {String} The ISO 4217 format 3-character currency code.
   */
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  /**
   * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.shipping_v2.model/Currency} obj Optional instance to populate.
   * @return {module:js_client.shipping_v2.model/Currency} The populated <code>Currency</code> instance.
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
      obj = obj || new Currency();
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
    }
    return obj;
  }
}

/**
 * The monetary value.
 * @member {Number} value
 */
Currency.prototype.value = undefined;

/**
 * The ISO 4217 format 3-character currency code.
 * @member {String} unit
 */
Currency.prototype.unit = undefined;


