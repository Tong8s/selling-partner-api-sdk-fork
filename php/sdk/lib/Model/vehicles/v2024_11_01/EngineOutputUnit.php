<?php

/**
 * EngineOutputUnit.
 *
 * PHP version 8.3
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * The Selling Partner API for Automotive.
 *
 * The Selling Partner API for Automotive provides programmatic access to information needed by selling partners to provide compatibility information about their listed products.
 *
 * The version of the OpenAPI document: 2024-11-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\vehicles\v2024_11_01;

/**
 * EngineOutputUnit Class Doc Comment.
 *
 * @category Class
 *
 * @description Unit for measuring engine power.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class EngineOutputUnit
{
    /**
     * Possible values of this enum.
     */
    public const KILOWATT = 'KILOWATT';

    public const HORSEPOWER = 'HORSEPOWER';

    /**
     * Gets allowable values of the enum.
     *
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::KILOWATT,
            self::HORSEPOWER,
        ];
    }
}
