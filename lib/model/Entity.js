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
    define(['ApiClient', 'model/EntityLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Entity = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.EntityLinks);
  }
}(this, function(ApiClient, EntityLinks) {
  'use strict';




  /**
   * The Entity model module.
   * @module model/Entity
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Entity</code>.
   * @alias module:model/Entity
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Entity} obj Optional instance to populate.
   * @return {module:model/Entity} The populated <code>Entity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
      if (data.hasOwnProperty('types')) {
        obj['types'] = ApiClient.convertToType(data['types'], ['String']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = EntityLinks.constructFromObject(data['links']);
      }
      if (data.hasOwnProperty('indices')) {
        obj['indices'] = ApiClient.convertToType(data['indices'], [['Number']]);
      }
    }
    return obj;
  }

  /**
   * The entity text
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * The entity score
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;
  /**
   * An array of the dbpedia types
   * @member {Array.<String>} types
   */
  exports.prototype['types'] = undefined;
  /**
   * Related links to the entity
   * @member {module:model/EntityLinks} links
   */
  exports.prototype['links'] = undefined;
  /**
   * The indices of the entity text
   * @member {Array.<Array.<Number>>} indices
   */
  exports.prototype['indices'] = undefined;



  return exports;
}));


