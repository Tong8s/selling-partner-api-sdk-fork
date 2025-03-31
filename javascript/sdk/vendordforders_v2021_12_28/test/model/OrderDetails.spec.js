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

  describe('OrderDetails', function() {
    it('should create an instance of OrderDetails', function() {
      // uncomment below and update the code to test OrderDetails
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.OrderDetails);
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property orderDate (base name: "orderDate")', function() {
      // uncomment below and update the code to test the property orderDate
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property orderStatus (base name: "orderStatus")', function() {
      // uncomment below and update the code to test the property orderStatus
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property shipmentDetails (base name: "shipmentDetails")', function() {
      // uncomment below and update the code to test the property shipmentDetails
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property taxTotal (base name: "taxTotal")', function() {
      // uncomment below and update the code to test the property taxTotal
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property sellingParty (base name: "sellingParty")', function() {
      // uncomment below and update the code to test the property sellingParty
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property shipFromParty (base name: "shipFromParty")', function() {
      // uncomment below and update the code to test the property shipFromParty
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property shipToParty (base name: "shipToParty")', function() {
      // uncomment below and update the code to test the property shipToParty
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property billToParty (base name: "billToParty")', function() {
      // uncomment below and update the code to test the property billToParty
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
      //expect(instance).to.be();
    });

  });

}));