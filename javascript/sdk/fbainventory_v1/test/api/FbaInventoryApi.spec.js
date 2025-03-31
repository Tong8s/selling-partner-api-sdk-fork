/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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
    factory(root.expect, root.sinon, root.SellingPartnerApiForFbaInventory);
  }
}(this, function(expect, sinon, SellingPartnerApiForFbaInventory) {
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
          const ModelClass = SellingPartnerApiForFbaInventory[dataType];
          if (ModelClass) {
            const instance = Object.create(ModelClass.prototype);
            if (ModelClass.RequiredProperties) {
              ModelClass.RequiredProperties.forEach(prop => {
                const propType = ModelClass.types[prop];
                instance[prop] = generateMockData(propType);
              });
            }
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
const mockaddInventoryData = {
  request: {
    'xAmznIdempotencyToken': generateMockData('String'),
    'addInventoryRequestBody': generateMockData('AddInventoryRequest')
  },
  response: {
    data: generateMockData('AddInventoryResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockcreateInventoryItemData = {
  request: {
    'createInventoryItemRequestBody': generateMockData('CreateInventoryItemRequest')
  },
  response: {
    data: generateMockData('CreateInventoryItemResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockdeleteInventoryItemData = {
  request: {
    'sellerSku': generateMockData('String'),
    'marketplaceId': generateMockData('String')
  },
  response: {
    data: generateMockData('DeleteInventoryItemResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetInventorySummariesData = {
  request: {
    'granularityType': generateMockData('String'),
    'granularityId': generateMockData('String'),
    'marketplaceIds': generateMockData('[String]', true),
  },
  response: {
    data: generateMockData('GetInventorySummariesResponse'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForFbaInventory.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForFbaInventory.FbaInventoryApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('FbaInventoryApi', function() {
    describe('addInventory', function() {
      
      it('should successfully call addInventory', function(done) {
        instance.apiClient.callApi.resolves(mockaddInventoryData.response);

        const params = [
          mockaddInventoryData.request['xAmznIdempotencyToken'],
          mockaddInventoryData.request['addInventoryRequestBody']
        ];
        instance.addInventory(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForFbaInventory.AddInventoryResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call addInventoryWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockaddInventoryData.response);

        const params = [
          mockaddInventoryData.request['xAmznIdempotencyToken'],
          mockaddInventoryData.request['addInventoryRequestBody']
        ];
        instance.addInventoryWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockaddInventoryData.response.statusCode)
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
          mockaddInventoryData.request['xAmznIdempotencyToken'],
          mockaddInventoryData.request['addInventoryRequestBody']
        ];
        instance.addInventory(...params)
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
    describe('createInventoryItem', function() {
      
      it('should successfully call createInventoryItem', function(done) {
        instance.apiClient.callApi.resolves(mockcreateInventoryItemData.response);

        const params = [
          mockcreateInventoryItemData.request['createInventoryItemRequestBody']
        ];
        instance.createInventoryItem(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForFbaInventory.CreateInventoryItemResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call createInventoryItemWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockcreateInventoryItemData.response);

        const params = [
          mockcreateInventoryItemData.request['createInventoryItemRequestBody']
        ];
        instance.createInventoryItemWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockcreateInventoryItemData.response.statusCode)
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
          mockcreateInventoryItemData.request['createInventoryItemRequestBody']
        ];
        instance.createInventoryItem(...params)
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
    describe('deleteInventoryItem', function() {
      
      it('should successfully call deleteInventoryItem', function(done) {
        instance.apiClient.callApi.resolves(mockdeleteInventoryItemData.response);

        const params = [
          mockdeleteInventoryItemData.request['sellerSku'],
          mockdeleteInventoryItemData.request['marketplaceId']
        ];
        instance.deleteInventoryItem(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForFbaInventory.DeleteInventoryItemResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call deleteInventoryItemWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockdeleteInventoryItemData.response);

        const params = [
          mockdeleteInventoryItemData.request['sellerSku'],
          mockdeleteInventoryItemData.request['marketplaceId']
        ];
        instance.deleteInventoryItemWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockdeleteInventoryItemData.response.statusCode)
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
          mockdeleteInventoryItemData.request['sellerSku'],
          mockdeleteInventoryItemData.request['marketplaceId']
        ];
        instance.deleteInventoryItem(...params)
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
    describe('getInventorySummaries', function() {
      
      it('should successfully call getInventorySummaries', function(done) {
        instance.apiClient.callApi.resolves(mockgetInventorySummariesData.response);

        const params = [
          mockgetInventorySummariesData.request['granularityType'],
          mockgetInventorySummariesData.request['granularityId'],
          mockgetInventorySummariesData.request['marketplaceIds'],
        ];
        instance.getInventorySummaries(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForFbaInventory.GetInventorySummariesResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getInventorySummariesWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetInventorySummariesData.response);

        const params = [
          mockgetInventorySummariesData.request['granularityType'],
          mockgetInventorySummariesData.request['granularityId'],
          mockgetInventorySummariesData.request['marketplaceIds'],
        ];
        instance.getInventorySummariesWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetInventorySummariesData.response.statusCode)
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
          mockgetInventorySummariesData.request['granularityType'],
          mockgetInventorySummariesData.request['granularityId'],
          mockgetInventorySummariesData.request['marketplaceIds'],
        ];
        instance.getInventorySummaries(...params)
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
        var defaultInstance = new SellingPartnerApiForFbaInventory.FbaInventoryApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForFbaInventory.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForFbaInventory.ApiClient();
        var customInstance = new SellingPartnerApiForFbaInventory.FbaInventoryApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
