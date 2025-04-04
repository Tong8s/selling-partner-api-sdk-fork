/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
    define(['expect.js', 'sinon', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('sinon'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.sinon, root.SellingPartnerApiForRetailProcurementShipments);
  }
}(this, function(expect, sinon, SellingPartnerApiForRetailProcurementShipments) {
  'use strict';

  var instance;
  var sandbox;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

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
          const ModelClass = SellingPartnerApiForRetailProcurementShipments[dataType];
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
  

// Generate mock requests and responses for each operation
const mockgetShipmentDetailsData = {
  request: {
  },
  response: {
    data: generateMockData('GetShipmentDetailsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetShipmentLabelsData = {
  request: {
  },
  response: {
    data: generateMockData('GetShipmentLabels'),
    statusCode: 200,
    headers: {}
  }
};
const mocksubmitShipmentConfirmationsData = {
  request: {
    'body': generateMockData('SubmitShipmentConfirmationsRequest')
  },
  response: {
    data: generateMockData('SubmitShipmentConfirmationsResponse'),
    statusCode: 202,
    headers: {}
  }
};
const mocksubmitShipmentsData = {
  request: {
    'body': generateMockData('SubmitShipments')
  },
  response: {
    data: generateMockData('SubmitShipmentConfirmationsResponse'),
    statusCode: 202,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForRetailProcurementShipments.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('VendorShippingApi', function() {
    describe('getShipmentDetails', function() {
      
      it('should successfully call getShipmentDetails', function(done) {
        instance.apiClient.callApi.resolves(mockgetShipmentDetailsData.response);

        const params = [
        ];
        instance.getShipmentDetails(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForRetailProcurementShipments.GetShipmentDetailsResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getShipmentDetailsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetShipmentDetailsData.response);

        const params = [
        ];
        instance.getShipmentDetailsWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetShipmentDetailsData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
        ];
        instance.getShipmentDetails(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });
    describe('getShipmentLabels', function() {
      
      it('should successfully call getShipmentLabels', function(done) {
        instance.apiClient.callApi.resolves(mockgetShipmentLabelsData.response);

        const params = [
        ];
        instance.getShipmentLabels(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForRetailProcurementShipments.GetShipmentLabels).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getShipmentLabelsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetShipmentLabelsData.response);

        const params = [
        ];
        instance.getShipmentLabelsWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetShipmentLabelsData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
        ];
        instance.getShipmentLabels(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });
    describe('submitShipmentConfirmations', function() {
      
      it('should successfully call submitShipmentConfirmations', function(done) {
        instance.apiClient.callApi.resolves(mocksubmitShipmentConfirmationsData.response);

        const params = [
          mocksubmitShipmentConfirmationsData.request['body']
        ];
        instance.submitShipmentConfirmations(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForRetailProcurementShipments.SubmitShipmentConfirmationsResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call submitShipmentConfirmationsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mocksubmitShipmentConfirmationsData.response);

        const params = [
          mocksubmitShipmentConfirmationsData.request['body']
        ];
        instance.submitShipmentConfirmationsWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mocksubmitShipmentConfirmationsData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
          mocksubmitShipmentConfirmationsData.request['body']
        ];
        instance.submitShipmentConfirmations(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });
    describe('submitShipments', function() {
      
      it('should successfully call submitShipments', function(done) {
        instance.apiClient.callApi.resolves(mocksubmitShipmentsData.response);

        const params = [
          mocksubmitShipmentsData.request['body']
        ];
        instance.submitShipments(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForRetailProcurementShipments.SubmitShipmentConfirmationsResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call submitShipmentsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mocksubmitShipmentsData.response);

        const params = [
          mocksubmitShipmentsData.request['body']
        ];
        instance.submitShipmentsWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mocksubmitShipmentsData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
          mocksubmitShipmentsData.request['body']
        ];
        instance.submitShipments(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });

    describe('constructor', function() {
      it('should use default ApiClient when none provided', function() {
        var defaultInstance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForRetailProcurementShipments.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForRetailProcurementShipments.ApiClient();
        var customInstance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
