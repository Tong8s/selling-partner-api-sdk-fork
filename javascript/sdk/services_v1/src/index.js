/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
import {AddAppointmentRequest} from './js_client.services_v1.model/AddAppointmentRequest.js';
import {Address} from './js_client.services_v1.model/Address.js';
import {Appointment} from './js_client.services_v1.model/Appointment.js';
import {AppointmentResource} from './js_client.services_v1.model/AppointmentResource.js';
import {AppointmentSlot} from './js_client.services_v1.model/AppointmentSlot.js';
import {AppointmentSlotReport} from './js_client.services_v1.model/AppointmentSlotReport.js';
import {AppointmentTime} from './js_client.services_v1.model/AppointmentTime.js';
import {AppointmentTimeInput} from './js_client.services_v1.model/AppointmentTimeInput.js';
import {AssignAppointmentResourcesRequest} from './js_client.services_v1.model/AssignAppointmentResourcesRequest.js';
import {AssignAppointmentResourcesResponse} from './js_client.services_v1.model/AssignAppointmentResourcesResponse.js';
import {AssignAppointmentResourcesResponsePayload} from './js_client.services_v1.model/AssignAppointmentResourcesResponsePayload.js';
import {AssociatedItem} from './js_client.services_v1.model/AssociatedItem.js';
import {AvailabilityRecord} from './js_client.services_v1.model/AvailabilityRecord.js';
import {Buyer} from './js_client.services_v1.model/Buyer.js';
import {CancelReservationResponse} from './js_client.services_v1.model/CancelReservationResponse.js';
import {CancelServiceJobByServiceJobIdResponse} from './js_client.services_v1.model/CancelServiceJobByServiceJobIdResponse.js';
import {CapacityType} from './js_client.services_v1.model/CapacityType.js';
import {CompleteServiceJobByServiceJobIdResponse} from './js_client.services_v1.model/CompleteServiceJobByServiceJobIdResponse.js';
import {CreateReservationRecord} from './js_client.services_v1.model/CreateReservationRecord.js';
import {CreateReservationRequest} from './js_client.services_v1.model/CreateReservationRequest.js';
import {CreateReservationResponse} from './js_client.services_v1.model/CreateReservationResponse.js';
import {CreateServiceDocumentUploadDestination} from './js_client.services_v1.model/CreateServiceDocumentUploadDestination.js';
import {DayOfWeek} from './js_client.services_v1.model/DayOfWeek.js';
import {EncryptionDetails} from './js_client.services_v1.model/EncryptionDetails.js';
import {Error} from './js_client.services_v1.model/Error.js';
import {FixedSlot} from './js_client.services_v1.model/FixedSlot.js';
import {FixedSlotCapacity} from './js_client.services_v1.model/FixedSlotCapacity.js';
import {FixedSlotCapacityErrors} from './js_client.services_v1.model/FixedSlotCapacityErrors.js';
import {FixedSlotCapacityQuery} from './js_client.services_v1.model/FixedSlotCapacityQuery.js';
import {FulfillmentDocument} from './js_client.services_v1.model/FulfillmentDocument.js';
import {FulfillmentTime} from './js_client.services_v1.model/FulfillmentTime.js';
import {GetAppointmentSlotsResponse} from './js_client.services_v1.model/GetAppointmentSlotsResponse.js';
import {GetServiceJobByServiceJobIdResponse} from './js_client.services_v1.model/GetServiceJobByServiceJobIdResponse.js';
import {GetServiceJobsResponse} from './js_client.services_v1.model/GetServiceJobsResponse.js';
import {ItemDelivery} from './js_client.services_v1.model/ItemDelivery.js';
import {ItemDeliveryPromise} from './js_client.services_v1.model/ItemDeliveryPromise.js';
import {JobListing} from './js_client.services_v1.model/JobListing.js';
import {Poa} from './js_client.services_v1.model/Poa.js';
import {RangeCapacity} from './js_client.services_v1.model/RangeCapacity.js';
import {RangeSlot} from './js_client.services_v1.model/RangeSlot.js';
import {RangeSlotCapacity} from './js_client.services_v1.model/RangeSlotCapacity.js';
import {RangeSlotCapacityErrors} from './js_client.services_v1.model/RangeSlotCapacityErrors.js';
import {RangeSlotCapacityQuery} from './js_client.services_v1.model/RangeSlotCapacityQuery.js';
import {Recurrence} from './js_client.services_v1.model/Recurrence.js';
import {RescheduleAppointmentRequest} from './js_client.services_v1.model/RescheduleAppointmentRequest.js';
import {Reservation} from './js_client.services_v1.model/Reservation.js';
import {ScopeOfWork} from './js_client.services_v1.model/ScopeOfWork.js';
import {Seller} from './js_client.services_v1.model/Seller.js';
import {ServiceDocumentUploadDestination} from './js_client.services_v1.model/ServiceDocumentUploadDestination.js';
import {ServiceJob} from './js_client.services_v1.model/ServiceJob.js';
import {ServiceJobProvider} from './js_client.services_v1.model/ServiceJobProvider.js';
import {ServiceLocation} from './js_client.services_v1.model/ServiceLocation.js';
import {ServiceUploadDocument} from './js_client.services_v1.model/ServiceUploadDocument.js';
import {SetAppointmentFulfillmentDataRequest} from './js_client.services_v1.model/SetAppointmentFulfillmentDataRequest.js';
import {SetAppointmentResponse} from './js_client.services_v1.model/SetAppointmentResponse.js';
import {Technician} from './js_client.services_v1.model/Technician.js';
import {UpdateReservationRecord} from './js_client.services_v1.model/UpdateReservationRecord.js';
import {UpdateReservationRequest} from './js_client.services_v1.model/UpdateReservationRequest.js';
import {UpdateReservationResponse} from './js_client.services_v1.model/UpdateReservationResponse.js';
import {UpdateScheduleRecord} from './js_client.services_v1.model/UpdateScheduleRecord.js';
import {UpdateScheduleRequest} from './js_client.services_v1.model/UpdateScheduleRequest.js';
import {UpdateScheduleResponse} from './js_client.services_v1.model/UpdateScheduleResponse.js';
import {Warning} from './js_client.services_v1.model/Warning.js';
import {ServiceApi} from './js_client.services_v1.api/ServiceApi.js';


/**
* With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForServices = require('index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForServices.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForServices.Yyy(); // Construct a model instance.
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
* var xxxSvc = new SellingPartnerApiForServices.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForServices.Yyy(); // Construct a model instance.
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
     * The AddAppointmentRequest model constructor.
     * @property {module:js_client.services_v1.model/AddAppointmentRequest}
     */
    AddAppointmentRequest,

    /**
     * The Address model constructor.
     * @property {module:js_client.services_v1.model/Address}
     */
    Address,

    /**
     * The Appointment model constructor.
     * @property {module:js_client.services_v1.model/Appointment}
     */
    Appointment,

    /**
     * The AppointmentResource model constructor.
     * @property {module:js_client.services_v1.model/AppointmentResource}
     */
    AppointmentResource,

    /**
     * The AppointmentSlot model constructor.
     * @property {module:js_client.services_v1.model/AppointmentSlot}
     */
    AppointmentSlot,

    /**
     * The AppointmentSlotReport model constructor.
     * @property {module:js_client.services_v1.model/AppointmentSlotReport}
     */
    AppointmentSlotReport,

    /**
     * The AppointmentTime model constructor.
     * @property {module:js_client.services_v1.model/AppointmentTime}
     */
    AppointmentTime,

    /**
     * The AppointmentTimeInput model constructor.
     * @property {module:js_client.services_v1.model/AppointmentTimeInput}
     */
    AppointmentTimeInput,

    /**
     * The AssignAppointmentResourcesRequest model constructor.
     * @property {module:js_client.services_v1.model/AssignAppointmentResourcesRequest}
     */
    AssignAppointmentResourcesRequest,

    /**
     * The AssignAppointmentResourcesResponse model constructor.
     * @property {module:js_client.services_v1.model/AssignAppointmentResourcesResponse}
     */
    AssignAppointmentResourcesResponse,

    /**
     * The AssignAppointmentResourcesResponsePayload model constructor.
     * @property {module:js_client.services_v1.model/AssignAppointmentResourcesResponsePayload}
     */
    AssignAppointmentResourcesResponsePayload,

    /**
     * The AssociatedItem model constructor.
     * @property {module:js_client.services_v1.model/AssociatedItem}
     */
    AssociatedItem,

    /**
     * The AvailabilityRecord model constructor.
     * @property {module:js_client.services_v1.model/AvailabilityRecord}
     */
    AvailabilityRecord,

    /**
     * The Buyer model constructor.
     * @property {module:js_client.services_v1.model/Buyer}
     */
    Buyer,

    /**
     * The CancelReservationResponse model constructor.
     * @property {module:js_client.services_v1.model/CancelReservationResponse}
     */
    CancelReservationResponse,

    /**
     * The CancelServiceJobByServiceJobIdResponse model constructor.
     * @property {module:js_client.services_v1.model/CancelServiceJobByServiceJobIdResponse}
     */
    CancelServiceJobByServiceJobIdResponse,

    /**
     * The CapacityType model constructor.
     * @property {module:js_client.services_v1.model/CapacityType}
     */
    CapacityType,

    /**
     * The CompleteServiceJobByServiceJobIdResponse model constructor.
     * @property {module:js_client.services_v1.model/CompleteServiceJobByServiceJobIdResponse}
     */
    CompleteServiceJobByServiceJobIdResponse,

    /**
     * The CreateReservationRecord model constructor.
     * @property {module:js_client.services_v1.model/CreateReservationRecord}
     */
    CreateReservationRecord,

    /**
     * The CreateReservationRequest model constructor.
     * @property {module:js_client.services_v1.model/CreateReservationRequest}
     */
    CreateReservationRequest,

    /**
     * The CreateReservationResponse model constructor.
     * @property {module:js_client.services_v1.model/CreateReservationResponse}
     */
    CreateReservationResponse,

    /**
     * The CreateServiceDocumentUploadDestination model constructor.
     * @property {module:js_client.services_v1.model/CreateServiceDocumentUploadDestination}
     */
    CreateServiceDocumentUploadDestination,

    /**
     * The DayOfWeek model constructor.
     * @property {module:js_client.services_v1.model/DayOfWeek}
     */
    DayOfWeek,

    /**
     * The EncryptionDetails model constructor.
     * @property {module:js_client.services_v1.model/EncryptionDetails}
     */
    EncryptionDetails,

    /**
     * The Error model constructor.
     * @property {module:js_client.services_v1.model/Error}
     */
    Error,

    /**
     * The FixedSlot model constructor.
     * @property {module:js_client.services_v1.model/FixedSlot}
     */
    FixedSlot,

    /**
     * The FixedSlotCapacity model constructor.
     * @property {module:js_client.services_v1.model/FixedSlotCapacity}
     */
    FixedSlotCapacity,

    /**
     * The FixedSlotCapacityErrors model constructor.
     * @property {module:js_client.services_v1.model/FixedSlotCapacityErrors}
     */
    FixedSlotCapacityErrors,

    /**
     * The FixedSlotCapacityQuery model constructor.
     * @property {module:js_client.services_v1.model/FixedSlotCapacityQuery}
     */
    FixedSlotCapacityQuery,

    /**
     * The FulfillmentDocument model constructor.
     * @property {module:js_client.services_v1.model/FulfillmentDocument}
     */
    FulfillmentDocument,

    /**
     * The FulfillmentTime model constructor.
     * @property {module:js_client.services_v1.model/FulfillmentTime}
     */
    FulfillmentTime,

    /**
     * The GetAppointmentSlotsResponse model constructor.
     * @property {module:js_client.services_v1.model/GetAppointmentSlotsResponse}
     */
    GetAppointmentSlotsResponse,

    /**
     * The GetServiceJobByServiceJobIdResponse model constructor.
     * @property {module:js_client.services_v1.model/GetServiceJobByServiceJobIdResponse}
     */
    GetServiceJobByServiceJobIdResponse,

    /**
     * The GetServiceJobsResponse model constructor.
     * @property {module:js_client.services_v1.model/GetServiceJobsResponse}
     */
    GetServiceJobsResponse,

    /**
     * The ItemDelivery model constructor.
     * @property {module:js_client.services_v1.model/ItemDelivery}
     */
    ItemDelivery,

    /**
     * The ItemDeliveryPromise model constructor.
     * @property {module:js_client.services_v1.model/ItemDeliveryPromise}
     */
    ItemDeliveryPromise,

    /**
     * The JobListing model constructor.
     * @property {module:js_client.services_v1.model/JobListing}
     */
    JobListing,

    /**
     * The Poa model constructor.
     * @property {module:js_client.services_v1.model/Poa}
     */
    Poa,

    /**
     * The RangeCapacity model constructor.
     * @property {module:js_client.services_v1.model/RangeCapacity}
     */
    RangeCapacity,

    /**
     * The RangeSlot model constructor.
     * @property {module:js_client.services_v1.model/RangeSlot}
     */
    RangeSlot,

    /**
     * The RangeSlotCapacity model constructor.
     * @property {module:js_client.services_v1.model/RangeSlotCapacity}
     */
    RangeSlotCapacity,

    /**
     * The RangeSlotCapacityErrors model constructor.
     * @property {module:js_client.services_v1.model/RangeSlotCapacityErrors}
     */
    RangeSlotCapacityErrors,

    /**
     * The RangeSlotCapacityQuery model constructor.
     * @property {module:js_client.services_v1.model/RangeSlotCapacityQuery}
     */
    RangeSlotCapacityQuery,

    /**
     * The Recurrence model constructor.
     * @property {module:js_client.services_v1.model/Recurrence}
     */
    Recurrence,

    /**
     * The RescheduleAppointmentRequest model constructor.
     * @property {module:js_client.services_v1.model/RescheduleAppointmentRequest}
     */
    RescheduleAppointmentRequest,

    /**
     * The Reservation model constructor.
     * @property {module:js_client.services_v1.model/Reservation}
     */
    Reservation,

    /**
     * The ScopeOfWork model constructor.
     * @property {module:js_client.services_v1.model/ScopeOfWork}
     */
    ScopeOfWork,

    /**
     * The Seller model constructor.
     * @property {module:js_client.services_v1.model/Seller}
     */
    Seller,

    /**
     * The ServiceDocumentUploadDestination model constructor.
     * @property {module:js_client.services_v1.model/ServiceDocumentUploadDestination}
     */
    ServiceDocumentUploadDestination,

    /**
     * The ServiceJob model constructor.
     * @property {module:js_client.services_v1.model/ServiceJob}
     */
    ServiceJob,

    /**
     * The ServiceJobProvider model constructor.
     * @property {module:js_client.services_v1.model/ServiceJobProvider}
     */
    ServiceJobProvider,

    /**
     * The ServiceLocation model constructor.
     * @property {module:js_client.services_v1.model/ServiceLocation}
     */
    ServiceLocation,

    /**
     * The ServiceUploadDocument model constructor.
     * @property {module:js_client.services_v1.model/ServiceUploadDocument}
     */
    ServiceUploadDocument,

    /**
     * The SetAppointmentFulfillmentDataRequest model constructor.
     * @property {module:js_client.services_v1.model/SetAppointmentFulfillmentDataRequest}
     */
    SetAppointmentFulfillmentDataRequest,

    /**
     * The SetAppointmentResponse model constructor.
     * @property {module:js_client.services_v1.model/SetAppointmentResponse}
     */
    SetAppointmentResponse,

    /**
     * The Technician model constructor.
     * @property {module:js_client.services_v1.model/Technician}
     */
    Technician,

    /**
     * The UpdateReservationRecord model constructor.
     * @property {module:js_client.services_v1.model/UpdateReservationRecord}
     */
    UpdateReservationRecord,

    /**
     * The UpdateReservationRequest model constructor.
     * @property {module:js_client.services_v1.model/UpdateReservationRequest}
     */
    UpdateReservationRequest,

    /**
     * The UpdateReservationResponse model constructor.
     * @property {module:js_client.services_v1.model/UpdateReservationResponse}
     */
    UpdateReservationResponse,

    /**
     * The UpdateScheduleRecord model constructor.
     * @property {module:js_client.services_v1.model/UpdateScheduleRecord}
     */
    UpdateScheduleRecord,

    /**
     * The UpdateScheduleRequest model constructor.
     * @property {module:js_client.services_v1.model/UpdateScheduleRequest}
     */
    UpdateScheduleRequest,

    /**
     * The UpdateScheduleResponse model constructor.
     * @property {module:js_client.services_v1.model/UpdateScheduleResponse}
     */
    UpdateScheduleResponse,

    /**
     * The Warning model constructor.
     * @property {module:js_client.services_v1.model/Warning}
     */
    Warning,

    /**
    * The ServiceApi service constructor.
    * @property {module:js_client.services_v1.api/ServiceApi}
    */
    ServiceApi
};
