<?php

/**
 * BoxContentsSource.
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
 * Selling Partner API for Fulfillment Inbound.
 *
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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

namespace SpApi\Model\fulfillment\inbound\v0;

/**
 * BoxContentsSource Class Doc Comment.
 *
 * @category Class
 *
 * @description Where the seller provided box contents information for a shipment.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class BoxContentsSource
{
    /**
     * Possible values of this enum.
     */
    public const NONE = 'NONE';

    public const FEED = 'FEED';

    public const _2_D_BARCODE = '2D_BARCODE';

    public const INTERACTIVE = 'INTERACTIVE';

    /**
     * Gets allowable values of the enum.
     *
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::NONE,
            self::FEED,
            self::_2_D_BARCODE,
            self::INTERACTIVE,
        ];
    }
}
