# AylienNewsApi.AutocompleteApi

All URIs are relative to *https://api.aylien.com/news*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAutocompletes**](AutocompleteApi.md#listAutocompletes) | **GET** /autocompletes | List autocompletes



## listAutocompletes

> Autocompletes listAutocompletes(type, term, opts)

List autocompletes

The autocompletes endpoint a string of characters provided to it, and then returns suggested terms that are the most likely full words or strings. The terms returned by the News API are based on parameters the type parameters you can see below. For example, if you provide the autocompletes endpoint with the term &#x60;New York C&#x60; and select the type &#x60;dbpedia_resources&#x60;, the API will return links to the DBpedia resources &#x60;New_York_City&#x60;, &#x60;New_York_City_Subway&#x60;, &#x60;New_York_City_Police_Department&#x60;, and so on. 

### Example

```javascript
import AylienNewsApi from 'aylien-news-api';
let defaultClient = AylienNewsApi.ApiClient.instance;
// Configure API key authorization: app_id
let app_id = defaultClient.authentications['app_id'];
app_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//app_id.apiKeyPrefix = 'Token';
// Configure API key authorization: app_key
let app_key = defaultClient.authentications['app_key'];
app_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//app_key.apiKeyPrefix = 'Token';

let apiInstance = new AylienNewsApi.AutocompleteApi();
let type = source_names; // String | This parameter is used for defining the type of autocompletes. 
let term = News; // String | This parameter is used for finding autocomplete objects that contain the specified value. 
let opts = {
  'language': "'en'", // String | This parameter is used for autocompletes whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'perPage': 3 // Number | This parameter is used for specifying number of items in each page. 
};
apiInstance.listAutocompletes(type, term, opts, (error, data, response) => {
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
 **type** | **String**| This parameter is used for defining the type of autocompletes.  | 
 **term** | **String**| This parameter is used for finding autocomplete objects that contain the specified value.  | 
 **language** | **String**| This parameter is used for autocompletes whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] [default to &#39;en&#39;]
 **perPage** | **Number**| This parameter is used for specifying number of items in each page.  | [optional] [default to 3]

### Return type

[**Autocompletes**](Autocompletes.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

