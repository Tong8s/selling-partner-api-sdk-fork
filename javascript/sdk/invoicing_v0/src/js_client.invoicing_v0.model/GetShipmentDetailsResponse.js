/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Error} from './Error.js';
import {ShipmentDetail} from './ShipmentDetail.js';

/**
 * The GetShipmentDetailsResponse model module.
 * @module js_client.invoicing_v0.model/GetShipmentDetailsResponse
 * @version v0
 */
export class GetShipmentDetailsResponse {
  /**
   * Constructs a new <code>GetShipmentDetailsResponse</code>.
   * The response schema for the getShipmentDetails operation.
   * @alias module:js_client.invoicing_v0.model/GetShipmentDetailsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetShipmentDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.invoicing_v0.model/GetShipmentDetailsResponse} obj Optional instance to populate.
   * @return {module:js_client.invoicing_v0.model/GetShipmentDetailsResponse} The populated <code>GetShipmentDetailsResponse</code> instance.
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
      obj = obj || new GetShipmentDetailsResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = ShipmentDetail.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.invoicing_v0.model/ShipmentDetail} payload
 */
GetShipmentDetailsResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:js_client.invoicing_v0.model/Error>} errors
 */
GetShipmentDetailsResponse.prototype.errors = undefined;


