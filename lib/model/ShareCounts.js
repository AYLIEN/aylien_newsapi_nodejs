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
    define(['ApiClient', 'model/ShareCount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ShareCount'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.ShareCounts = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.ShareCount);
  }
}(this, function(ApiClient, ShareCount) {
  'use strict';




  /**
   * The ShareCounts model module.
   * @module model/ShareCounts
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ShareCounts</code>.
   * @alias module:model/ShareCounts
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ShareCounts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShareCounts} obj Optional instance to populate.
   * @return {module:model/ShareCounts} The populated <code>ShareCounts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('facebook')) {
        obj['facebook'] = ApiClient.convertToType(data['facebook'], [ShareCount]);
      }
      if (data.hasOwnProperty('google_plus')) {
        obj['googlePlus'] = ApiClient.convertToType(data['google_plus'], [ShareCount]);
      }
      if (data.hasOwnProperty('linkedin')) {
        obj['linkedin'] = ApiClient.convertToType(data['linkedin'], [ShareCount]);
      }
      if (data.hasOwnProperty('reddit')) {
        obj['reddit'] = ApiClient.convertToType(data['reddit'], [ShareCount]);
      }
    }
    return obj;
  }

  /**
   * Facebook shares count
   * @member {Array.<module:model/ShareCount>} facebook
   */
  exports.prototype['facebook'] = undefined;
  /**
   * Google Plus shares count
   * @member {Array.<module:model/ShareCount>} googlePlus
   */
  exports.prototype['googlePlus'] = undefined;
  /**
   * LinkedIn shares count
   * @member {Array.<module:model/ShareCount>} linkedin
   */
  exports.prototype['linkedin'] = undefined;
  /**
   * Reddit shares count
   * @member {Array.<module:model/ShareCount>} reddit
   */
  exports.prototype['reddit'] = undefined;



  return exports;
}));


