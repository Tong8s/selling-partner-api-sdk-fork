<?php

/**
 * EligibilityStatus.
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
 * Selling Partner API for Replenishment.
 *
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\replenishment\v2022_11_07;

/**
 * EligibilityStatus Class Doc Comment.
 *
 * @category Class
 *
 * @description The current eligibility status of an offer.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class EligibilityStatus
{
    /**
     * Possible values of this enum.
     */
    public const ELIGIBLE = 'ELIGIBLE';

    public const INELIGIBLE = 'INELIGIBLE';

    public const SUSPENDED = 'SUSPENDED';

    public const REPLENISHMENT_ONLY_ORDERING = 'REPLENISHMENT_ONLY_ORDERING';

    /**
     * Gets allowable values of the enum.
     *
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::ELIGIBLE,
            self::INELIGIBLE,
            self::SUSPENDED,
            self::REPLENISHMENT_ONLY_ORDERING,
        ];
    }
}
