"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Story = _interopRequireDefault(require("./Story"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Stories model module.
 * @module model/Stories
 * @version 4.4.0
 */
var Stories = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Stories</code>.
   * @alias module:model/Stories
   */
  function Stories() {
    _classCallCheck(this, Stories);

    Stories.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Stories, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Stories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stories} obj Optional instance to populate.
     * @return {module:model/Stories} The populated <code>Stories</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Stories();

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
          obj['stories'] = _ApiClient["default"].convertToType(data['stories'], [_Story["default"]]);

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

  return Stories;
}();
/**
 * The next page cursor
 * @member {String} next_page_cursor
 */


Stories.prototype['next_page_cursor'] = undefined;
/**
 * The end of a period in which searched stories were published
 * @member {Date} published_at.end
 */

Stories.prototype['published_at.end'] = undefined;
/**
 * The start of a period in which searched stories were published
 * @member {Date} published_at.start
 */

Stories.prototype['published_at.start'] = undefined;
/**
 * An array of stories
 * @member {Array.<module:model/Story>} stories
 */

Stories.prototype['stories'] = undefined;
/**
 * Notifies about possible issues that occurred when searching for stories
 * @member {Array.<module:model/Warning>} warnings
 */

Stories.prototype['warnings'] = undefined;
var _default = Stories;
exports["default"] = _default;