<?php

/**
 * CompetitiveSummaryIncludedData.
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
 * Selling Partner API for Pricing.
 *
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\pricing\v2022_05_01;

/**
 * CompetitiveSummaryIncludedData Class Doc Comment.
 *
 * @category Class
 *
 * @description The supported data types in the &#x60;getCompetitiveSummary&#x60; API.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class CompetitiveSummaryIncludedData
{
    /**
     * Possible values of this enum.
     */
    public const FEATURED_BUYING_OPTIONS = 'featuredBuyingOptions';

    public const REFERENCE_PRICES = 'referencePrices';

    public const LOWEST_PRICED_OFFERS = 'lowestPricedOffers';

    /**
     * Gets allowable values of the enum.
     *
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::FEATURED_BUYING_OPTIONS,
            self::REFERENCE_PRICES,
            self::LOWEST_PRICED_OFFERS,
        ];
    }
}
