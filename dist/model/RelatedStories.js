"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Story = _interopRequireDefault(require("./Story"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelatedStories model module.
 * @module model/RelatedStories
 * @version 4.4.0
 */
var RelatedStories = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelatedStories</code>.
   * @alias module:model/RelatedStories
   */
  function RelatedStories() {
    _classCallCheck(this, RelatedStories);

    RelatedStories.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelatedStories, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelatedStories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedStories} obj Optional instance to populate.
     * @return {module:model/RelatedStories} The populated <code>RelatedStories</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelatedStories();

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

        if (data.hasOwnProperty('related_stories')) {
          obj['related_stories'] = _ApiClient["default"].convertToType(data['related_stories'], [_Story["default"]]);

          if ('related_stories' !== 'relatedStories') {
            Object.defineProperty(obj, 'relatedStories', {
              get: function get() {
                return obj['related_stories'];
              }
            });
          }
        }

        if (data.hasOwnProperty('story_body')) {
          obj['story_body'] = _ApiClient["default"].convertToType(data['story_body'], 'String');

          if ('story_body' !== 'storyBody') {
            Object.defineProperty(obj, 'storyBody', {
              get: function get() {
                return obj['story_body'];
              }
            });
          }
        }

        if (data.hasOwnProperty('story_language')) {
          obj['story_language'] = _ApiClient["default"].convertToType(data['story_language'], 'String');

          if ('story_language' !== 'storyLanguage') {
            Object.defineProperty(obj, 'storyLanguage', {
              get: function get() {
                return obj['story_language'];
              }
            });
          }
        }

        if (data.hasOwnProperty('story_title')) {
          obj['story_title'] = _ApiClient["default"].convertToType(data['story_title'], 'String');

          if ('story_title' !== 'storyTitle') {
            Object.defineProperty(obj, 'storyTitle', {
              get: function get() {
                return obj['story_title'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return RelatedStories;
}();
/**
 * The end of a period in which searched stories were published
 * @member {Date} published_at.end
 */


RelatedStories.prototype['published_at.end'] = undefined;
/**
 * The start of a period in which searched stories were published
 * @member {Date} published_at.start
 */

RelatedStories.prototype['published_at.start'] = undefined;
/**
 * An array of related stories for the input story
 * @member {Array.<module:model/Story>} related_stories
 */

RelatedStories.prototype['related_stories'] = undefined;
/**
 * The input story body
 * @member {String} story_body
 */

RelatedStories.prototype['story_body'] = undefined;
/**
 * The input story language
 * @member {String} story_language
 */

RelatedStories.prototype['story_language'] = undefined;
/**
 * The input story title
 * @member {String} story_title
 */

RelatedStories.prototype['story_title'] = undefined;
var _default = RelatedStories;
exports["default"] = _default;