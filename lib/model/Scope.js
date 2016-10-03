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
    root.AylienNewsApi.Scope = factory(root.AylienNewsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Scope model module.
   * @module model/Scope
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Scope</code>.
   * @alias module:model/Scope
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Scope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Scope} obj Optional instance to populate.
   * @return {module:model/Scope} The populated <code>Scope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'String');
      }
    }
    return obj;
  }

  /**
   * The source scope by country code. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * The scope by state
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The scope by city
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The scope by level
   * @member {module:model/Scope.LevelEnum} level
   */
  exports.prototype['level'] = undefined;


  /**
   * Allowed values for the <code>level</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LevelEnum = {
    /**
     * value: "international"
     * @const
     */
    "international": "international",
    /**
     * value: "national"
     * @const
     */
    "national": "national",
    /**
     * value: "local"
     * @const
     */
    "local": "local"  };


  return exports;
}));


