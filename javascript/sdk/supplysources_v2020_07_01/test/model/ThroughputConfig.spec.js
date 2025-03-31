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

  describe('ThroughputConfig', function() {
    it('should create an instance of ThroughputConfig', function() {
      // uncomment below and update the code to test ThroughputConfig
      //var instance = new SellingPartnerApiForSupplySources.ThroughputConfig();
      //expect(instance).to.be.a(SellingPartnerApiForSupplySources.ThroughputConfig);
    });

    it('should have the property throughputCap (base name: "throughputCap")', function() {
      // uncomment below and update the code to test the property throughputCap
      //var instance = new SellingPartnerApiForSupplySources.ThroughputConfig();
      //expect(instance).to.be();
    });

    it('should have the property throughputUnit (base name: "throughputUnit")', function() {
      // uncomment below and update the code to test the property throughputUnit
      //var instance = new SellingPartnerApiForSupplySources.ThroughputConfig();
      //expect(instance).to.be();
    });

  });

}));