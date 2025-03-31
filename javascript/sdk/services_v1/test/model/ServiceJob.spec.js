/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
    factory(root.expect, root.SellingPartnerApiForServices);
  }
}(this, function(expect, SellingPartnerApiForServices) {
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

  describe('ServiceJob', function() {
    it('should create an instance of ServiceJob', function() {
      // uncomment below and update the code to test ServiceJob
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be.a(SellingPartnerApiForServices.ServiceJob);
    });

    it('should have the property createTime (base name: "createTime")', function() {
      // uncomment below and update the code to test the property createTime
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property serviceJobId (base name: "serviceJobId")', function() {
      // uncomment below and update the code to test the property serviceJobId
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property serviceJobStatus (base name: "serviceJobStatus")', function() {
      // uncomment below and update the code to test the property serviceJobStatus
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property scopeOfWork (base name: "scopeOfWork")', function() {
      // uncomment below and update the code to test the property scopeOfWork
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property seller (base name: "seller")', function() {
      // uncomment below and update the code to test the property seller
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property serviceJobProvider (base name: "serviceJobProvider")', function() {
      // uncomment below and update the code to test the property serviceJobProvider
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property preferredAppointmentTimes (base name: "preferredAppointmentTimes")', function() {
      // uncomment below and update the code to test the property preferredAppointmentTimes
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property appointments (base name: "appointments")', function() {
      // uncomment below and update the code to test the property appointments
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property serviceOrderId (base name: "serviceOrderId")', function() {
      // uncomment below and update the code to test the property serviceOrderId
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "storeId")', function() {
      // uncomment below and update the code to test the property storeId
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property buyer (base name: "buyer")', function() {
      // uncomment below and update the code to test the property buyer
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property associatedItems (base name: "associatedItems")', function() {
      // uncomment below and update the code to test the property associatedItems
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

    it('should have the property serviceLocation (base name: "serviceLocation")', function() {
      // uncomment below and update the code to test the property serviceLocation
      //var instance = new SellingPartnerApiForServices.ServiceJob();
      //expect(instance).to.be();
    });

  });

}));