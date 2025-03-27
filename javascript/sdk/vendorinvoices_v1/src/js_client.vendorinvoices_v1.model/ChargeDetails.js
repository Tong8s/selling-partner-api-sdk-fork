/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
import {Money} from './Money.js';
import {TaxDetails} from './TaxDetails.js';

/**
 * The ChargeDetails model module.
 * @module js_client.vendorinvoices_v1.model/ChargeDetails
 * @version v1
 */
export class ChargeDetails {
  /**
   * Constructs a new <code>ChargeDetails</code>.
   * Monetary and tax details of the charge.
   * @alias module:js_client.vendorinvoices_v1.model/ChargeDetails
   * @class
   * @param type {module:js_client.vendorinvoices_v1.model/ChargeDetails.TypeEnum} Type of the charge applied.
   * @param chargeAmount {module:js_client.vendorinvoices_v1.model/Money} 
   */
  constructor(type, chargeAmount) {
    this.type = type;
    this.chargeAmount = chargeAmount;
  }

  /**
   * Constructs a <code>ChargeDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendorinvoices_v1.model/ChargeDetails} obj Optional instance to populate.
   * @return {module:js_client.vendorinvoices_v1.model/ChargeDetails} The populated <code>ChargeDetails</code> instance.
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
      obj = obj || new ChargeDetails();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('chargeAmount'))
        obj.chargeAmount = Money.constructFromObject(data['chargeAmount']);
      if (data.hasOwnProperty('taxDetails'))
        obj.taxDetails = ApiClient.convertToType(data['taxDetails'], [TaxDetails]);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ChargeDetails['TypeEnum'] = {

    /**
     * value: "Freight"
     * @const
     */
    "Freight": "Freight",

    /**
     * value: "Packing"
     * @const
     */
    "Packing": "Packing",

    /**
     * value: "Duty"
     * @const
     */
    "Duty": "Duty",

    /**
     * value: "Service"
     * @const
     */
    "Service": "Service",

    /**
     * value: "SmallOrder"
     * @const
     */
    "SmallOrder": "SmallOrder",

    /**
     * value: "InsurancePlacementCost"
     * @const
     */
    "InsurancePlacementCost": "InsurancePlacementCost",

    /**
     * value: "InsuranceFee"
     * @const
     */
    "InsuranceFee": "InsuranceFee",

    /**
     * value: "SpecialHandlingService"
     * @const
     */
    "SpecialHandlingService": "SpecialHandlingService",

    /**
     * value: "CollectionAndRecyclingService"
     * @const
     */
    "CollectionAndRecyclingService": "CollectionAndRecyclingService",

    /**
     * value: "EnvironmentalProtectionService"
     * @const
     */
    "EnvironmentalProtectionService": "EnvironmentalProtectionService",

    /**
     * value: "TaxCollectedAtSource"
     * @const
     */
    "TaxCollectedAtSource": "TaxCollectedAtSource"
};

/**
 * Type of the charge applied.
 * @member {module:js_client.vendorinvoices_v1.model/ChargeDetails.TypeEnum} type
 */
ChargeDetails.prototype.type = undefined;

/**
 * Description of the charge.
 * @member {String} description
 */
ChargeDetails.prototype.description = undefined;

/**
 * @member {module:js_client.vendorinvoices_v1.model/Money} chargeAmount
 */
ChargeDetails.prototype.chargeAmount = undefined;

/**
 * Tax amount details applied on this charge.
 * @member {Array.<module:js_client.vendorinvoices_v1.model/TaxDetails>} taxDetails
 */
ChargeDetails.prototype.taxDetails = undefined;


