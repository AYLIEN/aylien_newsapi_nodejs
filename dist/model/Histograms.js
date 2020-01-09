"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HistogramInterval = _interopRequireDefault(require("./HistogramInterval"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Histograms model module.
 * @module model/Histograms
 * @version 3.0.0
 */
var Histograms =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Histograms</code>.
   * @alias module:model/Histograms
   */
  function Histograms() {
    _classCallCheck(this, Histograms);

    Histograms.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Histograms, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Histograms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Histograms} obj Optional instance to populate.
     * @return {module:model/Histograms} The populated <code>Histograms</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Histograms();

        if (data.hasOwnProperty('field')) {
          obj['field'] = _ApiClient["default"].convertToType(data['field'], 'String');
        }

        if (data.hasOwnProperty('interval.end')) {
          obj['interval.end'] = _ApiClient["default"].convertToType(data['interval.end'], 'Number');
        }

        if (data.hasOwnProperty('interval.start')) {
          obj['interval.start'] = _ApiClient["default"].convertToType(data['interval.start'], 'Number');
        }

        if (data.hasOwnProperty('interval.width')) {
          obj['interval.width'] = _ApiClient["default"].convertToType(data['interval.width'], 'Number');
        }

        if (data.hasOwnProperty('intervals')) {
          obj['intervals'] = _ApiClient["default"].convertToType(data['intervals'], [_HistogramInterval["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Histograms;
}();
/**
 * @member {String} field
 */


Histograms.prototype['field'] = undefined;
/**
 * The end interval of the histogram
 * @member {Number} interval.end
 */

Histograms.prototype['interval.end'] = undefined;
/**
 * The start interval of the histogram
 * @member {Number} interval.start
 */

Histograms.prototype['interval.start'] = undefined;
/**
 * The width of the histogram
 * @member {Number} interval.width
 */

Histograms.prototype['interval.width'] = undefined;
/**
 * The intervals of the histograms
 * @member {Array.<module:model/HistogramInterval>} intervals
 */

Histograms.prototype['intervals'] = undefined;
var _default = Histograms;
exports["default"] = _default;