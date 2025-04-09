/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
import {AddressTypeEnum} from './AddressTypeEnum.js';

/**
 * The Address model module.
 * @module invoicing_v0/model/Address
 * @version v0
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * The shipping address details of the shipment.
   * @alias module:invoicing_v0/model/Address
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoicing_v0/model/Address} obj Optional instance to populate.
   * @return {module:invoicing_v0/model/Address} The populated <code>Address</code> instance.
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
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('AddressLine1'))
        obj.addressLine1 = ApiClient.convertToType(data['AddressLine1'], 'String');
      if (data.hasOwnProperty('AddressLine2'))
        obj.addressLine2 = ApiClient.convertToType(data['AddressLine2'], 'String');
      if (data.hasOwnProperty('AddressLine3'))
        obj.addressLine3 = ApiClient.convertToType(data['AddressLine3'], 'String');
      if (data.hasOwnProperty('City'))
        obj.city = ApiClient.convertToType(data['City'], 'String');
      if (data.hasOwnProperty('County'))
        obj.county = ApiClient.convertToType(data['County'], 'String');
      if (data.hasOwnProperty('District'))
        obj.district = ApiClient.convertToType(data['District'], 'String');
      if (data.hasOwnProperty('StateOrRegion'))
        obj.stateOrRegion = ApiClient.convertToType(data['StateOrRegion'], 'String');
      if (data.hasOwnProperty('PostalCode'))
        obj.postalCode = ApiClient.convertToType(data['PostalCode'], 'String');
      if (data.hasOwnProperty('CountryCode'))
        obj.countryCode = ApiClient.convertToType(data['CountryCode'], 'String');
      if (data.hasOwnProperty('Phone'))
        obj.phone = ApiClient.convertToType(data['Phone'], 'String');
      if (data.hasOwnProperty('AddressType'))
        obj.addressType = AddressTypeEnum.constructFromObject(data['AddressType']);
    }
    return obj;
  }
}

/**
 * The name.
 * @member {String} name
 */
Address.prototype.name = undefined;

/**
 * The street address.
 * @member {String} addressLine1
 */
Address.prototype.addressLine1 = undefined;

/**
 * Additional street address information, if required.
 * @member {String} addressLine2
 */
Address.prototype.addressLine2 = undefined;

/**
 * Additional street address information, if required.
 * @member {String} addressLine3
 */
Address.prototype.addressLine3 = undefined;

/**
 * The city.
 * @member {String} city
 */
Address.prototype.city = undefined;

/**
 * The county.
 * @member {String} county
 */
Address.prototype.county = undefined;

/**
 * The district.
 * @member {String} district
 */
Address.prototype.district = undefined;

/**
 * The state or region.
 * @member {String} stateOrRegion
 */
Address.prototype.stateOrRegion = undefined;

/**
 * The postal code.
 * @member {String} postalCode
 */
Address.prototype.postalCode = undefined;

/**
 * The country code.
 * @member {String} countryCode
 */
Address.prototype.countryCode = undefined;

/**
 * The phone number.
 * @member {String} phone
 */
Address.prototype.phone = undefined;

/**
 * @member {module:invoicing_v0/model/AddressTypeEnum} addressType
 */
Address.prototype.addressType = undefined;


