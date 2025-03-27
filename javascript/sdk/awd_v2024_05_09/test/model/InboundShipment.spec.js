/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
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
    factory(root.expect, root.TheSellingPartnerApiForAmazonWarehousingAndDistribution);
  }
}(this, function(expect, TheSellingPartnerApiForAmazonWarehousingAndDistribution) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
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

  describe('InboundShipment', function() {
    it('should create an instance of InboundShipment', function() {
      // uncomment below and update the code to test InboundShipment
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment);
    });

    it('should have the property carrierCode (base name: "carrierCode")', function() {
      // uncomment below and update the code to test the property carrierCode
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property destinationAddress (base name: "destinationAddress")', function() {
      // uncomment below and update the code to test the property destinationAddress
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property externalReferenceId (base name: "externalReferenceId")', function() {
      // uncomment below and update the code to test the property externalReferenceId
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "orderId")', function() {
      // uncomment below and update the code to test the property orderId
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property originAddress (base name: "originAddress")', function() {
      // uncomment below and update the code to test the property originAddress
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property receivedQuantity (base name: "receivedQuantity")', function() {
      // uncomment below and update the code to test the property receivedQuantity
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property shipBy (base name: "shipBy")', function() {
      // uncomment below and update the code to test the property shipBy
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property shipmentContainerQuantities (base name: "shipmentContainerQuantities")', function() {
      // uncomment below and update the code to test the property shipmentContainerQuantities
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property shipmentId (base name: "shipmentId")', function() {
      // uncomment below and update the code to test the property shipmentId
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property shipmentSkuQuantities (base name: "shipmentSkuQuantities")', function() {
      // uncomment below and update the code to test the property shipmentSkuQuantities
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property destinationRegion (base name: "destinationRegion")', function() {
      // uncomment below and update the code to test the property destinationRegion
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property shipmentStatus (base name: "shipmentStatus")', function() {
      // uncomment below and update the code to test the property shipmentStatus
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property trackingId (base name: "trackingId")', function() {
      // uncomment below and update the code to test the property trackingId
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

    it('should have the property warehouseReferenceId (base name: "warehouseReferenceId")', function() {
      // uncomment below and update the code to test the property warehouseReferenceId
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment();
      //expect(instance).to.be();
    });

  });

}));
