/**
 * The Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForSellers);
  }
}(this, function(expect, TheSellingPartnerApiForSellers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheSellingPartnerApiForSellers.GetMarketplaceParticipationsResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetMarketplaceParticipationsResponse', function() {
    it('should create an instance of GetMarketplaceParticipationsResponse', function() {
      // uncomment below and update the code to test GetMarketplaceParticipationsResponse
      //var instance = new TheSellingPartnerApiForSellers.GetMarketplaceParticipationsResponse();
      //expect(instance).to.be.a(TheSellingPartnerApiForSellers.GetMarketplaceParticipationsResponse);
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instance = new TheSellingPartnerApiForSellers.GetMarketplaceParticipationsResponse();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new TheSellingPartnerApiForSellers.GetMarketplaceParticipationsResponse();
      //expect(instance).to.be();
    });

  });

}));
