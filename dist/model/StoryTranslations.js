"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StoryTranslationsEn = _interopRequireDefault(require("./StoryTranslationsEn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StoryTranslations model module.
 * @module model/StoryTranslations
 * @version 3.0.0
 */
var StoryTranslations =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>StoryTranslations</code>.
   * Translations of the story. Each language has it&#39;s own key and object
   * @alias module:model/StoryTranslations
   */
  function StoryTranslations() {
    _classCallCheck(this, StoryTranslations);

    StoryTranslations.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StoryTranslations, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StoryTranslations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryTranslations} obj Optional instance to populate.
     * @return {module:model/StoryTranslations} The populated <code>StoryTranslations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StoryTranslations();

        if (data.hasOwnProperty('en')) {
          obj['en'] = _StoryTranslationsEn["default"].constructFromObject(data['en']);
        }
      }

      return obj;
    }
  }]);

  return StoryTranslations;
}();
/**
 * @member {module:model/StoryTranslationsEn} en
 */


StoryTranslations.prototype['en'] = undefined;
var _default = StoryTranslations;
exports["default"] = _default;