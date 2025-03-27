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
import {TotalWeight} from './TotalWeight.js';

/**
 * The ItemQuantity model module.
 * @module js_client.vendorshipments_v1.model/ItemQuantity
 * @version v1
 */
export class ItemQuantity {
  /**
   * Constructs a new <code>ItemQuantity</code>.
   * Details of item quantity.
   * @alias module:js_client.vendorshipments_v1.model/ItemQuantity
   * @class
   * @param amount {Number} Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons or pallets within the shipment, please provide this at the appropriate carton or pallet level.
   * @param unitOfMeasure {module:js_client.vendorshipments_v1.model/ItemQuantity.UnitOfMeasureEnum} Unit of measure for the shipped quantity.
   */
  constructor(amount, unitOfMeasure) {
    this.amount = amount;
    this.unitOfMeasure = unitOfMeasure;
  }

  /**
   * Constructs a <code>ItemQuantity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendorshipments_v1.model/ItemQuantity} obj Optional instance to populate.
   * @return {module:js_client.vendorshipments_v1.model/ItemQuantity} The populated <code>ItemQuantity</code> instance.
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
      obj = obj || new ItemQuantity();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('unitOfMeasure'))
        obj.unitOfMeasure = ApiClient.convertToType(data['unitOfMeasure'], 'String');
      if (data.hasOwnProperty('unitSize'))
        obj.unitSize = ApiClient.convertToType(data['unitSize'], 'Number');
      if (data.hasOwnProperty('totalWeight'))
        obj.totalWeight = TotalWeight.constructFromObject(data['totalWeight']);
    }
    return obj;
  }
}

/**
 * Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons or pallets within the shipment, please provide this at the appropriate carton or pallet level.
 * @member {Number} amount
 */
ItemQuantity.prototype.amount = undefined;

/**
 * Allowed values for the <code>unitOfMeasure</code> property.
 * @enum {String}
 * @readonly
 */
ItemQuantity['UnitOfMeasureEnum'] = {

    /**
     * value: "Cases"
     * @const
     */
    "Cases": "Cases",

    /**
     * value: "Eaches"
     * @const
     */
    "Eaches": "Eaches"
};

/**
 * Unit of measure for the shipped quantity.
 * @member {module:js_client.vendorshipments_v1.model/ItemQuantity.UnitOfMeasureEnum} unitOfMeasure
 */
ItemQuantity.prototype.unitOfMeasure = undefined;

/**
 * The case size, in the event that we ordered using cases. Otherwise, 1.
 * @member {Number} unitSize
 */
ItemQuantity.prototype.unitSize = undefined;

/**
 * @member {module:js_client.vendorshipments_v1.model/TotalWeight} totalWeight
 */
ItemQuantity.prototype.totalWeight = undefined;


