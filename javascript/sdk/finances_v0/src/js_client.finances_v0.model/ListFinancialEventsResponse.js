/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import {Error} from './Error.js';
import {ListFinancialEventsPayload} from './ListFinancialEventsPayload.js';

/**
 * The ListFinancialEventsResponse model module.
 * @module js_client.finances_v0.model/ListFinancialEventsResponse
 * @version v0
 */
export class ListFinancialEventsResponse {
  /**
   * Constructs a new <code>ListFinancialEventsResponse</code>.
   * The response schema for the listFinancialEvents operation.
   * @alias module:js_client.finances_v0.model/ListFinancialEventsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ListFinancialEventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.finances_v0.model/ListFinancialEventsResponse} obj Optional instance to populate.
   * @return {module:js_client.finances_v0.model/ListFinancialEventsResponse} The populated <code>ListFinancialEventsResponse</code> instance.
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
      obj = obj || new ListFinancialEventsResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = ListFinancialEventsPayload.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.finances_v0.model/ListFinancialEventsPayload} payload
 */
ListFinancialEventsResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:js_client.finances_v0.model/Error>} errors
 */
ListFinancialEventsResponse.prototype.errors = undefined;


