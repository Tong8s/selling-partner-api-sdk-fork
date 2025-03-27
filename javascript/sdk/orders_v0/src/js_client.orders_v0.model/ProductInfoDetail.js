/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
 * The ProductInfoDetail model module.
 * @module js_client.orders_v0.model/ProductInfoDetail
 * @version v0
 */
export class ProductInfoDetail {
  /**
   * Constructs a new <code>ProductInfoDetail</code>.
   * Product information on the number of items.
   * @alias module:js_client.orders_v0.model/ProductInfoDetail
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProductInfoDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.orders_v0.model/ProductInfoDetail} obj Optional instance to populate.
   * @return {module:js_client.orders_v0.model/ProductInfoDetail} The populated <code>ProductInfoDetail</code> instance.
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
      obj = obj || new ProductInfoDetail();
      if (data.hasOwnProperty('NumberOfItems'))
        obj.numberOfItems = ApiClient.convertToType(data['NumberOfItems'], 'String');
    }
    return obj;
  }
}

/**
 * The total number of items that are included in the ASIN.
 * @member {String} numberOfItems
 */
ProductInfoDetail.prototype.numberOfItems = undefined;


