# AylienNewsApi.ClusterApi

All URIs are relative to *https://api.aylien.com/news*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listClusters**](ClusterApi.md#listClusters) | **GET** /clusters | List Clusters



## listClusters

> Clusters listClusters(opts)

List Clusters

The clusters endpoint is used to return clusters based on parameters you set in your query. 

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

let apiInstance = new AylienNewsApi.ClusterApi();
let opts = {
  'id': [null], // [Number] | This parameter is used for finding clusters by cluster id. 
  'id2': [null], // [Number] | This parameter is used for excluding clusters by cluster id. 
  'storyCountMin': 56, // Number | This parameter is used for finding clusters with more than or equal to a specific amount of stories associated with them. 
  'storyCountMax': 56, // Number | This parameter is used for finding clusters with less than or equal to a specific amount of stories associated with them. 
  'timeStart': "timeStart_example", // String | This parameter is used for finding clusters whose creation time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'timeEnd': "timeEnd_example", // String | This parameter is used for finding clusters whose creation time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'earliestStoryStart': "earliestStoryStart_example", // String | This parameter is used for finding clusters whose publication date of its earliest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'earliestStoryEnd': "earliestStoryEnd_example", // String | This parameter is used for finding clusters whose publication date of its earliest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'latestStoryStart': "latestStoryStart_example", // String | This parameter is used for finding clusters whose publication date of its latest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'latestStoryEnd': "latestStoryEnd_example", // String | This parameter is used for finding clusters whose publication date of its latest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'locationCountry': ["null"], // [String] | This parameter is used for finding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'locationCountry2': ["null"], // [String] | This parameter is used for excluding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  '_return': ["null"], // [String] | This parameter is used for specifying return fields.
  'sortBy': "'published_at'", // String | This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results). 
  'sortDirection': "'desc'", // String | This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results). 
  'cursor': "'*'", // String | This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results). 
  'perPage': 10 // Number | This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results) 
};
apiInstance.listClusters(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| This parameter is used for finding clusters by cluster id.  | [optional] 
 **id2** | [**[Number]**](Number.md)| This parameter is used for excluding clusters by cluster id.  | [optional] 
 **storyCountMin** | **Number**| This parameter is used for finding clusters with more than or equal to a specific amount of stories associated with them.  | [optional] 
 **storyCountMax** | **Number**| This parameter is used for finding clusters with less than or equal to a specific amount of stories associated with them.  | [optional] 
 **timeStart** | **String**| This parameter is used for finding clusters whose creation time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **timeEnd** | **String**| This parameter is used for finding clusters whose creation time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **earliestStoryStart** | **String**| This parameter is used for finding clusters whose publication date of its earliest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **earliestStoryEnd** | **String**| This parameter is used for finding clusters whose publication date of its earliest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **latestStoryStart** | **String**| This parameter is used for finding clusters whose publication date of its latest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **latestStoryEnd** | **String**| This parameter is used for finding clusters whose publication date of its latest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **locationCountry** | [**[String]**](String.md)| This parameter is used for finding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **locationCountry2** | [**[String]**](String.md)| This parameter is used for excluding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **_return** | [**[String]**](String.md)| This parameter is used for specifying return fields. | [optional] 
 **sortBy** | **String**| This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  | [optional] [default to &#39;published_at&#39;]
 **sortDirection** | **String**| This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  | [optional] [default to &#39;desc&#39;]
 **cursor** | **String**| This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results).  | [optional] [default to &#39;*&#39;]
 **perPage** | **Number**| This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results)  | [optional] [default to 10]

### Return type

[**Clusters**](Clusters.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

