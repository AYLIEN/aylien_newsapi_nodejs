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
 * The StoryTranslationsEn model module.
 * @module model/StoryTranslationsEn
 * @version 3.0.0
 */
var StoryTranslationsEn =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>StoryTranslationsEn</code>.
   * @alias module:model/StoryTranslationsEn
   */
  function StoryTranslationsEn() {
    _classCallCheck(this, StoryTranslationsEn);

    StoryTranslationsEn.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StoryTranslationsEn, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StoryTranslationsEn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryTranslationsEn} obj Optional instance to populate.
     * @return {module:model/StoryTranslationsEn} The populated <code>StoryTranslationsEn</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StoryTranslationsEn();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StoryTranslationsEn;
}();
/**
 * Translation of body
 * @member {String} body
 */


StoryTranslationsEn.prototype['body'] = undefined;
/**
 * Translation of a concatenation of title and body
 * @member {String} text
 */

StoryTranslationsEn.prototype['text'] = undefined;
/**
 * Translation of title
 * @member {String} title
 */

StoryTranslationsEn.prototype['title'] = undefined;
var _default = StoryTranslationsEn;
exports["default"] = _default;