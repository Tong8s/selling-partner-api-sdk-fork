/**
 * Selling Partner API for Retail Procurement Transaction Status
 * The Selling Partner API for Retail Procurement Transaction Status provides programmatic access to status information on specific asynchronous POST transactions for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {Error} from './js_client.vendortransactionstatus_v1.model/Error.js';
import {GetTransactionResponse} from './js_client.vendortransactionstatus_v1.model/GetTransactionResponse.js';
import {Transaction} from './js_client.vendortransactionstatus_v1.model/Transaction.js';
import {TransactionStatus} from './js_client.vendortransactionstatus_v1.model/TransactionStatus.js';
import {VendorTransactionApi} from './js_client.vendortransactionstatus_v1.api/VendorTransactionApi.js';


/**
* The Selling Partner API for Retail Procurement Transaction Status provides programmatic access to status information on specific asynchronous POST transactions for vendors..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForRetailProcurementTransactionStatus = require('index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForRetailProcurementTransactionStatus.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForRetailProcurementTransactionStatus.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForRetailProcurementTransactionStatus.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForRetailProcurementTransactionStatus.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Error model constructor.
     * @property {module:js_client.vendortransactionstatus_v1.model/Error}
     */
    Error,

    /**
     * The GetTransactionResponse model constructor.
     * @property {module:js_client.vendortransactionstatus_v1.model/GetTransactionResponse}
     */
    GetTransactionResponse,

    /**
     * The Transaction model constructor.
     * @property {module:js_client.vendortransactionstatus_v1.model/Transaction}
     */
    Transaction,

    /**
     * The TransactionStatus model constructor.
     * @property {module:js_client.vendortransactionstatus_v1.model/TransactionStatus}
     */
    TransactionStatus,

    /**
    * The VendorTransactionApi service constructor.
    * @property {module:js_client.vendortransactionstatus_v1.api/VendorTransactionApi}
    */
    VendorTransactionApi
};
