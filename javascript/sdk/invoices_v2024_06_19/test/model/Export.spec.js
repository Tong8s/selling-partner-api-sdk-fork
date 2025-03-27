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
    instance = new TheSellingPartnerApiForInvoices.Export();
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

  describe('Export', function() {
    it('should create an instance of Export', function() {
      // uncomment below and update the code to test Export
      //var instance = new TheSellingPartnerApiForInvoices.Export();
      //expect(instance).to.be.a(TheSellingPartnerApiForInvoices.Export);
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instance = new TheSellingPartnerApiForInvoices.Export();
      //expect(instance).to.be();
    });

    it('should have the property exportId (base name: "exportId")', function() {
      // uncomment below and update the code to test the property exportId
      //var instance = new TheSellingPartnerApiForInvoices.Export();
      //expect(instance).to.be();
    });

    it('should have the property generateExportFinishedAt (base name: "generateExportFinishedAt")', function() {
      // uncomment below and update the code to test the property generateExportFinishedAt
      //var instance = new TheSellingPartnerApiForInvoices.Export();
      //expect(instance).to.be();
    });

    it('should have the property generateExportStartedAt (base name: "generateExportStartedAt")', function() {
      // uncomment below and update the code to test the property generateExportStartedAt
      //var instance = new TheSellingPartnerApiForInvoices.Export();
      //expect(instance).to.be();
    });

    it('should have the property invoicesDocumentIds (base name: "invoicesDocumentIds")', function() {
      // uncomment below and update the code to test the property invoicesDocumentIds
      //var instance = new TheSellingPartnerApiForInvoices.Export();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new TheSellingPartnerApiForInvoices.Export();
      //expect(instance).to.be();
    });

  });

}));
