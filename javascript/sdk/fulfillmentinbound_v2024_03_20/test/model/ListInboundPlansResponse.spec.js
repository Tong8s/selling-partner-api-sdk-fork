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

  describe('ListInboundPlansResponse', function() {
    it('should create an instance of ListInboundPlansResponse', function() {
      // uncomment below and update the code to test ListInboundPlansResponse
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.ListInboundPlansResponse();
      //expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.ListInboundPlansResponse);
    });

    it('should have the property inboundPlans (base name: "inboundPlans")', function() {
      // uncomment below and update the code to test the property inboundPlans
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.ListInboundPlansResponse();
      //expect(instance).to.be();
    });

    it('should have the property pagination (base name: "pagination")', function() {
      // uncomment below and update the code to test the property pagination
      //var instance = new TheSellingPartnerApiForFbaInboundOperations.ListInboundPlansResponse();
      //expect(instance).to.be();
    });

  });

}));