/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {Address} from './js_client.invoicing_v0.model/Address.js';
import {AddressTypeEnum} from './js_client.invoicing_v0.model/AddressTypeEnum.js';
import {BuyerTaxInfo} from './js_client.invoicing_v0.model/BuyerTaxInfo.js';
import {Error} from './js_client.invoicing_v0.model/Error.js';
import {GetInvoiceStatusResponse} from './js_client.invoicing_v0.model/GetInvoiceStatusResponse.js';
import {GetShipmentDetailsResponse} from './js_client.invoicing_v0.model/GetShipmentDetailsResponse.js';
import {MarketplaceTaxInfo} from './js_client.invoicing_v0.model/MarketplaceTaxInfo.js';
import {Money} from './js_client.invoicing_v0.model/Money.js';
import {ShipmentDetail} from './js_client.invoicing_v0.model/ShipmentDetail.js';
import {ShipmentInvoiceStatus} from './js_client.invoicing_v0.model/ShipmentInvoiceStatus.js';
import {ShipmentInvoiceStatusInfo} from './js_client.invoicing_v0.model/ShipmentInvoiceStatusInfo.js';
import {ShipmentInvoiceStatusResponse} from './js_client.invoicing_v0.model/ShipmentInvoiceStatusResponse.js';
import {ShipmentItem} from './js_client.invoicing_v0.model/ShipmentItem.js';
import {SubmitInvoiceRequest} from './js_client.invoicing_v0.model/SubmitInvoiceRequest.js';
import {SubmitInvoiceResponse} from './js_client.invoicing_v0.model/SubmitInvoiceResponse.js';
import {TaxClassification} from './js_client.invoicing_v0.model/TaxClassification.js';
import {ShipmentInvoiceApi} from './js_client.invoicing_v0.api/ShipmentInvoiceApi.js';


/**
* The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* @module index
* @version v0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:js_client.invoicing_v0.model/Address}
     */
    Address,

    /**
     * The AddressTypeEnum model constructor.
     * @property {module:js_client.invoicing_v0.model/AddressTypeEnum}
     */
    AddressTypeEnum,

    /**
     * The BuyerTaxInfo model constructor.
     * @property {module:js_client.invoicing_v0.model/BuyerTaxInfo}
     */
    BuyerTaxInfo,

    /**
     * The Error model constructor.
     * @property {module:js_client.invoicing_v0.model/Error}
     */
    Error,

    /**
     * The GetInvoiceStatusResponse model constructor.
     * @property {module:js_client.invoicing_v0.model/GetInvoiceStatusResponse}
     */
    GetInvoiceStatusResponse,

    /**
     * The GetShipmentDetailsResponse model constructor.
     * @property {module:js_client.invoicing_v0.model/GetShipmentDetailsResponse}
     */
    GetShipmentDetailsResponse,

    /**
     * The MarketplaceTaxInfo model constructor.
     * @property {module:js_client.invoicing_v0.model/MarketplaceTaxInfo}
     */
    MarketplaceTaxInfo,

    /**
     * The Money model constructor.
     * @property {module:js_client.invoicing_v0.model/Money}
     */
    Money,

    /**
     * The ShipmentDetail model constructor.
     * @property {module:js_client.invoicing_v0.model/ShipmentDetail}
     */
    ShipmentDetail,

    /**
     * The ShipmentInvoiceStatus model constructor.
     * @property {module:js_client.invoicing_v0.model/ShipmentInvoiceStatus}
     */
    ShipmentInvoiceStatus,

    /**
     * The ShipmentInvoiceStatusInfo model constructor.
     * @property {module:js_client.invoicing_v0.model/ShipmentInvoiceStatusInfo}
     */
    ShipmentInvoiceStatusInfo,

    /**
     * The ShipmentInvoiceStatusResponse model constructor.
     * @property {module:js_client.invoicing_v0.model/ShipmentInvoiceStatusResponse}
     */
    ShipmentInvoiceStatusResponse,

    /**
     * The ShipmentItem model constructor.
     * @property {module:js_client.invoicing_v0.model/ShipmentItem}
     */
    ShipmentItem,

    /**
     * The SubmitInvoiceRequest model constructor.
     * @property {module:js_client.invoicing_v0.model/SubmitInvoiceRequest}
     */
    SubmitInvoiceRequest,

    /**
     * The SubmitInvoiceResponse model constructor.
     * @property {module:js_client.invoicing_v0.model/SubmitInvoiceResponse}
     */
    SubmitInvoiceResponse,

    /**
     * The TaxClassification model constructor.
     * @property {module:js_client.invoicing_v0.model/TaxClassification}
     */
    TaxClassification,

    /**
    * The ShipmentInvoiceApi service constructor.
    * @property {module:js_client.invoicing_v0.api/ShipmentInvoiceApi}
    */
    ShipmentInvoiceApi
};
