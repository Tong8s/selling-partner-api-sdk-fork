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
import {MskuPrepDetail} from './MskuPrepDetail.js';

/**
 * The ListPrepDetailsResponse model module.
 * @module js_client.fulfillmentinbound_v2024_03_20.model/ListPrepDetailsResponse
 * @version 2024-03-20
 */
export class ListPrepDetailsResponse {
  /**
   * Constructs a new <code>ListPrepDetailsResponse</code>.
   * The response to the &#x60;listPrepDetails&#x60; operation.
   * @alias module:js_client.fulfillmentinbound_v2024_03_20.model/ListPrepDetailsResponse
   * @class
   * @param mskuPrepDetails {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/MskuPrepDetail>} A list of MSKUs and related prep details.
   */
  constructor(mskuPrepDetails) {
    this.mskuPrepDetails = mskuPrepDetails;
  }

  /**
   * Constructs a <code>ListPrepDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v2024_03_20.model/ListPrepDetailsResponse} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/ListPrepDetailsResponse} The populated <code>ListPrepDetailsResponse</code> instance.
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
      obj = obj || new ListPrepDetailsResponse();
      if (data.hasOwnProperty('mskuPrepDetails'))
        obj.mskuPrepDetails = ApiClient.convertToType(data['mskuPrepDetails'], [MskuPrepDetail]);
    }
    return obj;
  }
}

/**
 * A list of MSKUs and related prep details.
 * @member {Array.<module:js_client.fulfillmentinbound_v2024_03_20.model/MskuPrepDetail>} mskuPrepDetails
 */
ListPrepDetailsResponse.prototype.mskuPrepDetails = undefined;


