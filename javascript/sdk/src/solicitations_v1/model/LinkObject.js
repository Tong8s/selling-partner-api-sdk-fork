/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
 * The LinkObject model module.
 * @module solicitations_v1/model/LinkObject
 * @version v1
 */
export class LinkObject {
  /**
   * Constructs a new <code>LinkObject</code>.
   * A Link object.
   * @alias module:solicitations_v1/model/LinkObject
   * @class
   * @param href {String} A URI for this object.
   */
  constructor(href) {
    this.href = href;
  }

  /**
   * Constructs a <code>LinkObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:solicitations_v1/model/LinkObject} obj Optional instance to populate.
   * @return {module:solicitations_v1/model/LinkObject} The populated <code>LinkObject</code> instance.
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
      obj = obj || new LinkObject();
      if (data.hasOwnProperty('href'))
        obj.href = ApiClient.convertToType(data['href'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * A URI for this object.
 * @member {String} href
 */
LinkObject.prototype.href = undefined;

/**
 * An identifier for this object.
 * @member {String} name
 */
LinkObject.prototype.name = undefined;


