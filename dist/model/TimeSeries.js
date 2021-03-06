"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AggregatedSentiment = _interopRequireDefault(require("./AggregatedSentiment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TimeSeries model module.
 * @module model/TimeSeries
 * @version 4.4.0
 */
var TimeSeries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeries</code>.
   * @alias module:model/TimeSeries
   */
  function TimeSeries() {
    _classCallCheck(this, TimeSeries);

    TimeSeries.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TimeSeries, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TimeSeries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeries} obj Optional instance to populate.
     * @return {module:model/TimeSeries} The populated <code>TimeSeries</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeries();

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');

          if ('count' !== 'count') {
            Object.defineProperty(obj, 'count', {
              get: function get() {
                return obj['count'];
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

        if (data.hasOwnProperty('sentiment')) {
          obj['sentiment'] = _AggregatedSentiment["default"].constructFromObject(data['sentiment']);

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

  return TimeSeries;
}();
/**
 * The count of time series bin
 * @member {Number} count
 */


TimeSeries.prototype['count'] = undefined;
/**
 * The published date of the time series bin
 * @member {Date} published_at
 */

TimeSeries.prototype['published_at'] = undefined;
/**
 * @member {module:model/AggregatedSentiment} sentiment
 */

TimeSeries.prototype['sentiment'] = undefined;
var _default = TimeSeries;
exports["default"] = _default;