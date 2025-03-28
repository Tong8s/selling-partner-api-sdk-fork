/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
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
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheSellingPartnerApiForFbaInboundOperations.PlacementOption();
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

  describe('PlacementOption', function() {
    it('should create an instance of PlacementOption', function() {
      // uncomment below and update the code to test PlacementOption
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.PlacementOption();
      //expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.PlacementOption);
    });

    it('should have the property discounts (base name: "discounts")', function() {
      // uncomment below and update the code to test the property discounts
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.PlacementOption();
      //expect(instance).to.be();
    });

    it('should have the property expiration (base name: "expiration")', function() {
      // uncomment below and update the code to test the property expiration
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.PlacementOption();
      //expect(instance).to.be();
    });

    it('should have the property fees (base name: "fees")', function() {
      // uncomment below and update the code to test the property fees
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.PlacementOption();
      //expect(instance).to.be();
    });

    it('should have the property placementOptionId (base name: "placementOptionId")', function() {
      // uncomment below and update the code to test the property placementOptionId
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.PlacementOption();
      //expect(instance).to.be();
    });

    it('should have the property shipmentIds (base name: "shipmentIds")', function() {
      // uncomment below and update the code to test the property shipmentIds
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.PlacementOption();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.PlacementOption();
      //expect(instance).to.be();
    });

  });

}));
