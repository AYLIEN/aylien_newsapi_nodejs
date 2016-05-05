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
    define(['ApiClient', 'model/Location', 'model/Scope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Location'), require('./Scope'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Source = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Location, root.AylienNewsApi.Scope);
  }
}(this, function(ApiClient, Location, Scope) {
  'use strict';




  /**
   * The Source model module.
   * @module model/Source
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Source</code>.
   * @alias module:model/Source
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Source} obj Optional instance to populate.
   * @return {module:model/Source} The populated <code>Source</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('logo_url')) {
        obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
      }
      if (data.hasOwnProperty('locations')) {
        obj['locations'] = ApiClient.convertToType(data['locations'], [Location]);
      }
      if (data.hasOwnProperty('scopes')) {
        obj['scopes'] = ApiClient.convertToType(data['scopes'], [Scope]);
      }
    }
    return obj;
  }

  /**
   * The source id which is a unique value
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The source name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Domain name of the source which is extracted from the source URL
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;
  /**
   * A URL which points to the source logo
   * @member {String} logo_url
   */
  exports.prototype['logo_url'] = undefined;
  /**
   * The source locations which are tend to be the physical locations of the source, e.g. BBC headquarter is located in London.
   * @member {Array.<module:model/Location>} locations
   */
  exports.prototype['locations'] = undefined;
  /**
   * The source scopes which is tend to be scope locations of the source, e.g. BBC scopes is international. 
   * @member {Array.<module:model/Scope>} scopes
   */
  exports.prototype['scopes'] = undefined;




  return exports;
}));


