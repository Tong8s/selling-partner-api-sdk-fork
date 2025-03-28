/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
    factory(root.expect, root.SellingPartnerApiForServices);
  }
}(this, function(expect, SellingPartnerApiForServices) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForServices.RangeSlot();
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

  describe('RangeSlot', function() {
    it('should create an instance of RangeSlot', function() {
      // uncomment below and update the code to test RangeSlot
      //var instance = new SellingPartnerApiForServices.RangeSlot();
      //expect(instance).to.be.a(SellingPartnerApiForServices.RangeSlot);
    });

    it('should have the property startDateTime (base name: "startDateTime")', function() {
      // uncomment below and update the code to test the property startDateTime
      //var instance = new SellingPartnerApiForServices.RangeSlot();
      //expect(instance).to.be();
    });

    it('should have the property endDateTime (base name: "endDateTime")', function() {
      // uncomment below and update the code to test the property endDateTime
      //var instance = new SellingPartnerApiForServices.RangeSlot();
      //expect(instance).to.be();
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instance = new SellingPartnerApiForServices.RangeSlot();
      //expect(instance).to.be();
    });

  });

}));
