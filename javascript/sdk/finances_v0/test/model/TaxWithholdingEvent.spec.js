/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
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

  describe('TaxWithholdingEvent', function() {
    it('should create an instance of TaxWithholdingEvent', function() {
      // uncomment below and update the code to test TaxWithholdingEvent
      //var instance = new SellingPartnerApiForFinances.TaxWithholdingEvent();
      //expect(instance).to.be.a(SellingPartnerApiForFinances.TaxWithholdingEvent);
    });

    it('should have the property postedDate (base name: "PostedDate")', function() {
      // uncomment below and update the code to test the property postedDate
      //var instance = new SellingPartnerApiForFinances.TaxWithholdingEvent();
      //expect(instance).to.be();
    });

    it('should have the property baseAmount (base name: "BaseAmount")', function() {
      // uncomment below and update the code to test the property baseAmount
      //var instance = new SellingPartnerApiForFinances.TaxWithholdingEvent();
      //expect(instance).to.be();
    });

    it('should have the property withheldAmount (base name: "WithheldAmount")', function() {
      // uncomment below and update the code to test the property withheldAmount
      //var instance = new SellingPartnerApiForFinances.TaxWithholdingEvent();
      //expect(instance).to.be();
    });

    it('should have the property taxWithholdingPeriod (base name: "TaxWithholdingPeriod")', function() {
      // uncomment below and update the code to test the property taxWithholdingPeriod
      //var instance = new SellingPartnerApiForFinances.TaxWithholdingEvent();
      //expect(instance).to.be();
    });

  });

}));