/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {Code} from './js_client.easyship_v2022_03_23.model/Code.js';
import {CreateScheduledPackageRequest} from './js_client.easyship_v2022_03_23.model/CreateScheduledPackageRequest.js';
import {CreateScheduledPackagesRequest} from './js_client.easyship_v2022_03_23.model/CreateScheduledPackagesRequest.js';
import {CreateScheduledPackagesResponse} from './js_client.easyship_v2022_03_23.model/CreateScheduledPackagesResponse.js';
import {Dimensions} from './js_client.easyship_v2022_03_23.model/Dimensions.js';
import {Error} from './js_client.easyship_v2022_03_23.model/Error.js';
import {ErrorList} from './js_client.easyship_v2022_03_23.model/ErrorList.js';
import {HandoverMethod} from './js_client.easyship_v2022_03_23.model/HandoverMethod.js';
import {InvoiceData} from './js_client.easyship_v2022_03_23.model/InvoiceData.js';
import {Item} from './js_client.easyship_v2022_03_23.model/Item.js';
import {LabelFormat} from './js_client.easyship_v2022_03_23.model/LabelFormat.js';
import {ListHandoverSlotsRequest} from './js_client.easyship_v2022_03_23.model/ListHandoverSlotsRequest.js';
import {ListHandoverSlotsResponse} from './js_client.easyship_v2022_03_23.model/ListHandoverSlotsResponse.js';
import {OrderScheduleDetails} from './js_client.easyship_v2022_03_23.model/OrderScheduleDetails.js';
import {Package} from './js_client.easyship_v2022_03_23.model/Package.js';
import {PackageDetails} from './js_client.easyship_v2022_03_23.model/PackageDetails.js';
import {PackageStatus} from './js_client.easyship_v2022_03_23.model/PackageStatus.js';
import {Packages} from './js_client.easyship_v2022_03_23.model/Packages.js';
import {RejectedOrder} from './js_client.easyship_v2022_03_23.model/RejectedOrder.js';
import {ScheduledPackageId} from './js_client.easyship_v2022_03_23.model/ScheduledPackageId.js';
import {TimeSlot} from './js_client.easyship_v2022_03_23.model/TimeSlot.js';
import {TrackingDetails} from './js_client.easyship_v2022_03_23.model/TrackingDetails.js';
import {UnitOfLength} from './js_client.easyship_v2022_03_23.model/UnitOfLength.js';
import {UnitOfWeight} from './js_client.easyship_v2022_03_23.model/UnitOfWeight.js';
import {UpdatePackageDetails} from './js_client.easyship_v2022_03_23.model/UpdatePackageDetails.js';
import {UpdateScheduledPackagesRequest} from './js_client.easyship_v2022_03_23.model/UpdateScheduledPackagesRequest.js';
import {Weight} from './js_client.easyship_v2022_03_23.model/Weight.js';
import {EasyShipApi} from './js_client.easyship_v2022_03_23.api/EasyShipApi.js';


/**
* Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support)..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForEasyShip = require('index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForEasyShip.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForEasyShip.Yyy(); // Construct a model instance.
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
* var xxxSvc = new SellingPartnerApiForEasyShip.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForEasyShip.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2022-03-23
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Code model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/Code}
     */
    Code,

    /**
     * The CreateScheduledPackageRequest model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/CreateScheduledPackageRequest}
     */
    CreateScheduledPackageRequest,

    /**
     * The CreateScheduledPackagesRequest model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/CreateScheduledPackagesRequest}
     */
    CreateScheduledPackagesRequest,

    /**
     * The CreateScheduledPackagesResponse model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/CreateScheduledPackagesResponse}
     */
    CreateScheduledPackagesResponse,

    /**
     * The Dimensions model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/Dimensions}
     */
    Dimensions,

    /**
     * The Error model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/ErrorList}
     */
    ErrorList,

    /**
     * The HandoverMethod model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/HandoverMethod}
     */
    HandoverMethod,

    /**
     * The InvoiceData model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/InvoiceData}
     */
    InvoiceData,

    /**
     * The Item model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/Item}
     */
    Item,

    /**
     * The LabelFormat model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/LabelFormat}
     */
    LabelFormat,

    /**
     * The ListHandoverSlotsRequest model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/ListHandoverSlotsRequest}
     */
    ListHandoverSlotsRequest,

    /**
     * The ListHandoverSlotsResponse model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/ListHandoverSlotsResponse}
     */
    ListHandoverSlotsResponse,

    /**
     * The OrderScheduleDetails model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/OrderScheduleDetails}
     */
    OrderScheduleDetails,

    /**
     * The Package model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/Package}
     */
    Package,

    /**
     * The PackageDetails model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/PackageDetails}
     */
    PackageDetails,

    /**
     * The PackageStatus model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/PackageStatus}
     */
    PackageStatus,

    /**
     * The Packages model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/Packages}
     */
    Packages,

    /**
     * The RejectedOrder model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/RejectedOrder}
     */
    RejectedOrder,

    /**
     * The ScheduledPackageId model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/ScheduledPackageId}
     */
    ScheduledPackageId,

    /**
     * The TimeSlot model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/TimeSlot}
     */
    TimeSlot,

    /**
     * The TrackingDetails model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/TrackingDetails}
     */
    TrackingDetails,

    /**
     * The UnitOfLength model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/UnitOfLength}
     */
    UnitOfLength,

    /**
     * The UnitOfWeight model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/UnitOfWeight}
     */
    UnitOfWeight,

    /**
     * The UpdatePackageDetails model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/UpdatePackageDetails}
     */
    UpdatePackageDetails,

    /**
     * The UpdateScheduledPackagesRequest model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/UpdateScheduledPackagesRequest}
     */
    UpdateScheduledPackagesRequest,

    /**
     * The Weight model constructor.
     * @property {module:js_client.easyship_v2022_03_23.model/Weight}
     */
    Weight,

    /**
    * The EasyShipApi service constructor.
    * @property {module:js_client.easyship_v2022_03_23.api/EasyShipApi}
    */
    EasyShipApi
};
