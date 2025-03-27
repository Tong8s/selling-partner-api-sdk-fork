/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {MoneyType} from './MoneyType.js';
import {Points} from './Points.js';

/**
 * The PriceType model module.
 * @module js_client.pricing_v0.model/PriceType
 * @version v0
 */
export class PriceType {
  /**
   * Constructs a new <code>PriceType</code>.
   * Schema for item&#39;s price information, including listing price, shipping price, and Amazon points.
   * @alias module:js_client.pricing_v0.model/PriceType
   * @class
   * @param listingPrice {module:js_client.pricing_v0.model/MoneyType} 
   */
  constructor(listingPrice) {
    this.listingPrice = listingPrice;
  }

  /**
   * Constructs a <code>PriceType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.pricing_v0.model/PriceType} obj Optional instance to populate.
   * @return {module:js_client.pricing_v0.model/PriceType} The populated <code>PriceType</code> instance.
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
      obj = obj || new PriceType();
      if (data.hasOwnProperty('LandedPrice'))
        obj.landedPrice = MoneyType.constructFromObject(data['LandedPrice']);
      if (data.hasOwnProperty('ListingPrice'))
        obj.listingPrice = MoneyType.constructFromObject(data['ListingPrice']);
      if (data.hasOwnProperty('Shipping'))
        obj.shipping = MoneyType.constructFromObject(data['Shipping']);
      if (data.hasOwnProperty('Points'))
        obj.points = Points.constructFromObject(data['Points']);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.pricing_v0.model/MoneyType} landedPrice
 */
PriceType.prototype.landedPrice = undefined;

/**
 * @member {module:js_client.pricing_v0.model/MoneyType} listingPrice
 */
PriceType.prototype.listingPrice = undefined;

/**
 * @member {module:js_client.pricing_v0.model/MoneyType} shipping
 */
PriceType.prototype.shipping = undefined;

/**
 * @member {module:js_client.pricing_v0.model/Points} points
 */
PriceType.prototype.points = undefined;


