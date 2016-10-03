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
    define(['ApiClient', 'model/TimeSeries'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TimeSeries'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.TimeSeriesList = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.TimeSeries);
  }
}(this, function(ApiClient, TimeSeries) {
  'use strict';




  /**
   * The TimeSeriesList model module.
   * @module model/TimeSeriesList
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>TimeSeriesList</code>.
   * @alias module:model/TimeSeriesList
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>TimeSeriesList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeSeriesList} obj Optional instance to populate.
   * @return {module:model/TimeSeriesList} The populated <code>TimeSeriesList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('time_series')) {
        obj['timeSeries'] = ApiClient.convertToType(data['time_series'], [TimeSeries]);
      }
      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'String');
      }
      if (data.hasOwnProperty('published_at.start')) {
        obj['publishedAtStart'] = ApiClient.convertToType(data['published_at.start'], 'Date');
      }
      if (data.hasOwnProperty('published_at.end')) {
        obj['publishedAtEnd'] = ApiClient.convertToType(data['published_at.end'], 'Date');
      }
    }
    return obj;
  }

  /**
   * An array of time series
   * @member {Array.<module:model/TimeSeries>} timeSeries
   */
  exports.prototype['timeSeries'] = undefined;
  /**
   * The size of each date range expressed as an interval to be added to the lower bound.
   * @member {String} period
   */
  exports.prototype['period'] = undefined;
  /**
   * The start published date of the time series
   * @member {Date} publishedAtStart
   */
  exports.prototype['publishedAtStart'] = undefined;
  /**
   * The end published date of the time series
   * @member {Date} publishedAtEnd
   */
  exports.prototype['publishedAtEnd'] = undefined;



  return exports;
}));


