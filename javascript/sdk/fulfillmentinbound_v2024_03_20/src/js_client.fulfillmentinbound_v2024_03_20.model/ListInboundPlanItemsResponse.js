/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Item} from './Item.js';
import {Pagination} from './Pagination.js';

/**
 * The ListInboundPlanItemsResponse model module.
 * @module js_client.fulfillmentinbound_v2024_03_20.model/ListInboundPlanItemsResponse
 * @version 2024-03-20
 */
export class ListInboundPlanItemsResponse {
  /**
   * Constructs a new <code>ListInboundPlanItemsResponse</code>.
   * The &#x60;listInboundPlanItems&#x60; response.
   * @alias module:js_client.fulfillmentinbound_v2024_03_20.model/ListInboundPlanItemsResponse
   * @class
   * @param items {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/Item>} The items in an inbound plan.
   */
  constructor(items) {
    this.items = items;
  }

  /**
   * Constructs a <code>ListInboundPlanItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v2024_03_20.model/ListInboundPlanItemsResponse} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/ListInboundPlanItemsResponse} The populated <code>ListInboundPlanItemsResponse</code> instance.
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
      obj = obj || new ListInboundPlanItemsResponse();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [Item]);
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
    }
    return obj;
  }
}

/**
 * The items in an inbound plan.
 * @member {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/Item>} items
 */
ListInboundPlanItemsResponse.prototype.items = undefined;

/**
 * @member {module:js_client.fulfillmentinbound_v2024_03_20.model/Pagination} pagination
 */
ListInboundPlanItemsResponse.prototype.pagination = undefined;


