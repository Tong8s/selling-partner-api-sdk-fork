/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
 * The ItemQuantity model module.
 * @module js_client.vendororders_v1.model/ItemQuantity
 * @version v1
 */
export class ItemQuantity {
  /**
   * Constructs a new <code>ItemQuantity</code>.
   * Details of quantity ordered.
   * @alias module:js_client.vendororders_v1.model/ItemQuantity
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ItemQuantity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendororders_v1.model/ItemQuantity} obj Optional instance to populate.
   * @return {module:js_client.vendororders_v1.model/ItemQuantity} The populated <code>ItemQuantity</code> instance.
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
    }
    return obj;
  }
}

/**
 * Acknowledged quantity. This value should not be zero.
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
 * Unit of measure for the acknowledged quantity.
 * @member {module:js_client.vendororders_v1.model/ItemQuantity.UnitOfMeasureEnum} unitOfMeasure
 */
ItemQuantity.prototype.unitOfMeasure = undefined;

/**
 * The case size, in the event that we ordered using cases.
 * @member {Number} unitSize
 */
ItemQuantity.prototype.unitSize = undefined;


