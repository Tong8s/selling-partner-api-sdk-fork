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
    instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
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

  describe('InboundPlan', function() {
    it('should create an instance of InboundPlan', function() {
      // uncomment below and update the code to test InboundPlan
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.InboundPlan);
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be();
    });

    it('should have the property inboundPlanId (base name: "inboundPlanId")', function() {
      // uncomment below and update the code to test the property inboundPlanId
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedAt (base name: "lastUpdatedAt")', function() {
      // uncomment below and update the code to test the property lastUpdatedAt
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceIds (base name: "marketplaceIds")', function() {
      // uncomment below and update the code to test the property marketplaceIds
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be();
    });

    it('should have the property packingOptions (base name: "packingOptions")', function() {
      // uncomment below and update the code to test the property packingOptions
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be();
    });

    it('should have the property placementOptions (base name: "placementOptions")', function() {
      // uncomment below and update the code to test the property placementOptions
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be();
    });

    it('should have the property shipments (base name: "shipments")', function() {
      // uncomment below and update the code to test the property shipments
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be();
    });

    it('should have the property sourceAddress (base name: "sourceAddress")', function() {
      // uncomment below and update the code to test the property sourceAddress
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.InboundPlan();
      //expect(instance).to.be();
    });

  });

}));
