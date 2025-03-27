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
    instance = new SellingPartnerApiForFulfillmentInbound.ASINPrepInstructions();
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

  describe('ASINPrepInstructions', function() {
    it('should create an instance of ASINPrepInstructions', function() {
      // uncomment below and update the code to test ASINPrepInstructions
      //var instance = new SellingPartnerApiForFulfillmentInbound.ASINPrepInstructions();
      //expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.ASINPrepInstructions);
    });

    it('should have the property ASIN (base name: "ASIN")', function() {
      // uncomment below and update the code to test the property ASIN
      //var instance = new SellingPartnerApiForFulfillmentInbound.ASINPrepInstructions();
      //expect(instance).to.be();
    });

    it('should have the property barcodeInstruction (base name: "BarcodeInstruction")', function() {
      // uncomment below and update the code to test the property barcodeInstruction
      //var instance = new SellingPartnerApiForFulfillmentInbound.ASINPrepInstructions();
      //expect(instance).to.be();
    });

    it('should have the property prepGuidance (base name: "PrepGuidance")', function() {
      // uncomment below and update the code to test the property prepGuidance
      //var instance = new SellingPartnerApiForFulfillmentInbound.ASINPrepInstructions();
      //expect(instance).to.be();
    });

    it('should have the property prepInstructionList (base name: "PrepInstructionList")', function() {
      // uncomment below and update the code to test the property prepInstructionList
      //var instance = new SellingPartnerApiForFulfillmentInbound.ASINPrepInstructions();
      //expect(instance).to.be();
    });

  });

}));
