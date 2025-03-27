/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {ClientReferenceDetail} from './ClientReferenceDetail.js';

/**
 * The GetCarrierAccountsRequest model module.
 * @module js_client.shipping_v2.model/GetCarrierAccountsRequest
 * @version v2
 */
export class GetCarrierAccountsRequest {
  /**
   * Constructs a new <code>GetCarrierAccountsRequest</code>.
   * The request schema for the GetCarrierAccounts operation.
   * @alias module:js_client.shipping_v2.model/GetCarrierAccountsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetCarrierAccountsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.shipping_v2.model/GetCarrierAccountsRequest} obj Optional instance to populate.
   * @return {module:js_client.shipping_v2.model/GetCarrierAccountsRequest} The populated <code>GetCarrierAccountsRequest</code> instance.
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
      obj = obj || new GetCarrierAccountsRequest();
      if (data.hasOwnProperty('clientReferenceDetails'))
        obj.clientReferenceDetails = ApiClient.convertToType(data['clientReferenceDetails'], [ClientReferenceDetail]);
    }
    return obj;
  }
}

/**
 * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
 * @member {Array.<module:js_client.shipping_v2.model/ClientReferenceDetail>} clientReferenceDetails
 */
GetCarrierAccountsRequest.prototype.clientReferenceDetails = undefined;


