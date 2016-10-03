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
    define(['ApiClient', 'model/Entity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Entity'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Entities = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Entity);
  }
}(this, function(ApiClient, Entity) {
  'use strict';




  /**
   * The Entities model module.
   * @module model/Entities
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Entities</code>.
   * @alias module:model/Entities
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Entities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Entities} obj Optional instance to populate.
   * @return {module:model/Entities} The populated <code>Entities</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], [Entity]);
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], [Entity]);
      }
    }
    return obj;
  }

  /**
   * An array of extracted entities from the story title
   * @member {Array.<module:model/Entity>} title
   */
  exports.prototype['title'] = undefined;
  /**
   * An array of extracted entities from the story body
   * @member {Array.<module:model/Entity>} body
   */
  exports.prototype['body'] = undefined;



  return exports;
}));


