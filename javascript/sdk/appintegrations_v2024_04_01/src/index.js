/**
 * The Selling Partner API for third party application integrations.
 * With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central.
 *
 * The version of the OpenAPI document: 2024-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {CreateNotificationRequest} from './js_client.appintegrations_v2024_04_01.model/CreateNotificationRequest.js';
import {CreateNotificationResponse} from './js_client.appintegrations_v2024_04_01.model/CreateNotificationResponse.js';
import {DeleteNotificationsRequest} from './js_client.appintegrations_v2024_04_01.model/DeleteNotificationsRequest.js';
import {Error} from './js_client.appintegrations_v2024_04_01.model/Error.js';
import {ErrorList} from './js_client.appintegrations_v2024_04_01.model/ErrorList.js';
import {RecordActionFeedbackRequest} from './js_client.appintegrations_v2024_04_01.model/RecordActionFeedbackRequest.js';
import {AppIntegrationsApi} from './js_client.appintegrations_v2024_04_01.api/AppIntegrationsApi.js';


/**
* With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* @module index
* @version 2024-04-01
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CreateNotificationRequest model constructor.
     * @property {module:js_client.appintegrations_v2024_04_01.model/CreateNotificationRequest}
     */
    CreateNotificationRequest,

    /**
     * The CreateNotificationResponse model constructor.
     * @property {module:js_client.appintegrations_v2024_04_01.model/CreateNotificationResponse}
     */
    CreateNotificationResponse,

    /**
     * The DeleteNotificationsRequest model constructor.
     * @property {module:js_client.appintegrations_v2024_04_01.model/DeleteNotificationsRequest}
     */
    DeleteNotificationsRequest,

    /**
     * The Error model constructor.
     * @property {module:js_client.appintegrations_v2024_04_01.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:js_client.appintegrations_v2024_04_01.model/ErrorList}
     */
    ErrorList,

    /**
     * The RecordActionFeedbackRequest model constructor.
     * @property {module:js_client.appintegrations_v2024_04_01.model/RecordActionFeedbackRequest}
     */
    RecordActionFeedbackRequest,

    /**
    * The AppIntegrationsApi service constructor.
    * @property {module:js_client.appintegrations_v2024_04_01.api/AppIntegrationsApi}
    */
    AppIntegrationsApi
};
