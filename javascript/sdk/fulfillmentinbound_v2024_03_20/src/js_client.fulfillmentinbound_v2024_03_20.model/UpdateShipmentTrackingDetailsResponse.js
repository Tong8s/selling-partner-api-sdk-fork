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

/**
 * The UpdateShipmentTrackingDetailsResponse model module.
 * @module js_client.fulfillmentinbound_v2024_03_20.model/UpdateShipmentTrackingDetailsResponse
 * @version 2024-03-20
 */
export class UpdateShipmentTrackingDetailsResponse {
  /**
   * Constructs a new <code>UpdateShipmentTrackingDetailsResponse</code>.
   * The &#x60;updateShipmentTrackingDetails&#x60; response.
   * @alias module:js_client.fulfillmentinbound_v2024_03_20.model/UpdateShipmentTrackingDetailsResponse
   * @class
   * @param operationId {String} UUID for the given operation.
   */
  constructor(operationId) {
    this.operationId = operationId;
  }

  /**
   * Constructs a <code>UpdateShipmentTrackingDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v2024_03_20.model/UpdateShipmentTrackingDetailsResponse} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/UpdateShipmentTrackingDetailsResponse} The populated <code>UpdateShipmentTrackingDetailsResponse</code> instance.
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
      obj = obj || new UpdateShipmentTrackingDetailsResponse();
      if (data.hasOwnProperty('operationId'))
        obj.operationId = ApiClient.convertToType(data['operationId'], 'String');
    }
    return obj;
  }
}

/**
 * UUID for the given operation.
 * @member {String} operationId
 */
UpdateShipmentTrackingDetailsResponse.prototype.operationId = undefined;


