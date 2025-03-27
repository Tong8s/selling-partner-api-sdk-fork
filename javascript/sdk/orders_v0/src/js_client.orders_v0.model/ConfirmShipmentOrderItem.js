/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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

/**
 * The ConfirmShipmentOrderItem model module.
 * @module js_client.orders_v0.model/ConfirmShipmentOrderItem
 * @version v0
 */
export class ConfirmShipmentOrderItem {
  /**
   * Constructs a new <code>ConfirmShipmentOrderItem</code>.
   * A single order item.
   * @alias module:js_client.orders_v0.model/ConfirmShipmentOrderItem
   * @class
   * @param orderItemId {String} The order item's unique identifier.
   * @param quantity {Number} The item's quantity.
   */
  constructor(orderItemId, quantity) {
    this.orderItemId = orderItemId;
    this.quantity = quantity;
  }

  /**
   * Constructs a <code>ConfirmShipmentOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.orders_v0.model/ConfirmShipmentOrderItem} obj Optional instance to populate.
   * @return {module:js_client.orders_v0.model/ConfirmShipmentOrderItem} The populated <code>ConfirmShipmentOrderItem</code> instance.
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
      obj = obj || new ConfirmShipmentOrderItem();
      if (data.hasOwnProperty('orderItemId'))
        obj.orderItemId = ApiClient.convertToType(data['orderItemId'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('transparencyCodes'))
        obj.transparencyCodes = ApiClient.convertToType(data['transparencyCodes'], ['String']);
    }
    return obj;
  }
}

/**
 * The order item's unique identifier.
 * @member {String} orderItemId
 */
ConfirmShipmentOrderItem.prototype.orderItemId = undefined;

/**
 * The item's quantity.
 * @member {Number} quantity
 */
ConfirmShipmentOrderItem.prototype.quantity = undefined;

/**
 * A list of order items.
 * @member {Array.<String>} transparencyCodes
 */
ConfirmShipmentOrderItem.prototype.transparencyCodes = undefined;


