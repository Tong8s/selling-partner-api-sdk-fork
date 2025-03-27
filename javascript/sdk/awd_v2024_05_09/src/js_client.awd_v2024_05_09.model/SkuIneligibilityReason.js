/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The SkuIneligibilityReason model module.
 * @module js_client.awd_v2024_05_09.model/SkuIneligibilityReason
 * @version 2024-05-09
 */
export class SkuIneligibilityReason {
  /**
   * Constructs a new <code>SkuIneligibilityReason</code>.
   * Represents the ineligibility reason for one SKU.
   * @alias module:js_client.awd_v2024_05_09.model/SkuIneligibilityReason
   * @class
   * @param code {String} Code for the SKU ineligibility.
   * @param description {String} Detailed description of the SKU ineligibility.
   */
  constructor(code, description) {
    this.code = code;
    this.description = description;
  }

  /**
   * Constructs a <code>SkuIneligibilityReason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.awd_v2024_05_09.model/SkuIneligibilityReason} obj Optional instance to populate.
   * @return {module:js_client.awd_v2024_05_09.model/SkuIneligibilityReason} The populated <code>SkuIneligibilityReason</code> instance.
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
      obj = obj || new SkuIneligibilityReason();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }
}

/**
 * Code for the SKU ineligibility.
 * @member {String} code
 */
SkuIneligibilityReason.prototype.code = undefined;

/**
 * Detailed description of the SKU ineligibility.
 * @member {String} description
 */
SkuIneligibilityReason.prototype.description = undefined;


