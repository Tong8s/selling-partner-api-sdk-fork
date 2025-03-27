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
import {BuyerCustomizedInfoDetail} from './BuyerCustomizedInfoDetail.js';
import {Money} from './Money.js';

/**
 * The ItemBuyerInfo model module.
 * @module js_client.orders_v0.model/ItemBuyerInfo
 * @version v0
 */
export class ItemBuyerInfo {
  /**
   * Constructs a new <code>ItemBuyerInfo</code>.
   * A single item&#39;s buyer information.
   * @alias module:js_client.orders_v0.model/ItemBuyerInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ItemBuyerInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.orders_v0.model/ItemBuyerInfo} obj Optional instance to populate.
   * @return {module:js_client.orders_v0.model/ItemBuyerInfo} The populated <code>ItemBuyerInfo</code> instance.
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
      obj = obj || new ItemBuyerInfo();
      if (data.hasOwnProperty('BuyerCustomizedInfo'))
        obj.buyerCustomizedInfo = BuyerCustomizedInfoDetail.constructFromObject(data['BuyerCustomizedInfo']);
      if (data.hasOwnProperty('GiftWrapPrice'))
        obj.giftWrapPrice = Money.constructFromObject(data['GiftWrapPrice']);
      if (data.hasOwnProperty('GiftWrapTax'))
        obj.giftWrapTax = Money.constructFromObject(data['GiftWrapTax']);
      if (data.hasOwnProperty('GiftMessageText'))
        obj.giftMessageText = ApiClient.convertToType(data['GiftMessageText'], 'String');
      if (data.hasOwnProperty('GiftWrapLevel'))
        obj.giftWrapLevel = ApiClient.convertToType(data['GiftWrapLevel'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:js_client.orders_v0.model/BuyerCustomizedInfoDetail} buyerCustomizedInfo
 */
ItemBuyerInfo.prototype.buyerCustomizedInfo = undefined;

/**
 * @member {module:js_client.orders_v0.model/Money} giftWrapPrice
 */
ItemBuyerInfo.prototype.giftWrapPrice = undefined;

/**
 * @member {module:js_client.orders_v0.model/Money} giftWrapTax
 */
ItemBuyerInfo.prototype.giftWrapTax = undefined;

/**
 * A gift message provided by the buyer.  **Note**: This attribute is only available for MFN (fulfilled by seller) orders.
 * @member {String} giftMessageText
 */
ItemBuyerInfo.prototype.giftMessageText = undefined;

/**
 * The gift wrap level specified by the buyer.
 * @member {String} giftWrapLevel
 */
ItemBuyerInfo.prototype.giftWrapLevel = undefined;


