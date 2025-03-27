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
import {PackingOption} from './PackingOption.js';
import {Pagination} from './Pagination.js';

/**
 * The ListPackingOptionsResponse model module.
 * @module js_client.fulfillmentinbound_v2024_03_20.model/ListPackingOptionsResponse
 * @version 2024-03-20
 */
export class ListPackingOptionsResponse {
  /**
   * Constructs a new <code>ListPackingOptionsResponse</code>.
   * The &#x60;listPlacementOptions&#x60; response.
   * @alias module:js_client.fulfillmentinbound_v2024_03_20.model/ListPackingOptionsResponse
   * @class
   * @param packingOptions {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/PackingOption>} List of packing options.
   */
  constructor(packingOptions) {
    this.packingOptions = packingOptions;
  }

  /**
   * Constructs a <code>ListPackingOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v2024_03_20.model/ListPackingOptionsResponse} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/ListPackingOptionsResponse} The populated <code>ListPackingOptionsResponse</code> instance.
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
      obj = obj || new ListPackingOptionsResponse();
      if (data.hasOwnProperty('packingOptions'))
        obj.packingOptions = ApiClient.convertToType(data['packingOptions'], [PackingOption]);
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
    }
    return obj;
  }
}

/**
 * List of packing options.
 * @member {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/PackingOption>} packingOptions
 */
ListPackingOptionsResponse.prototype.packingOptions = undefined;

/**
 * @member {module:js_client.fulfillmentinbound_v2024_03_20.model/Pagination} pagination
 */
ListPackingOptionsResponse.prototype.pagination = undefined;


