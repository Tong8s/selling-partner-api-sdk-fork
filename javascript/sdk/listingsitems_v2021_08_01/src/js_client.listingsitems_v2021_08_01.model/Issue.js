/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {IssueEnforcements} from './IssueEnforcements.js';

/**
 * The Issue model module.
 * @module js_client.listingsitems_v2021_08_01.model/Issue
 * @version 2021-08-01
 */
export class Issue {
  /**
   * Constructs a new <code>Issue</code>.
   * An issue with a listings item.
   * @alias module:js_client.listingsitems_v2021_08_01.model/Issue
   * @class
   * @param code {String} An issue code that identifies the type of issue.
   * @param message {String} A message that describes the issue.
   * @param severity {module:js_client.listingsitems_v2021_08_01.model/Issue.SeverityEnum} The severity of the issue.
   * @param categories {Array.<String>} List of issue categories.   Possible vales:   * `INVALID_ATTRIBUTE` - Indicating an invalid attribute in the listing.   * `MISSING_ATTRIBUTE` - Highlighting a missing attribute in the listing.   * `INVALID_IMAGE` - Signifying an invalid image in the listing.   * `MISSING_IMAGE` - Noting the absence of an image in the listing.   * `INVALID_PRICE` - Pertaining to issues with the listing's price-related attributes.   * `MISSING_PRICE` - Pointing out the absence of a price attribute in the listing.   * `DUPLICATE` - Identifying listings with potential duplicate problems, such as this ASIN potentially being a duplicate of another ASIN.   * `QUALIFICATION_REQUIRED` - Indicating that the listing requires qualification-related approval.
   */
  constructor(code, message, severity, categories) {
    this.code = code;
    this.message = message;
    this.severity = severity;
    this.categories = categories;
  }

  /**
   * Constructs a <code>Issue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.listingsitems_v2021_08_01.model/Issue} obj Optional instance to populate.
   * @return {module:js_client.listingsitems_v2021_08_01.model/Issue} The populated <code>Issue</code> instance.
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
      obj = obj || new Issue();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('severity'))
        obj.severity = ApiClient.convertToType(data['severity'], 'String');
      if (data.hasOwnProperty('attributeNames'))
        obj.attributeNames = ApiClient.convertToType(data['attributeNames'], ['String']);
      if (data.hasOwnProperty('categories'))
        obj.categories = ApiClient.convertToType(data['categories'], ['String']);
      if (data.hasOwnProperty('enforcements'))
        obj.enforcements = IssueEnforcements.constructFromObject(data['enforcements']);
    }
    return obj;
  }
}

/**
 * An issue code that identifies the type of issue.
 * @member {String} code
 */
Issue.prototype.code = undefined;

/**
 * A message that describes the issue.
 * @member {String} message
 */
Issue.prototype.message = undefined;

/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */
Issue['SeverityEnum'] = {

    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR",

    /**
     * value: "WARNING"
     * @const
     */
    "WARNING": "WARNING",

    /**
     * value: "INFO"
     * @const
     */
    "INFO": "INFO"
};

/**
 * The severity of the issue.
 * @member {module:js_client.listingsitems_v2021_08_01.model/Issue.SeverityEnum} severity
 */
Issue.prototype.severity = undefined;

/**
 * The names of the attributes associated with the issue, if applicable.
 * @member {Array.<String>} attributeNames
 */
Issue.prototype.attributeNames = undefined;

/**
 * List of issue categories.   Possible vales:   * `INVALID_ATTRIBUTE` - Indicating an invalid attribute in the listing.   * `MISSING_ATTRIBUTE` - Highlighting a missing attribute in the listing.   * `INVALID_IMAGE` - Signifying an invalid image in the listing.   * `MISSING_IMAGE` - Noting the absence of an image in the listing.   * `INVALID_PRICE` - Pertaining to issues with the listing's price-related attributes.   * `MISSING_PRICE` - Pointing out the absence of a price attribute in the listing.   * `DUPLICATE` - Identifying listings with potential duplicate problems, such as this ASIN potentially being a duplicate of another ASIN.   * `QUALIFICATION_REQUIRED` - Indicating that the listing requires qualification-related approval.
 * @member {Array.<String>} categories
 */
Issue.prototype.categories = undefined;

/**
 * @member {module:js_client.listingsitems_v2021_08_01.model/IssueEnforcements} enforcements
 */
Issue.prototype.enforcements = undefined;


