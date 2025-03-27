/**
 * Selling Partner API for FBA Inbound Eligibilty
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon's fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon's fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon's fulfillment centers.
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

/**
 * The ItemEligibilityPreview model module.
 * @module js_client.fbaeligibility_v1.model/ItemEligibilityPreview
 * @version v1
 */
export class ItemEligibilityPreview {
  /**
   * Constructs a new <code>ItemEligibilityPreview</code>.
   * The response object which contains the ASIN, marketplaceId if required, eligibility program, the eligibility status (boolean), and a list of ineligibility reason codes.
   * @alias module:js_client.fbaeligibility_v1.model/ItemEligibilityPreview
   * @class
   * @param asin {String} The ASIN for which eligibility was determined.
   * @param program {module:js_client.fbaeligibility_v1.model/ItemEligibilityPreview.ProgramEnum} The program for which eligibility was determined.
   * @param isEligibleForProgram {Boolean} Indicates if the item is eligible for the program.
   */
  constructor(asin, program, isEligibleForProgram) {
    this.asin = asin;
    this.program = program;
    this.isEligibleForProgram = isEligibleForProgram;
  }

  /**
   * Constructs a <code>ItemEligibilityPreview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.fbaeligibility_v1.model/ItemEligibilityPreview} obj Optional instance to populate.
   * @return {module:js_client.fbaeligibility_v1.model/ItemEligibilityPreview} The populated <code>ItemEligibilityPreview</code> instance.
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
      obj = obj || new ItemEligibilityPreview();
      if (data.hasOwnProperty('asin'))
        obj.asin = ApiClient.convertToType(data['asin'], 'String');
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('program'))
        obj.program = ApiClient.convertToType(data['program'], 'String');
      if (data.hasOwnProperty('isEligibleForProgram'))
        obj.isEligibleForProgram = ApiClient.convertToType(data['isEligibleForProgram'], 'Boolean');
      if (data.hasOwnProperty('ineligibilityReasonList'))
        obj.ineligibilityReasonList = ApiClient.convertToType(data['ineligibilityReasonList'], ['String']);
    }
    return obj;
  }
}

/**
 * The ASIN for which eligibility was determined.
 * @member {String} asin
 */
ItemEligibilityPreview.prototype.asin = undefined;

/**
 * The marketplace for which eligibility was determined.
 * @member {String} marketplaceId
 */
ItemEligibilityPreview.prototype.marketplaceId = undefined;

/**
 * Allowed values for the <code>program</code> property.
 * @enum {String}
 * @readonly
 */
ItemEligibilityPreview['ProgramEnum'] = {

    /**
     * value: "INBOUND"
     * @const
     */
    "INBOUND": "INBOUND",

    /**
     * value: "COMMINGLING"
     * @const
     */
    "COMMINGLING": "COMMINGLING"
};

/**
 * The program for which eligibility was determined.
 * @member {module:js_client.fbaeligibility_v1.model/ItemEligibilityPreview.ProgramEnum} program
 */
ItemEligibilityPreview.prototype.program = undefined;

/**
 * Indicates if the item is eligible for the program.
 * @member {Boolean} isEligibleForProgram
 */
ItemEligibilityPreview.prototype.isEligibleForProgram = undefined;

/**
 * Allowed values for the <code>ineligibilityReasonList</code> property.
 * @enum {String}
 * @readonly
 */
ItemEligibilityPreview['IneligibilityReasonListEnum'] = {

    /**
     * value: "FBA_INB_0004"
     * @const
     */
    "FBA_INB_0004": "FBA_INB_0004",

    /**
     * value: "FBA_INB_0006"
     * @const
     */
    "FBA_INB_0006": "FBA_INB_0006",

    /**
     * value: "FBA_INB_0007"
     * @const
     */
    "FBA_INB_0007": "FBA_INB_0007",

    /**
     * value: "FBA_INB_0008"
     * @const
     */
    "FBA_INB_0008": "FBA_INB_0008",

    /**
     * value: "FBA_INB_0009"
     * @const
     */
    "FBA_INB_0009": "FBA_INB_0009",

    /**
     * value: "FBA_INB_0010"
     * @const
     */
    "FBA_INB_0010": "FBA_INB_0010",

    /**
     * value: "FBA_INB_0011"
     * @const
     */
    "FBA_INB_0011": "FBA_INB_0011",

    /**
     * value: "FBA_INB_0012"
     * @const
     */
    "FBA_INB_0012": "FBA_INB_0012",

    /**
     * value: "FBA_INB_0013"
     * @const
     */
    "FBA_INB_0013": "FBA_INB_0013",

    /**
     * value: "FBA_INB_0014"
     * @const
     */
    "FBA_INB_0014": "FBA_INB_0014",

    /**
     * value: "FBA_INB_0015"
     * @const
     */
    "FBA_INB_0015": "FBA_INB_0015",

    /**
     * value: "FBA_INB_0016"
     * @const
     */
    "FBA_INB_0016": "FBA_INB_0016",

    /**
     * value: "FBA_INB_0017"
     * @const
     */
    "FBA_INB_0017": "FBA_INB_0017",

    /**
     * value: "FBA_INB_0018"
     * @const
     */
    "FBA_INB_0018": "FBA_INB_0018",

    /**
     * value: "FBA_INB_0019"
     * @const
     */
    "FBA_INB_0019": "FBA_INB_0019",

    /**
     * value: "FBA_INB_0034"
     * @const
     */
    "FBA_INB_0034": "FBA_INB_0034",

    /**
     * value: "FBA_INB_0035"
     * @const
     */
    "FBA_INB_0035": "FBA_INB_0035",

    /**
     * value: "FBA_INB_0036"
     * @const
     */
    "FBA_INB_0036": "FBA_INB_0036",

    /**
     * value: "FBA_INB_0037"
     * @const
     */
    "FBA_INB_0037": "FBA_INB_0037",

    /**
     * value: "FBA_INB_0038"
     * @const
     */
    "FBA_INB_0038": "FBA_INB_0038",

    /**
     * value: "FBA_INB_0050"
     * @const
     */
    "FBA_INB_0050": "FBA_INB_0050",

    /**
     * value: "FBA_INB_0051"
     * @const
     */
    "FBA_INB_0051": "FBA_INB_0051",

    /**
     * value: "FBA_INB_0053"
     * @const
     */
    "FBA_INB_0053": "FBA_INB_0053",

    /**
     * value: "FBA_INB_0055"
     * @const
     */
    "FBA_INB_0055": "FBA_INB_0055",

    /**
     * value: "FBA_INB_0056"
     * @const
     */
    "FBA_INB_0056": "FBA_INB_0056",

    /**
     * value: "FBA_INB_0059"
     * @const
     */
    "FBA_INB_0059": "FBA_INB_0059",

    /**
     * value: "FBA_INB_0065"
     * @const
     */
    "FBA_INB_0065": "FBA_INB_0065",

    /**
     * value: "FBA_INB_0066"
     * @const
     */
    "FBA_INB_0066": "FBA_INB_0066",

    /**
     * value: "FBA_INB_0067"
     * @const
     */
    "FBA_INB_0067": "FBA_INB_0067",

    /**
     * value: "FBA_INB_0068"
     * @const
     */
    "FBA_INB_0068": "FBA_INB_0068",

    /**
     * value: "FBA_INB_0095"
     * @const
     */
    "FBA_INB_0095": "FBA_INB_0095",

    /**
     * value: "FBA_INB_0097"
     * @const
     */
    "FBA_INB_0097": "FBA_INB_0097",

    /**
     * value: "FBA_INB_0098"
     * @const
     */
    "FBA_INB_0098": "FBA_INB_0098",

    /**
     * value: "FBA_INB_0099"
     * @const
     */
    "FBA_INB_0099": "FBA_INB_0099",

    /**
     * value: "FBA_INB_0100"
     * @const
     */
    "FBA_INB_0100": "FBA_INB_0100",

    /**
     * value: "FBA_INB_0103"
     * @const
     */
    "FBA_INB_0103": "FBA_INB_0103",

    /**
     * value: "FBA_INB_0104"
     * @const
     */
    "FBA_INB_0104": "FBA_INB_0104",

    /**
     * value: "FBA_INB_0197"
     * @const
     */
    "FBA_INB_0197": "FBA_INB_0197",

    /**
     * value: "UNKNOWN_INB_ERROR_CODE"
     * @const
     */
    "UNKNOWN_INB_ERROR_CODE": "UNKNOWN_INB_ERROR_CODE"
};

/**
 * Potential Ineligibility Reason Codes.
 * @member {Array.<module:js_client.fbaeligibility_v1.model/ItemEligibilityPreview.IneligibilityReasonListEnum>} ineligibilityReasonList
 */
ItemEligibilityPreview.prototype.ineligibilityReasonList = undefined;


