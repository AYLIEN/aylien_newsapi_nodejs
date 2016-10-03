/**
 * Copyright 2016 Aylien, Inc. All Rights Reserved.
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Author', 'model/Autocomplete', 'model/Autocompletes', 'model/Category', 'model/CategoryLinks', 'model/Coverages', 'model/Entities', 'model/Entity', 'model/EntityLinks', 'model/Error', 'model/ErrorLinks', 'model/Errors', 'model/HistogramInterval', 'model/Histograms', 'model/Location', 'model/Media', 'model/Rank', 'model/Rankings', 'model/RelatedStories', 'model/Scope', 'model/Sentiment', 'model/Sentiments', 'model/ShareCount', 'model/ShareCounts', 'model/Source', 'model/Stories', 'model/Story', 'model/StoryCluster', 'model/StoryLinks', 'model/Summary', 'model/TimeSeries', 'model/TimeSeriesList', 'model/Trend', 'model/Trends', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Author'), require('./model/Autocomplete'), require('./model/Autocompletes'), require('./model/Category'), require('./model/CategoryLinks'), require('./model/Coverages'), require('./model/Entities'), require('./model/Entity'), require('./model/EntityLinks'), require('./model/Error'), require('./model/ErrorLinks'), require('./model/Errors'), require('./model/HistogramInterval'), require('./model/Histograms'), require('./model/Location'), require('./model/Media'), require('./model/Rank'), require('./model/Rankings'), require('./model/RelatedStories'), require('./model/Scope'), require('./model/Sentiment'), require('./model/Sentiments'), require('./model/ShareCount'), require('./model/ShareCounts'), require('./model/Source'), require('./model/Stories'), require('./model/Story'), require('./model/StoryCluster'), require('./model/StoryLinks'), require('./model/Summary'), require('./model/TimeSeries'), require('./model/TimeSeriesList'), require('./model/Trend'), require('./model/Trends'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Author, Autocomplete, Autocompletes, Category, CategoryLinks, Coverages, Entities, Entity, EntityLinks, Error, ErrorLinks, Errors, HistogramInterval, Histograms, Location, Media, Rank, Rankings, RelatedStories, Scope, Sentiment, Sentiments, ShareCount, ShareCounts, Source, Stories, Story, StoryCluster, StoryLinks, Summary, TimeSeries, TimeSeriesList, Trend, Trends, DefaultApi) {
  'use strict';

  /**
   * AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AylienNewsApi = require('index'); // See note below*.
   * var xxxSvc = new AylienNewsApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AylienNewsApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AylienNewsApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AylienNewsApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.2.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Author model constructor.
     * @property {module:model/Author}
     */
    Author: Author,
    /**
     * The Autocomplete model constructor.
     * @property {module:model/Autocomplete}
     */
    Autocomplete: Autocomplete,
    /**
     * The Autocompletes model constructor.
     * @property {module:model/Autocompletes}
     */
    Autocompletes: Autocompletes,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The CategoryLinks model constructor.
     * @property {module:model/CategoryLinks}
     */
    CategoryLinks: CategoryLinks,
    /**
     * The Coverages model constructor.
     * @property {module:model/Coverages}
     */
    Coverages: Coverages,
    /**
     * The Entities model constructor.
     * @property {module:model/Entities}
     */
    Entities: Entities,
    /**
     * The Entity model constructor.
     * @property {module:model/Entity}
     */
    Entity: Entity,
    /**
     * The EntityLinks model constructor.
     * @property {module:model/EntityLinks}
     */
    EntityLinks: EntityLinks,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorLinks model constructor.
     * @property {module:model/ErrorLinks}
     */
    ErrorLinks: ErrorLinks,
    /**
     * The Errors model constructor.
     * @property {module:model/Errors}
     */
    Errors: Errors,
    /**
     * The HistogramInterval model constructor.
     * @property {module:model/HistogramInterval}
     */
    HistogramInterval: HistogramInterval,
    /**
     * The Histograms model constructor.
     * @property {module:model/Histograms}
     */
    Histograms: Histograms,
    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location: Location,
    /**
     * The Media model constructor.
     * @property {module:model/Media}
     */
    Media: Media,
    /**
     * The Rank model constructor.
     * @property {module:model/Rank}
     */
    Rank: Rank,
    /**
     * The Rankings model constructor.
     * @property {module:model/Rankings}
     */
    Rankings: Rankings,
    /**
     * The RelatedStories model constructor.
     * @property {module:model/RelatedStories}
     */
    RelatedStories: RelatedStories,
    /**
     * The Scope model constructor.
     * @property {module:model/Scope}
     */
    Scope: Scope,
    /**
     * The Sentiment model constructor.
     * @property {module:model/Sentiment}
     */
    Sentiment: Sentiment,
    /**
     * The Sentiments model constructor.
     * @property {module:model/Sentiments}
     */
    Sentiments: Sentiments,
    /**
     * The ShareCount model constructor.
     * @property {module:model/ShareCount}
     */
    ShareCount: ShareCount,
    /**
     * The ShareCounts model constructor.
     * @property {module:model/ShareCounts}
     */
    ShareCounts: ShareCounts,
    /**
     * The Source model constructor.
     * @property {module:model/Source}
     */
    Source: Source,
    /**
     * The Stories model constructor.
     * @property {module:model/Stories}
     */
    Stories: Stories,
    /**
     * The Story model constructor.
     * @property {module:model/Story}
     */
    Story: Story,
    /**
     * The StoryCluster model constructor.
     * @property {module:model/StoryCluster}
     */
    StoryCluster: StoryCluster,
    /**
     * The StoryLinks model constructor.
     * @property {module:model/StoryLinks}
     */
    StoryLinks: StoryLinks,
    /**
     * The Summary model constructor.
     * @property {module:model/Summary}
     */
    Summary: Summary,
    /**
     * The TimeSeries model constructor.
     * @property {module:model/TimeSeries}
     */
    TimeSeries: TimeSeries,
    /**
     * The TimeSeriesList model constructor.
     * @property {module:model/TimeSeriesList}
     */
    TimeSeriesList: TimeSeriesList,
    /**
     * The Trend model constructor.
     * @property {module:model/Trend}
     */
    Trend: Trend,
    /**
     * The Trends model constructor.
     * @property {module:model/Trends}
     */
    Trends: Trends,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
