/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
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
    factory(root.expect, root.SellingPartnerApisForFulfillmentOutbound);
  }
}(this, function(expect, SellingPartnerApisForFulfillmentOutbound) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
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

  describe('FulfillmentShipment', function() {
    it('should create an instance of FulfillmentShipment', function() {
      // uncomment below and update the code to test FulfillmentShipment
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
      //expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment);
    });

    it('should have the property amazonShipmentId (base name: "amazonShipmentId")', function() {
      // uncomment below and update the code to test the property amazonShipmentId
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentCenterId (base name: "fulfillmentCenterId")', function() {
      // uncomment below and update the code to test the property fulfillmentCenterId
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentShipmentStatus (base name: "fulfillmentShipmentStatus")', function() {
      // uncomment below and update the code to test the property fulfillmentShipmentStatus
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
      //expect(instance).to.be();
    });

    it('should have the property shippingDate (base name: "shippingDate")', function() {
      // uncomment below and update the code to test the property shippingDate
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
      //expect(instance).to.be();
    });

    it('should have the property estimatedArrivalDate (base name: "estimatedArrivalDate")', function() {
      // uncomment below and update the code to test the property estimatedArrivalDate
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
      //expect(instance).to.be();
    });

    it('should have the property shippingNotes (base name: "shippingNotes")', function() {
      // uncomment below and update the code to test the property shippingNotes
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentShipmentItem (base name: "fulfillmentShipmentItem")', function() {
      // uncomment below and update the code to test the property fulfillmentShipmentItem
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentShipmentPackage (base name: "fulfillmentShipmentPackage")', function() {
      // uncomment below and update the code to test the property fulfillmentShipmentPackage
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
      //expect(instance).to.be();
    });

  });

}));
