/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {PartyIdentification} from './PartyIdentification.js';

/**
 * The VendorDetails model module.
 * @module js_client.vendorshipments_v1.model/VendorDetails
 * @version v1
 */
export class VendorDetails {
  /**
   * Constructs a new <code>VendorDetails</code>.
   * Vendor Details as part of Label response.
   * @alias module:js_client.vendorshipments_v1.model/VendorDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VendorDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendorshipments_v1.model/VendorDetails} obj Optional instance to populate.
   * @return {module:js_client.vendorshipments_v1.model/VendorDetails} The populated <code>VendorDetails</code> instance.
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
      obj = obj || new VendorDetails();
      if (data.hasOwnProperty('sellingParty'))
        obj.sellingParty = PartyIdentification.constructFromObject(data['sellingParty']);
      if (data.hasOwnProperty('vendorShipmentIdentifier'))
        obj.vendorShipmentIdentifier = ApiClient.convertToType(data['vendorShipmentIdentifier'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:js_client.vendorshipments_v1.model/PartyIdentification} sellingParty
 */
VendorDetails.prototype.sellingParty = undefined;

/**
 * Unique vendor shipment id which is not used in last 365 days
 * @member {String} vendorShipmentIdentifier
 */
VendorDetails.prototype.vendorShipmentIdentifier = undefined;


