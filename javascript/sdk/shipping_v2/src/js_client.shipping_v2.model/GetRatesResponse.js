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
import {GetRatesResult} from './GetRatesResult.js';

/**
 * The GetRatesResponse model module.
 * @module js_client.shipping_v2.model/GetRatesResponse
 * @version v2
 */
export class GetRatesResponse {
  /**
   * Constructs a new <code>GetRatesResponse</code>.
   * The response schema for the getRates operation.
   * @alias module:js_client.shipping_v2.model/GetRatesResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetRatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.shipping_v2.model/GetRatesResponse} obj Optional instance to populate.
   * @return {module:js_client.shipping_v2.model/GetRatesResponse} The populated <code>GetRatesResponse</code> instance.
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
      obj = obj || new GetRatesResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = GetRatesResult.constructFromObject(data['payload']);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.shipping_v2.model/GetRatesResult} payload
 */
GetRatesResponse.prototype.payload = undefined;


