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
import {Pagination} from './Pagination.js';
import {PlacementOption} from './PlacementOption.js';

/**
 * The ListPlacementOptionsResponse model module.
 * @module js_client.fulfillmentinbound_v2024_03_20.model/ListPlacementOptionsResponse
 * @version 2024-03-20
 */
export class ListPlacementOptionsResponse {
  /**
   * Constructs a new <code>ListPlacementOptionsResponse</code>.
   * The &#x60;listPlacementOptions&#x60; response.
   * @alias module:js_client.fulfillmentinbound_v2024_03_20.model/ListPlacementOptionsResponse
   * @class
   * @param placementOptions {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/PlacementOption>} Placement options generated for the inbound plan.
   */
  constructor(placementOptions) {
    this.placementOptions = placementOptions;
  }

  /**
   * Constructs a <code>ListPlacementOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v2024_03_20.model/ListPlacementOptionsResponse} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/ListPlacementOptionsResponse} The populated <code>ListPlacementOptionsResponse</code> instance.
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
      obj = obj || new ListPlacementOptionsResponse();
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
      if (data.hasOwnProperty('placementOptions'))
        obj.placementOptions = ApiClient.convertToType(data['placementOptions'], [PlacementOption]);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.fulfillmentinbound_v2024_03_20.model/Pagination} pagination
 */
ListPlacementOptionsResponse.prototype.pagination = undefined;

/**
 * Placement options generated for the inbound plan.
 * @member {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/PlacementOption>} placementOptions
 */
ListPlacementOptionsResponse.prototype.placementOptions = undefined;


