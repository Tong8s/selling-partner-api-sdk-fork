/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The Address model module.
 * @module js_client.supplysources_v2020_07_01.model/Address
 * @version 2020-07-01
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * A physical address.
   * @alias module:js_client.supplysources_v2020_07_01.model/Address
   * @class
   * @param name {String} The name of the person, business or institution at that address.
   * @param addressLine1 {String} The first line of the address.
   * @param stateOrRegion {String} The state or region where person, business or institution is located.
   * @param countryCode {String} The two digit country code. In ISO 3166-1 alpha-2 format.
   */
  constructor(name, addressLine1, stateOrRegion, countryCode) {
    this.name = name;
    this.addressLine1 = addressLine1;
    this.stateOrRegion = stateOrRegion;
    this.countryCode = countryCode;
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.supplysources_v2020_07_01.model/Address} obj Optional instance to populate.
   * @return {module:js_client.supplysources_v2020_07_01.model/Address} The populated <code>Address</code> instance.
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
      obj = obj || new Address();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('addressLine1'))
        obj.addressLine1 = ApiClient.convertToType(data['addressLine1'], 'String');
      if (data.hasOwnProperty('addressLine2'))
        obj.addressLine2 = ApiClient.convertToType(data['addressLine2'], 'String');
      if (data.hasOwnProperty('addressLine3'))
        obj.addressLine3 = ApiClient.convertToType(data['addressLine3'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('county'))
        obj.county = ApiClient.convertToType(data['county'], 'String');
      if (data.hasOwnProperty('district'))
        obj.district = ApiClient.convertToType(data['district'], 'String');
      if (data.hasOwnProperty('stateOrRegion'))
        obj.stateOrRegion = ApiClient.convertToType(data['stateOrRegion'], 'String');
      if (data.hasOwnProperty('postalCode'))
        obj.postalCode = ApiClient.convertToType(data['postalCode'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the person, business or institution at that address.
 * @member {String} name
 */
Address.prototype.name = undefined;

/**
 * The first line of the address.
 * @member {String} addressLine1
 */
Address.prototype.addressLine1 = undefined;

/**
 * The additional address information, if required.
 * @member {String} addressLine2
 */
Address.prototype.addressLine2 = undefined;

/**
 * The additional address information, if required.
 * @member {String} addressLine3
 */
Address.prototype.addressLine3 = undefined;

/**
 * The city where the person, business or institution is located.
 * @member {String} city
 */
Address.prototype.city = undefined;

/**
 * The county where person, business or institution is located.
 * @member {String} county
 */
Address.prototype.county = undefined;

/**
 * The district where person, business or institution is located.
 * @member {String} district
 */
Address.prototype.district = undefined;

/**
 * The state or region where person, business or institution is located.
 * @member {String} stateOrRegion
 */
Address.prototype.stateOrRegion = undefined;

/**
 * The postal code of that address. It conatins a series of letters or digits or both, sometimes including spaces or punctuation.
 * @member {String} postalCode
 */
Address.prototype.postalCode = undefined;

/**
 * The two digit country code. In ISO 3166-1 alpha-2 format.
 * @member {String} countryCode
 */
Address.prototype.countryCode = undefined;

/**
 * The phone number of the person, business or institution located at that address.
 * @member {String} phone
 */
Address.prototype.phone = undefined;


