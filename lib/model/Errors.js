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
    define(['ApiClient', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Errors = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Error);
  }
}(this, function(ApiClient, Error) {
  'use strict';




  /**
   * The Errors model module.
   * @module model/Errors
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Errors</code>.
   * @alias module:model/Errors
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Errors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Errors} obj Optional instance to populate.
   * @return {module:model/Errors} The populated <code>Errors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Error>} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));


