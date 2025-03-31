/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
    factory(root.expect, root.SellingPartnerApiForRetailProcurementPayments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementPayments) {
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

  describe('TaxDetails', function() {
    it('should create an instance of TaxDetails', function() {
      // uncomment below and update the code to test TaxDetails
      //var instance = new SellingPartnerApiForRetailProcurementPayments.TaxDetails();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.TaxDetails);
    });

    it('should have the property taxType (base name: "taxType")', function() {
      // uncomment below and update the code to test the property taxType
      //var instance = new SellingPartnerApiForRetailProcurementPayments.TaxDetails();
      //expect(instance).to.be();
    });

    it('should have the property taxRate (base name: "taxRate")', function() {
      // uncomment below and update the code to test the property taxRate
      //var instance = new SellingPartnerApiForRetailProcurementPayments.TaxDetails();
      //expect(instance).to.be();
    });

    it('should have the property taxAmount (base name: "taxAmount")', function() {
      // uncomment below and update the code to test the property taxAmount
      //var instance = new SellingPartnerApiForRetailProcurementPayments.TaxDetails();
      //expect(instance).to.be();
    });

    it('should have the property taxableAmount (base name: "taxableAmount")', function() {
      // uncomment below and update the code to test the property taxableAmount
      //var instance = new SellingPartnerApiForRetailProcurementPayments.TaxDetails();
      //expect(instance).to.be();
    });

  });

}));