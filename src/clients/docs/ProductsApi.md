# MyApi.ProductsApi

All URIs are relative to *http://localhost:5540*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProductsGet**](ProductsApi.md#apiProductsGet) | **GET** /api/Products | 
[**apiProductsIdDelete**](ProductsApi.md#apiProductsIdDelete) | **DELETE** /api/Products/{id} | 
[**apiProductsIdGet**](ProductsApi.md#apiProductsIdGet) | **GET** /api/Products/{id} | 
[**apiProductsIdPut**](ProductsApi.md#apiProductsIdPut) | **PUT** /api/Products/{id} | 
[**apiProductsPost**](ProductsApi.md#apiProductsPost) | **POST** /api/Products | 
[**apiProductsPublicationIdGet**](ProductsApi.md#apiProductsPublicationIdGet) | **GET** /api/Products/publication/{id} | 

<a name="apiProductsGet"></a>
# **apiProductsGet**
> [Product] apiProductsGet()



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.ProductsApi();
apiInstance.apiProductsGet((error, data, response) => {
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

[**[Product]**](Product.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiProductsIdDelete"></a>
# **apiProductsIdDelete**
> apiProductsIdDelete(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.ProductsApi();
let id = "id_example"; // String | 

apiInstance.apiProductsIdDelete(id, (error, data, response) => {
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

<a name="apiProductsIdGet"></a>
# **apiProductsIdGet**
> Product apiProductsIdGet(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.ProductsApi();
let id = "id_example"; // String | 

apiInstance.apiProductsIdGet(id, (error, data, response) => {
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

[**Product**](Product.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiProductsIdPut"></a>
# **apiProductsIdPut**
> apiProductsIdPut(id, opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.ProductsApi();
let id = "id_example"; // String | 
let opts = { 
  'body': new MyApi.Product() // Product | 
};
apiInstance.apiProductsIdPut(id, opts, (error, data, response) => {
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
 **body** | [**Product**](Product.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiProductsPost"></a>
# **apiProductsPost**
> Product apiProductsPost(opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.ProductsApi();
let opts = { 
  'body': new MyApi.Product() // Product | 
};
apiInstance.apiProductsPost(opts, (error, data, response) => {
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
 **body** | [**Product**](Product.md)|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiProductsPublicationIdGet"></a>
# **apiProductsPublicationIdGet**
> [Product] apiProductsPublicationIdGet(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.ProductsApi();
let id = "id_example"; // String | 

apiInstance.apiProductsPublicationIdGet(id, (error, data, response) => {
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

