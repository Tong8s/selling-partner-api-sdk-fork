/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {AdditionalLocationInfo} from './js_client.fulfillmentoutbound_v2020_07_01.model/AdditionalLocationInfo.js';
import {Address} from './js_client.fulfillmentoutbound_v2020_07_01.model/Address.js';
import {Amount} from './js_client.fulfillmentoutbound_v2020_07_01.model/Amount.js';
import {CODSettings} from './js_client.fulfillmentoutbound_v2020_07_01.model/CODSettings.js';
import {CancelFulfillmentOrderResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/CancelFulfillmentOrderResponse.js';
import {CreateFulfillmentOrderItem} from './js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentOrderItem.js';
import {CreateFulfillmentOrderRequest} from './js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentOrderRequest.js';
import {CreateFulfillmentOrderResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentOrderResponse.js';
import {CreateFulfillmentReturnRequest} from './js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentReturnRequest.js';
import {CreateFulfillmentReturnResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentReturnResponse.js';
import {CreateFulfillmentReturnResult} from './js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentReturnResult.js';
import {CreateReturnItem} from './js_client.fulfillmentoutbound_v2020_07_01.model/CreateReturnItem.js';
import {CurrentStatus} from './js_client.fulfillmentoutbound_v2020_07_01.model/CurrentStatus.js';
import {DateRange} from './js_client.fulfillmentoutbound_v2020_07_01.model/DateRange.js';
import {DeliveryDocument} from './js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryDocument.js';
import {DeliveryInformation} from './js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryInformation.js';
import {DeliveryMessage} from './js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryMessage.js';
import {DeliveryOffer} from './js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryOffer.js';
import {DeliveryPolicy} from './js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryPolicy.js';
import {DeliveryPreferences} from './js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryPreferences.js';
import {DeliveryWindow} from './js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryWindow.js';
import {Destination} from './js_client.fulfillmentoutbound_v2020_07_01.model/Destination.js';
import {DropOffLocation} from './js_client.fulfillmentoutbound_v2020_07_01.model/DropOffLocation.js';
import {Error} from './js_client.fulfillmentoutbound_v2020_07_01.model/Error.js';
import {EventCode} from './js_client.fulfillmentoutbound_v2020_07_01.model/EventCode.js';
import {Feature} from './js_client.fulfillmentoutbound_v2020_07_01.model/Feature.js';
import {FeatureSettings} from './js_client.fulfillmentoutbound_v2020_07_01.model/FeatureSettings.js';
import {FeatureSku} from './js_client.fulfillmentoutbound_v2020_07_01.model/FeatureSku.js';
import {Fee} from './js_client.fulfillmentoutbound_v2020_07_01.model/Fee.js';
import {FulfillmentAction} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentAction.js';
import {FulfillmentOrder} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentOrder.js';
import {FulfillmentOrderItem} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentOrderItem.js';
import {FulfillmentOrderStatus} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentOrderStatus.js';
import {FulfillmentPolicy} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentPolicy.js';
import {FulfillmentPreview} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentPreview.js';
import {FulfillmentPreviewItem} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentPreviewItem.js';
import {FulfillmentPreviewShipment} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentPreviewShipment.js';
import {FulfillmentReturnItemStatus} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentReturnItemStatus.js';
import {FulfillmentShipment} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentShipment.js';
import {FulfillmentShipmentItem} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentShipmentItem.js';
import {FulfillmentShipmentPackage} from './js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentShipmentPackage.js';
import {GetDeliveryOffersProduct} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetDeliveryOffersProduct.js';
import {GetDeliveryOffersRequest} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetDeliveryOffersRequest.js';
import {GetDeliveryOffersResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetDeliveryOffersResponse.js';
import {GetDeliveryOffersResult} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetDeliveryOffersResult.js';
import {GetDeliveryOffersTerms} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetDeliveryOffersTerms.js';
import {GetFeatureInventoryResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFeatureInventoryResponse.js';
import {GetFeatureInventoryResult} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFeatureInventoryResult.js';
import {GetFeatureSkuResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFeatureSkuResponse.js';
import {GetFeatureSkuResult} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFeatureSkuResult.js';
import {GetFeaturesResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFeaturesResponse.js';
import {GetFeaturesResult} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFeaturesResult.js';
import {GetFulfillmentOrderResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentOrderResponse.js';
import {GetFulfillmentOrderResult} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentOrderResult.js';
import {GetFulfillmentPreviewItem} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentPreviewItem.js';
import {GetFulfillmentPreviewRequest} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentPreviewRequest.js';
import {GetFulfillmentPreviewResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentPreviewResponse.js';
import {GetFulfillmentPreviewResult} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentPreviewResult.js';
import {GetPackageTrackingDetailsResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/GetPackageTrackingDetailsResponse.js';
import {InvalidItemReason} from './js_client.fulfillmentoutbound_v2020_07_01.model/InvalidItemReason.js';
import {InvalidItemReasonCode} from './js_client.fulfillmentoutbound_v2020_07_01.model/InvalidItemReasonCode.js';
import {InvalidReturnItem} from './js_client.fulfillmentoutbound_v2020_07_01.model/InvalidReturnItem.js';
import {ListAllFulfillmentOrdersResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/ListAllFulfillmentOrdersResponse.js';
import {ListAllFulfillmentOrdersResult} from './js_client.fulfillmentoutbound_v2020_07_01.model/ListAllFulfillmentOrdersResult.js';
import {ListReturnReasonCodesResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/ListReturnReasonCodesResponse.js';
import {ListReturnReasonCodesResult} from './js_client.fulfillmentoutbound_v2020_07_01.model/ListReturnReasonCodesResult.js';
import {LockerDetails} from './js_client.fulfillmentoutbound_v2020_07_01.model/LockerDetails.js';
import {Money} from './js_client.fulfillmentoutbound_v2020_07_01.model/Money.js';
import {Origin} from './js_client.fulfillmentoutbound_v2020_07_01.model/Origin.js';
import {PackageTrackingDetails} from './js_client.fulfillmentoutbound_v2020_07_01.model/PackageTrackingDetails.js';
import {PaymentInformation} from './js_client.fulfillmentoutbound_v2020_07_01.model/PaymentInformation.js';
import {ProductIdentifier} from './js_client.fulfillmentoutbound_v2020_07_01.model/ProductIdentifier.js';
import {ReasonCodeDetails} from './js_client.fulfillmentoutbound_v2020_07_01.model/ReasonCodeDetails.js';
import {ReturnAuthorization} from './js_client.fulfillmentoutbound_v2020_07_01.model/ReturnAuthorization.js';
import {ReturnItem} from './js_client.fulfillmentoutbound_v2020_07_01.model/ReturnItem.js';
import {ReturnItemDisposition} from './js_client.fulfillmentoutbound_v2020_07_01.model/ReturnItemDisposition.js';
import {ScheduledDeliveryInfo} from './js_client.fulfillmentoutbound_v2020_07_01.model/ScheduledDeliveryInfo.js';
import {ShippingSpeedCategory} from './js_client.fulfillmentoutbound_v2020_07_01.model/ShippingSpeedCategory.js';
import {SubmitFulfillmentOrderStatusUpdateRequest} from './js_client.fulfillmentoutbound_v2020_07_01.model/SubmitFulfillmentOrderStatusUpdateRequest.js';
import {SubmitFulfillmentOrderStatusUpdateResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/SubmitFulfillmentOrderStatusUpdateResponse.js';
import {TrackingAddress} from './js_client.fulfillmentoutbound_v2020_07_01.model/TrackingAddress.js';
import {TrackingEvent} from './js_client.fulfillmentoutbound_v2020_07_01.model/TrackingEvent.js';
import {UnfulfillablePreviewItem} from './js_client.fulfillmentoutbound_v2020_07_01.model/UnfulfillablePreviewItem.js';
import {UpdateFulfillmentOrderItem} from './js_client.fulfillmentoutbound_v2020_07_01.model/UpdateFulfillmentOrderItem.js';
import {UpdateFulfillmentOrderRequest} from './js_client.fulfillmentoutbound_v2020_07_01.model/UpdateFulfillmentOrderRequest.js';
import {UpdateFulfillmentOrderResponse} from './js_client.fulfillmentoutbound_v2020_07_01.model/UpdateFulfillmentOrderResponse.js';
import {VariablePrecisionAddress} from './js_client.fulfillmentoutbound_v2020_07_01.model/VariablePrecisionAddress.js';
import {Weight} from './js_client.fulfillmentoutbound_v2020_07_01.model/Weight.js';
import {FbaOutboundApi} from './js_client.fulfillmentoutbound_v2020_07_01.api/FbaOutboundApi.js';


/**
* The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon&#39;s fulfillment network. You can get information on both potential and existing fulfillment orders..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApisForFulfillmentOutbound = require('index'); // See note below*.
* var xxxSvc = new SellingPartnerApisForFulfillmentOutbound.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApisForFulfillmentOutbound.Yyy(); // Construct a model instance.
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
* var xxxSvc = new SellingPartnerApisForFulfillmentOutbound.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApisForFulfillmentOutbound.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2020-07-01
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdditionalLocationInfo model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/AdditionalLocationInfo}
     */
    AdditionalLocationInfo,

    /**
     * The Address model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/Address}
     */
    Address,

    /**
     * The Amount model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/Amount}
     */
    Amount,

    /**
     * The CODSettings model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/CODSettings}
     */
    CODSettings,

    /**
     * The CancelFulfillmentOrderResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/CancelFulfillmentOrderResponse}
     */
    CancelFulfillmentOrderResponse,

    /**
     * The CreateFulfillmentOrderItem model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentOrderItem}
     */
    CreateFulfillmentOrderItem,

    /**
     * The CreateFulfillmentOrderRequest model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentOrderRequest}
     */
    CreateFulfillmentOrderRequest,

    /**
     * The CreateFulfillmentOrderResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentOrderResponse}
     */
    CreateFulfillmentOrderResponse,

    /**
     * The CreateFulfillmentReturnRequest model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentReturnRequest}
     */
    CreateFulfillmentReturnRequest,

    /**
     * The CreateFulfillmentReturnResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentReturnResponse}
     */
    CreateFulfillmentReturnResponse,

    /**
     * The CreateFulfillmentReturnResult model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/CreateFulfillmentReturnResult}
     */
    CreateFulfillmentReturnResult,

    /**
     * The CreateReturnItem model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/CreateReturnItem}
     */
    CreateReturnItem,

    /**
     * The CurrentStatus model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/CurrentStatus}
     */
    CurrentStatus,

    /**
     * The DateRange model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/DateRange}
     */
    DateRange,

    /**
     * The DeliveryDocument model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryDocument}
     */
    DeliveryDocument,

    /**
     * The DeliveryInformation model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryInformation}
     */
    DeliveryInformation,

    /**
     * The DeliveryMessage model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryMessage}
     */
    DeliveryMessage,

    /**
     * The DeliveryOffer model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryOffer}
     */
    DeliveryOffer,

    /**
     * The DeliveryPolicy model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryPolicy}
     */
    DeliveryPolicy,

    /**
     * The DeliveryPreferences model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryPreferences}
     */
    DeliveryPreferences,

    /**
     * The DeliveryWindow model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/DeliveryWindow}
     */
    DeliveryWindow,

    /**
     * The Destination model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/Destination}
     */
    Destination,

    /**
     * The DropOffLocation model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/DropOffLocation}
     */
    DropOffLocation,

    /**
     * The Error model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/Error}
     */
    Error,

    /**
     * The EventCode model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/EventCode}
     */
    EventCode,

    /**
     * The Feature model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/Feature}
     */
    Feature,

    /**
     * The FeatureSettings model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FeatureSettings}
     */
    FeatureSettings,

    /**
     * The FeatureSku model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FeatureSku}
     */
    FeatureSku,

    /**
     * The Fee model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/Fee}
     */
    Fee,

    /**
     * The FulfillmentAction model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentAction}
     */
    FulfillmentAction,

    /**
     * The FulfillmentOrder model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentOrder}
     */
    FulfillmentOrder,

    /**
     * The FulfillmentOrderItem model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentOrderItem}
     */
    FulfillmentOrderItem,

    /**
     * The FulfillmentOrderStatus model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentOrderStatus}
     */
    FulfillmentOrderStatus,

    /**
     * The FulfillmentPolicy model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentPolicy}
     */
    FulfillmentPolicy,

    /**
     * The FulfillmentPreview model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentPreview}
     */
    FulfillmentPreview,

    /**
     * The FulfillmentPreviewItem model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentPreviewItem}
     */
    FulfillmentPreviewItem,

    /**
     * The FulfillmentPreviewShipment model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentPreviewShipment}
     */
    FulfillmentPreviewShipment,

    /**
     * The FulfillmentReturnItemStatus model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentReturnItemStatus}
     */
    FulfillmentReturnItemStatus,

    /**
     * The FulfillmentShipment model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentShipment}
     */
    FulfillmentShipment,

    /**
     * The FulfillmentShipmentItem model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentShipmentItem}
     */
    FulfillmentShipmentItem,

    /**
     * The FulfillmentShipmentPackage model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentShipmentPackage}
     */
    FulfillmentShipmentPackage,

    /**
     * The GetDeliveryOffersProduct model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetDeliveryOffersProduct}
     */
    GetDeliveryOffersProduct,

    /**
     * The GetDeliveryOffersRequest model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetDeliveryOffersRequest}
     */
    GetDeliveryOffersRequest,

    /**
     * The GetDeliveryOffersResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetDeliveryOffersResponse}
     */
    GetDeliveryOffersResponse,

    /**
     * The GetDeliveryOffersResult model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetDeliveryOffersResult}
     */
    GetDeliveryOffersResult,

    /**
     * The GetDeliveryOffersTerms model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetDeliveryOffersTerms}
     */
    GetDeliveryOffersTerms,

    /**
     * The GetFeatureInventoryResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFeatureInventoryResponse}
     */
    GetFeatureInventoryResponse,

    /**
     * The GetFeatureInventoryResult model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFeatureInventoryResult}
     */
    GetFeatureInventoryResult,

    /**
     * The GetFeatureSkuResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFeatureSkuResponse}
     */
    GetFeatureSkuResponse,

    /**
     * The GetFeatureSkuResult model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFeatureSkuResult}
     */
    GetFeatureSkuResult,

    /**
     * The GetFeaturesResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFeaturesResponse}
     */
    GetFeaturesResponse,

    /**
     * The GetFeaturesResult model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFeaturesResult}
     */
    GetFeaturesResult,

    /**
     * The GetFulfillmentOrderResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentOrderResponse}
     */
    GetFulfillmentOrderResponse,

    /**
     * The GetFulfillmentOrderResult model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentOrderResult}
     */
    GetFulfillmentOrderResult,

    /**
     * The GetFulfillmentPreviewItem model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentPreviewItem}
     */
    GetFulfillmentPreviewItem,

    /**
     * The GetFulfillmentPreviewRequest model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentPreviewRequest}
     */
    GetFulfillmentPreviewRequest,

    /**
     * The GetFulfillmentPreviewResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentPreviewResponse}
     */
    GetFulfillmentPreviewResponse,

    /**
     * The GetFulfillmentPreviewResult model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetFulfillmentPreviewResult}
     */
    GetFulfillmentPreviewResult,

    /**
     * The GetPackageTrackingDetailsResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/GetPackageTrackingDetailsResponse}
     */
    GetPackageTrackingDetailsResponse,

    /**
     * The InvalidItemReason model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/InvalidItemReason}
     */
    InvalidItemReason,

    /**
     * The InvalidItemReasonCode model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/InvalidItemReasonCode}
     */
    InvalidItemReasonCode,

    /**
     * The InvalidReturnItem model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/InvalidReturnItem}
     */
    InvalidReturnItem,

    /**
     * The ListAllFulfillmentOrdersResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ListAllFulfillmentOrdersResponse}
     */
    ListAllFulfillmentOrdersResponse,

    /**
     * The ListAllFulfillmentOrdersResult model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ListAllFulfillmentOrdersResult}
     */
    ListAllFulfillmentOrdersResult,

    /**
     * The ListReturnReasonCodesResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ListReturnReasonCodesResponse}
     */
    ListReturnReasonCodesResponse,

    /**
     * The ListReturnReasonCodesResult model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ListReturnReasonCodesResult}
     */
    ListReturnReasonCodesResult,

    /**
     * The LockerDetails model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/LockerDetails}
     */
    LockerDetails,

    /**
     * The Money model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/Money}
     */
    Money,

    /**
     * The Origin model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/Origin}
     */
    Origin,

    /**
     * The PackageTrackingDetails model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/PackageTrackingDetails}
     */
    PackageTrackingDetails,

    /**
     * The PaymentInformation model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/PaymentInformation}
     */
    PaymentInformation,

    /**
     * The ProductIdentifier model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ProductIdentifier}
     */
    ProductIdentifier,

    /**
     * The ReasonCodeDetails model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ReasonCodeDetails}
     */
    ReasonCodeDetails,

    /**
     * The ReturnAuthorization model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ReturnAuthorization}
     */
    ReturnAuthorization,

    /**
     * The ReturnItem model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ReturnItem}
     */
    ReturnItem,

    /**
     * The ReturnItemDisposition model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ReturnItemDisposition}
     */
    ReturnItemDisposition,

    /**
     * The ScheduledDeliveryInfo model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ScheduledDeliveryInfo}
     */
    ScheduledDeliveryInfo,

    /**
     * The ShippingSpeedCategory model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/ShippingSpeedCategory}
     */
    ShippingSpeedCategory,

    /**
     * The SubmitFulfillmentOrderStatusUpdateRequest model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/SubmitFulfillmentOrderStatusUpdateRequest}
     */
    SubmitFulfillmentOrderStatusUpdateRequest,

    /**
     * The SubmitFulfillmentOrderStatusUpdateResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/SubmitFulfillmentOrderStatusUpdateResponse}
     */
    SubmitFulfillmentOrderStatusUpdateResponse,

    /**
     * The TrackingAddress model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/TrackingAddress}
     */
    TrackingAddress,

    /**
     * The TrackingEvent model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/TrackingEvent}
     */
    TrackingEvent,

    /**
     * The UnfulfillablePreviewItem model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/UnfulfillablePreviewItem}
     */
    UnfulfillablePreviewItem,

    /**
     * The UpdateFulfillmentOrderItem model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/UpdateFulfillmentOrderItem}
     */
    UpdateFulfillmentOrderItem,

    /**
     * The UpdateFulfillmentOrderRequest model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/UpdateFulfillmentOrderRequest}
     */
    UpdateFulfillmentOrderRequest,

    /**
     * The UpdateFulfillmentOrderResponse model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/UpdateFulfillmentOrderResponse}
     */
    UpdateFulfillmentOrderResponse,

    /**
     * The VariablePrecisionAddress model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/VariablePrecisionAddress}
     */
    VariablePrecisionAddress,

    /**
     * The Weight model constructor.
     * @property {module:js_client.fulfillmentoutbound_v2020_07_01.model/Weight}
     */
    Weight,

    /**
    * The FbaOutboundApi service constructor.
    * @property {module:js_client.fulfillmentoutbound_v2020_07_01.api/FbaOutboundApi}
    */
    FbaOutboundApi
};
