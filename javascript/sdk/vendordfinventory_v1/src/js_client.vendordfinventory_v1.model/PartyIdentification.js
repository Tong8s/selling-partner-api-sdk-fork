/**
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor's inventory updates.
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

/**
 * The PartyIdentification model module.
 * @module js_client.vendordfinventory_v1.model/PartyIdentification
 * @version v1
 */
export class PartyIdentification {
  /**
   * Constructs a new <code>PartyIdentification</code>.
   * Name, address and tax details of a party.
   * @alias module:js_client.vendordfinventory_v1.model/PartyIdentification
   * @class
   * @param partyId {String} Assigned identification for the party.
   */
  constructor(partyId) {
    this.partyId = partyId;
  }

  /**
   * Constructs a <code>PartyIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendordfinventory_v1.model/PartyIdentification} obj Optional instance to populate.
   * @return {module:js_client.vendordfinventory_v1.model/PartyIdentification} The populated <code>PartyIdentification</code> instance.
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
    }
    return obj;
  }
}

/**
 * Assigned identification for the party.
 * @member {String} partyId
 */
PartyIdentification.prototype.partyId = undefined;


