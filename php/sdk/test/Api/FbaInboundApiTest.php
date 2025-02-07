<?php
/**
 * FbaInboundApiTest
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for FBA Inbound Eligibilty
 *
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon's fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon's fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon's fulfillment centers.
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Please update the test case below to test the endpoint.
 */

namespace OpenAPI\Client\Test\Api;

use OpenAPI\Client\ApiException;
use OpenAPI\Client\Api\fba\eligibility\v1\FbaInboundApi;
use OpenAPI\Client\ObjectSerializer;

/**
 * FbaInboundApiTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class FbaInboundApiTest extends BaseTestCase
{
    private FbaInboundApi $apiInstance;
    public function setUp(): void
    {
        parent::setUp();
        // Initialize parameter value specific to case
        $this->testHelper->setSpecificValue('FbaInboundApi', $this->getName());
        $this->apiInstance = new FbaInboundApi($this->config, null, null);
        // Change Time Format if it requires
        $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('FbaInboundApi');
        if ($specificTimeFormat) {
            ObjectSerializer::setDateTimeFormat($specificTimeFormat);
        }
    }

    /**
     * Test case for getItemEligibilityPreview_200
     */
    public function testGetItemEligibilityPreview200()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetItemEligibilityPreview200', 'FbaInboundApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Success.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference ID.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    },
    &quot;x-amzn-RateLimit-Limit&quot; : {
      &quot;description&quot; : &quot;Your rate limit (requests per second) for this operation.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/GetItemEligibilityPreviewResponse&quot;
      }
    },
    &quot;ItemEligibilityPreview&quot; : {
      &quot;example&quot; : {
        &quot;payload&quot; : {
          &quot;asin&quot; : &quot;TEST_ASIN&quot;,
          &quot;marketplaceId&quot; : &quot;TEST_MARKETPLACE_ID&quot;,
          &quot;program&quot; : &quot;INBOUND&quot;,
          &quot;isEligibleForProgram&quot; : true
        }
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;asin&quot; : {
            &quot;value&quot; : &quot;TEST_CASE_200&quot;
          }
        }
      },
      &quot;response&quot; : {
        &quot;payload&quot; : {
          &quot;asin&quot; : &quot;TEST_CASE_200&quot;,
          &quot;marketplaceId&quot; : &quot;TEST_CASE_200&quot;,
          &quot;program&quot; : &quot;INBOUND&quot;,
          &quot;isEligibleForProgram&quot; : true
        }
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'getItemEligibilityPreview'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('FbaInboundApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getItemEligibilityPreviewWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 200, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getItemEligibilityPreview_400
     */
    public function testGetItemEligibilityPreview400()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetItemEligibilityPreview400', 'FbaInboundApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Request has missing or invalid parameters and cannot be parsed.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference ID.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    },
    &quot;x-amzn-RateLimit-Limit&quot; : {
      &quot;description&quot; : &quot;Your rate limit (requests per second) for this operation.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/GetItemEligibilityPreviewResponse&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;asin&quot; : {
            &quot;value&quot; : &quot;TEST_CASE_400&quot;
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;InvalidInput&quot;,
          &quot;message&quot; : &quot;Invalid input.&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'getItemEligibilityPreview'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('FbaInboundApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getItemEligibilityPreviewWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(400, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 400, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 400);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getItemEligibilityPreview_401
     */
    public function testGetItemEligibilityPreview401()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetItemEligibilityPreview401', 'FbaInboundApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;The request&#39;s Authorization header is not formatted correctly or does not contain a valid token.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference ID.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    },
    &quot;x-amzn-RateLimit-Limit&quot; : {
      &quot;description&quot; : &quot;Your rate limit (requests per second) for this operation.\n_Note:_ For this status code, the rate limit header is deprecated and no longer returned.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/GetItemEligibilityPreviewResponse&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;asin&quot; : {
            &quot;value&quot; : &quot;TEST_CASE_401&quot;
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;Unauthorized&quot;,
          &quot;message&quot; : &quot;Access to requested resource is denied.&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'getItemEligibilityPreview'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('FbaInboundApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getItemEligibilityPreviewWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(401, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 401, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 401);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getItemEligibilityPreview_403
     */
    public function testGetItemEligibilityPreview403()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetItemEligibilityPreview403', 'FbaInboundApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;403 can be caused for reasons like Access Denied, Unauthorized, Expired Token, Invalid Signature or Resource Not Found.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference ID.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/GetItemEligibilityPreviewResponse&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;asin&quot; : {
            &quot;value&quot; : &quot;TEST_CASE_403&quot;
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;Unauthorized&quot;,
          &quot;message&quot; : &quot;Access to requested resource is denied.&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'getItemEligibilityPreview'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('FbaInboundApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getItemEligibilityPreviewWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(403, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 403, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 403);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getItemEligibilityPreview_404
     */
    public function testGetItemEligibilityPreview404()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetItemEligibilityPreview404', 'FbaInboundApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;The resource specified does not exist.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference ID.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    },
    &quot;x-amzn-RateLimit-Limit&quot; : {
      &quot;description&quot; : &quot;Your rate limit (requests per second) for this operation.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/GetItemEligibilityPreviewResponse&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;asin&quot; : {
            &quot;value&quot; : &quot;TEST_CASE_404&quot;
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;NotFound&quot;,
          &quot;message&quot; : &quot;The requested resource doesn&#39;t exist.&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'getItemEligibilityPreview'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('FbaInboundApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getItemEligibilityPreviewWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(404, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 404, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 404);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getItemEligibilityPreview_429
     */
    public function testGetItemEligibilityPreview429()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetItemEligibilityPreview429', 'FbaInboundApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;The frequency of requests was greater than allowed.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference ID.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    },
    &quot;x-amzn-RateLimit-Limit&quot; : {
      &quot;description&quot; : &quot;Your rate limit (requests per second) for this operation.\n_Note:_ For this status code, the rate limit header is deprecated and no longer returned.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/GetItemEligibilityPreviewResponse&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;asin&quot; : {
            &quot;value&quot; : &quot;TEST_CASE_429&quot;
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;QuotaExceeded&quot;,
          &quot;message&quot; : &quot;You exceeded your quota for the requested resource.&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'getItemEligibilityPreview'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('FbaInboundApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getItemEligibilityPreviewWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(429, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 429, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 429);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getItemEligibilityPreview_500
     */
    public function testGetItemEligibilityPreview500()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetItemEligibilityPreview500', 'FbaInboundApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Encountered an unexpected condition which prevented the server from fulfilling the request.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference ID.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    },
    &quot;x-amzn-RateLimit-Limit&quot; : {
      &quot;description&quot; : &quot;Your rate limit (requests per second) for this operation.\n_Note:_ For this status code, the rate limit header is deprecated and no longer returned.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/GetItemEligibilityPreviewResponse&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;asin&quot; : {
            &quot;value&quot; : &quot;TEST_CASE_500&quot;
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;InternalFailure&quot;,
          &quot;message&quot; : &quot;We encountered an internal error. Please try again.&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'getItemEligibilityPreview'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('FbaInboundApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getItemEligibilityPreviewWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(500, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 500, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 500);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getItemEligibilityPreview_503
     */
    public function testGetItemEligibilityPreview503()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetItemEligibilityPreview503', 'FbaInboundApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Temporary overloading or maintenance of the server.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference ID.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    },
    &quot;x-amzn-RateLimit-Limit&quot; : {
      &quot;description&quot; : &quot;Your rate limit (requests per second) for this operation.\n_Note:_ For this status code, the rate limit header is deprecated and no longer returned.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/GetItemEligibilityPreviewResponse&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;asin&quot; : {
            &quot;value&quot; : &quot;TEST_CASE_503&quot;
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;ServiceUnavailable&quot;,
          &quot;message&quot; : &quot;Service is temporarily unavailable. Please try again.&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'getItemEligibilityPreview'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('FbaInboundApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getItemEligibilityPreviewWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(503, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 503, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 503);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
}
