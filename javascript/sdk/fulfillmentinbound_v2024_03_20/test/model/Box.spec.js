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

  describe('Box', function() {
    it('should create an instance of Box', function() {
      // uncomment below and update the code to test Box
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.Box);
    });

    it('should have the property boxId (base name: "boxId")', function() {
      // uncomment below and update the code to test the property boxId
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

    it('should have the property contentInformationSource (base name: "contentInformationSource")', function() {
      // uncomment below and update the code to test the property contentInformationSource
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

    it('should have the property destinationRegion (base name: "destinationRegion")', function() {
      // uncomment below and update the code to test the property destinationRegion
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

    it('should have the property dimensions (base name: "dimensions")', function() {
      // uncomment below and update the code to test the property dimensions
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

    it('should have the property externalContainerIdentifier (base name: "externalContainerIdentifier")', function() {
      // uncomment below and update the code to test the property externalContainerIdentifier
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

    it('should have the property externalContainerIdentifierType (base name: "externalContainerIdentifierType")', function() {
      // uncomment below and update the code to test the property externalContainerIdentifierType
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

    it('should have the property packageId (base name: "packageId")', function() {
      // uncomment below and update the code to test the property packageId
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

    it('should have the property templateName (base name: "templateName")', function() {
      // uncomment below and update the code to test the property templateName
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.Box();
      //expect(instance).to.be();
    });

  });

}));