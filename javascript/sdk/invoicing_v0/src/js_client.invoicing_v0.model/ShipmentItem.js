/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
import {Money} from './Money.js';

/**
 * The ShipmentItem model module.
 * @module js_client.invoicing_v0.model/ShipmentItem
 * @version v0
 */
export class ShipmentItem {
  /**
   * Constructs a new <code>ShipmentItem</code>.
   * The shipment item information required by a seller to issue a shipment invoice.
   * @alias module:js_client.invoicing_v0.model/ShipmentItem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.invoicing_v0.model/ShipmentItem} obj Optional instance to populate.
   * @return {module:js_client.invoicing_v0.model/ShipmentItem} The populated <code>ShipmentItem</code> instance.
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
      obj = obj || new ShipmentItem();
      if (data.hasOwnProperty('ASIN'))
        obj.ASIN = ApiClient.convertToType(data['ASIN'], 'String');
      if (data.hasOwnProperty('SellerSKU'))
        obj.sellerSKU = ApiClient.convertToType(data['SellerSKU'], 'String');
      if (data.hasOwnProperty('OrderItemId'))
        obj.orderItemId = ApiClient.convertToType(data['OrderItemId'], 'String');
      if (data.hasOwnProperty('Title'))
        obj.title = ApiClient.convertToType(data['Title'], 'String');
      if (data.hasOwnProperty('QuantityOrdered'))
        obj.quantityOrdered = ApiClient.convertToType(data['QuantityOrdered'], 'Number');
      if (data.hasOwnProperty('ItemPrice'))
        obj.itemPrice = Money.constructFromObject(data['ItemPrice']);
      if (data.hasOwnProperty('ShippingPrice'))
        obj.shippingPrice = Money.constructFromObject(data['ShippingPrice']);
      if (data.hasOwnProperty('GiftWrapPrice'))
        obj.giftWrapPrice = Money.constructFromObject(data['GiftWrapPrice']);
      if (data.hasOwnProperty('ShippingDiscount'))
        obj.shippingDiscount = Money.constructFromObject(data['ShippingDiscount']);
      if (data.hasOwnProperty('PromotionDiscount'))
        obj.promotionDiscount = Money.constructFromObject(data['PromotionDiscount']);
      if (data.hasOwnProperty('SerialNumbers'))
        obj.serialNumbers = ApiClient.convertToType(data['SerialNumbers'], ['String']);
    }
    return obj;
  }
}

/**
 * The Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} ASIN
 */
ShipmentItem.prototype.ASIN = undefined;

/**
 * The seller SKU of the item.
 * @member {String} sellerSKU
 */
ShipmentItem.prototype.sellerSKU = undefined;

/**
 * The Amazon-defined identifier for the order item.
 * @member {String} orderItemId
 */
ShipmentItem.prototype.orderItemId = undefined;

/**
 * The name of the item.
 * @member {String} title
 */
ShipmentItem.prototype.title = undefined;

/**
 * The number of items ordered.
 * @member {Number} quantityOrdered
 */
ShipmentItem.prototype.quantityOrdered = undefined;

/**
 * @member {module:js_client.invoicing_v0.model/Money} itemPrice
 */
ShipmentItem.prototype.itemPrice = undefined;

/**
 * @member {module:js_client.invoicing_v0.model/Money} shippingPrice
 */
ShipmentItem.prototype.shippingPrice = undefined;

/**
 * @member {module:js_client.invoicing_v0.model/Money} giftWrapPrice
 */
ShipmentItem.prototype.giftWrapPrice = undefined;

/**
 * @member {module:js_client.invoicing_v0.model/Money} shippingDiscount
 */
ShipmentItem.prototype.shippingDiscount = undefined;

/**
 * @member {module:js_client.invoicing_v0.model/Money} promotionDiscount
 */
ShipmentItem.prototype.promotionDiscount = undefined;

/**
 * The list of serial numbers.
 * @member {Array.<String>} serialNumbers
 */
ShipmentItem.prototype.serialNumbers = undefined;


