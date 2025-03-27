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
import {PrepDetails} from './PrepDetails.js';

/**
 * The InboundShipmentItem model module.
 * @module js_client.fulfillmentinbound_v0.model/InboundShipmentItem
 * @version v0
 */
export class InboundShipmentItem {
  /**
   * Constructs a new <code>InboundShipmentItem</code>.
   * Item information for an inbound shipment. Submitted with a call to the createInboundShipment or updateInboundShipment operation.
   * @alias module:js_client.fulfillmentinbound_v0.model/InboundShipmentItem
   * @class
   * @param sellerSKU {String} The seller SKU of the item.
   * @param quantityShipped {Number} The item quantity.
   */
  constructor(sellerSKU, quantityShipped) {
    this.sellerSKU = sellerSKU;
    this.quantityShipped = quantityShipped;
  }

  /**
   * Constructs a <code>InboundShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v0.model/InboundShipmentItem} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v0.model/InboundShipmentItem} The populated <code>InboundShipmentItem</code> instance.
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
      obj = obj || new InboundShipmentItem();
      if (data.hasOwnProperty('ShipmentId'))
        obj.shipmentId = ApiClient.convertToType(data['ShipmentId'], 'String');
      if (data.hasOwnProperty('SellerSKU'))
        obj.sellerSKU = ApiClient.convertToType(data['SellerSKU'], 'String');
      if (data.hasOwnProperty('FulfillmentNetworkSKU'))
        obj.fulfillmentNetworkSKU = ApiClient.convertToType(data['FulfillmentNetworkSKU'], 'String');
      if (data.hasOwnProperty('QuantityShipped'))
        obj.quantityShipped = ApiClient.convertToType(data['QuantityShipped'], 'Number');
      if (data.hasOwnProperty('QuantityReceived'))
        obj.quantityReceived = ApiClient.convertToType(data['QuantityReceived'], 'Number');
      if (data.hasOwnProperty('QuantityInCase'))
        obj.quantityInCase = ApiClient.convertToType(data['QuantityInCase'], 'Number');
      if (data.hasOwnProperty('ReleaseDate'))
        obj.releaseDate = ApiClient.convertToType(data['ReleaseDate'], 'Date');
      if (data.hasOwnProperty('PrepDetailsList'))
        obj.prepDetailsList = ApiClient.convertToType(data['PrepDetailsList'], [PrepDetails]);
    }
    return obj;
  }
}

/**
 * A shipment identifier originally returned by the createInboundShipmentPlan operation.
 * @member {String} shipmentId
 */
InboundShipmentItem.prototype.shipmentId = undefined;

/**
 * The seller SKU of the item.
 * @member {String} sellerSKU
 */
InboundShipmentItem.prototype.sellerSKU = undefined;

/**
 * Amazon's fulfillment network SKU of the item.
 * @member {String} fulfillmentNetworkSKU
 */
InboundShipmentItem.prototype.fulfillmentNetworkSKU = undefined;

/**
 * The item quantity.
 * @member {Number} quantityShipped
 */
InboundShipmentItem.prototype.quantityShipped = undefined;

/**
 * The item quantity.
 * @member {Number} quantityReceived
 */
InboundShipmentItem.prototype.quantityReceived = undefined;

/**
 * The item quantity.
 * @member {Number} quantityInCase
 */
InboundShipmentItem.prototype.quantityInCase = undefined;

/**
 * Type containing date in string format
 * @member {Date} releaseDate
 */
InboundShipmentItem.prototype.releaseDate = undefined;

/**
 * A list of preparation instructions and who is responsible for that preparation.
 * @member {Array.<module:js_client.fulfillmentinbound_v0.model/PrepDetails>} prepDetailsList
 */
InboundShipmentItem.prototype.prepDetailsList = undefined;


