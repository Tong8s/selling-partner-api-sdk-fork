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
import {Carton} from './Carton.js';
import {ImportDetails} from './ImportDetails.js';
import {Item} from './Item.js';
import {Pallet} from './Pallet.js';
import {PartyIdentification} from './PartyIdentification.js';
import {ShipmentMeasurements} from './ShipmentMeasurements.js';
import {TransportationDetailsForShipmentConfirmation} from './TransportationDetailsForShipmentConfirmation.js';

/**
 * The ShipmentConfirmation model module.
 * @module js_client.vendorshipments_v1.model/ShipmentConfirmation
 * @version v1
 */
export class ShipmentConfirmation {
  /**
   * Constructs a new <code>ShipmentConfirmation</code>.
   * A list of one or more shipment confirmations.
   * @alias module:js_client.vendorshipments_v1.model/ShipmentConfirmation
   * @class
   * @param shipmentIdentifier {String} Unique shipment ID (not used over the last 365 days).
   * @param shipmentConfirmationType {module:js_client.vendorshipments_v1.model/ShipmentConfirmation.ShipmentConfirmationTypeEnum} Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation.
   * @param shipmentConfirmationDate {Date} Date on which the shipment confirmation was submitted.
   * @param sellingParty {module:js_client.vendorshipments_v1.model/PartyIdentification} 
   * @param shipFromParty {module:js_client.vendorshipments_v1.model/PartyIdentification} 
   * @param shipToParty {module:js_client.vendorshipments_v1.model/PartyIdentification} 
   * @param shippedItems {Array.<module:js_client.vendorshipments_v1.model/Item>} A list of the items in this shipment and their associated details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.
   */
  constructor(shipmentIdentifier, shipmentConfirmationType, shipmentConfirmationDate, sellingParty, shipFromParty, shipToParty, shippedItems) {
    this.shipmentIdentifier = shipmentIdentifier;
    this.shipmentConfirmationType = shipmentConfirmationType;
    this.shipmentConfirmationDate = shipmentConfirmationDate;
    this.sellingParty = sellingParty;
    this.shipFromParty = shipFromParty;
    this.shipToParty = shipToParty;
    this.shippedItems = shippedItems;
  }

  /**
   * Constructs a <code>ShipmentConfirmation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.vendorshipments_v1.model/ShipmentConfirmation} obj Optional instance to populate.
   * @return {module:js_client.vendorshipments_v1.model/ShipmentConfirmation} The populated <code>ShipmentConfirmation</code> instance.
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
      obj = obj || new ShipmentConfirmation();
      if (data.hasOwnProperty('shipmentIdentifier'))
        obj.shipmentIdentifier = ApiClient.convertToType(data['shipmentIdentifier'], 'String');
      if (data.hasOwnProperty('shipmentConfirmationType'))
        obj.shipmentConfirmationType = ApiClient.convertToType(data['shipmentConfirmationType'], 'String');
      if (data.hasOwnProperty('shipmentType'))
        obj.shipmentType = ApiClient.convertToType(data['shipmentType'], 'String');
      if (data.hasOwnProperty('shipmentStructure'))
        obj.shipmentStructure = ApiClient.convertToType(data['shipmentStructure'], 'String');
      if (data.hasOwnProperty('transportationDetails'))
        obj.transportationDetails = TransportationDetailsForShipmentConfirmation.constructFromObject(data['transportationDetails']);
      if (data.hasOwnProperty('amazonReferenceNumber'))
        obj.amazonReferenceNumber = ApiClient.convertToType(data['amazonReferenceNumber'], 'String');
      if (data.hasOwnProperty('shipmentConfirmationDate'))
        obj.shipmentConfirmationDate = ApiClient.convertToType(data['shipmentConfirmationDate'], 'Date');
      if (data.hasOwnProperty('shippedDate'))
        obj.shippedDate = ApiClient.convertToType(data['shippedDate'], 'Date');
      if (data.hasOwnProperty('estimatedDeliveryDate'))
        obj.estimatedDeliveryDate = ApiClient.convertToType(data['estimatedDeliveryDate'], 'Date');
      if (data.hasOwnProperty('sellingParty'))
        obj.sellingParty = PartyIdentification.constructFromObject(data['sellingParty']);
      if (data.hasOwnProperty('shipFromParty'))
        obj.shipFromParty = PartyIdentification.constructFromObject(data['shipFromParty']);
      if (data.hasOwnProperty('shipToParty'))
        obj.shipToParty = PartyIdentification.constructFromObject(data['shipToParty']);
      if (data.hasOwnProperty('shipmentMeasurements'))
        obj.shipmentMeasurements = ShipmentMeasurements.constructFromObject(data['shipmentMeasurements']);
      if (data.hasOwnProperty('importDetails'))
        obj.importDetails = ImportDetails.constructFromObject(data['importDetails']);
      if (data.hasOwnProperty('shippedItems'))
        obj.shippedItems = ApiClient.convertToType(data['shippedItems'], [Item]);
      if (data.hasOwnProperty('cartons'))
        obj.cartons = ApiClient.convertToType(data['cartons'], [Carton]);
      if (data.hasOwnProperty('pallets'))
        obj.pallets = ApiClient.convertToType(data['pallets'], [Pallet]);
    }
    return obj;
  }
}

/**
 * Unique shipment ID (not used over the last 365 days).
 * @member {String} shipmentIdentifier
 */
ShipmentConfirmation.prototype.shipmentIdentifier = undefined;

/**
 * Allowed values for the <code>shipmentConfirmationType</code> property.
 * @enum {String}
 * @readonly
 */
ShipmentConfirmation['ShipmentConfirmationTypeEnum'] = {

    /**
     * value: "Original"
     * @const
     */
    "Original": "Original",

    /**
     * value: "Replace"
     * @const
     */
    "Replace": "Replace"
};

/**
 * Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation.
 * @member {module:js_client.vendorshipments_v1.model/ShipmentConfirmation.ShipmentConfirmationTypeEnum} shipmentConfirmationType
 */
ShipmentConfirmation.prototype.shipmentConfirmationType = undefined;

/**
 * Allowed values for the <code>shipmentType</code> property.
 * @enum {String}
 * @readonly
 */
ShipmentConfirmation['ShipmentTypeEnum'] = {

    /**
     * value: "TruckLoad"
     * @const
     */
    "TruckLoad": "TruckLoad",

    /**
     * value: "LessThanTruckLoad"
     * @const
     */
    "LessThanTruckLoad": "LessThanTruckLoad",

    /**
     * value: "SmallParcel"
     * @const
     */
    "SmallParcel": "SmallParcel"
};

/**
 * The type of shipment.
 * @member {module:js_client.vendorshipments_v1.model/ShipmentConfirmation.ShipmentTypeEnum} shipmentType
 */
ShipmentConfirmation.prototype.shipmentType = undefined;

/**
 * Allowed values for the <code>shipmentStructure</code> property.
 * @enum {String}
 * @readonly
 */
ShipmentConfirmation['ShipmentStructureEnum'] = {

    /**
     * value: "PalletizedAssortmentCase"
     * @const
     */
    "PalletizedAssortmentCase": "PalletizedAssortmentCase",

    /**
     * value: "LooseAssortmentCase"
     * @const
     */
    "LooseAssortmentCase": "LooseAssortmentCase",

    /**
     * value: "PalletOfItems"
     * @const
     */
    "PalletOfItems": "PalletOfItems",

    /**
     * value: "PalletizedStandardCase"
     * @const
     */
    "PalletizedStandardCase": "PalletizedStandardCase",

    /**
     * value: "LooseStandardCase"
     * @const
     */
    "LooseStandardCase": "LooseStandardCase",

    /**
     * value: "MasterPallet"
     * @const
     */
    "MasterPallet": "MasterPallet",

    /**
     * value: "MasterCase"
     * @const
     */
    "MasterCase": "MasterCase"
};

/**
 * Shipment hierarchical structure.
 * @member {module:js_client.vendorshipments_v1.model/ShipmentConfirmation.ShipmentStructureEnum} shipmentStructure
 */
ShipmentConfirmation.prototype.shipmentStructure = undefined;

/**
 * @member {module:js_client.vendorshipments_v1.model/TransportationDetailsForShipmentConfirmation} transportationDetails
 */
ShipmentConfirmation.prototype.transportationDetails = undefined;

/**
 * The Amazon Reference Number is a unique identifier generated by Amazon for all Collect/WePay shipments when you submit  a routing request. This field is mandatory for Collect/WePay shipments.
 * @member {String} amazonReferenceNumber
 */
ShipmentConfirmation.prototype.amazonReferenceNumber = undefined;

/**
 * Date on which the shipment confirmation was submitted.
 * @member {Date} shipmentConfirmationDate
 */
ShipmentConfirmation.prototype.shipmentConfirmationDate = undefined;

/**
 * The date and time of the departure of the shipment from the vendor's location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future.
 * @member {Date} shippedDate
 */
ShipmentConfirmation.prototype.shippedDate = undefined;

/**
 * The date and time on which the shipment is estimated to reach buyer's warehouse. It needs to be an estimate based on the average transit time between ship from location and the destination. The exact appointment time will be provided by the buyer and is potentially not known when creating the shipment confirmation.
 * @member {Date} estimatedDeliveryDate
 */
ShipmentConfirmation.prototype.estimatedDeliveryDate = undefined;

/**
 * @member {module:js_client.vendorshipments_v1.model/PartyIdentification} sellingParty
 */
ShipmentConfirmation.prototype.sellingParty = undefined;

/**
 * @member {module:js_client.vendorshipments_v1.model/PartyIdentification} shipFromParty
 */
ShipmentConfirmation.prototype.shipFromParty = undefined;

/**
 * @member {module:js_client.vendorshipments_v1.model/PartyIdentification} shipToParty
 */
ShipmentConfirmation.prototype.shipToParty = undefined;

/**
 * @member {module:js_client.vendorshipments_v1.model/ShipmentMeasurements} shipmentMeasurements
 */
ShipmentConfirmation.prototype.shipmentMeasurements = undefined;

/**
 * @member {module:js_client.vendorshipments_v1.model/ImportDetails} importDetails
 */
ShipmentConfirmation.prototype.importDetails = undefined;

/**
 * A list of the items in this shipment and their associated details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.
 * @member {Array.<module:js_client.vendorshipments_v1.model/Item>} shippedItems
 */
ShipmentConfirmation.prototype.shippedItems = undefined;

/**
 * A list of the cartons in this shipment.
 * @member {Array.<module:js_client.vendorshipments_v1.model/Carton>} cartons
 */
ShipmentConfirmation.prototype.cartons = undefined;

/**
 * A list of the pallets in this shipment.
 * @member {Array.<module:js_client.vendorshipments_v1.model/Pallet>} pallets
 */
ShipmentConfirmation.prototype.pallets = undefined;


