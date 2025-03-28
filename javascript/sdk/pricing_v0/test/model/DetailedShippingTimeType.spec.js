/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
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
    factory(root.expect, root.SellingPartnerApiForPricing);
  }
}(this, function(expect, SellingPartnerApiForPricing) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForPricing.DetailedShippingTimeType();
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

  describe('DetailedShippingTimeType', function() {
    it('should create an instance of DetailedShippingTimeType', function() {
      // uncomment below and update the code to test DetailedShippingTimeType
      //var instance = new SellingPartnerApiForPricing.DetailedShippingTimeType();
      //expect(instance).to.be.a(SellingPartnerApiForPricing.DetailedShippingTimeType);
    });

    it('should have the property minimumHours (base name: "minimumHours")', function() {
      // uncomment below and update the code to test the property minimumHours
      //var instance = new SellingPartnerApiForPricing.DetailedShippingTimeType();
      //expect(instance).to.be();
    });

    it('should have the property maximumHours (base name: "maximumHours")', function() {
      // uncomment below and update the code to test the property maximumHours
      //var instance = new SellingPartnerApiForPricing.DetailedShippingTimeType();
      //expect(instance).to.be();
    });

    it('should have the property availableDate (base name: "availableDate")', function() {
      // uncomment below and update the code to test the property availableDate
      //var instance = new SellingPartnerApiForPricing.DetailedShippingTimeType();
      //expect(instance).to.be();
    });

    it('should have the property availabilityType (base name: "availabilityType")', function() {
      // uncomment below and update the code to test the property availabilityType
      //var instance = new SellingPartnerApiForPricing.DetailedShippingTimeType();
      //expect(instance).to.be();
    });

  });

}));
