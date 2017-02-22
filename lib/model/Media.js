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
    root.AylienNewsApi.Media = factory(root.AylienNewsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Media model module.
   * @module model/Media
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>Media</code>.
   * @alias module:model/Media
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Media</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Media} obj Optional instance to populate.
   * @return {module:model/Media} The populated <code>Media</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('content_length')) {
        obj['contentLength'] = ApiClient.convertToType(data['content_length'], 'Number');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The type of media
   * @member {module:model/Media.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * A URL which points to the media file
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * The format of media
   * @member {module:model/Media.FormatEnum} format
   */
  exports.prototype['format'] = undefined;
  /**
   * The content length of media
   * @member {Number} contentLength
   */
  exports.prototype['contentLength'] = undefined;
  /**
   * The width of media
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;
  /**
   * The height of media
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "image"
     * @const
     */
    "image": "image",
    /**
     * value: "video"
     * @const
     */
    "video": "video"  };

  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "BMP"
     * @const
     */
    "BMP": "BMP",
    /**
     * value: "GIF"
     * @const
     */
    "GIF": "GIF",
    /**
     * value: "JPEG"
     * @const
     */
    "JPEG": "JPEG",
    /**
     * value: "PNG"
     * @const
     */
    "PNG": "PNG",
    /**
     * value: "TIFF"
     * @const
     */
    "TIFF": "TIFF",
    /**
     * value: "PSD"
     * @const
     */
    "PSD": "PSD",
    /**
     * value: "ICO"
     * @const
     */
    "ICO": "ICO",
    /**
     * value: "CUR"
     * @const
     */
    "CUR": "CUR",
    /**
     * value: "WEBP"
     * @const
     */
    "WEBP": "WEBP",
    /**
     * value: "SVG"
     * @const
     */
    "SVG": "SVG"  };


  return exports;
}));


