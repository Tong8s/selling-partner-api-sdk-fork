# selling_partner_apis_for_fulfillment_outbound

SellingPartnerApisForFulfillmentOutbound - JavaScript client for selling_partner_apis_for_fulfillment_outbound
The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2020-07-01
- Package version: 2020-07-01
- Generator version: 7.12.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://sellercentral.amazon.com/gp/mws/contactus.html](https://sellercentral.amazon.com/gp/mws/contactus.html)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install selling_partner_apis_for_fulfillment_outbound --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your selling_partner_apis_for_fulfillment_outbound from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SellingPartnerApisForFulfillmentOutbound = require('selling_partner_apis_for_fulfillment_outbound');


var api = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi()
var sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // {String} The identifier assigned to the item by the seller when the fulfillment order was created.
api.cancelFulfillmentOrder(sellerFulfillmentOrderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**cancelFulfillmentOrder**](docs/FbaOutboundApi.md#cancelFulfillmentOrder) | **PUT** /fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}/cancel | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**createFulfillmentOrder**](docs/FbaOutboundApi.md#createFulfillmentOrder) | **POST** /fba/outbound/2020-07-01/fulfillmentOrders | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**createFulfillmentReturn**](docs/FbaOutboundApi.md#createFulfillmentReturn) | **PUT** /fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}/return | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**deliveryOffers**](docs/FbaOutboundApi.md#deliveryOffers) | **POST** /fba/outbound/2020-07-01/deliveryOffers | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**getFeatureInventory**](docs/FbaOutboundApi.md#getFeatureInventory) | **GET** /fba/outbound/2020-07-01/features/inventory/{featureName} | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**getFeatureSKU**](docs/FbaOutboundApi.md#getFeatureSKU) | **GET** /fba/outbound/2020-07-01/features/inventory/{featureName}/{sellerSku} | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**getFeatures**](docs/FbaOutboundApi.md#getFeatures) | **GET** /fba/outbound/2020-07-01/features | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**getFulfillmentOrder**](docs/FbaOutboundApi.md#getFulfillmentOrder) | **GET** /fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId} | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**getFulfillmentPreview**](docs/FbaOutboundApi.md#getFulfillmentPreview) | **POST** /fba/outbound/2020-07-01/fulfillmentOrders/preview | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**getPackageTrackingDetails**](docs/FbaOutboundApi.md#getPackageTrackingDetails) | **GET** /fba/outbound/2020-07-01/tracking | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**listAllFulfillmentOrders**](docs/FbaOutboundApi.md#listAllFulfillmentOrders) | **GET** /fba/outbound/2020-07-01/fulfillmentOrders | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**listReturnReasonCodes**](docs/FbaOutboundApi.md#listReturnReasonCodes) | **GET** /fba/outbound/2020-07-01/returnReasonCodes | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**submitFulfillmentOrderStatusUpdate**](docs/FbaOutboundApi.md#submitFulfillmentOrderStatusUpdate) | **PUT** /fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}/status | 
*SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi* | [**updateFulfillmentOrder**](docs/FbaOutboundApi.md#updateFulfillmentOrder) | **PUT** /fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId} | 


## Documentation for Models

 - [SellingPartnerApisForFulfillmentOutbound.AdditionalLocationInfo](docs/AdditionalLocationInfo.md)
 - [SellingPartnerApisForFulfillmentOutbound.Address](docs/Address.md)
 - [SellingPartnerApisForFulfillmentOutbound.Amount](docs/Amount.md)
 - [SellingPartnerApisForFulfillmentOutbound.CODSettings](docs/CODSettings.md)
 - [SellingPartnerApisForFulfillmentOutbound.CancelFulfillmentOrderResponse](docs/CancelFulfillmentOrderResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentOrderItem](docs/CreateFulfillmentOrderItem.md)
 - [SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentOrderRequest](docs/CreateFulfillmentOrderRequest.md)
 - [SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentOrderResponse](docs/CreateFulfillmentOrderResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentReturnRequest](docs/CreateFulfillmentReturnRequest.md)
 - [SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentReturnResponse](docs/CreateFulfillmentReturnResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentReturnResult](docs/CreateFulfillmentReturnResult.md)
 - [SellingPartnerApisForFulfillmentOutbound.CreateReturnItem](docs/CreateReturnItem.md)
 - [SellingPartnerApisForFulfillmentOutbound.CurrentStatus](docs/CurrentStatus.md)
 - [SellingPartnerApisForFulfillmentOutbound.DateRange](docs/DateRange.md)
 - [SellingPartnerApisForFulfillmentOutbound.DeliveryDocument](docs/DeliveryDocument.md)
 - [SellingPartnerApisForFulfillmentOutbound.DeliveryInformation](docs/DeliveryInformation.md)
 - [SellingPartnerApisForFulfillmentOutbound.DeliveryMessage](docs/DeliveryMessage.md)
 - [SellingPartnerApisForFulfillmentOutbound.DeliveryOffer](docs/DeliveryOffer.md)
 - [SellingPartnerApisForFulfillmentOutbound.DeliveryPolicy](docs/DeliveryPolicy.md)
 - [SellingPartnerApisForFulfillmentOutbound.DeliveryPreferences](docs/DeliveryPreferences.md)
 - [SellingPartnerApisForFulfillmentOutbound.DeliveryWindow](docs/DeliveryWindow.md)
 - [SellingPartnerApisForFulfillmentOutbound.Destination](docs/Destination.md)
 - [SellingPartnerApisForFulfillmentOutbound.DropOffLocation](docs/DropOffLocation.md)
 - [SellingPartnerApisForFulfillmentOutbound.Error](docs/Error.md)
 - [SellingPartnerApisForFulfillmentOutbound.EventCode](docs/EventCode.md)
 - [SellingPartnerApisForFulfillmentOutbound.Feature](docs/Feature.md)
 - [SellingPartnerApisForFulfillmentOutbound.FeatureSettings](docs/FeatureSettings.md)
 - [SellingPartnerApisForFulfillmentOutbound.FeatureSku](docs/FeatureSku.md)
 - [SellingPartnerApisForFulfillmentOutbound.Fee](docs/Fee.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentAction](docs/FulfillmentAction.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentOrder](docs/FulfillmentOrder.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentOrderItem](docs/FulfillmentOrderItem.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentOrderStatus](docs/FulfillmentOrderStatus.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentPolicy](docs/FulfillmentPolicy.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentPreview](docs/FulfillmentPreview.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewItem](docs/FulfillmentPreviewItem.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment](docs/FulfillmentPreviewShipment.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentReturnItemStatus](docs/FulfillmentReturnItemStatus.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment](docs/FulfillmentShipment.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentShipmentItem](docs/FulfillmentShipmentItem.md)
 - [SellingPartnerApisForFulfillmentOutbound.FulfillmentShipmentPackage](docs/FulfillmentShipmentPackage.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetDeliveryOffersProduct](docs/GetDeliveryOffersProduct.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetDeliveryOffersRequest](docs/GetDeliveryOffersRequest.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetDeliveryOffersResponse](docs/GetDeliveryOffersResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetDeliveryOffersResult](docs/GetDeliveryOffersResult.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetDeliveryOffersTerms](docs/GetDeliveryOffersTerms.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFeatureInventoryResponse](docs/GetFeatureInventoryResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFeatureInventoryResult](docs/GetFeatureInventoryResult.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFeatureSkuResponse](docs/GetFeatureSkuResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFeatureSkuResult](docs/GetFeatureSkuResult.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFeaturesResponse](docs/GetFeaturesResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFeaturesResult](docs/GetFeaturesResult.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFulfillmentOrderResponse](docs/GetFulfillmentOrderResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFulfillmentOrderResult](docs/GetFulfillmentOrderResult.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFulfillmentPreviewItem](docs/GetFulfillmentPreviewItem.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFulfillmentPreviewRequest](docs/GetFulfillmentPreviewRequest.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFulfillmentPreviewResponse](docs/GetFulfillmentPreviewResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetFulfillmentPreviewResult](docs/GetFulfillmentPreviewResult.md)
 - [SellingPartnerApisForFulfillmentOutbound.GetPackageTrackingDetailsResponse](docs/GetPackageTrackingDetailsResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.InvalidItemReason](docs/InvalidItemReason.md)
 - [SellingPartnerApisForFulfillmentOutbound.InvalidItemReasonCode](docs/InvalidItemReasonCode.md)
 - [SellingPartnerApisForFulfillmentOutbound.InvalidReturnItem](docs/InvalidReturnItem.md)
 - [SellingPartnerApisForFulfillmentOutbound.ListAllFulfillmentOrdersResponse](docs/ListAllFulfillmentOrdersResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.ListAllFulfillmentOrdersResult](docs/ListAllFulfillmentOrdersResult.md)
 - [SellingPartnerApisForFulfillmentOutbound.ListReturnReasonCodesResponse](docs/ListReturnReasonCodesResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.ListReturnReasonCodesResult](docs/ListReturnReasonCodesResult.md)
 - [SellingPartnerApisForFulfillmentOutbound.LockerDetails](docs/LockerDetails.md)
 - [SellingPartnerApisForFulfillmentOutbound.Money](docs/Money.md)
 - [SellingPartnerApisForFulfillmentOutbound.Origin](docs/Origin.md)
 - [SellingPartnerApisForFulfillmentOutbound.PackageTrackingDetails](docs/PackageTrackingDetails.md)
 - [SellingPartnerApisForFulfillmentOutbound.PaymentInformation](docs/PaymentInformation.md)
 - [SellingPartnerApisForFulfillmentOutbound.ProductIdentifier](docs/ProductIdentifier.md)
 - [SellingPartnerApisForFulfillmentOutbound.ReasonCodeDetails](docs/ReasonCodeDetails.md)
 - [SellingPartnerApisForFulfillmentOutbound.ReturnAuthorization](docs/ReturnAuthorization.md)
 - [SellingPartnerApisForFulfillmentOutbound.ReturnItem](docs/ReturnItem.md)
 - [SellingPartnerApisForFulfillmentOutbound.ReturnItemDisposition](docs/ReturnItemDisposition.md)
 - [SellingPartnerApisForFulfillmentOutbound.ScheduledDeliveryInfo](docs/ScheduledDeliveryInfo.md)
 - [SellingPartnerApisForFulfillmentOutbound.ShippingSpeedCategory](docs/ShippingSpeedCategory.md)
 - [SellingPartnerApisForFulfillmentOutbound.SubmitFulfillmentOrderStatusUpdateRequest](docs/SubmitFulfillmentOrderStatusUpdateRequest.md)
 - [SellingPartnerApisForFulfillmentOutbound.SubmitFulfillmentOrderStatusUpdateResponse](docs/SubmitFulfillmentOrderStatusUpdateResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.TrackingAddress](docs/TrackingAddress.md)
 - [SellingPartnerApisForFulfillmentOutbound.TrackingEvent](docs/TrackingEvent.md)
 - [SellingPartnerApisForFulfillmentOutbound.UnfulfillablePreviewItem](docs/UnfulfillablePreviewItem.md)
 - [SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderItem](docs/UpdateFulfillmentOrderItem.md)
 - [SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderRequest](docs/UpdateFulfillmentOrderRequest.md)
 - [SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderResponse](docs/UpdateFulfillmentOrderResponse.md)
 - [SellingPartnerApisForFulfillmentOutbound.VariablePrecisionAddress](docs/VariablePrecisionAddress.md)
 - [SellingPartnerApisForFulfillmentOutbound.Weight](docs/Weight.md)


## Documentation for Authorization

Endpoints do not require authorization.

