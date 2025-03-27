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
 * The DebtRecoveryItem model module.
 * @module js_client.finances_v0.model/DebtRecoveryItem
 * @version v0
 */
export class DebtRecoveryItem {
  /**
   * Constructs a new <code>DebtRecoveryItem</code>.
   * An item of a debt payment or debt adjustment.
   * @alias module:js_client.finances_v0.model/DebtRecoveryItem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DebtRecoveryItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.finances_v0.model/DebtRecoveryItem} obj Optional instance to populate.
   * @return {module:js_client.finances_v0.model/DebtRecoveryItem} The populated <code>DebtRecoveryItem</code> instance.
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
      obj = obj || new DebtRecoveryItem();
      if (data.hasOwnProperty('RecoveryAmount'))
        obj.recoveryAmount = Currency.constructFromObject(data['RecoveryAmount']);
      if (data.hasOwnProperty('OriginalAmount'))
        obj.originalAmount = Currency.constructFromObject(data['OriginalAmount']);
      if (data.hasOwnProperty('GroupBeginDate'))
        obj.groupBeginDate = ApiClient.convertToType(data['GroupBeginDate'], 'Date');
      if (data.hasOwnProperty('GroupEndDate'))
        obj.groupEndDate = ApiClient.convertToType(data['GroupEndDate'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {module:js_client.finances_v0.model/Currency} recoveryAmount
 */
DebtRecoveryItem.prototype.recoveryAmount = undefined;

/**
 * @member {module:js_client.finances_v0.model/Currency} originalAmount
 */
DebtRecoveryItem.prototype.originalAmount = undefined;

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} groupBeginDate
 */
DebtRecoveryItem.prototype.groupBeginDate = undefined;

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} groupEndDate
 */
DebtRecoveryItem.prototype.groupEndDate = undefined;


