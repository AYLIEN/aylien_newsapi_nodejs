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
    define(['ApiClient', 'model/Story'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Story'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Coverages = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Story);
  }
}(this, function(ApiClient, Story) {
  'use strict';




  /**
   * The Coverages model module.
   * @module model/Coverages
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Coverages</code>.
   * @alias module:model/Coverages
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Coverages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Coverages} obj Optional instance to populate.
   * @return {module:model/Coverages} The populated <code>Coverages</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('story_title')) {
        obj['story_title'] = ApiClient.convertToType(data['story_title'], 'String');
      }
      if (data.hasOwnProperty('story_body')) {
        obj['story_body'] = ApiClient.convertToType(data['story_body'], 'String');
      }
      if (data.hasOwnProperty('story_published_at')) {
        obj['story_published_at'] = ApiClient.convertToType(data['story_published_at'], 'Date');
      }
      if (data.hasOwnProperty('story_language')) {
        obj['story_language'] = ApiClient.convertToType(data['story_language'], 'String');
      }
      if (data.hasOwnProperty('coverages')) {
        obj['coverages'] = ApiClient.convertToType(data['coverages'], [Story]);
      }
    }
    return obj;
  }

  /**
   * The input story title
   * @member {String} story_title
   */
  exports.prototype['story_title'] = undefined;
  /**
   * The input story body
   * @member {String} story_body
   */
  exports.prototype['story_body'] = undefined;
  /**
   * The input story published date
   * @member {Date} story_published_at
   */
  exports.prototype['story_published_at'] = undefined;
  /**
   * The input story language
   * @member {String} story_language
   */
  exports.prototype['story_language'] = undefined;
  /**
   * An array of coverages for the input story
   * @member {Array.<module:model/Story>} coverages
   */
  exports.prototype['coverages'] = undefined;




  return exports;
}));


