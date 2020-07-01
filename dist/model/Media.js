"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MediaFormat = _interopRequireDefault(require("./MediaFormat"));

var _MediaType = _interopRequireDefault(require("./MediaType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Media model module.
 * @module model/Media
 * @version 4.0.0
 */
var Media = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Media</code>.
   * @alias module:model/Media
   */
  function Media() {
    _classCallCheck(this, Media);

    Media.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Media, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Media</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Media} obj Optional instance to populate.
     * @return {module:model/Media} The populated <code>Media</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Media();

        if (data.hasOwnProperty('content_length')) {
          obj['content_length'] = _ApiClient["default"].convertToType(data['content_length'], 'Number');

          if ('content_length' !== 'contentLength') {
            Object.defineProperty(obj, 'contentLength', {
              get: function get() {
                return obj['content_length'];
              }
            });
          }
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _MediaFormat["default"].constructFromObject(data['format']);

          if ('format' !== 'format') {
            Object.defineProperty(obj, 'format', {
              get: function get() {
                return obj['format'];
              }
            });
          }
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');

          if ('height' !== 'height') {
            Object.defineProperty(obj, 'height', {
              get: function get() {
                return obj['height'];
              }
            });
          }
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _MediaType["default"].constructFromObject(data['type']);

          if ('type' !== 'type') {
            Object.defineProperty(obj, 'type', {
              get: function get() {
                return obj['type'];
              }
            });
          }
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');

          if ('url' !== 'url') {
            Object.defineProperty(obj, 'url', {
              get: function get() {
                return obj['url'];
              }
            });
          }
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');

          if ('width' !== 'width') {
            Object.defineProperty(obj, 'width', {
              get: function get() {
                return obj['width'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Media;
}();
/**
 * The content length of media
 * @member {Number} content_length
 */


Media.prototype['content_length'] = undefined;
/**
 * @member {module:model/MediaFormat} format
 */

Media.prototype['format'] = undefined;
/**
 * The height of media
 * @member {Number} height
 */

Media.prototype['height'] = undefined;
/**
 * @member {module:model/MediaType} type
 */

Media.prototype['type'] = undefined;
/**
 * A URL which points to the media file
 * @member {String} url
 */

Media.prototype['url'] = undefined;
/**
 * The width of media
 * @member {Number} width
 */

Media.prototype['width'] = undefined;
var _default = Media;
exports["default"] = _default;