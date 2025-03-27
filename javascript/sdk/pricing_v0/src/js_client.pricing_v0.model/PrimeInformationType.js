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

/**
 * The PrimeInformationType model module.
 * @module js_client.pricing_v0.model/PrimeInformationType
 * @version v0
 */
export class PrimeInformationType {
  /**
   * Constructs a new <code>PrimeInformationType</code>.
   * Amazon Prime information.
   * @alias module:js_client.pricing_v0.model/PrimeInformationType
   * @class
   * @param isPrime {Boolean} Indicates whether the offer is an Amazon Prime offer.
   * @param isNationalPrime {Boolean} Indicates whether the offer is an Amazon Prime offer throughout the entire marketplace where it is listed.
   */
  constructor(isPrime, isNationalPrime) {
    this.isPrime = isPrime;
    this.isNationalPrime = isNationalPrime;
  }

  /**
   * Constructs a <code>PrimeInformationType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.pricing_v0.model/PrimeInformationType} obj Optional instance to populate.
   * @return {module:js_client.pricing_v0.model/PrimeInformationType} The populated <code>PrimeInformationType</code> instance.
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
      obj = obj || new PrimeInformationType();
      if (data.hasOwnProperty('IsPrime'))
        obj.isPrime = ApiClient.convertToType(data['IsPrime'], 'Boolean');
      if (data.hasOwnProperty('IsNationalPrime'))
        obj.isNationalPrime = ApiClient.convertToType(data['IsNationalPrime'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Indicates whether the offer is an Amazon Prime offer.
 * @member {Boolean} isPrime
 */
PrimeInformationType.prototype.isPrime = undefined;

/**
 * Indicates whether the offer is an Amazon Prime offer throughout the entire marketplace where it is listed.
 * @member {Boolean} isNationalPrime
 */
PrimeInformationType.prototype.isNationalPrime = undefined;


