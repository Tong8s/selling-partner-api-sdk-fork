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
import {TaxWithholdingPeriod} from './TaxWithholdingPeriod.js';

/**
 * The TaxWithholdingEvent model module.
 * @module js_client.finances_v0.model/TaxWithholdingEvent
 * @version v0
 */
export class TaxWithholdingEvent {
  /**
   * Constructs a new <code>TaxWithholdingEvent</code>.
   * A TaxWithholding event on seller&#39;s account.
   * @alias module:js_client.finances_v0.model/TaxWithholdingEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaxWithholdingEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.finances_v0.model/TaxWithholdingEvent} obj Optional instance to populate.
   * @return {module:js_client.finances_v0.model/TaxWithholdingEvent} The populated <code>TaxWithholdingEvent</code> instance.
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
      obj = obj || new TaxWithholdingEvent();
      if (data.hasOwnProperty('PostedDate'))
        obj.postedDate = ApiClient.convertToType(data['PostedDate'], 'Date');
      if (data.hasOwnProperty('BaseAmount'))
        obj.baseAmount = Currency.constructFromObject(data['BaseAmount']);
      if (data.hasOwnProperty('WithheldAmount'))
        obj.withheldAmount = Currency.constructFromObject(data['WithheldAmount']);
      if (data.hasOwnProperty('TaxWithholdingPeriod'))
        obj.taxWithholdingPeriod = TaxWithholdingPeriod.constructFromObject(data['TaxWithholdingPeriod']);
    }
    return obj;
  }
}

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} postedDate
 */
TaxWithholdingEvent.prototype.postedDate = undefined;

/**
 * @member {module:js_client.finances_v0.model/Currency} baseAmount
 */
TaxWithholdingEvent.prototype.baseAmount = undefined;

/**
 * @member {module:js_client.finances_v0.model/Currency} withheldAmount
 */
TaxWithholdingEvent.prototype.withheldAmount = undefined;

/**
 * @member {module:js_client.finances_v0.model/TaxWithholdingPeriod} taxWithholdingPeriod
 */
TaxWithholdingEvent.prototype.taxWithholdingPeriod = undefined;


