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
    instance = new SellingPartnerApiForSupplySources.ServicesCapability();
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

  describe('ServicesCapability', function() {
    it('should create an instance of ServicesCapability', function() {
      // uncomment below and update the code to test ServicesCapability
      //var instance = new SellingPartnerApiForSupplySources.ServicesCapability();
      //expect(instance).to.be.a(SellingPartnerApiForSupplySources.ServicesCapability);
    });

    it('should have the property isSupported (base name: "isSupported")', function() {
      // uncomment below and update the code to test the property isSupported
      //var instance = new SellingPartnerApiForSupplySources.ServicesCapability();
      //expect(instance).to.be();
    });

    it('should have the property operationalConfiguration (base name: "operationalConfiguration")', function() {
      // uncomment below and update the code to test the property operationalConfiguration
      //var instance = new SellingPartnerApiForSupplySources.ServicesCapability();
      //expect(instance).to.be();
    });

  });

}));
