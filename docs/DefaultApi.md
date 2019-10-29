# AylienNewsApi.DefaultApi

All URIs are relative to *https://api.aylien.com/news*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAutocompletes**](DefaultApi.md#listAutocompletes) | **GET** /autocompletes | List autocompletes
[**listClusters**](DefaultApi.md#listClusters) | **GET** /clusters | List Clusters
[**listCoverages**](DefaultApi.md#listCoverages) | **GET** /coverages | List coverages
[**listHistograms**](DefaultApi.md#listHistograms) | **GET** /histograms | List histograms
[**listRelatedStories**](DefaultApi.md#listRelatedStories) | **GET** /related_stories | List related stories
[**listStories**](DefaultApi.md#listStories) | **GET** /stories | List Stories
[**listTimeSeries**](DefaultApi.md#listTimeSeries) | **GET** /time_series | List time series
[**listTrends**](DefaultApi.md#listTrends) | **GET** /trends | List trends



## listAutocompletes

> Autocompletes listAutocompletes(type, term, opts)

List autocompletes

The autocompletes endpoint a string of characters provided to it, and then returns suggested terms that are the most likely full words or strings. The terms returned by the News API are based on parameters the type parameters you can see below. For example, if you provide the autocompletes endpoint with the term &#x60;New York C&#x60; and select the type &#x60;dbpedia_resources&#x60;, the API will return links to the DBpedia resources &#x60;New_York_City&#x60;, &#x60;New_York_City_Subway&#x60;, &#x60;New_York_City_Police_Department&#x60;, and so on. 

### Example

```javascript
import AylienNewsApi from 'aylien_news_api';
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

let apiInstance = new AylienNewsApi.DefaultApi();
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


## listClusters

> Clusters listClusters(opts)

List Clusters

The clusters endpoint is used to return clusters based on parameters you set in your query. 

### Example

```javascript
import AylienNewsApi from 'aylien_news_api';
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

let apiInstance = new AylienNewsApi.DefaultApi();
let opts = {
  'id': [null], // [Number] | This parameter is used for finding clusters by cluster id. 
  'notId': [null], // [Number] | This parameter is used for excluding clusters by cluster id. 
  'storyCountMin': 56, // Number | This parameter is used for finding clusters with more than or equal to a specific amount of stories associated with them. 
  'storyCountMax': 56, // Number | This parameter is used for finding clusters with less than or equal to a specific amount of stories associated with them. 
  'timeStart': "timeStart_example", // String | This parameter is used for finding clusters whose creation time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'timeEnd': "timeEnd_example", // String | This parameter is used for finding clusters whose creation time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'earliestStoryStart': "earliestStoryStart_example", // String | This parameter is used for finding clusters whose publication date of its earliest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'earliestStoryEnd': "earliestStoryEnd_example", // String | This parameter is used for finding clusters whose publication date of its earliest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'latestStoryStart': "latestStoryStart_example", // String | This parameter is used for finding clusters whose publication date of its latest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'latestStoryEnd': "latestStoryEnd_example", // String | This parameter is used for finding clusters whose publication date of its latest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'locationCountry': ["null"], // [String] | This parameter is used for finding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notLocationCountry': ["null"] // [String] | This parameter is used for excluding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
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
 **notId** | [**[Number]**](Number.md)| This parameter is used for excluding clusters by cluster id.  | [optional] 
 **storyCountMin** | **Number**| This parameter is used for finding clusters with more than or equal to a specific amount of stories associated with them.  | [optional] 
 **storyCountMax** | **Number**| This parameter is used for finding clusters with less than or equal to a specific amount of stories associated with them.  | [optional] 
 **timeStart** | **String**| This parameter is used for finding clusters whose creation time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **timeEnd** | **String**| This parameter is used for finding clusters whose creation time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **earliestStoryStart** | **String**| This parameter is used for finding clusters whose publication date of its earliest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **earliestStoryEnd** | **String**| This parameter is used for finding clusters whose publication date of its earliest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **latestStoryStart** | **String**| This parameter is used for finding clusters whose publication date of its latest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **latestStoryEnd** | **String**| This parameter is used for finding clusters whose publication date of its latest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **locationCountry** | [**[String]**](String.md)| This parameter is used for finding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notLocationCountry** | [**[String]**](String.md)| This parameter is used for excluding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 

### Return type

[**Clusters**](Clusters.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## listCoverages

> Coverages listCoverages(opts)

List coverages

The coverages endpoint allows you to understand the reach a document has had. For example, you can track the coverage of a press release or a Tweet based on how many times it has been mentioned in stories. 

### Example

```javascript
import AylienNewsApi from 'aylien_news_api';
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

let apiInstance = new AylienNewsApi.DefaultApi();
let opts = {
  'id': [null], // [Number] | This parameter is used for finding stories by story id. 
  'notId': [null], // [Number] | This parameter is used for excluding stories by story id. 
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnTitle': "translationsEnTitle_example", // String | This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnBody': "translationsEnBody_example", // String | This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnText': "translationsEnText_example", // String | This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'language': ["null"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'notLanguage': ["null"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesId': ["null"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesId': ["null"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesLevel': [null], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesLevel': [null], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'entitiesTitleText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value. 
  'notSentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value. 
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value. 
  'notSentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value. 
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
  'mediaImagesFormat': ["null"], // [String] | This parameter is used for finding stories whose images format are the specified value. 
  'notMediaImagesFormat': ["null"], // [String] | This parameter is used for excluding stories whose images format are the specified value. 
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
  'authorId': [null], // [Number] | This parameter is used for finding stories whose author id is the specified value. 
  'notAuthorId': [null], // [Number] | This parameter is used for excluding stories whose author id is the specified value. 
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value. 
  'notAuthorName': "authorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value. 
  'sourceId': [null], // [Number] | This parameter is used for finding stories whose source id is the specified value. 
  'notSourceId': [null], // [Number] | This parameter is used for excluding stories whose source id is the specified value. 
  'sourceName': ["null"], // [String] | This parameter is used for finding stories whose source name contains the specified value. 
  'notSourceName': ["null"], // [String] | This parameter is used for excluding stories whose source name contains the specified value. 
  'sourceDomain': ["null"], // [String] | This parameter is used for finding stories whose source domain is the specified value. 
  'notSourceDomain': ["null"], // [String] | This parameter is used for excluding stories whose source domain is the specified value. 
  'sourceLocationsCountry': ["null"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCountry': ["null"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsState': ["null"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsState': ["null"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsCity': ["null"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCity': ["null"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCountry': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCountry': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesState': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesState': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCity': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCity': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesLevel': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesLevel': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaCountry': ["null"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
  'socialSharesCountRedditMax': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
  'clusters': ["null"], // [String] | This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). 
  '_return': ["null"], // [String] | This parameter is used for specifying return fields.
  'storyId': 789, // Number | A story id
  'storyUrl': "storyUrl_example", // String | An article or webpage
  'storyTitle': "storyTitle_example", // String | Title of the article
  'storyBody': "storyBody_example", // String | Body of the article
  'storyPublishedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Publish date of the article. If you use a url or title and body of an article for getting coverages, this parameter is required. The format used is a restricted form of the canonical representation of dateTime in the [XML Schema specification (ISO 8601)](https://www.w3.org/TR/xmlschema-2/#dateTime). 
  'storyLanguage': "'auto'", // String | This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'perPage': 3 // Number | This parameter is used for specifying number of items in each page. 
};
apiInstance.listCoverages(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stories by story id.  | [optional] 
 **notId** | [**[Number]**](Number.md)| This parameter is used for excluding stories by story id.  | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnTitle** | **String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnBody** | **String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnText** | **String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **notLanguage** | [**[String]**](String.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesId** | [**[String]**](String.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesLevel** | [**[Number]**](Number.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value.  | [optional] 
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value.  | [optional] 
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | [optional] 
 **mediaImagesFormat** | [**[String]**](String.md)| This parameter is used for finding stories whose images format are the specified value.  | [optional] 
 **notMediaImagesFormat** | [**[String]**](String.md)| This parameter is used for excluding stories whose images format are the specified value.  | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value.  | [optional] 
 **notAuthorId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose author id is the specified value.  | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value.  | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value.  | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value.  | [optional] 
 **notSourceId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose source id is the specified value.  | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value.  | [optional] 
 **notSourceName** | [**[String]**](String.md)| This parameter is used for excluding stories whose source name contains the specified value.  | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value.  | [optional] 
 **notSourceDomain** | [**[String]**](String.md)| This parameter is used for excluding stories whose source domain is the specified value.  | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesLevel** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | [optional] 
 **clusters** | [**[String]**](String.md)| This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).  | [optional] 
 **_return** | [**[String]**](String.md)| This parameter is used for specifying return fields. | [optional] 
 **storyId** | **Number**| A story id | [optional] 
 **storyUrl** | **String**| An article or webpage | [optional] 
 **storyTitle** | **String**| Title of the article | [optional] 
 **storyBody** | **String**| Body of the article | [optional] 
 **storyPublishedAt** | **Date**| Publish date of the article. If you use a url or title and body of an article for getting coverages, this parameter is required. The format used is a restricted form of the canonical representation of dateTime in the [XML Schema specification (ISO 8601)](https://www.w3.org/TR/xmlschema-2/#dateTime).  | [optional] 
 **storyLanguage** | **String**| This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] [default to &#39;auto&#39;]
 **perPage** | **Number**| This parameter is used for specifying number of items in each page.  | [optional] [default to 3]

### Return type

[**Coverages**](Coverages.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## listHistograms

> Histograms listHistograms(opts)

List histograms

For the numerical metadata that the News API gathers (such as word counts or social shares for example), you can use the histograms endpoint to access and display this information. As this endpoint does not return actual stories, the results you are given will not count towards your story allowance provided by your subscription, so you can effectively query this endpoint free of charge. 

### Example

```javascript
import AylienNewsApi from 'aylien_news_api';
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

let apiInstance = new AylienNewsApi.DefaultApi();
let opts = {
  'id': [null], // [Number] | This parameter is used for finding stories by story id. 
  'notId': [null], // [Number] | This parameter is used for excluding stories by story id. 
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnTitle': "translationsEnTitle_example", // String | This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnBody': "translationsEnBody_example", // String | This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnText': "translationsEnText_example", // String | This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'language': ["null"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'notLanguage': ["null"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesId': ["null"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesId': ["null"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesLevel': [null], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesLevel': [null], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'entitiesTitleText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value. 
  'notSentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value. 
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value. 
  'notSentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value. 
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
  'mediaImagesFormat': ["null"], // [String] | This parameter is used for finding stories whose images format are the specified value. 
  'notMediaImagesFormat': ["null"], // [String] | This parameter is used for excluding stories whose images format are the specified value. 
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
  'authorId': [null], // [Number] | This parameter is used for finding stories whose author id is the specified value. 
  'notAuthorId': [null], // [Number] | This parameter is used for excluding stories whose author id is the specified value. 
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value. 
  'notAuthorName': "authorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value. 
  'sourceId': [null], // [Number] | This parameter is used for finding stories whose source id is the specified value. 
  'notSourceId': [null], // [Number] | This parameter is used for excluding stories whose source id is the specified value. 
  'sourceName': ["null"], // [String] | This parameter is used for finding stories whose source name contains the specified value. 
  'notSourceName': ["null"], // [String] | This parameter is used for excluding stories whose source name contains the specified value. 
  'sourceDomain': ["null"], // [String] | This parameter is used for finding stories whose source domain is the specified value. 
  'notSourceDomain': ["null"], // [String] | This parameter is used for excluding stories whose source domain is the specified value. 
  'sourceLocationsCountry': ["null"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCountry': ["null"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsState': ["null"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsState': ["null"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsCity': ["null"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCity': ["null"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCountry': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCountry': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesState': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesState': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCity': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCity': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesLevel': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesLevel': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaCountry': ["null"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
  'socialSharesCountRedditMax': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
  'intervalStart': 56, // Number | This parameter is used for setting the start data point of histogram intervals. 
  'intervalEnd': 56, // Number | This parameter is used for setting the end data point of histogram intervals. 
  'intervalWidth': 56, // Number | This parameter is used for setting the width of histogram intervals. 
  'field': "'social_shares_count'" // String | This parameter is used for specifying the y-axis variable for the histogram. 
};
apiInstance.listHistograms(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stories by story id.  | [optional] 
 **notId** | [**[Number]**](Number.md)| This parameter is used for excluding stories by story id.  | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnTitle** | **String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnBody** | **String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnText** | **String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **notLanguage** | [**[String]**](String.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesId** | [**[String]**](String.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesLevel** | [**[Number]**](Number.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value.  | [optional] 
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value.  | [optional] 
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | [optional] 
 **mediaImagesFormat** | [**[String]**](String.md)| This parameter is used for finding stories whose images format are the specified value.  | [optional] 
 **notMediaImagesFormat** | [**[String]**](String.md)| This parameter is used for excluding stories whose images format are the specified value.  | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value.  | [optional] 
 **notAuthorId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose author id is the specified value.  | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value.  | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value.  | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value.  | [optional] 
 **notSourceId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose source id is the specified value.  | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value.  | [optional] 
 **notSourceName** | [**[String]**](String.md)| This parameter is used for excluding stories whose source name contains the specified value.  | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value.  | [optional] 
 **notSourceDomain** | [**[String]**](String.md)| This parameter is used for excluding stories whose source domain is the specified value.  | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesLevel** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | [optional] 
 **intervalStart** | **Number**| This parameter is used for setting the start data point of histogram intervals.  | [optional] 
 **intervalEnd** | **Number**| This parameter is used for setting the end data point of histogram intervals.  | [optional] 
 **intervalWidth** | **Number**| This parameter is used for setting the width of histogram intervals.  | [optional] 
 **field** | **String**| This parameter is used for specifying the y-axis variable for the histogram.  | [optional] [default to &#39;social_shares_count&#39;]

### Return type

[**Histograms**](Histograms.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## listRelatedStories

> RelatedStories listRelatedStories(opts)

List related stories

This endpoint is used for finding semantically similar stories based on the parameters you provide as inputs. For example, if you want to find stories similar to a Tweet or any text extract you input, the related stories endpoint will analyze the entities present and the meaning of the text, and find stories with a similar meaning. The maximum number of related stories returned is 100. 

### Example

```javascript
import AylienNewsApi from 'aylien_news_api';
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

let apiInstance = new AylienNewsApi.DefaultApi();
let opts = {
  'id': [null], // [Number] | This parameter is used for finding stories by story id. 
  'notId': [null], // [Number] | This parameter is used for excluding stories by story id. 
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnTitle': "translationsEnTitle_example", // String | This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnBody': "translationsEnBody_example", // String | This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnText': "translationsEnText_example", // String | This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'language': ["null"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'notLanguage': ["null"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesId': ["null"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesId': ["null"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesLevel': [null], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesLevel': [null], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'entitiesTitleText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value. 
  'notSentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value. 
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value. 
  'notSentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value. 
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
  'mediaImagesFormat': ["null"], // [String] | This parameter is used for finding stories whose images format are the specified value. 
  'notMediaImagesFormat': ["null"], // [String] | This parameter is used for excluding stories whose images format are the specified value. 
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
  'authorId': [null], // [Number] | This parameter is used for finding stories whose author id is the specified value. 
  'notAuthorId': [null], // [Number] | This parameter is used for excluding stories whose author id is the specified value. 
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value. 
  'notAuthorName': "authorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value. 
  'sourceId': [null], // [Number] | This parameter is used for finding stories whose source id is the specified value. 
  'notSourceId': [null], // [Number] | This parameter is used for excluding stories whose source id is the specified value. 
  'sourceName': ["null"], // [String] | This parameter is used for finding stories whose source name contains the specified value. 
  'notSourceName': ["null"], // [String] | This parameter is used for excluding stories whose source name contains the specified value. 
  'sourceDomain': ["null"], // [String] | This parameter is used for finding stories whose source domain is the specified value. 
  'notSourceDomain': ["null"], // [String] | This parameter is used for excluding stories whose source domain is the specified value. 
  'sourceLocationsCountry': ["null"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCountry': ["null"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsState': ["null"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsState': ["null"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsCity': ["null"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCity': ["null"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCountry': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCountry': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesState': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesState': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCity': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCity': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesLevel': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesLevel': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaCountry': ["null"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
  'socialSharesCountRedditMax': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
  'clusters': ["null"], // [String] | This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). 
  '_return': ["null"], // [String] | This parameter is used for specifying return fields.
  'storyId': 789, // Number | A story id
  'storyUrl': "storyUrl_example", // String | An article or webpage
  'storyTitle': "storyTitle_example", // String | Title of the article
  'storyBody': "storyBody_example", // String | Body of the article
  'boostBy': "boostBy_example", // String | This parameter is used for boosting the result by the specified value. 
  'storyLanguage': "'auto'", // String | This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'perPage': 3 // Number | This parameter is used for specifying number of items in each page. 
};
apiInstance.listRelatedStories(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stories by story id.  | [optional] 
 **notId** | [**[Number]**](Number.md)| This parameter is used for excluding stories by story id.  | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnTitle** | **String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnBody** | **String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnText** | **String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **notLanguage** | [**[String]**](String.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesId** | [**[String]**](String.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesLevel** | [**[Number]**](Number.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value.  | [optional] 
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value.  | [optional] 
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | [optional] 
 **mediaImagesFormat** | [**[String]**](String.md)| This parameter is used for finding stories whose images format are the specified value.  | [optional] 
 **notMediaImagesFormat** | [**[String]**](String.md)| This parameter is used for excluding stories whose images format are the specified value.  | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value.  | [optional] 
 **notAuthorId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose author id is the specified value.  | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value.  | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value.  | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value.  | [optional] 
 **notSourceId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose source id is the specified value.  | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value.  | [optional] 
 **notSourceName** | [**[String]**](String.md)| This parameter is used for excluding stories whose source name contains the specified value.  | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value.  | [optional] 
 **notSourceDomain** | [**[String]**](String.md)| This parameter is used for excluding stories whose source domain is the specified value.  | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesLevel** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | [optional] 
 **clusters** | [**[String]**](String.md)| This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).  | [optional] 
 **_return** | [**[String]**](String.md)| This parameter is used for specifying return fields. | [optional] 
 **storyId** | **Number**| A story id | [optional] 
 **storyUrl** | **String**| An article or webpage | [optional] 
 **storyTitle** | **String**| Title of the article | [optional] 
 **storyBody** | **String**| Body of the article | [optional] 
 **boostBy** | **String**| This parameter is used for boosting the result by the specified value.  | [optional] 
 **storyLanguage** | **String**| This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] [default to &#39;auto&#39;]
 **perPage** | **Number**| This parameter is used for specifying number of items in each page.  | [optional] [default to 3]

### Return type

[**RelatedStories**](RelatedStories.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## listStories

> Stories listStories(opts)

List Stories

The stories endpoint is used to return stories based on parameters you set in your query. The News API crawler gathers articles in near real-time and stores information about them, or metadata. Below you can see all of the query parameters, which you can use to narrow down your query. 

### Example

```javascript
import AylienNewsApi from 'aylien_news_api';
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

let apiInstance = new AylienNewsApi.DefaultApi();
let opts = {
  'id': [null], // [Number] | This parameter is used for finding stories by story id. 
  'notId': [null], // [Number] | This parameter is used for excluding stories by story id. 
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnTitle': "translationsEnTitle_example", // String | This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnBody': "translationsEnBody_example", // String | This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnText': "translationsEnText_example", // String | This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'language': ["null"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'notLanguage': ["null"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesId': ["null"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesId': ["null"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesLevel': [null], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesLevel': [null], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'entitiesTitleText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value. 
  'notSentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value. 
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value. 
  'notSentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value. 
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
  'mediaImagesFormat': ["null"], // [String] | This parameter is used for finding stories whose images format are the specified value. 
  'notMediaImagesFormat': ["null"], // [String] | This parameter is used for excluding stories whose images format are the specified value. 
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
  'authorId': [null], // [Number] | This parameter is used for finding stories whose author id is the specified value. 
  'notAuthorId': [null], // [Number] | This parameter is used for excluding stories whose author id is the specified value. 
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value. 
  'notAuthorName': "authorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value. 
  'sourceId': [null], // [Number] | This parameter is used for finding stories whose source id is the specified value. 
  'notSourceId': [null], // [Number] | This parameter is used for excluding stories whose source id is the specified value. 
  'sourceName': ["null"], // [String] | This parameter is used for finding stories whose source name contains the specified value. 
  'notSourceName': ["null"], // [String] | This parameter is used for excluding stories whose source name contains the specified value. 
  'sourceDomain': ["null"], // [String] | This parameter is used for finding stories whose source domain is the specified value. 
  'notSourceDomain': ["null"], // [String] | This parameter is used for excluding stories whose source domain is the specified value. 
  'sourceLocationsCountry': ["null"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCountry': ["null"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsState': ["null"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsState': ["null"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsCity': ["null"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCity': ["null"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCountry': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCountry': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesState': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesState': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCity': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCity': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesLevel': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesLevel': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaCountry': ["null"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
  'socialSharesCountRedditMax': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
  'clusters': ["null"], // [String] | This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). 
  '_return': ["null"], // [String] | This parameter is used for specifying return fields.
  'sortBy': "'published_at'", // String | This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results). 
  'sortDirection': "'desc'", // String | This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results). 
  'cursor': "'*'", // String | This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results). 
  'perPage': 10 // Number | This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results) 
};
apiInstance.listStories(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stories by story id.  | [optional] 
 **notId** | [**[Number]**](Number.md)| This parameter is used for excluding stories by story id.  | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnTitle** | **String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnBody** | **String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnText** | **String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **notLanguage** | [**[String]**](String.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesId** | [**[String]**](String.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesLevel** | [**[Number]**](Number.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value.  | [optional] 
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value.  | [optional] 
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | [optional] 
 **mediaImagesFormat** | [**[String]**](String.md)| This parameter is used for finding stories whose images format are the specified value.  | [optional] 
 **notMediaImagesFormat** | [**[String]**](String.md)| This parameter is used for excluding stories whose images format are the specified value.  | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value.  | [optional] 
 **notAuthorId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose author id is the specified value.  | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value.  | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value.  | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value.  | [optional] 
 **notSourceId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose source id is the specified value.  | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value.  | [optional] 
 **notSourceName** | [**[String]**](String.md)| This parameter is used for excluding stories whose source name contains the specified value.  | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value.  | [optional] 
 **notSourceDomain** | [**[String]**](String.md)| This parameter is used for excluding stories whose source domain is the specified value.  | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesLevel** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | [optional] 
 **clusters** | [**[String]**](String.md)| This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).  | [optional] 
 **_return** | [**[String]**](String.md)| This parameter is used for specifying return fields. | [optional] 
 **sortBy** | **String**| This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  | [optional] [default to &#39;published_at&#39;]
 **sortDirection** | **String**| This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  | [optional] [default to &#39;desc&#39;]
 **cursor** | **String**| This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results).  | [optional] [default to &#39;*&#39;]
 **perPage** | **Number**| This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results)  | [optional] [default to 10]

### Return type

[**Stories**](Stories.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## listTimeSeries

> TimeSeriesList listTimeSeries(opts)

List time series

The time series endpoint allows you to track information contained in stories over time. This information can be anything from mentions of a topic or entities, sentiment about a topic, or the volume of stories published by a source, to name but a few. The full list of parameters is given below. Using the [Date Math Syntax](https://newsapi.aylien.com/docs/working-with-dates), you can easily set your query to return information from any time period, from the current point in time to when the News API started collecting stories. The returned information can be rounded to a time also specified by you, for example by setting the results into hourly, daily, or weekly data points. 

### Example

```javascript
import AylienNewsApi from 'aylien_news_api';
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

let apiInstance = new AylienNewsApi.DefaultApi();
let opts = {
  'id': [null], // [Number] | This parameter is used for finding stories by story id. 
  'notId': [null], // [Number] | This parameter is used for excluding stories by story id. 
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnTitle': "translationsEnTitle_example", // String | This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnBody': "translationsEnBody_example", // String | This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnText': "translationsEnText_example", // String | This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'language': ["null"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'notLanguage': ["null"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesId': ["null"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesId': ["null"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesLevel': [null], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesLevel': [null], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'entitiesTitleText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value. 
  'notSentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value. 
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value. 
  'notSentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value. 
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
  'mediaImagesFormat': ["null"], // [String] | This parameter is used for finding stories whose images format are the specified value. 
  'notMediaImagesFormat': ["null"], // [String] | This parameter is used for excluding stories whose images format are the specified value. 
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
  'authorId': [null], // [Number] | This parameter is used for finding stories whose author id is the specified value. 
  'notAuthorId': [null], // [Number] | This parameter is used for excluding stories whose author id is the specified value. 
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value. 
  'notAuthorName': "authorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value. 
  'sourceId': [null], // [Number] | This parameter is used for finding stories whose source id is the specified value. 
  'notSourceId': [null], // [Number] | This parameter is used for excluding stories whose source id is the specified value. 
  'sourceName': ["null"], // [String] | This parameter is used for finding stories whose source name contains the specified value. 
  'notSourceName': ["null"], // [String] | This parameter is used for excluding stories whose source name contains the specified value. 
  'sourceDomain': ["null"], // [String] | This parameter is used for finding stories whose source domain is the specified value. 
  'notSourceDomain': ["null"], // [String] | This parameter is used for excluding stories whose source domain is the specified value. 
  'sourceLocationsCountry': ["null"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCountry': ["null"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsState': ["null"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsState': ["null"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsCity': ["null"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCity': ["null"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCountry': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCountry': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesState': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesState': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCity': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCity': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesLevel': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesLevel': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaCountry': ["null"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
  'socialSharesCountRedditMax': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
  'publishedAtStart': "'NOW-7DAYS/DAY'", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'publishedAtEnd': "'NOW/DAY'", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'period': "'+1DAY'" // String | The size of each date range is expressed as an interval to be added to the lower bound. It supports Date Math Syntax. Valid options are `+` following an integer number greater than 0 and one of the Date Math keywords. e.g. `+1DAY`, `+2MINUTES` and `+1MONTH`. Here are [Supported keywords](https://newsapi.aylien.com/docs/working-with-dates#date-math). 
};
apiInstance.listTimeSeries(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stories by story id.  | [optional] 
 **notId** | [**[Number]**](Number.md)| This parameter is used for excluding stories by story id.  | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnTitle** | **String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnBody** | **String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnText** | **String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **notLanguage** | [**[String]**](String.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesId** | [**[String]**](String.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesLevel** | [**[Number]**](Number.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value.  | [optional] 
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value.  | [optional] 
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | [optional] 
 **mediaImagesFormat** | [**[String]**](String.md)| This parameter is used for finding stories whose images format are the specified value.  | [optional] 
 **notMediaImagesFormat** | [**[String]**](String.md)| This parameter is used for excluding stories whose images format are the specified value.  | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value.  | [optional] 
 **notAuthorId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose author id is the specified value.  | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value.  | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value.  | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value.  | [optional] 
 **notSourceId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose source id is the specified value.  | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value.  | [optional] 
 **notSourceName** | [**[String]**](String.md)| This parameter is used for excluding stories whose source name contains the specified value.  | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value.  | [optional] 
 **notSourceDomain** | [**[String]**](String.md)| This parameter is used for excluding stories whose source domain is the specified value.  | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesLevel** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] [default to &#39;NOW-7DAYS/DAY&#39;]
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] [default to &#39;NOW/DAY&#39;]
 **period** | **String**| The size of each date range is expressed as an interval to be added to the lower bound. It supports Date Math Syntax. Valid options are &#x60;+&#x60; following an integer number greater than 0 and one of the Date Math keywords. e.g. &#x60;+1DAY&#x60;, &#x60;+2MINUTES&#x60; and &#x60;+1MONTH&#x60;. Here are [Supported keywords](https://newsapi.aylien.com/docs/working-with-dates#date-math).  | [optional] [default to &#39;+1DAY&#39;]

### Return type

[**TimeSeriesList**](TimeSeriesList.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## listTrends

> Trends listTrends(field, opts)

List trends

The trends endpoint allows you to identify the most-mentioned entities, concepts and keywords relevant to your query. For example, this endpoint allows you to set parameters like a time period, a subject category, or an entity, and your request will return the most mentioned entities or keywords that are mentioned in relation to your query. 

### Example

```javascript
import AylienNewsApi from 'aylien_news_api';
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

let apiInstance = new AylienNewsApi.DefaultApi();
let field = keywords; // String | This parameter is used to specify the trend field. 
let opts = {
  'id': [null], // [Number] | This parameter is used for finding stories by story id. 
  'notId': [null], // [Number] | This parameter is used for excluding stories by story id. 
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnTitle': "translationsEnTitle_example", // String | This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnBody': "translationsEnBody_example", // String | This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnText': "translationsEnText_example", // String | This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'language': ["null"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'notLanguage': ["null"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesId': ["null"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesId': ["null"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesLevel': [null], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'notCategoriesLevel': [null], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'entitiesTitleText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyText': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyType': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'notEntitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value. 
  'notSentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value. 
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value. 
  'notSentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value. 
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
  'mediaImagesFormat': ["null"], // [String] | This parameter is used for finding stories whose images format are the specified value. 
  'notMediaImagesFormat': ["null"], // [String] | This parameter is used for excluding stories whose images format are the specified value. 
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
  'authorId': [null], // [Number] | This parameter is used for finding stories whose author id is the specified value. 
  'notAuthorId': [null], // [Number] | This parameter is used for excluding stories whose author id is the specified value. 
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value. 
  'notAuthorName': "authorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value. 
  'sourceId': [null], // [Number] | This parameter is used for finding stories whose source id is the specified value. 
  'notSourceId': [null], // [Number] | This parameter is used for excluding stories whose source id is the specified value. 
  'sourceName': ["null"], // [String] | This parameter is used for finding stories whose source name contains the specified value. 
  'notSourceName': ["null"], // [String] | This parameter is used for excluding stories whose source name contains the specified value. 
  'sourceDomain': ["null"], // [String] | This parameter is used for finding stories whose source domain is the specified value. 
  'notSourceDomain': ["null"], // [String] | This parameter is used for excluding stories whose source domain is the specified value. 
  'sourceLocationsCountry': ["null"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCountry': ["null"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsState': ["null"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsState': ["null"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsCity': ["null"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceLocationsCity': ["null"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCountry': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCountry': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesState': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesState': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCity': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesCity': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesLevel': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'notSourceScopesLevel': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'sourceRankingsAlexaCountry': ["null"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
  'socialSharesCountRedditMax': 56 // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
};
apiInstance.listTrends(field, opts, (error, data, response) => {
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
 **field** | **String**| This parameter is used to specify the trend field.  | 
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stories by story id.  | [optional] 
 **notId** | [**[Number]**](Number.md)| This parameter is used for excluding stories by story id.  | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnTitle** | **String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnBody** | **String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnText** | **String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **notLanguage** | [**[String]**](String.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesId** | [**[String]**](String.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **notCategoriesLevel** | [**[Number]**](Number.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyText** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyType** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **notEntitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value.  | [optional] 
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value.  | [optional] 
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | [optional] 
 **mediaImagesFormat** | [**[String]**](String.md)| This parameter is used for finding stories whose images format are the specified value.  | [optional] 
 **notMediaImagesFormat** | [**[String]**](String.md)| This parameter is used for excluding stories whose images format are the specified value.  | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value.  | [optional] 
 **notAuthorId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose author id is the specified value.  | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value.  | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value.  | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value.  | [optional] 
 **notSourceId** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose source id is the specified value.  | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value.  | [optional] 
 **notSourceName** | [**[String]**](String.md)| This parameter is used for excluding stories whose source name contains the specified value.  | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value.  | [optional] 
 **notSourceDomain** | [**[String]**](String.md)| This parameter is used for excluding stories whose source domain is the specified value.  | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceLocationsCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCountry** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesState** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesCity** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **notSourceScopesLevel** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | [optional] 

### Return type

[**Trends**](Trends.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

