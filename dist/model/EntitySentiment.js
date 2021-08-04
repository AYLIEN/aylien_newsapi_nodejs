"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SentimentPolarity = _interopRequireDefault(require("./SentimentPolarity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntitySentiment model module.
 * @module model/EntitySentiment
 * @version 5.0.0
 */
var EntitySentiment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntitySentiment</code>.
   * @alias module:model/EntitySentiment
   */
  function EntitySentiment() {
    _classCallCheck(this, EntitySentiment);

    EntitySentiment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntitySentiment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntitySentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntitySentiment} obj Optional instance to populate.
     * @return {module:model/EntitySentiment} The populated <code>EntitySentiment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntitySentiment();

        if (data.hasOwnProperty('confidence')) {
          obj['confidence'] = _ApiClient["default"].convertToType(data['confidence'], 'Number');

          if ('confidence' !== 'confidence') {
            Object.defineProperty(obj, 'confidence', {
              get: function get() {
                return obj['confidence'];
              }
            });
          }
        }

        if (data.hasOwnProperty('polarity')) {
          obj['polarity'] = _SentimentPolarity["default"].constructFromObject(data['polarity']);

          if ('polarity' !== 'polarity') {
            Object.defineProperty(obj, 'polarity', {
              get: function get() {
                return obj['polarity'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return EntitySentiment;
}();
/**
 * Polarity confidence of the sentiment
 * @member {Number} confidence
 */


EntitySentiment.prototype['confidence'] = undefined;
/**
 * @member {module:model/SentimentPolarity} polarity
 */

EntitySentiment.prototype['polarity'] = undefined;
var _default = EntitySentiment;
exports["default"] = _default;