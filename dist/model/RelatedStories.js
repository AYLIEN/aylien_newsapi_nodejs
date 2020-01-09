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
 * @version 3.0.0
 */
var RelatedStories =
/*#__PURE__*/
function () {
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

        if (data.hasOwnProperty('related_stories')) {
          obj['related_stories'] = _ApiClient["default"].convertToType(data['related_stories'], [_Story["default"]]);
        }

        if (data.hasOwnProperty('story_body')) {
          obj['story_body'] = _ApiClient["default"].convertToType(data['story_body'], 'String');
        }

        if (data.hasOwnProperty('story_language')) {
          obj['story_language'] = _ApiClient["default"].convertToType(data['story_language'], 'String');
        }

        if (data.hasOwnProperty('story_title')) {
          obj['story_title'] = _ApiClient["default"].convertToType(data['story_title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RelatedStories;
}();
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