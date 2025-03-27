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
import {ChannelDetails} from './ChannelDetails.js';
import {GoodsOwner} from './GoodsOwner.js';
import {OneClickShipmentValueAddedService} from './OneClickShipmentValueAddedService.js';
import {Package} from './Package.js';
import {RequestedDocumentSpecification} from './RequestedDocumentSpecification.js';
import {ServiceSelection} from './ServiceSelection.js';
import {ShipperInstruction} from './ShipperInstruction.js';
import {TaxDetail} from './TaxDetail.js';

/**
 * The OneClickShipmentRequest model module.
 * @module js_client.shipping_v2.model/OneClickShipmentRequest
 * @version v2
 */
export class OneClickShipmentRequest {
  /**
   * Constructs a new <code>OneClickShipmentRequest</code>.
   * The request schema for the OneClickShipment operation. When the channelType is not Amazon, shipTo is required and when channelType is Amazon shipTo is ignored.
   * @alias module:js_client.shipping_v2.model/OneClickShipmentRequest
   * @class
   * @param shipFrom {module:js_client.shipping_v2.model/Address} 
   * @param packages {Array.<module:js_client.shipping_v2.model/Package>} A list of packages to be shipped through a shipping service offering.
   * @param channelDetails {module:js_client.shipping_v2.model/ChannelDetails} 
   * @param labelSpecifications {module:js_client.shipping_v2.model/RequestedDocumentSpecification} 
   * @param serviceSelection {module:js_client.shipping_v2.model/ServiceSelection} 
   */
  constructor(shipFrom, packages, channelDetails, labelSpecifications, serviceSelection) {
    this.shipFrom = shipFrom;
    this.packages = packages;
    this.channelDetails = channelDetails;
    this.labelSpecifications = labelSpecifications;
    this.serviceSelection = serviceSelection;
  }

  /**
   * Constructs a <code>OneClickShipmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.shipping_v2.model/OneClickShipmentRequest} obj Optional instance to populate.
   * @return {module:js_client.shipping_v2.model/OneClickShipmentRequest} The populated <code>OneClickShipmentRequest</code> instance.
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
      obj = obj || new OneClickShipmentRequest();
      if (data.hasOwnProperty('shipTo'))
        obj.shipTo = Address.constructFromObject(data['shipTo']);
      if (data.hasOwnProperty('shipFrom'))
        obj.shipFrom = Address.constructFromObject(data['shipFrom']);
      if (data.hasOwnProperty('returnTo'))
        obj.returnTo = Address.constructFromObject(data['returnTo']);
      if (data.hasOwnProperty('shipDate'))
        obj.shipDate = ApiClient.convertToType(data['shipDate'], 'Date');
      if (data.hasOwnProperty('goodsOwner'))
        obj.goodsOwner = GoodsOwner.constructFromObject(data['goodsOwner']);
      if (data.hasOwnProperty('packages'))
        obj.packages = ApiClient.convertToType(data['packages'], [Package]);
      if (data.hasOwnProperty('valueAddedServicesDetails'))
        obj.valueAddedServicesDetails = ApiClient.convertToType(data['valueAddedServicesDetails'], [OneClickShipmentValueAddedService]);
      if (data.hasOwnProperty('taxDetails'))
        obj.taxDetails = ApiClient.convertToType(data['taxDetails'], [TaxDetail]);
      if (data.hasOwnProperty('channelDetails'))
        obj.channelDetails = ChannelDetails.constructFromObject(data['channelDetails']);
      if (data.hasOwnProperty('labelSpecifications'))
        obj.labelSpecifications = RequestedDocumentSpecification.constructFromObject(data['labelSpecifications']);
      if (data.hasOwnProperty('serviceSelection'))
        obj.serviceSelection = ServiceSelection.constructFromObject(data['serviceSelection']);
      if (data.hasOwnProperty('shipperInstruction'))
        obj.shipperInstruction = ShipperInstruction.constructFromObject(data['shipperInstruction']);
      if (data.hasOwnProperty('destinationAccessPointDetails'))
        obj.destinationAccessPointDetails = AccessPointDetails.constructFromObject(data['destinationAccessPointDetails']);
    }
    return obj;
  }
}

/**
 * @member {module:js_client.shipping_v2.model/Address} shipTo
 */
OneClickShipmentRequest.prototype.shipTo = undefined;

/**
 * @member {module:js_client.shipping_v2.model/Address} shipFrom
 */
OneClickShipmentRequest.prototype.shipFrom = undefined;

/**
 * @member {module:js_client.shipping_v2.model/Address} returnTo
 */
OneClickShipmentRequest.prototype.returnTo = undefined;

/**
 * The ship date and time (the requested pickup). This defaults to the current date and time.
 * @member {Date} shipDate
 */
OneClickShipmentRequest.prototype.shipDate = undefined;

/**
 * @member {module:js_client.shipping_v2.model/GoodsOwner} goodsOwner
 */
OneClickShipmentRequest.prototype.goodsOwner = undefined;

/**
 * A list of packages to be shipped through a shipping service offering.
 * @member {Array.<module:js_client.shipping_v2.model/Package>} packages
 */
OneClickShipmentRequest.prototype.packages = undefined;

/**
 * The value-added services to be added to a shipping service purchase.
 * @member {Array.<module:js_client.shipping_v2.model/OneClickShipmentValueAddedService>} valueAddedServicesDetails
 */
OneClickShipmentRequest.prototype.valueAddedServicesDetails = undefined;

/**
 * A list of tax detail information.
 * @member {Array.<module:js_client.shipping_v2.model/TaxDetail>} taxDetails
 */
OneClickShipmentRequest.prototype.taxDetails = undefined;

/**
 * @member {module:js_client.shipping_v2.model/ChannelDetails} channelDetails
 */
OneClickShipmentRequest.prototype.channelDetails = undefined;

/**
 * @member {module:js_client.shipping_v2.model/RequestedDocumentSpecification} labelSpecifications
 */
OneClickShipmentRequest.prototype.labelSpecifications = undefined;

/**
 * @member {module:js_client.shipping_v2.model/ServiceSelection} serviceSelection
 */
OneClickShipmentRequest.prototype.serviceSelection = undefined;

/**
 * @member {module:js_client.shipping_v2.model/ShipperInstruction} shipperInstruction
 */
OneClickShipmentRequest.prototype.shipperInstruction = undefined;

/**
 * @member {module:js_client.shipping_v2.model/AccessPointDetails} destinationAccessPointDetails
 */
OneClickShipmentRequest.prototype.destinationAccessPointDetails = undefined;


