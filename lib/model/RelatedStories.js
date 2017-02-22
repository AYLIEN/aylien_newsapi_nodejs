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
    define(['ApiClient', 'model/Story', 'model/StoryCluster'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Story'), require('./StoryCluster'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.RelatedStories = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Story, root.AylienNewsApi.StoryCluster);
  }
}(this, function(ApiClient, Story, StoryCluster) {
  'use strict';




  /**
   * The RelatedStories model module.
   * @module model/RelatedStories
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>RelatedStories</code>.
   * @alias module:model/RelatedStories
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>RelatedStories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RelatedStories} obj Optional instance to populate.
   * @return {module:model/RelatedStories} The populated <code>RelatedStories</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('story_title')) {
        obj['storyTitle'] = ApiClient.convertToType(data['story_title'], 'String');
      }
      if (data.hasOwnProperty('story_body')) {
        obj['storyBody'] = ApiClient.convertToType(data['story_body'], 'String');
      }
      if (data.hasOwnProperty('story_language')) {
        obj['storyLanguage'] = ApiClient.convertToType(data['story_language'], 'String');
      }
      if (data.hasOwnProperty('related_stories')) {
        obj['relatedStories'] = ApiClient.convertToType(data['related_stories'], [Story]);
      }
      if (data.hasOwnProperty('clusters')) {
        obj['clusters'] = ApiClient.convertToType(data['clusters'], [StoryCluster]);
      }
    }
    return obj;
  }

  /**
   * The input story title
   * @member {String} storyTitle
   */
  exports.prototype['storyTitle'] = undefined;
  /**
   * The input story body
   * @member {String} storyBody
   */
  exports.prototype['storyBody'] = undefined;
  /**
   * The input story language
   * @member {String} storyLanguage
   */
  exports.prototype['storyLanguage'] = undefined;
  /**
   * An array of related stories for the input story
   * @member {Array.<module:model/Story>} relatedStories
   */
  exports.prototype['relatedStories'] = undefined;
  /**
   * An array of clusters
   * @member {Array.<module:model/StoryCluster>} clusters
   */
  exports.prototype['clusters'] = undefined;



  return exports;
}));


