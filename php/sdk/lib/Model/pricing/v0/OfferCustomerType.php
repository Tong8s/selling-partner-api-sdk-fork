<?php
/**
 * OfferCustomerType
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Pricing
 *
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\pricing\v0;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * OfferCustomerType Class Doc Comment
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class OfferCustomerType
{
    /**
     * Possible values of this enum
     */
    public const B2_C = 'B2C';

    public const B2_B = 'B2B';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::B2_C,
            self::B2_B
        ];
    }
}


