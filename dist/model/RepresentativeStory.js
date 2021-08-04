"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RepresentativeStory model module.
 * @module model/RepresentativeStory
 * @version 5.0.0
 */
var RepresentativeStory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RepresentativeStory</code>.
   * @alias module:model/RepresentativeStory
   */
  function RepresentativeStory() {
    _classCallCheck(this, RepresentativeStory);

    RepresentativeStory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepresentativeStory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepresentativeStory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepresentativeStory} obj Optional instance to populate.
     * @return {module:model/RepresentativeStory} The populated <code>RepresentativeStory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepresentativeStory();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');

          if ('id' !== 'id') {
            Object.defineProperty(obj, 'id', {
              get: function get() {
                return obj['id'];
              }
            });
          }
        }

        if (data.hasOwnProperty('permalink')) {
          obj['permalink'] = _ApiClient["default"].convertToType(data['permalink'], 'String');

          if ('permalink' !== 'permalink') {
            Object.defineProperty(obj, 'permalink', {
              get: function get() {
                return obj['permalink'];
              }
            });
          }
        }

        if (data.hasOwnProperty('published_at')) {
          obj['published_at'] = _ApiClient["default"].convertToType(data['published_at'], 'Date');

          if ('published_at' !== 'publishedAt') {
            Object.defineProperty(obj, 'publishedAt', {
              get: function get() {
                return obj['published_at'];
              }
            });
          }
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');

          if ('title' !== 'title') {
            Object.defineProperty(obj, 'title', {
              get: function get() {
                return obj['title'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return RepresentativeStory;
}();
/**
 * ID of the story which is a unique identification
 * @member {Number} id
 */


RepresentativeStory.prototype['id'] = undefined;
/**
 * The story permalink URL
 * @member {String} permalink
 */

RepresentativeStory.prototype['permalink'] = undefined;
/**
 * Published date of the story
 * @member {Date} published_at
 */

RepresentativeStory.prototype['published_at'] = undefined;
/**
 * Title of the story
 * @member {String} title
 */

RepresentativeStory.prototype['title'] = undefined;
var _default = RepresentativeStory;
exports["default"] = _default;