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
import {ImageComponent} from './ImageComponent.js';

/**
 * The StandardCompanyLogoModule model module.
 * @module js_client.apluscontent_v2020_11_01.model/StandardCompanyLogoModule
 * @version 2020-11-01
 */
export class StandardCompanyLogoModule {
  /**
   * Constructs a new <code>StandardCompanyLogoModule</code>.
   * The standard company logo image.
   * @alias module:js_client.apluscontent_v2020_11_01.model/StandardCompanyLogoModule
   * @class
   * @param companyLogo {module:js_client.apluscontent_v2020_11_01.model/ImageComponent} 
   */
  constructor(companyLogo) {
    this.companyLogo = companyLogo;
  }

  /**
   * Constructs a <code>StandardCompanyLogoModule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.apluscontent_v2020_11_01.model/StandardCompanyLogoModule} obj Optional instance to populate.
   * @return {module:js_client.apluscontent_v2020_11_01.model/StandardCompanyLogoModule} The populated <code>StandardCompanyLogoModule</code> instance.
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
      obj = obj || new StandardCompanyLogoModule();
      if (data.hasOwnProperty('companyLogo'))
        obj.companyLogo = ImageComponent.constructFromObject(data['companyLogo']);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.apluscontent_v2020_11_01.model/ImageComponent} companyLogo
 */
StandardCompanyLogoModule.prototype.companyLogo = undefined;


