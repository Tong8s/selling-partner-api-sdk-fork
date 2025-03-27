/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The Currency model module.
 * @module js_client.fulfillmentinbound_v2024_03_20.model/Currency
 * @version 2024-03-20
 */
export class Currency {
  /**
   * Constructs a new <code>Currency</code>.
   * The type and amount of currency.
   * @alias module:js_client.fulfillmentinbound_v2024_03_20.model/Currency
   * @class
   * @param amount {Number} Decimal value of the currency.
   * @param code {String} ISO 4217 standard of a currency code.
   */
  constructor(amount, code) {
    this.amount = amount;
    this.code = code;
  }

  /**
   * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v2024_03_20.model/Currency} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/Currency} The populated <code>Currency</code> instance.
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
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
    }
    return obj;
  }
}

/**
 * Decimal value of the currency.
 * @member {Number} amount
 */
Currency.prototype.amount = undefined;

/**
 * ISO 4217 standard of a currency code.
 * @member {String} code
 */
Currency.prototype.code = undefined;


