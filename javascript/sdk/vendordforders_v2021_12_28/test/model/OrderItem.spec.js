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
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.OrderItem);
    });

    it('should have the property itemSequenceNumber (base name: "itemSequenceNumber")', function() {
      // uncomment below and update the code to test the property itemSequenceNumber
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property buyerProductIdentifier (base name: "buyerProductIdentifier")', function() {
      // uncomment below and update the code to test the property buyerProductIdentifier
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property vendorProductIdentifier (base name: "vendorProductIdentifier")', function() {
      // uncomment below and update the code to test the property vendorProductIdentifier
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property orderedQuantity (base name: "orderedQuantity")', function() {
      // uncomment below and update the code to test the property orderedQuantity
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property scheduledDeliveryShipment (base name: "scheduledDeliveryShipment")', function() {
      // uncomment below and update the code to test the property scheduledDeliveryShipment
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property giftDetails (base name: "giftDetails")', function() {
      // uncomment below and update the code to test the property giftDetails
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property netPrice (base name: "netPrice")', function() {
      // uncomment below and update the code to test the property netPrice
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property taxDetails (base name: "taxDetails")', function() {
      // uncomment below and update the code to test the property taxDetails
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property totalPrice (base name: "totalPrice")', function() {
      // uncomment below and update the code to test the property totalPrice
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property buyerCustomizedInfo (base name: "buyerCustomizedInfo")', function() {
      // uncomment below and update the code to test the property buyerCustomizedInfo
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderItem();
      //expect(instance).to.be();
    });

  });

}));