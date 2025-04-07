<?php

/**
 * PrintOption.
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
 * Amazon Shipping API.
 *
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\shipping\v2;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * PrintOption Class Doc Comment.
 *
 * @category Class
 *
 * @description The format options available for a label.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class PrintOption implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'PrintOption';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'supported_dpis' => 'int[]',
        'supported_page_layouts' => 'string[]',
        'supported_file_joining_options' => 'bool[]',
        'supported_document_details' => '\SpApi\Model\shipping\v2\SupportedDocumentDetail[]'];

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
        'supported_dpis' => null,
        'supported_page_layouts' => null,
        'supported_file_joining_options' => null,
        'supported_document_details' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'supported_dpis' => true,
        'supported_page_layouts' => false,
        'supported_file_joining_options' => false,
        'supported_document_details' => false,
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
        'supported_dpis' => 'supportedDPIs',
        'supported_page_layouts' => 'supportedPageLayouts',
        'supported_file_joining_options' => 'supportedFileJoiningOptions',
        'supported_document_details' => 'supportedDocumentDetails',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'supported_dpis' => 'setSupportedDpis',
        'supported_page_layouts' => 'setSupportedPageLayouts',
        'supported_file_joining_options' => 'setSupportedFileJoiningOptions',
        'supported_document_details' => 'setSupportedDocumentDetails',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'supported_dpis' => 'getSupportedDpis',
        'supported_page_layouts' => 'getSupportedPageLayouts',
        'supported_file_joining_options' => 'getSupportedFileJoiningOptions',
        'supported_document_details' => 'getSupportedDocumentDetails',
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
        $this->setIfExists('supported_dpis', $data ?? [], null);
        $this->setIfExists('supported_page_layouts', $data ?? [], null);
        $this->setIfExists('supported_file_joining_options', $data ?? [], null);
        $this->setIfExists('supported_document_details', $data ?? [], null);
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

        if (null === $this->container['supported_page_layouts']) {
            $invalidProperties[] = "'supported_page_layouts' can't be null";
        }
        if (null === $this->container['supported_file_joining_options']) {
            $invalidProperties[] = "'supported_file_joining_options' can't be null";
        }
        if (null === $this->container['supported_document_details']) {
            $invalidProperties[] = "'supported_document_details' can't be null";
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
     * Gets supported_dpis.
     */
    public function getSupportedDpis(): ?array
    {
        return $this->container['supported_dpis'];
    }

    /**
     * Sets supported_dpis.
     *
     * @param null|array $supported_dpis a list of the supported DPI options for a document
     */
    public function setSupportedDpis(?array $supported_dpis): self
    {
        if (is_null($supported_dpis)) {
            array_push($this->openAPINullablesSetToNull, 'supported_dpis');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('supported_dpis', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['supported_dpis'] = $supported_dpis;

        return $this;
    }

    /**
     * Gets supported_page_layouts.
     */
    public function getSupportedPageLayouts(): array
    {
        return $this->container['supported_page_layouts'];
    }

    /**
     * Sets supported_page_layouts.
     *
     * @param array $supported_page_layouts a list of the supported page layout options for a document
     */
    public function setSupportedPageLayouts(array $supported_page_layouts): self
    {
        if (is_null($supported_page_layouts)) {
            throw new \InvalidArgumentException('non-nullable supported_page_layouts cannot be null');
        }
        $this->container['supported_page_layouts'] = $supported_page_layouts;

        return $this;
    }

    /**
     * Gets supported_file_joining_options.
     */
    public function getSupportedFileJoiningOptions(): array
    {
        return $this->container['supported_file_joining_options'];
    }

    /**
     * Sets supported_file_joining_options.
     *
     * @param array $supported_file_joining_options a list of the supported needFileJoining boolean values for a document
     */
    public function setSupportedFileJoiningOptions(array $supported_file_joining_options): self
    {
        if (is_null($supported_file_joining_options)) {
            throw new \InvalidArgumentException('non-nullable supported_file_joining_options cannot be null');
        }
        $this->container['supported_file_joining_options'] = $supported_file_joining_options;

        return $this;
    }

    /**
     * Gets supported_document_details.
     */
    public function getSupportedDocumentDetails(): array
    {
        return $this->container['supported_document_details'];
    }

    /**
     * Sets supported_document_details.
     *
     * @param array $supported_document_details a list of the supported documented details
     */
    public function setSupportedDocumentDetails(array $supported_document_details): self
    {
        if (is_null($supported_document_details)) {
            throw new \InvalidArgumentException('non-nullable supported_document_details cannot be null');
        }
        $this->container['supported_document_details'] = $supported_document_details;

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
