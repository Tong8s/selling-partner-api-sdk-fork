/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {FulfillmentAvailability} from './FulfillmentAvailability.js';
import {Issue} from './Issue.js';
import {ItemOfferByMarketplace} from './ItemOfferByMarketplace.js';
import {ItemProcurement} from './ItemProcurement.js';
import {ItemProductTypeByMarketplace} from './ItemProductTypeByMarketplace.js';
import {ItemRelationshipsByMarketplace} from './ItemRelationshipsByMarketplace.js';
import {ItemSummaryByMarketplace} from './ItemSummaryByMarketplace.js';

/**
 * The Item model module.
 * @module js_client.listingsitems_v2021_08_01.model/Item
 * @version 2021-08-01
 */
export class Item {
  /**
   * Constructs a new <code>Item</code>.
   * A listings item.
   * @alias module:js_client.listingsitems_v2021_08_01.model/Item
   * @class
   * @param sku {String} A selling partner provided identifier for an Amazon listing.
   */
  constructor(sku) {
    this.sku = sku;
  }

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.listingsitems_v2021_08_01.model/Item} obj Optional instance to populate.
   * @return {module:js_client.listingsitems_v2021_08_01.model/Item} The populated <code>Item</code> instance.
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
      obj = obj || new Item();
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('summaries'))
        obj.summaries = ApiClient.convertToType(data['summaries'], [ItemSummaryByMarketplace]);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ApiClient.convertToType(data['attributes'], {'String': Object});
      if (data.hasOwnProperty('issues'))
        obj.issues = ApiClient.convertToType(data['issues'], [Issue]);
      if (data.hasOwnProperty('offers'))
        obj.offers = ApiClient.convertToType(data['offers'], [ItemOfferByMarketplace]);
      if (data.hasOwnProperty('fulfillmentAvailability'))
        obj.fulfillmentAvailability = ApiClient.convertToType(data['fulfillmentAvailability'], [FulfillmentAvailability]);
      if (data.hasOwnProperty('procurement'))
        obj.procurement = ApiClient.convertToType(data['procurement'], [ItemProcurement]);
      if (data.hasOwnProperty('relationships'))
        obj.relationships = ApiClient.convertToType(data['relationships'], [ItemRelationshipsByMarketplace]);
      if (data.hasOwnProperty('productTypes'))
        obj.productTypes = ApiClient.convertToType(data['productTypes'], [ItemProductTypeByMarketplace]);
    }
    return obj;
  }
}

/**
 * A selling partner provided identifier for an Amazon listing.
 * @member {String} sku
 */
Item.prototype.sku = undefined;

/**
 * Summary details of a listings item.
 * @member {Array.<module:js_client.listingsitems_v2021_08_01.model/ItemSummaryByMarketplace>} summaries
 */
Item.prototype.summaries = undefined;

/**
 * A JSON object containing structured listings item attribute data keyed by attribute name.
 * @member {Object.<String, Object>} attributes
 */
Item.prototype.attributes = undefined;

/**
 * The issues associated with the listings item.
 * @member {Array.<module:js_client.listingsitems_v2021_08_01.model/Issue>} issues
 */
Item.prototype.issues = undefined;

/**
 * Offer details for the listings item.
 * @member {Array.<module:js_client.listingsitems_v2021_08_01.model/ItemOfferByMarketplace>} offers
 */
Item.prototype.offers = undefined;

/**
 * The fulfillment availability for the listings item.
 * @member {Array.<module:js_client.listingsitems_v2021_08_01.model/FulfillmentAvailability>} fulfillmentAvailability
 */
Item.prototype.fulfillmentAvailability = undefined;

/**
 * The vendor procurement information for the listings item.
 * @member {Array.<module:js_client.listingsitems_v2021_08_01.model/ItemProcurement>} procurement
 */
Item.prototype.procurement = undefined;

/**
 * Relationships for a listing item, by marketplace (for example, variations).
 * @member {Array.<module:js_client.listingsitems_v2021_08_01.model/ItemRelationshipsByMarketplace>} relationships
 */
Item.prototype.relationships = undefined;

/**
 * Product types for a listing item, by marketplace.
 * @member {Array.<module:js_client.listingsitems_v2021_08_01.model/ItemProductTypeByMarketplace>} productTypes
 */
Item.prototype.productTypes = undefined;


