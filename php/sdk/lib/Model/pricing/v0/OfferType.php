<?php

/**
 * OfferType.
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

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * OfferType Class Doc Comment.
 *
 * @category Class
 *
 * @description Schema for an individual offer.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class OfferType implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'OfferType';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'offer_type' => '\SpApi\Model\pricing\v0\OfferCustomerType',
        'buying_price' => '\SpApi\Model\pricing\v0\PriceType',
        'regular_price' => '\SpApi\Model\pricing\v0\MoneyType',
        'business_price' => '\SpApi\Model\pricing\v0\MoneyType',
        'quantity_discount_prices' => '\SpApi\Model\pricing\v0\QuantityDiscountPriceType[]',
        'fulfillment_channel' => 'string',
        'item_condition' => 'string',
        'item_sub_condition' => 'string',
        'seller_sku' => 'string'];

    /**
     * Array of property to format mappings. Used for (de)serialization.
     *
     * @var string[]
     *
     * @phpstan-var array<string, string|null>
     *
     * @psalm-var array<string, string|null>
     */
    protected static array $openAPIFormats = [
        'offer_type' => null,
        'buying_price' => null,
        'regular_price' => null,
        'business_price' => null,
        'quantity_discount_prices' => null,
        'fulfillment_channel' => null,
        'item_condition' => null,
        'item_sub_condition' => null,
        'seller_sku' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'offer_type' => true,
        'buying_price' => false,
        'regular_price' => false,
        'business_price' => true,
        'quantity_discount_prices' => true,
        'fulfillment_channel' => false,
        'item_condition' => false,
        'item_sub_condition' => false,
        'seller_sku' => false,
    ];

    /**
     * If a nullable field gets set to null, insert it here.
     *
     * @var bool[]
     */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     *
     * @var string[]
     */
    protected static array $attributeMap = [
        'offer_type' => 'offerType',
        'buying_price' => 'BuyingPrice',
        'regular_price' => 'RegularPrice',
        'business_price' => 'businessPrice',
        'quantity_discount_prices' => 'quantityDiscountPrices',
        'fulfillment_channel' => 'FulfillmentChannel',
        'item_condition' => 'ItemCondition',
        'item_sub_condition' => 'ItemSubCondition',
        'seller_sku' => 'SellerSKU',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'offer_type' => 'setOfferType',
        'buying_price' => 'setBuyingPrice',
        'regular_price' => 'setRegularPrice',
        'business_price' => 'setBusinessPrice',
        'quantity_discount_prices' => 'setQuantityDiscountPrices',
        'fulfillment_channel' => 'setFulfillmentChannel',
        'item_condition' => 'setItemCondition',
        'item_sub_condition' => 'setItemSubCondition',
        'seller_sku' => 'setSellerSku',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'offer_type' => 'getOfferType',
        'buying_price' => 'getBuyingPrice',
        'regular_price' => 'getRegularPrice',
        'business_price' => 'getBusinessPrice',
        'quantity_discount_prices' => 'getQuantityDiscountPrices',
        'fulfillment_channel' => 'getFulfillmentChannel',
        'item_condition' => 'getItemCondition',
        'item_sub_condition' => 'getItemSubCondition',
        'seller_sku' => 'getSellerSku',
    ];

    /**
     * Associative array for storing property values.
     */
    protected array $container = [];

    /**
     * Constructor.
     *
     * @param null|array $data Associated array of property values
     *                         initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('offer_type', $data ?? [], null);
        $this->setIfExists('buying_price', $data ?? [], null);
        $this->setIfExists('regular_price', $data ?? [], null);
        $this->setIfExists('business_price', $data ?? [], null);
        $this->setIfExists('quantity_discount_prices', $data ?? [], null);
        $this->setIfExists('fulfillment_channel', $data ?? [], null);
        $this->setIfExists('item_condition', $data ?? [], null);
        $this->setIfExists('item_sub_condition', $data ?? [], null);
        $this->setIfExists('seller_sku', $data ?? [], null);
    }

    /**
     * Gets the string presentation of the object.
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Array of property to type mappings. Used for (de)serialization.
     */
    public static function openAPITypes(): array
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization.
     */
    public static function openAPIFormats(): array
    {
        return self::$openAPIFormats;
    }

    /**
     * Checks if a property is nullable.
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     */
    public static function attributeMap(): array
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     */
    public static function setters(): array
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests).
     */
    public static function getters(): array
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     */
    public function getModelName(): string
    {
        return self::$openAPIModelName;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties(): array
    {
        $invalidProperties = [];

        if (null === $this->container['buying_price']) {
            $invalidProperties[] = "'buying_price' can't be null";
        }
        if (null === $this->container['regular_price']) {
            $invalidProperties[] = "'regular_price' can't be null";
        }
        if (null === $this->container['fulfillment_channel']) {
            $invalidProperties[] = "'fulfillment_channel' can't be null";
        }
        if (null === $this->container['item_condition']) {
            $invalidProperties[] = "'item_condition' can't be null";
        }
        if (null === $this->container['item_sub_condition']) {
            $invalidProperties[] = "'item_sub_condition' can't be null";
        }
        if (null === $this->container['seller_sku']) {
            $invalidProperties[] = "'seller_sku' can't be null";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed.
     *
     * @return bool True if all properties are valid
     */
    public function valid(): bool
    {
        return 0 === count($this->listInvalidProperties());
    }

    /**
     * Gets offer_type.
     */
    public function getOfferType(): ?string
    {
        return $this->container['offer_type'];
    }

    /**
     * Sets offer_type.
     *
     * @param null|string $offer_type offer_type
     */
    public function setOfferType(?string $offer_type): self
    {
        if (is_null($offer_type)) {
            array_push($this->openAPINullablesSetToNull, 'offer_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('offer_type', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['offer_type'] = $offer_type;

        return $this;
    }

    /**
     * Gets buying_price.
     */
    public function getBuyingPrice(): PriceType
    {
        return $this->container['buying_price'];
    }

    /**
     * Sets buying_price.
     *
     * @param PriceType $buying_price buying_price
     */
    public function setBuyingPrice(PriceType $buying_price): self
    {
        if (is_null($buying_price)) {
            throw new \InvalidArgumentException('non-nullable buying_price cannot be null');
        }
        $this->container['buying_price'] = $buying_price;

        return $this;
    }

    /**
     * Gets regular_price.
     */
    public function getRegularPrice(): MoneyType
    {
        return $this->container['regular_price'];
    }

    /**
     * Sets regular_price.
     *
     * @param MoneyType $regular_price regular_price
     */
    public function setRegularPrice(MoneyType $regular_price): self
    {
        if (is_null($regular_price)) {
            throw new \InvalidArgumentException('non-nullable regular_price cannot be null');
        }
        $this->container['regular_price'] = $regular_price;

        return $this;
    }

    /**
     * Gets business_price.
     */
    public function getBusinessPrice(): ?MoneyType
    {
        return $this->container['business_price'];
    }

    /**
     * Sets business_price.
     *
     * @param null|MoneyType $business_price business_price
     */
    public function setBusinessPrice(?MoneyType $business_price): self
    {
        if (is_null($business_price)) {
            array_push($this->openAPINullablesSetToNull, 'business_price');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('business_price', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['business_price'] = $business_price;

        return $this;
    }

    /**
     * Gets quantity_discount_prices.
     */
    public function getQuantityDiscountPrices(): ?array
    {
        return $this->container['quantity_discount_prices'];
    }

    /**
     * Sets quantity_discount_prices.
     *
     * @param null|array $quantity_discount_prices list of `QuantityDiscountPrice` that contains item's pricing information when buy in bulk
     */
    public function setQuantityDiscountPrices(?array $quantity_discount_prices): self
    {
        if (is_null($quantity_discount_prices)) {
            array_push($this->openAPINullablesSetToNull, 'quantity_discount_prices');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('quantity_discount_prices', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['quantity_discount_prices'] = $quantity_discount_prices;

        return $this;
    }

    /**
     * Gets fulfillment_channel.
     */
    public function getFulfillmentChannel(): string
    {
        return $this->container['fulfillment_channel'];
    }

    /**
     * Sets fulfillment_channel.
     *
     * @param string $fulfillment_channel The fulfillment channel for the offer listing. Possible values:  * Amazon - Fulfilled by Amazon. * Merchant - Fulfilled by the seller.
     */
    public function setFulfillmentChannel(string $fulfillment_channel): self
    {
        if (is_null($fulfillment_channel)) {
            throw new \InvalidArgumentException('non-nullable fulfillment_channel cannot be null');
        }
        $this->container['fulfillment_channel'] = $fulfillment_channel;

        return $this;
    }

    /**
     * Gets item_condition.
     */
    public function getItemCondition(): string
    {
        return $this->container['item_condition'];
    }

    /**
     * Sets item_condition.
     *
     * @param string $item_condition The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club.
     */
    public function setItemCondition(string $item_condition): self
    {
        if (is_null($item_condition)) {
            throw new \InvalidArgumentException('non-nullable item_condition cannot be null');
        }
        $this->container['item_condition'] = $item_condition;

        return $this;
    }

    /**
     * Gets item_sub_condition.
     */
    public function getItemSubCondition(): string
    {
        return $this->container['item_sub_condition'];
    }

    /**
     * Sets item_sub_condition.
     *
     * @param string $item_sub_condition The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
     */
    public function setItemSubCondition(string $item_sub_condition): self
    {
        if (is_null($item_sub_condition)) {
            throw new \InvalidArgumentException('non-nullable item_sub_condition cannot be null');
        }
        $this->container['item_sub_condition'] = $item_sub_condition;

        return $this;
    }

    /**
     * Gets seller_sku.
     */
    public function getSellerSku(): string
    {
        return $this->container['seller_sku'];
    }

    /**
     * Sets seller_sku.
     *
     * @param string $seller_sku the seller stock keeping unit (SKU) of the item
     */
    public function setSellerSku(string $seller_sku): self
    {
        if (is_null($seller_sku)) {
            throw new \InvalidArgumentException('non-nullable seller_sku cannot be null');
        }
        $this->container['seller_sku'] = $seller_sku;

        return $this;
    }

    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param int $offset Offset
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param int $offset Offset
     *
     * @return null|mixed
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset): mixed
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param null|int $offset Offset
     * @param mixed    $value  Value to be set
     */
    public function offsetSet($offset, mixed $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param int $offset Offset
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     *
     * @see https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed returns data which can be serialized by json_encode(), which is a value
     *               of any type other than a resource
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize(): mixed
    {
        return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets a header-safe presentation of the object.
     */
    public function toHeaderValue(): string
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }

    /**
     * Array of nullable properties.
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null.
     *
     * @return bool[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null.
     *
     * @param bool[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
     * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
     * $this->openAPINullablesSetToNull array.
     *
     * @param mixed $defaultValue
     */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }
}
