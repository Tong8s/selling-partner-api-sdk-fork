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

import {ApiClient} from '../ApiClient.js';

/**
 * The CreateReportResponse model module.
 * @module js_client.reports_v2021_06_30.model/CreateReportResponse
 * @version 2021-06-30
 */
export class CreateReportResponse {
  /**
   * Constructs a new <code>CreateReportResponse</code>.
   * The response schema.
   * @alias module:js_client.reports_v2021_06_30.model/CreateReportResponse
   * @class
   * @param reportId {String} The identifier for the report. This identifier is unique only in combination with a seller ID.
   */
  constructor(reportId) {
    this.reportId = reportId;
  }

  /**
   * Constructs a <code>CreateReportResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.reports_v2021_06_30.model/CreateReportResponse} obj Optional instance to populate.
   * @return {module:js_client.reports_v2021_06_30.model/CreateReportResponse} The populated <code>CreateReportResponse</code> instance.
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
      obj = obj || new CreateReportResponse();
      if (data.hasOwnProperty('reportId'))
        obj.reportId = ApiClient.convertToType(data['reportId'], 'String');
    }
    return obj;
  }
}

/**
 * The identifier for the report. This identifier is unique only in combination with a seller ID.
 * @member {String} reportId
 */
CreateReportResponse.prototype.reportId = undefined;


