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
    instance = new SellingPartnerApiForRetailProcurementPayments.CreditNoteDetails();
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

  describe('CreditNoteDetails', function() {
    it('should create an instance of CreditNoteDetails', function() {
      // uncomment below and update the code to test CreditNoteDetails
      //var instance = new SellingPartnerApiForRetailProcurementPayments.CreditNoteDetails();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.CreditNoteDetails);
    });

    it('should have the property referenceInvoiceNumber (base name: "referenceInvoiceNumber")', function() {
      // uncomment below and update the code to test the property referenceInvoiceNumber
      //var instance = new SellingPartnerApiForRetailProcurementPayments.CreditNoteDetails();
      //expect(instance).to.be();
    });

    it('should have the property debitNoteNumber (base name: "debitNoteNumber")', function() {
      // uncomment below and update the code to test the property debitNoteNumber
      //var instance = new SellingPartnerApiForRetailProcurementPayments.CreditNoteDetails();
      //expect(instance).to.be();
    });

    it('should have the property returnsReferenceNumber (base name: "returnsReferenceNumber")', function() {
      // uncomment below and update the code to test the property returnsReferenceNumber
      //var instance = new SellingPartnerApiForRetailProcurementPayments.CreditNoteDetails();
      //expect(instance).to.be();
    });

    it('should have the property goodsReturnDate (base name: "goodsReturnDate")', function() {
      // uncomment below and update the code to test the property goodsReturnDate
      //var instance = new SellingPartnerApiForRetailProcurementPayments.CreditNoteDetails();
      //expect(instance).to.be();
    });

    it('should have the property rmaId (base name: "rmaId")', function() {
      // uncomment below and update the code to test the property rmaId
      //var instance = new SellingPartnerApiForRetailProcurementPayments.CreditNoteDetails();
      //expect(instance).to.be();
    });

    it('should have the property coopReferenceNumber (base name: "coopReferenceNumber")', function() {
      // uncomment below and update the code to test the property coopReferenceNumber
      //var instance = new SellingPartnerApiForRetailProcurementPayments.CreditNoteDetails();
      //expect(instance).to.be();
    });

    it('should have the property consignorsReferenceNumber (base name: "consignorsReferenceNumber")', function() {
      // uncomment below and update the code to test the property consignorsReferenceNumber
      //var instance = new SellingPartnerApiForRetailProcurementPayments.CreditNoteDetails();
      //expect(instance).to.be();
    });

  });

}));
