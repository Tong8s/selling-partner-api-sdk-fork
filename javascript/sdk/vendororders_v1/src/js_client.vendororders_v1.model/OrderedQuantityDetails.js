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
import {ItemQuantity} from './ItemQuantity.js';

/**
 * The OrderedQuantityDetails model module.
 * @module js_client.vendororders_v1.model/OrderedQuantityDetails
 * @version v1
 */
export class OrderedQuantityDetails {
  /**
   * Constructs a new <code>OrderedQuantityDetails</code>.
   * Details of item quantity ordered.
   * @alias module:js_client.vendororders_v1.model/OrderedQuantityDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderedQuantityDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendororders_v1.model/OrderedQuantityDetails} obj Optional instance to populate.
   * @return {module:js_client.vendororders_v1.model/OrderedQuantityDetails} The populated <code>OrderedQuantityDetails</code> instance.
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
      obj = obj || new OrderedQuantityDetails();
      if (data.hasOwnProperty('updatedDate'))
        obj.updatedDate = ApiClient.convertToType(data['updatedDate'], 'Date');
      if (data.hasOwnProperty('orderedQuantity'))
        obj.orderedQuantity = ItemQuantity.constructFromObject(data['orderedQuantity']);
      if (data.hasOwnProperty('cancelledQuantity'))
        obj.cancelledQuantity = ItemQuantity.constructFromObject(data['cancelledQuantity']);
    }
    return obj;
  }
}

/**
 * The date when the line item quantity was updated by buyer. Must be in ISO-8601 date/time format.
 * @member {Date} updatedDate
 */
OrderedQuantityDetails.prototype.updatedDate = undefined;

/**
 * @member {module:js_client.vendororders_v1.model/ItemQuantity} orderedQuantity
 */
OrderedQuantityDetails.prototype.orderedQuantity = undefined;

/**
 * @member {module:js_client.vendororders_v1.model/ItemQuantity} cancelledQuantity
 */
OrderedQuantityDetails.prototype.cancelledQuantity = undefined;


