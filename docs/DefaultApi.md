# AylienNewsApi.DefaultApi

All URIs are relative to *https://api.newsapi.aylien.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAutocompletes**](DefaultApi.md#listAutocompletes) | **GET** /autocompletes | List autocompletes
[**listCoverages**](DefaultApi.md#listCoverages) | **POST** /coverages | List coverages
[**listHistograms**](DefaultApi.md#listHistograms) | **GET** /histograms | List histograms
[**listRelatedStories**](DefaultApi.md#listRelatedStories) | **POST** /related_stories | List related stories
[**listStories**](DefaultApi.md#listStories) | **GET** /stories | List Stories
[**listTimeSeries**](DefaultApi.md#listTimeSeries) | **GET** /time_series | List time series
[**listTrends**](DefaultApi.md#listTrends) | **GET** /trends | List trends


<a name="listAutocompletes"></a>
# **listAutocompletes**
> Autocompletes listAutocompletes(type, term, opts)

List autocompletes

This endpoint is used for getting list of autocompletes by providing a specific term and type.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR_APP_ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR_APP_KEY";

var type = "type_example"; // String | This parameter is used for defining the type of autocompletes.

var term = "term_example"; // String | This parameter is used for finding autocomplete objects that contain the specified value.

var opts = { 
  'language': "en", // String | This parameter is used for autocompletes whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'perPage': 3 // Number | This parameter is used for specifying number of items in each page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAutocompletes(type, term, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| This parameter is used for defining the type of autocompletes. | 
 **term** | **String**| This parameter is used for finding autocomplete objects that contain the specified value. | 
 **language** | **String**| This parameter is used for autocompletes whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] [default to en]
 **perPage** | **Number**| This parameter is used for specifying number of items in each page. | [optional] [default to 3]

### Return type

[**Autocompletes**](Autocompletes.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listCoverages"></a>
# **listCoverages**
> Coverages listCoverages(opts)

List coverages

This endpoint is used for finding story coverages based on the parameters provided. The maximum number of related stories returned is 100.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR_APP_ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR_APP_KEY";

var opts = { 
  'id': [56], // [Number] | This parameter is used for finding stroies by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries.
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id.
  'categoriesLevel': [56], // [Number] | This parameter is used for finding stories by categories level.
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles.
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles.
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories.
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [56], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'cluster': false, // Boolean | This parameter enables clustering for the returned stories.
  'clusterAlgorithm': "lingo", // String | This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms.
  '_return': ["_return_example"], // [String] | This parameter is used for specifying return fields.
  'storyId': 789, // Number | A story id
  'storyUrl': "storyUrl_example", // String | An article or webpage
  'storyTitle': "storyTitle_example", // String | Title of the article
  'storyBody': "storyBody_example", // String | Body of the article
  'storyPublishedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Publish date of the article. If you use a url or title and body of an article for getting coverages, this parameter is required. The format used is a restricted form of the canonical representation of dateTime in the [XML Schema specification (ISO 8601)](https://www.w3.org/TR/xmlschema-2/#dateTime).
  'storyLanguage': "auto", // String | This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'perPage': 3 // Number | This parameter is used for specifying number of items in each page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCoverages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **cluster** | **Boolean**| This parameter enables clustering for the returned stories. | [optional] [default to false]
 **clusterAlgorithm** | **String**| This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. | [optional] [default to lingo]
 **_return** | [**[String]**](String.md)| This parameter is used for specifying return fields. | [optional] 
 **storyId** | **Number**| A story id | [optional] 
 **storyUrl** | **String**| An article or webpage | [optional] 
 **storyTitle** | **String**| Title of the article | [optional] 
 **storyBody** | **String**| Body of the article | [optional] 
 **storyPublishedAt** | **Date**| Publish date of the article. If you use a url or title and body of an article for getting coverages, this parameter is required. The format used is a restricted form of the canonical representation of dateTime in the [XML Schema specification (ISO 8601)](https://www.w3.org/TR/xmlschema-2/#dateTime). | [optional] 
 **storyLanguage** | **String**| This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] [default to auto]
 **perPage** | **Number**| This parameter is used for specifying number of items in each page. | [optional] [default to 3]

### Return type

[**Coverages**](Coverages.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listHistograms"></a>
# **listHistograms**
> Histograms listHistograms(opts)

List histograms

This endpoint is used for getting histograms based on the &#x60;field&#x60; parameter passed to the API.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR_APP_ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR_APP_KEY";

var opts = { 
  'id': [56], // [Number] | This parameter is used for finding stroies by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries.
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id.
  'categoriesLevel': [56], // [Number] | This parameter is used for finding stories by categories level.
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles.
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles.
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories.
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [56], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'intervalStart': 56, // Number | This parameter is used for setting the start data point of histogram intervals.
  'intervalEnd': 56, // Number | This parameter is used for setting the end data point of histogram intervals.
  'intervalWidth': 56, // Number | This parameter is used for setting the width of histogram intervals.
  'field': "social_shares_count" // String | This parameter is used for specifying the y-axis variable for the histogram.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listHistograms(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **intervalStart** | **Number**| This parameter is used for setting the start data point of histogram intervals. | [optional] 
 **intervalEnd** | **Number**| This parameter is used for setting the end data point of histogram intervals. | [optional] 
 **intervalWidth** | **Number**| This parameter is used for setting the width of histogram intervals. | [optional] 
 **field** | **String**| This parameter is used for specifying the y-axis variable for the histogram. | [optional] [default to social_shares_count]

### Return type

[**Histograms**](Histograms.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listRelatedStories"></a>
# **listRelatedStories**
> RelatedStories listRelatedStories(opts)

List related stories

This endpoint is used for finding related stories based on the parameters provided. The maximum number of related stories returned is 100.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR_APP_ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR_APP_KEY";

var opts = { 
  'id': [56], // [Number] | This parameter is used for finding stroies by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries.
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id.
  'categoriesLevel': [56], // [Number] | This parameter is used for finding stories by categories level.
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles.
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles.
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories.
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [56], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'cluster': false, // Boolean | This parameter enables clustering for the returned stories.
  'clusterAlgorithm': "lingo", // String | This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms.
  '_return': ["_return_example"], // [String] | This parameter is used for specifying return fields.
  'storyId': 789, // Number | A story id
  'storyUrl': "storyUrl_example", // String | An article or webpage
  'storyTitle': "storyTitle_example", // String | Title of the article
  'storyBody': "storyBody_example", // String | Body of the article
  'boostBy': "boostBy_example", // String | This parameter is used for boosting the result by the specified value.
  'storyLanguage': "auto", // String | This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'perPage': 3 // Number | This parameter is used for specifying number of items in each page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listRelatedStories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **cluster** | **Boolean**| This parameter enables clustering for the returned stories. | [optional] [default to false]
 **clusterAlgorithm** | **String**| This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. | [optional] [default to lingo]
 **_return** | [**[String]**](String.md)| This parameter is used for specifying return fields. | [optional] 
 **storyId** | **Number**| A story id | [optional] 
 **storyUrl** | **String**| An article or webpage | [optional] 
 **storyTitle** | **String**| Title of the article | [optional] 
 **storyBody** | **String**| Body of the article | [optional] 
 **boostBy** | **String**| This parameter is used for boosting the result by the specified value. | [optional] 
 **storyLanguage** | **String**| This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] [default to auto]
 **perPage** | **Number**| This parameter is used for specifying number of items in each page. | [optional] [default to 3]

### Return type

[**RelatedStories**](RelatedStories.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listStories"></a>
# **listStories**
> Stories listStories(opts)

List Stories

This endpoint is used for getting a list of stories.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR_APP_ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR_APP_KEY";

var opts = { 
  'id': [56], // [Number] | This parameter is used for finding stroies by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries.
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id.
  'categoriesLevel': [56], // [Number] | This parameter is used for finding stories by categories level.
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles.
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles.
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories.
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [56], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'cluster': false, // Boolean | This parameter enables clustering for the returned stories.
  'clusterAlgorithm': "lingo", // String | This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms.
  '_return': ["_return_example"], // [String] | This parameter is used for specifying return fields.
  'sortBy': "published_at", // String | This parameter is used for changing the order column of the results.
  'sortDirection': "desc", // String | This parameter is used for changing the order direction of the result.
  'cursor': "*", // String | This parameter is used for finding a specific page.
  'perPage': 10 // Number | This parameter is used for specifying number of items in each page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listStories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **cluster** | **Boolean**| This parameter enables clustering for the returned stories. | [optional] [default to false]
 **clusterAlgorithm** | **String**| This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. | [optional] [default to lingo]
 **_return** | [**[String]**](String.md)| This parameter is used for specifying return fields. | [optional] 
 **sortBy** | **String**| This parameter is used for changing the order column of the results. | [optional] [default to published_at]
 **sortDirection** | **String**| This parameter is used for changing the order direction of the result. | [optional] [default to desc]
 **cursor** | **String**| This parameter is used for finding a specific page. | [optional] [default to *]
 **perPage** | **Number**| This parameter is used for specifying number of items in each page. | [optional] [default to 10]

### Return type

[**Stories**](Stories.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listTimeSeries"></a>
# **listTimeSeries**
> TimeSeriesList listTimeSeries(opts)

List time series

This endpoint is used for getting time series by stories.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR_APP_ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR_APP_KEY";

var opts = { 
  'id': [56], // [Number] | This parameter is used for finding stroies by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries.
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id.
  'categoriesLevel': [56], // [Number] | This parameter is used for finding stories by categories level.
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles.
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles.
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories.
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [56], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'publishedAtStart': "NOW-7DAYS/DAY", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "NOW/DAY", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'period': "+1DAY" // String | The size of each date range is expressed as an interval to be added to the lower bound. It supports Date Math Syntax. Valid options are `+` following an integer number greater than 0 and one of the Date Math keywords. e.g. `+1DAY`, `+2MINUTES` and `+1MONTH`. Here are [Supported keywords](https://newsapi.aylien.com/docs/working-with-dates#date-math).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTimeSeries(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] [default to NOW-7DAYS/DAY]
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] [default to NOW/DAY]
 **period** | **String**| The size of each date range is expressed as an interval to be added to the lower bound. It supports Date Math Syntax. Valid options are &#x60;+&#x60; following an integer number greater than 0 and one of the Date Math keywords. e.g. &#x60;+1DAY&#x60;, &#x60;+2MINUTES&#x60; and &#x60;+1MONTH&#x60;. Here are [Supported keywords](https://newsapi.aylien.com/docs/working-with-dates#date-math). | [optional] [default to +1DAY]

### Return type

[**TimeSeriesList**](TimeSeriesList.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listTrends"></a>
# **listTrends**
> Trends listTrends(opts)

List trends

This endpoint is used for finding trends based on stories.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR_APP_ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR_APP_KEY";

var opts = { 
  'id': [56], // [Number] | This parameter is used for finding stroies by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries.
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id.
  'categoriesLevel': [56], // [Number] | This parameter is used for finding stories by categories level.
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles.
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles.
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories.
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [56], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'field': "field_example" // String | This parameter is used to specify the trend field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTrends(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Number]**](Number.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count here [https://newsapi.aylien.com/docs/working-with-links-in-count](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | [**[String]**](String.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks here [https://newsapi.aylien.com/docs/working-with-alexa-ranks](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **field** | **String**| This parameter is used to specify the trend field. | [optional] 

### Return type

[**Trends**](Trends.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

