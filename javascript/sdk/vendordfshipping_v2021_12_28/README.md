# selling_partner_api_for_direct_fulfillment_shipping

SellingPartnerApiForDirectFulfillmentShipping - JavaScript client for selling_partner_api_for_direct_fulfillment_shipping
Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2021-12-28
- Package version: 2021-12-28
- Generator version: 7.12.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://sellercentral.amazon.com/gp/mws/contactus.html](https://sellercentral.amazon.com/gp/mws/contactus.html)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install selling_partner_api_for_direct_fulfillment_shipping --save
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

To use the link you just defined in your project, switch to the directory you want to use your selling_partner_api_for_direct_fulfillment_shipping from, and run:

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
var SellingPartnerApiForDirectFulfillmentShipping = require('selling_partner_api_for_direct_fulfillment_shipping');


var api = new SellingPartnerApiForDirectFulfillmentShipping.CreateContainerLabelApi()
var body = new SellingPartnerApiForDirectFulfillmentShipping.CreateContainerLabelRequest(); // {CreateContainerLabelRequest} Request body containing the container label data.
api.createContainerLabel(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SellingPartnerApiForDirectFulfillmentShipping.CreateContainerLabelApi* | [**createContainerLabel**](docs/CreateContainerLabelApi.md#createContainerLabel) | **POST** /vendor/directFulfillment/shipping/2021-12-28/containerLabel | createContainerLabel
*SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoicesApi* | [**getCustomerInvoice**](docs/CustomerInvoicesApi.md#getCustomerInvoice) | **GET** /vendor/directFulfillment/shipping/2021-12-28/customerInvoices/{purchaseOrderNumber} | getCustomerInvoice
*SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoicesApi* | [**getCustomerInvoices**](docs/CustomerInvoicesApi.md#getCustomerInvoices) | **GET** /vendor/directFulfillment/shipping/2021-12-28/customerInvoices | getCustomerInvoices
*SellingPartnerApiForDirectFulfillmentShipping.VendorShippingApi* | [**getPackingSlip**](docs/VendorShippingApi.md#getPackingSlip) | **GET** /vendor/directFulfillment/shipping/2021-12-28/packingSlips/{purchaseOrderNumber} | getPackingSlip
*SellingPartnerApiForDirectFulfillmentShipping.VendorShippingApi* | [**getPackingSlips**](docs/VendorShippingApi.md#getPackingSlips) | **GET** /vendor/directFulfillment/shipping/2021-12-28/packingSlips | getPackingSlips
*SellingPartnerApiForDirectFulfillmentShipping.VendorShippingApi* | [**submitShipmentConfirmations**](docs/VendorShippingApi.md#submitShipmentConfirmations) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shipmentConfirmations | submitShipmentConfirmations
*SellingPartnerApiForDirectFulfillmentShipping.VendorShippingApi* | [**submitShipmentStatusUpdates**](docs/VendorShippingApi.md#submitShipmentStatusUpdates) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shipmentStatusUpdates | submitShipmentStatusUpdates
*SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi* | [**createShippingLabels**](docs/VendorShippingLabelsApi.md#createShippingLabels) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} | createShippingLabels
*SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi* | [**getShippingLabel**](docs/VendorShippingLabelsApi.md#getShippingLabel) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} | getShippingLabel
*SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi* | [**getShippingLabels**](docs/VendorShippingLabelsApi.md#getShippingLabels) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels | getShippingLabels
*SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi* | [**submitShippingLabelRequest**](docs/VendorShippingLabelsApi.md#submitShippingLabelRequest) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels | submitShippingLabelRequest


## Documentation for Models

 - [SellingPartnerApiForDirectFulfillmentShipping.Address](docs/Address.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.CarrierId](docs/CarrierId.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.Container](docs/Container.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ContainerLabel](docs/ContainerLabel.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ContainerLabelFormat](docs/ContainerLabelFormat.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.CreateContainerLabelRequest](docs/CreateContainerLabelRequest.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.CreateContainerLabelResponse](docs/CreateContainerLabelResponse.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.CreateShippingLabelsRequest](docs/CreateShippingLabelsRequest.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoice](docs/CustomerInvoice.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoiceList](docs/CustomerInvoiceList.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.Dimensions](docs/Dimensions.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.Error](docs/Error.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ErrorList](docs/ErrorList.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.Item](docs/Item.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ItemQuantity](docs/ItemQuantity.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.LabelData](docs/LabelData.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.Package](docs/Package.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.PackedItem](docs/PackedItem.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.PackingSlip](docs/PackingSlip.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.PackingSlipList](docs/PackingSlipList.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.Pagination](docs/Pagination.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.PartyIdentification](docs/PartyIdentification.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ShipmentConfirmation](docs/ShipmentConfirmation.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ShipmentDetails](docs/ShipmentDetails.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ShipmentSchedule](docs/ShipmentSchedule.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ShipmentStatusUpdate](docs/ShipmentStatusUpdate.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ShippingLabel](docs/ShippingLabel.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ShippingLabelList](docs/ShippingLabelList.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.ShippingLabelRequest](docs/ShippingLabelRequest.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.StatusUpdateDetails](docs/StatusUpdateDetails.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.SubmitShipmentConfirmationsRequest](docs/SubmitShipmentConfirmationsRequest.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.SubmitShipmentStatusUpdatesRequest](docs/SubmitShipmentStatusUpdatesRequest.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.SubmitShippingLabelsRequest](docs/SubmitShippingLabelsRequest.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.TaxRegistrationDetails](docs/TaxRegistrationDetails.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.TransactionReference](docs/TransactionReference.md)
 - [SellingPartnerApiForDirectFulfillmentShipping.Weight](docs/Weight.md)


## Documentation for Authorization

Endpoints do not require authorization.

