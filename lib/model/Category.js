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
    define(['ApiClient', 'model/CategoryLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CategoryLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Category = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.CategoryLinks);
  }
}(this, function(ApiClient, CategoryLinks) {
  'use strict';




  /**
   * The Category model module.
   * @module model/Category
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Category</code>.
   * @alias module:model/Category
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Category} obj Optional instance to populate.
   * @return {module:model/Category} The populated <code>Category</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('taxonomy')) {
        obj['taxonomy'] = ApiClient.convertToType(data['taxonomy'], 'String');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'Number');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
      if (data.hasOwnProperty('confident')) {
        obj['confident'] = ApiClient.convertToType(data['confident'], 'Boolean');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = CategoryLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * The ID of the category
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The taxonomy of the category
   * @member {module:model/Category.TaxonomyEnum} taxonomy
   */
  exports.prototype['taxonomy'] = undefined;
  /**
   * The level of the category
   * @member {Number} level
   */
  exports.prototype['level'] = undefined;
  /**
   * The score of the category
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;
  /**
   * It defines whether the extracted category is confident or not
   * @member {Boolean} confident
   */
  exports.prototype['confident'] = undefined;
  /**
   * Related links for the category
   * @member {module:model/CategoryLinks} links
   */
  exports.prototype['links'] = undefined;


  /**
   * Allowed values for the <code>taxonomy</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TaxonomyEnum = {
    /**
     * value: "iab-qag"
     * @const
     */
    "iab-qag": "iab-qag",
    /**
     * value: "iptc-subjectcode"
     * @const
     */
    "iptc-subjectcode": "iptc-subjectcode"  };


  return exports;
}));


