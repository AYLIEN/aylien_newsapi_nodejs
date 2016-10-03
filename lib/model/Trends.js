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
    define(['ApiClient', 'model/Trend'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Trend'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Trends = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Trend);
  }
}(this, function(ApiClient, Trend) {
  'use strict';




  /**
   * The Trends model module.
   * @module model/Trends
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Trends</code>.
   * @alias module:model/Trends
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Trends</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Trends} obj Optional instance to populate.
   * @return {module:model/Trends} The populated <code>Trends</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('trends')) {
        obj['trends'] = ApiClient.convertToType(data['trends'], [Trend]);
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
    }
    return obj;
  }

  /**
   * An array of trends
   * @member {Array.<module:model/Trend>} trends
   */
  exports.prototype['trends'] = undefined;
  /**
   * The field of trends
   * @member {String} field
   */
  exports.prototype['field'] = undefined;



  return exports;
}));


