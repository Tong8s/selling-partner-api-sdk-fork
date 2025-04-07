/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {AggregationFrequency} from './js_client.replenishment_v2022_11_07.model/AggregationFrequency.js';
import {AutoEnrollmentPreference} from './js_client.replenishment_v2022_11_07.model/AutoEnrollmentPreference.js';
import {DiscountFunding} from './js_client.replenishment_v2022_11_07.model/DiscountFunding.js';
import {EligibilityStatus} from './js_client.replenishment_v2022_11_07.model/EligibilityStatus.js';
import {EnrollmentMethod} from './js_client.replenishment_v2022_11_07.model/EnrollmentMethod.js';
import {Error} from './js_client.replenishment_v2022_11_07.model/Error.js';
import {ErrorList} from './js_client.replenishment_v2022_11_07.model/ErrorList.js';
import {GetSellingPartnerMetricsRequest} from './js_client.replenishment_v2022_11_07.model/GetSellingPartnerMetricsRequest.js';
import {GetSellingPartnerMetricsResponse} from './js_client.replenishment_v2022_11_07.model/GetSellingPartnerMetricsResponse.js';
import {GetSellingPartnerMetricsResponseMetric} from './js_client.replenishment_v2022_11_07.model/GetSellingPartnerMetricsResponseMetric.js';
import {ListOfferMetricsRequest} from './js_client.replenishment_v2022_11_07.model/ListOfferMetricsRequest.js';
import {ListOfferMetricsRequestFilters} from './js_client.replenishment_v2022_11_07.model/ListOfferMetricsRequestFilters.js';
import {ListOfferMetricsRequestPagination} from './js_client.replenishment_v2022_11_07.model/ListOfferMetricsRequestPagination.js';
import {ListOfferMetricsRequestSort} from './js_client.replenishment_v2022_11_07.model/ListOfferMetricsRequestSort.js';
import {ListOfferMetricsResponse} from './js_client.replenishment_v2022_11_07.model/ListOfferMetricsResponse.js';
import {ListOfferMetricsResponseOffer} from './js_client.replenishment_v2022_11_07.model/ListOfferMetricsResponseOffer.js';
import {ListOfferMetricsSortKey} from './js_client.replenishment_v2022_11_07.model/ListOfferMetricsSortKey.js';
import {ListOffersRequest} from './js_client.replenishment_v2022_11_07.model/ListOffersRequest.js';
import {ListOffersRequestFilters} from './js_client.replenishment_v2022_11_07.model/ListOffersRequestFilters.js';
import {ListOffersRequestPagination} from './js_client.replenishment_v2022_11_07.model/ListOffersRequestPagination.js';
import {ListOffersRequestSort} from './js_client.replenishment_v2022_11_07.model/ListOffersRequestSort.js';
import {ListOffersResponse} from './js_client.replenishment_v2022_11_07.model/ListOffersResponse.js';
import {ListOffersResponseOffer} from './js_client.replenishment_v2022_11_07.model/ListOffersResponseOffer.js';
import {ListOffersSortKey} from './js_client.replenishment_v2022_11_07.model/ListOffersSortKey.js';
import {Metric} from './js_client.replenishment_v2022_11_07.model/Metric.js';
import {OfferProgramConfiguration} from './js_client.replenishment_v2022_11_07.model/OfferProgramConfiguration.js';
import {OfferProgramConfigurationPreferences} from './js_client.replenishment_v2022_11_07.model/OfferProgramConfigurationPreferences.js';
import {OfferProgramConfigurationPromotions} from './js_client.replenishment_v2022_11_07.model/OfferProgramConfigurationPromotions.js';
import {OfferProgramConfigurationPromotionsDiscountFunding} from './js_client.replenishment_v2022_11_07.model/OfferProgramConfigurationPromotionsDiscountFunding.js';
import {PaginationResponse} from './js_client.replenishment_v2022_11_07.model/PaginationResponse.js';
import {Preference} from './js_client.replenishment_v2022_11_07.model/Preference.js';
import {ProgramType} from './js_client.replenishment_v2022_11_07.model/ProgramType.js';
import {Promotion} from './js_client.replenishment_v2022_11_07.model/Promotion.js';
import {SortOrder} from './js_client.replenishment_v2022_11_07.model/SortOrder.js';
import {TimeInterval} from './js_client.replenishment_v2022_11_07.model/TimeInterval.js';
import {TimePeriodType} from './js_client.replenishment_v2022_11_07.model/TimePeriodType.js';
import {OffersApi} from './js_client.replenishment_v2022_11_07.api/OffersApi.js';
import {SellingpartnersApi} from './js_client.replenishment_v2022_11_07.api/SellingpartnersApi.js';


/**
* The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe &amp; Save is available or is supported. The API is available to vendors and FBA selling partners..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* @module index
* @version 2022-11-07
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AggregationFrequency model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/AggregationFrequency}
     */
    AggregationFrequency,

    /**
     * The AutoEnrollmentPreference model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/AutoEnrollmentPreference}
     */
    AutoEnrollmentPreference,

    /**
     * The DiscountFunding model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/DiscountFunding}
     */
    DiscountFunding,

    /**
     * The EligibilityStatus model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/EligibilityStatus}
     */
    EligibilityStatus,

    /**
     * The EnrollmentMethod model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/EnrollmentMethod}
     */
    EnrollmentMethod,

    /**
     * The Error model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ErrorList}
     */
    ErrorList,

    /**
     * The GetSellingPartnerMetricsRequest model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/GetSellingPartnerMetricsRequest}
     */
    GetSellingPartnerMetricsRequest,

    /**
     * The GetSellingPartnerMetricsResponse model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/GetSellingPartnerMetricsResponse}
     */
    GetSellingPartnerMetricsResponse,

    /**
     * The GetSellingPartnerMetricsResponseMetric model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/GetSellingPartnerMetricsResponseMetric}
     */
    GetSellingPartnerMetricsResponseMetric,

    /**
     * The ListOfferMetricsRequest model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOfferMetricsRequest}
     */
    ListOfferMetricsRequest,

    /**
     * The ListOfferMetricsRequestFilters model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOfferMetricsRequestFilters}
     */
    ListOfferMetricsRequestFilters,

    /**
     * The ListOfferMetricsRequestPagination model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOfferMetricsRequestPagination}
     */
    ListOfferMetricsRequestPagination,

    /**
     * The ListOfferMetricsRequestSort model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOfferMetricsRequestSort}
     */
    ListOfferMetricsRequestSort,

    /**
     * The ListOfferMetricsResponse model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOfferMetricsResponse}
     */
    ListOfferMetricsResponse,

    /**
     * The ListOfferMetricsResponseOffer model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOfferMetricsResponseOffer}
     */
    ListOfferMetricsResponseOffer,

    /**
     * The ListOfferMetricsSortKey model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOfferMetricsSortKey}
     */
    ListOfferMetricsSortKey,

    /**
     * The ListOffersRequest model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOffersRequest}
     */
    ListOffersRequest,

    /**
     * The ListOffersRequestFilters model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOffersRequestFilters}
     */
    ListOffersRequestFilters,

    /**
     * The ListOffersRequestPagination model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOffersRequestPagination}
     */
    ListOffersRequestPagination,

    /**
     * The ListOffersRequestSort model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOffersRequestSort}
     */
    ListOffersRequestSort,

    /**
     * The ListOffersResponse model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOffersResponse}
     */
    ListOffersResponse,

    /**
     * The ListOffersResponseOffer model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOffersResponseOffer}
     */
    ListOffersResponseOffer,

    /**
     * The ListOffersSortKey model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ListOffersSortKey}
     */
    ListOffersSortKey,

    /**
     * The Metric model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/Metric}
     */
    Metric,

    /**
     * The OfferProgramConfiguration model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/OfferProgramConfiguration}
     */
    OfferProgramConfiguration,

    /**
     * The OfferProgramConfigurationPreferences model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/OfferProgramConfigurationPreferences}
     */
    OfferProgramConfigurationPreferences,

    /**
     * The OfferProgramConfigurationPromotions model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/OfferProgramConfigurationPromotions}
     */
    OfferProgramConfigurationPromotions,

    /**
     * The OfferProgramConfigurationPromotionsDiscountFunding model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/OfferProgramConfigurationPromotionsDiscountFunding}
     */
    OfferProgramConfigurationPromotionsDiscountFunding,

    /**
     * The PaginationResponse model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/PaginationResponse}
     */
    PaginationResponse,

    /**
     * The Preference model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/Preference}
     */
    Preference,

    /**
     * The ProgramType model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/ProgramType}
     */
    ProgramType,

    /**
     * The Promotion model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/Promotion}
     */
    Promotion,

    /**
     * The SortOrder model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/SortOrder}
     */
    SortOrder,

    /**
     * The TimeInterval model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/TimeInterval}
     */
    TimeInterval,

    /**
     * The TimePeriodType model constructor.
     * @property {module:js_client.replenishment_v2022_11_07.model/TimePeriodType}
     */
    TimePeriodType,

    /**
    * The OffersApi service constructor.
    * @property {module:js_client.replenishment_v2022_11_07.api/OffersApi}
    */
    OffersApi,

    /**
    * The SellingpartnersApi service constructor.
    * @property {module:js_client.replenishment_v2022_11_07.api/SellingpartnersApi}
    */
    SellingpartnersApi
};
