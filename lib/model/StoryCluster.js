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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.StoryCluster = factory(root.AylienNewsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StoryCluster model module.
   * @module model/StoryCluster
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>StoryCluster</code>.
   * @alias module:model/StoryCluster
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>StoryCluster</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoryCluster} obj Optional instance to populate.
   * @return {module:model/StoryCluster} The populated <code>StoryCluster</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('phrases')) {
        obj['phrases'] = ApiClient.convertToType(data['phrases'], ['String']);
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('stories')) {
        obj['stories'] = ApiClient.convertToType(data['stories'], ['Number']);
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
    }
    return obj;
  }

  /**
   * A unique identification for the cluster
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Suggested labels for the cluster
   * @member {Array.<String>} phrases
   */
  exports.prototype['phrases'] = undefined;
  /**
   * Size of the cluster
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Story ids which are in the cluster
   * @member {Array.<Number>} stories
   */
  exports.prototype['stories'] = undefined;
  /**
   * The cluster score
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;



  return exports;
}));


