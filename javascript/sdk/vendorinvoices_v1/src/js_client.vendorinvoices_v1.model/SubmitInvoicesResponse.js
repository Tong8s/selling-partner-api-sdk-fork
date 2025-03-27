/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
import {Error} from './Error.js';
import {TransactionId} from './TransactionId.js';

/**
 * The SubmitInvoicesResponse model module.
 * @module js_client.vendorinvoices_v1.model/SubmitInvoicesResponse
 * @version v1
 */
export class SubmitInvoicesResponse {
  /**
   * Constructs a new <code>SubmitInvoicesResponse</code>.
   * The response schema for the submitInvoices operation.
   * @alias module:js_client.vendorinvoices_v1.model/SubmitInvoicesResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubmitInvoicesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendorinvoices_v1.model/SubmitInvoicesResponse} obj Optional instance to populate.
   * @return {module:js_client.vendorinvoices_v1.model/SubmitInvoicesResponse} The populated <code>SubmitInvoicesResponse</code> instance.
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
      obj = obj || new SubmitInvoicesResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = TransactionId.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.vendorinvoices_v1.model/TransactionId} payload
 */
SubmitInvoicesResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:js_client.vendorinvoices_v1.model/Error>} errors
 */
SubmitInvoicesResponse.prototype.errors = undefined;


