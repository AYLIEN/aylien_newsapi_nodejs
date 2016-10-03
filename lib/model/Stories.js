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
    define(['ApiClient', 'model/Story', 'model/StoryCluster'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Story'), require('./StoryCluster'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Stories = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Story, root.AylienNewsApi.StoryCluster);
  }
}(this, function(ApiClient, Story, StoryCluster) {
  'use strict';




  /**
   * The Stories model module.
   * @module model/Stories
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Stories</code>.
   * @alias module:model/Stories
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Stories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Stories} obj Optional instance to populate.
   * @return {module:model/Stories} The populated <code>Stories</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stories')) {
        obj['stories'] = ApiClient.convertToType(data['stories'], [Story]);
      }
      if (data.hasOwnProperty('clusters')) {
        obj['clusters'] = ApiClient.convertToType(data['clusters'], [StoryCluster]);
      }
      if (data.hasOwnProperty('next_page_cursor')) {
        obj['nextPageCursor'] = ApiClient.convertToType(data['next_page_cursor'], 'String');
      }
    }
    return obj;
  }

  /**
   * An array of stories
   * @member {Array.<module:model/Story>} stories
   */
  exports.prototype['stories'] = undefined;
  /**
   * An array of clusters
   * @member {Array.<module:model/StoryCluster>} clusters
   */
  exports.prototype['clusters'] = undefined;
  /**
   * The next page cursor
   * @member {String} nextPageCursor
   */
  exports.prototype['nextPageCursor'] = undefined;



  return exports;
}));


