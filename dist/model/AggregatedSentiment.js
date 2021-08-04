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
 * The AggregatedSentiment model module.
 * @module model/AggregatedSentiment
 * @version 5.0.0
 */
var AggregatedSentiment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AggregatedSentiment</code>.
   * The aggregation of sentiments
   * @alias module:model/AggregatedSentiment
   */
  function AggregatedSentiment() {
    _classCallCheck(this, AggregatedSentiment);

    AggregatedSentiment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AggregatedSentiment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AggregatedSentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggregatedSentiment} obj Optional instance to populate.
     * @return {module:model/AggregatedSentiment} The populated <code>AggregatedSentiment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AggregatedSentiment();

        if (data.hasOwnProperty('negative')) {
          obj['negative'] = _ApiClient["default"].convertToType(data['negative'], 'Number');

          if ('negative' !== 'negative') {
            Object.defineProperty(obj, 'negative', {
              get: function get() {
                return obj['negative'];
              }
            });
          }
        }

        if (data.hasOwnProperty('neutral')) {
          obj['neutral'] = _ApiClient["default"].convertToType(data['neutral'], 'Number');

          if ('neutral' !== 'neutral') {
            Object.defineProperty(obj, 'neutral', {
              get: function get() {
                return obj['neutral'];
              }
            });
          }
        }

        if (data.hasOwnProperty('positive')) {
          obj['positive'] = _ApiClient["default"].convertToType(data['positive'], 'Number');

          if ('positive' !== 'positive') {
            Object.defineProperty(obj, 'positive', {
              get: function get() {
                return obj['positive'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return AggregatedSentiment;
}();
/**
 * Negative sentiments count
 * @member {Number} negative
 */


AggregatedSentiment.prototype['negative'] = undefined;
/**
 * Neutral sentiments count
 * @member {Number} neutral
 */

AggregatedSentiment.prototype['neutral'] = undefined;
/**
 * Positive sentiments count
 * @member {Number} positive
 */

AggregatedSentiment.prototype['positive'] = undefined;
var _default = AggregatedSentiment;
exports["default"] = _default;