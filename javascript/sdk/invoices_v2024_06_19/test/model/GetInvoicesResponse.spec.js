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

  describe('GetInvoicesResponse', function() {
    it('should create an instance of GetInvoicesResponse', function() {
      // uncomment below and update the code to test GetInvoicesResponse
      //var instance = new TheSellingPartnerApiForInvoices.GetInvoicesResponse();
      //expect(instance).to.be.a(TheSellingPartnerApiForInvoices.GetInvoicesResponse);
    });

    it('should have the property invoices (base name: "invoices")', function() {
      // uncomment below and update the code to test the property invoices
      //var instance = new TheSellingPartnerApiForInvoices.GetInvoicesResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextToken (base name: "nextToken")', function() {
      // uncomment below and update the code to test the property nextToken
      //var instance = new TheSellingPartnerApiForInvoices.GetInvoicesResponse();
      //expect(instance).to.be();
    });

  });

}));