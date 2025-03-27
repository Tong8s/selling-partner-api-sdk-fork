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

import {ApiClient} from '../ApiClient.js';

/**
 * The RecordActionFeedbackRequest model module.
 * @module js_client.appintegrations_v2024_04_01.model/RecordActionFeedbackRequest
 * @version 2024-04-01
 */
export class RecordActionFeedbackRequest {
  /**
   * Constructs a new <code>RecordActionFeedbackRequest</code>.
   * The request for the &#x60;recordActionFeedback&#x60; operation.
   * @alias module:js_client.appintegrations_v2024_04_01.model/RecordActionFeedbackRequest
   * @class
   * @param feedbackActionCode {module:js_client.appintegrations_v2024_04_01.model/RecordActionFeedbackRequest.FeedbackActionCodeEnum} The unique identifier for each notification status.
   */
  constructor(feedbackActionCode) {
    this.feedbackActionCode = feedbackActionCode;
  }

  /**
   * Constructs a <code>RecordActionFeedbackRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.appintegrations_v2024_04_01.model/RecordActionFeedbackRequest} obj Optional instance to populate.
   * @return {module:js_client.appintegrations_v2024_04_01.model/RecordActionFeedbackRequest} The populated <code>RecordActionFeedbackRequest</code> instance.
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
      obj = obj || new RecordActionFeedbackRequest();
      if (data.hasOwnProperty('feedbackActionCode'))
        obj.feedbackActionCode = ApiClient.convertToType(data['feedbackActionCode'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>feedbackActionCode</code> property.
 * @enum {String}
 * @readonly
 */
RecordActionFeedbackRequest['FeedbackActionCodeEnum'] = {

    /**
     * value: "SELLER_ACTION_COMPLETED"
     * @const
     */
    "SELLER_ACTION_COMPLETED": "SELLER_ACTION_COMPLETED"
};

/**
 * The unique identifier for each notification status.
 * @member {module:js_client.appintegrations_v2024_04_01.model/RecordActionFeedbackRequest.FeedbackActionCodeEnum} feedbackActionCode
 */
RecordActionFeedbackRequest.prototype.feedbackActionCode = undefined;


