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

  describe('ListOfferMetricsRequestFilters', function() {
    it('should create an instance of ListOfferMetricsRequestFilters', function() {
      // uncomment below and update the code to test ListOfferMetricsRequestFilters
      //var instance = new SellingPartnerApiForReplenishment.ListOfferMetricsRequestFilters();
      //expect(instance).to.be.a(SellingPartnerApiForReplenishment.ListOfferMetricsRequestFilters);
    });

    it('should have the property aggregationFrequency (base name: "aggregationFrequency")', function() {
      // uncomment below and update the code to test the property aggregationFrequency
      //var instance = new SellingPartnerApiForReplenishment.ListOfferMetricsRequestFilters();
      //expect(instance).to.be();
    });

    it('should have the property timeInterval (base name: "timeInterval")', function() {
      // uncomment below and update the code to test the property timeInterval
      //var instance = new SellingPartnerApiForReplenishment.ListOfferMetricsRequestFilters();
      //expect(instance).to.be();
    });

    it('should have the property timePeriodType (base name: "timePeriodType")', function() {
      // uncomment below and update the code to test the property timePeriodType
      //var instance = new SellingPartnerApiForReplenishment.ListOfferMetricsRequestFilters();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForReplenishment.ListOfferMetricsRequestFilters();
      //expect(instance).to.be();
    });

    it('should have the property programTypes (base name: "programTypes")', function() {
      // uncomment below and update the code to test the property programTypes
      //var instance = new SellingPartnerApiForReplenishment.ListOfferMetricsRequestFilters();
      //expect(instance).to.be();
    });

    it('should have the property asins (base name: "asins")', function() {
      // uncomment below and update the code to test the property asins
      //var instance = new SellingPartnerApiForReplenishment.ListOfferMetricsRequestFilters();
      //expect(instance).to.be();
    });

  });

}));