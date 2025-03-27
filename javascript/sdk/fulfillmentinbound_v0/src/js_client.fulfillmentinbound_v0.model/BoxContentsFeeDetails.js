/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import {Amount} from './Amount.js';

/**
 * The BoxContentsFeeDetails model module.
 * @module js_client.fulfillmentinbound_v0.model/BoxContentsFeeDetails
 * @version v0
 */
export class BoxContentsFeeDetails {
  /**
   * Constructs a new <code>BoxContentsFeeDetails</code>.
   * The manual processing fee per unit and total fee for a shipment.
   * @alias module:js_client.fulfillmentinbound_v0.model/BoxContentsFeeDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxContentsFeeDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v0.model/BoxContentsFeeDetails} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v0.model/BoxContentsFeeDetails} The populated <code>BoxContentsFeeDetails</code> instance.
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
      obj = obj || new BoxContentsFeeDetails();
      if (data.hasOwnProperty('TotalUnits'))
        obj.totalUnits = ApiClient.convertToType(data['TotalUnits'], 'Number');
      if (data.hasOwnProperty('FeePerUnit'))
        obj.feePerUnit = Amount.constructFromObject(data['FeePerUnit']);
      if (data.hasOwnProperty('TotalFee'))
        obj.totalFee = Amount.constructFromObject(data['TotalFee']);
    }
    return obj;
  }
}

/**
 * The item quantity.
 * @member {Number} totalUnits
 */
BoxContentsFeeDetails.prototype.totalUnits = undefined;

/**
 * @member {module:js_client.fulfillmentinbound_v0.model/Amount} feePerUnit
 */
BoxContentsFeeDetails.prototype.feePerUnit = undefined;

/**
 * @member {module:js_client.fulfillmentinbound_v0.model/Amount} totalFee
 */
BoxContentsFeeDetails.prototype.totalFee = undefined;


