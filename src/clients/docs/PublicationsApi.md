# MyApi.PublicationsApi

All URIs are relative to *http://localhost:5540*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPublicationsEstablishmentIdGet**](PublicationsApi.md#apiPublicationsEstablishmentIdGet) | **GET** /api/Publications/establishment/{id} | 
[**apiPublicationsGet**](PublicationsApi.md#apiPublicationsGet) | **GET** /api/Publications | 
[**apiPublicationsIdDelete**](PublicationsApi.md#apiPublicationsIdDelete) | **DELETE** /api/Publications/{id} | 
[**apiPublicationsIdGet**](PublicationsApi.md#apiPublicationsIdGet) | **GET** /api/Publications/{id} | 
[**apiPublicationsIdPut**](PublicationsApi.md#apiPublicationsIdPut) | **PUT** /api/Publications/{id} | 
[**apiPublicationsPost**](PublicationsApi.md#apiPublicationsPost) | **POST** /api/Publications | 
[**apiPublicationsPriceGet**](PublicationsApi.md#apiPublicationsPriceGet) | **GET** /api/Publications/price | 
[**apiPublicationsScoreGet**](PublicationsApi.md#apiPublicationsScoreGet) | **GET** /api/Publications/score | 
[**apiPublicationsUserIdGet**](PublicationsApi.md#apiPublicationsUserIdGet) | **GET** /api/Publications/user/{id} | 

<a name="apiPublicationsEstablishmentIdGet"></a>
# **apiPublicationsEstablishmentIdGet**
> [Product] apiPublicationsEstablishmentIdGet(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.PublicationsApi();
let id = "id_example"; // String | 

apiInstance.apiPublicationsEstablishmentIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**[Product]**](Product.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiPublicationsGet"></a>
# **apiPublicationsGet**
> [Publication] apiPublicationsGet()



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.PublicationsApi();
apiInstance.apiPublicationsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Publication]**](Publication.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiPublicationsIdDelete"></a>
# **apiPublicationsIdDelete**
> apiPublicationsIdDelete(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.PublicationsApi();
let id = "id_example"; // String | 

apiInstance.apiPublicationsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiPublicationsIdGet"></a>
# **apiPublicationsIdGet**
> Publication apiPublicationsIdGet(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.PublicationsApi();
let id = "id_example"; // String | 

apiInstance.apiPublicationsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Publication**](Publication.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiPublicationsIdPut"></a>
# **apiPublicationsIdPut**
> apiPublicationsIdPut(id, opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.PublicationsApi();
let id = "id_example"; // String | 
let opts = { 
  'body': new MyApi.Publication() // Publication | 
};
apiInstance.apiPublicationsIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Publication**](Publication.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiPublicationsPost"></a>
# **apiPublicationsPost**
> Publication apiPublicationsPost(opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.PublicationsApi();
let opts = { 
  'body': new MyApi.Publication() // Publication | 
};
apiInstance.apiPublicationsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Publication**](Publication.md)|  | [optional] 

### Return type

[**Publication**](Publication.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiPublicationsPriceGet"></a>
# **apiPublicationsPriceGet**
> [Product] apiPublicationsPriceGet(opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.PublicationsApi();
let opts = { 
  'minPrice': 1.2, // Number | 
  'maxPrice': 1.2 // Number | 
};
apiInstance.apiPublicationsPriceGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minPrice** | **Number**|  | [optional] 
 **maxPrice** | **Number**|  | [optional] 

### Return type

[**[Product]**](Product.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiPublicationsScoreGet"></a>
# **apiPublicationsScoreGet**
> [Product] apiPublicationsScoreGet(opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.PublicationsApi();
let opts = { 
  'minScore': 1.2, // Number | 
  'maxScore': 1.2 // Number | 
};
apiInstance.apiPublicationsScoreGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minScore** | **Number**|  | [optional] 
 **maxScore** | **Number**|  | [optional] 

### Return type

[**[Product]**](Product.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiPublicationsUserIdGet"></a>
# **apiPublicationsUserIdGet**
> [Product] apiPublicationsUserIdGet(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.PublicationsApi();
let id = "id_example"; // String | 

apiInstance.apiPublicationsUserIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**[Product]**](Product.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

