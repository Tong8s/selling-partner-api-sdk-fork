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
import {RejectedShippingService} from './RejectedShippingService.js';
import {ShippingService} from './ShippingService.js';
import {TemporarilyUnavailableCarrier} from './TemporarilyUnavailableCarrier.js';
import {TermsAndConditionsNotAcceptedCarrier} from './TermsAndConditionsNotAcceptedCarrier.js';

/**
 * The GetEligibleShipmentServicesResult model module.
 * @module js_client.merchantfulfillment_v0.model/GetEligibleShipmentServicesResult
 * @version v0
 */
export class GetEligibleShipmentServicesResult {
  /**
   * Constructs a new <code>GetEligibleShipmentServicesResult</code>.
   * The payload for the &#x60;getEligibleShipmentServices&#x60; operation.
   * @alias module:js_client.merchantfulfillment_v0.model/GetEligibleShipmentServicesResult
   * @class
   * @param shippingServiceList {Array.<module:js_client.merchantfulfillment_v0.model/ShippingService>} A list of shipping services offers.
   */
  constructor(shippingServiceList) {
    this.shippingServiceList = shippingServiceList;
  }

  /**
   * Constructs a <code>GetEligibleShipmentServicesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.merchantfulfillment_v0.model/GetEligibleShipmentServicesResult} obj Optional instance to populate.
   * @return {module:js_client.merchantfulfillment_v0.model/GetEligibleShipmentServicesResult} The populated <code>GetEligibleShipmentServicesResult</code> instance.
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
      obj = obj || new GetEligibleShipmentServicesResult();
      if (data.hasOwnProperty('ShippingServiceList'))
        obj.shippingServiceList = ApiClient.convertToType(data['ShippingServiceList'], [ShippingService]);
      if (data.hasOwnProperty('RejectedShippingServiceList'))
        obj.rejectedShippingServiceList = ApiClient.convertToType(data['RejectedShippingServiceList'], [RejectedShippingService]);
      if (data.hasOwnProperty('TemporarilyUnavailableCarrierList'))
        obj.temporarilyUnavailableCarrierList = ApiClient.convertToType(data['TemporarilyUnavailableCarrierList'], [TemporarilyUnavailableCarrier]);
      if (data.hasOwnProperty('TermsAndConditionsNotAcceptedCarrierList'))
        obj.termsAndConditionsNotAcceptedCarrierList = ApiClient.convertToType(data['TermsAndConditionsNotAcceptedCarrierList'], [TermsAndConditionsNotAcceptedCarrier]);
    }
    return obj;
  }
}

/**
 * A list of shipping services offers.
 * @member {Array.<module:js_client.merchantfulfillment_v0.model/ShippingService>} shippingServiceList
 */
GetEligibleShipmentServicesResult.prototype.shippingServiceList = undefined;

/**
 * List of services that are for some reason unavailable for this request
 * @member {Array.<module:js_client.merchantfulfillment_v0.model/RejectedShippingService>} rejectedShippingServiceList
 */
GetEligibleShipmentServicesResult.prototype.rejectedShippingServiceList = undefined;

/**
 * A list of temporarily unavailable carriers.
 * @member {Array.<module:js_client.merchantfulfillment_v0.model/TemporarilyUnavailableCarrier>} temporarilyUnavailableCarrierList
 */
GetEligibleShipmentServicesResult.prototype.temporarilyUnavailableCarrierList = undefined;

/**
 * List of carriers whose terms and conditions were not accepted by the seller.
 * @member {Array.<module:js_client.merchantfulfillment_v0.model/TermsAndConditionsNotAcceptedCarrier>} termsAndConditionsNotAcceptedCarrierList
 */
GetEligibleShipmentServicesResult.prototype.termsAndConditionsNotAcceptedCarrierList = undefined;


