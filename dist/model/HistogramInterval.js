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
 * The HistogramInterval model module.
 * @module model/HistogramInterval
 * @version 5.0.0
 */
var HistogramInterval = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistogramInterval</code>.
   * @alias module:model/HistogramInterval
   */
  function HistogramInterval() {
    _classCallCheck(this, HistogramInterval);

    HistogramInterval.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistogramInterval, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistogramInterval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistogramInterval} obj Optional instance to populate.
     * @return {module:model/HistogramInterval} The populated <code>HistogramInterval</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistogramInterval();

        if (data.hasOwnProperty('bin')) {
          obj['bin'] = _ApiClient["default"].convertToType(data['bin'], 'Number');

          if ('bin' !== 'bin') {
            Object.defineProperty(obj, 'bin', {
              get: function get() {
                return obj['bin'];
              }
            });
          }
        }

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
      }

      return obj;
    }
  }]);

  return HistogramInterval;
}();
/**
 * Histogram bin
 * @member {Number} bin
 */


HistogramInterval.prototype['bin'] = undefined;
/**
 * Histogram bin size
 * @member {Number} count
 */

HistogramInterval.prototype['count'] = undefined;
var _default = HistogramInterval;
exports["default"] = _default;