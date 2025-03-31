/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
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
    factory(root.expect, root.sinon, root.SellingPartnerApiForReplenishment);
  }
}(this, function(expect, sinon, SellingPartnerApiForReplenishment) {
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
          const ModelClass = SellingPartnerApiForReplenishment[dataType];
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
const mocklistOfferMetricsData = {
  request: {
  },
  response: {
    data: generateMockData('ListOfferMetricsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mocklistOffersData = {
  request: {
  },
  response: {
    data: generateMockData('ListOffersResponse'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForReplenishment.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForReplenishment.OffersApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('OffersApi', function() {
    describe('listOfferMetrics', function() {
      
      it('should successfully call listOfferMetrics', function(done) {
        instance.apiClient.callApi.resolves(mocklistOfferMetricsData.response);

        const params = [
        ];
        instance.listOfferMetrics(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForReplenishment.ListOfferMetricsResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call listOfferMetricsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mocklistOfferMetricsData.response);

        const params = [
        ];
        instance.listOfferMetricsWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mocklistOfferMetricsData.response.statusCode)
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
        instance.listOfferMetrics(...params)
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
    describe('listOffers', function() {
      
      it('should successfully call listOffers', function(done) {
        instance.apiClient.callApi.resolves(mocklistOffersData.response);

        const params = [
        ];
        instance.listOffers(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForReplenishment.ListOffersResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call listOffersWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mocklistOffersData.response);

        const params = [
        ];
        instance.listOffersWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mocklistOffersData.response.statusCode)
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
        instance.listOffers(...params)
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
        var defaultInstance = new SellingPartnerApiForReplenishment.OffersApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForReplenishment.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForReplenishment.ApiClient();
        var customInstance = new SellingPartnerApiForReplenishment.OffersApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
