/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
import {Address} from './js_client.orders_v0.model/Address.js';
import {AddressExtendedFields} from './js_client.orders_v0.model/AddressExtendedFields.js';
import {AmazonPrograms} from './js_client.orders_v0.model/AmazonPrograms.js';
import {AssociatedItem} from './js_client.orders_v0.model/AssociatedItem.js';
import {AssociationType} from './js_client.orders_v0.model/AssociationType.js';
import {AutomatedShippingSettings} from './js_client.orders_v0.model/AutomatedShippingSettings.js';
import {BusinessHours} from './js_client.orders_v0.model/BusinessHours.js';
import {BuyerCustomizedInfoDetail} from './js_client.orders_v0.model/BuyerCustomizedInfoDetail.js';
import {BuyerInfo} from './js_client.orders_v0.model/BuyerInfo.js';
import {BuyerRequestedCancel} from './js_client.orders_v0.model/BuyerRequestedCancel.js';
import {BuyerTaxInfo} from './js_client.orders_v0.model/BuyerTaxInfo.js';
import {BuyerTaxInformation} from './js_client.orders_v0.model/BuyerTaxInformation.js';
import {ConfirmShipmentErrorResponse} from './js_client.orders_v0.model/ConfirmShipmentErrorResponse.js';
import {ConfirmShipmentOrderItem} from './js_client.orders_v0.model/ConfirmShipmentOrderItem.js';
import {ConfirmShipmentRequest} from './js_client.orders_v0.model/ConfirmShipmentRequest.js';
import {ConstraintType} from './js_client.orders_v0.model/ConstraintType.js';
import {DeliveryPreferences} from './js_client.orders_v0.model/DeliveryPreferences.js';
import {EasyShipShipmentStatus} from './js_client.orders_v0.model/EasyShipShipmentStatus.js';
import {ElectronicInvoiceStatus} from './js_client.orders_v0.model/ElectronicInvoiceStatus.js';
import {Error} from './js_client.orders_v0.model/Error.js';
import {ExceptionDates} from './js_client.orders_v0.model/ExceptionDates.js';
import {ExportInfo} from './js_client.orders_v0.model/ExportInfo.js';
import {FulfillmentInstruction} from './js_client.orders_v0.model/FulfillmentInstruction.js';
import {GetOrderAddressResponse} from './js_client.orders_v0.model/GetOrderAddressResponse.js';
import {GetOrderBuyerInfoResponse} from './js_client.orders_v0.model/GetOrderBuyerInfoResponse.js';
import {GetOrderItemsBuyerInfoResponse} from './js_client.orders_v0.model/GetOrderItemsBuyerInfoResponse.js';
import {GetOrderItemsResponse} from './js_client.orders_v0.model/GetOrderItemsResponse.js';
import {GetOrderRegulatedInfoResponse} from './js_client.orders_v0.model/GetOrderRegulatedInfoResponse.js';
import {GetOrderResponse} from './js_client.orders_v0.model/GetOrderResponse.js';
import {GetOrdersResponse} from './js_client.orders_v0.model/GetOrdersResponse.js';
import {ItemBuyerInfo} from './js_client.orders_v0.model/ItemBuyerInfo.js';
import {MarketplaceTaxInfo} from './js_client.orders_v0.model/MarketplaceTaxInfo.js';
import {Measurement} from './js_client.orders_v0.model/Measurement.js';
import {Money} from './js_client.orders_v0.model/Money.js';
import {OpenInterval} from './js_client.orders_v0.model/OpenInterval.js';
import {OpenTimeInterval} from './js_client.orders_v0.model/OpenTimeInterval.js';
import {Order} from './js_client.orders_v0.model/Order.js';
import {OrderAddress} from './js_client.orders_v0.model/OrderAddress.js';
import {OrderBuyerInfo} from './js_client.orders_v0.model/OrderBuyerInfo.js';
import {OrderItem} from './js_client.orders_v0.model/OrderItem.js';
import {OrderItemBuyerInfo} from './js_client.orders_v0.model/OrderItemBuyerInfo.js';
import {OrderItemsBuyerInfoList} from './js_client.orders_v0.model/OrderItemsBuyerInfoList.js';
import {OrderItemsInner} from './js_client.orders_v0.model/OrderItemsInner.js';
import {OrderItemsList} from './js_client.orders_v0.model/OrderItemsList.js';
import {OrderRegulatedInfo} from './js_client.orders_v0.model/OrderRegulatedInfo.js';
import {OrdersList} from './js_client.orders_v0.model/OrdersList.js';
import {OtherDeliveryAttributes} from './js_client.orders_v0.model/OtherDeliveryAttributes.js';
import {PackageDetail} from './js_client.orders_v0.model/PackageDetail.js';
import {PaymentExecutionDetailItem} from './js_client.orders_v0.model/PaymentExecutionDetailItem.js';
import {PointsGrantedDetail} from './js_client.orders_v0.model/PointsGrantedDetail.js';
import {PreferredDeliveryTime} from './js_client.orders_v0.model/PreferredDeliveryTime.js';
import {PrescriptionDetail} from './js_client.orders_v0.model/PrescriptionDetail.js';
import {ProductInfoDetail} from './js_client.orders_v0.model/ProductInfoDetail.js';
import {RegulatedInformation} from './js_client.orders_v0.model/RegulatedInformation.js';
import {RegulatedInformationField} from './js_client.orders_v0.model/RegulatedInformationField.js';
import {RegulatedOrderVerificationStatus} from './js_client.orders_v0.model/RegulatedOrderVerificationStatus.js';
import {RejectionReason} from './js_client.orders_v0.model/RejectionReason.js';
import {ShipmentStatus} from './js_client.orders_v0.model/ShipmentStatus.js';
import {ShippingConstraints} from './js_client.orders_v0.model/ShippingConstraints.js';
import {SubstitutionOption} from './js_client.orders_v0.model/SubstitutionOption.js';
import {SubstitutionPreferences} from './js_client.orders_v0.model/SubstitutionPreferences.js';
import {TaxClassification} from './js_client.orders_v0.model/TaxClassification.js';
import {TaxCollection} from './js_client.orders_v0.model/TaxCollection.js';
import {UpdateShipmentStatusErrorResponse} from './js_client.orders_v0.model/UpdateShipmentStatusErrorResponse.js';
import {UpdateShipmentStatusRequest} from './js_client.orders_v0.model/UpdateShipmentStatusRequest.js';
import {UpdateVerificationStatusErrorResponse} from './js_client.orders_v0.model/UpdateVerificationStatusErrorResponse.js';
import {UpdateVerificationStatusRequest} from './js_client.orders_v0.model/UpdateVerificationStatusRequest.js';
import {UpdateVerificationStatusRequestBody} from './js_client.orders_v0.model/UpdateVerificationStatusRequestBody.js';
import {ValidVerificationDetail} from './js_client.orders_v0.model/ValidVerificationDetail.js';
import {VerificationDetails} from './js_client.orders_v0.model/VerificationDetails.js';
import {VerificationStatus} from './js_client.orders_v0.model/VerificationStatus.js';
import {OrdersV0Api} from './js_client.orders_v0.api/OrdersV0Api.js';
import {ShipmentApi} from './js_client.orders_v0.api/ShipmentApi.js';


/**
* Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don&#39;t show up in the response)..<br>
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
     * @property {module:js_client.orders_v0.model/Address}
     */
    Address,

    /**
     * The AddressExtendedFields model constructor.
     * @property {module:js_client.orders_v0.model/AddressExtendedFields}
     */
    AddressExtendedFields,

    /**
     * The AmazonPrograms model constructor.
     * @property {module:js_client.orders_v0.model/AmazonPrograms}
     */
    AmazonPrograms,

    /**
     * The AssociatedItem model constructor.
     * @property {module:js_client.orders_v0.model/AssociatedItem}
     */
    AssociatedItem,

    /**
     * The AssociationType model constructor.
     * @property {module:js_client.orders_v0.model/AssociationType}
     */
    AssociationType,

    /**
     * The AutomatedShippingSettings model constructor.
     * @property {module:js_client.orders_v0.model/AutomatedShippingSettings}
     */
    AutomatedShippingSettings,

    /**
     * The BusinessHours model constructor.
     * @property {module:js_client.orders_v0.model/BusinessHours}
     */
    BusinessHours,

    /**
     * The BuyerCustomizedInfoDetail model constructor.
     * @property {module:js_client.orders_v0.model/BuyerCustomizedInfoDetail}
     */
    BuyerCustomizedInfoDetail,

    /**
     * The BuyerInfo model constructor.
     * @property {module:js_client.orders_v0.model/BuyerInfo}
     */
    BuyerInfo,

    /**
     * The BuyerRequestedCancel model constructor.
     * @property {module:js_client.orders_v0.model/BuyerRequestedCancel}
     */
    BuyerRequestedCancel,

    /**
     * The BuyerTaxInfo model constructor.
     * @property {module:js_client.orders_v0.model/BuyerTaxInfo}
     */
    BuyerTaxInfo,

    /**
     * The BuyerTaxInformation model constructor.
     * @property {module:js_client.orders_v0.model/BuyerTaxInformation}
     */
    BuyerTaxInformation,

    /**
     * The ConfirmShipmentErrorResponse model constructor.
     * @property {module:js_client.orders_v0.model/ConfirmShipmentErrorResponse}
     */
    ConfirmShipmentErrorResponse,

    /**
     * The ConfirmShipmentOrderItem model constructor.
     * @property {module:js_client.orders_v0.model/ConfirmShipmentOrderItem}
     */
    ConfirmShipmentOrderItem,

    /**
     * The ConfirmShipmentRequest model constructor.
     * @property {module:js_client.orders_v0.model/ConfirmShipmentRequest}
     */
    ConfirmShipmentRequest,

    /**
     * The ConstraintType model constructor.
     * @property {module:js_client.orders_v0.model/ConstraintType}
     */
    ConstraintType,

    /**
     * The DeliveryPreferences model constructor.
     * @property {module:js_client.orders_v0.model/DeliveryPreferences}
     */
    DeliveryPreferences,

    /**
     * The EasyShipShipmentStatus model constructor.
     * @property {module:js_client.orders_v0.model/EasyShipShipmentStatus}
     */
    EasyShipShipmentStatus,

    /**
     * The ElectronicInvoiceStatus model constructor.
     * @property {module:js_client.orders_v0.model/ElectronicInvoiceStatus}
     */
    ElectronicInvoiceStatus,

    /**
     * The Error model constructor.
     * @property {module:js_client.orders_v0.model/Error}
     */
    Error,

    /**
     * The ExceptionDates model constructor.
     * @property {module:js_client.orders_v0.model/ExceptionDates}
     */
    ExceptionDates,

    /**
     * The ExportInfo model constructor.
     * @property {module:js_client.orders_v0.model/ExportInfo}
     */
    ExportInfo,

    /**
     * The FulfillmentInstruction model constructor.
     * @property {module:js_client.orders_v0.model/FulfillmentInstruction}
     */
    FulfillmentInstruction,

    /**
     * The GetOrderAddressResponse model constructor.
     * @property {module:js_client.orders_v0.model/GetOrderAddressResponse}
     */
    GetOrderAddressResponse,

    /**
     * The GetOrderBuyerInfoResponse model constructor.
     * @property {module:js_client.orders_v0.model/GetOrderBuyerInfoResponse}
     */
    GetOrderBuyerInfoResponse,

    /**
     * The GetOrderItemsBuyerInfoResponse model constructor.
     * @property {module:js_client.orders_v0.model/GetOrderItemsBuyerInfoResponse}
     */
    GetOrderItemsBuyerInfoResponse,

    /**
     * The GetOrderItemsResponse model constructor.
     * @property {module:js_client.orders_v0.model/GetOrderItemsResponse}
     */
    GetOrderItemsResponse,

    /**
     * The GetOrderRegulatedInfoResponse model constructor.
     * @property {module:js_client.orders_v0.model/GetOrderRegulatedInfoResponse}
     */
    GetOrderRegulatedInfoResponse,

    /**
     * The GetOrderResponse model constructor.
     * @property {module:js_client.orders_v0.model/GetOrderResponse}
     */
    GetOrderResponse,

    /**
     * The GetOrdersResponse model constructor.
     * @property {module:js_client.orders_v0.model/GetOrdersResponse}
     */
    GetOrdersResponse,

    /**
     * The ItemBuyerInfo model constructor.
     * @property {module:js_client.orders_v0.model/ItemBuyerInfo}
     */
    ItemBuyerInfo,

    /**
     * The MarketplaceTaxInfo model constructor.
     * @property {module:js_client.orders_v0.model/MarketplaceTaxInfo}
     */
    MarketplaceTaxInfo,

    /**
     * The Measurement model constructor.
     * @property {module:js_client.orders_v0.model/Measurement}
     */
    Measurement,

    /**
     * The Money model constructor.
     * @property {module:js_client.orders_v0.model/Money}
     */
    Money,

    /**
     * The OpenInterval model constructor.
     * @property {module:js_client.orders_v0.model/OpenInterval}
     */
    OpenInterval,

    /**
     * The OpenTimeInterval model constructor.
     * @property {module:js_client.orders_v0.model/OpenTimeInterval}
     */
    OpenTimeInterval,

    /**
     * The Order model constructor.
     * @property {module:js_client.orders_v0.model/Order}
     */
    Order,

    /**
     * The OrderAddress model constructor.
     * @property {module:js_client.orders_v0.model/OrderAddress}
     */
    OrderAddress,

    /**
     * The OrderBuyerInfo model constructor.
     * @property {module:js_client.orders_v0.model/OrderBuyerInfo}
     */
    OrderBuyerInfo,

    /**
     * The OrderItem model constructor.
     * @property {module:js_client.orders_v0.model/OrderItem}
     */
    OrderItem,

    /**
     * The OrderItemBuyerInfo model constructor.
     * @property {module:js_client.orders_v0.model/OrderItemBuyerInfo}
     */
    OrderItemBuyerInfo,

    /**
     * The OrderItemsBuyerInfoList model constructor.
     * @property {module:js_client.orders_v0.model/OrderItemsBuyerInfoList}
     */
    OrderItemsBuyerInfoList,

    /**
     * The OrderItemsInner model constructor.
     * @property {module:js_client.orders_v0.model/OrderItemsInner}
     */
    OrderItemsInner,

    /**
     * The OrderItemsList model constructor.
     * @property {module:js_client.orders_v0.model/OrderItemsList}
     */
    OrderItemsList,

    /**
     * The OrderRegulatedInfo model constructor.
     * @property {module:js_client.orders_v0.model/OrderRegulatedInfo}
     */
    OrderRegulatedInfo,

    /**
     * The OrdersList model constructor.
     * @property {module:js_client.orders_v0.model/OrdersList}
     */
    OrdersList,

    /**
     * The OtherDeliveryAttributes model constructor.
     * @property {module:js_client.orders_v0.model/OtherDeliveryAttributes}
     */
    OtherDeliveryAttributes,

    /**
     * The PackageDetail model constructor.
     * @property {module:js_client.orders_v0.model/PackageDetail}
     */
    PackageDetail,

    /**
     * The PaymentExecutionDetailItem model constructor.
     * @property {module:js_client.orders_v0.model/PaymentExecutionDetailItem}
     */
    PaymentExecutionDetailItem,

    /**
     * The PointsGrantedDetail model constructor.
     * @property {module:js_client.orders_v0.model/PointsGrantedDetail}
     */
    PointsGrantedDetail,

    /**
     * The PreferredDeliveryTime model constructor.
     * @property {module:js_client.orders_v0.model/PreferredDeliveryTime}
     */
    PreferredDeliveryTime,

    /**
     * The PrescriptionDetail model constructor.
     * @property {module:js_client.orders_v0.model/PrescriptionDetail}
     */
    PrescriptionDetail,

    /**
     * The ProductInfoDetail model constructor.
     * @property {module:js_client.orders_v0.model/ProductInfoDetail}
     */
    ProductInfoDetail,

    /**
     * The RegulatedInformation model constructor.
     * @property {module:js_client.orders_v0.model/RegulatedInformation}
     */
    RegulatedInformation,

    /**
     * The RegulatedInformationField model constructor.
     * @property {module:js_client.orders_v0.model/RegulatedInformationField}
     */
    RegulatedInformationField,

    /**
     * The RegulatedOrderVerificationStatus model constructor.
     * @property {module:js_client.orders_v0.model/RegulatedOrderVerificationStatus}
     */
    RegulatedOrderVerificationStatus,

    /**
     * The RejectionReason model constructor.
     * @property {module:js_client.orders_v0.model/RejectionReason}
     */
    RejectionReason,

    /**
     * The ShipmentStatus model constructor.
     * @property {module:js_client.orders_v0.model/ShipmentStatus}
     */
    ShipmentStatus,

    /**
     * The ShippingConstraints model constructor.
     * @property {module:js_client.orders_v0.model/ShippingConstraints}
     */
    ShippingConstraints,

    /**
     * The SubstitutionOption model constructor.
     * @property {module:js_client.orders_v0.model/SubstitutionOption}
     */
    SubstitutionOption,

    /**
     * The SubstitutionPreferences model constructor.
     * @property {module:js_client.orders_v0.model/SubstitutionPreferences}
     */
    SubstitutionPreferences,

    /**
     * The TaxClassification model constructor.
     * @property {module:js_client.orders_v0.model/TaxClassification}
     */
    TaxClassification,

    /**
     * The TaxCollection model constructor.
     * @property {module:js_client.orders_v0.model/TaxCollection}
     */
    TaxCollection,

    /**
     * The UpdateShipmentStatusErrorResponse model constructor.
     * @property {module:js_client.orders_v0.model/UpdateShipmentStatusErrorResponse}
     */
    UpdateShipmentStatusErrorResponse,

    /**
     * The UpdateShipmentStatusRequest model constructor.
     * @property {module:js_client.orders_v0.model/UpdateShipmentStatusRequest}
     */
    UpdateShipmentStatusRequest,

    /**
     * The UpdateVerificationStatusErrorResponse model constructor.
     * @property {module:js_client.orders_v0.model/UpdateVerificationStatusErrorResponse}
     */
    UpdateVerificationStatusErrorResponse,

    /**
     * The UpdateVerificationStatusRequest model constructor.
     * @property {module:js_client.orders_v0.model/UpdateVerificationStatusRequest}
     */
    UpdateVerificationStatusRequest,

    /**
     * The UpdateVerificationStatusRequestBody model constructor.
     * @property {module:js_client.orders_v0.model/UpdateVerificationStatusRequestBody}
     */
    UpdateVerificationStatusRequestBody,

    /**
     * The ValidVerificationDetail model constructor.
     * @property {module:js_client.orders_v0.model/ValidVerificationDetail}
     */
    ValidVerificationDetail,

    /**
     * The VerificationDetails model constructor.
     * @property {module:js_client.orders_v0.model/VerificationDetails}
     */
    VerificationDetails,

    /**
     * The VerificationStatus model constructor.
     * @property {module:js_client.orders_v0.model/VerificationStatus}
     */
    VerificationStatus,

    /**
    * The OrdersV0Api service constructor.
    * @property {module:js_client.orders_v0.api/OrdersV0Api}
    */
    OrdersV0Api,

    /**
    * The ShipmentApi service constructor.
    * @property {module:js_client.orders_v0.api/ShipmentApi}
    */
    ShipmentApi
};
