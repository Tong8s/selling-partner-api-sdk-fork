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
import {Error} from './Error.js';
import {ServiceJob} from './ServiceJob.js';

/**
 * The GetServiceJobByServiceJobIdResponse model module.
 * @module js_client.services_v1.model/GetServiceJobByServiceJobIdResponse
 * @version v1
 */
export class GetServiceJobByServiceJobIdResponse {
  /**
   * Constructs a new <code>GetServiceJobByServiceJobIdResponse</code>.
   * The response schema for the &#x60;getServiceJobByServiceJobId&#x60; operation.
   * @alias module:js_client.services_v1.model/GetServiceJobByServiceJobIdResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetServiceJobByServiceJobIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.services_v1.model/GetServiceJobByServiceJobIdResponse} obj Optional instance to populate.
   * @return {module:js_client.services_v1.model/GetServiceJobByServiceJobIdResponse} The populated <code>GetServiceJobByServiceJobIdResponse</code> instance.
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
      obj = obj || new GetServiceJobByServiceJobIdResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = ServiceJob.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.services_v1.model/ServiceJob} payload
 */
GetServiceJobByServiceJobIdResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:js_client.services_v1.model/Error>} errors
 */
GetServiceJobByServiceJobIdResponse.prototype.errors = undefined;


