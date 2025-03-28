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
    instance = new SellingPartnerApiForRetailProcurementShipments.LabelData();
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

  describe('LabelData', function() {
    it('should create an instance of LabelData', function() {
      // uncomment below and update the code to test LabelData
      //var instance = new SellingPartnerApiForRetailProcurementShipments.LabelData();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.LabelData);
    });

    it('should have the property labelSequenceNumber (base name: "labelSequenceNumber")', function() {
      // uncomment below and update the code to test the property labelSequenceNumber
      //var instance = new SellingPartnerApiForRetailProcurementShipments.LabelData();
      //expect(instance).to.be();
    });

    it('should have the property labelFormat (base name: "labelFormat")', function() {
      // uncomment below and update the code to test the property labelFormat
      //var instance = new SellingPartnerApiForRetailProcurementShipments.LabelData();
      //expect(instance).to.be();
    });

    it('should have the property carrierCode (base name: "carrierCode")', function() {
      // uncomment below and update the code to test the property carrierCode
      //var instance = new SellingPartnerApiForRetailProcurementShipments.LabelData();
      //expect(instance).to.be();
    });

    it('should have the property trackingId (base name: "trackingId")', function() {
      // uncomment below and update the code to test the property trackingId
      //var instance = new SellingPartnerApiForRetailProcurementShipments.LabelData();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new SellingPartnerApiForRetailProcurementShipments.LabelData();
      //expect(instance).to.be();
    });

  });

}));
