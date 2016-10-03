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
    root.AylienNewsApi.TimeSeries = factory(root.AylienNewsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TimeSeries model module.
   * @module model/TimeSeries
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>TimeSeries</code>.
   * @alias module:model/TimeSeries
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TimeSeries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeSeries} obj Optional instance to populate.
   * @return {module:model/TimeSeries} The populated <code>TimeSeries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('published_at')) {
        obj['publishedAt'] = ApiClient.convertToType(data['published_at'], 'Date');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The published date of the time series bin
   * @member {Date} publishedAt
   */
  exports.prototype['publishedAt'] = undefined;
  /**
   * The count of time series bin
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;



  return exports;
}));


