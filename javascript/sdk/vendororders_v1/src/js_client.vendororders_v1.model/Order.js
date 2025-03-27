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
import {OrderDetails} from './OrderDetails.js';

/**
 * The Order model module.
 * @module js_client.vendororders_v1.model/Order
 * @version v1
 */
export class Order {
  /**
   * Constructs a new <code>Order</code>.
   * Represents an order placed by Amazon, including the purchase order number, current state, and order details.
   * @alias module:js_client.vendororders_v1.model/Order
   * @class
   * @param purchaseOrderNumber {String} The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
   * @param purchaseOrderState {module:js_client.vendororders_v1.model/Order.PurchaseOrderStateEnum} This field will contain the current state of the purchase order.
   */
  constructor(purchaseOrderNumber, purchaseOrderState) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.purchaseOrderState = purchaseOrderState;
  }

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendororders_v1.model/Order} obj Optional instance to populate.
   * @return {module:js_client.vendororders_v1.model/Order} The populated <code>Order</code> instance.
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
      obj = obj || new Order();
      if (data.hasOwnProperty('purchaseOrderNumber'))
        obj.purchaseOrderNumber = ApiClient.convertToType(data['purchaseOrderNumber'], 'String');
      if (data.hasOwnProperty('purchaseOrderState'))
        obj.purchaseOrderState = ApiClient.convertToType(data['purchaseOrderState'], 'String');
      if (data.hasOwnProperty('orderDetails'))
        obj.orderDetails = OrderDetails.constructFromObject(data['orderDetails']);
    }
    return obj;
  }
}

/**
 * The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
 * @member {String} purchaseOrderNumber
 */
Order.prototype.purchaseOrderNumber = undefined;

/**
 * Allowed values for the <code>purchaseOrderState</code> property.
 * @enum {String}
 * @readonly
 */
Order['PurchaseOrderStateEnum'] = {

    /**
     * value: "New"
     * @const
     */
    "New": "New",

    /**
     * value: "Acknowledged"
     * @const
     */
    "Acknowledged": "Acknowledged",

    /**
     * value: "Closed"
     * @const
     */
    "Closed": "Closed"
};

/**
 * This field will contain the current state of the purchase order.
 * @member {module:js_client.vendororders_v1.model/Order.PurchaseOrderStateEnum} purchaseOrderState
 */
Order.prototype.purchaseOrderState = undefined;

/**
 * @member {module:js_client.vendororders_v1.model/OrderDetails} orderDetails
 */
Order.prototype.orderDetails = undefined;


