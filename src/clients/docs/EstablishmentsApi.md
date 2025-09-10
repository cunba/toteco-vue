# MyApi.EstablishmentsApi

All URIs are relative to *http://localhost:5540*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiEstablishmentsGet**](EstablishmentsApi.md#apiEstablishmentsGet) | **GET** /api/Establishments | 
[**apiEstablishmentsIdDelete**](EstablishmentsApi.md#apiEstablishmentsIdDelete) | **DELETE** /api/Establishments/{id} | 
[**apiEstablishmentsIdGet**](EstablishmentsApi.md#apiEstablishmentsIdGet) | **GET** /api/Establishments/{id} | 
[**apiEstablishmentsIdPut**](EstablishmentsApi.md#apiEstablishmentsIdPut) | **PUT** /api/Establishments/{id} | 
[**apiEstablishmentsNameNameGet**](EstablishmentsApi.md#apiEstablishmentsNameNameGet) | **GET** /api/Establishments/name/{name} | 
[**apiEstablishmentsOpenOpenGet**](EstablishmentsApi.md#apiEstablishmentsOpenOpenGet) | **GET** /api/Establishments/open/{open} | 
[**apiEstablishmentsPost**](EstablishmentsApi.md#apiEstablishmentsPost) | **POST** /api/Establishments | 
[**apiEstablishmentsScoreRangeGet**](EstablishmentsApi.md#apiEstablishmentsScoreRangeGet) | **GET** /api/Establishments/score-range | 
[**apiEstablishmentsScoreScoreGet**](EstablishmentsApi.md#apiEstablishmentsScoreScoreGet) | **GET** /api/Establishments/score/{score} | 

<a name="apiEstablishmentsGet"></a>
# **apiEstablishmentsGet**
> [Establishment] apiEstablishmentsGet()



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.EstablishmentsApi();
apiInstance.apiEstablishmentsGet((error, data, response) => {
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

[**[Establishment]**](Establishment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiEstablishmentsIdDelete"></a>
# **apiEstablishmentsIdDelete**
> apiEstablishmentsIdDelete(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.EstablishmentsApi();
let id = "id_example"; // String | 

apiInstance.apiEstablishmentsIdDelete(id, (error, data, response) => {
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

<a name="apiEstablishmentsIdGet"></a>
# **apiEstablishmentsIdGet**
> Establishment apiEstablishmentsIdGet(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.EstablishmentsApi();
let id = "id_example"; // String | 

apiInstance.apiEstablishmentsIdGet(id, (error, data, response) => {
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

[**Establishment**](Establishment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiEstablishmentsIdPut"></a>
# **apiEstablishmentsIdPut**
> apiEstablishmentsIdPut(id, opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.EstablishmentsApi();
let id = "id_example"; // String | 
let opts = { 
  'body': new MyApi.Establishment() // Establishment | 
};
apiInstance.apiEstablishmentsIdPut(id, opts, (error, data, response) => {
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
 **body** | [**Establishment**](Establishment.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiEstablishmentsNameNameGet"></a>
# **apiEstablishmentsNameNameGet**
> [Establishment] apiEstablishmentsNameNameGet(name)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.EstablishmentsApi();
let name = "name_example"; // String | 

apiInstance.apiEstablishmentsNameNameGet(name, (error, data, response) => {
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
 **name** | **String**|  | 

### Return type

[**[Establishment]**](Establishment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiEstablishmentsOpenOpenGet"></a>
# **apiEstablishmentsOpenOpenGet**
> [Establishment] apiEstablishmentsOpenOpenGet(open)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.EstablishmentsApi();
let open = true; // Boolean | 

apiInstance.apiEstablishmentsOpenOpenGet(open, (error, data, response) => {
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
 **open** | **Boolean**|  | 

### Return type

[**[Establishment]**](Establishment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiEstablishmentsPost"></a>
# **apiEstablishmentsPost**
> Establishment apiEstablishmentsPost(opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.EstablishmentsApi();
let opts = { 
  'body': new MyApi.Establishment() // Establishment | 
};
apiInstance.apiEstablishmentsPost(opts, (error, data, response) => {
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
 **body** | [**Establishment**](Establishment.md)|  | [optional] 

### Return type

[**Establishment**](Establishment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiEstablishmentsScoreRangeGet"></a>
# **apiEstablishmentsScoreRangeGet**
> [Establishment] apiEstablishmentsScoreRangeGet(opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.EstablishmentsApi();
let opts = { 
  'minScore': 1.2, // Number | 
  'maxScore': 1.2 // Number | 
};
apiInstance.apiEstablishmentsScoreRangeGet(opts, (error, data, response) => {
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

[**[Establishment]**](Establishment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiEstablishmentsScoreScoreGet"></a>
# **apiEstablishmentsScoreScoreGet**
> [Establishment] apiEstablishmentsScoreScoreGet(score)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.EstablishmentsApi();
let score = 1.2; // Number | 

apiInstance.apiEstablishmentsScoreScoreGet(score, (error, data, response) => {
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
 **score** | **Number**|  | 

### Return type

[**[Establishment]**](Establishment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

