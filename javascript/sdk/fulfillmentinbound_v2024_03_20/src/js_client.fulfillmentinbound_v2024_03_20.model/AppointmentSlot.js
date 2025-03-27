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
import {AppointmentSlotTime} from './AppointmentSlotTime.js';

/**
 * The AppointmentSlot model module.
 * @module js_client.fulfillmentinbound_v2024_03_20.model/AppointmentSlot
 * @version 2024-03-20
 */
export class AppointmentSlot {
  /**
   * Constructs a new <code>AppointmentSlot</code>.
   * The fulfillment center appointment slot for the transportation option.
   * @alias module:js_client.fulfillmentinbound_v2024_03_20.model/AppointmentSlot
   * @class
   * @param slotId {String} An identifier to a self-ship appointment slot.
   * @param slotTime {module:js_client.fulfillmentinbound_v2024_03_20.model/AppointmentSlotTime} 
   */
  constructor(slotId, slotTime) {
    this.slotId = slotId;
    this.slotTime = slotTime;
  }

  /**
   * Constructs a <code>AppointmentSlot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v2024_03_20.model/AppointmentSlot} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/AppointmentSlot} The populated <code>AppointmentSlot</code> instance.
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
      obj = obj || new AppointmentSlot();
      if (data.hasOwnProperty('slotId'))
        obj.slotId = ApiClient.convertToType(data['slotId'], 'String');
      if (data.hasOwnProperty('slotTime'))
        obj.slotTime = AppointmentSlotTime.constructFromObject(data['slotTime']);
    }
    return obj;
  }
}

/**
 * An identifier to a self-ship appointment slot.
 * @member {String} slotId
 */
AppointmentSlot.prototype.slotId = undefined;

/**
 * @member {module:js_client.fulfillmentinbound_v2024_03_20.model/AppointmentSlotTime} slotTime
 */
AppointmentSlot.prototype.slotTime = undefined;


