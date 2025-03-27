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
import {StandardTextPairBlock} from './StandardTextPairBlock.js';
import {TextComponent} from './TextComponent.js';

/**
 * The StandardTechSpecsModule model module.
 * @module js_client.apluscontent_v2020_11_01.model/StandardTechSpecsModule
 * @version 2020-11-01
 */
export class StandardTechSpecsModule {
  /**
   * Constructs a new <code>StandardTechSpecsModule</code>.
   * The standard table of technical feature names and definitions.
   * @alias module:js_client.apluscontent_v2020_11_01.model/StandardTechSpecsModule
   * @class
   * @param specificationList {Array.<module:js_client.apluscontent_v2020_11_01.model/StandardTextPairBlock>} The specification list.
   */
  constructor(specificationList) {
    this.specificationList = specificationList;
  }

  /**
   * Constructs a <code>StandardTechSpecsModule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.apluscontent_v2020_11_01.model/StandardTechSpecsModule} obj Optional instance to populate.
   * @return {module:js_client.apluscontent_v2020_11_01.model/StandardTechSpecsModule} The populated <code>StandardTechSpecsModule</code> instance.
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
      obj = obj || new StandardTechSpecsModule();
      if (data.hasOwnProperty('headline'))
        obj.headline = TextComponent.constructFromObject(data['headline']);
      if (data.hasOwnProperty('specificationList'))
        obj.specificationList = ApiClient.convertToType(data['specificationList'], [StandardTextPairBlock]);
      if (data.hasOwnProperty('tableCount'))
        obj.tableCount = ApiClient.convertToType(data['tableCount'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:js_client.apluscontent_v2020_11_01.model/TextComponent} headline
 */
StandardTechSpecsModule.prototype.headline = undefined;

/**
 * The specification list.
 * @member {Array.<module:js_client.apluscontent_v2020_11_01.model/StandardTextPairBlock>} specificationList
 */
StandardTechSpecsModule.prototype.specificationList = undefined;

/**
 * The number of tables you want present. Features are evenly divided between the tables.
 * @member {Number} tableCount
 */
StandardTechSpecsModule.prototype.tableCount = undefined;


