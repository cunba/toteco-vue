# MyApi.LoginApi

All URIs are relative to *http://localhost:5540*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiLoginPost**](LoginApi.md#apiLoginPost) | **POST** /api/Login | 

<a name="apiLoginPost"></a>
# **apiLoginPost**
> LoginResponse apiLoginPost(opts)



### Example
```javascript
import {MyApi} from 'my_api';
let defaultClient = MyApi.ApiClient.instance;


let apiInstance = new MyApi.LoginApi();
let opts = { 
  'body': new MyApi.LoginRequest() // LoginRequest | 
};
apiInstance.apiLoginPost(opts, (error, data, response) => {
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
 **body** | [**LoginRequest**](LoginRequest.md)|  | [optional] 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

