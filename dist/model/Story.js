"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Author = _interopRequireDefault(require("./Author"));

var _Category = _interopRequireDefault(require("./Category"));

var _Entities = _interopRequireDefault(require("./Entities"));

var _Media = _interopRequireDefault(require("./Media"));

var _Sentiments = _interopRequireDefault(require("./Sentiments"));

var _ShareCounts = _interopRequireDefault(require("./ShareCounts"));

var _Source = _interopRequireDefault(require("./Source"));

var _StoryLinks = _interopRequireDefault(require("./StoryLinks"));

var _StoryTranslations = _interopRequireDefault(require("./StoryTranslations"));

var _Summary = _interopRequireDefault(require("./Summary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Story model module.
 * @module model/Story
 * @version 4.4.0
 */
var Story = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Story</code>.
   * @alias module:model/Story
   */
  function Story() {
    _classCallCheck(this, Story);

    Story.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Story, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Story</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Story} obj Optional instance to populate.
     * @return {module:model/Story} The populated <code>Story</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Story();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _Author["default"].constructFromObject(data['author']);

          if ('author' !== 'author') {
            Object.defineProperty(obj, 'author', {
              get: function get() {
                return obj['author'];
              }
            });
          }
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');

          if ('body' !== 'body') {
            Object.defineProperty(obj, 'body', {
              get: function get() {
                return obj['body'];
              }
            });
          }
        }

        if (data.hasOwnProperty('categories')) {
          obj['categories'] = _ApiClient["default"].convertToType(data['categories'], [_Category["default"]]);

          if ('categories' !== 'categories') {
            Object.defineProperty(obj, 'categories', {
              get: function get() {
                return obj['categories'];
              }
            });
          }
        }

        if (data.hasOwnProperty('characters_count')) {
          obj['characters_count'] = _ApiClient["default"].convertToType(data['characters_count'], 'Number');

          if ('characters_count' !== 'charactersCount') {
            Object.defineProperty(obj, 'charactersCount', {
              get: function get() {
                return obj['characters_count'];
              }
            });
          }
        }

        if (data.hasOwnProperty('clusters')) {
          obj['clusters'] = _ApiClient["default"].convertToType(data['clusters'], ['Number']);

          if ('clusters' !== 'clusters') {
            Object.defineProperty(obj, 'clusters', {
              get: function get() {
                return obj['clusters'];
              }
            });
          }
        }

        if (data.hasOwnProperty('entities')) {
          obj['entities'] = _Entities["default"].constructFromObject(data['entities']);

          if ('entities' !== 'entities') {
            Object.defineProperty(obj, 'entities', {
              get: function get() {
                return obj['entities'];
              }
            });
          }
        }

        if (data.hasOwnProperty('hashtags')) {
          obj['hashtags'] = _ApiClient["default"].convertToType(data['hashtags'], ['String']);

          if ('hashtags' !== 'hashtags') {
            Object.defineProperty(obj, 'hashtags', {
              get: function get() {
                return obj['hashtags'];
              }
            });
          }
        }

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

        if (data.hasOwnProperty('keywords')) {
          obj['keywords'] = _ApiClient["default"].convertToType(data['keywords'], ['String']);

          if ('keywords' !== 'keywords') {
            Object.defineProperty(obj, 'keywords', {
              get: function get() {
                return obj['keywords'];
              }
            });
          }
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');

          if ('language' !== 'language') {
            Object.defineProperty(obj, 'language', {
              get: function get() {
                return obj['language'];
              }
            });
          }
        }

        if (data.hasOwnProperty('license_type')) {
          obj['license_type'] = _ApiClient["default"].convertToType(data['license_type'], 'Number');

          if ('license_type' !== 'licenseType') {
            Object.defineProperty(obj, 'licenseType', {
              get: function get() {
                return obj['license_type'];
              }
            });
          }
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _StoryLinks["default"].constructFromObject(data['links']);

          if ('links' !== 'links') {
            Object.defineProperty(obj, 'links', {
              get: function get() {
                return obj['links'];
              }
            });
          }
        }

        if (data.hasOwnProperty('media')) {
          obj['media'] = _ApiClient["default"].convertToType(data['media'], [_Media["default"]]);

          if ('media' !== 'media') {
            Object.defineProperty(obj, 'media', {
              get: function get() {
                return obj['media'];
              }
            });
          }
        }

        if (data.hasOwnProperty('paragraphs_count')) {
          obj['paragraphs_count'] = _ApiClient["default"].convertToType(data['paragraphs_count'], 'Number');

          if ('paragraphs_count' !== 'paragraphsCount') {
            Object.defineProperty(obj, 'paragraphsCount', {
              get: function get() {
                return obj['paragraphs_count'];
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

        if (data.hasOwnProperty('sentences_count')) {
          obj['sentences_count'] = _ApiClient["default"].convertToType(data['sentences_count'], 'Number');

          if ('sentences_count' !== 'sentencesCount') {
            Object.defineProperty(obj, 'sentencesCount', {
              get: function get() {
                return obj['sentences_count'];
              }
            });
          }
        }

        if (data.hasOwnProperty('sentiment')) {
          obj['sentiment'] = _Sentiments["default"].constructFromObject(data['sentiment']);

          if ('sentiment' !== 'sentiment') {
            Object.defineProperty(obj, 'sentiment', {
              get: function get() {
                return obj['sentiment'];
              }
            });
          }
        }

        if (data.hasOwnProperty('social_shares_count')) {
          obj['social_shares_count'] = _ShareCounts["default"].constructFromObject(data['social_shares_count']);

          if ('social_shares_count' !== 'socialSharesCount') {
            Object.defineProperty(obj, 'socialSharesCount', {
              get: function get() {
                return obj['social_shares_count'];
              }
            });
          }
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _Source["default"].constructFromObject(data['source']);

          if ('source' !== 'source') {
            Object.defineProperty(obj, 'source', {
              get: function get() {
                return obj['source'];
              }
            });
          }
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _Summary["default"].constructFromObject(data['summary']);

          if ('summary' !== 'summary') {
            Object.defineProperty(obj, 'summary', {
              get: function get() {
                return obj['summary'];
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

        if (data.hasOwnProperty('translations')) {
          obj['translations'] = _StoryTranslations["default"].constructFromObject(data['translations']);

          if ('translations' !== 'translations') {
            Object.defineProperty(obj, 'translations', {
              get: function get() {
                return obj['translations'];
              }
            });
          }
        }

        if (data.hasOwnProperty('words_count')) {
          obj['words_count'] = _ApiClient["default"].convertToType(data['words_count'], 'Number');

          if ('words_count' !== 'wordsCount') {
            Object.defineProperty(obj, 'wordsCount', {
              get: function get() {
                return obj['words_count'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Story;
}();
/**
 * @member {module:model/Author} author
 */


Story.prototype['author'] = undefined;
/**
 * Body of the story
 * @member {String} body
 */

Story.prototype['body'] = undefined;
/**
 * Suggested categories for the story
 * @member {Array.<module:model/Category>} categories
 */

Story.prototype['categories'] = undefined;
/**
 * Character count of the story body
 * @member {Number} characters_count
 */

Story.prototype['characters_count'] = undefined;
/**
 * An array of clusters the story is associated with
 * @member {Array.<Number>} clusters
 */

Story.prototype['clusters'] = undefined;
/**
 * @member {module:model/Entities} entities
 */

Story.prototype['entities'] = undefined;
/**
 * An array of suggested Story hashtags
 * @member {Array.<String>} hashtags
 */

Story.prototype['hashtags'] = undefined;
/**
 * ID of the story which is a unique identification
 * @member {Number} id
 */

Story.prototype['id'] = undefined;
/**
 * Extracted keywords mentioned in the story title or body
 * @member {Array.<String>} keywords
 */

Story.prototype['keywords'] = undefined;
/**
 * Language of the story
 * @member {String} language
 */

Story.prototype['language'] = undefined;
/**
 * License type of the story
 * @member {Number} license_type
 */

Story.prototype['license_type'] = undefined;
/**
 * @member {module:model/StoryLinks} links
 */

Story.prototype['links'] = undefined;
/**
 * An array of extracted media such as images and videos
 * @member {Array.<module:model/Media>} media
 */

Story.prototype['media'] = undefined;
/**
 * Paragraph count of the story body
 * @member {Number} paragraphs_count
 */

Story.prototype['paragraphs_count'] = undefined;
/**
 * Published date of the story
 * @member {Date} published_at
 */

Story.prototype['published_at'] = undefined;
/**
 * Sentence count of the story body
 * @member {Number} sentences_count
 */

Story.prototype['sentences_count'] = undefined;
/**
 * @member {module:model/Sentiments} sentiment
 */

Story.prototype['sentiment'] = undefined;
/**
 * @member {module:model/ShareCounts} social_shares_count
 */

Story.prototype['social_shares_count'] = undefined;
/**
 * @member {module:model/Source} source
 */

Story.prototype['source'] = undefined;
/**
 * @member {module:model/Summary} summary
 */

Story.prototype['summary'] = undefined;
/**
 * Title of the story
 * @member {String} title
 */

Story.prototype['title'] = undefined;
/**
 * @member {module:model/StoryTranslations} translations
 */

Story.prototype['translations'] = undefined;
/**
 * Word count of the story body
 * @member {Number} words_count
 */

Story.prototype['words_count'] = undefined;
var _default = Story;
exports["default"] = _default;