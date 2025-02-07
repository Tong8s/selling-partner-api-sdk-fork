<?php
/**
 * PaginationResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\replenishment\v2022_11_07\PaginationResponse;

/**
 * PaginationResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Use these parameters to paginate through the response.
 * @package     OpenAPI\Client
 */
class PaginationResponseTest extends TestCase
{

    private PaginationResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PaginationResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PaginationResponse"
     */
    public function testPaginationResponse()
    {
        $this->assertInstanceOf(PaginationResponse::class, $this->model);
    }

    /**
     * Test attribute "total_results"
     */
    public function testPropertyTotalResults()
    {
        
        $testValue = new int();
        
        $this->model->setTotalResults($testValue);
        $this->assertEquals($testValue, $this->model->getTotalResults());
    }
}
