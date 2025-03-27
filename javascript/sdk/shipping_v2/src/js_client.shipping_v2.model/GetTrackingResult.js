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
import {Event} from './Event.js';
import {TrackingSummary} from './TrackingSummary.js';

/**
 * The GetTrackingResult model module.
 * @module js_client.shipping_v2.model/GetTrackingResult
 * @version v2
 */
export class GetTrackingResult {
  /**
   * Constructs a new <code>GetTrackingResult</code>.
   * The payload for the getTracking operation.
   * @alias module:js_client.shipping_v2.model/GetTrackingResult
   * @class
   * @param trackingId {String} The carrier generated identifier for a package in a purchased shipment.
   * @param alternateLegTrackingId {String} The carrier generated reverse identifier for a returned package in a purchased shipment.
   * @param eventHistory {Array.<module:js_client.shipping_v2.model/Event>} A list of tracking events.
   * @param promisedDeliveryDate {Date} The date and time by which the shipment is promised to be delivered.
   * @param summary {module:js_client.shipping_v2.model/TrackingSummary} 
   */
  constructor(trackingId, alternateLegTrackingId, eventHistory, promisedDeliveryDate, summary) {
    this.trackingId = trackingId;
    this.alternateLegTrackingId = alternateLegTrackingId;
    this.eventHistory = eventHistory;
    this.promisedDeliveryDate = promisedDeliveryDate;
    this.summary = summary;
  }

  /**
   * Constructs a <code>GetTrackingResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.shipping_v2.model/GetTrackingResult} obj Optional instance to populate.
   * @return {module:js_client.shipping_v2.model/GetTrackingResult} The populated <code>GetTrackingResult</code> instance.
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
      obj = obj || new GetTrackingResult();
      if (data.hasOwnProperty('trackingId'))
        obj.trackingId = ApiClient.convertToType(data['trackingId'], 'String');
      if (data.hasOwnProperty('alternateLegTrackingId'))
        obj.alternateLegTrackingId = ApiClient.convertToType(data['alternateLegTrackingId'], 'String');
      if (data.hasOwnProperty('eventHistory'))
        obj.eventHistory = ApiClient.convertToType(data['eventHistory'], [Event]);
      if (data.hasOwnProperty('promisedDeliveryDate'))
        obj.promisedDeliveryDate = ApiClient.convertToType(data['promisedDeliveryDate'], 'Date');
      if (data.hasOwnProperty('summary'))
        obj.summary = TrackingSummary.constructFromObject(data['summary']);
    }
    return obj;
  }
}

/**
 * The carrier generated identifier for a package in a purchased shipment.
 * @member {String} trackingId
 */
GetTrackingResult.prototype.trackingId = undefined;

/**
 * The carrier generated reverse identifier for a returned package in a purchased shipment.
 * @member {String} alternateLegTrackingId
 */
GetTrackingResult.prototype.alternateLegTrackingId = undefined;

/**
 * A list of tracking events.
 * @member {Array.<module:js_client.shipping_v2.model/Event>} eventHistory
 */
GetTrackingResult.prototype.eventHistory = undefined;

/**
 * The date and time by which the shipment is promised to be delivered.
 * @member {Date} promisedDeliveryDate
 */
GetTrackingResult.prototype.promisedDeliveryDate = undefined;

/**
 * @member {module:js_client.shipping_v2.model/TrackingSummary} summary
 */
GetTrackingResult.prototype.summary = undefined;


