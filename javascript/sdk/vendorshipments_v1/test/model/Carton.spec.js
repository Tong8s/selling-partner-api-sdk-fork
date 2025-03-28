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
    instance = new SellingPartnerApiForRetailProcurementShipments.Carton();
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

  describe('Carton', function() {
    it('should create an instance of Carton', function() {
      // uncomment below and update the code to test Carton
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Carton();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.Carton);
    });

    it('should have the property cartonIdentifiers (base name: "cartonIdentifiers")', function() {
      // uncomment below and update the code to test the property cartonIdentifiers
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Carton();
      //expect(instance).to.be();
    });

    it('should have the property cartonSequenceNumber (base name: "cartonSequenceNumber")', function() {
      // uncomment below and update the code to test the property cartonSequenceNumber
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Carton();
      //expect(instance).to.be();
    });

    it('should have the property dimensions (base name: "dimensions")', function() {
      // uncomment below and update the code to test the property dimensions
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Carton();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Carton();
      //expect(instance).to.be();
    });

    it('should have the property trackingNumber (base name: "trackingNumber")', function() {
      // uncomment below and update the code to test the property trackingNumber
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Carton();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Carton();
      //expect(instance).to.be();
    });

  });

}));
