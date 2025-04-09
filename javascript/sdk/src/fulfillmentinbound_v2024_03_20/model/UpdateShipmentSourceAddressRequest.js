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
import {AddressInput} from './AddressInput.js';

/**
 * The UpdateShipmentSourceAddressRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/UpdateShipmentSourceAddressRequest
 * @version 2024-03-20
 */
export class UpdateShipmentSourceAddressRequest {
  /**
   * Constructs a new <code>UpdateShipmentSourceAddressRequest</code>.
   * The &#x60;UpdateShipmentSourceAddress&#x60; request.
   * @alias module:fulfillmentinbound_v2024_03_20/model/UpdateShipmentSourceAddressRequest
   * @class
   * @param address {module:fulfillmentinbound_v2024_03_20/model/AddressInput} 
   */
  constructor(address) {
    this.address = address;
  }

  /**
   * Constructs a <code>UpdateShipmentSourceAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/UpdateShipmentSourceAddressRequest} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/UpdateShipmentSourceAddressRequest} The populated <code>UpdateShipmentSourceAddressRequest</code> instance.
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
      obj = obj || new UpdateShipmentSourceAddressRequest();
      if (data.hasOwnProperty('address'))
        obj.address = AddressInput.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/AddressInput} address
 */
UpdateShipmentSourceAddressRequest.prototype.address = undefined;


