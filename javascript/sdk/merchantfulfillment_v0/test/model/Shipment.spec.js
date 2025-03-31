/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
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
    factory(root.expect, root.SellingPartnerApiForMerchantFulfillment);
  }
}(this, function(expect, SellingPartnerApiForMerchantFulfillment) {
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

  describe('Shipment', function() {
    it('should create an instance of Shipment', function() {
      // uncomment below and update the code to test Shipment
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.Shipment);
    });

    it('should have the property shipmentId (base name: "ShipmentId")', function() {
      // uncomment below and update the code to test the property shipmentId
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
      // uncomment below and update the code to test the property amazonOrderId
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property sellerOrderId (base name: "SellerOrderId")', function() {
      // uncomment below and update the code to test the property sellerOrderId
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property itemList (base name: "ItemList")', function() {
      // uncomment below and update the code to test the property itemList
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property shipFromAddress (base name: "ShipFromAddress")', function() {
      // uncomment below and update the code to test the property shipFromAddress
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property shipToAddress (base name: "ShipToAddress")', function() {
      // uncomment below and update the code to test the property shipToAddress
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property packageDimensions (base name: "PackageDimensions")', function() {
      // uncomment below and update the code to test the property packageDimensions
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "Weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property insurance (base name: "Insurance")', function() {
      // uncomment below and update the code to test the property insurance
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property shippingService (base name: "ShippingService")', function() {
      // uncomment below and update the code to test the property shippingService
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "Label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property trackingId (base name: "TrackingId")', function() {
      // uncomment below and update the code to test the property trackingId
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "CreatedDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedDate (base name: "LastUpdatedDate")', function() {
      // uncomment below and update the code to test the property lastUpdatedDate
      //var instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      //expect(instance).to.be();
    });

  });

}));