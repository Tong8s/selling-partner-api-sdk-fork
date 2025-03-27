/**
 * Selling Partner API for FBA Inbound Eligibilty
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon's fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon's fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon's fulfillment centers.
 *
 * The version of the OpenAPI document: v1
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
    factory(root.expect, root.SellingPartnerApiForFbaInboundEligibilty);
  }
}(this, function(expect, SellingPartnerApiForFbaInboundEligibilty) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview();
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

  describe('ItemEligibilityPreview', function() {
    it('should create an instance of ItemEligibilityPreview', function() {
      // uncomment below and update the code to test ItemEligibilityPreview
      //var instance = new SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview();
      //expect(instance).to.be.a(SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview);
    });

    it('should have the property asin (base name: "asin")', function() {
      // uncomment below and update the code to test the property asin
      //var instance = new SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview();
      //expect(instance).to.be();
    });

    it('should have the property program (base name: "program")', function() {
      // uncomment below and update the code to test the property program
      //var instance = new SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview();
      //expect(instance).to.be();
    });

    it('should have the property isEligibleForProgram (base name: "isEligibleForProgram")', function() {
      // uncomment below and update the code to test the property isEligibleForProgram
      //var instance = new SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview();
      //expect(instance).to.be();
    });

    it('should have the property ineligibilityReasonList (base name: "ineligibilityReasonList")', function() {
      // uncomment below and update the code to test the property ineligibilityReasonList
      //var instance = new SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview();
      //expect(instance).to.be();
    });

  });

}));
