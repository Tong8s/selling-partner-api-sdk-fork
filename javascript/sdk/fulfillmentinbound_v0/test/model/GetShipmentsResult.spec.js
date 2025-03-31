/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
    factory(root.expect, root.SellingPartnerApiForFulfillmentInbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentInbound) {
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

  describe('GetShipmentsResult', function() {
    it('should create an instance of GetShipmentsResult', function() {
      // uncomment below and update the code to test GetShipmentsResult
      //var instance = new SellingPartnerApiForFulfillmentInbound.GetShipmentsResult();
      //expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.GetShipmentsResult);
    });

    it('should have the property shipmentData (base name: "ShipmentData")', function() {
      // uncomment below and update the code to test the property shipmentData
      //var instance = new SellingPartnerApiForFulfillmentInbound.GetShipmentsResult();
      //expect(instance).to.be();
    });

    it('should have the property nextToken (base name: "NextToken")', function() {
      // uncomment below and update the code to test the property nextToken
      //var instance = new SellingPartnerApiForFulfillmentInbound.GetShipmentsResult();
      //expect(instance).to.be();
    });

  });

}));