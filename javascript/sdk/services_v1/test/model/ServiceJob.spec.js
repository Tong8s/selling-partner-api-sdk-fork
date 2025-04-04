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
    try{
     instance = new SellingPartnerApiForServices.ServiceJob();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForServices.ServiceJob.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ServiceJob', function() {
    it('should create an instance of ServiceJob', function() {
      expect(instance).to.be.a(SellingPartnerApiForServices.ServiceJob);
    });

    it('should have the property createTime', function() {
      // verify property exists
      expect(instance).to.have.property('createTime');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.createTime = expectedValue;
      expect(instance.createTime).to.equal(expectedValue);
    });

    it('should have the property serviceJobId', function() {
      // verify property exists
      expect(instance).to.have.property('serviceJobId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.serviceJobId = expectedValue;
      expect(instance.serviceJobId).to.equal(expectedValue);
    });

    it('should have the property serviceJobStatus', function() {
      // verify property exists
      expect(instance).to.have.property('serviceJobStatus');

      // set and verify value
      var expectedValue = ['NOT_SERVICED', 'CANCELLED', 'COMPLETED', 'PENDING_SCHEDULE', 'NOT_FULFILLABLE', 'HOLD', 'PAYMENT_DECLINED', ][0];
      instance.serviceJobStatus = expectedValue;
      expect(instance.serviceJobStatus).to.equal(expectedValue);
    });

    it('should have the property scopeOfWork', function() {
      // verify property exists
      expect(instance).to.have.property('scopeOfWork');

      // set and verify value
      var expectedValue = generateMockData('ScopeOfWork');
      instance.scopeOfWork = expectedValue;
      expect(instance.scopeOfWork).to.equal(expectedValue);
    });

    it('should have the property seller', function() {
      // verify property exists
      expect(instance).to.have.property('seller');

      // set and verify value
      var expectedValue = generateMockData('Seller');
      instance.seller = expectedValue;
      expect(instance.seller).to.equal(expectedValue);
    });

    it('should have the property serviceJobProvider', function() {
      // verify property exists
      expect(instance).to.have.property('serviceJobProvider');

      // set and verify value
      var expectedValue = generateMockData('ServiceJobProvider');
      instance.serviceJobProvider = expectedValue;
      expect(instance.serviceJobProvider).to.equal(expectedValue);
    });

    it('should have the property preferredAppointmentTimes', function() {
      // verify property exists
      expect(instance).to.have.property('preferredAppointmentTimes');

      // set and verify value
      var expectedValue = generateMockData('AppointmentTime', true);
      instance.preferredAppointmentTimes = expectedValue;
      expect(instance.preferredAppointmentTimes).to.equal(expectedValue);
    });

    it('should have the property appointments', function() {
      // verify property exists
      expect(instance).to.have.property('appointments');

      // set and verify value
      var expectedValue = generateMockData('Appointment', true);
      instance.appointments = expectedValue;
      expect(instance.appointments).to.equal(expectedValue);
    });

    it('should have the property serviceOrderId', function() {
      // verify property exists
      expect(instance).to.have.property('serviceOrderId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.serviceOrderId = expectedValue;
      expect(instance.serviceOrderId).to.equal(expectedValue);
    });

    it('should have the property marketplaceId', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.marketplaceId = expectedValue;
      expect(instance.marketplaceId).to.equal(expectedValue);
    });

    it('should have the property storeId', function() {
      // verify property exists
      expect(instance).to.have.property('storeId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.storeId = expectedValue;
      expect(instance.storeId).to.equal(expectedValue);
    });

    it('should have the property buyer', function() {
      // verify property exists
      expect(instance).to.have.property('buyer');

      // set and verify value
      var expectedValue = generateMockData('Buyer');
      instance.buyer = expectedValue;
      expect(instance.buyer).to.equal(expectedValue);
    });

    it('should have the property associatedItems', function() {
      // verify property exists
      expect(instance).to.have.property('associatedItems');

      // set and verify value
      var expectedValue = generateMockData('AssociatedItem', true);
      instance.associatedItems = expectedValue;
      expect(instance.associatedItems).to.equal(expectedValue);
    });

    it('should have the property serviceLocation', function() {
      // verify property exists
      expect(instance).to.have.property('serviceLocation');

      // set and verify value
      var expectedValue = generateMockData('ServiceLocation');
      instance.serviceLocation = expectedValue;
      expect(instance.serviceLocation).to.equal(expectedValue);
    });

  });

  // Helper function to generate random test data
  function generateMockData(dataType, isArray = false) {
    if (!dataType) return {};

    // Handle array types
    if (isArray) {
      return [generateMockData(dataType), generateMockData(dataType)];
    }

    switch(dataType) {
      case 'String':
        return 'mock-' + Math.random().toString(36).substring(2, 10);
      case 'Number':
        return Math.floor(Math.random() * 1000);
      case 'Boolean':
        return Math.random() > 0.5;
      case 'Date':
        return new Date().toISOString();
      default:
        try {
          const ModelClass = SellingPartnerApiForServices[dataType];
          if (ModelClass) {
            const instance = Object.create(ModelClass.prototype);
            return instance;
          }
        } catch (e) {
          console.error("Error creating instance of", dataType);
          return {};
        }
        return {};
    }
  }

}));
