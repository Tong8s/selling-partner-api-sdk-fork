/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
    factory(root.expect, root.SellingPartnerApiForRetailProcurementOrders);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementOrders) {
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

  describe('ItemQuantity', function() {
    it('should create an instance of ItemQuantity', function() {
      // uncomment below and update the code to test ItemQuantity
      //var instance = new SellingPartnerApiForRetailProcurementOrders.ItemQuantity();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.ItemQuantity);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new SellingPartnerApiForRetailProcurementOrders.ItemQuantity();
      //expect(instance).to.be();
    });

    it('should have the property unitOfMeasure (base name: "unitOfMeasure")', function() {
      // uncomment below and update the code to test the property unitOfMeasure
      //var instance = new SellingPartnerApiForRetailProcurementOrders.ItemQuantity();
      //expect(instance).to.be();
    });

    it('should have the property unitSize (base name: "unitSize")', function() {
      // uncomment below and update the code to test the property unitSize
      //var instance = new SellingPartnerApiForRetailProcurementOrders.ItemQuantity();
      //expect(instance).to.be();
    });

  });

}));