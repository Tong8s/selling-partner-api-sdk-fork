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
    instance = new SellingPartnerApiForRetailProcurementOrders.OrderItem();
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

  describe('OrderItem', function() {
    it('should create an instance of OrderItem', function() {
      // uncomment below and update the code to test OrderItem
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItem();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderItem);
    });

    it('should have the property itemSequenceNumber (base name: "itemSequenceNumber")', function() {
      // uncomment below and update the code to test the property itemSequenceNumber
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property amazonProductIdentifier (base name: "amazonProductIdentifier")', function() {
      // uncomment below and update the code to test the property amazonProductIdentifier
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property vendorProductIdentifier (base name: "vendorProductIdentifier")', function() {
      // uncomment below and update the code to test the property vendorProductIdentifier
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property orderedQuantity (base name: "orderedQuantity")', function() {
      // uncomment below and update the code to test the property orderedQuantity
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property isBackOrderAllowed (base name: "isBackOrderAllowed")', function() {
      // uncomment below and update the code to test the property isBackOrderAllowed
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property netCost (base name: "netCost")', function() {
      // uncomment below and update the code to test the property netCost
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property listPrice (base name: "listPrice")', function() {
      // uncomment below and update the code to test the property listPrice
      //var instance = new SellingPartnerApiForRetailProcurementOrders.OrderItem();
      //expect(instance).to.be();
    });

  });

}));
