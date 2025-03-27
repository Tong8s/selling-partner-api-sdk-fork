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
    instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
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

  describe('Invoice', function() {
    it('should create an instance of Invoice', function() {
      // uncomment below and update the code to test Invoice
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.Invoice);
    });

    it('should have the property invoiceType (base name: "invoiceType")', function() {
      // uncomment below and update the code to test the property invoiceType
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property remitToParty (base name: "remitToParty")', function() {
      // uncomment below and update the code to test the property remitToParty
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property shipToParty (base name: "shipToParty")', function() {
      // uncomment below and update the code to test the property shipToParty
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property shipFromParty (base name: "shipFromParty")', function() {
      // uncomment below and update the code to test the property shipFromParty
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property billToParty (base name: "billToParty")', function() {
      // uncomment below and update the code to test the property billToParty
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property paymentTerms (base name: "paymentTerms")', function() {
      // uncomment below and update the code to test the property paymentTerms
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property invoiceTotal (base name: "invoiceTotal")', function() {
      // uncomment below and update the code to test the property invoiceTotal
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property taxDetails (base name: "taxDetails")', function() {
      // uncomment below and update the code to test the property taxDetails
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property additionalDetails (base name: "additionalDetails")', function() {
      // uncomment below and update the code to test the property additionalDetails
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property chargeDetails (base name: "chargeDetails")', function() {
      // uncomment below and update the code to test the property chargeDetails
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property allowanceDetails (base name: "allowanceDetails")', function() {
      // uncomment below and update the code to test the property allowanceDetails
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
      //expect(instance).to.be();
    });

  });

}));
