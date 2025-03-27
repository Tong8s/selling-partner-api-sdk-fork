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

/**
 * The NdrRequestData model module.
 * @module js_client.shipping_v2.model/NdrRequestData
 * @version v2
 */
export class NdrRequestData {
  /**
   * Constructs a new <code>NdrRequestData</code>.
   * Additional information required for the NDR action that has been filed. If the NDR Action is RESCHEDULE, rescheduleDate is a required field. Otherwise, if the NDR Action is REATTEMPT, additionalAddressNotes is a required field. 
   * @alias module:js_client.shipping_v2.model/NdrRequestData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>NdrRequestData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.shipping_v2.model/NdrRequestData} obj Optional instance to populate.
   * @return {module:js_client.shipping_v2.model/NdrRequestData} The populated <code>NdrRequestData</code> instance.
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
      obj = obj || new NdrRequestData();
      if (data.hasOwnProperty('rescheduleDate'))
        obj.rescheduleDate = ApiClient.convertToType(data['rescheduleDate'], 'Date');
      if (data.hasOwnProperty('additionalAddressNotes'))
        obj.additionalAddressNotes = ApiClient.convertToType(data['additionalAddressNotes'], 'String');
    }
    return obj;
  }
}

/**
 * The date on which the Seller wants to reschedule shipment delivery, in ISO-8601 date/time format
 * @member {Date} rescheduleDate
 */
NdrRequestData.prototype.rescheduleDate = undefined;

/**
 * Address notes to re-attempt delivery with.
 * @member {String} additionalAddressNotes
 */
NdrRequestData.prototype.additionalAddressNotes = undefined;


