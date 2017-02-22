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
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
apiInstance.listAutocompletes(type, term, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| This parameter is used for defining the type of autocompletes. |  [enum: source_names, source_domains, entity_types, dbpedia_resources]
 **term** | **String**| This parameter is used for finding autocomplete objects that contain the specified value. | 
 **language** | **String**| This parameter is used for autocompletes whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] [default to en] [enum: en, de, fr, it, es, pt]
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
  'id': [3.4], // [Number] | This parameter is used for finding stories by story id.
  'notId': [3.4], // [Number] | This parameter is used for excluding stories by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'notLanguage': ["notLanguage_example"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesId': ["notCategoriesId_example"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesLevel': [3.4], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesLevel': [3.4], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleText': ["notEntitiesTitleText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleType': ["notEntitiesTitleType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleLinksDbpedia': ["notEntitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyText': ["notEntitiesBodyText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyType': ["notEntitiesBodyType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyLinksDbpedia': ["notEntitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'notSentimentTitlePolarity': "notSentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'notSentimentBodyPolarity': "notSentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value.
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value.
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value.
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value.
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value.
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value.
  'mediaImagesFormat': ["mediaImagesFormat_example"], // [String] | This parameter is used for finding stories whose images format are the specified value.
  'notMediaImagesFormat': ["notMediaImagesFormat_example"], // [String] | This parameter is used for excluding stories whose images format are the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [3.4], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'notAuthorId': [3.4], // [Number] | This parameter is used for excluding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'notAuthorName': "notAuthorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value.
  'sourceId': [3.4], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'notSourceId': [3.4], // [Number] | This parameter is used for excluding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'notSourceName': ["notSourceName_example"], // [String] | This parameter is used for excluding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'notSourceDomain': ["notSourceDomain_example"], // [String] | This parameter is used for excluding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCountry': ["notSourceLocationsCountry_example"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsState': ["notSourceLocationsState_example"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCity': ["notSourceLocationsCity_example"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCountry': ["notSourceScopesCountry_example"], // [String] | This parameter is used for excluding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesState': ["notSourceScopesState_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCity': ["notSourceScopesCity_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesLevel': ["notSourceScopesLevel_example"], // [String] | This parameter is used for excluding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.
  'socialSharesCountRedditMax': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.
  'cluster': false, // Boolean | This parameter enables clustering for the returned stories. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).
  'clusterAlgorithm': "lingo", // String | This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).
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
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
apiInstance.listCoverages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **[Number]**| This parameter is used for finding stories by story id. | [optional] 
 **notId** | **[Number]**| This parameter is used for excluding stories by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | **[String]**| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **notLanguage** | **[String]**| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional]  [enum: iab-qag, iptc-subjectcode]
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] [default to true]
 **categoriesId** | **[String]**| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesId** | **[String]**| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **categoriesLevel** | **[Number]**| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesLevel** | **[Number]**| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **entitiesTitleText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value. | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value. | [optional] 
 **mediaImagesFormat** | **[String]**| This parameter is used for finding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **notMediaImagesFormat** | **[String]**| This parameter is used for excluding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | **[Number]**| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **notAuthorId** | **[Number]**| This parameter is used for excluding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | **[Number]**| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **notSourceId** | **[Number]**| This parameter is used for excluding stories whose source id is the specified value. | [optional] 
 **sourceName** | **[String]**| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **notSourceName** | **[String]**| This parameter is used for excluding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | **[String]**| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **notSourceDomain** | **[String]**| This parameter is used for excluding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | **[String]**| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCountry** | **[String]**| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | **[String]**| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsState** | **[String]**| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | **[String]**| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCity** | **[String]**| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | **[String]**| This parameter is used for finding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCountry** | **[String]**| This parameter is used for excluding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | **[String]**| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesState** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | **[String]**| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCity** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | **[String]**| This parameter is used for finding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **notSourceScopesLevel** | **[String]**| This parameter is used for excluding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | **[String]**| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. | [optional] 
 **cluster** | **Boolean**| This parameter enables clustering for the returned stories. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). | [optional] [default to false]
 **clusterAlgorithm** | **String**| This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). | [optional] [default to lingo] [enum: stc, lingo, kmeans]
 **_return** | **[String]**| This parameter is used for specifying return fields. | [optional]  [enum: id, title, body, summary, source, author, entities, keywords, hashtags, characters_count, words_count, sentences_count, paragraphs_count, categories, social_shares_count, media, sentiment, language, published_at, links]
 **storyId** | **Number**| A story id | [optional] 
 **storyUrl** | **String**| An article or webpage | [optional] 
 **storyTitle** | **String**| Title of the article | [optional] 
 **storyBody** | **String**| Body of the article | [optional] 
 **storyPublishedAt** | **Date**| Publish date of the article. If you use a url or title and body of an article for getting coverages, this parameter is required. The format used is a restricted form of the canonical representation of dateTime in the [XML Schema specification (ISO 8601)](https://www.w3.org/TR/xmlschema-2/#dateTime). | [optional] 
 **storyLanguage** | **String**| This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] [default to auto] [enum: auto, en, de, fr, it, es, pt]
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
  'id': [3.4], // [Number] | This parameter is used for finding stories by story id.
  'notId': [3.4], // [Number] | This parameter is used for excluding stories by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'notLanguage': ["notLanguage_example"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesId': ["notCategoriesId_example"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesLevel': [3.4], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesLevel': [3.4], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleText': ["notEntitiesTitleText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleType': ["notEntitiesTitleType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleLinksDbpedia': ["notEntitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyText': ["notEntitiesBodyText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyType': ["notEntitiesBodyType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyLinksDbpedia': ["notEntitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'notSentimentTitlePolarity': "notSentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'notSentimentBodyPolarity': "notSentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value.
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value.
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value.
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value.
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value.
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value.
  'mediaImagesFormat': ["mediaImagesFormat_example"], // [String] | This parameter is used for finding stories whose images format are the specified value.
  'notMediaImagesFormat': ["notMediaImagesFormat_example"], // [String] | This parameter is used for excluding stories whose images format are the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [3.4], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'notAuthorId': [3.4], // [Number] | This parameter is used for excluding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'notAuthorName': "notAuthorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value.
  'sourceId': [3.4], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'notSourceId': [3.4], // [Number] | This parameter is used for excluding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'notSourceName': ["notSourceName_example"], // [String] | This parameter is used for excluding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'notSourceDomain': ["notSourceDomain_example"], // [String] | This parameter is used for excluding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCountry': ["notSourceLocationsCountry_example"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsState': ["notSourceLocationsState_example"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCity': ["notSourceLocationsCity_example"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCountry': ["notSourceScopesCountry_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesState': ["notSourceScopesState_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCity': ["notSourceScopesCity_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesLevel': ["notSourceScopesLevel_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
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
  'field': "social_shares_count" // String | This parameter is used for specifying the y-axis variable for the histogram.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
apiInstance.listHistograms(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **[Number]**| This parameter is used for finding stories by story id. | [optional] 
 **notId** | **[Number]**| This parameter is used for excluding stories by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | **[String]**| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **notLanguage** | **[String]**| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional]  [enum: iab-qag, iptc-subjectcode]
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] [default to true]
 **categoriesId** | **[String]**| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesId** | **[String]**| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **categoriesLevel** | **[Number]**| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesLevel** | **[Number]**| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **entitiesTitleText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value. | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value. | [optional] 
 **mediaImagesFormat** | **[String]**| This parameter is used for finding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **notMediaImagesFormat** | **[String]**| This parameter is used for excluding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | **[Number]**| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **notAuthorId** | **[Number]**| This parameter is used for excluding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | **[Number]**| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **notSourceId** | **[Number]**| This parameter is used for excluding stories whose source id is the specified value. | [optional] 
 **sourceName** | **[String]**| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **notSourceName** | **[String]**| This parameter is used for excluding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | **[String]**| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **notSourceDomain** | **[String]**| This parameter is used for excluding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | **[String]**| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCountry** | **[String]**| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | **[String]**| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsState** | **[String]**| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | **[String]**| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCity** | **[String]**| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | **[String]**| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCountry** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | **[String]**| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesState** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | **[String]**| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCity** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | **[String]**| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **notSourceScopesLevel** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | **[String]**| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. | [optional] 
 **intervalStart** | **Number**| This parameter is used for setting the start data point of histogram intervals. | [optional] 
 **intervalEnd** | **Number**| This parameter is used for setting the end data point of histogram intervals. | [optional] 
 **intervalWidth** | **Number**| This parameter is used for setting the width of histogram intervals. | [optional] 
 **field** | **String**| This parameter is used for specifying the y-axis variable for the histogram. | [optional] [default to social_shares_count] [enum: social_shares_count, social_shares_count.facebook, social_shares_count.linkedin, social_shares_count.reddit, social_shares_count.google_plus, characters_count, words_count, sentences_count, paragraphs_count, media.images.count, media.videos.count, source.links_in_count, source.rankings.alexa.rank, source.rankings.alexa.rank.AF, source.rankings.alexa.rank.AX, source.rankings.alexa.rank.AL, source.rankings.alexa.rank.DZ, source.rankings.alexa.rank.AS, source.rankings.alexa.rank.AD, source.rankings.alexa.rank.AO, source.rankings.alexa.rank.AI, source.rankings.alexa.rank.AQ, source.rankings.alexa.rank.AG, source.rankings.alexa.rank.AR, source.rankings.alexa.rank.AM, source.rankings.alexa.rank.AW, source.rankings.alexa.rank.AU, source.rankings.alexa.rank.AT, source.rankings.alexa.rank.AZ, source.rankings.alexa.rank.BS, source.rankings.alexa.rank.BH, source.rankings.alexa.rank.BD, source.rankings.alexa.rank.BB, source.rankings.alexa.rank.BY, source.rankings.alexa.rank.BE, source.rankings.alexa.rank.BZ, source.rankings.alexa.rank.BJ, source.rankings.alexa.rank.BM, source.rankings.alexa.rank.BT, source.rankings.alexa.rank.BO, source.rankings.alexa.rank.BQ, source.rankings.alexa.rank.BA, source.rankings.alexa.rank.BW, source.rankings.alexa.rank.BV, source.rankings.alexa.rank.BR, source.rankings.alexa.rank.IO, source.rankings.alexa.rank.BN, source.rankings.alexa.rank.BG, source.rankings.alexa.rank.BF, source.rankings.alexa.rank.BI, source.rankings.alexa.rank.KH, source.rankings.alexa.rank.CM, source.rankings.alexa.rank.CA, source.rankings.alexa.rank.CV, source.rankings.alexa.rank.KY, source.rankings.alexa.rank.CF, source.rankings.alexa.rank.TD, source.rankings.alexa.rank.CL, source.rankings.alexa.rank.CN, source.rankings.alexa.rank.CX, source.rankings.alexa.rank.CC, source.rankings.alexa.rank.CO, source.rankings.alexa.rank.KM, source.rankings.alexa.rank.CG, source.rankings.alexa.rank.CD, source.rankings.alexa.rank.CK, source.rankings.alexa.rank.CR, source.rankings.alexa.rank.CI, source.rankings.alexa.rank.HR, source.rankings.alexa.rank.CU, source.rankings.alexa.rank.CW, source.rankings.alexa.rank.CY, source.rankings.alexa.rank.CZ, source.rankings.alexa.rank.DK, source.rankings.alexa.rank.DJ, source.rankings.alexa.rank.DM, source.rankings.alexa.rank.DO, source.rankings.alexa.rank.EC, source.rankings.alexa.rank.EG, source.rankings.alexa.rank.SV, source.rankings.alexa.rank.GQ, source.rankings.alexa.rank.ER, source.rankings.alexa.rank.EE, source.rankings.alexa.rank.ET, source.rankings.alexa.rank.FK, source.rankings.alexa.rank.FO, source.rankings.alexa.rank.FJ, source.rankings.alexa.rank.FI, source.rankings.alexa.rank.FR, source.rankings.alexa.rank.GF, source.rankings.alexa.rank.PF, source.rankings.alexa.rank.TF, source.rankings.alexa.rank.GA, source.rankings.alexa.rank.GM, source.rankings.alexa.rank.GE, source.rankings.alexa.rank.DE, source.rankings.alexa.rank.GH, source.rankings.alexa.rank.GI, source.rankings.alexa.rank.GR, source.rankings.alexa.rank.GL, source.rankings.alexa.rank.GD, source.rankings.alexa.rank.GP, source.rankings.alexa.rank.GU, source.rankings.alexa.rank.GT, source.rankings.alexa.rank.GG, source.rankings.alexa.rank.GN, source.rankings.alexa.rank.GW, source.rankings.alexa.rank.GY, source.rankings.alexa.rank.HT, source.rankings.alexa.rank.HM, source.rankings.alexa.rank.VA, source.rankings.alexa.rank.HN, source.rankings.alexa.rank.HK, source.rankings.alexa.rank.HU, source.rankings.alexa.rank.IS, source.rankings.alexa.rank.IN, source.rankings.alexa.rank.ID, source.rankings.alexa.rank.IR, source.rankings.alexa.rank.IQ, source.rankings.alexa.rank.IE, source.rankings.alexa.rank.IM, source.rankings.alexa.rank.IL, source.rankings.alexa.rank.IT, source.rankings.alexa.rank.JM, source.rankings.alexa.rank.JP, source.rankings.alexa.rank.JE, source.rankings.alexa.rank.JO, source.rankings.alexa.rank.KZ, source.rankings.alexa.rank.KE, source.rankings.alexa.rank.KI, source.rankings.alexa.rank.KP, source.rankings.alexa.rank.KR, source.rankings.alexa.rank.KW, source.rankings.alexa.rank.KG, source.rankings.alexa.rank.LA, source.rankings.alexa.rank.LV, source.rankings.alexa.rank.LB, source.rankings.alexa.rank.LS, source.rankings.alexa.rank.LR, source.rankings.alexa.rank.LY, source.rankings.alexa.rank.LI, source.rankings.alexa.rank.LT, source.rankings.alexa.rank.LU, source.rankings.alexa.rank.MO, source.rankings.alexa.rank.MK, source.rankings.alexa.rank.MG, source.rankings.alexa.rank.MW, source.rankings.alexa.rank.MY, source.rankings.alexa.rank.MV, source.rankings.alexa.rank.ML, source.rankings.alexa.rank.MT, source.rankings.alexa.rank.MH, source.rankings.alexa.rank.MQ, source.rankings.alexa.rank.MR, source.rankings.alexa.rank.MU, source.rankings.alexa.rank.YT, source.rankings.alexa.rank.MX, source.rankings.alexa.rank.FM, source.rankings.alexa.rank.MD, source.rankings.alexa.rank.MC, source.rankings.alexa.rank.MN, source.rankings.alexa.rank.ME, source.rankings.alexa.rank.MS, source.rankings.alexa.rank.MA, source.rankings.alexa.rank.MZ, source.rankings.alexa.rank.MM, source.rankings.alexa.rank.NA, source.rankings.alexa.rank.NR, source.rankings.alexa.rank.NP, source.rankings.alexa.rank.NL, source.rankings.alexa.rank.NC, source.rankings.alexa.rank.NZ, source.rankings.alexa.rank.NI, source.rankings.alexa.rank.NE, source.rankings.alexa.rank.NG, source.rankings.alexa.rank.NU, source.rankings.alexa.rank.NF, source.rankings.alexa.rank.MP, source.rankings.alexa.rank.NO, source.rankings.alexa.rank.OM, source.rankings.alexa.rank.PK, source.rankings.alexa.rank.PW, source.rankings.alexa.rank.PS, source.rankings.alexa.rank.PA, source.rankings.alexa.rank.PG, source.rankings.alexa.rank.PY, source.rankings.alexa.rank.PE, source.rankings.alexa.rank.PH, source.rankings.alexa.rank.PN, source.rankings.alexa.rank.PL, source.rankings.alexa.rank.PT, source.rankings.alexa.rank.PR, source.rankings.alexa.rank.QA, source.rankings.alexa.rank.RE, source.rankings.alexa.rank.RO, source.rankings.alexa.rank.RU, source.rankings.alexa.rank.RW, source.rankings.alexa.rank.BL, source.rankings.alexa.rank.SH, source.rankings.alexa.rank.KN, source.rankings.alexa.rank.LC, source.rankings.alexa.rank.MF, source.rankings.alexa.rank.PM, source.rankings.alexa.rank.VC, source.rankings.alexa.rank.WS, source.rankings.alexa.rank.SM, source.rankings.alexa.rank.ST, source.rankings.alexa.rank.SA, source.rankings.alexa.rank.SN, source.rankings.alexa.rank.RS, source.rankings.alexa.rank.SC, source.rankings.alexa.rank.SL, source.rankings.alexa.rank.SG, source.rankings.alexa.rank.SX, source.rankings.alexa.rank.SK, source.rankings.alexa.rank.SI, source.rankings.alexa.rank.SB, source.rankings.alexa.rank.SO, source.rankings.alexa.rank.ZA, source.rankings.alexa.rank.GS, source.rankings.alexa.rank.SS, source.rankings.alexa.rank.ES, source.rankings.alexa.rank.LK, source.rankings.alexa.rank.SD, source.rankings.alexa.rank.SR, source.rankings.alexa.rank.SJ, source.rankings.alexa.rank.SZ, source.rankings.alexa.rank.SE, source.rankings.alexa.rank.CH, source.rankings.alexa.rank.SY, source.rankings.alexa.rank.TW, source.rankings.alexa.rank.TJ, source.rankings.alexa.rank.TZ, source.rankings.alexa.rank.TH, source.rankings.alexa.rank.TL, source.rankings.alexa.rank.TG, source.rankings.alexa.rank.TK, source.rankings.alexa.rank.TO, source.rankings.alexa.rank.TT, source.rankings.alexa.rank.TN, source.rankings.alexa.rank.TR, source.rankings.alexa.rank.TM, source.rankings.alexa.rank.TC, source.rankings.alexa.rank.TV, source.rankings.alexa.rank.UG, source.rankings.alexa.rank.UA, source.rankings.alexa.rank.AE, source.rankings.alexa.rank.GB, source.rankings.alexa.rank.US, source.rankings.alexa.rank.UM, source.rankings.alexa.rank.UY, source.rankings.alexa.rank.UZ, source.rankings.alexa.rank.VU, source.rankings.alexa.rank.VE, source.rankings.alexa.rank.VN, source.rankings.alexa.rank.VG, source.rankings.alexa.rank.VI, source.rankings.alexa.rank.WF, source.rankings.alexa.rank.EH, source.rankings.alexa.rank.YE, source.rankings.alexa.rank.ZM, source.rankings.alexa.rank.ZW]

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
  'id': [3.4], // [Number] | This parameter is used for finding stories by story id.
  'notId': [3.4], // [Number] | This parameter is used for excluding stories by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'notLanguage': ["notLanguage_example"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesId': ["notCategoriesId_example"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesLevel': [3.4], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesLevel': [3.4], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleText': ["notEntitiesTitleText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleType': ["notEntitiesTitleType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleLinksDbpedia': ["notEntitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyText': ["notEntitiesBodyText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyType': ["notEntitiesBodyType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyLinksDbpedia': ["notEntitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'notSentimentTitlePolarity': "notSentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'notSentimentBodyPolarity': "notSentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value.
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value.
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value.
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value.
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value.
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value.
  'mediaImagesFormat': ["mediaImagesFormat_example"], // [String] | This parameter is used for finding stories whose images format are the specified value.
  'notMediaImagesFormat': ["notMediaImagesFormat_example"], // [String] | This parameter is used for excluding stories whose images format are the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [3.4], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'notAuthorId': [3.4], // [Number] | This parameter is used for excluding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'notAuthorName': "notAuthorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value.
  'sourceId': [3.4], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'notSourceId': [3.4], // [Number] | This parameter is used for excluding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'notSourceName': ["notSourceName_example"], // [String] | This parameter is used for excluding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'notSourceDomain': ["notSourceDomain_example"], // [String] | This parameter is used for excluding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCountry': ["notSourceLocationsCountry_example"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsState': ["notSourceLocationsState_example"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCity': ["notSourceLocationsCity_example"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCountry': ["notSourceScopesCountry_example"], // [String] | This parameter is used for excluding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesState': ["notSourceScopesState_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCity': ["notSourceScopesCity_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesLevel': ["notSourceScopesLevel_example"], // [String] | This parameter is used for excluding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.
  'socialSharesCountRedditMax': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.
  'cluster': false, // Boolean | This parameter enables clustering for the returned stories. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).
  'clusterAlgorithm': "lingo", // String | This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).
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
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
apiInstance.listRelatedStories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **[Number]**| This parameter is used for finding stories by story id. | [optional] 
 **notId** | **[Number]**| This parameter is used for excluding stories by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | **[String]**| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **notLanguage** | **[String]**| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional]  [enum: iab-qag, iptc-subjectcode]
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] [default to true]
 **categoriesId** | **[String]**| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesId** | **[String]**| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **categoriesLevel** | **[Number]**| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesLevel** | **[Number]**| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **entitiesTitleText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value. | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value. | [optional] 
 **mediaImagesFormat** | **[String]**| This parameter is used for finding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **notMediaImagesFormat** | **[String]**| This parameter is used for excluding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | **[Number]**| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **notAuthorId** | **[Number]**| This parameter is used for excluding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | **[Number]**| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **notSourceId** | **[Number]**| This parameter is used for excluding stories whose source id is the specified value. | [optional] 
 **sourceName** | **[String]**| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **notSourceName** | **[String]**| This parameter is used for excluding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | **[String]**| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **notSourceDomain** | **[String]**| This parameter is used for excluding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | **[String]**| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCountry** | **[String]**| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | **[String]**| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsState** | **[String]**| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | **[String]**| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCity** | **[String]**| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | **[String]**| This parameter is used for finding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCountry** | **[String]**| This parameter is used for excluding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | **[String]**| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesState** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | **[String]**| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCity** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | **[String]**| This parameter is used for finding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **notSourceScopesLevel** | **[String]**| This parameter is used for excluding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | **[String]**| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. | [optional] 
 **cluster** | **Boolean**| This parameter enables clustering for the returned stories. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). | [optional] [default to false]
 **clusterAlgorithm** | **String**| This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). | [optional] [default to lingo] [enum: stc, lingo, kmeans]
 **_return** | **[String]**| This parameter is used for specifying return fields. | [optional]  [enum: id, title, body, summary, source, author, entities, keywords, hashtags, characters_count, words_count, sentences_count, paragraphs_count, categories, social_shares_count, media, sentiment, language, published_at, links]
 **storyId** | **Number**| A story id | [optional] 
 **storyUrl** | **String**| An article or webpage | [optional] 
 **storyTitle** | **String**| Title of the article | [optional] 
 **storyBody** | **String**| Body of the article | [optional] 
 **boostBy** | **String**| This parameter is used for boosting the result by the specified value. | [optional]  [enum: recency, popularity]
 **storyLanguage** | **String**| This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] [default to auto] [enum: auto, en, de, fr, it, es, pt]
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
  'id': [3.4], // [Number] | This parameter is used for finding stories by story id.
  'notId': [3.4], // [Number] | This parameter is used for excluding stories by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'notLanguage': ["notLanguage_example"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesId': ["notCategoriesId_example"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesLevel': [3.4], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesLevel': [3.4], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleText': ["notEntitiesTitleText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleType': ["notEntitiesTitleType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleLinksDbpedia': ["notEntitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyText': ["notEntitiesBodyText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyType': ["notEntitiesBodyType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyLinksDbpedia': ["notEntitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'notSentimentTitlePolarity': "notSentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'notSentimentBodyPolarity': "notSentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value.
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value.
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value.
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value.
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value.
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value.
  'mediaImagesFormat': ["mediaImagesFormat_example"], // [String] | This parameter is used for finding stories whose images format are the specified value.
  'notMediaImagesFormat': ["notMediaImagesFormat_example"], // [String] | This parameter is used for excluding stories whose images format are the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [3.4], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'notAuthorId': [3.4], // [Number] | This parameter is used for excluding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'notAuthorName': "notAuthorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value.
  'sourceId': [3.4], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'notSourceId': [3.4], // [Number] | This parameter is used for excluding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'notSourceName': ["notSourceName_example"], // [String] | This parameter is used for excluding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'notSourceDomain': ["notSourceDomain_example"], // [String] | This parameter is used for excluding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCountry': ["notSourceLocationsCountry_example"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsState': ["notSourceLocationsState_example"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCity': ["notSourceLocationsCity_example"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCountry': ["notSourceScopesCountry_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesState': ["notSourceScopesState_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCity': ["notSourceScopesCity_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesLevel': ["notSourceScopesLevel_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.
  'socialSharesCountRedditMax': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.
  'cluster': false, // Boolean | This parameter enables clustering for the returned stories. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).
  'clusterAlgorithm': "lingo", // String | This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).
  '_return': ["_return_example"], // [String] | This parameter is used for specifying return fields.
  'sortBy': "published_at", // String | This parameter is used for changing the order column of the results.
  'sortDirection': "desc", // String | This parameter is used for changing the order direction of the result.
  'cursor': "*", // String | This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results).
  'perPage': 10 // Number | This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
apiInstance.listStories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **[Number]**| This parameter is used for finding stories by story id. | [optional] 
 **notId** | **[Number]**| This parameter is used for excluding stories by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | **[String]**| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **notLanguage** | **[String]**| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional]  [enum: iab-qag, iptc-subjectcode]
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] [default to true]
 **categoriesId** | **[String]**| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesId** | **[String]**| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **categoriesLevel** | **[Number]**| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesLevel** | **[Number]**| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **entitiesTitleText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value. | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value. | [optional] 
 **mediaImagesFormat** | **[String]**| This parameter is used for finding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **notMediaImagesFormat** | **[String]**| This parameter is used for excluding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | **[Number]**| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **notAuthorId** | **[Number]**| This parameter is used for excluding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | **[Number]**| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **notSourceId** | **[Number]**| This parameter is used for excluding stories whose source id is the specified value. | [optional] 
 **sourceName** | **[String]**| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **notSourceName** | **[String]**| This parameter is used for excluding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | **[String]**| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **notSourceDomain** | **[String]**| This parameter is used for excluding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | **[String]**| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCountry** | **[String]**| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | **[String]**| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsState** | **[String]**| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | **[String]**| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCity** | **[String]**| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | **[String]**| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCountry** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | **[String]**| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesState** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | **[String]**| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCity** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | **[String]**| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **notSourceScopesLevel** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | **[String]**| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. | [optional] 
 **cluster** | **Boolean**| This parameter enables clustering for the returned stories. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). | [optional] [default to false]
 **clusterAlgorithm** | **String**| This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). | [optional] [default to lingo] [enum: stc, lingo, kmeans]
 **_return** | **[String]**| This parameter is used for specifying return fields. | [optional]  [enum: id, title, body, summary, source, author, entities, keywords, hashtags, characters_count, words_count, sentences_count, paragraphs_count, categories, social_shares_count, media, sentiment, language, published_at, links]
 **sortBy** | **String**| This parameter is used for changing the order column of the results. | [optional] [default to published_at] [enum: relevance, recency, hotness, published_at, social_shares_count, social_shares_count.facebook, social_shares_count.linkedin, social_shares_count.google_plus, social_shares_count.reddit, media.images.count, media.videos.count, source.links_in_count, source.rankings.alexa.rank, source.rankings.alexa.rank.AF, source.rankings.alexa.rank.AX, source.rankings.alexa.rank.AL, source.rankings.alexa.rank.DZ, source.rankings.alexa.rank.AS, source.rankings.alexa.rank.AD, source.rankings.alexa.rank.AO, source.rankings.alexa.rank.AI, source.rankings.alexa.rank.AQ, source.rankings.alexa.rank.AG, source.rankings.alexa.rank.AR, source.rankings.alexa.rank.AM, source.rankings.alexa.rank.AW, source.rankings.alexa.rank.AU, source.rankings.alexa.rank.AT, source.rankings.alexa.rank.AZ, source.rankings.alexa.rank.BS, source.rankings.alexa.rank.BH, source.rankings.alexa.rank.BD, source.rankings.alexa.rank.BB, source.rankings.alexa.rank.BY, source.rankings.alexa.rank.BE, source.rankings.alexa.rank.BZ, source.rankings.alexa.rank.BJ, source.rankings.alexa.rank.BM, source.rankings.alexa.rank.BT, source.rankings.alexa.rank.BO, source.rankings.alexa.rank.BQ, source.rankings.alexa.rank.BA, source.rankings.alexa.rank.BW, source.rankings.alexa.rank.BV, source.rankings.alexa.rank.BR, source.rankings.alexa.rank.IO, source.rankings.alexa.rank.BN, source.rankings.alexa.rank.BG, source.rankings.alexa.rank.BF, source.rankings.alexa.rank.BI, source.rankings.alexa.rank.KH, source.rankings.alexa.rank.CM, source.rankings.alexa.rank.CA, source.rankings.alexa.rank.CV, source.rankings.alexa.rank.KY, source.rankings.alexa.rank.CF, source.rankings.alexa.rank.TD, source.rankings.alexa.rank.CL, source.rankings.alexa.rank.CN, source.rankings.alexa.rank.CX, source.rankings.alexa.rank.CC, source.rankings.alexa.rank.CO, source.rankings.alexa.rank.KM, source.rankings.alexa.rank.CG, source.rankings.alexa.rank.CD, source.rankings.alexa.rank.CK, source.rankings.alexa.rank.CR, source.rankings.alexa.rank.CI, source.rankings.alexa.rank.HR, source.rankings.alexa.rank.CU, source.rankings.alexa.rank.CW, source.rankings.alexa.rank.CY, source.rankings.alexa.rank.CZ, source.rankings.alexa.rank.DK, source.rankings.alexa.rank.DJ, source.rankings.alexa.rank.DM, source.rankings.alexa.rank.DO, source.rankings.alexa.rank.EC, source.rankings.alexa.rank.EG, source.rankings.alexa.rank.SV, source.rankings.alexa.rank.GQ, source.rankings.alexa.rank.ER, source.rankings.alexa.rank.EE, source.rankings.alexa.rank.ET, source.rankings.alexa.rank.FK, source.rankings.alexa.rank.FO, source.rankings.alexa.rank.FJ, source.rankings.alexa.rank.FI, source.rankings.alexa.rank.FR, source.rankings.alexa.rank.GF, source.rankings.alexa.rank.PF, source.rankings.alexa.rank.TF, source.rankings.alexa.rank.GA, source.rankings.alexa.rank.GM, source.rankings.alexa.rank.GE, source.rankings.alexa.rank.DE, source.rankings.alexa.rank.GH, source.rankings.alexa.rank.GI, source.rankings.alexa.rank.GR, source.rankings.alexa.rank.GL, source.rankings.alexa.rank.GD, source.rankings.alexa.rank.GP, source.rankings.alexa.rank.GU, source.rankings.alexa.rank.GT, source.rankings.alexa.rank.GG, source.rankings.alexa.rank.GN, source.rankings.alexa.rank.GW, source.rankings.alexa.rank.GY, source.rankings.alexa.rank.HT, source.rankings.alexa.rank.HM, source.rankings.alexa.rank.VA, source.rankings.alexa.rank.HN, source.rankings.alexa.rank.HK, source.rankings.alexa.rank.HU, source.rankings.alexa.rank.IS, source.rankings.alexa.rank.IN, source.rankings.alexa.rank.ID, source.rankings.alexa.rank.IR, source.rankings.alexa.rank.IQ, source.rankings.alexa.rank.IE, source.rankings.alexa.rank.IM, source.rankings.alexa.rank.IL, source.rankings.alexa.rank.IT, source.rankings.alexa.rank.JM, source.rankings.alexa.rank.JP, source.rankings.alexa.rank.JE, source.rankings.alexa.rank.JO, source.rankings.alexa.rank.KZ, source.rankings.alexa.rank.KE, source.rankings.alexa.rank.KI, source.rankings.alexa.rank.KP, source.rankings.alexa.rank.KR, source.rankings.alexa.rank.KW, source.rankings.alexa.rank.KG, source.rankings.alexa.rank.LA, source.rankings.alexa.rank.LV, source.rankings.alexa.rank.LB, source.rankings.alexa.rank.LS, source.rankings.alexa.rank.LR, source.rankings.alexa.rank.LY, source.rankings.alexa.rank.LI, source.rankings.alexa.rank.LT, source.rankings.alexa.rank.LU, source.rankings.alexa.rank.MO, source.rankings.alexa.rank.MK, source.rankings.alexa.rank.MG, source.rankings.alexa.rank.MW, source.rankings.alexa.rank.MY, source.rankings.alexa.rank.MV, source.rankings.alexa.rank.ML, source.rankings.alexa.rank.MT, source.rankings.alexa.rank.MH, source.rankings.alexa.rank.MQ, source.rankings.alexa.rank.MR, source.rankings.alexa.rank.MU, source.rankings.alexa.rank.YT, source.rankings.alexa.rank.MX, source.rankings.alexa.rank.FM, source.rankings.alexa.rank.MD, source.rankings.alexa.rank.MC, source.rankings.alexa.rank.MN, source.rankings.alexa.rank.ME, source.rankings.alexa.rank.MS, source.rankings.alexa.rank.MA, source.rankings.alexa.rank.MZ, source.rankings.alexa.rank.MM, source.rankings.alexa.rank.NA, source.rankings.alexa.rank.NR, source.rankings.alexa.rank.NP, source.rankings.alexa.rank.NL, source.rankings.alexa.rank.NC, source.rankings.alexa.rank.NZ, source.rankings.alexa.rank.NI, source.rankings.alexa.rank.NE, source.rankings.alexa.rank.NG, source.rankings.alexa.rank.NU, source.rankings.alexa.rank.NF, source.rankings.alexa.rank.MP, source.rankings.alexa.rank.NO, source.rankings.alexa.rank.OM, source.rankings.alexa.rank.PK, source.rankings.alexa.rank.PW, source.rankings.alexa.rank.PS, source.rankings.alexa.rank.PA, source.rankings.alexa.rank.PG, source.rankings.alexa.rank.PY, source.rankings.alexa.rank.PE, source.rankings.alexa.rank.PH, source.rankings.alexa.rank.PN, source.rankings.alexa.rank.PL, source.rankings.alexa.rank.PT, source.rankings.alexa.rank.PR, source.rankings.alexa.rank.QA, source.rankings.alexa.rank.RE, source.rankings.alexa.rank.RO, source.rankings.alexa.rank.RU, source.rankings.alexa.rank.RW, source.rankings.alexa.rank.BL, source.rankings.alexa.rank.SH, source.rankings.alexa.rank.KN, source.rankings.alexa.rank.LC, source.rankings.alexa.rank.MF, source.rankings.alexa.rank.PM, source.rankings.alexa.rank.VC, source.rankings.alexa.rank.WS, source.rankings.alexa.rank.SM, source.rankings.alexa.rank.ST, source.rankings.alexa.rank.SA, source.rankings.alexa.rank.SN, source.rankings.alexa.rank.RS, source.rankings.alexa.rank.SC, source.rankings.alexa.rank.SL, source.rankings.alexa.rank.SG, source.rankings.alexa.rank.SX, source.rankings.alexa.rank.SK, source.rankings.alexa.rank.SI, source.rankings.alexa.rank.SB, source.rankings.alexa.rank.SO, source.rankings.alexa.rank.ZA, source.rankings.alexa.rank.GS, source.rankings.alexa.rank.SS, source.rankings.alexa.rank.ES, source.rankings.alexa.rank.LK, source.rankings.alexa.rank.SD, source.rankings.alexa.rank.SR, source.rankings.alexa.rank.SJ, source.rankings.alexa.rank.SZ, source.rankings.alexa.rank.SE, source.rankings.alexa.rank.CH, source.rankings.alexa.rank.SY, source.rankings.alexa.rank.TW, source.rankings.alexa.rank.TJ, source.rankings.alexa.rank.TZ, source.rankings.alexa.rank.TH, source.rankings.alexa.rank.TL, source.rankings.alexa.rank.TG, source.rankings.alexa.rank.TK, source.rankings.alexa.rank.TO, source.rankings.alexa.rank.TT, source.rankings.alexa.rank.TN, source.rankings.alexa.rank.TR, source.rankings.alexa.rank.TM, source.rankings.alexa.rank.TC, source.rankings.alexa.rank.TV, source.rankings.alexa.rank.UG, source.rankings.alexa.rank.UA, source.rankings.alexa.rank.AE, source.rankings.alexa.rank.GB, source.rankings.alexa.rank.US, source.rankings.alexa.rank.UM, source.rankings.alexa.rank.UY, source.rankings.alexa.rank.UZ, source.rankings.alexa.rank.VU, source.rankings.alexa.rank.VE, source.rankings.alexa.rank.VN, source.rankings.alexa.rank.VG, source.rankings.alexa.rank.VI, source.rankings.alexa.rank.WF, source.rankings.alexa.rank.EH, source.rankings.alexa.rank.YE, source.rankings.alexa.rank.ZM, source.rankings.alexa.rank.ZW]
 **sortDirection** | **String**| This parameter is used for changing the order direction of the result. | [optional] [default to desc] [enum: asc, desc]
 **cursor** | **String**| This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results). | [optional] [default to *]
 **perPage** | **Number**| This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results) | [optional] [default to 10]

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
  'id': [3.4], // [Number] | This parameter is used for finding stories by story id.
  'notId': [3.4], // [Number] | This parameter is used for excluding stories by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'notLanguage': ["notLanguage_example"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesId': ["notCategoriesId_example"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesLevel': [3.4], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesLevel': [3.4], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleText': ["notEntitiesTitleText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleType': ["notEntitiesTitleType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleLinksDbpedia': ["notEntitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyText': ["notEntitiesBodyText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyType': ["notEntitiesBodyType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyLinksDbpedia': ["notEntitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'notSentimentTitlePolarity': "notSentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'notSentimentBodyPolarity': "notSentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value.
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value.
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value.
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value.
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value.
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value.
  'mediaImagesFormat': ["mediaImagesFormat_example"], // [String] | This parameter is used for finding stories whose images format are the specified value.
  'notMediaImagesFormat': ["notMediaImagesFormat_example"], // [String] | This parameter is used for excluding stories whose images format are the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [3.4], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'notAuthorId': [3.4], // [Number] | This parameter is used for excluding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'notAuthorName': "notAuthorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value.
  'sourceId': [3.4], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'notSourceId': [3.4], // [Number] | This parameter is used for excluding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'notSourceName': ["notSourceName_example"], // [String] | This parameter is used for excluding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'notSourceDomain': ["notSourceDomain_example"], // [String] | This parameter is used for excluding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCountry': ["notSourceLocationsCountry_example"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsState': ["notSourceLocationsState_example"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCity': ["notSourceLocationsCity_example"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCountry': ["notSourceScopesCountry_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesState': ["notSourceScopesState_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCity': ["notSourceScopesCity_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesLevel': ["notSourceScopesLevel_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.
  'socialSharesCountRedditMax': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.
  'publishedAtStart': "NOW-7DAYS/DAY", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "NOW/DAY", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'period': "+1DAY" // String | The size of each date range is expressed as an interval to be added to the lower bound. It supports Date Math Syntax. Valid options are `+` following an integer number greater than 0 and one of the Date Math keywords. e.g. `+1DAY`, `+2MINUTES` and `+1MONTH`. Here are [Supported keywords](https://newsapi.aylien.com/docs/working-with-dates#date-math).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
apiInstance.listTimeSeries(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **[Number]**| This parameter is used for finding stories by story id. | [optional] 
 **notId** | **[Number]**| This parameter is used for excluding stories by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | **[String]**| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **notLanguage** | **[String]**| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional]  [enum: iab-qag, iptc-subjectcode]
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] [default to true]
 **categoriesId** | **[String]**| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesId** | **[String]**| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **categoriesLevel** | **[Number]**| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesLevel** | **[Number]**| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **entitiesTitleText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value. | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value. | [optional] 
 **mediaImagesFormat** | **[String]**| This parameter is used for finding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **notMediaImagesFormat** | **[String]**| This parameter is used for excluding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | **[Number]**| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **notAuthorId** | **[Number]**| This parameter is used for excluding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | **[Number]**| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **notSourceId** | **[Number]**| This parameter is used for excluding stories whose source id is the specified value. | [optional] 
 **sourceName** | **[String]**| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **notSourceName** | **[String]**| This parameter is used for excluding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | **[String]**| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **notSourceDomain** | **[String]**| This parameter is used for excluding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | **[String]**| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCountry** | **[String]**| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | **[String]**| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsState** | **[String]**| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | **[String]**| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCity** | **[String]**| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | **[String]**| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCountry** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | **[String]**| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesState** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | **[String]**| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCity** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | **[String]**| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **notSourceScopesLevel** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | **[String]**| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. | [optional] 
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
> Trends listTrends(field, opts)

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


var field = "field_example"; // String | This parameter is used to specify the trend field.

var opts = { 
  'id': [3.4], // [Number] | This parameter is used for finding stories by story id.
  'notId': [3.4], // [Number] | This parameter is used for excluding stories by story id.
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'notLanguage': ["notLanguage_example"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // String | This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // String | This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesId': ["categoriesId_example"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesId': ["notCategoriesId_example"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'categoriesLevel': [3.4], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'notCategoriesLevel': [3.4], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
  'entitiesTitleText': ["entitiesTitleText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleText': ["notEntitiesTitleText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleType': ["entitiesTitleType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleType': ["notEntitiesTitleType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesTitleLinksDbpedia': ["notEntitiesTitleLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyText': ["entitiesBodyText_example"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyText': ["notEntitiesBodyText_example"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyType': ["entitiesBodyType_example"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyType': ["notEntitiesBodyType_example"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'notEntitiesBodyLinksDbpedia': ["notEntitiesBodyLinksDbpedia_example"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value.
  'notSentimentTitlePolarity': "notSentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value.
  'notSentimentBodyPolarity': "notSentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value.
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value.
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value.
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value.
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value.
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value.
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value.
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value.
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value.
  'mediaImagesFormat': ["mediaImagesFormat_example"], // [String] | This parameter is used for finding stories whose images format are the specified value.
  'notMediaImagesFormat': ["notMediaImagesFormat_example"], // [String] | This parameter is used for excluding stories whose images format are the specified value.
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value.
  'authorId': [3.4], // [Number] | This parameter is used for finding stories whose author id is the specified value.
  'notAuthorId': [3.4], // [Number] | This parameter is used for excluding stories whose author id is the specified value.
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value.
  'notAuthorName': "notAuthorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value.
  'sourceId': [3.4], // [Number] | This parameter is used for finding stories whose source id is the specified value.
  'notSourceId': [3.4], // [Number] | This parameter is used for excluding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // [String] | This parameter is used for finding stories whose source name contains the specified value.
  'notSourceName': ["notSourceName_example"], // [String] | This parameter is used for excluding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // [String] | This parameter is used for finding stories whose source domain is the specified value.
  'notSourceDomain': ["notSourceDomain_example"], // [String] | This parameter is used for excluding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCountry': ["notSourceLocationsCountry_example"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsState': ["sourceLocationsState_example"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsState': ["notSourceLocationsState_example"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLocationsCity': ["sourceLocationsCity_example"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceLocationsCity': ["notSourceLocationsCity_example"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCountry': ["sourceScopesCountry_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCountry': ["notSourceScopesCountry_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesState': ["sourceScopesState_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesState': ["notSourceScopesState_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesCity': ["sourceScopesCity_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesCity': ["notSourceScopesCity_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceScopesLevel': ["sourceScopesLevel_example"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'notSourceScopesLevel': ["notSourceScopesLevel_example"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
  'sourceLinksInCountMin': 56, // Number | This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceLinksInCountMax': 56, // Number | This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).
  'sourceRankingsAlexaRankMin': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaRankMax': 56, // Number | This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'sourceRankingsAlexaCountry': ["sourceRankingsAlexaCountry_example"], // [String] | This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).
  'socialSharesCountFacebookMin': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.
  'socialSharesCountFacebookMax': 56, // Number | This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.
  'socialSharesCountGooglePlusMin': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.
  'socialSharesCountGooglePlusMax': 56, // Number | This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.
  'socialSharesCountLinkedinMin': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.
  'socialSharesCountLinkedinMax': 56, // Number | This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.
  'socialSharesCountRedditMin': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.
  'socialSharesCountRedditMax': 56, // Number | This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
apiInstance.listTrends(field, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field** | **String**| This parameter is used to specify the trend field. |  [enum: author.name, source.name, source.domain, keywords, entities.title.text, entities.title.type, entities.title.links.dbpedia, entities.body.text, entities.body.type, entities.body.links.dbpedia, hashtags, categories.id, sentiment.title.polarity, sentiment.body.polarity]
 **id** | **[Number]**| This parameter is used for finding stories by story id. | [optional] 
 **notId** | **[Number]**| This parameter is used for excluding stories by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | **[String]**| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **notLanguage** | **[String]**| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional]  [enum: en, de, fr, it, es, pt]
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional]  [enum: iab-qag, iptc-subjectcode]
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] [default to true]
 **categoriesId** | **[String]**| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesId** | **[String]**| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **categoriesLevel** | **[Number]**| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **notCategoriesLevel** | **[Number]**| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). | [optional] 
 **entitiesTitleText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesTitleLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesTitleLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyText** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyText** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyType** | **[String]**| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyType** | **[String]**| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **entitiesBodyLinksDbpedia** | **[String]**| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **notEntitiesBodyLinksDbpedia** | **[String]**| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentTitlePolarity** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **notSentimentBodyPolarity** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value. | [optional]  [enum: positive, neutral, negative]
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value. | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value. | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value. | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value. | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value. | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value. | [optional] 
 **mediaImagesFormat** | **[String]**| This parameter is used for finding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **notMediaImagesFormat** | **[String]**| This parameter is used for excluding stories whose images format are the specified value. | [optional]  [enum: BMP, GIF, JPEG, PNG, TIFF, PSD, ICO, CUR, WEBP, SVG]
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value. | [optional] 
 **authorId** | **[Number]**| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **notAuthorId** | **[Number]**| This parameter is used for excluding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **notAuthorName** | **String**| This parameter is used for excluding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | **[Number]**| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **notSourceId** | **[Number]**| This parameter is used for excluding stories whose source id is the specified value. | [optional] 
 **sourceName** | **[String]**| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **notSourceName** | **[String]**| This parameter is used for excluding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | **[String]**| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **notSourceDomain** | **[String]**| This parameter is used for excluding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | **[String]**| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCountry** | **[String]**| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsState** | **[String]**| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsState** | **[String]**| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceLocationsCity** | **[String]**| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceLocationsCity** | **[String]**| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCountry** | **[String]**| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCountry** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesState** | **[String]**| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesState** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesCity** | **[String]**| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **notSourceScopesCity** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional] 
 **sourceScopesLevel** | **[String]**| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **notSourceScopesLevel** | **[String]**| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). | [optional]  [enum: international, national, local]
 **sourceLinksInCountMin** | **Number**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceLinksInCountMax** | **Number**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). | [optional] 
 **sourceRankingsAlexaRankMin** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaRankMax** | **Number**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **sourceRankingsAlexaCountry** | **[String]**| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). | [optional] 
 **socialSharesCountFacebookMin** | **Number**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountFacebookMax** | **Number**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMin** | **Number**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountGooglePlusMax** | **Number**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMin** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountLinkedinMax** | **Number**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMin** | **Number**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. | [optional] 
 **socialSharesCountRedditMax** | **Number**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. | [optional] 

### Return type

[**Trends**](Trends.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

