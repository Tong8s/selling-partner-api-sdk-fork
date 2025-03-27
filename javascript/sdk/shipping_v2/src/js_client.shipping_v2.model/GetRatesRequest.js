/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {AccessPointDetails} from './AccessPointDetails.js';
import {Address} from './Address.js';
import {CarrierAccount} from './CarrierAccount.js';
import {ChannelDetails} from './ChannelDetails.js';
import {ClientReferenceDetail} from './ClientReferenceDetail.js';
import {Package} from './Package.js';
import {ShipmentType} from './ShipmentType.js';
import {ShipperInstruction} from './ShipperInstruction.js';
import {TaxDetail} from './TaxDetail.js';
import {ValueAddedServiceDetails} from './ValueAddedServiceDetails.js';

/**
 * The GetRatesRequest model module.
 * @module js_client.shipping_v2.model/GetRatesRequest
 * @version v2
 */
export class GetRatesRequest {
  /**
   * Constructs a new <code>GetRatesRequest</code>.
   * The request schema for the getRates operation. When the channelType is Amazon, the shipTo address is not required and will be ignored.
   * @alias module:js_client.shipping_v2.model/GetRatesRequest
   * @class
   * @param shipFrom {module:js_client.shipping_v2.model/Address} 
   * @param packages {Array.<module:js_client.shipping_v2.model/Package>} A list of packages to be shipped through a shipping service offering.
   * @param channelDetails {module:js_client.shipping_v2.model/ChannelDetails} 
   */
  constructor(shipFrom, packages, channelDetails) {
    this.shipFrom = shipFrom;
    this.packages = packages;
    this.channelDetails = channelDetails;
  }

  /**
   * Constructs a <code>GetRatesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.shipping_v2.model/GetRatesRequest} obj Optional instance to populate.
   * @return {module:js_client.shipping_v2.model/GetRatesRequest} The populated <code>GetRatesRequest</code> instance.
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
      obj = obj || new GetRatesRequest();
      if (data.hasOwnProperty('shipTo'))
        obj.shipTo = Address.constructFromObject(data['shipTo']);
      if (data.hasOwnProperty('shipFrom'))
        obj.shipFrom = Address.constructFromObject(data['shipFrom']);
      if (data.hasOwnProperty('returnTo'))
        obj.returnTo = Address.constructFromObject(data['returnTo']);
      if (data.hasOwnProperty('shipDate'))
        obj.shipDate = ApiClient.convertToType(data['shipDate'], 'Date');
      if (data.hasOwnProperty('shipperInstruction'))
        obj.shipperInstruction = ShipperInstruction.constructFromObject(data['shipperInstruction']);
      if (data.hasOwnProperty('packages'))
        obj.packages = ApiClient.convertToType(data['packages'], [Package]);
      if (data.hasOwnProperty('valueAddedServices'))
        obj.valueAddedServices = ValueAddedServiceDetails.constructFromObject(data['valueAddedServices']);
      if (data.hasOwnProperty('taxDetails'))
        obj.taxDetails = ApiClient.convertToType(data['taxDetails'], [TaxDetail]);
      if (data.hasOwnProperty('channelDetails'))
        obj.channelDetails = ChannelDetails.constructFromObject(data['channelDetails']);
      if (data.hasOwnProperty('clientReferenceDetails'))
        obj.clientReferenceDetails = ApiClient.convertToType(data['clientReferenceDetails'], [ClientReferenceDetail]);
      if (data.hasOwnProperty('shipmentType'))
        obj.shipmentType = ShipmentType.constructFromObject(data['shipmentType']);
      if (data.hasOwnProperty('destinationAccessPointDetails'))
        obj.destinationAccessPointDetails = AccessPointDetails.constructFromObject(data['destinationAccessPointDetails']);
      if (data.hasOwnProperty('carrierAccounts'))
        obj.carrierAccounts = ApiClient.convertToType(data['carrierAccounts'], [CarrierAccount]);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.shipping_v2.model/Address} shipTo
 */
GetRatesRequest.prototype.shipTo = undefined;

/**
 * @member {module:js_client.shipping_v2.model/Address} shipFrom
 */
GetRatesRequest.prototype.shipFrom = undefined;

/**
 * @member {module:js_client.shipping_v2.model/Address} returnTo
 */
GetRatesRequest.prototype.returnTo = undefined;

/**
 * The ship date and time (the requested pickup). This defaults to the current date and time.
 * @member {Date} shipDate
 */
GetRatesRequest.prototype.shipDate = undefined;

/**
 * @member {module:js_client.shipping_v2.model/ShipperInstruction} shipperInstruction
 */
GetRatesRequest.prototype.shipperInstruction = undefined;

/**
 * A list of packages to be shipped through a shipping service offering.
 * @member {Array.<module:js_client.shipping_v2.model/Package>} packages
 */
GetRatesRequest.prototype.packages = undefined;

/**
 * @member {module:js_client.shipping_v2.model/ValueAddedServiceDetails} valueAddedServices
 */
GetRatesRequest.prototype.valueAddedServices = undefined;

/**
 * A list of tax detail information.
 * @member {Array.<module:js_client.shipping_v2.model/TaxDetail>} taxDetails
 */
GetRatesRequest.prototype.taxDetails = undefined;

/**
 * @member {module:js_client.shipping_v2.model/ChannelDetails} channelDetails
 */
GetRatesRequest.prototype.channelDetails = undefined;

/**
 * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
 * @member {Array.<module:js_client.shipping_v2.model/ClientReferenceDetail>} clientReferenceDetails
 */
GetRatesRequest.prototype.clientReferenceDetails = undefined;

/**
 * @member {module:js_client.shipping_v2.model/ShipmentType} shipmentType
 */
GetRatesRequest.prototype.shipmentType = undefined;

/**
 * @member {module:js_client.shipping_v2.model/AccessPointDetails} destinationAccessPointDetails
 */
GetRatesRequest.prototype.destinationAccessPointDetails = undefined;

/**
 * A list of CarrierAccounts
 * @member {Array.<module:js_client.shipping_v2.model/CarrierAccount>} carrierAccounts
 */
GetRatesRequest.prototype.carrierAccounts = undefined;


