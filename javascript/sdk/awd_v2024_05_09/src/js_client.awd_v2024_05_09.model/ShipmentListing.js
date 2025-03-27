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
import {InboundShipmentSummary} from './InboundShipmentSummary.js';

/**
 * The ShipmentListing model module.
 * @module js_client.awd_v2024_05_09.model/ShipmentListing
 * @version 2024-05-09
 */
export class ShipmentListing {
  /**
   * Constructs a new <code>ShipmentListing</code>.
   * A list of inbound shipment summaries filtered by the attributes specified in the request.
   * @alias module:js_client.awd_v2024_05_09.model/ShipmentListing
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShipmentListing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.awd_v2024_05_09.model/ShipmentListing} obj Optional instance to populate.
   * @return {module:js_client.awd_v2024_05_09.model/ShipmentListing} The populated <code>ShipmentListing</code> instance.
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
      obj = obj || new ShipmentListing();
      if (data.hasOwnProperty('nextToken'))
        obj.nextToken = ApiClient.convertToType(data['nextToken'], 'String');
      if (data.hasOwnProperty('shipments'))
        obj.shipments = ApiClient.convertToType(data['shipments'], [InboundShipmentSummary]);
    }
    return obj;
  }
}

/**
 * A token that is used to retrieve the next page of results. The response includes `nextToken` when the number of results exceeds the specified `maxResults` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
 * @member {String} nextToken
 */
ShipmentListing.prototype.nextToken = undefined;

/**
 * List of inbound shipment summaries.
 * @member {Array.<module:js_client.awd_v2024_05_09.model/InboundShipmentSummary>} shipments
 */
ShipmentListing.prototype.shipments = undefined;


