"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntityMentionIndex = _interopRequireDefault(require("./EntityMentionIndex"));

var _EntitySentiment = _interopRequireDefault(require("./EntitySentiment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntityMention model module.
 * @module model/EntityMention
 * @version 5.0.0
 */
var EntityMention = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntityMention</code>.
   * @alias module:model/EntityMention
   */
  function EntityMention() {
    _classCallCheck(this, EntityMention);

    EntityMention.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntityMention, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntityMention</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityMention} obj Optional instance to populate.
     * @return {module:model/EntityMention} The populated <code>EntityMention</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntityMention();

        if (data.hasOwnProperty('index')) {
          obj['index'] = _EntityMentionIndex["default"].constructFromObject(data['index']);

          if ('index' !== 'index') {
            Object.defineProperty(obj, 'index', {
              get: function get() {
                return obj['index'];
              }
            });
          }
        }

        if (data.hasOwnProperty('sentiment')) {
          obj['sentiment'] = _EntitySentiment["default"].constructFromObject(data['sentiment']);

          if ('sentiment' !== 'sentiment') {
            Object.defineProperty(obj, 'sentiment', {
              get: function get() {
                return obj['sentiment'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return EntityMention;
}();
/**
 * @member {module:model/EntityMentionIndex} index
 */


EntityMention.prototype['index'] = undefined;
/**
 * @member {module:model/EntitySentiment} sentiment
 */

EntityMention.prototype['sentiment'] = undefined;
var _default = EntityMention;
exports["default"] = _default;