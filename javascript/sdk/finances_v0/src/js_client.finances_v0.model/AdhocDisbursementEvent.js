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
import {Currency} from './Currency.js';

/**
 * The AdhocDisbursementEvent model module.
 * @module js_client.finances_v0.model/AdhocDisbursementEvent
 * @version v0
 */
export class AdhocDisbursementEvent {
  /**
   * Constructs a new <code>AdhocDisbursementEvent</code>.
   * An event related to an Adhoc Disbursement.
   * @alias module:js_client.finances_v0.model/AdhocDisbursementEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdhocDisbursementEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.finances_v0.model/AdhocDisbursementEvent} obj Optional instance to populate.
   * @return {module:js_client.finances_v0.model/AdhocDisbursementEvent} The populated <code>AdhocDisbursementEvent</code> instance.
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
      obj = obj || new AdhocDisbursementEvent();
      if (data.hasOwnProperty('TransactionType'))
        obj.transactionType = ApiClient.convertToType(data['TransactionType'], 'String');
      if (data.hasOwnProperty('PostedDate'))
        obj.postedDate = ApiClient.convertToType(data['PostedDate'], 'Date');
      if (data.hasOwnProperty('TransactionId'))
        obj.transactionId = ApiClient.convertToType(data['TransactionId'], 'String');
      if (data.hasOwnProperty('TransactionAmount'))
        obj.transactionAmount = Currency.constructFromObject(data['TransactionAmount']);
    }
    return obj;
  }
}

/**
 * Indicates the type of transaction.  Example: \"Disbursed to Amazon Gift Card balance\"
 * @member {String} transactionType
 */
AdhocDisbursementEvent.prototype.transactionType = undefined;

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} postedDate
 */
AdhocDisbursementEvent.prototype.postedDate = undefined;

/**
 * The identifier for the transaction.
 * @member {String} transactionId
 */
AdhocDisbursementEvent.prototype.transactionId = undefined;

/**
 * @member {module:js_client.finances_v0.model/Currency} transactionAmount
 */
AdhocDisbursementEvent.prototype.transactionAmount = undefined;


