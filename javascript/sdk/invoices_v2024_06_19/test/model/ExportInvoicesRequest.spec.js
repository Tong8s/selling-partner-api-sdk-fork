/**
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * The version of the OpenAPI document: 2024-06-19
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
    factory(root.expect, root.TheSellingPartnerApiForInvoices);
  }
}(this, function(expect, TheSellingPartnerApiForInvoices) {
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

  describe('ExportInvoicesRequest', function() {
    it('should create an instance of ExportInvoicesRequest', function() {
      // uncomment below and update the code to test ExportInvoicesRequest
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be.a(TheSellingPartnerApiForInvoices.ExportInvoicesRequest);
    });

    it('should have the property dateEnd (base name: "dateEnd")', function() {
      // uncomment below and update the code to test the property dateEnd
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateStart (base name: "dateStart")', function() {
      // uncomment below and update the code to test the property dateStart
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be();
    });

    it('should have the property externalInvoiceId (base name: "externalInvoiceId")', function() {
      // uncomment below and update the code to test the property externalInvoiceId
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be();
    });

    it('should have the property fileFormat (base name: "fileFormat")', function() {
      // uncomment below and update the code to test the property fileFormat
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be();
    });

    it('should have the property invoiceType (base name: "invoiceType")', function() {
      // uncomment below and update the code to test the property invoiceType
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be();
    });

    it('should have the property series (base name: "series")', function() {
      // uncomment below and update the code to test the property series
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be();
    });

    it('should have the property statuses (base name: "statuses")', function() {
      // uncomment below and update the code to test the property statuses
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be();
    });

    it('should have the property transactionIdentifier (base name: "transactionIdentifier")', function() {
      // uncomment below and update the code to test the property transactionIdentifier
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instance = new TheSellingPartnerApiForInvoices.ExportInvoicesRequest();
      //expect(instance).to.be();
    });

  });

}));