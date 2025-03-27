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
import {Audience} from './Audience.js';
import {Money} from './Money.js';
import {Points} from './Points.js';

/**
 * The ItemOfferByMarketplace model module.
 * @module js_client.listingsitems_v2021_08_01.model/ItemOfferByMarketplace
 * @version 2021-08-01
 */
export class ItemOfferByMarketplace {
  /**
   * Constructs a new <code>ItemOfferByMarketplace</code>.
   * Offer details of a listings item for an Amazon marketplace.
   * @alias module:js_client.listingsitems_v2021_08_01.model/ItemOfferByMarketplace
   * @class
   * @param marketplaceId {String} The Amazon marketplace identifier.
   * @param offerType {module:js_client.listingsitems_v2021_08_01.model/ItemOfferByMarketplace.OfferTypeEnum} Type of offer for the listings item.
   * @param price {module:js_client.listingsitems_v2021_08_01.model/Money} 
   */
  constructor(marketplaceId, offerType, price) {
    this.marketplaceId = marketplaceId;
    this.offerType = offerType;
    this.price = price;
  }

  /**
   * Constructs a <code>ItemOfferByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.listingsitems_v2021_08_01.model/ItemOfferByMarketplace} obj Optional instance to populate.
   * @return {module:js_client.listingsitems_v2021_08_01.model/ItemOfferByMarketplace} The populated <code>ItemOfferByMarketplace</code> instance.
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
      obj = obj || new ItemOfferByMarketplace();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('offerType'))
        obj.offerType = ApiClient.convertToType(data['offerType'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = Money.constructFromObject(data['price']);
      if (data.hasOwnProperty('points'))
        obj.points = Points.constructFromObject(data['points']);
      if (data.hasOwnProperty('audience'))
        obj.audience = Audience.constructFromObject(data['audience']);
    }
    return obj;
  }
}

/**
 * The Amazon marketplace identifier.
 * @member {String} marketplaceId
 */
ItemOfferByMarketplace.prototype.marketplaceId = undefined;

/**
 * Allowed values for the <code>offerType</code> property.
 * @enum {String}
 * @readonly
 */
ItemOfferByMarketplace['OfferTypeEnum'] = {

    /**
     * value: "B2C"
     * @const
     */
    "B2C": "B2C",

    /**
     * value: "B2B"
     * @const
     */
    "B2B": "B2B"
};

/**
 * Type of offer for the listings item.
 * @member {module:js_client.listingsitems_v2021_08_01.model/ItemOfferByMarketplace.OfferTypeEnum} offerType
 */
ItemOfferByMarketplace.prototype.offerType = undefined;

/**
 * @member {module:js_client.listingsitems_v2021_08_01.model/Money} price
 */
ItemOfferByMarketplace.prototype.price = undefined;

/**
 * @member {module:js_client.listingsitems_v2021_08_01.model/Points} points
 */
ItemOfferByMarketplace.prototype.points = undefined;

/**
 * @member {module:js_client.listingsitems_v2021_08_01.model/Audience} audience
 */
ItemOfferByMarketplace.prototype.audience = undefined;


