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
import {CollectOnDelivery} from './CollectOnDelivery.js';

/**
 * The ValueAddedServiceDetails model module.
 * @module js_client.shipping_v2.model/ValueAddedServiceDetails
 * @version v2
 */
export class ValueAddedServiceDetails {
  /**
   * Constructs a new <code>ValueAddedServiceDetails</code>.
   * A collection of supported value-added services.
   * @alias module:js_client.shipping_v2.model/ValueAddedServiceDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ValueAddedServiceDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.shipping_v2.model/ValueAddedServiceDetails} obj Optional instance to populate.
   * @return {module:js_client.shipping_v2.model/ValueAddedServiceDetails} The populated <code>ValueAddedServiceDetails</code> instance.
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
      obj = obj || new ValueAddedServiceDetails();
      if (data.hasOwnProperty('collectOnDelivery'))
        obj.collectOnDelivery = CollectOnDelivery.constructFromObject(data['collectOnDelivery']);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.shipping_v2.model/CollectOnDelivery} collectOnDelivery
 */
ValueAddedServiceDetails.prototype.collectOnDelivery = undefined;


