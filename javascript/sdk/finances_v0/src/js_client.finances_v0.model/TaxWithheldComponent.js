/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {ChargeComponent} from './ChargeComponent.js';

/**
 * The TaxWithheldComponent model module.
 * @module js_client.finances_v0.model/TaxWithheldComponent
 * @version v0
 */
export class TaxWithheldComponent {
  /**
   * Constructs a new <code>TaxWithheldComponent</code>.
   * Information about the taxes withheld.
   * @alias module:js_client.finances_v0.model/TaxWithheldComponent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaxWithheldComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.finances_v0.model/TaxWithheldComponent} obj Optional instance to populate.
   * @return {module:js_client.finances_v0.model/TaxWithheldComponent} The populated <code>TaxWithheldComponent</code> instance.
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
      obj = obj || new TaxWithheldComponent();
      if (data.hasOwnProperty('TaxCollectionModel'))
        obj.taxCollectionModel = ApiClient.convertToType(data['TaxCollectionModel'], 'String');
      if (data.hasOwnProperty('TaxesWithheld'))
        obj.taxesWithheld = ApiClient.convertToType(data['TaxesWithheld'], [ChargeComponent]);
    }
    return obj;
  }
}

/**
 * The tax collection model applied to the item.  Possible values:  * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.  * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon.
 * @member {String} taxCollectionModel
 */
TaxWithheldComponent.prototype.taxCollectionModel = undefined;

/**
 * A list of charge information on the seller's account.
 * @member {Array.<module:js_client.finances_v0.model/ChargeComponent>} taxesWithheld
 */
TaxWithheldComponent.prototype.taxesWithheld = undefined;


