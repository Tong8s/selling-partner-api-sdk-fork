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
    instance = new SellingPartnerApiForRetailProcurementShipments.Item();
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

  describe('Item', function() {
    it('should create an instance of Item', function() {
      // uncomment below and update the code to test Item
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Item();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.Item);
    });

    it('should have the property itemSequenceNumber (base name: "itemSequenceNumber")', function() {
      // uncomment below and update the code to test the property itemSequenceNumber
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Item();
      //expect(instance).to.be();
    });

    it('should have the property amazonProductIdentifier (base name: "amazonProductIdentifier")', function() {
      // uncomment below and update the code to test the property amazonProductIdentifier
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Item();
      //expect(instance).to.be();
    });

    it('should have the property vendorProductIdentifier (base name: "vendorProductIdentifier")', function() {
      // uncomment below and update the code to test the property vendorProductIdentifier
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Item();
      //expect(instance).to.be();
    });

    it('should have the property shippedQuantity (base name: "shippedQuantity")', function() {
      // uncomment below and update the code to test the property shippedQuantity
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemDetails (base name: "itemDetails")', function() {
      // uncomment below and update the code to test the property itemDetails
      //var instance = new SellingPartnerApiForRetailProcurementShipments.Item();
      //expect(instance).to.be();
    });

  });

}));
