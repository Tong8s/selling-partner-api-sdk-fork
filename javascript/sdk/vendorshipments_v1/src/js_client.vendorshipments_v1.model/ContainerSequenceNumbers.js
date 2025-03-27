/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The ContainerSequenceNumbers model module.
 * @module js_client.vendorshipments_v1.model/ContainerSequenceNumbers
 * @version v1
 */
export class ContainerSequenceNumbers {
  /**
   * Constructs a new <code>ContainerSequenceNumbers</code>.
   * Container sequence numbers that are involved in this shipment.
   * @alias module:js_client.vendorshipments_v1.model/ContainerSequenceNumbers
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ContainerSequenceNumbers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendorshipments_v1.model/ContainerSequenceNumbers} obj Optional instance to populate.
   * @return {module:js_client.vendorshipments_v1.model/ContainerSequenceNumbers} The populated <code>ContainerSequenceNumbers</code> instance.
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
      obj = obj || new ContainerSequenceNumbers();
      if (data.hasOwnProperty('containerSequenceNumber'))
        obj.containerSequenceNumber = ApiClient.convertToType(data['containerSequenceNumber'], 'String');
    }
    return obj;
  }
}

/**
 * A list of containers shipped
 * @member {String} containerSequenceNumber
 */
ContainerSequenceNumbers.prototype.containerSequenceNumber = undefined;


