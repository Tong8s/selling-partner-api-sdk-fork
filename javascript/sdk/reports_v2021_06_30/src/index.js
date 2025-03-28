/**
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2021-06-30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {CreateReportResponse} from './js_client.reports_v2021_06_30.model/CreateReportResponse.js';
import {CreateReportScheduleResponse} from './js_client.reports_v2021_06_30.model/CreateReportScheduleResponse.js';
import {CreateReportScheduleSpecification} from './js_client.reports_v2021_06_30.model/CreateReportScheduleSpecification.js';
import {CreateReportSpecification} from './js_client.reports_v2021_06_30.model/CreateReportSpecification.js';
import {Error} from './js_client.reports_v2021_06_30.model/Error.js';
import {ErrorList} from './js_client.reports_v2021_06_30.model/ErrorList.js';
import {GetReportsResponse} from './js_client.reports_v2021_06_30.model/GetReportsResponse.js';
import {Report} from './js_client.reports_v2021_06_30.model/Report.js';
import {ReportDocument} from './js_client.reports_v2021_06_30.model/ReportDocument.js';
import {ReportSchedule} from './js_client.reports_v2021_06_30.model/ReportSchedule.js';
import {ReportScheduleList} from './js_client.reports_v2021_06_30.model/ReportScheduleList.js';
import {ReportsApi} from './js_client.reports_v2021_06_30.api/ReportsApi.js';


/**
* The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForReports = require('index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForReports.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForReports.Yyy(); // Construct a model instance.
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
* var xxxSvc = new SellingPartnerApiForReports.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForReports.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2021-06-30
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CreateReportResponse model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/CreateReportResponse}
     */
    CreateReportResponse,

    /**
     * The CreateReportScheduleResponse model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/CreateReportScheduleResponse}
     */
    CreateReportScheduleResponse,

    /**
     * The CreateReportScheduleSpecification model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/CreateReportScheduleSpecification}
     */
    CreateReportScheduleSpecification,

    /**
     * The CreateReportSpecification model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/CreateReportSpecification}
     */
    CreateReportSpecification,

    /**
     * The Error model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/ErrorList}
     */
    ErrorList,

    /**
     * The GetReportsResponse model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/GetReportsResponse}
     */
    GetReportsResponse,

    /**
     * The Report model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/Report}
     */
    Report,

    /**
     * The ReportDocument model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/ReportDocument}
     */
    ReportDocument,

    /**
     * The ReportSchedule model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/ReportSchedule}
     */
    ReportSchedule,

    /**
     * The ReportScheduleList model constructor.
     * @property {module:js_client.reports_v2021_06_30.model/ReportScheduleList}
     */
    ReportScheduleList,

    /**
    * The ReportsApi service constructor.
    * @property {module:js_client.reports_v2021_06_30.api/ReportsApi}
    */
    ReportsApi
};
