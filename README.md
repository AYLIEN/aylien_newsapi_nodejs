# AYLIEN News API

[Node.js](https://nodejs.org/en/) client for AYLIEN News API

AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. If you haven't already done so, you will need to [sign up](https://newsapi.aylien.com/signup).


## Installation

#### npm

Install it via:

```shell
npm install aylien-news-api --save
```

#### git
#
Install it via:

```shell
npm install AYLIEN/aylien_newsapi_nodejs --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR APP ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR APP KEY";

var opts = {
  'title': 'trump',
  'sortBy': 'social_shares_count.facebook',
  'language': ['en'],
  'publishedAtStart': 'NOW-7DAYS',
  'publishedAtEnd': 'NOW', 
  'entitiesBodyLinksDbpedia': [
    'http://dbpedia.org/resource/Donald_Trump',
    'http://dbpedia.org/resource/Hillary_Rodham_Clinton'
  ]
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

## Documentation for API Endpoints

All URIs are relative to *https://api.newsapi.aylien.com/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AylienNewsApi.DefaultApi* | [**listAutocompletes**](docs/DefaultApi.md#listAutocompletes) | **GET** /autocompletes | List autocompletes
*AylienNewsApi.DefaultApi* | [**listCoverages**](docs/DefaultApi.md#listCoverages) | **POST** /coverages | List coverages
*AylienNewsApi.DefaultApi* | [**listHistograms**](docs/DefaultApi.md#listHistograms) | **GET** /histograms | List histograms
*AylienNewsApi.DefaultApi* | [**listRelatedStories**](docs/DefaultApi.md#listRelatedStories) | **POST** /related_stories | List related stories
*AylienNewsApi.DefaultApi* | [**listStories**](docs/DefaultApi.md#listStories) | **GET** /stories | List Stories
*AylienNewsApi.DefaultApi* | [**listTimeSeries**](docs/DefaultApi.md#listTimeSeries) | **GET** /time_series | List time series
*AylienNewsApi.DefaultApi* | [**listTrends**](docs/DefaultApi.md#listTrends) | **GET** /trends | List trends


## Documentation for Models

 - [AylienNewsApi.Author](docs/Author.md)
 - [AylienNewsApi.Autocomplete](docs/Autocomplete.md)
 - [AylienNewsApi.Autocompletes](docs/Autocompletes.md)
 - [AylienNewsApi.Category](docs/Category.md)
 - [AylienNewsApi.CategoryLinks](docs/CategoryLinks.md)
 - [AylienNewsApi.Coverages](docs/Coverages.md)
 - [AylienNewsApi.Entities](docs/Entities.md)
 - [AylienNewsApi.Entity](docs/Entity.md)
 - [AylienNewsApi.EntityLinks](docs/EntityLinks.md)
 - [AylienNewsApi.Error](docs/Error.md)
 - [AylienNewsApi.ErrorLinks](docs/ErrorLinks.md)
 - [AylienNewsApi.Errors](docs/Errors.md)
 - [AylienNewsApi.HistogramInterval](docs/HistogramInterval.md)
 - [AylienNewsApi.Histograms](docs/Histograms.md)
 - [AylienNewsApi.Location](docs/Location.md)
 - [AylienNewsApi.Media](docs/Media.md)
 - [AylienNewsApi.RelatedStories](docs/RelatedStories.md)
 - [AylienNewsApi.Scope](docs/Scope.md)
 - [AylienNewsApi.Sentiment](docs/Sentiment.md)
 - [AylienNewsApi.Sentiments](docs/Sentiments.md)
 - [AylienNewsApi.ShareCount](docs/ShareCount.md)
 - [AylienNewsApi.ShareCounts](docs/ShareCounts.md)
 - [AylienNewsApi.Source](docs/Source.md)
 - [AylienNewsApi.Stories](docs/Stories.md)
 - [AylienNewsApi.Story](docs/Story.md)
 - [AylienNewsApi.StoryCluster](docs/StoryCluster.md)
 - [AylienNewsApi.StoryLinks](docs/StoryLinks.md)
 - [AylienNewsApi.Summary](docs/Summary.md)
 - [AylienNewsApi.TimeSeries](docs/TimeSeries.md)
 - [AylienNewsApi.TimeSeriesList](docs/TimeSeriesList.md)
 - [AylienNewsApi.Trend](docs/Trend.md)
 - [AylienNewsApi.Trends](docs/Trends.md)


## Documentation for Authorization

### app_id

- **Type**: API key
- **API key parameter name**: X-AYLIEN-NewsAPI-Application-ID
- **Location**: HTTP header

### app_key

- **Type**: API key
- **API key parameter name**: X-AYLIEN-NewsAPI-Application-Key
- **Location**: HTTP header
