# selling_partner_api_for_a_content_management

SellingPartnerApiForAContentManagement - JavaScript client for selling_partner_api_for_a_content_management
Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2020-11-01
- Package version: 2020-11-01
- Generator version: 7.12.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://sellercentral.amazon.com/gp/mws/contactus.html](https://sellercentral.amazon.com/gp/mws/contactus.html)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install selling_partner_api_for_a_content_management --save
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

To use the link you just defined in your project, switch to the directory you want to use your selling_partner_api_for_a_content_management from, and run:

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
var SellingPartnerApiForAContentManagement = require('selling_partner_api_for_a_content_management');


var api = new SellingPartnerApiForAContentManagement.AplusContentApi()
var marketplaceId = "marketplaceId_example"; // {String} The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
var postContentDocumentRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentRequest(); // {PostContentDocumentRequest} The content document request details.
api.createContentDocument(marketplaceId, postContentDocumentRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SellingPartnerApiForAContentManagement.AplusContentApi* | [**createContentDocument**](docs/AplusContentApi.md#createContentDocument) | **POST** /aplus/2020-11-01/contentDocuments | 
*SellingPartnerApiForAContentManagement.AplusContentApi* | [**getContentDocument**](docs/AplusContentApi.md#getContentDocument) | **GET** /aplus/2020-11-01/contentDocuments/{contentReferenceKey} | 
*SellingPartnerApiForAContentManagement.AplusContentApi* | [**listContentDocumentAsinRelations**](docs/AplusContentApi.md#listContentDocumentAsinRelations) | **GET** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/asins | 
*SellingPartnerApiForAContentManagement.AplusContentApi* | [**postContentDocumentApprovalSubmission**](docs/AplusContentApi.md#postContentDocumentApprovalSubmission) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/approvalSubmissions | 
*SellingPartnerApiForAContentManagement.AplusContentApi* | [**postContentDocumentAsinRelations**](docs/AplusContentApi.md#postContentDocumentAsinRelations) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/asins | 
*SellingPartnerApiForAContentManagement.AplusContentApi* | [**postContentDocumentSuspendSubmission**](docs/AplusContentApi.md#postContentDocumentSuspendSubmission) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/suspendSubmissions | 
*SellingPartnerApiForAContentManagement.AplusContentApi* | [**searchContentDocuments**](docs/AplusContentApi.md#searchContentDocuments) | **GET** /aplus/2020-11-01/contentDocuments | 
*SellingPartnerApiForAContentManagement.AplusContentApi* | [**searchContentPublishRecords**](docs/AplusContentApi.md#searchContentPublishRecords) | **GET** /aplus/2020-11-01/contentPublishRecords | 
*SellingPartnerApiForAContentManagement.AplusContentApi* | [**updateContentDocument**](docs/AplusContentApi.md#updateContentDocument) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey} | 
*SellingPartnerApiForAContentManagement.AplusContentApi* | [**validateContentDocumentAsinRelations**](docs/AplusContentApi.md#validateContentDocumentAsinRelations) | **POST** /aplus/2020-11-01/contentAsinValidations | 


## Documentation for Models

 - [SellingPartnerApiForAContentManagement.AplusPaginatedResponse](docs/AplusPaginatedResponse.md)
 - [SellingPartnerApiForAContentManagement.AplusResponse](docs/AplusResponse.md)
 - [SellingPartnerApiForAContentManagement.AsinBadge](docs/AsinBadge.md)
 - [SellingPartnerApiForAContentManagement.AsinMetadata](docs/AsinMetadata.md)
 - [SellingPartnerApiForAContentManagement.ColorType](docs/ColorType.md)
 - [SellingPartnerApiForAContentManagement.ContentBadge](docs/ContentBadge.md)
 - [SellingPartnerApiForAContentManagement.ContentDocument](docs/ContentDocument.md)
 - [SellingPartnerApiForAContentManagement.ContentMetadata](docs/ContentMetadata.md)
 - [SellingPartnerApiForAContentManagement.ContentMetadataRecord](docs/ContentMetadataRecord.md)
 - [SellingPartnerApiForAContentManagement.ContentModule](docs/ContentModule.md)
 - [SellingPartnerApiForAContentManagement.ContentModuleType](docs/ContentModuleType.md)
 - [SellingPartnerApiForAContentManagement.ContentRecord](docs/ContentRecord.md)
 - [SellingPartnerApiForAContentManagement.ContentStatus](docs/ContentStatus.md)
 - [SellingPartnerApiForAContentManagement.ContentType](docs/ContentType.md)
 - [SellingPartnerApiForAContentManagement.Decorator](docs/Decorator.md)
 - [SellingPartnerApiForAContentManagement.DecoratorType](docs/DecoratorType.md)
 - [SellingPartnerApiForAContentManagement.Error](docs/Error.md)
 - [SellingPartnerApiForAContentManagement.ErrorList](docs/ErrorList.md)
 - [SellingPartnerApiForAContentManagement.GetContentDocumentResponse](docs/GetContentDocumentResponse.md)
 - [SellingPartnerApiForAContentManagement.ImageComponent](docs/ImageComponent.md)
 - [SellingPartnerApiForAContentManagement.ImageCropSpecification](docs/ImageCropSpecification.md)
 - [SellingPartnerApiForAContentManagement.ImageDimensions](docs/ImageDimensions.md)
 - [SellingPartnerApiForAContentManagement.ImageOffsets](docs/ImageOffsets.md)
 - [SellingPartnerApiForAContentManagement.IntegerWithUnits](docs/IntegerWithUnits.md)
 - [SellingPartnerApiForAContentManagement.ListContentDocumentAsinRelationsResponse](docs/ListContentDocumentAsinRelationsResponse.md)
 - [SellingPartnerApiForAContentManagement.ParagraphComponent](docs/ParagraphComponent.md)
 - [SellingPartnerApiForAContentManagement.PlainTextItem](docs/PlainTextItem.md)
 - [SellingPartnerApiForAContentManagement.PositionType](docs/PositionType.md)
 - [SellingPartnerApiForAContentManagement.PostContentDocumentApprovalSubmissionResponse](docs/PostContentDocumentApprovalSubmissionResponse.md)
 - [SellingPartnerApiForAContentManagement.PostContentDocumentAsinRelationsRequest](docs/PostContentDocumentAsinRelationsRequest.md)
 - [SellingPartnerApiForAContentManagement.PostContentDocumentAsinRelationsResponse](docs/PostContentDocumentAsinRelationsResponse.md)
 - [SellingPartnerApiForAContentManagement.PostContentDocumentRequest](docs/PostContentDocumentRequest.md)
 - [SellingPartnerApiForAContentManagement.PostContentDocumentResponse](docs/PostContentDocumentResponse.md)
 - [SellingPartnerApiForAContentManagement.PostContentDocumentSuspendSubmissionResponse](docs/PostContentDocumentSuspendSubmissionResponse.md)
 - [SellingPartnerApiForAContentManagement.PublishRecord](docs/PublishRecord.md)
 - [SellingPartnerApiForAContentManagement.SearchContentDocumentsResponse](docs/SearchContentDocumentsResponse.md)
 - [SellingPartnerApiForAContentManagement.SearchContentPublishRecordsResponse](docs/SearchContentPublishRecordsResponse.md)
 - [SellingPartnerApiForAContentManagement.StandardCompanyLogoModule](docs/StandardCompanyLogoModule.md)
 - [SellingPartnerApiForAContentManagement.StandardComparisonProductBlock](docs/StandardComparisonProductBlock.md)
 - [SellingPartnerApiForAContentManagement.StandardComparisonTableModule](docs/StandardComparisonTableModule.md)
 - [SellingPartnerApiForAContentManagement.StandardFourImageTextModule](docs/StandardFourImageTextModule.md)
 - [SellingPartnerApiForAContentManagement.StandardFourImageTextQuadrantModule](docs/StandardFourImageTextQuadrantModule.md)
 - [SellingPartnerApiForAContentManagement.StandardHeaderImageTextModule](docs/StandardHeaderImageTextModule.md)
 - [SellingPartnerApiForAContentManagement.StandardHeaderTextListBlock](docs/StandardHeaderTextListBlock.md)
 - [SellingPartnerApiForAContentManagement.StandardImageCaptionBlock](docs/StandardImageCaptionBlock.md)
 - [SellingPartnerApiForAContentManagement.StandardImageSidebarModule](docs/StandardImageSidebarModule.md)
 - [SellingPartnerApiForAContentManagement.StandardImageTextBlock](docs/StandardImageTextBlock.md)
 - [SellingPartnerApiForAContentManagement.StandardImageTextCaptionBlock](docs/StandardImageTextCaptionBlock.md)
 - [SellingPartnerApiForAContentManagement.StandardImageTextOverlayModule](docs/StandardImageTextOverlayModule.md)
 - [SellingPartnerApiForAContentManagement.StandardMultipleImageTextModule](docs/StandardMultipleImageTextModule.md)
 - [SellingPartnerApiForAContentManagement.StandardProductDescriptionModule](docs/StandardProductDescriptionModule.md)
 - [SellingPartnerApiForAContentManagement.StandardSingleImageHighlightsModule](docs/StandardSingleImageHighlightsModule.md)
 - [SellingPartnerApiForAContentManagement.StandardSingleImageSpecsDetailModule](docs/StandardSingleImageSpecsDetailModule.md)
 - [SellingPartnerApiForAContentManagement.StandardSingleSideImageModule](docs/StandardSingleSideImageModule.md)
 - [SellingPartnerApiForAContentManagement.StandardTechSpecsModule](docs/StandardTechSpecsModule.md)
 - [SellingPartnerApiForAContentManagement.StandardTextBlock](docs/StandardTextBlock.md)
 - [SellingPartnerApiForAContentManagement.StandardTextListBlock](docs/StandardTextListBlock.md)
 - [SellingPartnerApiForAContentManagement.StandardTextModule](docs/StandardTextModule.md)
 - [SellingPartnerApiForAContentManagement.StandardTextPairBlock](docs/StandardTextPairBlock.md)
 - [SellingPartnerApiForAContentManagement.StandardThreeImageTextModule](docs/StandardThreeImageTextModule.md)
 - [SellingPartnerApiForAContentManagement.TextComponent](docs/TextComponent.md)
 - [SellingPartnerApiForAContentManagement.TextItem](docs/TextItem.md)
 - [SellingPartnerApiForAContentManagement.ValidateContentDocumentAsinRelationsResponse](docs/ValidateContentDocumentAsinRelationsResponse.md)


## Documentation for Authorization

Endpoints do not require authorization.

