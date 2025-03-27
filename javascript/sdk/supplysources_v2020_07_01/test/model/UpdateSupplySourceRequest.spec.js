/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
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
    factory(root.expect, root.SellingPartnerApiForSupplySources);
  }
}(this, function(expect, SellingPartnerApiForSupplySources) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForSupplySources.UpdateSupplySourceRequest();
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

  describe('UpdateSupplySourceRequest', function() {
    it('should create an instance of UpdateSupplySourceRequest', function() {
      // uncomment below and update the code to test UpdateSupplySourceRequest
      //var instance = new SellingPartnerApiForSupplySources.UpdateSupplySourceRequest();
      //expect(instance).to.be.a(SellingPartnerApiForSupplySources.UpdateSupplySourceRequest);
    });

    it('should have the property alias (base name: "alias")', function() {
      // uncomment below and update the code to test the property alias
      //var instance = new SellingPartnerApiForSupplySources.UpdateSupplySourceRequest();
      //expect(instance).to.be();
    });

    it('should have the property configuration (base name: "configuration")', function() {
      // uncomment below and update the code to test the property configuration
      //var instance = new SellingPartnerApiForSupplySources.UpdateSupplySourceRequest();
      //expect(instance).to.be();
    });

    it('should have the property capabilities (base name: "capabilities")', function() {
      // uncomment below and update the code to test the property capabilities
      //var instance = new SellingPartnerApiForSupplySources.UpdateSupplySourceRequest();
      //expect(instance).to.be();
    });

  });

}));
