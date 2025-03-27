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
import {Geocode} from './Geocode.js';

/**
 * The Address model module.
 * @module js_client.shipping_v2.model/Address
 * @version v2
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * The address.
   * @alias module:js_client.shipping_v2.model/Address
   * @class
   * @param name {String} The name of the person, business or institution at the address.
   * @param addressLine1 {String} The first line of the address.
   * @param stateOrRegion {String} The state, county or region where the person, business or institution is located.
   * @param city {String} The city or town where the person, business or institution is located.
   * @param countryCode {String} The two digit country code. Follows ISO 3166-1 alpha-2 format.
   * @param postalCode {String} The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
   */
  constructor(name, addressLine1, stateOrRegion, city, countryCode, postalCode) {
    this.name = name;
    this.addressLine1 = addressLine1;
    this.stateOrRegion = stateOrRegion;
    this.city = city;
    this.countryCode = countryCode;
    this.postalCode = postalCode;
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.shipping_v2.model/Address} obj Optional instance to populate.
   * @return {module:js_client.shipping_v2.model/Address} The populated <code>Address</code> instance.
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
      if (data.hasOwnProperty('companyName'))
        obj.companyName = ApiClient.convertToType(data['companyName'], 'String');
      if (data.hasOwnProperty('stateOrRegion'))
        obj.stateOrRegion = ApiClient.convertToType(data['stateOrRegion'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('postalCode'))
        obj.postalCode = ApiClient.convertToType(data['postalCode'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phoneNumber'))
        obj.phoneNumber = ApiClient.convertToType(data['phoneNumber'], 'String');
      if (data.hasOwnProperty('geocode'))
        obj.geocode = Geocode.constructFromObject(data['geocode']);
    }
    return obj;
  }
}

/**
 * The name of the person, business or institution at the address.
 * @member {String} name
 */
Address.prototype.name = undefined;

/**
 * The first line of the address.
 * @member {String} addressLine1
 */
Address.prototype.addressLine1 = undefined;

/**
 * Additional address information, if required.
 * @member {String} addressLine2
 */
Address.prototype.addressLine2 = undefined;

/**
 * Additional address information, if required.
 * @member {String} addressLine3
 */
Address.prototype.addressLine3 = undefined;

/**
 * The name of the business or institution associated with the address.
 * @member {String} companyName
 */
Address.prototype.companyName = undefined;

/**
 * The state, county or region where the person, business or institution is located.
 * @member {String} stateOrRegion
 */
Address.prototype.stateOrRegion = undefined;

/**
 * The city or town where the person, business or institution is located.
 * @member {String} city
 */
Address.prototype.city = undefined;

/**
 * The two digit country code. Follows ISO 3166-1 alpha-2 format.
 * @member {String} countryCode
 */
Address.prototype.countryCode = undefined;

/**
 * The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
 * @member {String} postalCode
 */
Address.prototype.postalCode = undefined;

/**
 * The email address of the contact associated with the address.
 * @member {String} email
 */
Address.prototype.email = undefined;

/**
 * The phone number of the person, business or institution located at that address, including the country calling code.
 * @member {String} phoneNumber
 */
Address.prototype.phoneNumber = undefined;

/**
 * @member {module:js_client.shipping_v2.model/Geocode} geocode
 */
Address.prototype.geocode = undefined;


