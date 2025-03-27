/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
    factory(root.expect, root.SellingPartnerApiForOrders);
  }
}(this, function(expect, SellingPartnerApiForOrders) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForOrders.PointsGrantedDetail();
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

  describe('PointsGrantedDetail', function() {
    it('should create an instance of PointsGrantedDetail', function() {
      // uncomment below and update the code to test PointsGrantedDetail
      //var instance = new SellingPartnerApiForOrders.PointsGrantedDetail();
      //expect(instance).to.be.a(SellingPartnerApiForOrders.PointsGrantedDetail);
    });

    it('should have the property pointsNumber (base name: "PointsNumber")', function() {
      // uncomment below and update the code to test the property pointsNumber
      //var instance = new SellingPartnerApiForOrders.PointsGrantedDetail();
      //expect(instance).to.be();
    });

    it('should have the property pointsMonetaryValue (base name: "PointsMonetaryValue")', function() {
      // uncomment below and update the code to test the property pointsMonetaryValue
      //var instance = new SellingPartnerApiForOrders.PointsGrantedDetail();
      //expect(instance).to.be();
    });

  });

}));
