/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Address} from './Address.js';

/**
 * The DestinationDetails model module.
 * @module js_client.awd_v2024_05_09.model/DestinationDetails
 * @version 2024-05-09
 */
export class DestinationDetails {
  /**
   * Constructs a new <code>DestinationDetails</code>.
   * Destination details of an inbound order based on the assigned region and DC for the order.
   * @alias module:js_client.awd_v2024_05_09.model/DestinationDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DestinationDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.awd_v2024_05_09.model/DestinationDetails} obj Optional instance to populate.
   * @return {module:js_client.awd_v2024_05_09.model/DestinationDetails} The populated <code>DestinationDetails</code> instance.
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
      obj = obj || new DestinationDetails();
      if (data.hasOwnProperty('destinationAddress'))
        obj.destinationAddress = Address.constructFromObject(data['destinationAddress']);
      if (data.hasOwnProperty('destinationRegion'))
        obj.destinationRegion = ApiClient.convertToType(data['destinationRegion'], 'String');
      if (data.hasOwnProperty('shipmentId'))
        obj.shipmentId = ApiClient.convertToType(data['shipmentId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:js_client.awd_v2024_05_09.model/Address} destinationAddress
 */
DestinationDetails.prototype.destinationAddress = undefined;

/**
 * Assigned region where the order will be shipped. This can differ from what was passed as preference. AWD currently supports following region IDs: [us-west, us-east, us-southcentral, us-southeast]
 * @member {String} destinationRegion
 */
DestinationDetails.prototype.destinationRegion = undefined;

/**
 * Unique ID of the confirmed shipment being shipped to the assigned destination. This will be available only after an inbound order is confirmed and can be used to track the shipment.
 * @member {String} shipmentId
 */
DestinationDetails.prototype.shipmentId = undefined;


