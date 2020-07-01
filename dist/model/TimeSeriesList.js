"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TimeSeries = _interopRequireDefault(require("./TimeSeries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TimeSeriesList model module.
 * @module model/TimeSeriesList
 * @version 4.0.0
 */
var TimeSeriesList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesList</code>.
   * @alias module:model/TimeSeriesList
   */
  function TimeSeriesList() {
    _classCallCheck(this, TimeSeriesList);

    TimeSeriesList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TimeSeriesList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TimeSeriesList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesList} obj Optional instance to populate.
     * @return {module:model/TimeSeriesList} The populated <code>TimeSeriesList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesList();

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'String');

          if ('period' !== 'period') {
            Object.defineProperty(obj, 'period', {
              get: function get() {
                return obj['period'];
              }
            });
          }
        }

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

        if (data.hasOwnProperty('time_series')) {
          obj['time_series'] = _ApiClient["default"].convertToType(data['time_series'], [_TimeSeries["default"]]);

          if ('time_series' !== 'timeSeries') {
            Object.defineProperty(obj, 'timeSeries', {
              get: function get() {
                return obj['time_series'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return TimeSeriesList;
}();
/**
 * The size of each date range expressed as an interval to be added to the lower bound. 
 * @member {String} period
 */


TimeSeriesList.prototype['period'] = undefined;
/**
 * The end published date of the time series
 * @member {Date} published_at.end
 */

TimeSeriesList.prototype['published_at.end'] = undefined;
/**
 * The start published date of the time series
 * @member {Date} published_at.start
 */

TimeSeriesList.prototype['published_at.start'] = undefined;
/**
 * An array of time series
 * @member {Array.<module:model/TimeSeries>} time_series
 */

TimeSeriesList.prototype['time_series'] = undefined;
var _default = TimeSeriesList;
exports["default"] = _default;