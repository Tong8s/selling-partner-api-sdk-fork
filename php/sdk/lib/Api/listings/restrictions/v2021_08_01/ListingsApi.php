<?php

/**
 * ListingsApi
 * PHP version 8.3.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Listings Restrictions.
 *
 * The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](doc:listings-restrictions-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Api\listings\restrictions\v2021_08_01;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Promise\PromiseInterface;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use SpApi\ApiException;
use SpApi\AuthAndAuth\RateLimitConfiguration;
use SpApi\Configuration;
use SpApi\HeaderSelector;
use SpApi\Model\listings\restrictions\v2021_08_01\RestrictionList;
use SpApi\ObjectSerializer;
use Symfony\Component\RateLimiter\LimiterInterface;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use Symfony\Component\RateLimiter\Storage\InMemoryStorage;

/**
 * ListingsApi Class Doc Comment.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class ListingsApi
{
    protected ClientInterface $client;

    protected Configuration $config;

    protected HeaderSelector $headerSelector;

    /**
     * @var int Host index
     */
    protected int $hostIndex;

    private ?RateLimitConfiguration $rateLimitConfig = null;

    private ?LimiterInterface $rateLimiter = null;

    /**
     * @param int $hostIndex (Optional) host index to select the list of hosts if defined in the OpenAPI spec
     */
    public function __construct(
        Configuration $config,
        ?RateLimitConfiguration $rateLimitConfig = null,
        ?ClientInterface $client = null,
        ?HeaderSelector $selector = null,
        int $hostIndex = 0
    ) {
        $this->config = $config;
        $this->rateLimitConfig = $rateLimitConfig;
        if ($rateLimitConfig) {
            $type = $rateLimitConfig->getRateLimitType();
            $rateLimitOptions = [
                'id' => 'spApiCall',
                'policy' => $type,
                'limit' => $rateLimitConfig->getRateLimitTokenLimit(),
            ];
            if ('fixed_window' === $type || 'sliding_window' === $type) {
                $rateLimitOptions['interval'] = $rateLimitConfig->getRateLimitToken().'seconds';
            } else {
                $rateLimitOptions['rate'] = ['interval' => $rateLimitConfig->getRateLimitToken().'seconds'];
            }
            $factory = new RateLimiterFactory($rateLimitOptions, new InMemoryStorage());
            $this->rateLimiter = $factory->create();
        }

        $this->client = $client ?: new Client();
        $this->headerSelector = $selector ?: new HeaderSelector();
        $this->hostIndex = $hostIndex;
    }

    /**
     * Set the host index.
     *
     * @param int $hostIndex Host index (required)
     */
    public function setHostIndex(int $hostIndex): void
    {
        $this->hostIndex = $hostIndex;
    }

    /**
     * Get the host index.
     *
     * @return int Host index
     */
    public function getHostIndex(): int
    {
        return $this->hostIndex;
    }

    public function getConfig(): Configuration
    {
        return $this->config;
    }

    /**
     * Operation getListingsRestrictions.
     *
     * @param string      $asin
     *                                     The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @param string      $seller_id
     *                                     A selling partner identifier, such as a merchant account. (required)
     * @param string[]    $marketplace_ids
     *                                     A comma-delimited list of Amazon marketplace identifiers for the request. (required)
     * @param null|string $condition_type
     *                                     The condition used to filter restrictions. (optional)
     * @param null|string $reason_locale
     *                                     A locale for reason text localization. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale. (optional)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function getListingsRestrictions(
        string $asin,
        string $seller_id,
        array $marketplace_ids,
        ?string $condition_type = null,
        ?string $reason_locale = null
    ): RestrictionList {
        list($response) = $this->getListingsRestrictionsWithHttpInfo($asin, $seller_id, $marketplace_ids, $condition_type, $reason_locale);

        return $response;
    }

    /**
     * Operation getListingsRestrictionsWithHttpInfo.
     *
     * @param string      $asin
     *                                     The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @param string      $seller_id
     *                                     A selling partner identifier, such as a merchant account. (required)
     * @param string[]    $marketplace_ids
     *                                     A comma-delimited list of Amazon marketplace identifiers for the request. (required)
     * @param null|string $condition_type
     *                                     The condition used to filter restrictions. (optional)
     * @param null|string $reason_locale
     *                                     A locale for reason text localization. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale. (optional)
     *
     * @return array of \SpApi\Model\listings\restrictions\v2021_08_01\RestrictionList, HTTP status code, HTTP response headers (array of strings)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function getListingsRestrictionsWithHttpInfo(
        string $asin,
        string $seller_id,
        array $marketplace_ids,
        ?string $condition_type = null,
        ?string $reason_locale = null
    ): array {
        $request = $this->getListingsRestrictionsRequest($asin, $seller_id, $marketplace_ids, $condition_type, $reason_locale);
        $request = $this->config->sign($request);

        try {
            $options = $this->createHttpClientOption();

            try {
                $this->rateLimitWait();
                $response = $this->client->send($request, $options);
            } catch (RequestException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getResponse()->getBody()}",
                    (int) $e->getCode(),
                    $e->getResponse() ? $e->getResponse()->getHeaders() : null,
                    $e->getResponse() ? (string) $e->getResponse()->getBody() : null
                );
            } catch (ConnectException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    null,
                    null
                );
            }

            $statusCode = $response->getStatusCode();

            if ($statusCode < 200 || $statusCode > 299) {
                throw new ApiException(
                    sprintf(
                        '[%d] Error connecting to the API (%s)',
                        $statusCode,
                        (string) $request->getUri()
                    ),
                    $statusCode,
                    $response->getHeaders(),
                    (string) $response->getBody()
                );
            }

            switch ($statusCode) {
                case 200:
                    if ('\SpApi\Model\listings\restrictions\v2021_08_01\RestrictionList' === '\SplFileObject') {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\listings\restrictions\v2021_08_01\RestrictionList' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\listings\restrictions\v2021_08_01\RestrictionList', []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];

                case 400:
                    if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' === '\SplFileObject') {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]', []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];

                case 403:
                    if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' === '\SplFileObject') {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]', []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];

                case 404:
                    if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' === '\SplFileObject') {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]', []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];

                case 413:
                    if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' === '\SplFileObject') {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]', []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];

                case 415:
                    if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' === '\SplFileObject') {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]', []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];

                case 429:
                    if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' === '\SplFileObject') {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]', []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];

                case 500:
                    if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' === '\SplFileObject') {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]', []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];

                case 503:
                    if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' === '\SplFileObject') {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\listings\restrictions\v2021_08_01\Error[]' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]', []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];
            }

            $returnType = '\SpApi\Model\listings\restrictions\v2021_08_01\RestrictionList';
            if ('\SplFileObject' === $returnType) {
                $content = $response->getBody(); // stream goes to serializer
            } else {
                $content = (string) $response->getBody();
                if ('string' !== $returnType) {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, $returnType, []),
                $response->getStatusCode(),
                $response->getHeaders(),
            ];
        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\listings\restrictions\v2021_08_01\RestrictionList',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);

                    break;

                case 400:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);

                    break;

                case 403:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);

                    break;

                case 404:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);

                    break;

                case 413:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);

                    break;

                case 415:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);

                    break;

                case 429:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);

                    break;

                case 500:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);

                    break;

                case 503:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\listings\restrictions\v2021_08_01\Error[]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);

                    break;
            }

            throw $e;
        }
    }

    /**
     * Operation getListingsRestrictionsAsync.
     *
     * @param string      $asin
     *                                     The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @param string      $seller_id
     *                                     A selling partner identifier, such as a merchant account. (required)
     * @param string[]    $marketplace_ids
     *                                     A comma-delimited list of Amazon marketplace identifiers for the request. (required)
     * @param null|string $condition_type
     *                                     The condition used to filter restrictions. (optional)
     * @param null|string $reason_locale
     *                                     A locale for reason text localization. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function getListingsRestrictionsAsync(
        string $asin,
        string $seller_id,
        array $marketplace_ids,
        ?string $condition_type = null,
        ?string $reason_locale = null
    ): PromiseInterface {
        return $this->getListingsRestrictionsAsyncWithHttpInfo($asin, $seller_id, $marketplace_ids, $condition_type, $reason_locale)
            ->then(
                function ($response) {
                    return $response[0];
                }
            )
        ;
    }

    /**
     * Operation getListingsRestrictionsAsyncWithHttpInfo.
     *
     * @param string      $asin
     *                                     The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @param string      $seller_id
     *                                     A selling partner identifier, such as a merchant account. (required)
     * @param string[]    $marketplace_ids
     *                                     A comma-delimited list of Amazon marketplace identifiers for the request. (required)
     * @param null|string $condition_type
     *                                     The condition used to filter restrictions. (optional)
     * @param null|string $reason_locale
     *                                     A locale for reason text localization. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function getListingsRestrictionsAsyncWithHttpInfo(
        string $asin,
        string $seller_id,
        array $marketplace_ids,
        ?string $condition_type = null,
        ?string $reason_locale = null
    ): PromiseInterface {
        $returnType = '\SpApi\Model\listings\restrictions\v2021_08_01\RestrictionList';
        $request = $this->getListingsRestrictionsRequest($asin, $seller_id, $marketplace_ids, $condition_type, $reason_locale);
        $request = $this->config->sign($request);
        $this->rateLimitWait();

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    if ('\SplFileObject' === $returnType) {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('string' !== $returnType) {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];
                },
                function ($exception) {
                    $response = $exception->getResponse();
                    $statusCode = $response->getStatusCode();

                    throw new ApiException(
                        sprintf(
                            '[%d] Error connecting to the API (%s)',
                            $statusCode,
                            $exception->getRequest()->getUri()
                        ),
                        $statusCode,
                        $response->getHeaders(),
                        (string) $response->getBody()
                    );
                }
            )
        ;
    }

    /**
     * Create request for operation 'getListingsRestrictions'.
     *
     * @param string      $asin
     *                                     The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @param string      $seller_id
     *                                     A selling partner identifier, such as a merchant account. (required)
     * @param string[]    $marketplace_ids
     *                                     A comma-delimited list of Amazon marketplace identifiers for the request. (required)
     * @param null|string $condition_type
     *                                     The condition used to filter restrictions. (optional)
     * @param null|string $reason_locale
     *                                     A locale for reason text localization. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function getListingsRestrictionsRequest(
        string $asin,
        string $seller_id,
        array $marketplace_ids,
        ?string $condition_type = null,
        ?string $reason_locale = null
    ): Request {
        // verify the required parameter 'asin' is set
        if (null === $asin || (is_array($asin) && 0 === count($asin))) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $asin when calling getListingsRestrictions'
            );
        }
        // verify the required parameter 'seller_id' is set
        if (null === $seller_id || (is_array($seller_id) && 0 === count($seller_id))) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $seller_id when calling getListingsRestrictions'
            );
        }
        // verify the required parameter 'marketplace_ids' is set
        if (null === $marketplace_ids || (is_array($marketplace_ids) && 0 === count($marketplace_ids))) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $marketplace_ids when calling getListingsRestrictions'
            );
        }

        $resourcePath = '/listings/2021-08-01/restrictions';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $asin,
            'asin', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            true // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $condition_type,
            'conditionType', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            false // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $seller_id,
            'sellerId', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            true // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $marketplace_ids,
            'marketplaceIds', // param base name
            'array', // openApiType
            'form', // style
            false, // explode
            true // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $reason_locale,
            'reasonLocale', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            false // required
        ) ?? []);

        if ($multipart) {
            $headers = $this->headerSelector->selectHeadersForMultipart(
                ['application/json']
            );
        } else {
            $headers = $this->headerSelector->selectHeaders(
                ['application/json'],
                '',
                false
            );
        }

        // for model (json/xml)
        if (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $formParamValueItems = is_array($formParamValue) ? $formParamValue : [$formParamValue];
                    foreach ($formParamValueItems as $formParamValueItem) {
                        $multipartContents[] = [
                            'name' => $formParamName,
                            'contents' => $formParamValueItem,
                        ];
                    }
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);
            } elseif ('application/json' === $headers['Content-Type']) {
                $httpBody = \GuzzleHttp\json_encode($formParams);
            } else {
                // for HTTP post (form)
                $httpBody = ObjectSerializer::buildQuery($formParams, $this->config);
            }
        }

        $defaultHeaders = [];
        if ($this->config->getUserAgent()) {
            $defaultHeaders['User-Agent'] = $this->config->getUserAgent();
        }

        $headers = array_merge(
            $defaultHeaders,
            $headerParams,
            $headers
        );

        $query = ObjectSerializer::buildQuery($queryParams, $this->config);

        return new Request(
            'GET',
            $this->config->getHost().$resourcePath.($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Rate Limiter waits for tokens.
     */
    public function rateLimitWait(): void
    {
        if ($this->rateLimiter) {
            $type = $this->rateLimitConfig->getRateLimitType();
            if (0 != $this->rateLimitConfig->getTimeOut() && ('token_bucket' == $type || 'fixed_window' == $type)) {
                $this->rateLimiter->reserve(1, $this->rateLimitConfig->getTimeOut() / 1000)->wait();
            } else {
                $this->rateLimiter->consume()->wait();
            }
        }
    }

    /**
     * Create http client option.
     *
     * @return array of http client options
     *
     * @throws \RuntimeException on file opening failure
     */
    protected function createHttpClientOption(): array
    {
        $options = [];
        if ($this->config->getDebug()) {
            $options[RequestOptions::DEBUG] = fopen($this->config->getDebugFile(), 'a');
            if (!$options[RequestOptions::DEBUG]) {
                throw new \RuntimeException('Failed to open the debug file: '.$this->config->getDebugFile());
            }
        }

        return $options;
    }
}
