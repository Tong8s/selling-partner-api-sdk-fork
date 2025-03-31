/**
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2021-06-30
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
    factory(root.expect, root.SellingPartnerApiForReports);
  }
}(this, function(expect, SellingPartnerApiForReports) {
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

  describe('Report', function() {
    it('should create an instance of Report', function() {
      // uncomment below and update the code to test Report
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be.a(SellingPartnerApiForReports.Report);
    });

    it('should have the property marketplaceIds (base name: "marketplaceIds")', function() {
      // uncomment below and update the code to test the property marketplaceIds
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

    it('should have the property reportId (base name: "reportId")', function() {
      // uncomment below and update the code to test the property reportId
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

    it('should have the property reportType (base name: "reportType")', function() {
      // uncomment below and update the code to test the property reportType
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

    it('should have the property dataStartTime (base name: "dataStartTime")', function() {
      // uncomment below and update the code to test the property dataStartTime
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

    it('should have the property dataEndTime (base name: "dataEndTime")', function() {
      // uncomment below and update the code to test the property dataEndTime
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

    it('should have the property reportScheduleId (base name: "reportScheduleId")', function() {
      // uncomment below and update the code to test the property reportScheduleId
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "createdTime")', function() {
      // uncomment below and update the code to test the property createdTime
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

    it('should have the property processingStatus (base name: "processingStatus")', function() {
      // uncomment below and update the code to test the property processingStatus
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

    it('should have the property processingStartTime (base name: "processingStartTime")', function() {
      // uncomment below and update the code to test the property processingStartTime
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

    it('should have the property processingEndTime (base name: "processingEndTime")', function() {
      // uncomment below and update the code to test the property processingEndTime
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

    it('should have the property reportDocumentId (base name: "reportDocumentId")', function() {
      // uncomment below and update the code to test the property reportDocumentId
      //var instance = new SellingPartnerApiForReports.Report();
      //expect(instance).to.be();
    });

  });

}));