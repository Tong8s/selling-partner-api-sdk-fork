/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {BatchRequest} from './BatchRequest.js';
import {FeaturedOfferExpectedPriceRequestParams} from './FeaturedOfferExpectedPriceRequestParams.js';
import {HttpMethod} from './HttpMethod.js';
import {Segment} from './Segment.js';

/**
 * The FeaturedOfferExpectedPriceRequest model module.
 * @module js_client.pricing_v2022_05_01.model/FeaturedOfferExpectedPriceRequest
 * @version 2022-05-01
 */
export class FeaturedOfferExpectedPriceRequest {
  /**
   * Constructs a new <code>FeaturedOfferExpectedPriceRequest</code>.
   * An individual FOEP request for a particular SKU.
   * @alias module:js_client.pricing_v2022_05_01.model/FeaturedOfferExpectedPriceRequest
   * @class
   * @implements module:js_client.pricing_v2022_05_01.model/BatchRequest
   * @implements module:js_client.pricing_v2022_05_01.model/FeaturedOfferExpectedPriceRequestParams
   * @param uri {String} The URI associated with an individual request within a batch. For `FeaturedOfferExpectedPrice`, this is `/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice`.
   * @param method {module:js_client.pricing_v2022_05_01.model/HttpMethod} 
   * @param marketplaceId {String} A marketplace identifier. Specifies the marketplace for which data is returned.
   * @param sku {String} The seller SKU of the item.
   */
  constructor(uri, method, marketplaceId, sku) {
    BatchRequest.call(this, uri, method);
    FeaturedOfferExpectedPriceRequestParams.call(this, marketplaceId, sku);
    this.uri = uri;
    this.method = method;
    this.marketplaceId = marketplaceId;
    this.sku = sku;
  }

  /**
   * Constructs a <code>FeaturedOfferExpectedPriceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js_client.pricing_v2022_05_01.model/FeaturedOfferExpectedPriceRequest} obj Optional instance to populate.
   * @return {module:js_client.pricing_v2022_05_01.model/FeaturedOfferExpectedPriceRequest} The populated <code>FeaturedOfferExpectedPriceRequest</code> instance.
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
      obj = obj || new FeaturedOfferExpectedPriceRequest();
      BatchRequest.constructFromObject(data, obj);
      FeaturedOfferExpectedPriceRequestParams.constructFromObject(data, obj);
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
      if (data.hasOwnProperty('method'))
        obj.method = HttpMethod.constructFromObject(data['method']);
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], {'String': Object});
      if (data.hasOwnProperty('headers'))
        obj.headers = ApiClient.convertToType(data['headers'], {'String': 'String'});
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('segment'))
        obj.segment = Segment.constructFromObject(data['segment']);
    }
    return obj;
  }
}

/**
 * The URI associated with an individual request within a batch. For `FeaturedOfferExpectedPrice`, this is `/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice`.
 * @member {String} uri
 */
FeaturedOfferExpectedPriceRequest.prototype.uri = undefined;

/**
 * @member {module:js_client.pricing_v2022_05_01.model/HttpMethod} method
 */
FeaturedOfferExpectedPriceRequest.prototype.method = undefined;

/**
 * Additional HTTP body information that is associated with an individual request within a batch.
 * @member {Object.<String, Object>} body
 */
FeaturedOfferExpectedPriceRequest.prototype.body = undefined;

/**
 * A mapping of additional HTTP headers to send or receive for an individual request within a batch.
 * @member {Object.<String, String>} headers
 */
FeaturedOfferExpectedPriceRequest.prototype.headers = undefined;

/**
 * A marketplace identifier. Specifies the marketplace for which data is returned.
 * @member {String} marketplaceId
 */
FeaturedOfferExpectedPriceRequest.prototype.marketplaceId = undefined;

/**
 * The seller SKU of the item.
 * @member {String} sku
 */
FeaturedOfferExpectedPriceRequest.prototype.sku = undefined;

/**
 * @member {module:js_client.pricing_v2022_05_01.model/Segment} segment
 */
FeaturedOfferExpectedPriceRequest.prototype.segment = undefined;

// Implement BatchRequest interface:
/**
 * The URI associated with an individual request within a batch. For `FeaturedOfferExpectedPrice`, this is `/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice`.
 * @member {String} uri
 */
BatchRequest.prototype.uri = undefined;

/**
 * @member {module:js_client.pricing_v2022_05_01.model/HttpMethod} method
 */
BatchRequest.prototype.method = undefined;

/**
 * Additional HTTP body information that is associated with an individual request within a batch.
 * @member {Object.<String, Object>} body
 */
BatchRequest.prototype.body = undefined;

/**
 * A mapping of additional HTTP headers to send or receive for an individual request within a batch.
 * @member {Object.<String, String>} headers
 */
BatchRequest.prototype.headers = undefined;

// Implement FeaturedOfferExpectedPriceRequestParams interface:
/**
 * A marketplace identifier. Specifies the marketplace for which data is returned.
 * @member {String} marketplaceId
 */
FeaturedOfferExpectedPriceRequestParams.prototype.marketplaceId = undefined;

/**
 * The seller SKU of the item.
 * @member {String} sku
 */
FeaturedOfferExpectedPriceRequestParams.prototype.sku = undefined;

/**
 * @member {module:js_client.pricing_v2022_05_01.model/Segment} segment
 */
FeaturedOfferExpectedPriceRequestParams.prototype.segment = undefined;


