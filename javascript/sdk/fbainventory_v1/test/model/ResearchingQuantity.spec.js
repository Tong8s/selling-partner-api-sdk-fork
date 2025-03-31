/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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
    factory(root.expect, root.SellingPartnerApiForFbaInventory);
  }
}(this, function(expect, SellingPartnerApiForFbaInventory) {
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

  describe('ResearchingQuantity', function() {
    it('should create an instance of ResearchingQuantity', function() {
      // uncomment below and update the code to test ResearchingQuantity
      //var instance = new SellingPartnerApiForFbaInventory.ResearchingQuantity();
      //expect(instance).to.be.a(SellingPartnerApiForFbaInventory.ResearchingQuantity);
    });

    it('should have the property totalResearchingQuantity (base name: "totalResearchingQuantity")', function() {
      // uncomment below and update the code to test the property totalResearchingQuantity
      //var instance = new SellingPartnerApiForFbaInventory.ResearchingQuantity();
      //expect(instance).to.be();
    });

    it('should have the property researchingQuantityBreakdown (base name: "researchingQuantityBreakdown")', function() {
      // uncomment below and update the code to test the property researchingQuantityBreakdown
      //var instance = new SellingPartnerApiForFbaInventory.ResearchingQuantity();
      //expect(instance).to.be();
    });

  });

}));