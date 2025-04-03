<?php

/**
 * ShippingOfferingFilter.
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
 * Selling Partner API for Merchant Fulfillment.
 *
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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

namespace SpApi\Model\merchantFulfillment\v0;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * ShippingOfferingFilter Class Doc Comment.
 *
 * @category Class
 *
 * @description Filter for use when requesting eligible shipping services.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class ShippingOfferingFilter implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'ShippingOfferingFilter';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'include_packing_slip_with_label' => 'bool',
        'include_complex_shipping_options' => 'bool',
        'carrier_will_pick_up' => '\SpApi\Model\merchantFulfillment\v0\CarrierWillPickUpOption',
        'delivery_experience' => '\SpApi\Model\merchantFulfillment\v0\DeliveryExperienceOption'];

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
        'include_packing_slip_with_label' => null,
        'include_complex_shipping_options' => null,
        'carrier_will_pick_up' => null,
        'delivery_experience' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'include_packing_slip_with_label' => true,
        'include_complex_shipping_options' => true,
        'carrier_will_pick_up' => true,
        'delivery_experience' => true,
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
        'include_packing_slip_with_label' => 'IncludePackingSlipWithLabel',
        'include_complex_shipping_options' => 'IncludeComplexShippingOptions',
        'carrier_will_pick_up' => 'CarrierWillPickUp',
        'delivery_experience' => 'DeliveryExperience',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'include_packing_slip_with_label' => 'setIncludePackingSlipWithLabel',
        'include_complex_shipping_options' => 'setIncludeComplexShippingOptions',
        'carrier_will_pick_up' => 'setCarrierWillPickUp',
        'delivery_experience' => 'setDeliveryExperience',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'include_packing_slip_with_label' => 'getIncludePackingSlipWithLabel',
        'include_complex_shipping_options' => 'getIncludeComplexShippingOptions',
        'carrier_will_pick_up' => 'getCarrierWillPickUp',
        'delivery_experience' => 'getDeliveryExperience',
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
        $this->setIfExists('include_packing_slip_with_label', $data ?? [], null);
        $this->setIfExists('include_complex_shipping_options', $data ?? [], null);
        $this->setIfExists('carrier_will_pick_up', $data ?? [], null);
        $this->setIfExists('delivery_experience', $data ?? [], null);
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
        return [];
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
     * Gets include_packing_slip_with_label.
     */
    public function getIncludePackingSlipWithLabel(): ?bool
    {
        return $this->container['include_packing_slip_with_label'];
    }

    /**
     * Sets include_packing_slip_with_label.
     *
     * @param null|bool $include_packing_slip_with_label when true, include a packing slip with the label
     */
    public function setIncludePackingSlipWithLabel(?bool $include_packing_slip_with_label): self
    {
        if (is_null($include_packing_slip_with_label)) {
            array_push($this->openAPINullablesSetToNull, 'include_packing_slip_with_label');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('include_packing_slip_with_label', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['include_packing_slip_with_label'] = $include_packing_slip_with_label;

        return $this;
    }

    /**
     * Gets include_complex_shipping_options.
     */
    public function getIncludeComplexShippingOptions(): ?bool
    {
        return $this->container['include_complex_shipping_options'];
    }

    /**
     * Sets include_complex_shipping_options.
     *
     * @param null|bool $include_complex_shipping_options when true, include complex shipping options
     */
    public function setIncludeComplexShippingOptions(?bool $include_complex_shipping_options): self
    {
        if (is_null($include_complex_shipping_options)) {
            array_push($this->openAPINullablesSetToNull, 'include_complex_shipping_options');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('include_complex_shipping_options', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['include_complex_shipping_options'] = $include_complex_shipping_options;

        return $this;
    }

    /**
     * Gets carrier_will_pick_up.
     */
    public function getCarrierWillPickUp(): ?string
    {
        return $this->container['carrier_will_pick_up'];
    }

    /**
     * Sets carrier_will_pick_up.
     *
     * @param null|string $carrier_will_pick_up carrier_will_pick_up
     */
    public function setCarrierWillPickUp(?string $carrier_will_pick_up): self
    {
        if (is_null($carrier_will_pick_up)) {
            array_push($this->openAPINullablesSetToNull, 'carrier_will_pick_up');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('carrier_will_pick_up', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['carrier_will_pick_up'] = $carrier_will_pick_up;

        return $this;
    }

    /**
     * Gets delivery_experience.
     */
    public function getDeliveryExperience(): ?string
    {
        return $this->container['delivery_experience'];
    }

    /**
     * Sets delivery_experience.
     *
     * @param null|string $delivery_experience delivery_experience
     */
    public function setDeliveryExperience(?string $delivery_experience): self
    {
        if (is_null($delivery_experience)) {
            array_push($this->openAPINullablesSetToNull, 'delivery_experience');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('delivery_experience', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['delivery_experience'] = $delivery_experience;

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
