"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Trend = _interopRequireDefault(require("./Trend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Trends model module.
 * @module model/Trends
 * @version 3.0.0
 */
var Trends =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Trends</code>.
   * @alias module:model/Trends
   */
  function Trends() {
    _classCallCheck(this, Trends);

    Trends.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Trends, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Trends</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Trends} obj Optional instance to populate.
     * @return {module:model/Trends} The populated <code>Trends</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Trends();

        if (data.hasOwnProperty('field')) {
          obj['field'] = _ApiClient["default"].convertToType(data['field'], 'String');
        }

        if (data.hasOwnProperty('trends')) {
          obj['trends'] = _ApiClient["default"].convertToType(data['trends'], [_Trend["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Trends;
}();
/**
 * The field of trends
 * @member {String} field
 */


Trends.prototype['field'] = undefined;
/**
 * An array of trends
 * @member {Array.<module:model/Trend>} trends
 */

Trends.prototype['trends'] = undefined;
var _default = Trends;
exports["default"] = _default;