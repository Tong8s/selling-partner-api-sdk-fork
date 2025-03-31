/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
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
    factory(root.expect, root.sinon, root.SellingPartnerApiForListingsItems);
  }
}(this, function(expect, sinon, SellingPartnerApiForListingsItems) {
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
          const ModelClass = SellingPartnerApiForListingsItems[dataType];
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
const mockdeleteListingsItemData = {
  request: {
    'sellerId': generateMockData('String'),
    'sku': generateMockData('String'),
    'marketplaceIds': generateMockData('[String]', true),
  },
  response: {
    data: generateMockData('ListingsItemSubmissionResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetListingsItemData = {
  request: {
    'sellerId': generateMockData('String'),
    'sku': generateMockData('String'),
    'marketplaceIds': generateMockData('[String]', true),
  },
  response: {
    data: generateMockData('Item'),
    statusCode: 200,
    headers: {}
  }
};
const mockpatchListingsItemData = {
  request: {
    'sellerId': generateMockData('String'),
    'sku': generateMockData('String'),
    'marketplaceIds': generateMockData('[String]', true),
    'body': generateMockData('ListingsItemPatchRequest'),
  },
  response: {
    data: generateMockData('ListingsItemSubmissionResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockputListingsItemData = {
  request: {
    'sellerId': generateMockData('String'),
    'sku': generateMockData('String'),
    'marketplaceIds': generateMockData('[String]', true),
    'body': generateMockData('ListingsItemPutRequest'),
  },
  response: {
    data: generateMockData('ListingsItemSubmissionResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mocksearchListingsItemsData = {
  request: {
    'sellerId': generateMockData('String'),
    'marketplaceIds': generateMockData('[String]', true),
  },
  response: {
    data: generateMockData('ItemSearchResults'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForListingsItems.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForListingsItems.ListingsApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('ListingsApi', function() {
    describe('deleteListingsItem', function() {
      
      it('should successfully call deleteListingsItem', function(done) {
        instance.apiClient.callApi.resolves(mockdeleteListingsItemData.response);

        const params = [
          mockdeleteListingsItemData.request['sellerId'],
          mockdeleteListingsItemData.request['sku'],
          mockdeleteListingsItemData.request['marketplaceIds'],
        ];
        instance.deleteListingsItem(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForListingsItems.ListingsItemSubmissionResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call deleteListingsItemWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockdeleteListingsItemData.response);

        const params = [
          mockdeleteListingsItemData.request['sellerId'],
          mockdeleteListingsItemData.request['sku'],
          mockdeleteListingsItemData.request['marketplaceIds'],
        ];
        instance.deleteListingsItemWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockdeleteListingsItemData.response.statusCode)
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
          mockdeleteListingsItemData.request['sellerId'],
          mockdeleteListingsItemData.request['sku'],
          mockdeleteListingsItemData.request['marketplaceIds'],
        ];
        instance.deleteListingsItem(...params)
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
    describe('getListingsItem', function() {
      
      it('should successfully call getListingsItem', function(done) {
        instance.apiClient.callApi.resolves(mockgetListingsItemData.response);

        const params = [
          mockgetListingsItemData.request['sellerId'],
          mockgetListingsItemData.request['sku'],
          mockgetListingsItemData.request['marketplaceIds'],
        ];
        instance.getListingsItem(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForListingsItems.Item).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getListingsItemWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetListingsItemData.response);

        const params = [
          mockgetListingsItemData.request['sellerId'],
          mockgetListingsItemData.request['sku'],
          mockgetListingsItemData.request['marketplaceIds'],
        ];
        instance.getListingsItemWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetListingsItemData.response.statusCode)
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
          mockgetListingsItemData.request['sellerId'],
          mockgetListingsItemData.request['sku'],
          mockgetListingsItemData.request['marketplaceIds'],
        ];
        instance.getListingsItem(...params)
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
    describe('patchListingsItem', function() {
      
      it('should successfully call patchListingsItem', function(done) {
        instance.apiClient.callApi.resolves(mockpatchListingsItemData.response);

        const params = [
          mockpatchListingsItemData.request['sellerId'],
          mockpatchListingsItemData.request['sku'],
          mockpatchListingsItemData.request['marketplaceIds'],
          mockpatchListingsItemData.request['body'],
        ];
        instance.patchListingsItem(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForListingsItems.ListingsItemSubmissionResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call patchListingsItemWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockpatchListingsItemData.response);

        const params = [
          mockpatchListingsItemData.request['sellerId'],
          mockpatchListingsItemData.request['sku'],
          mockpatchListingsItemData.request['marketplaceIds'],
          mockpatchListingsItemData.request['body'],
        ];
        instance.patchListingsItemWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockpatchListingsItemData.response.statusCode)
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
          mockpatchListingsItemData.request['sellerId'],
          mockpatchListingsItemData.request['sku'],
          mockpatchListingsItemData.request['marketplaceIds'],
          mockpatchListingsItemData.request['body'],
        ];
        instance.patchListingsItem(...params)
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
    describe('putListingsItem', function() {
      
      it('should successfully call putListingsItem', function(done) {
        instance.apiClient.callApi.resolves(mockputListingsItemData.response);

        const params = [
          mockputListingsItemData.request['sellerId'],
          mockputListingsItemData.request['sku'],
          mockputListingsItemData.request['marketplaceIds'],
          mockputListingsItemData.request['body'],
        ];
        instance.putListingsItem(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForListingsItems.ListingsItemSubmissionResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call putListingsItemWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockputListingsItemData.response);

        const params = [
          mockputListingsItemData.request['sellerId'],
          mockputListingsItemData.request['sku'],
          mockputListingsItemData.request['marketplaceIds'],
          mockputListingsItemData.request['body'],
        ];
        instance.putListingsItemWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockputListingsItemData.response.statusCode)
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
          mockputListingsItemData.request['sellerId'],
          mockputListingsItemData.request['sku'],
          mockputListingsItemData.request['marketplaceIds'],
          mockputListingsItemData.request['body'],
        ];
        instance.putListingsItem(...params)
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
    describe('searchListingsItems', function() {
      
      it('should successfully call searchListingsItems', function(done) {
        instance.apiClient.callApi.resolves(mocksearchListingsItemsData.response);

        const params = [
          mocksearchListingsItemsData.request['sellerId'],
          mocksearchListingsItemsData.request['marketplaceIds'],
        ];
        instance.searchListingsItems(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForListingsItems.ItemSearchResults).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call searchListingsItemsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mocksearchListingsItemsData.response);

        const params = [
          mocksearchListingsItemsData.request['sellerId'],
          mocksearchListingsItemsData.request['marketplaceIds'],
        ];
        instance.searchListingsItemsWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mocksearchListingsItemsData.response.statusCode)
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
          mocksearchListingsItemsData.request['sellerId'],
          mocksearchListingsItemsData.request['marketplaceIds'],
        ];
        instance.searchListingsItems(...params)
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
        var defaultInstance = new SellingPartnerApiForListingsItems.ListingsApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForListingsItems.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForListingsItems.ApiClient();
        var customInstance = new SellingPartnerApiForListingsItems.ListingsApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
