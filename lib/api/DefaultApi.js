/**
 * Copyright 2017 Aylien, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Autocompletes', 'model/Coverages', 'model/Errors', 'model/Histograms', 'model/RelatedStories', 'model/Stories', 'model/TimeSeriesList', 'model/Trends'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Autocompletes'), require('../model/Coverages'), require('../model/Errors'), require('../model/Histograms'), require('../model/RelatedStories'), require('../model/Stories'), require('../model/TimeSeriesList'), require('../model/Trends'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.DefaultApi = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Autocompletes, root.AylienNewsApi.Coverages, root.AylienNewsApi.Errors, root.AylienNewsApi.Histograms, root.AylienNewsApi.RelatedStories, root.AylienNewsApi.Stories, root.AylienNewsApi.TimeSeriesList, root.AylienNewsApi.Trends);
  }
}(this, function(ApiClient, Autocompletes, Coverages, Errors, Histograms, RelatedStories, Stories, TimeSeriesList, Trends) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 2.0.2
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listAutocompletes operation.
     * @callback module:api/DefaultApi~listAutocompletesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Autocompletes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List autocompletes
     * This endpoint is used for getting list of autocompletes by providing a specific term and type.
     * @param {module:model/String} type This parameter is used for defining the type of autocompletes.
     * @param {String} term This parameter is used for finding autocomplete objects that contain the specified value.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language This parameter is used for autocompletes whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. (default to en)
     * @param {Number} opts.perPage This parameter is used for specifying number of items in each page. (default to 3)
     * @param {module:api/DefaultApi~listAutocompletesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Autocompletes}
     */
    this.listAutocompletes = function(type, term, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw new Error("Missing the required parameter 'type' when calling listAutocompletes");
      }

      // verify the required parameter 'term' is set
      if (term == undefined || term == null) {
        throw new Error("Missing the required parameter 'term' when calling listAutocompletes");
      }


      var pathParams = {
      };
      var queryParams = {
        'type': type,
        'term': term,
        'language': opts['language'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['app_key', 'app_id'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/xml'];
      var returnType = Autocompletes;

      return this.apiClient.callApi(
        '/autocompletes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listCoverages operation.
     * @callback module:api/DefaultApi~listCoveragesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Coverages} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List coverages
     * This endpoint is used for finding story coverages based on the parameters provided. The maximum number of related stories returned is 100.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id.
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id.
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
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
     * @param {Array.<String>} opts.sourceScopesCountry This parameter is used for finding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<String>} opts.notSourceScopesCountry This parameter is used for excluding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<String>} opts.sourceScopesState This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<String>} opts.notSourceScopesState This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<String>} opts.sourceScopesCity This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<String>} opts.notSourceScopesCity This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<module:model/String>} opts.sourceScopesLevel This parameter is used for finding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<module:model/String>} opts.notSourceScopesLevel This parameter is used for excluding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
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
     * @param {Boolean} opts.cluster This parameter enables clustering for the returned stories. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). (default to false)
     * @param {module:model/String} opts.clusterAlgorithm This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). (default to lingo)
     * @param {Array.<module:model/String>} opts._return This parameter is used for specifying return fields.
     * @param {Number} opts.storyId A story id
     * @param {String} opts.storyUrl An article or webpage
     * @param {String} opts.storyTitle Title of the article
     * @param {String} opts.storyBody Body of the article
     * @param {Date} opts.storyPublishedAt Publish date of the article. If you use a url or title and body of an article for getting coverages, this parameter is required. The format used is a restricted form of the canonical representation of dateTime in the [XML Schema specification (ISO 8601)](https://www.w3.org/TR/xmlschema-2/#dateTime).
     * @param {module:model/String} opts.storyLanguage This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. (default to auto)
     * @param {Number} opts.perPage This parameter is used for specifying number of items in each page. (default to 3)
     * @param {module:api/DefaultApi~listCoveragesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Coverages}
     */
    this.listCoverages = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
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
        'cluster': opts['cluster'],
        'cluster.algorithm': opts['clusterAlgorithm'],
        'return[]': this.apiClient.buildCollectionParam(opts['_return'], 'multi'),
        'story_id': opts['storyId'],
        'story_url': opts['storyUrl'],
        'story_title': opts['storyTitle'],
        'story_body': opts['storyBody'],
        'story_published_at': opts['storyPublishedAt'],
        'story_language': opts['storyLanguage'],
        'per_page': opts['perPage']
      };

      var authNames = ['app_key', 'app_id'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/xml'];
      var returnType = Coverages;

      return this.apiClient.callApi(
        '/coverages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * This endpoint is used for getting histograms based on the &#x60;field&#x60; parameter passed to the API.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id.
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id.
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
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
     * @param {Number} opts.intervalStart This parameter is used for setting the start data point of histogram intervals.
     * @param {Number} opts.intervalEnd This parameter is used for setting the end data point of histogram intervals.
     * @param {Number} opts.intervalWidth This parameter is used for setting the width of histogram intervals.
     * @param {module:model/String} opts.field This parameter is used for specifying the y-axis variable for the histogram. (default to social_shares_count)
     * @param {module:api/DefaultApi~listHistogramsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Histograms}
     */
    this.listHistograms = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
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
        'interval.start': opts['intervalStart'],
        'interval.end': opts['intervalEnd'],
        'interval.width': opts['intervalWidth'],
        'field': opts['field']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['app_key', 'app_id'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/xml'];
      var returnType = Histograms;

      return this.apiClient.callApi(
        '/histograms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listRelatedStories operation.
     * @callback module:api/DefaultApi~listRelatedStoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedStories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List related stories
     * This endpoint is used for finding related stories based on the parameters provided. The maximum number of related stories returned is 100.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id.
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id.
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
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
     * @param {Array.<String>} opts.sourceScopesCountry This parameter is used for finding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<String>} opts.notSourceScopesCountry This parameter is used for excluding stories whose source scopes  is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<String>} opts.sourceScopesState This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<String>} opts.notSourceScopesState This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<String>} opts.sourceScopesCity This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<String>} opts.notSourceScopesCity This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<module:model/String>} opts.sourceScopesLevel This parameter is used for finding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
     * @param {Array.<module:model/String>} opts.notSourceScopesLevel This parameter is used for excluding stories whose source scopes  is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations).
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
     * @param {Boolean} opts.cluster This parameter enables clustering for the returned stories. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). (default to false)
     * @param {module:model/String} opts.clusterAlgorithm This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). (default to lingo)
     * @param {Array.<module:model/String>} opts._return This parameter is used for specifying return fields.
     * @param {Number} opts.storyId A story id
     * @param {String} opts.storyUrl An article or webpage
     * @param {String} opts.storyTitle Title of the article
     * @param {String} opts.storyBody Body of the article
     * @param {module:model/String} opts.boostBy This parameter is used for boosting the result by the specified value.
     * @param {module:model/String} opts.storyLanguage This parameter is used for setting the language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. (default to auto)
     * @param {Number} opts.perPage This parameter is used for specifying number of items in each page. (default to 3)
     * @param {module:api/DefaultApi~listRelatedStoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelatedStories}
     */
    this.listRelatedStories = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
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
        'cluster': opts['cluster'],
        'cluster.algorithm': opts['clusterAlgorithm'],
        'return[]': this.apiClient.buildCollectionParam(opts['_return'], 'multi'),
        'story_id': opts['storyId'],
        'story_url': opts['storyUrl'],
        'story_title': opts['storyTitle'],
        'story_body': opts['storyBody'],
        'boost_by': opts['boostBy'],
        'story_language': opts['storyLanguage'],
        'per_page': opts['perPage']
      };

      var authNames = ['app_key', 'app_id'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/xml'];
      var returnType = RelatedStories;

      return this.apiClient.callApi(
        '/related_stories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * This endpoint is used for getting a list of stories.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id.
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id.
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
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
     * @param {Boolean} opts.cluster This parameter enables clustering for the returned stories. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). (default to false)
     * @param {module:model/String} opts.clusterAlgorithm This parameter is used for specifying the clustering algorithm you wish to use. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. You can read more about working with clustering [here](https://newsapi.aylien.com/docs/working-with-clustering). (default to lingo)
     * @param {Array.<module:model/String>} opts._return This parameter is used for specifying return fields.
     * @param {module:model/String} opts.sortBy This parameter is used for changing the order column of the results. (default to published_at)
     * @param {module:model/String} opts.sortDirection This parameter is used for changing the order direction of the result. (default to desc)
     * @param {String} opts.cursor This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results). (default to *)
     * @param {Number} opts.perPage This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results) (default to 10)
     * @param {module:api/DefaultApi~listStoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Stories}
     */
    this.listStories = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
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
        'cluster': opts['cluster'],
        'cluster.algorithm': opts['clusterAlgorithm'],
        'return[]': this.apiClient.buildCollectionParam(opts['_return'], 'multi'),
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'cursor': opts['cursor'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['app_key', 'app_id'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/xml'];
      var returnType = Stories;

      return this.apiClient.callApi(
        '/stories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * This endpoint is used for getting time series by stories.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id.
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id.
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
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
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). (default to NOW-7DAYS/DAY)
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). (default to NOW/DAY)
     * @param {String} opts.period The size of each date range is expressed as an interval to be added to the lower bound. It supports Date Math Syntax. Valid options are &#x60;+&#x60; following an integer number greater than 0 and one of the Date Math keywords. e.g. &#x60;+1DAY&#x60;, &#x60;+2MINUTES&#x60; and &#x60;+1MONTH&#x60;. Here are [Supported keywords](https://newsapi.aylien.com/docs/working-with-dates#date-math). (default to +1DAY)
     * @param {module:api/DefaultApi~listTimeSeriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeSeriesList}
     */
    this.listTimeSeries = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
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
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'period': opts['period']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['app_key', 'app_id'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/xml'];
      var returnType = TimeSeriesList;

      return this.apiClient.callApi(
        '/time_series', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * This endpoint is used for finding trends based on stories.
     * @param {module:model/String} field This parameter is used to specify the trend field.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id.
     * @param {Array.<Number>} opts.notId This parameter is used for excluding stories by story id.
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {Array.<module:model/String>} opts.notLanguage This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.notCategoriesId This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<Number>} opts.notCategoriesLevel This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesTitleLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyText This parameter is used to exclude stories based on the specified entities &#x60;text&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyType This parameter is used to exclude stories based on the specified entities &#x60;type&#x60; in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
     * @param {Array.<String>} opts.notEntitiesBodyLinksDbpedia This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities).
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
     * @param {module:api/DefaultApi~listTrendsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trends}
     */
    this.listTrends = function(field, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'field' is set
      if (field == undefined || field == null) {
        throw new Error("Missing the required parameter 'field' when calling listTrends");
      }


      var pathParams = {
      };
      var queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['notId'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['notLanguage'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['notCategoriesId'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['notCategoriesLevel'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleText'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleType'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesTitleLinksDbpedia'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyText'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyType'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['notEntitiesBodyLinksDbpedia'], 'multi'),
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
        'field': field
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['app_key', 'app_id'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/xml'];
      var returnType = Trends;

      return this.apiClient.callApi(
        '/trends', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
