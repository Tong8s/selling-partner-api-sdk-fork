/**
 * Selling Partner API for Uploads
 * The Uploads API lets you upload files that you can programmatically access using other Selling Partner APIs, such as the A+ Content API and the Messaging API.
 *
 * The version of the OpenAPI document: 2020-11-01
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
    factory(root.expect, root.sinon, root.SellingPartnerApiForUploads);
  }
}(this, function(expect, sinon, SellingPartnerApiForUploads) {
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
          const ModelClass = SellingPartnerApiForUploads[dataType];
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
const mockcreateUploadDestinationForResourceData = {
  request: {
    'marketplaceIds': generateMockData('String', true),
    'contentMD5': generateMockData('String'),
    'resource': generateMockData('String'),
  },
  response: {
    data: generateMockData('CreateUploadDestinationResponse'),
    statusCode: 201,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForUploads.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForUploads.UploadsApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('UploadsApi', function() {
    describe('createUploadDestinationForResource', function() {
      
      it('should successfully call createUploadDestinationForResource', function(done) {
        instance.apiClient.callApi.resolves(mockcreateUploadDestinationForResourceData.response);

        const params = [
          mockcreateUploadDestinationForResourceData.request['marketplaceIds'],
          mockcreateUploadDestinationForResourceData.request['contentMD5'],
          mockcreateUploadDestinationForResourceData.request['resource'],
        ];
        instance.createUploadDestinationForResource(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForUploads.CreateUploadDestinationResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call createUploadDestinationForResourceWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockcreateUploadDestinationForResourceData.response);

        const params = [
          mockcreateUploadDestinationForResourceData.request['marketplaceIds'],
          mockcreateUploadDestinationForResourceData.request['contentMD5'],
          mockcreateUploadDestinationForResourceData.request['resource'],
        ];
        instance.createUploadDestinationForResourceWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockcreateUploadDestinationForResourceData.response.statusCode)
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
          mockcreateUploadDestinationForResourceData.request['marketplaceIds'],
          mockcreateUploadDestinationForResourceData.request['contentMD5'],
          mockcreateUploadDestinationForResourceData.request['resource'],
        ];
        instance.createUploadDestinationForResource(...params)
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
        var defaultInstance = new SellingPartnerApiForUploads.UploadsApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForUploads.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForUploads.ApiClient();
        var customInstance = new SellingPartnerApiForUploads.UploadsApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
