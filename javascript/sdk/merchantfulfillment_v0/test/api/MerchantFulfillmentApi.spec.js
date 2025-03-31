/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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
    factory(root.expect, root.sinon, root.SellingPartnerApiForMerchantFulfillment);
  }
}(this, function(expect, sinon, SellingPartnerApiForMerchantFulfillment) {
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
          const ModelClass = SellingPartnerApiForMerchantFulfillment[dataType];
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
const mockcancelShipmentData = {
  request: {
    'shipmentId': generateMockData('String')
  },
  response: {
    data: generateMockData('CancelShipmentResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockcreateShipmentData = {
  request: {
    'body': generateMockData('CreateShipmentRequest')
  },
  response: {
    data: generateMockData('CreateShipmentResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetAdditionalSellerInputsData = {
  request: {
    'body': generateMockData('GetAdditionalSellerInputsRequest')
  },
  response: {
    data: generateMockData('GetAdditionalSellerInputsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetEligibleShipmentServicesData = {
  request: {
    'body': generateMockData('GetEligibleShipmentServicesRequest')
  },
  response: {
    data: generateMockData('GetEligibleShipmentServicesResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetShipmentData = {
  request: {
    'shipmentId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetShipmentResponse'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForMerchantFulfillment.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('MerchantFulfillmentApi', function() {
    describe('cancelShipment', function() {
      
      it('should successfully call cancelShipment', function(done) {
        instance.apiClient.callApi.resolves(mockcancelShipmentData.response);

        const params = [
          mockcancelShipmentData.request['shipmentId']
        ];
        instance.cancelShipment(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForMerchantFulfillment.CancelShipmentResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call cancelShipmentWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockcancelShipmentData.response);

        const params = [
          mockcancelShipmentData.request['shipmentId']
        ];
        instance.cancelShipmentWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockcancelShipmentData.response.statusCode)
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
          mockcancelShipmentData.request['shipmentId']
        ];
        instance.cancelShipment(...params)
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
    describe('createShipment', function() {
      
      it('should successfully call createShipment', function(done) {
        instance.apiClient.callApi.resolves(mockcreateShipmentData.response);

        const params = [
          mockcreateShipmentData.request['body']
        ];
        instance.createShipment(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForMerchantFulfillment.CreateShipmentResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call createShipmentWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockcreateShipmentData.response);

        const params = [
          mockcreateShipmentData.request['body']
        ];
        instance.createShipmentWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockcreateShipmentData.response.statusCode)
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
          mockcreateShipmentData.request['body']
        ];
        instance.createShipment(...params)
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
    describe('getAdditionalSellerInputs', function() {
      
      it('should successfully call getAdditionalSellerInputs', function(done) {
        instance.apiClient.callApi.resolves(mockgetAdditionalSellerInputsData.response);

        const params = [
          mockgetAdditionalSellerInputsData.request['body']
        ];
        instance.getAdditionalSellerInputs(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForMerchantFulfillment.GetAdditionalSellerInputsResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getAdditionalSellerInputsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetAdditionalSellerInputsData.response);

        const params = [
          mockgetAdditionalSellerInputsData.request['body']
        ];
        instance.getAdditionalSellerInputsWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetAdditionalSellerInputsData.response.statusCode)
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
          mockgetAdditionalSellerInputsData.request['body']
        ];
        instance.getAdditionalSellerInputs(...params)
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
    describe('getEligibleShipmentServices', function() {
      
      it('should successfully call getEligibleShipmentServices', function(done) {
        instance.apiClient.callApi.resolves(mockgetEligibleShipmentServicesData.response);

        const params = [
          mockgetEligibleShipmentServicesData.request['body']
        ];
        instance.getEligibleShipmentServices(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForMerchantFulfillment.GetEligibleShipmentServicesResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getEligibleShipmentServicesWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetEligibleShipmentServicesData.response);

        const params = [
          mockgetEligibleShipmentServicesData.request['body']
        ];
        instance.getEligibleShipmentServicesWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetEligibleShipmentServicesData.response.statusCode)
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
          mockgetEligibleShipmentServicesData.request['body']
        ];
        instance.getEligibleShipmentServices(...params)
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
    describe('getShipment', function() {
      
      it('should successfully call getShipment', function(done) {
        instance.apiClient.callApi.resolves(mockgetShipmentData.response);

        const params = [
          mockgetShipmentData.request['shipmentId']
        ];
        instance.getShipment(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForMerchantFulfillment.GetShipmentResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getShipmentWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetShipmentData.response);

        const params = [
          mockgetShipmentData.request['shipmentId']
        ];
        instance.getShipmentWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetShipmentData.response.statusCode)
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
          mockgetShipmentData.request['shipmentId']
        ];
        instance.getShipment(...params)
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
        var defaultInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForMerchantFulfillment.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForMerchantFulfillment.ApiClient();
        var customInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
