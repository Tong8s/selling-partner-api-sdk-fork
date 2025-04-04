/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
    define(['expect.js', 'sinon', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('sinon'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.sinon, root.SellingPartnerApiForPricing);
  }
}(this, function(expect, sinon, SellingPartnerApiForPricing) {
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
          const ModelClass = SellingPartnerApiForPricing[dataType];
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
const mockgetCompetitivePricingData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'itemType': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetPricingResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetItemOffersData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'itemCondition': generateMockData('String'),
    'asin': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetOffersResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetItemOffersBatchData = {
  request: {
    'getItemOffersBatchRequestBody': generateMockData('GetItemOffersBatchRequest')
  },
  response: {
    data: generateMockData('GetItemOffersBatchResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetListingOffersData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'itemCondition': generateMockData('String'),
    'sellerSKU': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetOffersResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetListingOffersBatchData = {
  request: {
    'getListingOffersBatchRequestBody': generateMockData('GetListingOffersBatchRequest')
  },
  response: {
    data: generateMockData('GetListingOffersBatchResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetPricingData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'itemType': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetPricingResponse'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForPricing.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForPricing.ProductPricingApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('ProductPricingApi', function() {
    describe('getCompetitivePricing', function() {
      
      it('should successfully call getCompetitivePricing', function(done) {
        instance.apiClient.callApi.resolves(mockgetCompetitivePricingData.response);

        const params = [
          mockgetCompetitivePricingData.request['marketplaceId'],
          mockgetCompetitivePricingData.request['itemType'],
        ];
        instance.getCompetitivePricing(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForPricing.GetPricingResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getCompetitivePricingWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetCompetitivePricingData.response);

        const params = [
          mockgetCompetitivePricingData.request['marketplaceId'],
          mockgetCompetitivePricingData.request['itemType'],
        ];
        instance.getCompetitivePricingWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetCompetitivePricingData.response.statusCode)
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
          mockgetCompetitivePricingData.request['marketplaceId'],
          mockgetCompetitivePricingData.request['itemType'],
        ];
        instance.getCompetitivePricing(...params)
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
    describe('getItemOffers', function() {
      
      it('should successfully call getItemOffers', function(done) {
        instance.apiClient.callApi.resolves(mockgetItemOffersData.response);

        const params = [
          mockgetItemOffersData.request['marketplaceId'],
          mockgetItemOffersData.request['itemCondition'],
          mockgetItemOffersData.request['asin'],
        ];
        instance.getItemOffers(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForPricing.GetOffersResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getItemOffersWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetItemOffersData.response);

        const params = [
          mockgetItemOffersData.request['marketplaceId'],
          mockgetItemOffersData.request['itemCondition'],
          mockgetItemOffersData.request['asin'],
        ];
        instance.getItemOffersWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetItemOffersData.response.statusCode)
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
          mockgetItemOffersData.request['marketplaceId'],
          mockgetItemOffersData.request['itemCondition'],
          mockgetItemOffersData.request['asin'],
        ];
        instance.getItemOffers(...params)
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
    describe('getItemOffersBatch', function() {
      
      it('should successfully call getItemOffersBatch', function(done) {
        instance.apiClient.callApi.resolves(mockgetItemOffersBatchData.response);

        const params = [
          mockgetItemOffersBatchData.request['getItemOffersBatchRequestBody']
        ];
        instance.getItemOffersBatch(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForPricing.GetItemOffersBatchResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getItemOffersBatchWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetItemOffersBatchData.response);

        const params = [
          mockgetItemOffersBatchData.request['getItemOffersBatchRequestBody']
        ];
        instance.getItemOffersBatchWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetItemOffersBatchData.response.statusCode)
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
          mockgetItemOffersBatchData.request['getItemOffersBatchRequestBody']
        ];
        instance.getItemOffersBatch(...params)
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
    describe('getListingOffers', function() {
      
      it('should successfully call getListingOffers', function(done) {
        instance.apiClient.callApi.resolves(mockgetListingOffersData.response);

        const params = [
          mockgetListingOffersData.request['marketplaceId'],
          mockgetListingOffersData.request['itemCondition'],
          mockgetListingOffersData.request['sellerSKU'],
        ];
        instance.getListingOffers(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForPricing.GetOffersResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getListingOffersWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetListingOffersData.response);

        const params = [
          mockgetListingOffersData.request['marketplaceId'],
          mockgetListingOffersData.request['itemCondition'],
          mockgetListingOffersData.request['sellerSKU'],
        ];
        instance.getListingOffersWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetListingOffersData.response.statusCode)
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
          mockgetListingOffersData.request['marketplaceId'],
          mockgetListingOffersData.request['itemCondition'],
          mockgetListingOffersData.request['sellerSKU'],
        ];
        instance.getListingOffers(...params)
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
    describe('getListingOffersBatch', function() {
      
      it('should successfully call getListingOffersBatch', function(done) {
        instance.apiClient.callApi.resolves(mockgetListingOffersBatchData.response);

        const params = [
          mockgetListingOffersBatchData.request['getListingOffersBatchRequestBody']
        ];
        instance.getListingOffersBatch(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForPricing.GetListingOffersBatchResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getListingOffersBatchWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetListingOffersBatchData.response);

        const params = [
          mockgetListingOffersBatchData.request['getListingOffersBatchRequestBody']
        ];
        instance.getListingOffersBatchWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetListingOffersBatchData.response.statusCode)
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
          mockgetListingOffersBatchData.request['getListingOffersBatchRequestBody']
        ];
        instance.getListingOffersBatch(...params)
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
    describe('getPricing', function() {
      
      it('should successfully call getPricing', function(done) {
        instance.apiClient.callApi.resolves(mockgetPricingData.response);

        const params = [
          mockgetPricingData.request['marketplaceId'],
          mockgetPricingData.request['itemType'],
        ];
        instance.getPricing(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForPricing.GetPricingResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getPricingWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetPricingData.response);

        const params = [
          mockgetPricingData.request['marketplaceId'],
          mockgetPricingData.request['itemType'],
        ];
        instance.getPricingWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetPricingData.response.statusCode)
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
          mockgetPricingData.request['marketplaceId'],
          mockgetPricingData.request['itemType'],
        ];
        instance.getPricing(...params)
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
        var defaultInstance = new SellingPartnerApiForPricing.ProductPricingApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForPricing.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForPricing.ApiClient();
        var customInstance = new SellingPartnerApiForPricing.ProductPricingApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
