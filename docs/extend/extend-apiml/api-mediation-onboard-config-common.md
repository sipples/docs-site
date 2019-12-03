# API Mediation Layer - REST service onboarding configuration

This article describes the ZOWE API Mediation Layer REST services onboarding configuration parameters.
The parameter descriptions provided in this document are valid for all API Mediation Layer (API ML) onboarding methods that use either the API ML onboarding enabler, or when making direct REST calls to the API ML Discovery Service. Configuration formats that are currently supported are _YAML_ for onboarding enablers and _XML_ for making direct REST calls to the API ML Discovery Service.

* [YAML and XML configuration structures](#yaml_and_xml_configuration_structures)
* [Configuring your REST service to onboard with the API ML Discovery Service](#configuring_your_rest_service_for_onboarding_with_the_api_ml_discovery_service)
    * [REST service identification](#rest_service_identification)
    * [Administrative endpoints relative URLs](#administrative_endpoints_relative_URLs)
    * [API info](#api_info)
    * [API routing information](#api_routing_information)
    * [API Catalog information](#api_catalog_information)
    * [API Security](#api_security)
    * [Eureka discovery service](#eureka_discovery_service)

## YAML and XML configuration structures

The configuration structure as well as the configuration format are different depending on the selected onboarding method. For example, if the configuration method uses a _YAML_ file, a parameter uses the following format:
  
    top-category:
        embeded-category-1:
            .....
                parameter-name: parameter-value
    
    
 If _XML_ configuration is used, the same parameter definition has the following format:

    <top-category>
        <embed-category-1>
            <parameter-name> 
                parameter-value
            </parameter-name>
        </embed-category-1>
    </top-category>


Additionally, the path of the parameters as well as the parameter names may be different.

**Example:**

The parameter `serviceIpAddress` used in _YAML_ based configuration is referenced as `<instance><ipAddr>...</ipAddr></instance>` in _XML_ configuration. 

The meaning and constraints for the individual parameters, however, do not change.      

In _YAML_ based configuration, the parameters are grouped into logical groups such as `apiInfo` or `routes`. The default group is not named and contains service identification and administrative information. 

_XML_ based configuration parameters which belong to different logical groups are placed together to form a `<metadata>` element.
The `metadata` is built automatically when _YAML_ configuration is used.
The `metadata` is stored in the API ML service registry and is subsequently provided to the registry clients. 
For example, the API ML Gateway uses information provided in the `routes` group to route requests to service instances. 
Similarly, the API ML Catalog uses the parameters from the `catalog` group to display the service description and documentation links. 
  
 **Note:** We do not recommend that you prepare corresponding configuration data and call the dedicated Eureka registration endpoint directly. This approach is unnecessarily complex and time-consuming. We recommend that you onboard your service using the API ML enabler libraries.
  
 While the plain Java enabler library can be used in REST API projects based on SpringFramework or Spring Boot framework, it is not recommended to use this enabler in projects which depend on SpringCloud Netflix components. 
 While Eureka's final configuration of a discoverable service is the same regardless of the method that is used, configuration settings for the API ML enablers and SpringCloud Eureka Client are different. Using the two configuration settings in combination makes the result state of the discovery registry unpredictable.

**Tip:**  For more information about API Mediation Layer see the following links:
  
  - [Onboarding overview of API services](#api-mediation-onboard-overview)
  - [Onboarding without an enabler](#api-mediation-onboard-rest-service-direct-eureka-call)
  - [Onboarding with the plain java enabler](#api-mediation-onboard-an-existing-java-rest-api-service_plain-java-enabler)
  - [TODO: On-boarding with a spring enabler](#api-mediation-onboard-java-rest-service_with-spring-enabler)

## Configuring your REST service to onboard with the API ML Discovery Service

In the following sections parameters are identified by their _YAML_ notation using the dot `.` convention. Additionally, the corresponding _XML_ path is provided in parentheses.

The configuration parameters belong to one of the following groups:

- [REST service identification](#rest-service-identification) 
- [Administrative endpoints](#administrative-endpoints)
- [API info](#api-info)
- [API routing information](#api-routing-information)
- [API catalog information](#api-catalog-information)
- [API security](#api-security)
- [Eureka discovery service](#eureka-discovery-service) 

### REST service identification

* **serviceId** (_XML_ Path: `/instance/app`)
    
    This parameter uniquely identifies instances of a microservice in the API ML. The service developer specifies a default value for the `serviceId` during the design of the service.
    
    **Note:** The `serviceId` applies to _YAML_ configuration only. If needed, the system administrator at the customer site can change the parameter and provide a new value in the externalized service configuration.
    
    For more information, see [api-mediation - onboarding enabler external configuration](#api-mediation-onboard-enabler-external-configuration.md). 
    
    **Important!**  Ensure that the service ID is set properly with the following considerations:
    
    * The API ML Gateway uses the `serviceId` for routing to the API service instances.
      As such, the `serviceId` must be a part of the service URL path in the API ML gateway address space. 
    * When two API services use the same `serviceId`, the API Gateway considers the services as clones of each other. 
      An incoming API request can be routed to either `serviceId` through load balancing.
    * The same `serviceId` should only be set for multiple API service instances for API scalability.
    * The `serviceId` value must only contain lowercase alphanumeric characters.
    * The `serviceId` cannot contain more than 40 characters.
    * The `serviceId` is linked to security resources. Changes to the service ID require an update of security resources.
        
    **Examples:**
    * If the `serviceId` is `sysviewlpr1`, the service URL in the API ML Gateway address space appears as the following address: 
            
       ```
       https://gateway-host:gateway-port/api/v1/sysviewlpr1/endpoint1/...
       ```

    * If a customer system administrator sets the service ID to `vantageprod1`, the service URL in the API ML Gateway address space appears as the following address:
       ```
       http://gateway:port/api/v1/vantageprod1/endpoint1/...
       ```
* **title** (_XML_ Path: `/instance/metadata/apiml.service.title`)
    
  This parameter specifies the human readable name of the API service instance. 
  
  **Examples:** 
  
  `Endevor Prod` or `Sysview LPAR1`

  This value is displayed in the API Catalog when a specific API service instance is selected. 
  This parameter can be externalized and set by the customer system administrator.

  **Tip:** We recommend that service developer provides a default value of the `title`.
        Use a title that describes the service instance so that the end user knows the specific purpose of the service instance.
    
* **description** (_XML_ Path: `/instance/metadata/apiml.service.description`)
    
    This parameter specifies a short description of the API service.
    
    **Examples:** 
    
    `CA Endevor SCM - Production Instance` or `CA SYSVIEW running on LPAR1` 
    
     This value is displayed in the API Catalog when a specific API service instance is selected. 
     This parameter can be externalized and set by the customer system administrator.  
    
  **Tip:** Describe the service so that the end user understands the function of the service.
 
* **baseUrl** 

    specifies the base URL pointing to your service.

    In _XML_ configuration, the baseUrl is decomposed into the following basic URL parts: `hostname`, `ipAddress` and `port` using the corresponding _XML_ paths:
    - **hostname**: /instance/hostname
    - **ipAddr**: /instance/ipAddr
    - **port**: /instance/port
  
    Additionally _XML_ configuration contains following properties:

    - **<securePort enabled="true">{port}</securePort>**
    - **<vipAddress>{serviceId}</vipAddress>**
    - **<secureVipAddress>{serviceId}</secureVipAddress>**
    - **<instanceId>{instanceId}</instanceId>**
    - **<dataCenterInfo><name>MyOwn</name></dataCenterInfo>**

    `baseUrl` is subsequently used as a prefix in combination with the administrative end points relative addresses to construct their absolute URLs:
    * **homePageRelativeUrl**
    * **statusPageRelativeUrl**
    * **healthCheckRelativeUrl** 
       
    **Example in _YAML_:**
    * `https://host:port/servicename` for HTTPS service        

*  **serviceIpAddress** (_Optional_) (_XML_ Path: `/instance/ipAddr`)

    specifies the IP address of the service. This parameter can be provided by system administrator in the externalized service configuration. 
    If this parameter is not present in the YAML/XML configuration file or is not set as service context parameter, it will be resolved from the hostname part of the baseUrl property using `java.net.InetAddress` capabilities.

### Administrative endpoints relative URLs

   The following snippet presents the format of the administrative endpoint properties:
   
   ```
homePageRelativeUrl:
statusPageRelativeUrl: /application/info
healthCheckRelativeUrl: /application/health
```
where:
                  
* **homePageRelativeUrl** (_XML_ Path: `/instance/metadata/homePageUrl`) 
    
    specifies the relative path to the home page of your service. The path should start with `/`.
    If your service has no home page, leave this parameter blank.
    
    **Examples:**
    * `homePageRelativeUrl: ` 
    
        This service has no home page
    * `homePageRelativeUrl: /` 
    
        This service has a home page with URL `${baseUrl}/`
    
    
* **statusPageRelativeUrl** (_XML_ Path: `/instance/statusPageUrl`)
    
    specifies the relative path to the status page of your service.
    
    Start this path with `/`.
    
    **Example:**

    `statusPageRelativeUrl: /application/info`
    
     This results in the URL:  
    `${baseUrl}/application/info` 

* **healthCheckRelativeUrl** (_XML_ Path: `/instance/healthCheckUrl`)
    
    specifies the relative path to the health check endpoint of your service. 
    
    Start this URL with `/`.
    
    **Example:**

    `healthCheckRelativeUrl: /application/health` 
    
     This results in the URL:  
    `${baseUrl}/application/health` 

### API info

REST services can provide multiple APIs. Add API info parameters for each API that your service wants to expose on the API ML. These parameters provide information for API (Swagger) documentation.
The following snippet presents the information properties of a single API:

```
apiInfo:
    - apiId: org.zowe.sampleservice
    version: v1 
    gatewayUrl: api/v1
    swaggerUrl: http://localhost:10021/sampleservice/api-doc
    documentationUrl: http://your.service.documentation.url
```

where:
* **apiInfo.apiId** (_XML_ Path: `/instance/metadata/apiml.apiInfo.${api-index}.apiId`)

    specifies the API identifier that is registered in the API ML installation.
        The API ID uniquely identifies the API in the API ML. 
        Multiple services can provide the same API. The API ID can be used
        to locate the same APIs that are provided by different services.
        The creator of the API defines this ID.
        The API ID needs to be a string of up to 64 characters
        that uses lowercase alphanumeric characters and a dot: `.` .
       
     We recommend that you use your organization as the prefix.

     
     <font color = "red"> Review the following note </font>

     **Note:** Currently _apiId_ is not used in requests routing. The parameter is stored in the `metadata` by the API ML enablers.
    The EurekaMetadataParser is transferring it to an ApiInfo object, but it is not used.
    My guess is that we use explicitly serviceId as a apiInfo.apiId, hence we allow only one API per service.
    

* **apiInfo.version** (_XML_ Path: `/instance/metadata/apiml.apiInfo.${api-index}.version`)

    specifies the api `version`. This parameter is used to correctly retrieve the API documentation according to requested version of the API.
    
* **apiInfo.gatewayUrl** (_XML_ Path: `/instance/metadata/apiml.apiInfo.${api-index}.gatewayUrl`)

    specifies the base path at the API Gateway where the API is available. 
    Ensure that this value is the same path as the `gatewayUrl` value in the `routes` sections for the routes, which belong to this API.

* **apiInfo.swaggerUrl** (_XML_ Path: `/instance/metadata/apiml.apiInfo.${api-index}.swaggerUrl`)

    (Optional) specifies the HTTP or HTTPS address where the Swagger JSON document is available. 
        
* **apiInfo.documentationUrl**  (_XML_ Path: `/instance/metadata/apiml.apiInfo.${api-index}.documentationUrl`)

    (Optional) specifies the link to the external documentation, if necessary. 
    A link to the external documentation can be included along with the Swagger documentation. 
    

### API routing information

The API routing group provides necessary routing information used by the API ML Gateway when routing incoming requests to the corresponding REST API service.
A single route can be used to direct REST calls to multiple resources or API endpoints. The route definition provides rules used by the API ML Gateway to rewrite the URL 
in the gateway address space. The routing information consists of two parameters per route: The `gatewayUrl` and `serviceUrl` parameters. These two parameters together specify a rule of how the API service endpoints are mapped to the API gateway endpoints.  

The following snippet is an example of the API routing information properties.

**Example:**
   
```
routes:
    - gatewayUrl: api
    serviceUrl: /sampleservice
    - gatewayUrl: api/v1
    serviceUrl: /sampleservice/api/v1
    - gatewayUrl: api/v1/api-doc
    serviceUrl: /sampleservice/api-doc
```
   where:

* **routes** (_XML_ Path: `/instance/metadata/apiml.routes...`)
    
    specifies the container element for the routes.

* **routes.gatewayUrl** (_XML_ Path: `/instance/metadata/apiml.routes.${route-prefix}.gatewayUrl`)
        
    specifies the portion of the gateway URL which is replaced by the `serviceUrl` path part.

* **routes.serviceUrl** (_XML_ Path: `/instance/metadata/apiml.routes.${route-prefix}.serviceUrl`)
        
   specifies the portion of the service instance URL path which replaces the `gatewayUrl`.
   
**Example:**
  
  Suppose there is a service with serviceId "helloworldservice" that is not included in the routing metadata because it is a part of the basic configuration.
  The following code block defines the metadata routing configuration: 
  
        metadata-map:
            routed-services:
                uiv1:
                    gateway-url: "ui/v1"
                    service-url: "/helloworld"
                apiv1:
                    gateway-url: "api/v1"
                    service-url: "/helloworld/v1"
                apiv2:
                    gateway-url: "api/v2"
                    service-url: "/helloworld/v2"

  Using this metadate routing configuration, the following routing options would be available at the APIM Gateway for the "helloworldservice" service:
  
* UI 

    `https://gateway/ui/v1/helloworldservice` will be routed to `https://hwServiceHost:port/helloworld/`
* API major version 1

    `https://gateway/api/v1/helloworldservice` will be routed to `https://hwServiceHost:port/helloworld/v1`
* API major version 2 

    `https://gateway/api/v2/helloworldservice` will be routed to `https://hwServiceHost:port/helloworld/v2`

**Note:** The routes configuration used for a direct REST call to register a service must also contain a prefix before the `gatewayUrl` and `serviceUrl`.
This prefix is used to differentiate the routes. It is automatically calculated by the API ML enabler. This prefix must be provided manually when _XML_ configuration is used.

For detailed information about API ML routing, see [API Gateway Routing](https://github.com/zowe/api-layer/wiki/API-Gateway-Routing).

### API Catalog information

The API ML Catalog UI displays information about discoverable REST services registered with the API ML Discovery Service. 
Information displayed in the Catalog is defined by the metadata provided by your service during registration. 
The catalog can group correlated services in the same tile, if these services are configured with the same `catalog.tile.id` metadata parameter. 

The following code block is an example of configuration of a service tile in the Catalog:

**Example:**

 ```
    catalog:
      tile:
        id: apimediationlayer
        title:  API Mediation Layer API
        description: The API Mediation Layer for z/OS internal API services.
        version: 1.0.0
```

   where:

* **catalog.tile.id** (_XML_ Path: `/instance/metadata/apiml.catalog.tile.id`)
    
    specifies the unique identifier for the product family of API services. 
    This is a value used by the API ML to group multiple API services together into tiles. 
    Each unique identifier represents a single API Catalog UI dashboard tile. 

    **Tip:**  Specify a value that does not interfere with API services from other products.
    
* **catalog.tile.title** (_XML_ Path: `/instance/metadata/apiml.catalog.tile.title`)
    
    specifies the title of the API services product family. This value is displayed in the API Catalog UI dashboard as the tile title.
    
* **catalog.tile.description** (_XML_ Path: `/instance/metadata/apiml.catalog.tile.description`)
    
    specifies the detailed description of the API services product family. 
    This value is displayed in the API Catalog UI dashboard as the tile description.
    
* **catalog.tile.version** (_XML_ Path: `/instance/metadata/apiml.catalog.tile.version`)
    
    specifies the semantic version of this API Catalog tile. 

    **Note:** Ensure that you increase the number of the version when you introduce new changes to the product family details of the API services 
    including the title and description.


### API Security 
REST services onboarded on API ML act both as a client and as a server. These two roles may have different security requirements. 

Secure TLS (aka SSL) configuration setup is required for communication to the ZOWE API ML Discovery Service as a REST client. When the service operates as a REST server it is possible to operate it in secure HTTPS or insecure HTTP mode.

The environment specific security requirements for the service are determined and configured by the system administrator.

When an enabler is used to onboard a service, the configuration is provided in an `ssl` section/group in the same _YAML_ file that used to configure the Eureka parameters and the service metadata. 

When an API ML enabler is not used, such as when making a direct REST call to the API ML Discovery Service with a _XML_ configuration, a registration call must be executed from a third party REST Client tool such as PostMan, SOAP UI, Insomnia CURL, etc. 
In this case, the security configuration must be provided directly to the REST client tool used to execute the call. 

**Tip:** For more information, see [API ML security](#api-mediation-security.md).

The `tls`/`ssl` configuration consists of the following parameters:

* **verifySslCertificatesOfServices**
  Allows to prevent server certificate validation.
  *CAUTION* Use with care! Should not be used in production environments, as this will significantly degrade overal security of the system.
  
* **protocol**
    TLSv1.2

    This paramenter specifies the TLS protocol version currently used by ZOWE API ML Discovery service.
    
* **keyAlias**
  
    This paramenter specifies the alias used to address the private key in the keystore. 

* **keyPassword**

    This paramenter specifies the password associated with the private key. 
  
* **keyStore**

    This paramenter specifies the keystore file used to store the private key. 

* **keyStorePassword**

    This paramenter specifies the password used to unlock the keystore.

* **keyStoreType**

    This paramenter specifies the type of the keystore.

* **trustStore**
  
    This paramenter specifies the truststore file used to keep other parties public keys and certificates. 

* **trustStorePassword: password**

    This paramenter specifies the password used to unlock the truststore.

* **trustStoreType: PKCS12**

    This paramenter specifies the truststore type. One of: PKCS12 default

* **ciphers: TLS_RSA_WITH_AES_128_CBC_SHA, TLS_DHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_EMPTY_RENEGOTIATION_INFO_SCSV**

  To secure the transfer of data, TLS/SSL uses one or more cipher suites. A cipher suite is a combination of authentication, encryption, and message authentication code (MAC) algorithms. They are used during the negotiation of security settings for a TLS/SSL connection as well as for the transfer of data.

**Notes:** 
    * You need to define both the key store and the trust store even if your server is not using an HTTPS port.
    * Currently 'ciphers' is not used. It is an optional and serves as a place holder only.

### Eureka discovery service

The Eureka discovery service parameters group contains a single parameter used to address Eureka discovery service location.
An example is presented in the following snippet. 

**Example:**
```
discoveryServiceUrls:
- https://localhost:10011/eureka
- http://......
```
 where:      

* **discoveryServiceUrls** (_XML_ Path: N/A)
    
    specifies the public URL of the Discovery Service. The system administrator at the customer site defines this parameter.
    It is possible to provide multiple values in order to utilize fail over and/or load balancing mechanisms.  
    
     **Example:**

    `http://eureka:password@141.202.65.33:10311/eureka/`
