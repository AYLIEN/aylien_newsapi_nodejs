/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Errors from '../model/Errors';
import Stories from '../model/Stories';

/**
* Story service.
* @module api/StoryApi
* @version 4.0.0
*/
export default class StoryApi {

    /**
    * Constructs a new StoryApi. 
    * @alias module:api/StoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listStories operation.
     * @callback module:api/StoryApi~listStoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Stories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Stories
     * The stories endpoint is used to return stories based on parameters you set in your query. The News API crawler gathers articles in near real-time and stores information about them, or metadata. Below you can see all of the query parameters, which you can use to narrow down your query. 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.id This parameter is used for finding stories by story id. 
     * @param {Array.<Number>} opts.id2 This parameter is used for excluding stories by story id. 
     * @param {String} opts.title This parameter is used for finding stories whose title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.body This parameter is used for finding stories whose body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.text This parameter is used for finding stories whose title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnTitle This parameter is used for finding stories whose translation title contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnBody This parameter is used for finding stories whose translation body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {String} opts.translationsEnText This parameter is used for finding stories whose translation title or body contains a specific keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). 
     * @param {Array.<module:model/String>} opts.language This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {Array.<module:model/String>} opts.language2 This parameter is used for excluding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. 
     * @param {Array.<String>} opts.linksPermalink This parameter is used to find stories based on their url. 
     * @param {Array.<String>} opts.linksPermalink2 This parameter is used to exclude stories based on their url. 
     * @param {String} opts.publishedAtStart This parameter is used for finding stories whose published at time is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {String} opts.publishedAtEnd This parameter is used for finding stories whose published at time is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). 
     * @param {module:model/String} opts.categoriesTaxonomy This parameter is used for defining the type of the taxonomy for the rest of the categories queries. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Boolean} opts.categoriesConfident This parameter is used for finding stories whose categories are confident. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories).  (default to true)
     * @param {Array.<String>} opts.categoriesId This parameter is used for finding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.categoriesId2 This parameter is used for excluding stories by categories id. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.categoriesLabel This parameter is used for finding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.categoriesLabel2 This parameter is used for excluding stories by categories label. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.categoriesLevel This parameter is used for finding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<Number>} opts.categoriesLevel2 This parameter is used for excluding stories by categories level. You can read more about working with categories [here](https://newsapi.aylien.com/docs/working-with-categories). 
     * @param {Array.<String>} opts.entitiesTitleText This parameter is used to find stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleText2 This parameter is used to exclude stories based on the specified entities `text` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleType This parameter is used to find stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleType2 This parameter is used to exclude stories based on the specified entities `type` in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesTitleLinksDbpedia2 This parameter is used to exclude stories based on the specified entities dbpedia URL in story titles. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyText This parameter is used to find stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyText2 This parameter is used to exclude stories based on the specified entities `text` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyType This parameter is used to find stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyType2 This parameter is used to exclude stories based on the specified entities `type` in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia This parameter is used to find stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {Array.<String>} opts.entitiesBodyLinksDbpedia2 This parameter is used to exclude stories based on the specified entities dbpedia URL in the body of stories. You can read more about working with entities [here](https://newsapi.aylien.com/docs/working-with-entities). 
     * @param {module:model/String} opts.sentimentTitlePolarity This parameter is used for finding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.sentimentTitlePolarity2 This parameter is used for excluding stories whose title sentiment is the specified value. 
     * @param {module:model/String} opts.sentimentBodyPolarity This parameter is used for finding stories whose body sentiment is the specified value. 
     * @param {module:model/String} opts.sentimentBodyPolarity2 This parameter is used for excluding stories whose body sentiment is the specified value. 
     * @param {Number} opts.mediaImagesCountMin This parameter is used for finding stories whose number of images is greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesCountMax This parameter is used for finding stories whose number of images is less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMin This parameter is used for finding stories whose width of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesWidthMax This parameter is used for finding stories whose width of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMin This parameter is used for finding stories whose height of images are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesHeightMax This parameter is used for finding stories whose height of images are less than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMin This parameter is used for finding stories whose images content length are greater than or equal to the specified value. 
     * @param {Number} opts.mediaImagesContentLengthMax This parameter is used for finding stories whose images content length are less than or equal to the specified value. 
     * @param {Array.<module:model/String>} opts.mediaImagesFormat This parameter is used for finding stories whose images format are the specified value. 
     * @param {Array.<module:model/String>} opts.mediaImagesFormat2 This parameter is used for excluding stories whose images format are the specified value. 
     * @param {Number} opts.mediaVideosCountMin This parameter is used for finding stories whose number of videos is greater than or equal to the specified value. 
     * @param {Number} opts.mediaVideosCountMax This parameter is used for finding stories whose number of videos is less than or equal to the specified value. 
     * @param {Array.<Number>} opts.authorId This parameter is used for finding stories whose author id is the specified value. 
     * @param {Array.<Number>} opts.authorId2 This parameter is used for excluding stories whose author id is the specified value. 
     * @param {String} opts.authorName This parameter is used for finding stories whose author full name contains the specified value. 
     * @param {String} opts.authorName2 This parameter is used for excluding stories whose author full name contains the specified value. 
     * @param {Array.<Number>} opts.sourceId This parameter is used for finding stories whose source id is the specified value. 
     * @param {Array.<Number>} opts.sourceId2 This parameter is used for excluding stories whose source id is the specified value. 
     * @param {Array.<String>} opts.sourceName This parameter is used for finding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.sourceName2 This parameter is used for excluding stories whose source name contains the specified value. 
     * @param {Array.<String>} opts.sourceDomain This parameter is used for finding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.sourceDomain2 This parameter is used for excluding stories whose source domain is the specified value. 
     * @param {Array.<String>} opts.sourceLocationsCountry This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsCountry2 This parameter is used for excluding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsState This parameter is used for finding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsState2 This parameter is used for excluding stories whose source state/province is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsCity This parameter is used for finding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceLocationsCity2 This parameter is used for excluding stories whose source city is the specified value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCountry This parameter is used for finding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCountry2 This parameter is used for excluding stories whose source scopes is the specified country value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesState This parameter is used for finding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesState2 This parameter is used for excluding stories whose source scopes is the specified state/province value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCity This parameter is used for finding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<String>} opts.sourceScopesCity2 This parameter is used for excluding stories whose source scopes is the specified city value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.sourceScopesLevel This parameter is used for finding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
     * @param {Array.<module:model/String>} opts.sourceScopesLevel2 This parameter is used for excluding stories whose source scopes is the specified level value. [Here](https://newsapi.aylien.com/docs/working-with-locations) you can find more information about how [to work with locations](https://newsapi.aylien.com/docs/working-with-locations). 
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
     * @param {module:model/String} opts.sortBy This parameter is used for changing the order column of the results. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  (default to 'published_at')
     * @param {module:model/String} opts.sortDirection This parameter is used for changing the order direction of the result. You can read about sorting results [here](https://newsapi.aylien.com/docs/sorting-results).  (default to 'desc')
     * @param {String} opts.cursor This parameter is used for finding a specific page. You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results).  (default to '*')
     * @param {Number} opts.perPage This parameter is used for specifying number of items in each page You can read more about pagination of results [here](https://newsapi.aylien.com/docs/pagination-of-results)  (default to 10)
     * @param {module:api/StoryApi~listStoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Stories}
     */
    listStories(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id[]': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '!id[]': this.apiClient.buildCollectionParam(opts['id2'], 'multi'),
        'title': opts['title'],
        'body': opts['body'],
        'text': opts['text'],
        'translations.en.title': opts['translationsEnTitle'],
        'translations.en.body': opts['translationsEnBody'],
        'translations.en.text': opts['translationsEnText'],
        'language[]': this.apiClient.buildCollectionParam(opts['language'], 'multi'),
        '!language[]': this.apiClient.buildCollectionParam(opts['language2'], 'multi'),
        'links.permalink[]': this.apiClient.buildCollectionParam(opts['linksPermalink'], 'multi'),
        '!links.permalink[]': this.apiClient.buildCollectionParam(opts['linksPermalink2'], 'multi'),
        'published_at.start': opts['publishedAtStart'],
        'published_at.end': opts['publishedAtEnd'],
        'categories.taxonomy': opts['categoriesTaxonomy'],
        'categories.confident': opts['categoriesConfident'],
        'categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId'], 'multi'),
        '!categories.id[]': this.apiClient.buildCollectionParam(opts['categoriesId2'], 'multi'),
        'categories.label[]': this.apiClient.buildCollectionParam(opts['categoriesLabel'], 'multi'),
        '!categories.label[]': this.apiClient.buildCollectionParam(opts['categoriesLabel2'], 'multi'),
        'categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel'], 'multi'),
        '!categories.level[]': this.apiClient.buildCollectionParam(opts['categoriesLevel2'], 'multi'),
        'entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText'], 'multi'),
        '!entities.title.text[]': this.apiClient.buildCollectionParam(opts['entitiesTitleText2'], 'multi'),
        'entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType'], 'multi'),
        '!entities.title.type[]': this.apiClient.buildCollectionParam(opts['entitiesTitleType2'], 'multi'),
        'entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia'], 'multi'),
        '!entities.title.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesTitleLinksDbpedia2'], 'multi'),
        'entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText'], 'multi'),
        '!entities.body.text[]': this.apiClient.buildCollectionParam(opts['entitiesBodyText2'], 'multi'),
        'entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType'], 'multi'),
        '!entities.body.type[]': this.apiClient.buildCollectionParam(opts['entitiesBodyType2'], 'multi'),
        'entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia'], 'multi'),
        '!entities.body.links.dbpedia[]': this.apiClient.buildCollectionParam(opts['entitiesBodyLinksDbpedia2'], 'multi'),
        'sentiment.title.polarity': opts['sentimentTitlePolarity'],
        '!sentiment.title.polarity': opts['sentimentTitlePolarity2'],
        'sentiment.body.polarity': opts['sentimentBodyPolarity'],
        '!sentiment.body.polarity': opts['sentimentBodyPolarity2'],
        'media.images.count.min': opts['mediaImagesCountMin'],
        'media.images.count.max': opts['mediaImagesCountMax'],
        'media.images.width.min': opts['mediaImagesWidthMin'],
        'media.images.width.max': opts['mediaImagesWidthMax'],
        'media.images.height.min': opts['mediaImagesHeightMin'],
        'media.images.height.max': opts['mediaImagesHeightMax'],
        'media.images.content_length.min': opts['mediaImagesContentLengthMin'],
        'media.images.content_length.max': opts['mediaImagesContentLengthMax'],
        'media.images.format[]': this.apiClient.buildCollectionParam(opts['mediaImagesFormat'], 'multi'),
        '!media.images.format[]': this.apiClient.buildCollectionParam(opts['mediaImagesFormat2'], 'multi'),
        'media.videos.count.min': opts['mediaVideosCountMin'],
        'media.videos.count.max': opts['mediaVideosCountMax'],
        'author.id[]': this.apiClient.buildCollectionParam(opts['authorId'], 'multi'),
        '!author.id[]': this.apiClient.buildCollectionParam(opts['authorId2'], 'multi'),
        'author.name': opts['authorName'],
        '!author.name': opts['authorName2'],
        'source.id[]': this.apiClient.buildCollectionParam(opts['sourceId'], 'multi'),
        '!source.id[]': this.apiClient.buildCollectionParam(opts['sourceId2'], 'multi'),
        'source.name[]': this.apiClient.buildCollectionParam(opts['sourceName'], 'multi'),
        '!source.name[]': this.apiClient.buildCollectionParam(opts['sourceName2'], 'multi'),
        'source.domain[]': this.apiClient.buildCollectionParam(opts['sourceDomain'], 'multi'),
        '!source.domain[]': this.apiClient.buildCollectionParam(opts['sourceDomain2'], 'multi'),
        'source.locations.country[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCountry'], 'multi'),
        '!source.locations.country[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCountry2'], 'multi'),
        'source.locations.state[]': this.apiClient.buildCollectionParam(opts['sourceLocationsState'], 'multi'),
        '!source.locations.state[]': this.apiClient.buildCollectionParam(opts['sourceLocationsState2'], 'multi'),
        'source.locations.city[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCity'], 'multi'),
        '!source.locations.city[]': this.apiClient.buildCollectionParam(opts['sourceLocationsCity2'], 'multi'),
        'source.scopes.country[]': this.apiClient.buildCollectionParam(opts['sourceScopesCountry'], 'multi'),
        '!source.scopes.country[]': this.apiClient.buildCollectionParam(opts['sourceScopesCountry2'], 'multi'),
        'source.scopes.state[]': this.apiClient.buildCollectionParam(opts['sourceScopesState'], 'multi'),
        '!source.scopes.state[]': this.apiClient.buildCollectionParam(opts['sourceScopesState2'], 'multi'),
        'source.scopes.city[]': this.apiClient.buildCollectionParam(opts['sourceScopesCity'], 'multi'),
        '!source.scopes.city[]': this.apiClient.buildCollectionParam(opts['sourceScopesCity2'], 'multi'),
        'source.scopes.level[]': this.apiClient.buildCollectionParam(opts['sourceScopesLevel'], 'multi'),
        '!source.scopes.level[]': this.apiClient.buildCollectionParam(opts['sourceScopesLevel2'], 'multi'),
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
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'cursor': opts['cursor'],
        'per_page': opts['perPage']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['app_id', 'app_key'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml'];
      let returnType = Stories;
      return this.apiClient.callApi(
        '/stories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
