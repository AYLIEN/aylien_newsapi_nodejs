"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Autocomplete = _interopRequireDefault(require("./Autocomplete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Autocompletes model module.
 * @module model/Autocompletes
 * @version 3.0.0
 */
var Autocompletes =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Autocompletes</code>.
   * @alias module:model/Autocompletes
   */
  function Autocompletes() {
    _classCallCheck(this, Autocompletes);

    Autocompletes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Autocompletes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Autocompletes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Autocompletes} obj Optional instance to populate.
     * @return {module:model/Autocompletes} The populated <code>Autocompletes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Autocompletes();

        if (data.hasOwnProperty('autocompletes')) {
          obj['autocompletes'] = _ApiClient["default"].convertToType(data['autocompletes'], [_Autocomplete["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Autocompletes;
}();
/**
 * An array of autocompletes
 * @member {Array.<module:model/Autocomplete>} autocompletes
 */


Autocompletes.prototype['autocompletes'] = undefined;
var _default = Autocompletes;
exports["default"] = _default;