<?php

/**
 * BuyerTaxInformation.
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
 * Selling Partner API for Orders.
 *
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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

namespace SpApi\Model\orders\v0;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * BuyerTaxInformation Class Doc Comment.
 *
 * @category Class
 *
 * @description Contains the business invoice tax information. Available only in the TR marketplace.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class BuyerTaxInformation implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'BuyerTaxInformation';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'buyer_legal_company_name' => 'string',
        'buyer_business_address' => 'string',
        'buyer_tax_registration_id' => 'string',
        'buyer_tax_office' => 'string'];

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
        'buyer_legal_company_name' => null,
        'buyer_business_address' => null,
        'buyer_tax_registration_id' => null,
        'buyer_tax_office' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'buyer_legal_company_name' => true,
        'buyer_business_address' => true,
        'buyer_tax_registration_id' => true,
        'buyer_tax_office' => true,
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
        'buyer_legal_company_name' => 'BuyerLegalCompanyName',
        'buyer_business_address' => 'BuyerBusinessAddress',
        'buyer_tax_registration_id' => 'BuyerTaxRegistrationId',
        'buyer_tax_office' => 'BuyerTaxOffice',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'buyer_legal_company_name' => 'setBuyerLegalCompanyName',
        'buyer_business_address' => 'setBuyerBusinessAddress',
        'buyer_tax_registration_id' => 'setBuyerTaxRegistrationId',
        'buyer_tax_office' => 'setBuyerTaxOffice',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'buyer_legal_company_name' => 'getBuyerLegalCompanyName',
        'buyer_business_address' => 'getBuyerBusinessAddress',
        'buyer_tax_registration_id' => 'getBuyerTaxRegistrationId',
        'buyer_tax_office' => 'getBuyerTaxOffice',
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
        $this->setIfExists('buyer_legal_company_name', $data ?? [], null);
        $this->setIfExists('buyer_business_address', $data ?? [], null);
        $this->setIfExists('buyer_tax_registration_id', $data ?? [], null);
        $this->setIfExists('buyer_tax_office', $data ?? [], null);
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
     * Gets buyer_legal_company_name.
     */
    public function getBuyerLegalCompanyName(): ?string
    {
        return $this->container['buyer_legal_company_name'];
    }

    /**
     * Sets buyer_legal_company_name.
     *
     * @param null|string $buyer_legal_company_name business buyer's company legal name
     */
    public function setBuyerLegalCompanyName(?string $buyer_legal_company_name): self
    {
        if (is_null($buyer_legal_company_name)) {
            array_push($this->openAPINullablesSetToNull, 'buyer_legal_company_name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('buyer_legal_company_name', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['buyer_legal_company_name'] = $buyer_legal_company_name;

        return $this;
    }

    /**
     * Gets buyer_business_address.
     */
    public function getBuyerBusinessAddress(): ?string
    {
        return $this->container['buyer_business_address'];
    }

    /**
     * Sets buyer_business_address.
     *
     * @param null|string $buyer_business_address business buyer's address
     */
    public function setBuyerBusinessAddress(?string $buyer_business_address): self
    {
        if (is_null($buyer_business_address)) {
            array_push($this->openAPINullablesSetToNull, 'buyer_business_address');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('buyer_business_address', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['buyer_business_address'] = $buyer_business_address;

        return $this;
    }

    /**
     * Gets buyer_tax_registration_id.
     */
    public function getBuyerTaxRegistrationId(): ?string
    {
        return $this->container['buyer_tax_registration_id'];
    }

    /**
     * Sets buyer_tax_registration_id.
     *
     * @param null|string $buyer_tax_registration_id business buyer's tax registration ID
     */
    public function setBuyerTaxRegistrationId(?string $buyer_tax_registration_id): self
    {
        if (is_null($buyer_tax_registration_id)) {
            array_push($this->openAPINullablesSetToNull, 'buyer_tax_registration_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('buyer_tax_registration_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['buyer_tax_registration_id'] = $buyer_tax_registration_id;

        return $this;
    }

    /**
     * Gets buyer_tax_office.
     */
    public function getBuyerTaxOffice(): ?string
    {
        return $this->container['buyer_tax_office'];
    }

    /**
     * Sets buyer_tax_office.
     *
     * @param null|string $buyer_tax_office business buyer's tax office
     */
    public function setBuyerTaxOffice(?string $buyer_tax_office): self
    {
        if (is_null($buyer_tax_office)) {
            array_push($this->openAPINullablesSetToNull, 'buyer_tax_office');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('buyer_tax_office', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['buyer_tax_office'] = $buyer_tax_office;

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
