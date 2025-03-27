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
import {Money} from './Money.js';

/**
 * The TaxDetails model module.
 * @module js_client.vendordforders_v2021_12_28.model/TaxDetails
 * @version 2021-12-28
 */
export class TaxDetails {
  /**
   * Constructs a new <code>TaxDetails</code>.
   * The tax details for the order. _Note:_ Amazon calculates tax on the list price (Amazon retail price).
   * @alias module:js_client.vendordforders_v2021_12_28.model/TaxDetails
   * @class
   * @param taxAmount {module:js_client.vendordforders_v2021_12_28.model/Money} 
   */
  constructor(taxAmount) {
    this.taxAmount = taxAmount;
  }

  /**
   * Constructs a <code>TaxDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendordforders_v2021_12_28.model/TaxDetails} obj Optional instance to populate.
   * @return {module:js_client.vendordforders_v2021_12_28.model/TaxDetails} The populated <code>TaxDetails</code> instance.
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
      obj = obj || new TaxDetails();
      if (data.hasOwnProperty('taxRate'))
        obj.taxRate = ApiClient.convertToType(data['taxRate'], 'String');
      if (data.hasOwnProperty('taxAmount'))
        obj.taxAmount = Money.constructFromObject(data['taxAmount']);
      if (data.hasOwnProperty('taxableAmount'))
        obj.taxableAmount = Money.constructFromObject(data['taxableAmount']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.
 * @member {String} taxRate
 */
TaxDetails.prototype.taxRate = undefined;

/**
 * @member {module:js_client.vendordforders_v2021_12_28.model/Money} taxAmount
 */
TaxDetails.prototype.taxAmount = undefined;

/**
 * @member {module:js_client.vendordforders_v2021_12_28.model/Money} taxableAmount
 */
TaxDetails.prototype.taxableAmount = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
TaxDetails['TypeEnum'] = {

    /**
     * value: "CONSUMPTION"
     * @const
     */
    "CONSUMPTION": "CONSUMPTION",

    /**
     * value: "GST"
     * @const
     */
    "GST": "GST",

    /**
     * value: "MwSt."
     * @const
     */
    "MwSt.": "MwSt.",

    /**
     * value: "PST"
     * @const
     */
    "PST": "PST",

    /**
     * value: "TOTAL"
     * @const
     */
    "TOTAL": "TOTAL",

    /**
     * value: "TVA"
     * @const
     */
    "TVA": "TVA",

    /**
     * value: "VAT"
     * @const
     */
    "VAT": "VAT"
};

/**
 * Tax type.
 * @member {module:js_client.vendordforders_v2021_12_28.model/TaxDetails.TypeEnum} type
 */
TaxDetails.prototype.type = undefined;


