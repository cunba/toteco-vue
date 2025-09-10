# MyApi.UsersApi

All URIs are relative to *http://localhost:5540*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersGet**](UsersApi.md#apiUsersGet) | **GET** /api/Users | 
[**apiUsersIdDelete**](UsersApi.md#apiUsersIdDelete) | **DELETE** /api/Users/{id} | 
[**apiUsersIdGet**](UsersApi.md#apiUsersIdGet) | **GET** /api/Users/{id} | 
[**apiUsersIdPut**](UsersApi.md#apiUsersIdPut) | **PUT** /api/Users/{id} | 
[**apiUsersPost**](UsersApi.md#apiUsersPost) | **POST** /api/Users | 

<a name="apiUsersGet"></a>
# **apiUsersGet**
> [User] apiUsersGet()



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.UsersApi();
apiInstance.apiUsersGet((error, data, response) => {
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

[**[User]**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiUsersIdDelete"></a>
# **apiUsersIdDelete**
> apiUsersIdDelete(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.UsersApi();
let id = "id_example"; // String | 

apiInstance.apiUsersIdDelete(id, (error, data, response) => {
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

<a name="apiUsersIdGet"></a>
# **apiUsersIdGet**
> User apiUsersIdGet(id)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.UsersApi();
let id = "id_example"; // String | 

apiInstance.apiUsersIdGet(id, (error, data, response) => {
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

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiUsersIdPut"></a>
# **apiUsersIdPut**
> apiUsersIdPut(id, opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.UsersApi();
let id = "id_example"; // String | 
let opts = { 
  'body': new MyApi.User() // User | 
};
apiInstance.apiUsersIdPut(id, opts, (error, data, response) => {
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
 **body** | [**User**](User.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiUsersPost"></a>
# **apiUsersPost**
> User apiUsersPost(opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.UsersApi();
let opts = { 
  'body': new MyApi.User() // User | 
};
apiInstance.apiUsersPost(opts, (error, data, response) => {
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
 **body** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

