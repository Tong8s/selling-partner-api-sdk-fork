/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
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
    factory(root.expect, root.SellingPartnerApiForEasyShip);
  }
}(this, function(expect, SellingPartnerApiForEasyShip) {
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

  describe('CreateScheduledPackagesRequest', function() {
    it('should create an instance of CreateScheduledPackagesRequest', function() {
      // uncomment below and update the code to test CreateScheduledPackagesRequest
      //var instance = new SellingPartnerApiForEasyShip.CreateScheduledPackagesRequest();
      //expect(instance).to.be.a(SellingPartnerApiForEasyShip.CreateScheduledPackagesRequest);
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForEasyShip.CreateScheduledPackagesRequest();
      //expect(instance).to.be();
    });

    it('should have the property orderScheduleDetailsList (base name: "orderScheduleDetailsList")', function() {
      // uncomment below and update the code to test the property orderScheduleDetailsList
      //var instance = new SellingPartnerApiForEasyShip.CreateScheduledPackagesRequest();
      //expect(instance).to.be();
    });

    it('should have the property labelFormat (base name: "labelFormat")', function() {
      // uncomment below and update the code to test the property labelFormat
      //var instance = new SellingPartnerApiForEasyShip.CreateScheduledPackagesRequest();
      //expect(instance).to.be();
    });

  });

}));