/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import {Pagination} from './Pagination.js';
import {TransportLabel} from './TransportLabel.js';

/**
 * The TransportationLabels model module.
 * @module js_client.vendorshipments_v1.model/TransportationLabels
 * @version v1
 */
export class TransportationLabels {
  /**
   * Constructs a new <code>TransportationLabels</code>.
   * The request schema for the GetShipmentLabels operation.
   * @alias module:js_client.vendorshipments_v1.model/TransportationLabels
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransportationLabels</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendorshipments_v1.model/TransportationLabels} obj Optional instance to populate.
   * @return {module:js_client.vendorshipments_v1.model/TransportationLabels} The populated <code>TransportationLabels</code> instance.
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
      obj = obj || new TransportationLabels();
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
      if (data.hasOwnProperty('transportLabels'))
        obj.transportLabels = ApiClient.convertToType(data['transportLabels'], [TransportLabel]);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.vendorshipments_v1.model/Pagination} pagination
 */
TransportationLabels.prototype.pagination = undefined;

/**
 * A list of one or more ShipmentLabels.
 * @member {Array.<module:js_client.vendorshipments_v1.model/TransportLabel>} transportLabels
 */
TransportationLabels.prototype.transportLabels = undefined;


