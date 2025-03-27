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

import {ApiClient} from '../ApiClient.js';
import {ServiceJob} from './ServiceJob.js';

/**
 * The JobListing model module.
 * @module js_client.services_v1.model/JobListing
 * @version v1
 */
export class JobListing {
  /**
   * Constructs a new <code>JobListing</code>.
   * The payload for the &#x60;getServiceJobs&#x60; operation.
   * @alias module:js_client.services_v1.model/JobListing
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>JobListing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.services_v1.model/JobListing} obj Optional instance to populate.
   * @return {module:js_client.services_v1.model/JobListing} The populated <code>JobListing</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new JobListing();
      if (data.hasOwnProperty('totalResultSize'))
        obj.totalResultSize = ApiClient.convertToType(data['totalResultSize'], 'Number');
      if (data.hasOwnProperty('nextPageToken'))
        obj.nextPageToken = ApiClient.convertToType(data['nextPageToken'], 'String');
      if (data.hasOwnProperty('previousPageToken'))
        obj.previousPageToken = ApiClient.convertToType(data['previousPageToken'], 'String');
      if (data.hasOwnProperty('jobs'))
        obj.jobs = ApiClient.convertToType(data['jobs'], [ServiceJob]);
    }
    return obj;
  }
}

/**
 * Total result size of the query result.
 * @member {Number} totalResultSize
 */
JobListing.prototype.totalResultSize = undefined;

/**
 * A generated string used to pass information to your next request. If `nextPageToken` is returned, pass the value of `nextPageToken` to the `pageToken` to get next results.
 * @member {String} nextPageToken
 */
JobListing.prototype.nextPageToken = undefined;

/**
 * A generated string used to pass information to your next request. If `previousPageToken` is returned, pass the value of `previousPageToken` to the `pageToken` to get previous page results.
 * @member {String} previousPageToken
 */
JobListing.prototype.previousPageToken = undefined;

/**
 * List of job details for the given input.
 * @member {Array.<module:js_client.services_v1.model/ServiceJob>} jobs
 */
JobListing.prototype.jobs = undefined;


