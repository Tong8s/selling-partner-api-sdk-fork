/**
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
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
import {TransactionIdentifier} from './TransactionIdentifier.js';

/**
 * The Invoice model module.
 * @module js_client.invoices_v2024_06_19.model/Invoice
 * @version 2024-06-19
 */
export class Invoice {
  /**
   * Constructs a new <code>Invoice</code>.
   * Provides detailed information about an invoice.
   * @alias module:js_client.invoices_v2024_06_19.model/Invoice
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.invoices_v2024_06_19.model/Invoice} obj Optional instance to populate.
   * @return {module:js_client.invoices_v2024_06_19.model/Invoice} The populated <code>Invoice</code> instance.
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
      obj = obj || new Invoice();
      if (data.hasOwnProperty('date'))
        obj.date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('errorCode'))
        obj.errorCode = ApiClient.convertToType(data['errorCode'], 'String');
      if (data.hasOwnProperty('externalInvoiceId'))
        obj.externalInvoiceId = ApiClient.convertToType(data['externalInvoiceId'], 'String');
      if (data.hasOwnProperty('govResponse'))
        obj.govResponse = ApiClient.convertToType(data['govResponse'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('invoiceType'))
        obj.invoiceType = ApiClient.convertToType(data['invoiceType'], 'String');
      if (data.hasOwnProperty('series'))
        obj.series = ApiClient.convertToType(data['series'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('transactionIds'))
        obj.transactionIds = ApiClient.convertToType(data['transactionIds'], [TransactionIdentifier]);
      if (data.hasOwnProperty('transactionType'))
        obj.transactionType = ApiClient.convertToType(data['transactionType'], 'String');
    }
    return obj;
  }
}

/**
 * The date and time the invoice is issued. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
 * @member {Date} date
 */
Invoice.prototype.date = undefined;

/**
 * If the invoice is in an error state, this attribute displays the error code.
 * @member {String} errorCode
 */
Invoice.prototype.errorCode = undefined;

/**
 * The invoice identifier that is used by an external party. This is typically the government agency that authorized the invoice.
 * @member {String} externalInvoiceId
 */
Invoice.prototype.externalInvoiceId = undefined;

/**
 * The response message from the government authority when there is an error during invoice issuance.
 * @member {String} govResponse
 */
Invoice.prototype.govResponse = undefined;

/**
 * The invoice identifier.
 * @member {String} id
 */
Invoice.prototype.id = undefined;

/**
 * The classification of the invoice type. This varies across marketplaces. Use the `getInvoicesAttributes` operation to check `invoiceType` options.
 * @member {String} invoiceType
 */
Invoice.prototype.invoiceType = undefined;

/**
 * Use this identifier in conjunction with `externalInvoiceId` to identify invoices from the same seller.
 * @member {String} series
 */
Invoice.prototype.series = undefined;

/**
 * The invoice status classification. Use the `getInvoicesAttributes` operation to check invoice status options.
 * @member {String} status
 */
Invoice.prototype.status = undefined;

/**
 * List with identifiers for the transactions associated to the invoice.
 * @member {Array.<module:js_client.invoices_v2024_06_19.model/TransactionIdentifier>} transactionIds
 */
Invoice.prototype.transactionIds = undefined;

/**
 * Classification of the transaction that originated this invoice. Use the `getInvoicesAttributes` operation to check `transactionType` options.
 * @member {String} transactionType
 */
Invoice.prototype.transactionType = undefined;


