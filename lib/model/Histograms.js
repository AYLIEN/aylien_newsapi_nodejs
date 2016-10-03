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
    define(['ApiClient', 'model/HistogramInterval'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HistogramInterval'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Histograms = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.HistogramInterval);
  }
}(this, function(ApiClient, HistogramInterval) {
  'use strict';




  /**
   * The Histograms model module.
   * @module model/Histograms
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Histograms</code>.
   * @alias module:model/Histograms
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Histograms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Histograms} obj Optional instance to populate.
   * @return {module:model/Histograms} The populated <code>Histograms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('intervals')) {
        obj['intervals'] = ApiClient.convertToType(data['intervals'], [HistogramInterval]);
      }
      if (data.hasOwnProperty('interval.start')) {
        obj['intervalStart'] = ApiClient.convertToType(data['interval.start'], 'Number');
      }
      if (data.hasOwnProperty('interval.end')) {
        obj['intervalEnd'] = ApiClient.convertToType(data['interval.end'], 'Number');
      }
      if (data.hasOwnProperty('interval.width')) {
        obj['intervalWidth'] = ApiClient.convertToType(data['interval.width'], 'Number');
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
    }
    return obj;
  }

  /**
   * The intervals of the histograms
   * @member {Array.<module:model/HistogramInterval>} intervals
   */
  exports.prototype['intervals'] = undefined;
  /**
   * The start interval of the histogram
   * @member {Number} intervalStart
   */
  exports.prototype['intervalStart'] = undefined;
  /**
   * The end interval of the histogram
   * @member {Number} intervalEnd
   */
  exports.prototype['intervalEnd'] = undefined;
  /**
   * The width of the histogram
   * @member {Number} intervalWidth
   */
  exports.prototype['intervalWidth'] = undefined;
  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;



  return exports;
}));


