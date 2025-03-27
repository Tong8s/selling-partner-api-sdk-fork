/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {TimeInterval} from './TimeInterval.js';

/**
 * The ListOfferMetricsResponseOffer model module.
 * @module js_client.replenishment_v2022_11_07.model/ListOfferMetricsResponseOffer
 * @version 2022-11-07
 */
export class ListOfferMetricsResponseOffer {
  /**
   * Constructs a new <code>ListOfferMetricsResponseOffer</code>.
   * An object which contains offer metrics.
   * @alias module:js_client.replenishment_v2022_11_07.model/ListOfferMetricsResponseOffer
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ListOfferMetricsResponseOffer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.replenishment_v2022_11_07.model/ListOfferMetricsResponseOffer} obj Optional instance to populate.
   * @return {module:js_client.replenishment_v2022_11_07.model/ListOfferMetricsResponseOffer} The populated <code>ListOfferMetricsResponseOffer</code> instance.
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
      obj = obj || new ListOfferMetricsResponseOffer();
      if (data.hasOwnProperty('asin'))
        obj.asin = ApiClient.convertToType(data['asin'], 'String');
      if (data.hasOwnProperty('notDeliveredDueToOOS'))
        obj.notDeliveredDueToOOS = ApiClient.convertToType(data['notDeliveredDueToOOS'], 'Number');
      if (data.hasOwnProperty('totalSubscriptionsRevenue'))
        obj.totalSubscriptionsRevenue = ApiClient.convertToType(data['totalSubscriptionsRevenue'], 'Number');
      if (data.hasOwnProperty('shippedSubscriptionUnits'))
        obj.shippedSubscriptionUnits = ApiClient.convertToType(data['shippedSubscriptionUnits'], 'Number');
      if (data.hasOwnProperty('activeSubscriptions'))
        obj.activeSubscriptions = ApiClient.convertToType(data['activeSubscriptions'], 'Number');
      if (data.hasOwnProperty('revenuePenetration'))
        obj.revenuePenetration = ApiClient.convertToType(data['revenuePenetration'], 'Number');
      if (data.hasOwnProperty('lostRevenueDueToOOS'))
        obj.lostRevenueDueToOOS = ApiClient.convertToType(data['lostRevenueDueToOOS'], 'Number');
      if (data.hasOwnProperty('couponsRevenuePenetration'))
        obj.couponsRevenuePenetration = ApiClient.convertToType(data['couponsRevenuePenetration'], 'Number');
      if (data.hasOwnProperty('shareOfCouponSubscriptions'))
        obj.shareOfCouponSubscriptions = ApiClient.convertToType(data['shareOfCouponSubscriptions'], 'Number');
      if (data.hasOwnProperty('next30DayTotalSubscriptionsRevenue'))
        obj.next30DayTotalSubscriptionsRevenue = ApiClient.convertToType(data['next30DayTotalSubscriptionsRevenue'], 'Number');
      if (data.hasOwnProperty('next60DayTotalSubscriptionsRevenue'))
        obj.next60DayTotalSubscriptionsRevenue = ApiClient.convertToType(data['next60DayTotalSubscriptionsRevenue'], 'Number');
      if (data.hasOwnProperty('next90DayTotalSubscriptionsRevenue'))
        obj.next90DayTotalSubscriptionsRevenue = ApiClient.convertToType(data['next90DayTotalSubscriptionsRevenue'], 'Number');
      if (data.hasOwnProperty('next30DayShippedSubscriptionUnits'))
        obj.next30DayShippedSubscriptionUnits = ApiClient.convertToType(data['next30DayShippedSubscriptionUnits'], 'Number');
      if (data.hasOwnProperty('next60DayShippedSubscriptionUnits'))
        obj.next60DayShippedSubscriptionUnits = ApiClient.convertToType(data['next60DayShippedSubscriptionUnits'], 'Number');
      if (data.hasOwnProperty('next90DayShippedSubscriptionUnits'))
        obj.next90DayShippedSubscriptionUnits = ApiClient.convertToType(data['next90DayShippedSubscriptionUnits'], 'Number');
      if (data.hasOwnProperty('timeInterval'))
        obj.timeInterval = TimeInterval.constructFromObject(data['timeInterval']);
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
    }
    return obj;
  }
}

/**
 * The Amazon Standard Identification Number (ASIN).
 * @member {String} asin
 */
ListOfferMetricsResponseOffer.prototype.asin = undefined;

/**
 * The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable to PERFORMANCE timePeriodType.
 * @member {Number} notDeliveredDueToOOS
 */
ListOfferMetricsResponseOffer.prototype.notDeliveredDueToOOS = undefined;

/**
 * The revenue generated from subscriptions over a period of time. Applicable to PERFORMANCE timePeriodType.
 * @member {Number} totalSubscriptionsRevenue
 */
ListOfferMetricsResponseOffer.prototype.totalSubscriptionsRevenue = undefined;

/**
 * The number of units shipped to the subscribers over a period of time. Applicable to PERFORMANCE timePeriodType.
 * @member {Number} shippedSubscriptionUnits
 */
ListOfferMetricsResponseOffer.prototype.shippedSubscriptionUnits = undefined;

/**
 * The number of active subscriptions present at the end of the period. Applicable to PERFORMANCE timePeriodType.
 * @member {Number} activeSubscriptions
 */
ListOfferMetricsResponseOffer.prototype.activeSubscriptions = undefined;

/**
 * The percentage of total program revenue out of total product revenue. Applicable to PERFORMANCE timePeriodType.
 * @member {Number} revenuePenetration
 */
ListOfferMetricsResponseOffer.prototype.revenuePenetration = undefined;

/**
 * The revenue that would have been generated had there not been out of stock. Applicable to PERFORMANCE timePeriodType.
 * @member {Number} lostRevenueDueToOOS
 */
ListOfferMetricsResponseOffer.prototype.lostRevenueDueToOOS = undefined;

/**
 * The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable to PERFORMANCE timePeriodType.
 * @member {Number} couponsRevenuePenetration
 */
ListOfferMetricsResponseOffer.prototype.couponsRevenuePenetration = undefined;

/**
 * The percentage of new subscriptions acquired through coupons. Applicable to PERFORMANCE timePeriodType.
 * @member {Number} shareOfCouponSubscriptions
 */
ListOfferMetricsResponseOffer.prototype.shareOfCouponSubscriptions = undefined;

/**
 * The forecasted total subscription revenue for the next 30 days. Applicable to FORECAST timePeriodType.
 * @member {Number} next30DayTotalSubscriptionsRevenue
 */
ListOfferMetricsResponseOffer.prototype.next30DayTotalSubscriptionsRevenue = undefined;

/**
 * The forecasted total subscription revenue for the next 60 days. Applicable to FORECAST timePeriodType.
 * @member {Number} next60DayTotalSubscriptionsRevenue
 */
ListOfferMetricsResponseOffer.prototype.next60DayTotalSubscriptionsRevenue = undefined;

/**
 * The forecasted total subscription revenue for the next 90 days. Applicable to FORECAST timePeriodType.
 * @member {Number} next90DayTotalSubscriptionsRevenue
 */
ListOfferMetricsResponseOffer.prototype.next90DayTotalSubscriptionsRevenue = undefined;

/**
 * The forecasted shipped subscription units for the next 30 days. Applicable to FORECAST timePeriodType.
 * @member {Number} next30DayShippedSubscriptionUnits
 */
ListOfferMetricsResponseOffer.prototype.next30DayShippedSubscriptionUnits = undefined;

/**
 * The forecasted shipped subscription units for the next 60 days. Applicable to FORECAST timePeriodType.
 * @member {Number} next60DayShippedSubscriptionUnits
 */
ListOfferMetricsResponseOffer.prototype.next60DayShippedSubscriptionUnits = undefined;

/**
 * The forecasted shipped subscription units for the next 90 days. Applicable to FORECAST timePeriodType.
 * @member {Number} next90DayShippedSubscriptionUnits
 */
ListOfferMetricsResponseOffer.prototype.next90DayShippedSubscriptionUnits = undefined;

/**
 * @member {module:js_client.replenishment_v2022_11_07.model/TimeInterval} timeInterval
 */
ListOfferMetricsResponseOffer.prototype.timeInterval = undefined;

/**
 * The currency code in ISO 4217 format.
 * @member {String} currencyCode
 */
ListOfferMetricsResponseOffer.prototype.currencyCode = undefined;


