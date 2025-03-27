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

/**
 * The TransportationDetailsForShipmentConfirmation model module.
 * @module js_client.vendorshipments_v1.model/TransportationDetailsForShipmentConfirmation
 * @version v1
 */
export class TransportationDetailsForShipmentConfirmation {
  /**
   * Constructs a new <code>TransportationDetailsForShipmentConfirmation</code>.
   * Transportation details for this shipment.
   * @alias module:js_client.vendorshipments_v1.model/TransportationDetailsForShipmentConfirmation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransportationDetailsForShipmentConfirmation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendorshipments_v1.model/TransportationDetailsForShipmentConfirmation} obj Optional instance to populate.
   * @return {module:js_client.vendorshipments_v1.model/TransportationDetailsForShipmentConfirmation} The populated <code>TransportationDetailsForShipmentConfirmation</code> instance.
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
      obj = obj || new TransportationDetailsForShipmentConfirmation();
      if (data.hasOwnProperty('carrierScac'))
        obj.carrierScac = ApiClient.convertToType(data['carrierScac'], 'String');
      if (data.hasOwnProperty('carrierShipmentReferenceNumber'))
        obj.carrierShipmentReferenceNumber = ApiClient.convertToType(data['carrierShipmentReferenceNumber'], 'String');
      if (data.hasOwnProperty('transportationMode'))
        obj.transportationMode = ApiClient.convertToType(data['transportationMode'], 'String');
      if (data.hasOwnProperty('billOfLadingNumber'))
        obj.billOfLadingNumber = ApiClient.convertToType(data['billOfLadingNumber'], 'String');
    }
    return obj;
  }
}

/**
 * Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association). This field is mandatory for US, CA, MX shipment confirmations.
 * @member {String} carrierScac
 */
TransportationDetailsForShipmentConfirmation.prototype.carrierScac = undefined;

/**
 * The field also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for UA, CA, MX shipment confirmations.
 * @member {String} carrierShipmentReferenceNumber
 */
TransportationDetailsForShipmentConfirmation.prototype.carrierShipmentReferenceNumber = undefined;

/**
 * Allowed values for the <code>transportationMode</code> property.
 * @enum {String}
 * @readonly
 */
TransportationDetailsForShipmentConfirmation['TransportationModeEnum'] = {

    /**
     * value: "Road"
     * @const
     */
    "Road": "Road",

    /**
     * value: "Air"
     * @const
     */
    "Air": "Air",

    /**
     * value: "Ocean"
     * @const
     */
    "Ocean": "Ocean"
};

/**
 * The mode of transportation for this shipment.
 * @member {module:js_client.vendorshipments_v1.model/TransportationDetailsForShipmentConfirmation.TransportationModeEnum} transportationMode
 */
TransportationDetailsForShipmentConfirmation.prototype.transportationMode = undefined;

/**
 * The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field.
 * @member {String} billOfLadingNumber
 */
TransportationDetailsForShipmentConfirmation.prototype.billOfLadingNumber = undefined;


