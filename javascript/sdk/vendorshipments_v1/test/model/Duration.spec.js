/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
    factory(root.expect, root.SellingPartnerApiForRetailProcurementShipments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementShipments) {
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

  describe('Duration', function() {
    it('should create an instance of Duration', function() {
      // uncomment below and update the code to test Duration
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Duration();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.Duration);
    });

    it('should have the property durationUnit (base name: "durationUnit")', function() {
      // uncomment below and update the code to test the property durationUnit
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Duration();
      //expect(instance).to.be();
    });

    it('should have the property durationValue (base name: "durationValue")', function() {
      // uncomment below and update the code to test the property durationValue
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Duration();
      //expect(instance).to.be();
    });

  });

}));