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
import {Address} from './Address.js';
import {TaxRegistrationDetails} from './TaxRegistrationDetails.js';

/**
 * The PartyIdentification model module.
 * @module js_client.vendordforders_v2021_12_28.model/PartyIdentification
 * @version 2021-12-28
 */
export class PartyIdentification {
  /**
   * Constructs a new <code>PartyIdentification</code>.
   * Name, address and tax details of a party.
   * @alias module:js_client.vendordforders_v2021_12_28.model/PartyIdentification
   * @class
   * @param partyId {String} Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details.
   */
  constructor(partyId) {
    this.partyId = partyId;
  }

  /**
   * Constructs a <code>PartyIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendordforders_v2021_12_28.model/PartyIdentification} obj Optional instance to populate.
   * @return {module:js_client.vendordforders_v2021_12_28.model/PartyIdentification} The populated <code>PartyIdentification</code> instance.
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
      obj = obj || new PartyIdentification();
      if (data.hasOwnProperty('partyId'))
        obj.partyId = ApiClient.convertToType(data['partyId'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('taxInfo'))
        obj.taxInfo = TaxRegistrationDetails.constructFromObject(data['taxInfo']);
    }
    return obj;
  }
}

/**
 * Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details.
 * @member {String} partyId
 */
PartyIdentification.prototype.partyId = undefined;

/**
 * @member {module:js_client.vendordforders_v2021_12_28.model/Address} address
 */
PartyIdentification.prototype.address = undefined;

/**
 * @member {module:js_client.vendordforders_v2021_12_28.model/TaxRegistrationDetails} taxInfo
 */
PartyIdentification.prototype.taxInfo = undefined;


