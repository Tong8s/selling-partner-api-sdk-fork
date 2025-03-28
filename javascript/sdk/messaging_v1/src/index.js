/**
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
import {Attachment} from './js_client.messaging_v1.model/Attachment.js';
import {CreateAmazonMotorsRequest} from './js_client.messaging_v1.model/CreateAmazonMotorsRequest.js';
import {CreateAmazonMotorsResponse} from './js_client.messaging_v1.model/CreateAmazonMotorsResponse.js';
import {CreateConfirmCustomizationDetailsRequest} from './js_client.messaging_v1.model/CreateConfirmCustomizationDetailsRequest.js';
import {CreateConfirmCustomizationDetailsResponse} from './js_client.messaging_v1.model/CreateConfirmCustomizationDetailsResponse.js';
import {CreateConfirmDeliveryDetailsRequest} from './js_client.messaging_v1.model/CreateConfirmDeliveryDetailsRequest.js';
import {CreateConfirmDeliveryDetailsResponse} from './js_client.messaging_v1.model/CreateConfirmDeliveryDetailsResponse.js';
import {CreateConfirmOrderDetailsRequest} from './js_client.messaging_v1.model/CreateConfirmOrderDetailsRequest.js';
import {CreateConfirmOrderDetailsResponse} from './js_client.messaging_v1.model/CreateConfirmOrderDetailsResponse.js';
import {CreateConfirmServiceDetailsRequest} from './js_client.messaging_v1.model/CreateConfirmServiceDetailsRequest.js';
import {CreateConfirmServiceDetailsResponse} from './js_client.messaging_v1.model/CreateConfirmServiceDetailsResponse.js';
import {CreateDigitalAccessKeyRequest} from './js_client.messaging_v1.model/CreateDigitalAccessKeyRequest.js';
import {CreateDigitalAccessKeyResponse} from './js_client.messaging_v1.model/CreateDigitalAccessKeyResponse.js';
import {CreateLegalDisclosureRequest} from './js_client.messaging_v1.model/CreateLegalDisclosureRequest.js';
import {CreateLegalDisclosureResponse} from './js_client.messaging_v1.model/CreateLegalDisclosureResponse.js';
import {CreateNegativeFeedbackRemovalResponse} from './js_client.messaging_v1.model/CreateNegativeFeedbackRemovalResponse.js';
import {CreateUnexpectedProblemRequest} from './js_client.messaging_v1.model/CreateUnexpectedProblemRequest.js';
import {CreateUnexpectedProblemResponse} from './js_client.messaging_v1.model/CreateUnexpectedProblemResponse.js';
import {CreateWarrantyRequest} from './js_client.messaging_v1.model/CreateWarrantyRequest.js';
import {CreateWarrantyResponse} from './js_client.messaging_v1.model/CreateWarrantyResponse.js';
import {Error} from './js_client.messaging_v1.model/Error.js';
import {GetAttributesResponse} from './js_client.messaging_v1.model/GetAttributesResponse.js';
import {GetAttributesResponseBuyer} from './js_client.messaging_v1.model/GetAttributesResponseBuyer.js';
import {GetMessagingActionResponse} from './js_client.messaging_v1.model/GetMessagingActionResponse.js';
import {GetMessagingActionResponseEmbedded} from './js_client.messaging_v1.model/GetMessagingActionResponseEmbedded.js';
import {GetMessagingActionResponseLinks} from './js_client.messaging_v1.model/GetMessagingActionResponseLinks.js';
import {GetMessagingActionsForOrderResponse} from './js_client.messaging_v1.model/GetMessagingActionsForOrderResponse.js';
import {GetMessagingActionsForOrderResponseEmbedded} from './js_client.messaging_v1.model/GetMessagingActionsForOrderResponseEmbedded.js';
import {GetMessagingActionsForOrderResponseLinks} from './js_client.messaging_v1.model/GetMessagingActionsForOrderResponseLinks.js';
import {GetSchemaResponse} from './js_client.messaging_v1.model/GetSchemaResponse.js';
import {GetSchemaResponseLinks} from './js_client.messaging_v1.model/GetSchemaResponseLinks.js';
import {InvoiceRequest} from './js_client.messaging_v1.model/InvoiceRequest.js';
import {InvoiceResponse} from './js_client.messaging_v1.model/InvoiceResponse.js';
import {LinkObject} from './js_client.messaging_v1.model/LinkObject.js';
import {MessagingAction} from './js_client.messaging_v1.model/MessagingAction.js';
import {MessagingApi} from './js_client.messaging_v1.api/MessagingApi.js';


/**
* With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the &lt;a href&#x3D;https://tools.ietf.org/html/draft-kelly-json-hal-08&gt;JSON Hypertext Application Language&lt;/a&gt; (HAL) standard..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForMessaging = require('index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForMessaging.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForMessaging.Yyy(); // Construct a model instance.
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
* var xxxSvc = new SellingPartnerApiForMessaging.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForMessaging.Yyy(); // Construct a model instance.
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
     * The Attachment model constructor.
     * @property {module:js_client.messaging_v1.model/Attachment}
     */
    Attachment,

    /**
     * The CreateAmazonMotorsRequest model constructor.
     * @property {module:js_client.messaging_v1.model/CreateAmazonMotorsRequest}
     */
    CreateAmazonMotorsRequest,

    /**
     * The CreateAmazonMotorsResponse model constructor.
     * @property {module:js_client.messaging_v1.model/CreateAmazonMotorsResponse}
     */
    CreateAmazonMotorsResponse,

    /**
     * The CreateConfirmCustomizationDetailsRequest model constructor.
     * @property {module:js_client.messaging_v1.model/CreateConfirmCustomizationDetailsRequest}
     */
    CreateConfirmCustomizationDetailsRequest,

    /**
     * The CreateConfirmCustomizationDetailsResponse model constructor.
     * @property {module:js_client.messaging_v1.model/CreateConfirmCustomizationDetailsResponse}
     */
    CreateConfirmCustomizationDetailsResponse,

    /**
     * The CreateConfirmDeliveryDetailsRequest model constructor.
     * @property {module:js_client.messaging_v1.model/CreateConfirmDeliveryDetailsRequest}
     */
    CreateConfirmDeliveryDetailsRequest,

    /**
     * The CreateConfirmDeliveryDetailsResponse model constructor.
     * @property {module:js_client.messaging_v1.model/CreateConfirmDeliveryDetailsResponse}
     */
    CreateConfirmDeliveryDetailsResponse,

    /**
     * The CreateConfirmOrderDetailsRequest model constructor.
     * @property {module:js_client.messaging_v1.model/CreateConfirmOrderDetailsRequest}
     */
    CreateConfirmOrderDetailsRequest,

    /**
     * The CreateConfirmOrderDetailsResponse model constructor.
     * @property {module:js_client.messaging_v1.model/CreateConfirmOrderDetailsResponse}
     */
    CreateConfirmOrderDetailsResponse,

    /**
     * The CreateConfirmServiceDetailsRequest model constructor.
     * @property {module:js_client.messaging_v1.model/CreateConfirmServiceDetailsRequest}
     */
    CreateConfirmServiceDetailsRequest,

    /**
     * The CreateConfirmServiceDetailsResponse model constructor.
     * @property {module:js_client.messaging_v1.model/CreateConfirmServiceDetailsResponse}
     */
    CreateConfirmServiceDetailsResponse,

    /**
     * The CreateDigitalAccessKeyRequest model constructor.
     * @property {module:js_client.messaging_v1.model/CreateDigitalAccessKeyRequest}
     */
    CreateDigitalAccessKeyRequest,

    /**
     * The CreateDigitalAccessKeyResponse model constructor.
     * @property {module:js_client.messaging_v1.model/CreateDigitalAccessKeyResponse}
     */
    CreateDigitalAccessKeyResponse,

    /**
     * The CreateLegalDisclosureRequest model constructor.
     * @property {module:js_client.messaging_v1.model/CreateLegalDisclosureRequest}
     */
    CreateLegalDisclosureRequest,

    /**
     * The CreateLegalDisclosureResponse model constructor.
     * @property {module:js_client.messaging_v1.model/CreateLegalDisclosureResponse}
     */
    CreateLegalDisclosureResponse,

    /**
     * The CreateNegativeFeedbackRemovalResponse model constructor.
     * @property {module:js_client.messaging_v1.model/CreateNegativeFeedbackRemovalResponse}
     */
    CreateNegativeFeedbackRemovalResponse,

    /**
     * The CreateUnexpectedProblemRequest model constructor.
     * @property {module:js_client.messaging_v1.model/CreateUnexpectedProblemRequest}
     */
    CreateUnexpectedProblemRequest,

    /**
     * The CreateUnexpectedProblemResponse model constructor.
     * @property {module:js_client.messaging_v1.model/CreateUnexpectedProblemResponse}
     */
    CreateUnexpectedProblemResponse,

    /**
     * The CreateWarrantyRequest model constructor.
     * @property {module:js_client.messaging_v1.model/CreateWarrantyRequest}
     */
    CreateWarrantyRequest,

    /**
     * The CreateWarrantyResponse model constructor.
     * @property {module:js_client.messaging_v1.model/CreateWarrantyResponse}
     */
    CreateWarrantyResponse,

    /**
     * The Error model constructor.
     * @property {module:js_client.messaging_v1.model/Error}
     */
    Error,

    /**
     * The GetAttributesResponse model constructor.
     * @property {module:js_client.messaging_v1.model/GetAttributesResponse}
     */
    GetAttributesResponse,

    /**
     * The GetAttributesResponseBuyer model constructor.
     * @property {module:js_client.messaging_v1.model/GetAttributesResponseBuyer}
     */
    GetAttributesResponseBuyer,

    /**
     * The GetMessagingActionResponse model constructor.
     * @property {module:js_client.messaging_v1.model/GetMessagingActionResponse}
     */
    GetMessagingActionResponse,

    /**
     * The GetMessagingActionResponseEmbedded model constructor.
     * @property {module:js_client.messaging_v1.model/GetMessagingActionResponseEmbedded}
     */
    GetMessagingActionResponseEmbedded,

    /**
     * The GetMessagingActionResponseLinks model constructor.
     * @property {module:js_client.messaging_v1.model/GetMessagingActionResponseLinks}
     */
    GetMessagingActionResponseLinks,

    /**
     * The GetMessagingActionsForOrderResponse model constructor.
     * @property {module:js_client.messaging_v1.model/GetMessagingActionsForOrderResponse}
     */
    GetMessagingActionsForOrderResponse,

    /**
     * The GetMessagingActionsForOrderResponseEmbedded model constructor.
     * @property {module:js_client.messaging_v1.model/GetMessagingActionsForOrderResponseEmbedded}
     */
    GetMessagingActionsForOrderResponseEmbedded,

    /**
     * The GetMessagingActionsForOrderResponseLinks model constructor.
     * @property {module:js_client.messaging_v1.model/GetMessagingActionsForOrderResponseLinks}
     */
    GetMessagingActionsForOrderResponseLinks,

    /**
     * The GetSchemaResponse model constructor.
     * @property {module:js_client.messaging_v1.model/GetSchemaResponse}
     */
    GetSchemaResponse,

    /**
     * The GetSchemaResponseLinks model constructor.
     * @property {module:js_client.messaging_v1.model/GetSchemaResponseLinks}
     */
    GetSchemaResponseLinks,

    /**
     * The InvoiceRequest model constructor.
     * @property {module:js_client.messaging_v1.model/InvoiceRequest}
     */
    InvoiceRequest,

    /**
     * The InvoiceResponse model constructor.
     * @property {module:js_client.messaging_v1.model/InvoiceResponse}
     */
    InvoiceResponse,

    /**
     * The LinkObject model constructor.
     * @property {module:js_client.messaging_v1.model/LinkObject}
     */
    LinkObject,

    /**
     * The MessagingAction model constructor.
     * @property {module:js_client.messaging_v1.model/MessagingAction}
     */
    MessagingAction,

    /**
    * The MessagingApi service constructor.
    * @property {module:js_client.messaging_v1.api/MessagingApi}
    */
    MessagingApi
};
