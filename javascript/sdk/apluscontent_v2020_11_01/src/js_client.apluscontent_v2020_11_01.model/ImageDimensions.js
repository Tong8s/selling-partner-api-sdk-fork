/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {IntegerWithUnits} from './IntegerWithUnits.js';

/**
 * The ImageDimensions model module.
 * @module js_client.apluscontent_v2020_11_01.model/ImageDimensions
 * @version 2020-11-01
 */
export class ImageDimensions {
  /**
   * Constructs a new <code>ImageDimensions</code>.
   * The dimensions that extend from the top left corner of the image (this applies to cropped and uncropped images). &#x60;ImageDimensions&#x60; units must be in pixels.
   * @alias module:js_client.apluscontent_v2020_11_01.model/ImageDimensions
   * @class
   * @param width {module:js_client.apluscontent_v2020_11_01.model/IntegerWithUnits} 
   * @param height {module:js_client.apluscontent_v2020_11_01.model/IntegerWithUnits} 
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  /**
   * Constructs a <code>ImageDimensions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.apluscontent_v2020_11_01.model/ImageDimensions} obj Optional instance to populate.
   * @return {module:js_client.apluscontent_v2020_11_01.model/ImageDimensions} The populated <code>ImageDimensions</code> instance.
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
      obj = obj || new ImageDimensions();
      if (data.hasOwnProperty('width'))
        obj.width = IntegerWithUnits.constructFromObject(data['width']);
      if (data.hasOwnProperty('height'))
        obj.height = IntegerWithUnits.constructFromObject(data['height']);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.apluscontent_v2020_11_01.model/IntegerWithUnits} width
 */
ImageDimensions.prototype.width = undefined;

/**
 * @member {module:js_client.apluscontent_v2020_11_01.model/IntegerWithUnits} height
 */
ImageDimensions.prototype.height = undefined;


