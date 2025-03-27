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
 * The ListPackingGroupItemsResponse model module.
 * @module js_client.fulfillmentinbound_v2024_03_20.model/ListPackingGroupItemsResponse
 * @version 2024-03-20
 */
export class ListPackingGroupItemsResponse {
  /**
   * Constructs a new <code>ListPackingGroupItemsResponse</code>.
   * The &#x60;listPackingGroupItems&#x60; response.
   * @alias module:js_client.fulfillmentinbound_v2024_03_20.model/ListPackingGroupItemsResponse
   * @class
   * @param items {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/Item>} Provides the information about the list of items in the packing group.
   */
  constructor(items) {
    this.items = items;
  }

  /**
   * Constructs a <code>ListPackingGroupItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v2024_03_20.model/ListPackingGroupItemsResponse} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/ListPackingGroupItemsResponse} The populated <code>ListPackingGroupItemsResponse</code> instance.
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
      obj = obj || new ListPackingGroupItemsResponse();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [Item]);
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
    }
    return obj;
  }
}

/**
 * Provides the information about the list of items in the packing group.
 * @member {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/Item>} items
 */
ListPackingGroupItemsResponse.prototype.items = undefined;

/**
 * @member {module:js_client.fulfillmentinbound_v2024_03_20.model/Pagination} pagination
 */
ListPackingGroupItemsResponse.prototype.pagination = undefined;


