"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeprecatedStory = _interopRequireDefault(require("./DeprecatedStory"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeprecatedStories model module.
 * @module model/DeprecatedStories
 * @version 5.0.0
 */
var DeprecatedStories = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeprecatedStories</code>.
   * Stories containing deprecated entities
   * @alias module:model/DeprecatedStories
   */
  function DeprecatedStories() {
    _classCallCheck(this, DeprecatedStories);

    DeprecatedStories.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeprecatedStories, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeprecatedStories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeprecatedStories} obj Optional instance to populate.
     * @return {module:model/DeprecatedStories} The populated <code>DeprecatedStories</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeprecatedStories();

        if (data.hasOwnProperty('next_page_cursor')) {
          obj['next_page_cursor'] = _ApiClient["default"].convertToType(data['next_page_cursor'], 'String');

          if ('next_page_cursor' !== 'nextPageCursor') {
            Object.defineProperty(obj, 'nextPageCursor', {
              get: function get() {
                return obj['next_page_cursor'];
              }
            });
          }
        }

        if (data.hasOwnProperty('published_at.end')) {
          obj['published_at.end'] = _ApiClient["default"].convertToType(data['published_at.end'], 'Date');

          if ('published_at.end' !== 'publishedAtEnd') {
            Object.defineProperty(obj, 'publishedAtEnd', {
              get: function get() {
                return obj['published_at.end'];
              }
            });
          }
        }

        if (data.hasOwnProperty('published_at.start')) {
          obj['published_at.start'] = _ApiClient["default"].convertToType(data['published_at.start'], 'Date');

          if ('published_at.start' !== 'publishedAtStart') {
            Object.defineProperty(obj, 'publishedAtStart', {
              get: function get() {
                return obj['published_at.start'];
              }
            });
          }
        }

        if (data.hasOwnProperty('stories')) {
          obj['stories'] = _ApiClient["default"].convertToType(data['stories'], [_DeprecatedStory["default"]]);

          if ('stories' !== 'stories') {
            Object.defineProperty(obj, 'stories', {
              get: function get() {
                return obj['stories'];
              }
            });
          }
        }

        if (data.hasOwnProperty('warnings')) {
          obj['warnings'] = _ApiClient["default"].convertToType(data['warnings'], [_Warning["default"]]);

          if ('warnings' !== 'warnings') {
            Object.defineProperty(obj, 'warnings', {
              get: function get() {
                return obj['warnings'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return DeprecatedStories;
}();
/**
 * The next page cursor
 * @member {String} next_page_cursor
 */


DeprecatedStories.prototype['next_page_cursor'] = undefined;
/**
 * The end of a period in which searched stories were published
 * @member {Date} published_at.end
 */

DeprecatedStories.prototype['published_at.end'] = undefined;
/**
 * The start of a period in which searched stories were published
 * @member {Date} published_at.start
 */

DeprecatedStories.prototype['published_at.start'] = undefined;
/**
 * An array of stories
 * @member {Array.<module:model/DeprecatedStory>} stories
 */

DeprecatedStories.prototype['stories'] = undefined;
/**
 * Notifies about possible issues that occurred when searching for stories
 * @member {Array.<module:model/Warning>} warnings
 */

DeprecatedStories.prototype['warnings'] = undefined;
var _default = DeprecatedStories;
exports["default"] = _default;