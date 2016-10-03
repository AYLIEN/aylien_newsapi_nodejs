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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Author', 'model/Category', 'model/Entities', 'model/Media', 'model/Sentiments', 'model/ShareCounts', 'model/Source', 'model/StoryLinks', 'model/Summary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Author'), require('./Category'), require('./Entities'), require('./Media'), require('./Sentiments'), require('./ShareCounts'), require('./Source'), require('./StoryLinks'), require('./Summary'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Story = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Author, root.AylienNewsApi.Category, root.AylienNewsApi.Entities, root.AylienNewsApi.Media, root.AylienNewsApi.Sentiments, root.AylienNewsApi.ShareCounts, root.AylienNewsApi.Source, root.AylienNewsApi.StoryLinks, root.AylienNewsApi.Summary);
  }
}(this, function(ApiClient, Author, Category, Entities, Media, Sentiments, ShareCounts, Source, StoryLinks, Summary) {
  'use strict';




  /**
   * The Story model module.
   * @module model/Story
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Story</code>.
   * @alias module:model/Story
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>Story</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Story} obj Optional instance to populate.
   * @return {module:model/Story} The populated <code>Story</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = Summary.constructFromObject(data['summary']);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = Source.constructFromObject(data['source']);
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = Author.constructFromObject(data['author']);
      }
      if (data.hasOwnProperty('entities')) {
        obj['entities'] = Entities.constructFromObject(data['entities']);
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
      }
      if (data.hasOwnProperty('hashtags')) {
        obj['hashtags'] = ApiClient.convertToType(data['hashtags'], ['String']);
      }
      if (data.hasOwnProperty('characters_count')) {
        obj['charactersCount'] = ApiClient.convertToType(data['characters_count'], 'Number');
      }
      if (data.hasOwnProperty('words_count')) {
        obj['wordsCount'] = ApiClient.convertToType(data['words_count'], 'Number');
      }
      if (data.hasOwnProperty('sentences_count')) {
        obj['sentencesCount'] = ApiClient.convertToType(data['sentences_count'], 'Number');
      }
      if (data.hasOwnProperty('paragraphs_count')) {
        obj['paragraphsCount'] = ApiClient.convertToType(data['paragraphs_count'], 'Number');
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [Category]);
      }
      if (data.hasOwnProperty('social_shares_count')) {
        obj['socialSharesCount'] = ShareCounts.constructFromObject(data['social_shares_count']);
      }
      if (data.hasOwnProperty('media')) {
        obj['media'] = ApiClient.convertToType(data['media'], [Media]);
      }
      if (data.hasOwnProperty('sentiment')) {
        obj['sentiment'] = Sentiments.constructFromObject(data['sentiment']);
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('published_at')) {
        obj['publishedAt'] = ApiClient.convertToType(data['published_at'], 'Date');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = StoryLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * ID of the story which is a unique identification
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Title of the story
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Body of the story
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * The suggested story summary
   * @member {module:model/Summary} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * The story source
   * @member {module:model/Source} source
   */
  exports.prototype['source'] = undefined;
  /**
   * The story author
   * @member {module:model/Author} author
   */
  exports.prototype['author'] = undefined;
  /**
   * Extracted entities from the story title or body
   * @member {module:model/Entities} entities
   */
  exports.prototype['entities'] = undefined;
  /**
   * Extracted keywords mentioned in the story title or body
   * @member {Array.<String>} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * An array of suggested Story hashtags
   * @member {Array.<String>} hashtags
   */
  exports.prototype['hashtags'] = undefined;
  /**
   * Character count of the story body
   * @member {Number} charactersCount
   */
  exports.prototype['charactersCount'] = undefined;
  /**
   * Word count of the story body
   * @member {Number} wordsCount
   */
  exports.prototype['wordsCount'] = undefined;
  /**
   * Sentence count of the story body
   * @member {Number} sentencesCount
   */
  exports.prototype['sentencesCount'] = undefined;
  /**
   * Paragraph count of the story body
   * @member {Number} paragraphsCount
   */
  exports.prototype['paragraphsCount'] = undefined;
  /**
   * Suggested categories for the story
   * @member {Array.<module:model/Category>} categories
   */
  exports.prototype['categories'] = undefined;
  /**
   * Social shares count for the story
   * @member {module:model/ShareCounts} socialSharesCount
   */
  exports.prototype['socialSharesCount'] = undefined;
  /**
   * An array of extracted media such as images and videos
   * @member {Array.<module:model/Media>} media
   */
  exports.prototype['media'] = undefined;
  /**
   * Suggested sentiments for the story title or body
   * @member {module:model/Sentiments} sentiment
   */
  exports.prototype['sentiment'] = undefined;
  /**
   * Language of the story
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * Published date of the story
   * @member {Date} publishedAt
   */
  exports.prototype['publishedAt'] = undefined;
  /**
   * Links which is related to the story
   * @member {module:model/StoryLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


