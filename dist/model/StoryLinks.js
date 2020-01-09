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
 * The StoryLinks model module.
 * @module model/StoryLinks
 * @version 3.0.0
 */
var StoryLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>StoryLinks</code>.
   * @alias module:model/StoryLinks
   */
  function StoryLinks() {
    _classCallCheck(this, StoryLinks);

    StoryLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StoryLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StoryLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryLinks} obj Optional instance to populate.
     * @return {module:model/StoryLinks} The populated <code>StoryLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StoryLinks();

        if (data.hasOwnProperty('canonical')) {
          obj['canonical'] = _ApiClient["default"].convertToType(data['canonical'], 'String');
        }

        if (data.hasOwnProperty('coverages')) {
          obj['coverages'] = _ApiClient["default"].convertToType(data['coverages'], 'String');
        }

        if (data.hasOwnProperty('permalink')) {
          obj['permalink'] = _ApiClient["default"].convertToType(data['permalink'], 'String');
        }

        if (data.hasOwnProperty('related_stories')) {
          obj['related_stories'] = _ApiClient["default"].convertToType(data['related_stories'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StoryLinks;
}();
/**
 * The story canonical URL
 * @member {String} canonical
 */


StoryLinks.prototype['canonical'] = undefined;
/**
 * The coverages URL
 * @member {String} coverages
 */

StoryLinks.prototype['coverages'] = undefined;
/**
 * The story permalink URL
 * @member {String} permalink
 */

StoryLinks.prototype['permalink'] = undefined;
/**
 * The related stories URL
 * @member {String} related_stories
 */

StoryLinks.prototype['related_stories'] = undefined;
var _default = StoryLinks;
exports["default"] = _default;