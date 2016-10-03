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
    root.AylienNewsApi.ShareCount = factory(root.AylienNewsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ShareCount model module.
   * @module model/ShareCount
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ShareCount</code>.
   * @alias module:model/ShareCount
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ShareCount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShareCount} obj Optional instance to populate.
   * @return {module:model/ShareCount} The populated <code>ShareCount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('fetched_at')) {
        obj['fetchedAt'] = ApiClient.convertToType(data['fetched_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The number of shares
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The fetched date of the shares
   * @member {Date} fetchedAt
   */
  exports.prototype['fetchedAt'] = undefined;



  return exports;
}));


