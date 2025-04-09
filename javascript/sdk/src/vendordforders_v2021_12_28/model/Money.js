/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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
 * The Money model module.
 * @module vendordforders_v2021_12_28/model/Money
 * @version 2021-12-28
 */
export class Money {
  /**
   * Constructs a new <code>Money</code>.
   * An amount of money, including units in the form of currency.
   * @alias module:vendordforders_v2021_12_28/model/Money
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Money</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordforders_v2021_12_28/model/Money} obj Optional instance to populate.
   * @return {module:vendordforders_v2021_12_28/model/Money} The populated <code>Money</code> instance.
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
      obj = obj || new Money();
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'String');
    }
    return obj;
  }
}

/**
 * Three digit currency code in ISO 4217 format. String of length 3.
 * @member {String} currencyCode
 */
Money.prototype.currencyCode = undefined;

/**
 * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.
 * @member {String} amount
 */
Money.prototype.amount = undefined;


