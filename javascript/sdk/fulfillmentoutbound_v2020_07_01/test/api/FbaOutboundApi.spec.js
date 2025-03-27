/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
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
    factory(root.expect, root.SellingPartnerApisForFulfillmentOutbound);
  }
}(this, function(expect, SellingPartnerApisForFulfillmentOutbound) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
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

  describe('FbaOutboundApi', function() {
    describe('cancelFulfillmentOrder', function() {
      it('should call cancelFulfillmentOrder successfully', function(done) {
        //uncomment below and update the code to test cancelFulfillmentOrder
        //instance.cancelFulfillmentOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFulfillmentOrder', function() {
      it('should call createFulfillmentOrder successfully', function(done) {
        //uncomment below and update the code to test createFulfillmentOrder
        //instance.createFulfillmentOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFulfillmentReturn', function() {
      it('should call createFulfillmentReturn successfully', function(done) {
        //uncomment below and update the code to test createFulfillmentReturn
        //instance.createFulfillmentReturn(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deliveryOffers', function() {
      it('should call deliveryOffers successfully', function(done) {
        //uncomment below and update the code to test deliveryOffers
        //instance.deliveryOffers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeatureInventory', function() {
      it('should call getFeatureInventory successfully', function(done) {
        //uncomment below and update the code to test getFeatureInventory
        //instance.getFeatureInventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeatureSKU', function() {
      it('should call getFeatureSKU successfully', function(done) {
        //uncomment below and update the code to test getFeatureSKU
        //instance.getFeatureSKU(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeatures', function() {
      it('should call getFeatures successfully', function(done) {
        //uncomment below and update the code to test getFeatures
        //instance.getFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentOrder', function() {
      it('should call getFulfillmentOrder successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentOrder
        //instance.getFulfillmentOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentPreview', function() {
      it('should call getFulfillmentPreview successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentPreview
        //instance.getFulfillmentPreview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPackageTrackingDetails', function() {
      it('should call getPackageTrackingDetails successfully', function(done) {
        //uncomment below and update the code to test getPackageTrackingDetails
        //instance.getPackageTrackingDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAllFulfillmentOrders', function() {
      it('should call listAllFulfillmentOrders successfully', function(done) {
        //uncomment below and update the code to test listAllFulfillmentOrders
        //instance.listAllFulfillmentOrders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listReturnReasonCodes', function() {
      it('should call listReturnReasonCodes successfully', function(done) {
        //uncomment below and update the code to test listReturnReasonCodes
        //instance.listReturnReasonCodes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitFulfillmentOrderStatusUpdate', function() {
      it('should call submitFulfillmentOrderStatusUpdate successfully', function(done) {
        //uncomment below and update the code to test submitFulfillmentOrderStatusUpdate
        //instance.submitFulfillmentOrderStatusUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFulfillmentOrder', function() {
      it('should call updateFulfillmentOrder successfully', function(done) {
        //uncomment below and update the code to test updateFulfillmentOrder
        //instance.updateFulfillmentOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
