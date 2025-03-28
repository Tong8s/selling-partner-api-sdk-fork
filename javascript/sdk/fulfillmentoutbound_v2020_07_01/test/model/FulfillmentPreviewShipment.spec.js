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
    instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment();
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

  describe('FulfillmentPreviewShipment', function() {
    it('should create an instance of FulfillmentPreviewShipment', function() {
      // uncomment below and update the code to test FulfillmentPreviewShipment
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment();
      //expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment);
    });

    it('should have the property earliestShipDate (base name: "earliestShipDate")', function() {
      // uncomment below and update the code to test the property earliestShipDate
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment();
      //expect(instance).to.be();
    });

    it('should have the property latestShipDate (base name: "latestShipDate")', function() {
      // uncomment below and update the code to test the property latestShipDate
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment();
      //expect(instance).to.be();
    });

    it('should have the property earliestArrivalDate (base name: "earliestArrivalDate")', function() {
      // uncomment below and update the code to test the property earliestArrivalDate
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment();
      //expect(instance).to.be();
    });

    it('should have the property latestArrivalDate (base name: "latestArrivalDate")', function() {
      // uncomment below and update the code to test the property latestArrivalDate
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment();
      //expect(instance).to.be();
    });

    it('should have the property shippingNotes (base name: "shippingNotes")', function() {
      // uncomment below and update the code to test the property shippingNotes
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentPreviewItems (base name: "fulfillmentPreviewItems")', function() {
      // uncomment below and update the code to test the property fulfillmentPreviewItems
      //var instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment();
      //expect(instance).to.be();
    });

  });

}));
