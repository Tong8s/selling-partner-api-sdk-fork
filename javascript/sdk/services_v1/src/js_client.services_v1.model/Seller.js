/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
 * The Seller model module.
 * @module js_client.services_v1.model/Seller
 * @version v1
 */
export class Seller {
  /**
   * Constructs a new <code>Seller</code>.
   * Information about the seller of the service job.
   * @alias module:js_client.services_v1.model/Seller
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Seller</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.services_v1.model/Seller} obj Optional instance to populate.
   * @return {module:js_client.services_v1.model/Seller} The populated <code>Seller</code> instance.
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
      obj = obj || new Seller();
      if (data.hasOwnProperty('sellerId'))
        obj.sellerId = ApiClient.convertToType(data['sellerId'], 'String');
    }
    return obj;
  }
}

/**
 * The identifier of the seller of the service job.
 * @member {String} sellerId
 */
Seller.prototype.sellerId = undefined;


