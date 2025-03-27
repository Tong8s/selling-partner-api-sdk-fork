/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The InventoryDetails model module.
 * @module js_client.awd_v2024_05_09.model/InventoryDetails
 * @version 2024-05-09
 */
export class InventoryDetails {
  /**
   * Constructs a new <code>InventoryDetails</code>.
   * Additional inventory details. This object is only displayed if the details parameter in the request is set to &#x60;SHOW&#x60;.
   * @alias module:js_client.awd_v2024_05_09.model/InventoryDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InventoryDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.awd_v2024_05_09.model/InventoryDetails} obj Optional instance to populate.
   * @return {module:js_client.awd_v2024_05_09.model/InventoryDetails} The populated <code>InventoryDetails</code> instance.
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
      obj = obj || new InventoryDetails();
      if (data.hasOwnProperty('availableDistributableQuantity'))
        obj.availableDistributableQuantity = ApiClient.convertToType(data['availableDistributableQuantity'], 'Number');
      if (data.hasOwnProperty('replenishmentQuantity'))
        obj.replenishmentQuantity = ApiClient.convertToType(data['replenishmentQuantity'], 'Number');
      if (data.hasOwnProperty('reservedDistributableQuantity'))
        obj.reservedDistributableQuantity = ApiClient.convertToType(data['reservedDistributableQuantity'], 'Number');
    }
    return obj;
  }
}

/**
 * Quantity that is available for downstream channel replenishment.
 * @member {Number} availableDistributableQuantity
 */
InventoryDetails.prototype.availableDistributableQuantity = undefined;

/**
 * Quantity that is in transit from AWD and has not yet been received at FBA.
 * @member {Number} replenishmentQuantity
 */
InventoryDetails.prototype.replenishmentQuantity = undefined;

/**
 * Quantity that is reserved for a downstream channel replenishment order that is being prepared for shipment.
 * @member {Number} reservedDistributableQuantity
 */
InventoryDetails.prototype.reservedDistributableQuantity = undefined;


