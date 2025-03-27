/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
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
import {AggregationFilter} from './AggregationFilter.js';
import {AggregationSettings} from './AggregationSettings.js';
import {MarketplaceFilter} from './MarketplaceFilter.js';
import {OrderChangeTypeEnum} from './OrderChangeTypeEnum.js';
import {OrderChangeTypeFilter} from './OrderChangeTypeFilter.js';

/**
 * The EventFilter model module.
 * @module js_client.notifications_v1.model/EventFilter
 * @version v1
 */
export class EventFilter {
  /**
   * Constructs a new <code>EventFilter</code>.
   * A &#x60;notificationType&#x60; specific filter. This object contains all of the currently available filters and properties that you can use to define a &#x60;notificationType&#x60; specific filter.
   * @alias module:js_client.notifications_v1.model/EventFilter
   * @class
   * @implements module:js_client.notifications_v1.model/AggregationFilter
   * @implements module:js_client.notifications_v1.model/MarketplaceFilter
   * @implements module:js_client.notifications_v1.model/OrderChangeTypeFilter
   * @param eventFilterType {module:js_client.notifications_v1.model/EventFilter.EventFilterTypeEnum} An `eventFilterType` value that is supported by the specific `notificationType`. This is used by the subscription service to determine the type of event filter. Refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values) to determine if an `eventFilterType` is supported.
   */
  constructor(eventFilterType) {
    AggregationFilter.call(this);
    MarketplaceFilter.call(this);
    OrderChangeTypeFilter.call(this);
    this.eventFilterType = eventFilterType;
  }

  /**
   * Constructs a <code>EventFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.notifications_v1.model/EventFilter} obj Optional instance to populate.
   * @return {module:js_client.notifications_v1.model/EventFilter} The populated <code>EventFilter</code> instance.
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
      obj = obj || new EventFilter();
      AggregationFilter.constructFromObject(data, obj);
      MarketplaceFilter.constructFromObject(data, obj);
      OrderChangeTypeFilter.constructFromObject(data, obj);
      if (data.hasOwnProperty('aggregationSettings'))
        obj.aggregationSettings = AggregationSettings.constructFromObject(data['aggregationSettings']);
      if (data.hasOwnProperty('marketplaceIds'))
        obj.marketplaceIds = ApiClient.convertToType(data['marketplaceIds'], ['String']);
      if (data.hasOwnProperty('orderChangeTypes'))
        obj.orderChangeTypes = ApiClient.convertToType(data['orderChangeTypes'], [OrderChangeTypeEnum]);
      if (data.hasOwnProperty('eventFilterType'))
        obj.eventFilterType = ApiClient.convertToType(data['eventFilterType'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:js_client.notifications_v1.model/AggregationSettings} aggregationSettings
 */
EventFilter.prototype.aggregationSettings = undefined;

/**
 * A list of marketplace identifiers to subscribe to (for example: ATVPDKIKX0DER). To receive notifications in every marketplace, do not provide this list.
 * @member {Array.<String>} marketplaceIds
 */
EventFilter.prototype.marketplaceIds = undefined;

/**
 * A list of order change types to subscribe to (for example: `BuyerRequestedChange`). To receive notifications of all change types, do not provide this list.
 * @member {Array.<module:js_client.notifications_v1.model/OrderChangeTypeEnum>} orderChangeTypes
 */
EventFilter.prototype.orderChangeTypes = undefined;

/**
 * Allowed values for the <code>eventFilterType</code> property.
 * @enum {String}
 * @readonly
 */
EventFilter['EventFilterTypeEnum'] = {

    /**
     * value: "ANY_OFFER_CHANGED"
     * @const
     */
    "ANY_OFFER_CHANGED": "ANY_OFFER_CHANGED",

    /**
     * value: "ORDER_CHANGE"
     * @const
     */
    "ORDER_CHANGE": "ORDER_CHANGE"
};

/**
 * An `eventFilterType` value that is supported by the specific `notificationType`. This is used by the subscription service to determine the type of event filter. Refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values) to determine if an `eventFilterType` is supported.
 * @member {module:js_client.notifications_v1.model/EventFilter.EventFilterTypeEnum} eventFilterType
 */
EventFilter.prototype.eventFilterType = undefined;

// Implement AggregationFilter interface:
/**
 * @member {module:js_client.notifications_v1.model/AggregationSettings} aggregationSettings
 */
AggregationFilter.prototype.aggregationSettings = undefined;

// Implement MarketplaceFilter interface:
/**
 * A list of marketplace identifiers to subscribe to (for example: ATVPDKIKX0DER). To receive notifications in every marketplace, do not provide this list.
 * @member {Array.<String>} marketplaceIds
 */
MarketplaceFilter.prototype.marketplaceIds = undefined;

// Implement OrderChangeTypeFilter interface:
/**
 * A list of order change types to subscribe to (for example: `BuyerRequestedChange`). To receive notifications of all change types, do not provide this list.
 * @member {Array.<module:js_client.notifications_v1.model/OrderChangeTypeEnum>} orderChangeTypes
 */
OrderChangeTypeFilter.prototype.orderChangeTypes = undefined;


