/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
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
    factory(root.expect, root.SellingPartnerApiForReplenishment);
  }
}(this, function(expect, SellingPartnerApiForReplenishment) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForReplenishment.ListOffersResponseOffer();
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

  describe('ListOffersResponseOffer', function() {
    it('should create an instance of ListOffersResponseOffer', function() {
      // uncomment below and update the code to test ListOffersResponseOffer
      //var instance = new SellingPartnerApiForReplenishment.ListOffersResponseOffer();
      //expect(instance).to.be.a(SellingPartnerApiForReplenishment.ListOffersResponseOffer);
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instance = new SellingPartnerApiForReplenishment.ListOffersResponseOffer();
      //expect(instance).to.be();
    });

    it('should have the property asin (base name: "asin")', function() {
      // uncomment below and update the code to test the property asin
      //var instance = new SellingPartnerApiForReplenishment.ListOffersResponseOffer();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForReplenishment.ListOffersResponseOffer();
      //expect(instance).to.be();
    });

    it('should have the property eligibility (base name: "eligibility")', function() {
      // uncomment below and update the code to test the property eligibility
      //var instance = new SellingPartnerApiForReplenishment.ListOffersResponseOffer();
      //expect(instance).to.be();
    });

    it('should have the property offerProgramConfiguration (base name: "offerProgramConfiguration")', function() {
      // uncomment below and update the code to test the property offerProgramConfiguration
      //var instance = new SellingPartnerApiForReplenishment.ListOffersResponseOffer();
      //expect(instance).to.be();
    });

    it('should have the property programType (base name: "programType")', function() {
      // uncomment below and update the code to test the property programType
      //var instance = new SellingPartnerApiForReplenishment.ListOffersResponseOffer();
      //expect(instance).to.be();
    });

    it('should have the property vendorCodes (base name: "vendorCodes")', function() {
      // uncomment below and update the code to test the property vendorCodes
      //var instance = new SellingPartnerApiForReplenishment.ListOffersResponseOffer();
      //expect(instance).to.be();
    });

  });

}));
