# \DefaultApi

All URIs are relative to *https://api.aylien.com/news*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AdvancedListStories**](DefaultApi.md#AdvancedListStories) | **Post** /stories | List Stories
[**ListAutocompletes**](DefaultApi.md#ListAutocompletes) | **Get** /autocompletes | List autocompletes
[**ListClusters**](DefaultApi.md#ListClusters) | **Get** /clusters | List Clusters
[**ListHistograms**](DefaultApi.md#ListHistograms) | **Get** /histograms | List histograms
[**ListRelatedStoriesGet**](DefaultApi.md#ListRelatedStoriesGet) | **Get** /related_stories | 
[**ListRelatedStoriesPost**](DefaultApi.md#ListRelatedStoriesPost) | **Post** /related_stories | 
[**ListStories**](DefaultApi.md#ListStories) | **Get** /stories | List Stories
[**ListTimeSeries**](DefaultApi.md#ListTimeSeries) | **Get** /time_series | List time series
[**ListTrends**](DefaultApi.md#ListTrends) | **Get** /trends | List trends



## AdvancedListStories

> OneOfStoriesDeprecatedStories AdvancedListStories(ctx, body, optional)

List Stories

The stories endpoint is used to return stories based on the json query you set in your request body. The News API crawler gathers articles in near real-time and stores information about them, or metadata. Below you can see all of the query parameters, and JSON schema for the body, which you can use to narrow down your query. 

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**body** | **map[string]interface{}**| /stories body schema to perform an advanced search with logical operators and nested objects.  | 
 **optional** | ***AdvancedListStoriesOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a AdvancedListStoriesOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **publishedAtStart** | **optional.String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **publishedAtEnd** | **optional.String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **return_** | [**optional.Interface of []string**](string.md)| This parameter is used for specifying return fields. | 
 **sortBy** | **optional.String**| This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  | [default to published_at]
 **sortDirection** | **optional.String**| This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  | [default to desc]
 **cursor** | **optional.String**| This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results).  | [default to *]
 **perPage** | **optional.NotInt3**| This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results)  | [default to 10]

### Return type

[**OneOfStoriesDeprecatedStories**](oneOf&lt;Stories,DeprecatedStories&gt;.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListAutocompletes

> Autocompletes ListAutocompletes(ctx, type_, term, optional)

List autocompletes

The autocompletes endpoint a string of characters provided to it, and then returns suggested terms that are the most likely full words or strings. The terms returned by the News API are based on parameters the type parameters you can see below. For example, if you provide the autocompletes endpoint with the term `New York C` and select the type `dbpedia_resources`, the API will return links to the DBpedia resources `New_York_City`, `New_York_City_Subway`, `New_York_City_Police_Department`, and so on. 

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**type_** | **string**| This parameter is used for defining the type of autocompletes.  | 
**term** | **string**| This parameter is used for finding autocomplete objects that contain the specified value.  | 
 **optional** | ***ListAutocompletesOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ListAutocompletesOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **language** | **optional.String**| This parameter is used for autocompletes whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [default to en]
 **perPage** | **optional.NotInt3**| This parameter is used for specifying number of items in each page.  | [default to 3]

### Return type

[**Autocompletes**](Autocompletes.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListClusters

> Clusters ListClusters(ctx, optional)

List Clusters

The clusters endpoint is used to return clusters based on parameters you set in your query. 

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ListClustersOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ListClustersOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**optional.Interface of []int64**](int64.md)| This parameter is used for finding clusters by cluster id.  | 
 **NotId** | [**optional.Interface of []int64**](int64.md)| This parameter is used for excluding clusters by cluster id.  | 
 **storyCountMin** | **optional.NotInt3**| This parameter is used for finding clusters with more than or equal to a specific amount of stories associated with them.  | 
 **storyCountMax** | **optional.NotInt3**| This parameter is used for finding clusters with less than or equal to a specific amount of stories associated with them.  | 
 **timeStart** | **optional.String**| This parameter is used for finding clusters whose creation time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **timeEnd** | **optional.String**| This parameter is used for finding clusters whose creation time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **earliestStoryStart** | **optional.String**| This parameter is used for finding clusters whose publication date of its earliest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **earliestStoryEnd** | **optional.String**| This parameter is used for finding clusters whose publication date of its earliest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **latestStoryStart** | **optional.String**| This parameter is used for finding clusters whose publication date of its latest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **latestStoryEnd** | **optional.String**| This parameter is used for finding clusters whose publication date of its latest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **locationCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotLocationCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **return_** | [**optional.Interface of []string**](string.md)| This parameter is used for specifying return fields. | 
 **sortBy** | **optional.String**| This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  | [default to published_at]
 **sortDirection** | **optional.String**| This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  | [default to desc]
 **cursor** | **optional.String**| This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results).  | [default to *]
 **perPage** | **optional.NotInt3**| This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results)  | [default to 10]

### Return type

[**Clusters**](Clusters.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListHistograms

> Histograms ListHistograms(ctx, optional)

List histograms

For the numerical metadata that the News API gathers (such as word counts or social shares for example), you can use the histograms endpoint to access and display this information. As this endpoint does not return actual stories, the results you are given will not count towards your story allowance provided by your subscription, so you can effectively query this endpoint free of charge. 

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ListHistogramsOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ListHistogramsOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**optional.Interface of []int64**](int64.md)| This parameter is used for finding stories by story id.  | 
 **NotId** | [**optional.Interface of []int64**](int64.md)| This parameter is used for excluding stories by story id.  | 
 **title** | **optional.String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **body** | **optional.String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **text** | **optional.String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnTitle** | **optional.String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnBody** | **optional.String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnText** | **optional.String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **linksPermalink** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on their url.  | 
 **NotLinksPermalink** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on their url.  | 
 **language** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **NotLanguage** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **publishedAtStart** | **optional.String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **publishedAtEnd** | **optional.String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **categoriesTaxonomy** | **optional.String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesConfident** | **optional.Bool**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [default to true]
 **categoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **entitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_tickers&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_tickers&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleSurfaceFormsText** | **optional.String**| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **sentimentTitlePolarity** | **optional.String**| This parameter is used for finding stories whose title sentiment is the specified value.  | 
 **NotSentimentTitlePolarity** | **optional.String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | 
 **sentimentBodyPolarity** | **optional.String**| This parameter is used for finding stories whose body sentiment is the specified value.  | 
 **NotSentimentBodyPolarity** | **optional.String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | 
 **mediaImagesCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | 
 **mediaImagesCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | 
 **mediaImagesWidthMin** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | 
 **mediaImagesWidthMax** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | 
 **mediaImagesHeightMin** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | 
 **mediaImagesHeightMax** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | 
 **mediaImagesContentLengthMin** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | 
 **mediaImagesContentLengthMax** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | 
 **mediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose images format are the specified value.  | 
 **NotMediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose images format are the specified value.  | 
 **mediaVideosCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | 
 **mediaVideosCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | 
 **authorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose author id is the specified value.  | 
 **NotAuthorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose author id is the specified value.  | 
 **authorName** | **optional.String**| This parameter is used for finding stories whose author full name contains the specified value.  | 
 **NotAuthorName** | **optional.String**| This parameter is used for excluding stories whose author full name contains the specified value.  | 
 **sourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose source id is the specified value.  | 
 **NotSourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose source id is the specified value.  | 
 **sourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source name contains the specified value.  | 
 **NotSourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source name contains the specified value.  | 
 **sourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source domain is the specified value.  | 
 **NotSourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source domain is the specified value.  | 
 **sourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLinksInCountMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceLinksInCountMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceRankingsAlexaRankMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaRankMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **socialSharesCountFacebookMin** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountFacebookMax** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMin** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMax** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | 
 **socialSharesCountLinkedinMin** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountLinkedinMax** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | 
 **socialSharesCountRedditMin** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountRedditMax** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | 
 **clusters** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).  | 
 **aql** | **optional.String**| This parameter is used to supply a query in AYLIEN Query Language.  | 
 **aqlDefaultField** | **optional.String**| This parameter is used to supply an optional default field name used in the AQL query.  | [default to text]
 **query** | **optional.String**| This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string.  | 
 **intervalStart** | **optional.NotInt3**| This parameter is used for setting the start data point of histogram intervals.  | 
 **intervalEnd** | **optional.NotInt3**| This parameter is used for setting the end data point of histogram intervals.  | 
 **intervalWidth** | **optional.NotInt3**| This parameter is used for setting the width of histogram intervals.  | 
 **field** | **optional.String**| This parameter is used for specifying the y-axis variable for the histogram.  | [default to social_shares_count]

### Return type

[**Histograms**](Histograms.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListRelatedStoriesGet

> OneOfRelatedStoriesDeprecatedRelatedStories ListRelatedStoriesGet(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ListRelatedStoriesGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ListRelatedStoriesGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**optional.Interface of []int64**](int64.md)| This parameter is used for finding stories by story id.  | 
 **NotId** | [**optional.Interface of []int64**](int64.md)| This parameter is used for excluding stories by story id.  | 
 **title** | **optional.String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **body** | **optional.String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **text** | **optional.String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnTitle** | **optional.String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnBody** | **optional.String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnText** | **optional.String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **linksPermalink** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on their url.  | 
 **NotLinksPermalink** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on their url.  | 
 **language** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **NotLanguage** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **publishedAtStart** | **optional.String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **publishedAtEnd** | **optional.String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **categoriesTaxonomy** | **optional.String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesConfident** | **optional.Bool**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [default to true]
 **categoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **entitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_tickers&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_tickers&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleSurfaceFormsText** | **optional.String**| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **sentimentTitlePolarity** | **optional.String**| This parameter is used for finding stories whose title sentiment is the specified value.  | 
 **NotSentimentTitlePolarity** | **optional.String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | 
 **sentimentBodyPolarity** | **optional.String**| This parameter is used for finding stories whose body sentiment is the specified value.  | 
 **NotSentimentBodyPolarity** | **optional.String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | 
 **mediaImagesCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | 
 **mediaImagesCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | 
 **mediaImagesWidthMin** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | 
 **mediaImagesWidthMax** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | 
 **mediaImagesHeightMin** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | 
 **mediaImagesHeightMax** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | 
 **mediaImagesContentLengthMin** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | 
 **mediaImagesContentLengthMax** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | 
 **mediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose images format are the specified value.  | 
 **NotMediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose images format are the specified value.  | 
 **mediaVideosCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | 
 **mediaVideosCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | 
 **authorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose author id is the specified value.  | 
 **NotAuthorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose author id is the specified value.  | 
 **authorName** | **optional.String**| This parameter is used for finding stories whose author full name contains the specified value.  | 
 **NotAuthorName** | **optional.String**| This parameter is used for excluding stories whose author full name contains the specified value.  | 
 **sourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose source id is the specified value.  | 
 **NotSourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose source id is the specified value.  | 
 **sourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source name contains the specified value.  | 
 **NotSourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source name contains the specified value.  | 
 **sourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source domain is the specified value.  | 
 **NotSourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source domain is the specified value.  | 
 **sourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLinksInCountMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceLinksInCountMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceRankingsAlexaRankMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaRankMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **socialSharesCountFacebookMin** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountFacebookMax** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMin** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMax** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | 
 **socialSharesCountLinkedinMin** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountLinkedinMax** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | 
 **socialSharesCountRedditMin** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountRedditMax** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | 
 **clusters** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).  | 
 **return_** | [**optional.Interface of []string**](string.md)| This parameter is used for specifying return fields. | 
 **storyId** | **optional.Int64**| A story id | 
 **storyUrl** | **optional.String**| An article or webpage | 
 **storyTitle** | **optional.String**| Title of the article | 
 **storyBody** | **optional.String**| Body of the article | 
 **aql** | **optional.String**| This parameter is used to supply a query in AYLIEN Query Language.  | 
 **aqlDefaultField** | **optional.String**| This parameter is used to supply an optional default field name used in the AQL query.  | [default to text]
 **query** | **optional.String**| This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string.  | 
 **boostBy** | **optional.String**| This parameter is used for boosting the result by the specified value.  | 
 **storyLanguage** | **optional.String**| This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [default to auto]
 **perPage** | **optional.NotInt3**| This parameter is used for specifying number of items in each page.  | [default to 3]

### Return type

[**OneOfRelatedStoriesDeprecatedRelatedStories**](oneOf&lt;RelatedStories,DeprecatedRelatedStories&gt;.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListRelatedStoriesPost

> OneOfRelatedStoriesDeprecatedRelatedStories ListRelatedStoriesPost(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ListRelatedStoriesPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ListRelatedStoriesPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**optional.Interface of []int64**](int64.md)| This parameter is used for finding stories by story id.  | 
 **NotId** | [**optional.Interface of []int64**](int64.md)| This parameter is used for excluding stories by story id.  | 
 **title** | **optional.String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **body** | **optional.String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **text** | **optional.String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnTitle** | **optional.String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnBody** | **optional.String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnText** | **optional.String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **linksPermalink** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on their url.  | 
 **NotLinksPermalink** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on their url.  | 
 **language** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **NotLanguage** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **publishedAtStart** | **optional.String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **publishedAtEnd** | **optional.String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **categoriesTaxonomy** | **optional.String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesConfident** | **optional.Bool**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [default to true]
 **categoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **entitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_tickers&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_tickers&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleSurfaceFormsText** | **optional.String**| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **sentimentTitlePolarity** | **optional.String**| This parameter is used for finding stories whose title sentiment is the specified value.  | 
 **NotSentimentTitlePolarity** | **optional.String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | 
 **sentimentBodyPolarity** | **optional.String**| This parameter is used for finding stories whose body sentiment is the specified value.  | 
 **NotSentimentBodyPolarity** | **optional.String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | 
 **mediaImagesCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | 
 **mediaImagesCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | 
 **mediaImagesWidthMin** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | 
 **mediaImagesWidthMax** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | 
 **mediaImagesHeightMin** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | 
 **mediaImagesHeightMax** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | 
 **mediaImagesContentLengthMin** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | 
 **mediaImagesContentLengthMax** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | 
 **mediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose images format are the specified value.  | 
 **NotMediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose images format are the specified value.  | 
 **mediaVideosCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | 
 **mediaVideosCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | 
 **authorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose author id is the specified value.  | 
 **NotAuthorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose author id is the specified value.  | 
 **authorName** | **optional.String**| This parameter is used for finding stories whose author full name contains the specified value.  | 
 **NotAuthorName** | **optional.String**| This parameter is used for excluding stories whose author full name contains the specified value.  | 
 **sourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose source id is the specified value.  | 
 **NotSourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose source id is the specified value.  | 
 **sourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source name contains the specified value.  | 
 **NotSourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source name contains the specified value.  | 
 **sourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source domain is the specified value.  | 
 **NotSourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source domain is the specified value.  | 
 **sourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLinksInCountMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceLinksInCountMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceRankingsAlexaRankMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaRankMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **socialSharesCountFacebookMin** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountFacebookMax** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMin** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMax** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | 
 **socialSharesCountLinkedinMin** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountLinkedinMax** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | 
 **socialSharesCountRedditMin** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountRedditMax** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | 
 **clusters** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).  | 
 **return_** | [**optional.Interface of []string**](string.md)| This parameter is used for specifying return fields. | 
 **storyId** | **optional.Int64**| A story id | 
 **storyUrl** | **optional.String**| An article or webpage | 
 **storyTitle** | **optional.String**| Title of the article | 
 **storyBody** | **optional.String**| Body of the article | 
 **aql** | **optional.String**| This parameter is used to supply a query in AYLIEN Query Language.  | 
 **aqlDefaultField** | **optional.String**| This parameter is used to supply an optional default field name used in the AQL query.  | [default to text]
 **query** | **optional.String**| This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string.  | 
 **boostBy** | **optional.String**| This parameter is used for boosting the result by the specified value.  | 
 **storyLanguage** | **optional.String**| This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | [default to auto]
 **perPage** | **optional.NotInt3**| This parameter is used for specifying number of items in each page.  | [default to 3]

### Return type

[**OneOfRelatedStoriesDeprecatedRelatedStories**](oneOf&lt;RelatedStories,DeprecatedRelatedStories&gt;.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListStories

> OneOfStoriesDeprecatedStories ListStories(ctx, optional)

List Stories

The stories endpoint is used to return stories based on parameters you set in your query. The News API crawler gathers articles in near real-time and stores information about them, or metadata. Below you can see all of the query parameters, which you can use to narrow down your query. 

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ListStoriesOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ListStoriesOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**optional.Interface of []int64**](int64.md)| This parameter is used for finding stories by story id.  | 
 **NotId** | [**optional.Interface of []int64**](int64.md)| This parameter is used for excluding stories by story id.  | 
 **title** | **optional.String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **body** | **optional.String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **text** | **optional.String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnTitle** | **optional.String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnBody** | **optional.String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnText** | **optional.String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **language** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **NotLanguage** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **linksPermalink** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on their url.  | 
 **NotLinksPermalink** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on their url.  | 
 **publishedAtStart** | **optional.String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **publishedAtEnd** | **optional.String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **categoriesTaxonomy** | **optional.String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesConfident** | **optional.Bool**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [default to true]
 **categoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **entitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_tickers&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_tickers&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleSurfaceFormsText** | **optional.String**| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **sentimentTitlePolarity** | **optional.String**| This parameter is used for finding stories whose title sentiment is the specified value.  | 
 **NotSentimentTitlePolarity** | **optional.String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | 
 **sentimentBodyPolarity** | **optional.String**| This parameter is used for finding stories whose body sentiment is the specified value.  | 
 **NotSentimentBodyPolarity** | **optional.String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | 
 **mediaImagesCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | 
 **mediaImagesCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | 
 **mediaImagesWidthMin** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | 
 **mediaImagesWidthMax** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | 
 **mediaImagesHeightMin** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | 
 **mediaImagesHeightMax** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | 
 **mediaImagesContentLengthMin** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | 
 **mediaImagesContentLengthMax** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | 
 **mediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose images format are the specified value.  | 
 **NotMediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose images format are the specified value.  | 
 **mediaVideosCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | 
 **mediaVideosCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | 
 **authorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose author id is the specified value.  | 
 **NotAuthorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose author id is the specified value.  | 
 **authorName** | **optional.String**| This parameter is used for finding stories whose author full name contains the specified value.  | 
 **NotAuthorName** | **optional.String**| This parameter is used for excluding stories whose author full name contains the specified value.  | 
 **sourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose source id is the specified value.  | 
 **NotSourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose source id is the specified value.  | 
 **sourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source name contains the specified value.  | 
 **NotSourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source name contains the specified value.  | 
 **sourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source domain is the specified value.  | 
 **NotSourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source domain is the specified value.  | 
 **sourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLinksInCountMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceLinksInCountMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceRankingsAlexaRankMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaRankMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **socialSharesCountFacebookMin** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountFacebookMax** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMin** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMax** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | 
 **socialSharesCountLinkedinMin** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountLinkedinMax** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | 
 **socialSharesCountRedditMin** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountRedditMax** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | 
 **clusters** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).  | 
 **return_** | [**optional.Interface of []string**](string.md)| This parameter is used for specifying return fields. | 
 **aql** | **optional.String**| This parameter is used to supply a query in AYLIEN Query Language.  | 
 **aqlDefaultField** | **optional.String**| This parameter is used to supply an optional default field name used in the AQL query.  | [default to text]
 **query** | **optional.String**| This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string.  | 
 **sortBy** | **optional.String**| This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  | [default to published_at]
 **sortDirection** | **optional.String**| This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  | [default to desc]
 **cursor** | **optional.String**| This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results).  | [default to *]
 **perPage** | **optional.NotInt3**| This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results)  | [default to 10]

### Return type

[**OneOfStoriesDeprecatedStories**](oneOf&lt;Stories,DeprecatedStories&gt;.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListTimeSeries

> TimeSeriesList ListTimeSeries(ctx, optional)

List time series

The time series endpoint allows you to track information contained in stories over time. This information can be anything from mentions of a topic or entities, sentiment about a topic, or the volume of stories published by a source, to name but a few. The full list of parameters is given below. Using the [Date Math Syntax](https://newsapi.aylien.com/docs/working-with-dates), you can easily set your query to return information from any time period, from the current point in time to when the News API started collecting stories. The returned information can be rounded to a time also specified by you, for example by setting the results into hourly, daily, or weekly data points. 

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ListTimeSeriesOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ListTimeSeriesOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**optional.Interface of []int64**](int64.md)| This parameter is used for finding stories by story id.  | 
 **NotId** | [**optional.Interface of []int64**](int64.md)| This parameter is used for excluding stories by story id.  | 
 **title** | **optional.String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **body** | **optional.String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **text** | **optional.String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnTitle** | **optional.String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnBody** | **optional.String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnText** | **optional.String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **language** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **NotLanguage** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **categoriesTaxonomy** | **optional.String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesConfident** | **optional.Bool**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [default to true]
 **categoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **entitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_tickers&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_tickers&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleSurfaceFormsText** | **optional.String**| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **sentimentTitlePolarity** | **optional.String**| This parameter is used for finding stories whose title sentiment is the specified value.  | 
 **NotSentimentTitlePolarity** | **optional.String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | 
 **sentimentBodyPolarity** | **optional.String**| This parameter is used for finding stories whose body sentiment is the specified value.  | 
 **NotSentimentBodyPolarity** | **optional.String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | 
 **mediaImagesCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | 
 **mediaImagesCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | 
 **mediaImagesWidthMin** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | 
 **mediaImagesWidthMax** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | 
 **mediaImagesHeightMin** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | 
 **mediaImagesHeightMax** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | 
 **mediaImagesContentLengthMin** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | 
 **mediaImagesContentLengthMax** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | 
 **mediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose images format are the specified value.  | 
 **NotMediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose images format are the specified value.  | 
 **mediaVideosCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | 
 **mediaVideosCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | 
 **authorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose author id is the specified value.  | 
 **NotAuthorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose author id is the specified value.  | 
 **authorName** | **optional.String**| This parameter is used for finding stories whose author full name contains the specified value.  | 
 **NotAuthorName** | **optional.String**| This parameter is used for excluding stories whose author full name contains the specified value.  | 
 **sourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose source id is the specified value.  | 
 **NotSourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose source id is the specified value.  | 
 **sourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source name contains the specified value.  | 
 **NotSourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source name contains the specified value.  | 
 **sourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source domain is the specified value.  | 
 **NotSourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source domain is the specified value.  | 
 **sourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLinksInCountMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceLinksInCountMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceRankingsAlexaRankMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaRankMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **socialSharesCountFacebookMin** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountFacebookMax** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMin** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMax** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | 
 **socialSharesCountLinkedinMin** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountLinkedinMax** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | 
 **socialSharesCountRedditMin** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountRedditMax** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | 
 **clusters** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).  | 
 **aql** | **optional.String**| This parameter is used to supply a query in AYLIEN Query Language.  | 
 **aqlDefaultField** | **optional.String**| This parameter is used to supply an optional default field name used in the AQL query.  | [default to text]
 **query** | **optional.String**| This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string.  | 
 **publishedAtStart** | **optional.String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [default to NOW-7DAYS/DAY]
 **publishedAtEnd** | **optional.String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | [default to NOW/DAY]
 **period** | **optional.String**| The size of each date range is expressed as an interval to be added to the lower bound. It supports Date Math Syntax. Valid options are &#x60;+&#x60; following an integer number greater than 0 and one of the Date Math keywords. e.g. &#x60;+1DAY&#x60;, &#x60;+2MINUTES&#x60; and &#x60;+1MONTH&#x60;. Here are [Supported keywords](https://newsapi.aylien.com/docs/working-with-dates#date-math).  | [default to +1DAY]

### Return type

[**TimeSeriesList**](TimeSeriesList.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListTrends

> Trends ListTrends(ctx, field, optional)

List trends

The trends endpoint allows you to identify the most-mentioned entities, concepts and keywords relevant to your query. For example, this endpoint allows you to set parameters like a time period, a subject category, or an entity, and your request will return the most mentioned entities or keywords that are mentioned in relation to your query. 

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**field** | **string**| This parameter is used to specify the trend field.  | 
 **optional** | ***ListTrendsOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ListTrendsOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **id** | [**optional.Interface of []int64**](int64.md)| This parameter is used for finding stories by story id.  | 
 **NotId** | [**optional.Interface of []int64**](int64.md)| This parameter is used for excluding stories by story id.  | 
 **title** | **optional.String**| This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **body** | **optional.String**| This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **text** | **optional.String**| This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnTitle** | **optional.String**| This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnBody** | **optional.String**| This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **translationsEnText** | **optional.String**| This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).  | 
 **linksPermalink** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on their url.  | 
 **NotLinksPermalink** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on their url.  | 
 **language** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **NotLanguage** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  | 
 **publishedAtStart** | **optional.String**| This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **publishedAtEnd** | **optional.String**| This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  | 
 **categoriesTaxonomy** | **optional.String**| This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesConfident** | **optional.Bool**| This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | [default to true]
 **categoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesId** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLabel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **categoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **NotCategoriesLevel** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  | 
 **entitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTypes** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;types&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_tickers&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTickers** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_tickers&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60;. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleSurfaceFormsText** | **optional.String**| This parameter is used to find stories based on the specified entities &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleSurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesTitleLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyId** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;id&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodySurfaceFormsText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;surface_form&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyText** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyType** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyStockTicker** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s &#x60;stock_ticker&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksDbpedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikipedia** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **entitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **NotEntitiesBodyLinksWikidata** | [**optional.Interface of []string**](string.md)| This parameter is used to exclude stories based on the specified entity&#39;s Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).  | 
 **sentimentTitlePolarity** | **optional.String**| This parameter is used for finding stories whose title sentiment is the specified value.  | 
 **NotSentimentTitlePolarity** | **optional.String**| This parameter is used for excluding stories whose title sentiment is the specified value.  | 
 **sentimentBodyPolarity** | **optional.String**| This parameter is used for finding stories whose body sentiment is the specified value.  | 
 **NotSentimentBodyPolarity** | **optional.String**| This parameter is used for excluding stories whose body sentiment is the specified value.  | 
 **mediaImagesCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is greater than or equal to the specified value.  | 
 **mediaImagesCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of images is less than or equal to the specified value.  | 
 **mediaImagesWidthMin** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are greater than or equal to the specified value.  | 
 **mediaImagesWidthMax** | **optional.NotInt3**| This parameter is used for finding stories whose width of images are less than or equal to the specified value.  | 
 **mediaImagesHeightMin** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are greater than or equal to the specified value.  | 
 **mediaImagesHeightMax** | **optional.NotInt3**| This parameter is used for finding stories whose height of images are less than or equal to the specified value.  | 
 **mediaImagesContentLengthMin** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are greater than or equal to the specified value.  | 
 **mediaImagesContentLengthMax** | **optional.NotInt3**| This parameter is used for finding stories whose images content length are less than or equal to the specified value.  | 
 **mediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose images format are the specified value.  | 
 **NotMediaImagesFormat** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose images format are the specified value.  | 
 **mediaVideosCountMin** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is greater than or equal to the specified value.  | 
 **mediaVideosCountMax** | **optional.NotInt3**| This parameter is used for finding stories whose number of videos is less than or equal to the specified value.  | 
 **authorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose author id is the specified value.  | 
 **NotAuthorId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose author id is the specified value.  | 
 **authorName** | **optional.String**| This parameter is used for finding stories whose author full name contains the specified value.  | 
 **NotAuthorName** | **optional.String**| This parameter is used for excluding stories whose author full name contains the specified value.  | 
 **sourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for finding stories whose source id is the specified value.  | 
 **NotSourceId** | [**optional.Interface of []NotInt3**](NotInt3.md)| This parameter is used for excluding stories whose source id is the specified value.  | 
 **sourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source name contains the specified value.  | 
 **NotSourceName** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source name contains the specified value.  | 
 **sourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source domain is the specified value.  | 
 **NotSourceDomain** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source domain is the specified value.  | 
 **sourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceLocationsCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesState** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesCity** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **NotSourceScopesLevel** | [**optional.Interface of []string**](string.md)| This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).  | 
 **sourceLinksInCountMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceLinksInCountMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count).  | 
 **sourceRankingsAlexaRankMin** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaRankMax** | **optional.NotInt3**| This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **sourceRankingsAlexaCountry** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks).  | 
 **socialSharesCountFacebookMin** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountFacebookMax** | **optional.NotInt3**| This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMin** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountGooglePlusMax** | **optional.NotInt3**| This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value.  | 
 **socialSharesCountLinkedinMin** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountLinkedinMax** | **optional.NotInt3**| This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value.  | 
 **socialSharesCountRedditMin** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value.  | 
 **socialSharesCountRedditMax** | **optional.NotInt3**| This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value.  | 
 **clusters** | [**optional.Interface of []string**](string.md)| This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering).  | 
 **aql** | **optional.String**| This parameter is used to supply a query in AYLIEN Query Language.  | 
 **aqlDefaultField** | **optional.String**| This parameter is used to supply an optional default field name used in the AQL query.  | [default to text]
 **query** | **optional.String**| This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string.  | 

### Return type

[**Trends**](Trends.md)

### Authorization

[app_id](../README.md#app_id), [app_key](../README.md#app_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

