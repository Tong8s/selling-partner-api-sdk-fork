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
import {DeliveryWindowOption} from './DeliveryWindowOption.js';
import {Pagination} from './Pagination.js';

/**
 * The ListDeliveryWindowOptionsResponse model module.
 * @module js_client.fulfillmentinbound_v2024_03_20.model/ListDeliveryWindowOptionsResponse
 * @version 2024-03-20
 */
export class ListDeliveryWindowOptionsResponse {
  /**
   * Constructs a new <code>ListDeliveryWindowOptionsResponse</code>.
   * The &#x60;listDeliveryWindowOptions&#x60; response.
   * @alias module:js_client.fulfillmentinbound_v2024_03_20.model/ListDeliveryWindowOptionsResponse
   * @class
   * @param deliveryWindowOptions {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/DeliveryWindowOption>} Delivery window options generated for the placement option.
   */
  constructor(deliveryWindowOptions) {
    this.deliveryWindowOptions = deliveryWindowOptions;
  }

  /**
   * Constructs a <code>ListDeliveryWindowOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v2024_03_20.model/ListDeliveryWindowOptionsResponse} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/ListDeliveryWindowOptionsResponse} The populated <code>ListDeliveryWindowOptionsResponse</code> instance.
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
      obj = obj || new ListDeliveryWindowOptionsResponse();
      if (data.hasOwnProperty('deliveryWindowOptions'))
        obj.deliveryWindowOptions = ApiClient.convertToType(data['deliveryWindowOptions'], [DeliveryWindowOption]);
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
    }
    return obj;
  }
}

/**
 * Delivery window options generated for the placement option.
 * @member {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/DeliveryWindowOption>} deliveryWindowOptions
 */
ListDeliveryWindowOptionsResponse.prototype.deliveryWindowOptions = undefined;

/**
 * @member {module:js_client.fulfillmentinbound_v2024_03_20.model/Pagination} pagination
 */
ListDeliveryWindowOptionsResponse.prototype.pagination = undefined;


