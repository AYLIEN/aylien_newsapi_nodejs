# AylienNewsApi.TimeSeriesApi

All URIs are relative to *https://api.aylien.com/news*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTimeSeries**](TimeSeriesApi.md#listTimeSeries) | **GET** /time_series | List time series



## listTimeSeries

> TimeSeriesList listTimeSeries(opts)

List time series

The time series endpoint allows you to track information contained in stories over time. This information can be anything from mentions of a topic or entities, sentiment about a topic, or the volume of stories published by a source, to name but a few. The full list of parameters is given below. Using the [Date Math Syntax](https://newsapi.aylien.com/docs/working-with-dates), you can easily set your query to return information from any time period, from the current point in time to when the News API started collecting stories. The returned information can be rounded to a time also specified by you, for example by setting the results into hourly, daily, or weekly data points. 

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

let apiInstance = new AylienNewsApi.TimeSeriesApi();
let opts = {
  'id': [null], // [Number] | This parameter is used for finding stories by story id. 
  'id2': [null], // [Number] | This parameter is used for excluding stories by story id. 
  'title': "title_example", // String | This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'body': "body_example", // String | This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'text': "text_example", // String | This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnTitle': "translationsEnTitle_example", // String | This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnBody': "translationsEnBody_example", // String | This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'translationsEnText': "translationsEnText_example", // String | This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
  'language': ["null"], // [String] | This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'language2': ["null"], // [String] | This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
  'categoriesTaxonomy': "categoriesTaxonomy_example", // String | This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesConfident': true, // Boolean | This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesId': ["null"], // [String] | This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesId2': ["null"], // [String] | This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesLabel': ["null"], // [String] | This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesLabel2': ["null"], // [String] | This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesLevel': [null], // [Number] | This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'categoriesLevel2': [null], // [Number] | This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
  'entitiesTitleText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleText2': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleType2': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesTitleLinksDbpedia2': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyText': ["null"], // [String] | This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyText2': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyType': ["null"], // [String] | This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyType2': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyLinksDbpedia': ["null"], // [String] | This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'entitiesBodyLinksDbpedia2': ["null"], // [String] | This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // String | This parameter is used for finding stories whose title sentiment is the specified value. 
  'sentimentTitlePolarity2': "sentimentTitlePolarity_example", // String | This parameter is used for excluding stories whose title sentiment is the specified value. 
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // String | This parameter is used for finding stories whose body sentiment is the specified value. 
  'sentimentBodyPolarity2': "sentimentBodyPolarity_example", // String | This parameter is used for excluding stories whose body sentiment is the specified value. 
  'mediaImagesCountMin': 56, // Number | This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
  'mediaImagesCountMax': 56, // Number | This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
  'mediaImagesWidthMin': 56, // Number | This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
  'mediaImagesWidthMax': 56, // Number | This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
  'mediaImagesHeightMin': 56, // Number | This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
  'mediaImagesHeightMax': 56, // Number | This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
  'mediaImagesContentLengthMin': 56, // Number | This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
  'mediaImagesContentLengthMax': 56, // Number | This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
  'mediaImagesFormat': ["null"], // [String] | This parameter is used for finding stories whose images format are the specified value. 
  'mediaImagesFormat2': ["null"], // [String] | This parameter is used for excluding stories whose images format are the specified value. 
  'mediaVideosCountMin': 56, // Number | This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
  'mediaVideosCountMax': 56, // Number | This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
  'authorId': [null], // [Number] | This parameter is used for finding stories whose author id is the specified value. 
  'authorId2': [null], // [Number] | This parameter is used for excluding stories whose author id is the specified value. 
  'authorName': "authorName_example", // String | This parameter is used for finding stories whose author full name contains the specified value. 
  'authorName2': "authorName_example", // String | This parameter is used for excluding stories whose author full name contains the specified value. 
  'sourceId': [null], // [Number] | This parameter is used for finding stories whose source id is the specified value. 
  'sourceId2': [null], // [Number] | This parameter is used for excluding stories whose source id is the specified value. 
  'sourceName': ["null"], // [String] | This parameter is used for finding stories whose source name contains the specified value. 
  'sourceName2': ["null"], // [String] | This parameter is used for excluding stories whose source name contains the specified value. 
  'sourceDomain': ["null"], // [String] | This parameter is used for finding stories whose source domain is the specified value. 
  'sourceDomain2': ["null"], // [String] | This parameter is used for excluding stories whose source domain is the specified value. 
  'sourceLocationsCountry': ["null"], // [String] | This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsCountry2': ["null"], // [String] | This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsState': ["null"], // [String] | This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsState2': ["null"], // [String] | This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsCity': ["null"], // [String] | This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceLocationsCity2': ["null"], // [String] | This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCountry': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCountry2': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesState': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesState2': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCity': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesCity2': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesLevel': ["null"], // [String] | This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
  'sourceScopesLevel2': ["null"], // [String] | This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
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
 **id2** | [**[Number]**](Number.md)| This parameter is used for excluding stories by story id.  | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnTitle** | **String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnBody** | **String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **translationsEnText** | **String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **language2** | [**[String]**](String.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesId2** | [**[String]**](String.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesLabel** | [**[String]**](String.md)| This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesLabel2** | [**[String]**](String.md)| This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesLevel** | [**[Number]**](Number.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **categoriesLevel2** | [**[Number]**](Number.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleText2** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleType2** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesTitleLinksDbpedia2** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyText2** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyType2** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **entitiesBodyLinksDbpedia2** | [**[String]**](String.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value.  | [optional] 
 **sentimentTitlePolarity2** | **String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value.  | [optional] 
 **sentimentBodyPolarity2** | **String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | [optional] 
 **mediaImagesCountMin** | **Number**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | [optional] 
 **mediaImagesCountMax** | **Number**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMin** | **Number**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesWidthMax** | **Number**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMin** | **Number**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | [optional] 
 **mediaImagesHeightMax** | **Number**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMin** | **Number**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | [optional] 
 **mediaImagesContentLengthMax** | **Number**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | [optional] 
 **mediaImagesFormat** | [**[String]**](String.md)| This parameter is used for finding stories whose images format are the specified value.  | [optional] 
 **mediaImagesFormat2** | [**[String]**](String.md)| This parameter is used for excluding stories whose images format are the specified value.  | [optional] 
 **mediaVideosCountMin** | **Number**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | [optional] 
 **mediaVideosCountMax** | **Number**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | [optional] 
 **authorId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose author id is the specified value.  | [optional] 
 **authorId2** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose author id is the specified value.  | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value.  | [optional] 
 **authorName2** | **String**| This parameter is used for excluding stories whose author full name contains the specified value.  | [optional] 
 **sourceId** | [**[Number]**](Number.md)| This parameter is used for finding stories whose source id is the specified value.  | [optional] 
 **sourceId2** | [**[Number]**](Number.md)| This parameter is used for excluding stories whose source id is the specified value.  | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value.  | [optional] 
 **sourceName2** | [**[String]**](String.md)| This parameter is used for excluding stories whose source name contains the specified value.  | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value.  | [optional] 
 **sourceDomain2** | [**[String]**](String.md)| This parameter is used for excluding stories whose source domain is the specified value.  | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsCountry2** | [**[String]**](String.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsState2** | [**[String]**](String.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceLocationsCity2** | [**[String]**](String.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCountry2** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesState2** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesCity2** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
 **sourceScopesLevel2** | [**[String]**](String.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | [optional] 
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

