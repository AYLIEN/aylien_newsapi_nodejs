/**
 * Copyright 2017 Aylien, Inc. All Rights Reserved.
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
    root.AylienNewsApi.Sentiment = factory(root.AylienNewsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Sentiment model module.
   * @module model/Sentiment
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>Sentiment</code>.
   * @alias module:model/Sentiment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Sentiment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sentiment} obj Optional instance to populate.
   * @return {module:model/Sentiment} The populated <code>Sentiment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('polarity')) {
        obj['polarity'] = ApiClient.convertToType(data['polarity'], 'String');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Polarity of the sentiment
   * @member {module:model/Sentiment.PolarityEnum} polarity
   */
  exports.prototype['polarity'] = undefined;
  /**
   * Polarity score of the sentiment
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;


  /**
   * Allowed values for the <code>polarity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PolarityEnum = {
    /**
     * value: "positive"
     * @const
     */
    "positive": "positive",
    /**
     * value: "neutral"
     * @const
     */
    "neutral": "neutral",
    /**
     * value: "negative"
     * @const
     */
    "negative": "negative"  };


  return exports;
}));


