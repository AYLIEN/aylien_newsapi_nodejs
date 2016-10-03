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
    define(['ApiClient', 'model/Sentiment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Sentiment'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Sentiments = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Sentiment);
  }
}(this, function(ApiClient, Sentiment) {
  'use strict';




  /**
   * The Sentiments model module.
   * @module model/Sentiments
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Sentiments</code>.
   * @alias module:model/Sentiments
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Sentiments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sentiments} obj Optional instance to populate.
   * @return {module:model/Sentiments} The populated <code>Sentiments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = Sentiment.constructFromObject(data['title']);
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = Sentiment.constructFromObject(data['body']);
      }
    }
    return obj;
  }

  /**
   * The sentiment for the story title
   * @member {module:model/Sentiment} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The sentiment for the story body
   * @member {module:model/Sentiment} body
   */
  exports.prototype['body'] = undefined;



  return exports;
}));


