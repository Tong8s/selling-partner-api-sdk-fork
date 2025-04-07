/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class CompetitiveSummaryIncludedData.
* @enum {}
* @readonly
*/
export class CompetitiveSummaryIncludedData {
    
        /**
         * value: "featuredBuyingOptions"
         * @const
         */
        "featuredBuyingOptions" = "featuredBuyingOptions";

    
        /**
         * value: "referencePrices"
         * @const
         */
        "referencePrices" = "referencePrices";

    
        /**
         * value: "lowestPricedOffers"
         * @const
         */
        "lowestPricedOffers" = "lowestPricedOffers";

    

    /**
    * Returns a <code>CompetitiveSummaryIncludedData</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.pricing_v2022_05_01.model/CompetitiveSummaryIncludedData} The enum <code>CompetitiveSummaryIncludedData</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
