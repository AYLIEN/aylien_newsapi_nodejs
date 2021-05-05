"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Autocompletes = _interopRequireDefault(require("../model/Autocompletes"));

var _Clusters = _interopRequireDefault(require("../model/Clusters"));

var _Errors = _interopRequireDefault(require("../model/Errors"));

var _Histograms = _interopRequireDefault(require("../model/Histograms"));

var _RelatedStories = _interopRequireDefault(require("../model/RelatedStories"));

var _Stories = _interopRequireDefault(require("../model/Stories"));

var _TimeSeriesList = _interopRequireDefault(require("../model/TimeSeriesList"));

var _Trends = _interopRequireDefault(require("../model/Trends"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Default service.
* @module api/DefaultApi
* @version 4.4.0
*/
var DefaultApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the advancedListStories operation.
   * @callback module:api/DefaultApi~advancedListStoriesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Stories} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List Stories
   * The stories endpoint is used to return stories based on the json query you set in your request body. The News API crawler gathers articles in near real-time and stores information about them, or metadata. Below you can see all of the query parameters, and JSON schema for the body, which you can use to narrow down your query. 
   * @param {Object} body /stories body schema to perform an advanced search with logical operators and nested objects. 
   * @param {Object} opts Optional parameters
   * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
   * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
   * @param {Array.<module:model/String>} opts._return This parameter is used for specifying return fields.
   * @param {module:model/String} opts.sortBy This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  (default to 'published_at')
   * @param {module:model/String} opts.sortDirection This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  (default to 'desc')
   * @param {String} opts.cursor This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results).  (default to '*')
   * @param {Number} opts.perPage This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results)  (default to 10)
   * @param {module:api/DefaultApi~advancedListStoriesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Stories}
   */


  _createClass(DefaultApi, [{
    key: "advancedListStories",
    value: function advancedListStories(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling advancedListStories");
      }

      var pathParams = {};
      var queryParams = {
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'return[]': this.apiClient.buildCollectionParam(opts['_return'], 'multi'),
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'cursor': opts['cursor'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['app_id', 'app_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/xml'];
      var returnType = _Stories["default"];
      return this.apiClient.callApi('/stories', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listAutocompletes operation.
     * @callback module:api/DefaultApi~listAutocompletesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Autocompletes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List autocompletes
     * The autocompletes endpoint a string of characters provided to it, and then returns suggested terms that are the most likely full words or strings. The terms returned by the News API are based on parameters the type parameters you can see below. For example, if you provide the autocompletes endpoint with the term `New York C` and select the type `dbpedia_resources`, the API will return links to the DBpedia resources `New_York_City`, `New_York_City_Subway`, `New_York_City_Police_Department`, and so on. 
     * @param {module:model/String} type This parameter is used for defining the type of autocompletes. 
     * @param {String} term This parameter is used for finding autocomplete objects that contain the specified value. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language This parameter is used for autocompletes whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  (default to 'en')
     * @param {Number} opts.perPage This parameter is used for specifying number of items in each page.  (default to 3)
     * @param {module:api/DefaultApi~listAutocompletesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Autocompletes}
     */

  }, {
    key: "listAutocompletes",
    value: function listAutocompletes(type, term, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'type' is set

      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling listAutocompletes");
      } // verify the required parameter 'term' is set


      if (term === undefined || term === null) {
        throw new Error("Missing the required parameter 'term' when calling listAutocompletes");
      }

      var pathParams = {};
      var queryParams = {
        'type': type,
        'term': term,
        'language': opts['language'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['app_id', 'app_key'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = _Autocompletes["default"];
      return this.apiClient.callApi('/autocompletes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listClusters operation.
     * @callback module:api/DefaultApi~listClustersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Clusters} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Clusters
     * The clusters endpoint is used to return clusters based on parameters you set in your query. 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding clusters by cluster id. 
     * @param {Array.<Number>} opts.notId This parameter is used for excluding clusters by cluster id. 
     * @param {Number} opts.storyCountMin This parameter is used for finding clusters with more than or equal to a specific amount of stories associated with them. 
     * @param {Number} opts.storyCountMax This parameter is used for finding clusters with less than or equal to a specific amount of stories associated with them. 
     * @param {String} opts.timeStart This parameter is used for finding clusters whose creation time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.timeEnd This parameter is used for finding clusters whose creation time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.earliestStoryStart This parameter is used for finding clusters whose publication date of its earliest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.earliestStoryEnd This parameter is used for finding clusters whose publication date of its earliest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.latestStoryStart This parameter is used for finding clusters whose publication date of its latest story is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.latestStoryEnd This parameter is used for finding clusters whose publication date of its latest story is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {Array.<String>} opts.locationCountry This parameter is used for finding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notLocationCountry This parameter is used for excluding clusters belonging to a specific country. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts._return This parameter is used for specifying return fields.
     * @param {module:model/String} opts.sortBy This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  (default to 'published_at')
     * @param {module:model/String} opts.sortDirection This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  (default to 'desc')
     * @param {String} opts.cursor This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results).  (default to '*')
     * @param {Number} opts.perPage This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results)  (default to 10)
     * @param {module:api/DefaultApi~listClustersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Clusters}
     */

  }, {
    key: "listClusters",
    value: function listClusters(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'story_count.min': opts['storyCountMin'],
        'story_count.max': opts['storyCountMax'],
        'time.start': opts['timeStart'],
        'time.end': opts['timeEnd'],
        'earliest_story.start': opts['earliestStoryStart'],
        'earliest_story.end': opts['earliestStoryEnd'],
        'latest_story.start': opts['latestStoryStart'],
        'latest_story.end': opts['latestStoryEnd'],
        'location.country': this.apiClient.buildCollectionParam(opts['locationCountry'], 'multi'),
        '!location.country': this.apiClient.buildCollectionParam(opts['notLocationCountry'], 'multi'),
        'return[]': this.apiClient.buildCollectionParam(opts['_return'], 'multi'),
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'cursor': opts['cursor'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['app_id', 'app_key'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = _Clusters["default"];
      return this.apiClient.callApi('/clusters', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listHistograms operation.
     * @callback module:api/DefaultApi~listHistogramsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Histograms} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List histograms
     * For the numerical metadata that the News API gathers (such as word counts or social shares for example), you can use the histograms endpoint to access and display this information. As this endpoint does not return actual stories, the results you are given will not count towards your story allowance provided by your subscription, so you can effectively query this endpoint free of charge. 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id. 
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id. 
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnTitle This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnBody This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnText This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {Array.<String>} opts.linksPermalink This parameter is used to find stories based on their url. 
     * @param {Array.<String>} opts.notLinksPermalink This parameter is used to exclude stories based on their url. 
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.categoriesLabel This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesLabel This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.entitiesTitleId This parameter is used to find stories based on the specified entities `id` in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleId This parameter is used to exclude stories based on the specified entities `id` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleSurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleSurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikipedia This parameter is used to find stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikidata This parameter is used to find stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyId This parameter is used to find stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyId This parameter is used to exclude stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodySurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodySurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikipedia This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikidata This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {module:model/String} opts.sentimentTitlePolarity This parameter is used for finding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentTitlePolarity This parameter is used for excluding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.sentimentBodyPolarity This parameter is used for finding stories whose body sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentBodyPolarity This parameter is used for excluding stories whose body sentiment is the specified value. 
     * @param {Number} opts.mediaImagesCountMin This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesCountMax This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMin This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMax This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMin This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMax This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMin This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMax This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
     * @param {Array.<module:model/String>} opts.mediaImagesFormat This parameter is used for finding stories whose images format are the specified value. 
     * @param {Array.<module:model/String>} opts.notMediaImagesFormat This parameter is used for excluding stories whose images format are the specified value. 
     * @param {Number} opts.mediaVideosCountMin This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
     * @param {Number} opts.mediaVideosCountMax This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
     * @param {Array.<Number>} opts.authorId This parameter is used for finding stories whose author id is the specified value. 
     * @param {Array.<Number>} opts.notAuthorId This parameter is used for excluding stories whose author id is the specified value. 
     * @param {String} opts.authorName This parameter is used for finding stories whose author full name contains the specified value. 
     * @param {String} opts.notAuthorName This parameter is used for excluding stories whose author full name contains the specified value. 
     * @param {Array.<Number>} opts.sourceId This parameter is used for finding stories whose source id is the specified value. 
     * @param {Array.<Number>} opts.notSourceId This parameter is used for excluding stories whose source id is the specified value. 
     * @param {Array.<String>} opts.sourceName This parameter is used for finding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.notSourceName This parameter is used for excluding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.sourceDomain This parameter is used for finding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.notSourceDomain This parameter is used for excluding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.sourceLocationsCountry This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCountry This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsState This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsState This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsCity This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCity This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCountry This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCountry This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesState This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesState This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCity This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCity This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.sourceScopesLevel This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.notSourceScopesLevel This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Number} opts.sourceLinksInCountMin This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceLinksInCountMax This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceRankingsAlexaRankMin This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.sourceRankingsAlexaRankMax This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Array.<String>} opts.sourceRankingsAlexaCountry This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.socialSharesCountFacebookMin This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountFacebookMax This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMin This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMax This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMin This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMax This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMin This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMax This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
     * @param {Array.<String>} opts.clusters This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). 
     * @param {String} opts.aql This parameter is used to supply a query in AYLIEN Query Language. 
     * @param {String} opts.aqlDefaultField This parameter is used to supply an optional default field name used in the AQL query.  (default to 'text')
     * @param {String} opts.query This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string. 
     * @param {Number} opts.intervalStart This parameter is used for setting the start data point of histogram intervals. 
     * @param {Number} opts.intervalEnd This parameter is used for setting the end data point of histogram intervals. 
     * @param {Number} opts.intervalWidth This parameter is used for setting the width of histogram intervals. 
     * @param {module:model/String} opts.field This parameter is used for specifying the y-axis variable for the histogram.  (default to 'social_shares_count')
     * @param {module:api/DefaultApi~listHistogramsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Histograms}
     */

  }, {
    key: "listHistograms",
    value: function listHistograms(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'translations.en.title': opts['translationsEnTitle'],
        'translations.en.body': opts['translationsEnBody'],
        'translations.en.text': opts['translationsEnText'],
        'links.permalink[]': this.apiClient.buildCollectionParam(opts['linksPermalink'], 'multi'),
        '!links.permalink[]': this.apiClient.buildCollectionParam(opts['notLinksPermalink'], 'multi'),
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.label[]': this.apiClient.buildCollectionParam(opts['categoriesLabel'], 'multi'),
        '!categories.label[]': this.apiClient.buildCollectionParam(opts['notCategoriesLabel'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.id[]': this.apiClient.buildCollectionParam(opts['entitiesTitleId'], 'multi'),
        '!entities.title.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleId'], 'multi'),
        'entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleSurfaceFormsText'], 'multi'),
        '!entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleSurfaceFormsText'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesTitleStockTicker'], 'multi'),
        '!entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleStockTicker'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikipedia'], 'multi'),
        '!entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikipedia'], 'multi'),
        'entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikidata'], 'multi'),
        '!entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikidata'], 'multi'),
        'entities.body.id[]': this.apiClient.buildCollectionParam(opts['entitiesBodyId'], 'multi'),
        '!entities.body.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyId'], 'multi'),
        'entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodySurfaceFormsText'], 'multi'),
        '!entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodySurfaceFormsText'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesBodyStockTicker'], 'multi'),
        '!entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyStockTicker'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
        'entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikipedia'], 'multi'),
        '!entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikipedia'], 'multi'),
        'entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikidata'], 'multi'),
        '!entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikidata'], 'multi'),
        'sentiment.title.polarity': opts['sentimentTitlePolarity'],
        '!sentiment.title.polarity': opts['notSentimentTitlePolarity'],
        'sentiment.body.polarity': opts['sentimentBodyPolarity'],
        '!sentiment.body.polarity': opts['notSentimentBodyPolarity'],
        'media.images.count.min': opts['mediaImagesCountMin'],
        'media.images.count.max': opts['mediaImagesCountMax'],
        'media.images.width.min': opts['mediaImagesWidthMin'],
        'media.images.width.max': opts['mediaImagesWidthMax'],
        'media.images.height.min': opts['mediaImagesHeightMin'],
        'media.images.height.max': opts['mediaImagesHeightMax'],
        'media.images.content_length.min': opts['mediaImagesContentLengthMin'],
        'media.images.content_length.max': opts['mediaImagesContentLengthMax'],
        'media.images.format[]': this.apiClient.buildCollectionParam(opts['mediaImagesFormat'], 'multi'),
        '!media.images.format[]': this.apiClient.buildCollectionParam(opts['notMediaImagesFormat'], 'multi'),
        'media.videos.count.min': opts['mediaVideosCountMin'],
        'media.videos.count.max': opts['mediaVideosCountMax'],
        'author.id[]': this.apiClient.buildCollectionParam(opts['authorId'], 'multi'),
        '!author.id[]': this.apiClient.buildCollectionParam(opts['notAuthorId'], 'multi'),
        'author.name': opts['authorName'],
        '!author.name': opts['notAuthorName'],
        'source.id[]': this.apiClient.buildCollectionParam(opts['sourceId'], 'multi'),
        '!source.id[]': this.apiClient.buildCollectionParam(opts['notSourceId'], 'multi'),
        'source.name[]': this.apiClient.buildCollectionParam(opts['sourceName'], 'multi'),
        '!source.name[]': this.apiClient.buildCollectionParam(opts['notSourceName'], 'multi'),
        'source.domain[]': this.apiClient.buildCollectionParam(opts['sourceDomain'], 'multi'),
        '!source.domain[]': this.apiClient.buildCollectionParam(opts['notSourceDomain'], 'multi'),
        'source.locations.country[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCountry'], 'multi'),
        '!source.locations.country[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCountry'], 'multi'),
        'source.locations.state[]': this.apiClient.buildCollectionParam(opts['sourceLocationsState'], 'multi'),
        '!source.locations.state[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsState'], 'multi'),
        'source.locations.city[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCity'], 'multi'),
        '!source.locations.city[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCity'], 'multi'),
        'source.scopes.country[]': this.apiClient.buildCollectionParam(opts['sourceScopesCountry'], 'multi'),
        '!source.scopes.country[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCountry'], 'multi'),
        'source.scopes.state[]': this.apiClient.buildCollectionParam(opts['sourceScopesState'], 'multi'),
        '!source.scopes.state[]': this.apiClient.buildCollectionParam(opts['notSourceScopesState'], 'multi'),
        'source.scopes.city[]': this.apiClient.buildCollectionParam(opts['sourceScopesCity'], 'multi'),
        '!source.scopes.city[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCity'], 'multi'),
        'source.scopes.level[]': this.apiClient.buildCollectionParam(opts['sourceScopesLevel'], 'multi'),
        '!source.scopes.level[]': this.apiClient.buildCollectionParam(opts['notSourceScopesLevel'], 'multi'),
        'source.links_in_count.min': opts['sourceLinksInCountMin'],
        'source.links_in_count.max': opts['sourceLinksInCountMax'],
        'source.rankings.alexa.rank.min': opts['sourceRankingsAlexaRankMin'],
        'source.rankings.alexa.rank.max': opts['sourceRankingsAlexaRankMax'],
        'source.rankings.alexa.country[]': this.apiClient.buildCollectionParam(opts['sourceRankingsAlexaCountry'], 'multi'),
        'social_shares_count.facebook.min': opts['socialSharesCountFacebookMin'],
        'social_shares_count.facebook.max': opts['socialSharesCountFacebookMax'],
        'social_shares_count.google_plus.min': opts['socialSharesCountGooglePlusMin'],
        'social_shares_count.google_plus.max': opts['socialSharesCountGooglePlusMax'],
        'social_shares_count.linkedin.min': opts['socialSharesCountLinkedinMin'],
        'social_shares_count.linkedin.max': opts['socialSharesCountLinkedinMax'],
        'social_shares_count.reddit.min': opts['socialSharesCountRedditMin'],
        'social_shares_count.reddit.max': opts['socialSharesCountRedditMax'],
        'clusters[]': this.apiClient.buildCollectionParam(opts['clusters'], 'multi'),
        'aql': opts['aql'],
        'aql_default_field': opts['aqlDefaultField'],
        'query': opts['query'],
        'interval.start': opts['intervalStart'],
        'interval.end': opts['intervalEnd'],
        'interval.width': opts['intervalWidth'],
        'field': opts['field']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['app_id', 'app_key'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = _Histograms["default"];
      return this.apiClient.callApi('/histograms', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listRelatedStoriesGet operation.
     * @callback module:api/DefaultApi~listRelatedStoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedStories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id. 
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id. 
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnTitle This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnBody This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnText This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {Array.<String>} opts.linksPermalink This parameter is used to find stories based on their url. 
     * @param {Array.<String>} opts.notLinksPermalink This parameter is used to exclude stories based on their url. 
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.categoriesLabel This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesLabel This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.entitiesTitleId This parameter is used to find stories based on the specified entities `id` in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleId This parameter is used to exclude stories based on the specified entities `id` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleSurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleSurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikipedia This parameter is used to find stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikidata This parameter is used to find stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyId This parameter is used to find stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyId This parameter is used to exclude stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodySurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodySurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikipedia This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikidata This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {module:model/String} opts.sentimentTitlePolarity This parameter is used for finding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentTitlePolarity This parameter is used for excluding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.sentimentBodyPolarity This parameter is used for finding stories whose body sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentBodyPolarity This parameter is used for excluding stories whose body sentiment is the specified value. 
     * @param {Number} opts.mediaImagesCountMin This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesCountMax This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMin This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMax This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMin This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMax This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMin This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMax This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
     * @param {Array.<module:model/String>} opts.mediaImagesFormat This parameter is used for finding stories whose images format are the specified value. 
     * @param {Array.<module:model/String>} opts.notMediaImagesFormat This parameter is used for excluding stories whose images format are the specified value. 
     * @param {Number} opts.mediaVideosCountMin This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
     * @param {Number} opts.mediaVideosCountMax This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
     * @param {Array.<Number>} opts.authorId This parameter is used for finding stories whose author id is the specified value. 
     * @param {Array.<Number>} opts.notAuthorId This parameter is used for excluding stories whose author id is the specified value. 
     * @param {String} opts.authorName This parameter is used for finding stories whose author full name contains the specified value. 
     * @param {String} opts.notAuthorName This parameter is used for excluding stories whose author full name contains the specified value. 
     * @param {Array.<Number>} opts.sourceId This parameter is used for finding stories whose source id is the specified value. 
     * @param {Array.<Number>} opts.notSourceId This parameter is used for excluding stories whose source id is the specified value. 
     * @param {Array.<String>} opts.sourceName This parameter is used for finding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.notSourceName This parameter is used for excluding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.sourceDomain This parameter is used for finding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.notSourceDomain This parameter is used for excluding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.sourceLocationsCountry This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCountry This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsState This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsState This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsCity This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCity This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCountry This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCountry This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesState This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesState This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCity This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCity This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.sourceScopesLevel This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.notSourceScopesLevel This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Number} opts.sourceLinksInCountMin This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceLinksInCountMax This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceRankingsAlexaRankMin This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.sourceRankingsAlexaRankMax This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Array.<String>} opts.sourceRankingsAlexaCountry This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.socialSharesCountFacebookMin This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountFacebookMax This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMin This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMax This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMin This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMax This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMin This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMax This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
     * @param {Array.<String>} opts.clusters This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). 
     * @param {Array.<module:model/String>} opts._return This parameter is used for specifying return fields.
     * @param {Number} opts.storyId A story id
     * @param {String} opts.storyUrl An article or webpage
     * @param {String} opts.storyTitle Title of the article
     * @param {String} opts.storyBody Body of the article
     * @param {String} opts.aql This parameter is used to supply a query in AYLIEN Query Language. 
     * @param {String} opts.aqlDefaultField This parameter is used to supply an optional default field name used in the AQL query.  (default to 'text')
     * @param {String} opts.query This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string. 
     * @param {module:model/String} opts.boostBy This parameter is used for boosting the result by the specified value. 
     * @param {module:model/String} opts.storyLanguage This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  (default to 'auto')
     * @param {Number} opts.perPage This parameter is used for specifying number of items in each page.  (default to 3)
     * @param {module:api/DefaultApi~listRelatedStoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelatedStories}
     */

  }, {
    key: "listRelatedStoriesGet",
    value: function listRelatedStoriesGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'translations.en.title': opts['translationsEnTitle'],
        'translations.en.body': opts['translationsEnBody'],
        'translations.en.text': opts['translationsEnText'],
        'links.permalink[]': this.apiClient.buildCollectionParam(opts['linksPermalink'], 'multi'),
        '!links.permalink[]': this.apiClient.buildCollectionParam(opts['notLinksPermalink'], 'multi'),
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.label[]': this.apiClient.buildCollectionParam(opts['categoriesLabel'], 'multi'),
        '!categories.label[]': this.apiClient.buildCollectionParam(opts['notCategoriesLabel'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.id[]': this.apiClient.buildCollectionParam(opts['entitiesTitleId'], 'multi'),
        '!entities.title.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleId'], 'multi'),
        'entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleSurfaceFormsText'], 'multi'),
        '!entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleSurfaceFormsText'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesTitleStockTicker'], 'multi'),
        '!entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleStockTicker'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikipedia'], 'multi'),
        '!entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikipedia'], 'multi'),
        'entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikidata'], 'multi'),
        '!entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikidata'], 'multi'),
        'entities.body.id[]': this.apiClient.buildCollectionParam(opts['entitiesBodyId'], 'multi'),
        '!entities.body.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyId'], 'multi'),
        'entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodySurfaceFormsText'], 'multi'),
        '!entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodySurfaceFormsText'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesBodyStockTicker'], 'multi'),
        '!entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyStockTicker'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
        'entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikipedia'], 'multi'),
        '!entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikipedia'], 'multi'),
        'entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikidata'], 'multi'),
        '!entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikidata'], 'multi'),
        'sentiment.title.polarity': opts['sentimentTitlePolarity'],
        '!sentiment.title.polarity': opts['notSentimentTitlePolarity'],
        'sentiment.body.polarity': opts['sentimentBodyPolarity'],
        '!sentiment.body.polarity': opts['notSentimentBodyPolarity'],
        'media.images.count.min': opts['mediaImagesCountMin'],
        'media.images.count.max': opts['mediaImagesCountMax'],
        'media.images.width.min': opts['mediaImagesWidthMin'],
        'media.images.width.max': opts['mediaImagesWidthMax'],
        'media.images.height.min': opts['mediaImagesHeightMin'],
        'media.images.height.max': opts['mediaImagesHeightMax'],
        'media.images.content_length.min': opts['mediaImagesContentLengthMin'],
        'media.images.content_length.max': opts['mediaImagesContentLengthMax'],
        'media.images.format[]': this.apiClient.buildCollectionParam(opts['mediaImagesFormat'], 'multi'),
        '!media.images.format[]': this.apiClient.buildCollectionParam(opts['notMediaImagesFormat'], 'multi'),
        'media.videos.count.min': opts['mediaVideosCountMin'],
        'media.videos.count.max': opts['mediaVideosCountMax'],
        'author.id[]': this.apiClient.buildCollectionParam(opts['authorId'], 'multi'),
        '!author.id[]': this.apiClient.buildCollectionParam(opts['notAuthorId'], 'multi'),
        'author.name': opts['authorName'],
        '!author.name': opts['notAuthorName'],
        'source.id[]': this.apiClient.buildCollectionParam(opts['sourceId'], 'multi'),
        '!source.id[]': this.apiClient.buildCollectionParam(opts['notSourceId'], 'multi'),
        'source.name[]': this.apiClient.buildCollectionParam(opts['sourceName'], 'multi'),
        '!source.name[]': this.apiClient.buildCollectionParam(opts['notSourceName'], 'multi'),
        'source.domain[]': this.apiClient.buildCollectionParam(opts['sourceDomain'], 'multi'),
        '!source.domain[]': this.apiClient.buildCollectionParam(opts['notSourceDomain'], 'multi'),
        'source.locations.country[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCountry'], 'multi'),
        '!source.locations.country[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCountry'], 'multi'),
        'source.locations.state[]': this.apiClient.buildCollectionParam(opts['sourceLocationsState'], 'multi'),
        '!source.locations.state[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsState'], 'multi'),
        'source.locations.city[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCity'], 'multi'),
        '!source.locations.city[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCity'], 'multi'),
        'source.scopes.country[]': this.apiClient.buildCollectionParam(opts['sourceScopesCountry'], 'multi'),
        '!source.scopes.country[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCountry'], 'multi'),
        'source.scopes.state[]': this.apiClient.buildCollectionParam(opts['sourceScopesState'], 'multi'),
        '!source.scopes.state[]': this.apiClient.buildCollectionParam(opts['notSourceScopesState'], 'multi'),
        'source.scopes.city[]': this.apiClient.buildCollectionParam(opts['sourceScopesCity'], 'multi'),
        '!source.scopes.city[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCity'], 'multi'),
        'source.scopes.level[]': this.apiClient.buildCollectionParam(opts['sourceScopesLevel'], 'multi'),
        '!source.scopes.level[]': this.apiClient.buildCollectionParam(opts['notSourceScopesLevel'], 'multi'),
        'source.links_in_count.min': opts['sourceLinksInCountMin'],
        'source.links_in_count.max': opts['sourceLinksInCountMax'],
        'source.rankings.alexa.rank.min': opts['sourceRankingsAlexaRankMin'],
        'source.rankings.alexa.rank.max': opts['sourceRankingsAlexaRankMax'],
        'source.rankings.alexa.country[]': this.apiClient.buildCollectionParam(opts['sourceRankingsAlexaCountry'], 'multi'),
        'social_shares_count.facebook.min': opts['socialSharesCountFacebookMin'],
        'social_shares_count.facebook.max': opts['socialSharesCountFacebookMax'],
        'social_shares_count.google_plus.min': opts['socialSharesCountGooglePlusMin'],
        'social_shares_count.google_plus.max': opts['socialSharesCountGooglePlusMax'],
        'social_shares_count.linkedin.min': opts['socialSharesCountLinkedinMin'],
        'social_shares_count.linkedin.max': opts['socialSharesCountLinkedinMax'],
        'social_shares_count.reddit.min': opts['socialSharesCountRedditMin'],
        'social_shares_count.reddit.max': opts['socialSharesCountRedditMax'],
        'clusters[]': this.apiClient.buildCollectionParam(opts['clusters'], 'multi'),
        'return[]': this.apiClient.buildCollectionParam(opts['_return'], 'multi'),
        'story_id': opts['storyId'],
        'story_url': opts['storyUrl'],
        'story_title': opts['storyTitle'],
        'story_body': opts['storyBody'],
        'aql': opts['aql'],
        'aql_default_field': opts['aqlDefaultField'],
        'query': opts['query'],
        'boost_by': opts['boostBy'],
        'story_language': opts['storyLanguage'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['app_id', 'app_key'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = _RelatedStories["default"];
      return this.apiClient.callApi('/related_stories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listRelatedStoriesPost operation.
     * @callback module:api/DefaultApi~listRelatedStoriesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedStories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id. 
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id. 
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnTitle This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnBody This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnText This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {Array.<String>} opts.linksPermalink This parameter is used to find stories based on their url. 
     * @param {Array.<String>} opts.notLinksPermalink This parameter is used to exclude stories based on their url. 
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.categoriesLabel This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesLabel This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.entitiesTitleId This parameter is used to find stories based on the specified entities `id` in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleId This parameter is used to exclude stories based on the specified entities `id` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleSurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleSurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikipedia This parameter is used to find stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikidata This parameter is used to find stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyId This parameter is used to find stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyId This parameter is used to exclude stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodySurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodySurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikipedia This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikidata This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {module:model/String} opts.sentimentTitlePolarity This parameter is used for finding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentTitlePolarity This parameter is used for excluding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.sentimentBodyPolarity This parameter is used for finding stories whose body sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentBodyPolarity This parameter is used for excluding stories whose body sentiment is the specified value. 
     * @param {Number} opts.mediaImagesCountMin This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesCountMax This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMin This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMax This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMin This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMax This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMin This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMax This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
     * @param {Array.<module:model/String>} opts.mediaImagesFormat This parameter is used for finding stories whose images format are the specified value. 
     * @param {Array.<module:model/String>} opts.notMediaImagesFormat This parameter is used for excluding stories whose images format are the specified value. 
     * @param {Number} opts.mediaVideosCountMin This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
     * @param {Number} opts.mediaVideosCountMax This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
     * @param {Array.<Number>} opts.authorId This parameter is used for finding stories whose author id is the specified value. 
     * @param {Array.<Number>} opts.notAuthorId This parameter is used for excluding stories whose author id is the specified value. 
     * @param {String} opts.authorName This parameter is used for finding stories whose author full name contains the specified value. 
     * @param {String} opts.notAuthorName This parameter is used for excluding stories whose author full name contains the specified value. 
     * @param {Array.<Number>} opts.sourceId This parameter is used for finding stories whose source id is the specified value. 
     * @param {Array.<Number>} opts.notSourceId This parameter is used for excluding stories whose source id is the specified value. 
     * @param {Array.<String>} opts.sourceName This parameter is used for finding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.notSourceName This parameter is used for excluding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.sourceDomain This parameter is used for finding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.notSourceDomain This parameter is used for excluding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.sourceLocationsCountry This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCountry This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsState This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsState This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsCity This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCity This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCountry This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCountry This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesState This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesState This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCity This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCity This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.sourceScopesLevel This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.notSourceScopesLevel This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Number} opts.sourceLinksInCountMin This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceLinksInCountMax This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceRankingsAlexaRankMin This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.sourceRankingsAlexaRankMax This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Array.<String>} opts.sourceRankingsAlexaCountry This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.socialSharesCountFacebookMin This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountFacebookMax This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMin This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMax This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMin This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMax This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMin This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMax This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
     * @param {Array.<String>} opts.clusters This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). 
     * @param {Array.<module:model/String>} opts._return This parameter is used for specifying return fields.
     * @param {Number} opts.storyId A story id
     * @param {String} opts.storyUrl An article or webpage
     * @param {String} opts.storyTitle Title of the article
     * @param {String} opts.storyBody Body of the article
     * @param {String} opts.aql This parameter is used to supply a query in AYLIEN Query Language. 
     * @param {String} opts.aqlDefaultField This parameter is used to supply an optional default field name used in the AQL query.  (default to 'text')
     * @param {String} opts.query This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string. 
     * @param {module:model/String} opts.boostBy This parameter is used for boosting the result by the specified value. 
     * @param {module:model/String} opts.storyLanguage This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.  (default to 'auto')
     * @param {Number} opts.perPage This parameter is used for specifying number of items in each page.  (default to 3)
     * @param {module:api/DefaultApi~listRelatedStoriesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelatedStories}
     */

  }, {
    key: "listRelatedStoriesPost",
    value: function listRelatedStoriesPost(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'translations.en.title': opts['translationsEnTitle'],
        'translations.en.body': opts['translationsEnBody'],
        'translations.en.text': opts['translationsEnText'],
        'links.permalink[]': this.apiClient.buildCollectionParam(opts['linksPermalink'], 'multi'),
        '!links.permalink[]': this.apiClient.buildCollectionParam(opts['notLinksPermalink'], 'multi'),
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.label[]': this.apiClient.buildCollectionParam(opts['categoriesLabel'], 'multi'),
        '!categories.label[]': this.apiClient.buildCollectionParam(opts['notCategoriesLabel'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.id[]': this.apiClient.buildCollectionParam(opts['entitiesTitleId'], 'multi'),
        '!entities.title.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleId'], 'multi'),
        'entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleSurfaceFormsText'], 'multi'),
        '!entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleSurfaceFormsText'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesTitleStockTicker'], 'multi'),
        '!entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleStockTicker'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikipedia'], 'multi'),
        '!entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikipedia'], 'multi'),
        'entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikidata'], 'multi'),
        '!entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikidata'], 'multi'),
        'entities.body.id[]': this.apiClient.buildCollectionParam(opts['entitiesBodyId'], 'multi'),
        '!entities.body.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyId'], 'multi'),
        'entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodySurfaceFormsText'], 'multi'),
        '!entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodySurfaceFormsText'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesBodyStockTicker'], 'multi'),
        '!entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyStockTicker'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
        'entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikipedia'], 'multi'),
        '!entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikipedia'], 'multi'),
        'entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikidata'], 'multi'),
        '!entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikidata'], 'multi'),
        'sentiment.title.polarity': opts['sentimentTitlePolarity'],
        '!sentiment.title.polarity': opts['notSentimentTitlePolarity'],
        'sentiment.body.polarity': opts['sentimentBodyPolarity'],
        '!sentiment.body.polarity': opts['notSentimentBodyPolarity'],
        'media.images.count.min': opts['mediaImagesCountMin'],
        'media.images.count.max': opts['mediaImagesCountMax'],
        'media.images.width.min': opts['mediaImagesWidthMin'],
        'media.images.width.max': opts['mediaImagesWidthMax'],
        'media.images.height.min': opts['mediaImagesHeightMin'],
        'media.images.height.max': opts['mediaImagesHeightMax'],
        'media.images.content_length.min': opts['mediaImagesContentLengthMin'],
        'media.images.content_length.max': opts['mediaImagesContentLengthMax'],
        'media.images.format[]': this.apiClient.buildCollectionParam(opts['mediaImagesFormat'], 'multi'),
        '!media.images.format[]': this.apiClient.buildCollectionParam(opts['notMediaImagesFormat'], 'multi'),
        'media.videos.count.min': opts['mediaVideosCountMin'],
        'media.videos.count.max': opts['mediaVideosCountMax'],
        'author.id[]': this.apiClient.buildCollectionParam(opts['authorId'], 'multi'),
        '!author.id[]': this.apiClient.buildCollectionParam(opts['notAuthorId'], 'multi'),
        'author.name': opts['authorName'],
        '!author.name': opts['notAuthorName'],
        'source.id[]': this.apiClient.buildCollectionParam(opts['sourceId'], 'multi'),
        '!source.id[]': this.apiClient.buildCollectionParam(opts['notSourceId'], 'multi'),
        'source.name[]': this.apiClient.buildCollectionParam(opts['sourceName'], 'multi'),
        '!source.name[]': this.apiClient.buildCollectionParam(opts['notSourceName'], 'multi'),
        'source.domain[]': this.apiClient.buildCollectionParam(opts['sourceDomain'], 'multi'),
        '!source.domain[]': this.apiClient.buildCollectionParam(opts['notSourceDomain'], 'multi'),
        'source.locations.country[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCountry'], 'multi'),
        '!source.locations.country[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCountry'], 'multi'),
        'source.locations.state[]': this.apiClient.buildCollectionParam(opts['sourceLocationsState'], 'multi'),
        '!source.locations.state[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsState'], 'multi'),
        'source.locations.city[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCity'], 'multi'),
        '!source.locations.city[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCity'], 'multi'),
        'source.scopes.country[]': this.apiClient.buildCollectionParam(opts['sourceScopesCountry'], 'multi'),
        '!source.scopes.country[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCountry'], 'multi'),
        'source.scopes.state[]': this.apiClient.buildCollectionParam(opts['sourceScopesState'], 'multi'),
        '!source.scopes.state[]': this.apiClient.buildCollectionParam(opts['notSourceScopesState'], 'multi'),
        'source.scopes.city[]': this.apiClient.buildCollectionParam(opts['sourceScopesCity'], 'multi'),
        '!source.scopes.city[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCity'], 'multi'),
        'source.scopes.level[]': this.apiClient.buildCollectionParam(opts['sourceScopesLevel'], 'multi'),
        '!source.scopes.level[]': this.apiClient.buildCollectionParam(opts['notSourceScopesLevel'], 'multi'),
        'source.links_in_count.min': opts['sourceLinksInCountMin'],
        'source.links_in_count.max': opts['sourceLinksInCountMax'],
        'source.rankings.alexa.rank.min': opts['sourceRankingsAlexaRankMin'],
        'source.rankings.alexa.rank.max': opts['sourceRankingsAlexaRankMax'],
        'source.rankings.alexa.country[]': this.apiClient.buildCollectionParam(opts['sourceRankingsAlexaCountry'], 'multi'),
        'social_shares_count.facebook.min': opts['socialSharesCountFacebookMin'],
        'social_shares_count.facebook.max': opts['socialSharesCountFacebookMax'],
        'social_shares_count.google_plus.min': opts['socialSharesCountGooglePlusMin'],
        'social_shares_count.google_plus.max': opts['socialSharesCountGooglePlusMax'],
        'social_shares_count.linkedin.min': opts['socialSharesCountLinkedinMin'],
        'social_shares_count.linkedin.max': opts['socialSharesCountLinkedinMax'],
        'social_shares_count.reddit.min': opts['socialSharesCountRedditMin'],
        'social_shares_count.reddit.max': opts['socialSharesCountRedditMax'],
        'clusters[]': this.apiClient.buildCollectionParam(opts['clusters'], 'multi'),
        'return[]': this.apiClient.buildCollectionParam(opts['_return'], 'multi'),
        'story_id': opts['storyId'],
        'story_url': opts['storyUrl'],
        'story_title': opts['storyTitle'],
        'story_body': opts['storyBody'],
        'aql': opts['aql'],
        'aql_default_field': opts['aqlDefaultField'],
        'query': opts['query'],
        'boost_by': opts['boostBy'],
        'story_language': opts['storyLanguage'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['app_id', 'app_key'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = _RelatedStories["default"];
      return this.apiClient.callApi('/related_stories', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listStories operation.
     * @callback module:api/DefaultApi~listStoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Stories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Stories
     * The stories endpoint is used to return stories based on parameters you set in your query. The News API crawler gathers articles in near real-time and stores information about them, or metadata. Below you can see all of the query parameters, which you can use to narrow down your query. 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id. 
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id. 
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnTitle This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnBody This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnText This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {Array.<String>} opts.linksPermalink This parameter is used to find stories based on their url. 
     * @param {Array.<String>} opts.notLinksPermalink This parameter is used to exclude stories based on their url. 
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.categoriesLabel This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesLabel This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.entitiesTitleId This parameter is used to find stories based on the specified entities `id` in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleId This parameter is used to exclude stories based on the specified entities `id` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleSurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleSurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikipedia This parameter is used to find stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikidata This parameter is used to find stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyId This parameter is used to find stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyId This parameter is used to exclude stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodySurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodySurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikipedia This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikidata This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {module:model/String} opts.sentimentTitlePolarity This parameter is used for finding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentTitlePolarity This parameter is used for excluding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.sentimentBodyPolarity This parameter is used for finding stories whose body sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentBodyPolarity This parameter is used for excluding stories whose body sentiment is the specified value. 
     * @param {Number} opts.mediaImagesCountMin This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesCountMax This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMin This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMax This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMin This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMax This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMin This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMax This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
     * @param {Array.<module:model/String>} opts.mediaImagesFormat This parameter is used for finding stories whose images format are the specified value. 
     * @param {Array.<module:model/String>} opts.notMediaImagesFormat This parameter is used for excluding stories whose images format are the specified value. 
     * @param {Number} opts.mediaVideosCountMin This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
     * @param {Number} opts.mediaVideosCountMax This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
     * @param {Array.<Number>} opts.authorId This parameter is used for finding stories whose author id is the specified value. 
     * @param {Array.<Number>} opts.notAuthorId This parameter is used for excluding stories whose author id is the specified value. 
     * @param {String} opts.authorName This parameter is used for finding stories whose author full name contains the specified value. 
     * @param {String} opts.notAuthorName This parameter is used for excluding stories whose author full name contains the specified value. 
     * @param {Array.<Number>} opts.sourceId This parameter is used for finding stories whose source id is the specified value. 
     * @param {Array.<Number>} opts.notSourceId This parameter is used for excluding stories whose source id is the specified value. 
     * @param {Array.<String>} opts.sourceName This parameter is used for finding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.notSourceName This parameter is used for excluding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.sourceDomain This parameter is used for finding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.notSourceDomain This parameter is used for excluding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.sourceLocationsCountry This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCountry This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsState This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsState This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsCity This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCity This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCountry This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCountry This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesState This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesState This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCity This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCity This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.sourceScopesLevel This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.notSourceScopesLevel This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Number} opts.sourceLinksInCountMin This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceLinksInCountMax This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceRankingsAlexaRankMin This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.sourceRankingsAlexaRankMax This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Array.<String>} opts.sourceRankingsAlexaCountry This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.socialSharesCountFacebookMin This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountFacebookMax This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMin This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMax This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMin This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMax This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMin This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMax This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
     * @param {Array.<String>} opts.clusters This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). 
     * @param {Array.<module:model/String>} opts._return This parameter is used for specifying return fields.
     * @param {String} opts.aql This parameter is used to supply a query in AYLIEN Query Language. 
     * @param {String} opts.aqlDefaultField This parameter is used to supply an optional default field name used in the AQL query.  (default to 'text')
     * @param {String} opts.query This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string. 
     * @param {module:model/String} opts.sortBy This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  (default to 'published_at')
     * @param {module:model/String} opts.sortDirection This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  (default to 'desc')
     * @param {String} opts.cursor This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results).  (default to '*')
     * @param {Number} opts.perPage This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results)  (default to 10)
     * @param {module:api/DefaultApi~listStoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Stories}
     */

  }, {
    key: "listStories",
    value: function listStories(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'translations.en.title': opts['translationsEnTitle'],
        'translations.en.body': opts['translationsEnBody'],
        'translations.en.text': opts['translationsEnText'],
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'links.permalink[]': this.apiClient.buildCollectionParam(opts['linksPermalink'], 'multi'),
        '!links.permalink[]': this.apiClient.buildCollectionParam(opts['notLinksPermalink'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.label[]': this.apiClient.buildCollectionParam(opts['categoriesLabel'], 'multi'),
        '!categories.label[]': this.apiClient.buildCollectionParam(opts['notCategoriesLabel'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.id[]': this.apiClient.buildCollectionParam(opts['entitiesTitleId'], 'multi'),
        '!entities.title.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleId'], 'multi'),
        'entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleSurfaceFormsText'], 'multi'),
        '!entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleSurfaceFormsText'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesTitleStockTicker'], 'multi'),
        '!entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleStockTicker'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikipedia'], 'multi'),
        '!entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikipedia'], 'multi'),
        'entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikidata'], 'multi'),
        '!entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikidata'], 'multi'),
        'entities.body.id[]': this.apiClient.buildCollectionParam(opts['entitiesBodyId'], 'multi'),
        '!entities.body.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyId'], 'multi'),
        'entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodySurfaceFormsText'], 'multi'),
        '!entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodySurfaceFormsText'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesBodyStockTicker'], 'multi'),
        '!entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyStockTicker'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
        'entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikipedia'], 'multi'),
        '!entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikipedia'], 'multi'),
        'entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikidata'], 'multi'),
        '!entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikidata'], 'multi'),
        'sentiment.title.polarity': opts['sentimentTitlePolarity'],
        '!sentiment.title.polarity': opts['notSentimentTitlePolarity'],
        'sentiment.body.polarity': opts['sentimentBodyPolarity'],
        '!sentiment.body.polarity': opts['notSentimentBodyPolarity'],
        'media.images.count.min': opts['mediaImagesCountMin'],
        'media.images.count.max': opts['mediaImagesCountMax'],
        'media.images.width.min': opts['mediaImagesWidthMin'],
        'media.images.width.max': opts['mediaImagesWidthMax'],
        'media.images.height.min': opts['mediaImagesHeightMin'],
        'media.images.height.max': opts['mediaImagesHeightMax'],
        'media.images.content_length.min': opts['mediaImagesContentLengthMin'],
        'media.images.content_length.max': opts['mediaImagesContentLengthMax'],
        'media.images.format[]': this.apiClient.buildCollectionParam(opts['mediaImagesFormat'], 'multi'),
        '!media.images.format[]': this.apiClient.buildCollectionParam(opts['notMediaImagesFormat'], 'multi'),
        'media.videos.count.min': opts['mediaVideosCountMin'],
        'media.videos.count.max': opts['mediaVideosCountMax'],
        'author.id[]': this.apiClient.buildCollectionParam(opts['authorId'], 'multi'),
        '!author.id[]': this.apiClient.buildCollectionParam(opts['notAuthorId'], 'multi'),
        'author.name': opts['authorName'],
        '!author.name': opts['notAuthorName'],
        'source.id[]': this.apiClient.buildCollectionParam(opts['sourceId'], 'multi'),
        '!source.id[]': this.apiClient.buildCollectionParam(opts['notSourceId'], 'multi'),
        'source.name[]': this.apiClient.buildCollectionParam(opts['sourceName'], 'multi'),
        '!source.name[]': this.apiClient.buildCollectionParam(opts['notSourceName'], 'multi'),
        'source.domain[]': this.apiClient.buildCollectionParam(opts['sourceDomain'], 'multi'),
        '!source.domain[]': this.apiClient.buildCollectionParam(opts['notSourceDomain'], 'multi'),
        'source.locations.country[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCountry'], 'multi'),
        '!source.locations.country[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCountry'], 'multi'),
        'source.locations.state[]': this.apiClient.buildCollectionParam(opts['sourceLocationsState'], 'multi'),
        '!source.locations.state[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsState'], 'multi'),
        'source.locations.city[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCity'], 'multi'),
        '!source.locations.city[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCity'], 'multi'),
        'source.scopes.country[]': this.apiClient.buildCollectionParam(opts['sourceScopesCountry'], 'multi'),
        '!source.scopes.country[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCountry'], 'multi'),
        'source.scopes.state[]': this.apiClient.buildCollectionParam(opts['sourceScopesState'], 'multi'),
        '!source.scopes.state[]': this.apiClient.buildCollectionParam(opts['notSourceScopesState'], 'multi'),
        'source.scopes.city[]': this.apiClient.buildCollectionParam(opts['sourceScopesCity'], 'multi'),
        '!source.scopes.city[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCity'], 'multi'),
        'source.scopes.level[]': this.apiClient.buildCollectionParam(opts['sourceScopesLevel'], 'multi'),
        '!source.scopes.level[]': this.apiClient.buildCollectionParam(opts['notSourceScopesLevel'], 'multi'),
        'source.links_in_count.min': opts['sourceLinksInCountMin'],
        'source.links_in_count.max': opts['sourceLinksInCountMax'],
        'source.rankings.alexa.rank.min': opts['sourceRankingsAlexaRankMin'],
        'source.rankings.alexa.rank.max': opts['sourceRankingsAlexaRankMax'],
        'source.rankings.alexa.country[]': this.apiClient.buildCollectionParam(opts['sourceRankingsAlexaCountry'], 'multi'),
        'social_shares_count.facebook.min': opts['socialSharesCountFacebookMin'],
        'social_shares_count.facebook.max': opts['socialSharesCountFacebookMax'],
        'social_shares_count.google_plus.min': opts['socialSharesCountGooglePlusMin'],
        'social_shares_count.google_plus.max': opts['socialSharesCountGooglePlusMax'],
        'social_shares_count.linkedin.min': opts['socialSharesCountLinkedinMin'],
        'social_shares_count.linkedin.max': opts['socialSharesCountLinkedinMax'],
        'social_shares_count.reddit.min': opts['socialSharesCountRedditMin'],
        'social_shares_count.reddit.max': opts['socialSharesCountRedditMax'],
        'clusters[]': this.apiClient.buildCollectionParam(opts['clusters'], 'multi'),
        'return[]': this.apiClient.buildCollectionParam(opts['_return'], 'multi'),
        'aql': opts['aql'],
        'aql_default_field': opts['aqlDefaultField'],
        'query': opts['query'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'cursor': opts['cursor'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['app_id', 'app_key'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = _Stories["default"];
      return this.apiClient.callApi('/stories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listTimeSeries operation.
     * @callback module:api/DefaultApi~listTimeSeriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeSeriesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List time series
     * The time series endpoint allows you to track information contained in stories over time. This information can be anything from mentions of a topic or entities, sentiment about a topic, or the volume of stories published by a source, to name but a few. The full list of parameters is given below. Using the [Date Math Syntax](https://newsapi.aylien.com/docs/working-with-dates), you can easily set your query to return information from any time period, from the current point in time to when the News API started collecting stories. The returned information can be rounded to a time also specified by you, for example by setting the results into hourly, daily, or weekly data points. 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id. 
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id. 
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnTitle This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnBody This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnText This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.categoriesLabel This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesLabel This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.entitiesTitleId This parameter is used to find stories based on the specified entities `id` in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleId This parameter is used to exclude stories based on the specified entities `id` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleSurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleSurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikipedia This parameter is used to find stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikidata This parameter is used to find stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyId This parameter is used to find stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyId This parameter is used to exclude stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodySurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodySurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikipedia This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikidata This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {module:model/String} opts.sentimentTitlePolarity This parameter is used for finding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentTitlePolarity This parameter is used for excluding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.sentimentBodyPolarity This parameter is used for finding stories whose body sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentBodyPolarity This parameter is used for excluding stories whose body sentiment is the specified value. 
     * @param {Number} opts.mediaImagesCountMin This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesCountMax This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMin This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMax This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMin This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMax This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMin This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMax This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
     * @param {Array.<module:model/String>} opts.mediaImagesFormat This parameter is used for finding stories whose images format are the specified value. 
     * @param {Array.<module:model/String>} opts.notMediaImagesFormat This parameter is used for excluding stories whose images format are the specified value. 
     * @param {Number} opts.mediaVideosCountMin This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
     * @param {Number} opts.mediaVideosCountMax This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
     * @param {Array.<Number>} opts.authorId This parameter is used for finding stories whose author id is the specified value. 
     * @param {Array.<Number>} opts.notAuthorId This parameter is used for excluding stories whose author id is the specified value. 
     * @param {String} opts.authorName This parameter is used for finding stories whose author full name contains the specified value. 
     * @param {String} opts.notAuthorName This parameter is used for excluding stories whose author full name contains the specified value. 
     * @param {Array.<Number>} opts.sourceId This parameter is used for finding stories whose source id is the specified value. 
     * @param {Array.<Number>} opts.notSourceId This parameter is used for excluding stories whose source id is the specified value. 
     * @param {Array.<String>} opts.sourceName This parameter is used for finding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.notSourceName This parameter is used for excluding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.sourceDomain This parameter is used for finding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.notSourceDomain This parameter is used for excluding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.sourceLocationsCountry This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCountry This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsState This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsState This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsCity This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCity This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCountry This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCountry This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesState This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesState This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCity This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCity This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.sourceScopesLevel This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.notSourceScopesLevel This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Number} opts.sourceLinksInCountMin This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceLinksInCountMax This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceRankingsAlexaRankMin This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.sourceRankingsAlexaRankMax This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Array.<String>} opts.sourceRankingsAlexaCountry This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.socialSharesCountFacebookMin This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountFacebookMax This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMin This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMax This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMin This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMax This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMin This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMax This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
     * @param {Array.<String>} opts.clusters This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). 
     * @param {String} opts.aql This parameter is used to supply a query in AYLIEN Query Language. 
     * @param {String} opts.aqlDefaultField This parameter is used to supply an optional default field name used in the AQL query.  (default to 'text')
     * @param {String} opts.query This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string. 
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  (default to 'NOW-7DAYS/DAY')
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).  (default to 'NOW/DAY')
     * @param {String} opts.period The size of each date range is expressed as an interval to be added to the lower bound. It supports Date Math Syntax. Valid options are `+` following an integer number greater than 0 and one of the Date Math keywords. e.g. `+1DAY`, `+2MINUTES` and `+1MONTH`. Here are [Supported keywords](https://newsapi.aylien.com/docs/working-with-dates#date-math).  (default to '+1DAY')
     * @param {module:api/DefaultApi~listTimeSeriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeSeriesList}
     */

  }, {
    key: "listTimeSeries",
    value: function listTimeSeries(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'translations.en.title': opts['translationsEnTitle'],
        'translations.en.body': opts['translationsEnBody'],
        'translations.en.text': opts['translationsEnText'],
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.label[]': this.apiClient.buildCollectionParam(opts['categoriesLabel'], 'multi'),
        '!categories.label[]': this.apiClient.buildCollectionParam(opts['notCategoriesLabel'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.id[]': this.apiClient.buildCollectionParam(opts['entitiesTitleId'], 'multi'),
        '!entities.title.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleId'], 'multi'),
        'entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleSurfaceFormsText'], 'multi'),
        '!entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleSurfaceFormsText'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesTitleStockTicker'], 'multi'),
        '!entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleStockTicker'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikipedia'], 'multi'),
        '!entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikipedia'], 'multi'),
        'entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikidata'], 'multi'),
        '!entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikidata'], 'multi'),
        'entities.body.id[]': this.apiClient.buildCollectionParam(opts['entitiesBodyId'], 'multi'),
        '!entities.body.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyId'], 'multi'),
        'entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodySurfaceFormsText'], 'multi'),
        '!entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodySurfaceFormsText'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesBodyStockTicker'], 'multi'),
        '!entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyStockTicker'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
        'entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikipedia'], 'multi'),
        '!entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikipedia'], 'multi'),
        'entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikidata'], 'multi'),
        '!entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikidata'], 'multi'),
        'sentiment.title.polarity': opts['sentimentTitlePolarity'],
        '!sentiment.title.polarity': opts['notSentimentTitlePolarity'],
        'sentiment.body.polarity': opts['sentimentBodyPolarity'],
        '!sentiment.body.polarity': opts['notSentimentBodyPolarity'],
        'media.images.count.min': opts['mediaImagesCountMin'],
        'media.images.count.max': opts['mediaImagesCountMax'],
        'media.images.width.min': opts['mediaImagesWidthMin'],
        'media.images.width.max': opts['mediaImagesWidthMax'],
        'media.images.height.min': opts['mediaImagesHeightMin'],
        'media.images.height.max': opts['mediaImagesHeightMax'],
        'media.images.content_length.min': opts['mediaImagesContentLengthMin'],
        'media.images.content_length.max': opts['mediaImagesContentLengthMax'],
        'media.images.format[]': this.apiClient.buildCollectionParam(opts['mediaImagesFormat'], 'multi'),
        '!media.images.format[]': this.apiClient.buildCollectionParam(opts['notMediaImagesFormat'], 'multi'),
        'media.videos.count.min': opts['mediaVideosCountMin'],
        'media.videos.count.max': opts['mediaVideosCountMax'],
        'author.id[]': this.apiClient.buildCollectionParam(opts['authorId'], 'multi'),
        '!author.id[]': this.apiClient.buildCollectionParam(opts['notAuthorId'], 'multi'),
        'author.name': opts['authorName'],
        '!author.name': opts['notAuthorName'],
        'source.id[]': this.apiClient.buildCollectionParam(opts['sourceId'], 'multi'),
        '!source.id[]': this.apiClient.buildCollectionParam(opts['notSourceId'], 'multi'),
        'source.name[]': this.apiClient.buildCollectionParam(opts['sourceName'], 'multi'),
        '!source.name[]': this.apiClient.buildCollectionParam(opts['notSourceName'], 'multi'),
        'source.domain[]': this.apiClient.buildCollectionParam(opts['sourceDomain'], 'multi'),
        '!source.domain[]': this.apiClient.buildCollectionParam(opts['notSourceDomain'], 'multi'),
        'source.locations.country[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCountry'], 'multi'),
        '!source.locations.country[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCountry'], 'multi'),
        'source.locations.state[]': this.apiClient.buildCollectionParam(opts['sourceLocationsState'], 'multi'),
        '!source.locations.state[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsState'], 'multi'),
        'source.locations.city[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCity'], 'multi'),
        '!source.locations.city[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCity'], 'multi'),
        'source.scopes.country[]': this.apiClient.buildCollectionParam(opts['sourceScopesCountry'], 'multi'),
        '!source.scopes.country[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCountry'], 'multi'),
        'source.scopes.state[]': this.apiClient.buildCollectionParam(opts['sourceScopesState'], 'multi'),
        '!source.scopes.state[]': this.apiClient.buildCollectionParam(opts['notSourceScopesState'], 'multi'),
        'source.scopes.city[]': this.apiClient.buildCollectionParam(opts['sourceScopesCity'], 'multi'),
        '!source.scopes.city[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCity'], 'multi'),
        'source.scopes.level[]': this.apiClient.buildCollectionParam(opts['sourceScopesLevel'], 'multi'),
        '!source.scopes.level[]': this.apiClient.buildCollectionParam(opts['notSourceScopesLevel'], 'multi'),
        'source.links_in_count.min': opts['sourceLinksInCountMin'],
        'source.links_in_count.max': opts['sourceLinksInCountMax'],
        'source.rankings.alexa.rank.min': opts['sourceRankingsAlexaRankMin'],
        'source.rankings.alexa.rank.max': opts['sourceRankingsAlexaRankMax'],
        'source.rankings.alexa.country[]': this.apiClient.buildCollectionParam(opts['sourceRankingsAlexaCountry'], 'multi'),
        'social_shares_count.facebook.min': opts['socialSharesCountFacebookMin'],
        'social_shares_count.facebook.max': opts['socialSharesCountFacebookMax'],
        'social_shares_count.google_plus.min': opts['socialSharesCountGooglePlusMin'],
        'social_shares_count.google_plus.max': opts['socialSharesCountGooglePlusMax'],
        'social_shares_count.linkedin.min': opts['socialSharesCountLinkedinMin'],
        'social_shares_count.linkedin.max': opts['socialSharesCountLinkedinMax'],
        'social_shares_count.reddit.min': opts['socialSharesCountRedditMin'],
        'social_shares_count.reddit.max': opts['socialSharesCountRedditMax'],
        'clusters[]': this.apiClient.buildCollectionParam(opts['clusters'], 'multi'),
        'aql': opts['aql'],
        'aql_default_field': opts['aqlDefaultField'],
        'query': opts['query'],
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'period': opts['period']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['app_id', 'app_key'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = _TimeSeriesList["default"];
      return this.apiClient.callApi('/time_series', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listTrends operation.
     * @callback module:api/DefaultApi~listTrendsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trends} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List trends
     * The trends endpoint allows you to identify the most-mentioned entities, concepts and keywords relevant to your query. For example, this endpoint allows you to set parameters like a time period, a subject category, or an entity, and your request will return the most mentioned entities or keywords that are mentioned in relation to your query. 
     * @param {module:model/String} field This parameter is used to specify the trend field. 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id. 
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id. 
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnTitle This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnBody This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnText This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {Array.<String>} opts.linksPermalink This parameter is used to find stories based on their url. 
     * @param {Array.<String>} opts.notLinksPermalink This parameter is used to exclude stories based on their url. 
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.categoriesLabel This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.notCategoriesLabel This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.entitiesTitleId This parameter is used to find stories based on the specified entities `id` in the title of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleId This parameter is used to exclude stories based on the specified entities `id` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleSurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleSurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikipedia This parameter is used to find stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksWikidata This parameter is used to find stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesTitleLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyId This parameter is used to find stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyId This parameter is used to exclude stories based on the specified entities `id` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodySurfaceFormsText This parameter is used to find stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodySurfaceFormsText This parameter is used to exclude stories based on the specified entities `surface_form` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyStockTicker This parameter is used to find stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyStockTicker This parameter is used to exclude stories based on the specified entities `stock_ticker` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikipedia This parameter is used to find stories based on the specified entities wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikipedia This parameter is used to exclude stories based on the specified entities Wikipedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksWikidata This parameter is used to find stories based on the specified entities wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.notEntitiesBodyLinksWikidata This parameter is used to exclude stories based on the specified entities Wikidata URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {module:model/String} opts.sentimentTitlePolarity This parameter is used for finding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentTitlePolarity This parameter is used for excluding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.sentimentBodyPolarity This parameter is used for finding stories whose body sentiment is the specified value. 
     * @param {module:model/String} opts.notSentimentBodyPolarity This parameter is used for excluding stories whose body sentiment is the specified value. 
     * @param {Number} opts.mediaImagesCountMin This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesCountMax This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMin This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMax This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMin This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMax This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMin This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMax This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
     * @param {Array.<module:model/String>} opts.mediaImagesFormat This parameter is used for finding stories whose images format are the specified value. 
     * @param {Array.<module:model/String>} opts.notMediaImagesFormat This parameter is used for excluding stories whose images format are the specified value. 
     * @param {Number} opts.mediaVideosCountMin This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
     * @param {Number} opts.mediaVideosCountMax This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
     * @param {Array.<Number>} opts.authorId This parameter is used for finding stories whose author id is the specified value. 
     * @param {Array.<Number>} opts.notAuthorId This parameter is used for excluding stories whose author id is the specified value. 
     * @param {String} opts.authorName This parameter is used for finding stories whose author full name contains the specified value. 
     * @param {String} opts.notAuthorName This parameter is used for excluding stories whose author full name contains the specified value. 
     * @param {Array.<Number>} opts.sourceId This parameter is used for finding stories whose source id is the specified value. 
     * @param {Array.<Number>} opts.notSourceId This parameter is used for excluding stories whose source id is the specified value. 
     * @param {Array.<String>} opts.sourceName This parameter is used for finding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.notSourceName This parameter is used for excluding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.sourceDomain This parameter is used for finding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.notSourceDomain This parameter is used for excluding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.sourceLocationsCountry This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCountry This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsState This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsState This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsCity This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceLocationsCity This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCountry This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCountry This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesState This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesState This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCity This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.notSourceScopesCity This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.sourceScopesLevel This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.notSourceScopesLevel This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Number} opts.sourceLinksInCountMin This parameter is used for finding stories from sources whose Links in count is greater than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceLinksInCountMax This parameter is used for finding stories from sources whose Links in count is less than or equal to the specified value. You can read more about working with Links in count [here](https://newsapi.aylien.com/docs/working-with-links-in-count). 
     * @param {Number} opts.sourceRankingsAlexaRankMin This parameter is used for finding stories from sources whose Alexa rank is greater than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.sourceRankingsAlexaRankMax This parameter is used for finding stories from sources whose Alexa rank is less than or equal to the specified value. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Array.<String>} opts.sourceRankingsAlexaCountry This parameter is used for finding stories from sources whose Alexa rank is in the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. You can read more about working with Alexa ranks [here](https://newsapi.aylien.com/docs/working-with-alexa-ranks). 
     * @param {Number} opts.socialSharesCountFacebookMin This parameter is used for finding stories whose Facebook social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountFacebookMax This parameter is used for finding stories whose Facebook social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMin This parameter is used for finding stories whose Google+ social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountGooglePlusMax This parameter is used for finding stories whose Google+ social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMin This parameter is used for finding stories whose LinkedIn social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountLinkedinMax This parameter is used for finding stories whose LinkedIn social shares count is less than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMin This parameter is used for finding stories whose Reddit social shares count is greater than or equal to the specified value. 
     * @param {Number} opts.socialSharesCountRedditMax This parameter is used for finding stories whose Reddit social shares count is less than or equal to the specified value. 
     * @param {Array.<String>} opts.clusters This parameter is used for finding stories with belonging to one of clusters in a specific set of clusters You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). 
     * @param {String} opts.aql This parameter is used to supply a query in AYLIEN Query Language. 
     * @param {String} opts.aqlDefaultField This parameter is used to supply an optional default field name used in the AQL query.  (default to 'text')
     * @param {String} opts.query This parameter is used to make an advanced query using $and, $or, $not logical operators and $eq for exact match, $text for a text search and $lt, $gt, $lte, $gte for range queries. value must be a json string. 
     * @param {module:api/DefaultApi~listTrendsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trends}
     */

  }, {
    key: "listTrends",
    value: function listTrends(field, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'field' is set

      if (field === undefined || field === null) {
        throw new Error("Missing the required parameter 'field' when calling listTrends");
      }

      var pathParams = {};
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'translations.en.title': opts['translationsEnTitle'],
        'translations.en.body': opts['translationsEnBody'],
        'translations.en.text': opts['translationsEnText'],
        'links.permalink[]': this.apiClient.buildCollectionParam(opts['linksPermalink'], 'multi'),
        '!links.permalink[]': this.apiClient.buildCollectionParam(opts['notLinksPermalink'], 'multi'),
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.label[]': this.apiClient.buildCollectionParam(opts['categoriesLabel'], 'multi'),
        '!categories.label[]': this.apiClient.buildCollectionParam(opts['notCategoriesLabel'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.id[]': this.apiClient.buildCollectionParam(opts['entitiesTitleId'], 'multi'),
        '!entities.title.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleId'], 'multi'),
        'entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleSurfaceFormsText'], 'multi'),
        '!entities.title.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleSurfaceFormsText'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesTitleStockTicker'], 'multi'),
        '!entities.title.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleStockTicker'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikipedia'], 'multi'),
        '!entities.title.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikipedia'], 'multi'),
        'entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksWikidata'], 'multi'),
        '!entities.title.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksWikidata'], 'multi'),
        'entities.body.id[]': this.apiClient.buildCollectionParam(opts['entitiesBodyId'], 'multi'),
        '!entities.body.id[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyId'], 'multi'),
        'entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodySurfaceFormsText'], 'multi'),
        '!entities.body.surface_forms.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodySurfaceFormsText'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['entitiesBodyStockTicker'], 'multi'),
        '!entities.body.stock_ticker[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyStockTicker'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
        'entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikipedia'], 'multi'),
        '!entities.body.links.wikipedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikipedia'], 'multi'),
        'entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksWikidata'], 'multi'),
        '!entities.body.links.wikidata[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksWikidata'], 'multi'),
        'sentiment.title.polarity': opts['sentimentTitlePolarity'],
        '!sentiment.title.polarity': opts['notSentimentTitlePolarity'],
        'sentiment.body.polarity': opts['sentimentBodyPolarity'],
        '!sentiment.body.polarity': opts['notSentimentBodyPolarity'],
        'media.images.count.min': opts['mediaImagesCountMin'],
        'media.images.count.max': opts['mediaImagesCountMax'],
        'media.images.width.min': opts['mediaImagesWidthMin'],
        'media.images.width.max': opts['mediaImagesWidthMax'],
        'media.images.height.min': opts['mediaImagesHeightMin'],
        'media.images.height.max': opts['mediaImagesHeightMax'],
        'media.images.content_length.min': opts['mediaImagesContentLengthMin'],
        'media.images.content_length.max': opts['mediaImagesContentLengthMax'],
        'media.images.format[]': this.apiClient.buildCollectionParam(opts['mediaImagesFormat'], 'multi'),
        '!media.images.format[]': this.apiClient.buildCollectionParam(opts['notMediaImagesFormat'], 'multi'),
        'media.videos.count.min': opts['mediaVideosCountMin'],
        'media.videos.count.max': opts['mediaVideosCountMax'],
        'author.id[]': this.apiClient.buildCollectionParam(opts['authorId'], 'multi'),
        '!author.id[]': this.apiClient.buildCollectionParam(opts['notAuthorId'], 'multi'),
        'author.name': opts['authorName'],
        '!author.name': opts['notAuthorName'],
        'source.id[]': this.apiClient.buildCollectionParam(opts['sourceId'], 'multi'),
        '!source.id[]': this.apiClient.buildCollectionParam(opts['notSourceId'], 'multi'),
        'source.name[]': this.apiClient.buildCollectionParam(opts['sourceName'], 'multi'),
        '!source.name[]': this.apiClient.buildCollectionParam(opts['notSourceName'], 'multi'),
        'source.domain[]': this.apiClient.buildCollectionParam(opts['sourceDomain'], 'multi'),
        '!source.domain[]': this.apiClient.buildCollectionParam(opts['notSourceDomain'], 'multi'),
        'source.locations.country[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCountry'], 'multi'),
        '!source.locations.country[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCountry'], 'multi'),
        'source.locations.state[]': this.apiClient.buildCollectionParam(opts['sourceLocationsState'], 'multi'),
        '!source.locations.state[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsState'], 'multi'),
        'source.locations.city[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCity'], 'multi'),
        '!source.locations.city[]': this.apiClient.buildCollectionParam(opts['notSourceLocationsCity'], 'multi'),
        'source.scopes.country[]': this.apiClient.buildCollectionParam(opts['sourceScopesCountry'], 'multi'),
        '!source.scopes.country[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCountry'], 'multi'),
        'source.scopes.state[]': this.apiClient.buildCollectionParam(opts['sourceScopesState'], 'multi'),
        '!source.scopes.state[]': this.apiClient.buildCollectionParam(opts['notSourceScopesState'], 'multi'),
        'source.scopes.city[]': this.apiClient.buildCollectionParam(opts['sourceScopesCity'], 'multi'),
        '!source.scopes.city[]': this.apiClient.buildCollectionParam(opts['notSourceScopesCity'], 'multi'),
        'source.scopes.level[]': this.apiClient.buildCollectionParam(opts['sourceScopesLevel'], 'multi'),
        '!source.scopes.level[]': this.apiClient.buildCollectionParam(opts['notSourceScopesLevel'], 'multi'),
        'source.links_in_count.min': opts['sourceLinksInCountMin'],
        'source.links_in_count.max': opts['sourceLinksInCountMax'],
        'source.rankings.alexa.rank.min': opts['sourceRankingsAlexaRankMin'],
        'source.rankings.alexa.rank.max': opts['sourceRankingsAlexaRankMax'],
        'source.rankings.alexa.country[]': this.apiClient.buildCollectionParam(opts['sourceRankingsAlexaCountry'], 'multi'),
        'social_shares_count.facebook.min': opts['socialSharesCountFacebookMin'],
        'social_shares_count.facebook.max': opts['socialSharesCountFacebookMax'],
        'social_shares_count.google_plus.min': opts['socialSharesCountGooglePlusMin'],
        'social_shares_count.google_plus.max': opts['socialSharesCountGooglePlusMax'],
        'social_shares_count.linkedin.min': opts['socialSharesCountLinkedinMin'],
        'social_shares_count.linkedin.max': opts['socialSharesCountLinkedinMax'],
        'social_shares_count.reddit.min': opts['socialSharesCountRedditMin'],
        'social_shares_count.reddit.max': opts['socialSharesCountRedditMax'],
        'clusters[]': this.apiClient.buildCollectionParam(opts['clusters'], 'multi'),
        'aql': opts['aql'],
        'aql_default_field': opts['aqlDefaultField'],
        'query': opts['query'],
        'field': field
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['app_id', 'app_key'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = _Trends["default"];
      return this.apiClient.callApi('/trends', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;