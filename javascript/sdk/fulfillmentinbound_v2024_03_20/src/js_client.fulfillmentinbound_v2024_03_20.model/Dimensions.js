/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {UnitOfMeasurement} from './UnitOfMeasurement.js';

/**
 * The Dimensions model module.
 * @module js_client.fulfillmentinbound_v2024_03_20.model/Dimensions
 * @version 2024-03-20
 */
export class Dimensions {
  /**
   * Constructs a new <code>Dimensions</code>.
   * Measurement of a package&#39;s dimensions.
   * @alias module:js_client.fulfillmentinbound_v2024_03_20.model/Dimensions
   * @class
   * @param height {Number} The height of a package.
   * @param length {Number} The length of a package.
   * @param unitOfMeasurement {module:js_client.fulfillmentinbound_v2024_03_20.model/UnitOfMeasurement} 
   * @param width {Number} The width of a package.
   */
  constructor(height, length, unitOfMeasurement, width) {
    this.height = height;
    this.length = length;
    this.unitOfMeasurement = unitOfMeasurement;
    this.width = width;
  }

  /**
   * Constructs a <code>Dimensions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fulfillmentinbound_v2024_03_20.model/Dimensions} obj Optional instance to populate.
   * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/Dimensions} The populated <code>Dimensions</code> instance.
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
      obj = obj || new Dimensions();
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('length'))
        obj.length = ApiClient.convertToType(data['length'], 'Number');
      if (data.hasOwnProperty('unitOfMeasurement'))
        obj.unitOfMeasurement = UnitOfMeasurement.constructFromObject(data['unitOfMeasurement']);
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
    }
    return obj;
  }
}

/**
 * The height of a package.
 * @member {Number} height
 */
Dimensions.prototype.height = undefined;

/**
 * The length of a package.
 * @member {Number} length
 */
Dimensions.prototype.length = undefined;

/**
 * @member {module:js_client.fulfillmentinbound_v2024_03_20.model/UnitOfMeasurement} unitOfMeasurement
 */
Dimensions.prototype.unitOfMeasurement = undefined;

/**
 * The width of a package.
 * @member {Number} width
 */
Dimensions.prototype.width = undefined;


