/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * The version of the OpenAPI document: 2021-06-30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The CreateFeedResponse model module.
 * @module js_client.feeds_v2021_06_30.model/CreateFeedResponse
 * @version 2021-06-30
 */
export class CreateFeedResponse {
  /**
   * Constructs a new <code>CreateFeedResponse</code>.
   * Response schema.
   * @alias module:js_client.feeds_v2021_06_30.model/CreateFeedResponse
   * @class
   * @param feedId {String} The identifier for the feed. This identifier is unique only in combination with a seller ID.
   */
  constructor(feedId) {
    this.feedId = feedId;
  }

  /**
   * Constructs a <code>CreateFeedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.feeds_v2021_06_30.model/CreateFeedResponse} obj Optional instance to populate.
   * @return {module:js_client.feeds_v2021_06_30.model/CreateFeedResponse} The populated <code>CreateFeedResponse</code> instance.
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
      obj = obj || new CreateFeedResponse();
      if (data.hasOwnProperty('feedId'))
        obj.feedId = ApiClient.convertToType(data['feedId'], 'String');
    }
    return obj;
  }
}

/**
 * The identifier for the feed. This identifier is unique only in combination with a seller ID.
 * @member {String} feedId
 */
CreateFeedResponse.prototype.feedId = undefined;


