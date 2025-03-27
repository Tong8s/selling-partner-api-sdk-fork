/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
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
    factory(root.expect, root.TheSellingPartnerApiForAmazonWarehousingAndDistribution);
  }
}(this, function(expect, TheSellingPartnerApiForAmazonWarehousingAndDistribution) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
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

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address);
    });

    it('should have the property addressLine1 (base name: "addressLine1")', function() {
      // uncomment below and update the code to test the property addressLine1
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

    it('should have the property addressLine2 (base name: "addressLine2")', function() {
      // uncomment below and update the code to test the property addressLine2
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

    it('should have the property addressLine3 (base name: "addressLine3")', function() {
      // uncomment below and update the code to test the property addressLine3
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

    it('should have the property county (base name: "county")', function() {
      // uncomment below and update the code to test the property county
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

    it('should have the property district (base name: "district")', function() {
      // uncomment below and update the code to test the property district
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

    it('should have the property stateOrRegion (base name: "stateOrRegion")', function() {
      // uncomment below and update the code to test the property stateOrRegion
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.Address();
      //expect(instance).to.be();
    });

  });

}));
