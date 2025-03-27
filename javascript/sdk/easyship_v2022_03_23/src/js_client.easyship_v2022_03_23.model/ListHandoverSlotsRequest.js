/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Dimensions} from './Dimensions.js';
import {Weight} from './Weight.js';

/**
 * The ListHandoverSlotsRequest model module.
 * @module js_client.easyship_v2022_03_23.model/ListHandoverSlotsRequest
 * @version 2022-03-23
 */
export class ListHandoverSlotsRequest {
  /**
   * Constructs a new <code>ListHandoverSlotsRequest</code>.
   * The request schema for the &#x60;listHandoverSlots&#x60; operation.
   * @alias module:js_client.easyship_v2022_03_23.model/ListHandoverSlotsRequest
   * @class
   * @param marketplaceId {String} A string of up to 255 characters.
   * @param amazonOrderId {String} An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
   * @param packageDimensions {module:js_client.easyship_v2022_03_23.model/Dimensions} 
   * @param packageWeight {module:js_client.easyship_v2022_03_23.model/Weight} 
   */
  constructor(marketplaceId, amazonOrderId, packageDimensions, packageWeight) {
    this.marketplaceId = marketplaceId;
    this.amazonOrderId = amazonOrderId;
    this.packageDimensions = packageDimensions;
    this.packageWeight = packageWeight;
  }

  /**
   * Constructs a <code>ListHandoverSlotsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.easyship_v2022_03_23.model/ListHandoverSlotsRequest} obj Optional instance to populate.
   * @return {module:js_client.easyship_v2022_03_23.model/ListHandoverSlotsRequest} The populated <code>ListHandoverSlotsRequest</code> instance.
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
      obj = obj || new ListHandoverSlotsRequest();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('amazonOrderId'))
        obj.amazonOrderId = ApiClient.convertToType(data['amazonOrderId'], 'String');
      if (data.hasOwnProperty('packageDimensions'))
        obj.packageDimensions = Dimensions.constructFromObject(data['packageDimensions']);
      if (data.hasOwnProperty('packageWeight'))
        obj.packageWeight = Weight.constructFromObject(data['packageWeight']);
    }
    return obj;
  }
}

/**
 * A string of up to 255 characters.
 * @member {String} marketplaceId
 */
ListHandoverSlotsRequest.prototype.marketplaceId = undefined;

/**
 * An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
 * @member {String} amazonOrderId
 */
ListHandoverSlotsRequest.prototype.amazonOrderId = undefined;

/**
 * @member {module:js_client.easyship_v2022_03_23.model/Dimensions} packageDimensions
 */
ListHandoverSlotsRequest.prototype.packageDimensions = undefined;

/**
 * @member {module:js_client.easyship_v2022_03_23.model/Weight} packageWeight
 */
ListHandoverSlotsRequest.prototype.packageWeight = undefined;


