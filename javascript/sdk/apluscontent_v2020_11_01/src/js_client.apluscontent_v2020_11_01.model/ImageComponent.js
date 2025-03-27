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
import {ImageCropSpecification} from './ImageCropSpecification.js';

/**
 * The ImageComponent model module.
 * @module js_client.apluscontent_v2020_11_01.model/ImageComponent
 * @version 2020-11-01
 */
export class ImageComponent {
  /**
   * Constructs a new <code>ImageComponent</code>.
   * A reference to an image, hosted in the A+ Content media library.
   * @alias module:js_client.apluscontent_v2020_11_01.model/ImageComponent
   * @class
   * @param uploadDestinationId {String} This identifier is provided by the [Uploads API](https://developer-docs.amazon.com/sp-api/reference/welcome-to-api-references).
   * @param imageCropSpecification {module:js_client.apluscontent_v2020_11_01.model/ImageCropSpecification} 
   * @param altText {String} The alternative text for the image.
   */
  constructor(uploadDestinationId, imageCropSpecification, altText) {
    this.uploadDestinationId = uploadDestinationId;
    this.imageCropSpecification = imageCropSpecification;
    this.altText = altText;
  }

  /**
   * Constructs a <code>ImageComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.apluscontent_v2020_11_01.model/ImageComponent} obj Optional instance to populate.
   * @return {module:js_client.apluscontent_v2020_11_01.model/ImageComponent} The populated <code>ImageComponent</code> instance.
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
      obj = obj || new ImageComponent();
      if (data.hasOwnProperty('uploadDestinationId'))
        obj.uploadDestinationId = ApiClient.convertToType(data['uploadDestinationId'], 'String');
      if (data.hasOwnProperty('imageCropSpecification'))
        obj.imageCropSpecification = ImageCropSpecification.constructFromObject(data['imageCropSpecification']);
      if (data.hasOwnProperty('altText'))
        obj.altText = ApiClient.convertToType(data['altText'], 'String');
    }
    return obj;
  }
}

/**
 * This identifier is provided by the [Uploads API](https://developer-docs.amazon.com/sp-api/reference/welcome-to-api-references).
 * @member {String} uploadDestinationId
 */
ImageComponent.prototype.uploadDestinationId = undefined;

/**
 * @member {module:js_client.apluscontent_v2020_11_01.model/ImageCropSpecification} imageCropSpecification
 */
ImageComponent.prototype.imageCropSpecification = undefined;

/**
 * The alternative text for the image.
 * @member {String} altText
 */
ImageComponent.prototype.altText = undefined;


