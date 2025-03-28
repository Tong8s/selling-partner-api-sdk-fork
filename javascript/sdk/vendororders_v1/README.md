# selling_partner_api_for_retail_procurement_orders

SellingPartnerApiForRetailProcurementOrders - JavaScript client for selling_partner_api_for_retail_procurement_orders
The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: v1
- Generator version: 7.12.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://sellercentral.amazon.com/gp/mws/contactus.html](https://sellercentral.amazon.com/gp/mws/contactus.html)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install selling_partner_api_for_retail_procurement_orders --save
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

To use the link you just defined in your project, switch to the directory you want to use your selling_partner_api_for_retail_procurement_orders from, and run:

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
var SellingPartnerApiForRetailProcurementOrders = require('selling_partner_api_for_retail_procurement_orders');


var api = new SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi()
var purchaseOrderNumber = "purchaseOrderNumber_example"; // {String} The purchase order identifier for the order that you want. Formatting Notes: 8-character alpha-numeric code.
api.getPurchaseOrder(purchaseOrderNumber).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi* | [**getPurchaseOrder**](docs/VendorOrdersApi.md#getPurchaseOrder) | **GET** /vendor/orders/v1/purchaseOrders/{purchaseOrderNumber} | 
*SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi* | [**getPurchaseOrders**](docs/VendorOrdersApi.md#getPurchaseOrders) | **GET** /vendor/orders/v1/purchaseOrders | 
*SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi* | [**getPurchaseOrdersStatus**](docs/VendorOrdersApi.md#getPurchaseOrdersStatus) | **GET** /vendor/orders/v1/purchaseOrdersStatus | 
*SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi* | [**submitAcknowledgement**](docs/VendorOrdersApi.md#submitAcknowledgement) | **POST** /vendor/orders/v1/acknowledgements | 


## Documentation for Models

 - [SellingPartnerApiForRetailProcurementOrders.AcknowledgementStatusDetails](docs/AcknowledgementStatusDetails.md)
 - [SellingPartnerApiForRetailProcurementOrders.Address](docs/Address.md)
 - [SellingPartnerApiForRetailProcurementOrders.Error](docs/Error.md)
 - [SellingPartnerApiForRetailProcurementOrders.GetPurchaseOrderResponse](docs/GetPurchaseOrderResponse.md)
 - [SellingPartnerApiForRetailProcurementOrders.GetPurchaseOrdersResponse](docs/GetPurchaseOrdersResponse.md)
 - [SellingPartnerApiForRetailProcurementOrders.GetPurchaseOrdersStatusResponse](docs/GetPurchaseOrdersStatusResponse.md)
 - [SellingPartnerApiForRetailProcurementOrders.ImportDetails](docs/ImportDetails.md)
 - [SellingPartnerApiForRetailProcurementOrders.ItemQuantity](docs/ItemQuantity.md)
 - [SellingPartnerApiForRetailProcurementOrders.Money](docs/Money.md)
 - [SellingPartnerApiForRetailProcurementOrders.Order](docs/Order.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderAcknowledgement](docs/OrderAcknowledgement.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderAcknowledgementItem](docs/OrderAcknowledgementItem.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderDetails](docs/OrderDetails.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderItem](docs/OrderItem.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement](docs/OrderItemAcknowledgement.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderItemStatus](docs/OrderItemStatus.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderItemStatusAcknowledgementStatus](docs/OrderItemStatusAcknowledgementStatus.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderItemStatusOrderedQuantity](docs/OrderItemStatusOrderedQuantity.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderItemStatusReceivingStatus](docs/OrderItemStatusReceivingStatus.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderList](docs/OrderList.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderListStatus](docs/OrderListStatus.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderStatus](docs/OrderStatus.md)
 - [SellingPartnerApiForRetailProcurementOrders.OrderedQuantityDetails](docs/OrderedQuantityDetails.md)
 - [SellingPartnerApiForRetailProcurementOrders.Pagination](docs/Pagination.md)
 - [SellingPartnerApiForRetailProcurementOrders.PartyIdentification](docs/PartyIdentification.md)
 - [SellingPartnerApiForRetailProcurementOrders.SubmitAcknowledgementRequest](docs/SubmitAcknowledgementRequest.md)
 - [SellingPartnerApiForRetailProcurementOrders.SubmitAcknowledgementResponse](docs/SubmitAcknowledgementResponse.md)
 - [SellingPartnerApiForRetailProcurementOrders.TaxRegistrationDetails](docs/TaxRegistrationDetails.md)
 - [SellingPartnerApiForRetailProcurementOrders.TransactionId](docs/TransactionId.md)


## Documentation for Authorization

Endpoints do not require authorization.

