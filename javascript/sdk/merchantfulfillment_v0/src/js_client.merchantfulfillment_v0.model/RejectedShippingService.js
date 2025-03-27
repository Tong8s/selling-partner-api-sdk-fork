/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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

/**
 * The RejectedShippingService model module.
 * @module js_client.merchantfulfillment_v0.model/RejectedShippingService
 * @version v0
 */
export class RejectedShippingService {
  /**
   * Constructs a new <code>RejectedShippingService</code>.
   * Information about a rejected shipping service
   * @alias module:js_client.merchantfulfillment_v0.model/RejectedShippingService
   * @class
   * @param carrierName {String} The rejected shipping carrier name. For example, USPS.
   * @param shippingServiceName {String} The rejected shipping service localized name. For example, FedEx Standard Overnight.
   * @param shippingServiceId {String} An Amazon-defined shipping service identifier.
   * @param rejectionReasonCode {String} A reason code meant to be consumed programatically. For example, `CARRIER_CANNOT_SHIP_TO_POBOX`.
   */
  constructor(carrierName, shippingServiceName, shippingServiceId, rejectionReasonCode) {
    this.carrierName = carrierName;
    this.shippingServiceName = shippingServiceName;
    this.shippingServiceId = shippingServiceId;
    this.rejectionReasonCode = rejectionReasonCode;
  }

  /**
   * Constructs a <code>RejectedShippingService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.merchantfulfillment_v0.model/RejectedShippingService} obj Optional instance to populate.
   * @return {module:js_client.merchantfulfillment_v0.model/RejectedShippingService} The populated <code>RejectedShippingService</code> instance.
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
      obj = obj || new RejectedShippingService();
      if (data.hasOwnProperty('CarrierName'))
        obj.carrierName = ApiClient.convertToType(data['CarrierName'], 'String');
      if (data.hasOwnProperty('ShippingServiceName'))
        obj.shippingServiceName = ApiClient.convertToType(data['ShippingServiceName'], 'String');
      if (data.hasOwnProperty('ShippingServiceId'))
        obj.shippingServiceId = ApiClient.convertToType(data['ShippingServiceId'], 'String');
      if (data.hasOwnProperty('RejectionReasonCode'))
        obj.rejectionReasonCode = ApiClient.convertToType(data['RejectionReasonCode'], 'String');
      if (data.hasOwnProperty('RejectionReasonMessage'))
        obj.rejectionReasonMessage = ApiClient.convertToType(data['RejectionReasonMessage'], 'String');
    }
    return obj;
  }
}

/**
 * The rejected shipping carrier name. For example, USPS.
 * @member {String} carrierName
 */
RejectedShippingService.prototype.carrierName = undefined;

/**
 * The rejected shipping service localized name. For example, FedEx Standard Overnight.
 * @member {String} shippingServiceName
 */
RejectedShippingService.prototype.shippingServiceName = undefined;

/**
 * An Amazon-defined shipping service identifier.
 * @member {String} shippingServiceId
 */
RejectedShippingService.prototype.shippingServiceId = undefined;

/**
 * A reason code meant to be consumed programatically. For example, `CARRIER_CANNOT_SHIP_TO_POBOX`.
 * @member {String} rejectionReasonCode
 */
RejectedShippingService.prototype.rejectionReasonCode = undefined;

/**
 * A localized human readable description of the rejected reason.
 * @member {String} rejectionReasonMessage
 */
RejectedShippingService.prototype.rejectionReasonMessage = undefined;


