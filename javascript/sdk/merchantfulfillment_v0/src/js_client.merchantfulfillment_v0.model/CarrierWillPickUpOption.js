/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class CarrierWillPickUpOption.
* @enum {}
* @readonly
*/
export class CarrierWillPickUpOption {
    
        /**
         * value: "CarrierWillPickUp"
         * @const
         */
        "CarrierWillPickUp" = "CarrierWillPickUp";

    
        /**
         * value: "ShipperWillDropOff"
         * @const
         */
        "ShipperWillDropOff" = "ShipperWillDropOff";

    
        /**
         * value: "NoPreference"
         * @const
         */
        "NoPreference" = "NoPreference";

    

    /**
    * Returns a <code>CarrierWillPickUpOption</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.merchantfulfillment_v0.model/CarrierWillPickUpOption} The enum <code>CarrierWillPickUpOption</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
