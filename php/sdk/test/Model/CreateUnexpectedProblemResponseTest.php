<?php
/**
 * CreateUnexpectedProblemResponseTest
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
use OpenAPI\Client\Model\messaging\v1\CreateUnexpectedProblemResponse;

/**
 * CreateUnexpectedProblemResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createUnexpectedProblem operation.
 * @package     OpenAPI\Client
 */
class CreateUnexpectedProblemResponseTest extends TestCase
{

    private CreateUnexpectedProblemResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateUnexpectedProblemResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateUnexpectedProblemResponse"
     */
    public function testCreateUnexpectedProblemResponse()
    {
        $this->assertInstanceOf(CreateUnexpectedProblemResponse::class, $this->model);
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
