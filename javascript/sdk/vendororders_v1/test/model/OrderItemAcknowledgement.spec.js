/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
    factory(root.expect, root.SellingPartnerApiForRetailProcurementOrders);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementOrders) {
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

  describe('OrderItemAcknowledgement', function() {
    it('should create an instance of OrderItemAcknowledgement', function() {
      // uncomment below and update the code to test OrderItemAcknowledgement
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement);
    });

    it('should have the property acknowledgementCode (base name: "acknowledgementCode")', function() {
      // uncomment below and update the code to test the property acknowledgementCode
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement();
      //expect(instance).to.be();
    });

    it('should have the property acknowledgedQuantity (base name: "acknowledgedQuantity")', function() {
      // uncomment below and update the code to test the property acknowledgedQuantity
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement();
      //expect(instance).to.be();
    });

    it('should have the property scheduledShipDate (base name: "scheduledShipDate")', function() {
      // uncomment below and update the code to test the property scheduledShipDate
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement();
      //expect(instance).to.be();
    });

    it('should have the property scheduledDeliveryDate (base name: "scheduledDeliveryDate")', function() {
      // uncomment below and update the code to test the property scheduledDeliveryDate
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement();
      //expect(instance).to.be();
    });

    it('should have the property rejectionReason (base name: "rejectionReason")', function() {
      // uncomment below and update the code to test the property rejectionReason
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement();
      //expect(instance).to.be();
    });

  });

}));