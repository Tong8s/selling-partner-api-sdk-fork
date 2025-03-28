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
    instance = new SellingPartnerApiForRetailProcurementShipments.ItemDetails();
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

  describe('ItemDetails', function() {
    it('should create an instance of ItemDetails', function() {
      // uncomment below and update the code to test ItemDetails
      //var instance = new SellingPartnerApiForRetailProcurementShipments.ItemDetails();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.ItemDetails);
    });

    it('should have the property purchaseOrderNumber (base name: "purchaseOrderNumber")', function() {
      // uncomment below and update the code to test the property purchaseOrderNumber
      //var instance = new SellingPartnerApiForRetailProcurementShipments.ItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property lotNumber (base name: "lotNumber")', function() {
      // uncomment below and update the code to test the property lotNumber
      //var instance = new SellingPartnerApiForRetailProcurementShipments.ItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property expiry (base name: "expiry")', function() {
      // uncomment below and update the code to test the property expiry
      //var instance = new SellingPartnerApiForRetailProcurementShipments.ItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property maximumRetailPrice (base name: "maximumRetailPrice")', function() {
      // uncomment below and update the code to test the property maximumRetailPrice
      //var instance = new SellingPartnerApiForRetailProcurementShipments.ItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property handlingCode (base name: "handlingCode")', function() {
      // uncomment below and update the code to test the property handlingCode
      //var instance = new SellingPartnerApiForRetailProcurementShipments.ItemDetails();
      //expect(instance).to.be();
    });

  });

}));
