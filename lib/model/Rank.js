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
    root.AylienNewsApi.Rank = factory(root.AylienNewsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Rank model module.
   * @module model/Rank
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Rank</code>.
   * @alias module:model/Rank
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Rank</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rank} obj Optional instance to populate.
   * @return {module:model/Rank} The populated <code>Rank</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rank')) {
        obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('fetched_at')) {
        obj['fetchedAt'] = ApiClient.convertToType(data['fetched_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The rank
   * @member {Number} rank
   */
  exports.prototype['rank'] = undefined;
  /**
   * The country code which the rank is in it
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * The fetched date of the rank
   * @member {Date} fetchedAt
   */
  exports.prototype['fetchedAt'] = undefined;



  return exports;
}));


