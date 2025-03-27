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
import {ItemQuantity} from './ItemQuantity.js';
import {PackageItemDetails} from './PackageItemDetails.js';

/**
 * The PackedItems model module.
 * @module js_client.vendorshipments_v1.model/PackedItems
 * @version v1
 */
export class PackedItems {
  /**
   * Constructs a new <code>PackedItems</code>.
   * Details of the item being shipped.
   * @alias module:js_client.vendorshipments_v1.model/PackedItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PackedItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendorshipments_v1.model/PackedItems} obj Optional instance to populate.
   * @return {module:js_client.vendorshipments_v1.model/PackedItems} The populated <code>PackedItems</code> instance.
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
      obj = obj || new PackedItems();
      if (data.hasOwnProperty('itemSequenceNumber'))
        obj.itemSequenceNumber = ApiClient.convertToType(data['itemSequenceNumber'], 'String');
      if (data.hasOwnProperty('buyerProductIdentifier'))
        obj.buyerProductIdentifier = ApiClient.convertToType(data['buyerProductIdentifier'], 'String');
      if (data.hasOwnProperty('vendorProductIdentifier'))
        obj.vendorProductIdentifier = ApiClient.convertToType(data['vendorProductIdentifier'], 'String');
      if (data.hasOwnProperty('packedQuantity'))
        obj.packedQuantity = ItemQuantity.constructFromObject(data['packedQuantity']);
      if (data.hasOwnProperty('itemDetails'))
        obj.itemDetails = PackageItemDetails.constructFromObject(data['itemDetails']);
    }
    return obj;
  }
}

/**
 * Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.
 * @member {String} itemSequenceNumber
 */
PackedItems.prototype.itemSequenceNumber = undefined;

/**
 * Buyer Standard Identification Number (ASIN) of an item.
 * @member {String} buyerProductIdentifier
 */
PackedItems.prototype.buyerProductIdentifier = undefined;

/**
 * The vendor selected product identification of the item. Should be the same as was sent in the purchase order.
 * @member {String} vendorProductIdentifier
 */
PackedItems.prototype.vendorProductIdentifier = undefined;

/**
 * @member {module:js_client.vendorshipments_v1.model/ItemQuantity} packedQuantity
 */
PackedItems.prototype.packedQuantity = undefined;

/**
 * @member {module:js_client.vendorshipments_v1.model/PackageItemDetails} itemDetails
 */
PackedItems.prototype.itemDetails = undefined;


