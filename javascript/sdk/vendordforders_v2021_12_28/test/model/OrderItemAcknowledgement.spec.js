/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * The version of the OpenAPI document: 2021-12-28
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
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentOrders);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentOrders) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItemAcknowledgement();
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
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItemAcknowledgement();
      //expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.OrderItemAcknowledgement);
    });

    it('should have the property itemSequenceNumber (base name: "itemSequenceNumber")', function() {
      // uncomment below and update the code to test the property itemSequenceNumber
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItemAcknowledgement();
      //expect(instance).to.be();
    });

    it('should have the property buyerProductIdentifier (base name: "buyerProductIdentifier")', function() {
      // uncomment below and update the code to test the property buyerProductIdentifier
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItemAcknowledgement();
      //expect(instance).to.be();
    });

    it('should have the property vendorProductIdentifier (base name: "vendorProductIdentifier")', function() {
      // uncomment below and update the code to test the property vendorProductIdentifier
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItemAcknowledgement();
      //expect(instance).to.be();
    });

    it('should have the property acknowledgedQuantity (base name: "acknowledgedQuantity")', function() {
      // uncomment below and update the code to test the property acknowledgedQuantity
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItemAcknowledgement();
      //expect(instance).to.be();
    });

  });

}));
