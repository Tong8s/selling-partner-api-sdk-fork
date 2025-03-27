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
import {OrderItem} from './OrderItem.js';

/**
 * The OrderItemsList model module.
 * @module js_client.orders_v0.model/OrderItemsList
 * @version v0
 */
export class OrderItemsList {
  /**
   * Constructs a new <code>OrderItemsList</code>.
   * The order items list along with the order ID.
   * @alias module:js_client.orders_v0.model/OrderItemsList
   * @class
   * @param orderItems {Array.<module:js_client.orders_v0.model/OrderItem>} A list of order items.
   * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
   */
  constructor(orderItems, amazonOrderId) {
    this.orderItems = orderItems;
    this.amazonOrderId = amazonOrderId;
  }

  /**
   * Constructs a <code>OrderItemsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.orders_v0.model/OrderItemsList} obj Optional instance to populate.
   * @return {module:js_client.orders_v0.model/OrderItemsList} The populated <code>OrderItemsList</code> instance.
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
      obj = obj || new OrderItemsList();
      if (data.hasOwnProperty('OrderItems'))
        obj.orderItems = ApiClient.convertToType(data['OrderItems'], [OrderItem]);
      if (data.hasOwnProperty('NextToken'))
        obj.nextToken = ApiClient.convertToType(data['NextToken'], 'String');
      if (data.hasOwnProperty('AmazonOrderId'))
        obj.amazonOrderId = ApiClient.convertToType(data['AmazonOrderId'], 'String');
    }
    return obj;
  }
}

/**
 * A list of order items.
 * @member {Array.<module:js_client.orders_v0.model/OrderItem>} orderItems
 */
OrderItemsList.prototype.orderItems = undefined;

/**
 * When present and not empty, pass this string token in the next request to return the next response page.
 * @member {String} nextToken
 */
OrderItemsList.prototype.nextToken = undefined;

/**
 * An Amazon-defined order identifier, in 3-7-7 format.
 * @member {String} amazonOrderId
 */
OrderItemsList.prototype.amazonOrderId = undefined;


