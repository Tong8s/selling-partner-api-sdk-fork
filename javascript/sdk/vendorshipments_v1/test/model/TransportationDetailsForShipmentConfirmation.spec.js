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
    instance = new SellingPartnerApiForRetailProcurementShipments.TransportationDetailsForShipmentConfirmation();
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

  describe('TransportationDetailsForShipmentConfirmation', function() {
    it('should create an instance of TransportationDetailsForShipmentConfirmation', function() {
      // uncomment below and update the code to test TransportationDetailsForShipmentConfirmation
      //var instance = new SellingPartnerApiForRetailProcurementShipments.TransportationDetailsForShipmentConfirmation();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.TransportationDetailsForShipmentConfirmation);
    });

    it('should have the property carrierScac (base name: "carrierScac")', function() {
      // uncomment below and update the code to test the property carrierScac
      //var instance = new SellingPartnerApiForRetailProcurementShipments.TransportationDetailsForShipmentConfirmation();
      //expect(instance).to.be();
    });

    it('should have the property carrierShipmentReferenceNumber (base name: "carrierShipmentReferenceNumber")', function() {
      // uncomment below and update the code to test the property carrierShipmentReferenceNumber
      //var instance = new SellingPartnerApiForRetailProcurementShipments.TransportationDetailsForShipmentConfirmation();
      //expect(instance).to.be();
    });

    it('should have the property transportationMode (base name: "transportationMode")', function() {
      // uncomment below and update the code to test the property transportationMode
      //var instance = new SellingPartnerApiForRetailProcurementShipments.TransportationDetailsForShipmentConfirmation();
      //expect(instance).to.be();
    });

    it('should have the property billOfLadingNumber (base name: "billOfLadingNumber")', function() {
      // uncomment below and update the code to test the property billOfLadingNumber
      //var instance = new SellingPartnerApiForRetailProcurementShipments.TransportationDetailsForShipmentConfirmation();
      //expect(instance).to.be();
    });

  });

}));
