/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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
 * The Granularity model module.
 * @module js_client.fbainventory_v1.model/Granularity
 * @version v1
 */
export class Granularity {
  /**
   * Constructs a new <code>Granularity</code>.
   * Describes a granularity at which inventory data can be aggregated. For example, if you use Marketplace granularity, the fulfillable quantity will reflect inventory that could be fulfilled in the given marketplace.
   * @alias module:js_client.fbainventory_v1.model/Granularity
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Granularity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fbainventory_v1.model/Granularity} obj Optional instance to populate.
   * @return {module:js_client.fbainventory_v1.model/Granularity} The populated <code>Granularity</code> instance.
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
      obj = obj || new Granularity();
      if (data.hasOwnProperty('granularityType'))
        obj.granularityType = ApiClient.convertToType(data['granularityType'], 'String');
      if (data.hasOwnProperty('granularityId'))
        obj.granularityId = ApiClient.convertToType(data['granularityId'], 'String');
    }
    return obj;
  }
}

/**
 * The granularity type for the inventory aggregation level.
 * @member {String} granularityType
 */
Granularity.prototype.granularityType = undefined;

/**
 * The granularity ID for the specified granularity type. When granularityType is Marketplace, specify the marketplaceId.
 * @member {String} granularityId
 */
Granularity.prototype.granularityId = undefined;


