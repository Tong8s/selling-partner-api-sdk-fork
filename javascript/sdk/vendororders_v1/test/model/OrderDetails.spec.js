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

  describe('OrderDetails', function() {
    it('should create an instance of OrderDetails', function() {
      // uncomment below and update the code to test OrderDetails
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderDetails);
    });

    it('should have the property purchaseOrderDate (base name: "purchaseOrderDate")', function() {
      // uncomment below and update the code to test the property purchaseOrderDate
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property purchaseOrderChangedDate (base name: "purchaseOrderChangedDate")', function() {
      // uncomment below and update the code to test the property purchaseOrderChangedDate
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property purchaseOrderStateChangedDate (base name: "purchaseOrderStateChangedDate")', function() {
      // uncomment below and update the code to test the property purchaseOrderStateChangedDate
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property purchaseOrderType (base name: "purchaseOrderType")', function() {
      // uncomment below and update the code to test the property purchaseOrderType
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property importDetails (base name: "importDetails")', function() {
      // uncomment below and update the code to test the property importDetails
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property dealCode (base name: "dealCode")', function() {
      // uncomment below and update the code to test the property dealCode
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "paymentMethod")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property buyingParty (base name: "buyingParty")', function() {
      // uncomment below and update the code to test the property buyingParty
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property sellingParty (base name: "sellingParty")', function() {
      // uncomment below and update the code to test the property sellingParty
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property shipToParty (base name: "shipToParty")', function() {
      // uncomment below and update the code to test the property shipToParty
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property billToParty (base name: "billToParty")', function() {
      // uncomment below and update the code to test the property billToParty
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property shipWindow (base name: "shipWindow")', function() {
      // uncomment below and update the code to test the property shipWindow
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property deliveryWindow (base name: "deliveryWindow")', function() {
      // uncomment below and update the code to test the property deliveryWindow
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
      //expect(instance).to.be();
    });

  });

}));