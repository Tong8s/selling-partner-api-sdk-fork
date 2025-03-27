/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {AmazonPayContext} from './AmazonPayContext.js';
import {DeferredContext} from './DeferredContext.js';
import {PaymentsContext} from './PaymentsContext.js';
import {ProductContext} from './ProductContext.js';
import {TimeRangeContext} from './TimeRangeContext.js';

/**
 * The Context model module.
 * @module js_client.finances_2024-06-19.model/Context
 * @version 2024-06-19
 */
export class Context {
  /**
   * Constructs a new <code>Context</code>.
   * Additional Information about the item.
   * @alias module:js_client.finances_2024-06-19.model/Context
   * @class
   * @implements module:js_client.finances_2024-06-19.model/AmazonPayContext
   * @implements module:js_client.finances_2024-06-19.model/ProductContext
   * @implements module:js_client.finances_2024-06-19.model/PaymentsContext
   * @implements module:js_client.finances_2024-06-19.model/DeferredContext
   * @implements module:js_client.finances_2024-06-19.model/TimeRangeContext
   * @param contextType {String} 
   */
  constructor(contextType) {
    AmazonPayContext.call(this);
    ProductContext.call(this);
    PaymentsContext.call(this);
    DeferredContext.call(this);
    TimeRangeContext.call(this);
    this.contextType = contextType;
  }

  /**
   * Constructs a <code>Context</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.finances_2024-06-19.model/Context} obj Optional instance to populate.
   * @return {module:js_client.finances_2024-06-19.model/Context} The populated <code>Context</code> instance.
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
      obj = obj || new Context();
      AmazonPayContext.constructFromObject(data, obj);
      ProductContext.constructFromObject(data, obj);
      PaymentsContext.constructFromObject(data, obj);
      DeferredContext.constructFromObject(data, obj);
      TimeRangeContext.constructFromObject(data, obj);
      if (data.hasOwnProperty('storeName'))
        obj.storeName = ApiClient.convertToType(data['storeName'], 'String');
      if (data.hasOwnProperty('orderType'))
        obj.orderType = ApiClient.convertToType(data['orderType'], 'String');
      if (data.hasOwnProperty('channel'))
        obj.channel = ApiClient.convertToType(data['channel'], 'String');
      if (data.hasOwnProperty('asin'))
        obj.asin = ApiClient.convertToType(data['asin'], 'String');
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('quantityShipped'))
        obj.quantityShipped = ApiClient.convertToType(data['quantityShipped'], 'Number');
      if (data.hasOwnProperty('fulfillmentNetwork'))
        obj.fulfillmentNetwork = ApiClient.convertToType(data['fulfillmentNetwork'], 'String');
      if (data.hasOwnProperty('paymentType'))
        obj.paymentType = ApiClient.convertToType(data['paymentType'], 'String');
      if (data.hasOwnProperty('paymentMethod'))
        obj.paymentMethod = ApiClient.convertToType(data['paymentMethod'], 'String');
      if (data.hasOwnProperty('paymentReference'))
        obj.paymentReference = ApiClient.convertToType(data['paymentReference'], 'String');
      if (data.hasOwnProperty('paymentDate'))
        obj.paymentDate = ApiClient.convertToType(data['paymentDate'], 'Date');
      if (data.hasOwnProperty('deferralReason'))
        obj.deferralReason = ApiClient.convertToType(data['deferralReason'], 'String');
      if (data.hasOwnProperty('maturityDate'))
        obj.maturityDate = ApiClient.convertToType(data['maturityDate'], 'Date');
      if (data.hasOwnProperty('deferralStatus'))
        obj.deferralStatus = ApiClient.convertToType(data['deferralStatus'], 'String');
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'Date');
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'Date');
      if (data.hasOwnProperty('contextType'))
        obj.contextType = ApiClient.convertToType(data['contextType'], 'String');
    }
    return obj;
  }
}

/**
 * Store name related to transaction.
 * @member {String} storeName
 */
Context.prototype.storeName = undefined;

/**
 * Order type of the transaction.
 * @member {String} orderType
 */
Context.prototype.orderType = undefined;

/**
 * Channel details of related transaction.
 * @member {String} channel
 */
Context.prototype.channel = undefined;

/**
 * Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} asin
 */
Context.prototype.asin = undefined;

/**
 * Stock keeping unit (SKU) of the item.
 * @member {String} sku
 */
Context.prototype.sku = undefined;

/**
 * Quantity of the item shipped.
 * @member {Number} quantityShipped
 */
Context.prototype.quantityShipped = undefined;

/**
 * Fulfillment network of the item.
 * @member {String} fulfillmentNetwork
 */
Context.prototype.fulfillmentNetwork = undefined;

/**
 * Type of payment made.
 * @member {String} paymentType
 */
Context.prototype.paymentType = undefined;

/**
 * Method of payment made.
 * @member {String} paymentMethod
 */
Context.prototype.paymentMethod = undefined;

/**
 * Reference number of payment made.
 * @member {String} paymentReference
 */
Context.prototype.paymentReference = undefined;

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} paymentDate
 */
Context.prototype.paymentDate = undefined;

/**
 * Deferral policy applied on the transaction.  Example: 'B2B','DD7'
 * @member {String} deferralReason
 */
Context.prototype.deferralReason = undefined;

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} maturityDate
 */
Context.prototype.maturityDate = undefined;

/**
 * Status of the transaction.   Example: 'HOLD','RELEASE'
 * @member {String} deferralStatus
 */
Context.prototype.deferralStatus = undefined;

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} startTime
 */
Context.prototype.startTime = undefined;

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} endTime
 */
Context.prototype.endTime = undefined;

/**
 * @member {String} contextType
 */
Context.prototype.contextType = undefined;

// Implement AmazonPayContext interface:
/**
 * Store name related to transaction.
 * @member {String} storeName
 */
AmazonPayContext.prototype.storeName = undefined;

/**
 * Order type of the transaction.
 * @member {String} orderType
 */
AmazonPayContext.prototype.orderType = undefined;

/**
 * Channel details of related transaction.
 * @member {String} channel
 */
AmazonPayContext.prototype.channel = undefined;

// Implement ProductContext interface:
/**
 * Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} asin
 */
ProductContext.prototype.asin = undefined;

/**
 * Stock keeping unit (SKU) of the item.
 * @member {String} sku
 */
ProductContext.prototype.sku = undefined;

/**
 * Quantity of the item shipped.
 * @member {Number} quantityShipped
 */
ProductContext.prototype.quantityShipped = undefined;

/**
 * Fulfillment network of the item.
 * @member {String} fulfillmentNetwork
 */
ProductContext.prototype.fulfillmentNetwork = undefined;

// Implement PaymentsContext interface:
/**
 * Type of payment made.
 * @member {String} paymentType
 */
PaymentsContext.prototype.paymentType = undefined;

/**
 * Method of payment made.
 * @member {String} paymentMethod
 */
PaymentsContext.prototype.paymentMethod = undefined;

/**
 * Reference number of payment made.
 * @member {String} paymentReference
 */
PaymentsContext.prototype.paymentReference = undefined;

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} paymentDate
 */
PaymentsContext.prototype.paymentDate = undefined;

// Implement DeferredContext interface:
/**
 * Deferral policy applied on the transaction.  Example: 'B2B','DD7'
 * @member {String} deferralReason
 */
DeferredContext.prototype.deferralReason = undefined;

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} maturityDate
 */
DeferredContext.prototype.maturityDate = undefined;

/**
 * Status of the transaction.   Example: 'HOLD','RELEASE'
 * @member {String} deferralStatus
 */
DeferredContext.prototype.deferralStatus = undefined;

// Implement TimeRangeContext interface:
/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} startTime
 */
TimeRangeContext.prototype.startTime = undefined;

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} endTime
 */
TimeRangeContext.prototype.endTime = undefined;


