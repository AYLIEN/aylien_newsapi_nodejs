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
 * The Autocomplete model module.
 * @module model/Autocomplete
 * @version 4.4.0
 */
var Autocomplete = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Autocomplete</code>.
   * @alias module:model/Autocomplete
   */
  function Autocomplete() {
    _classCallCheck(this, Autocomplete);

    Autocomplete.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Autocomplete, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Autocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Autocomplete} obj Optional instance to populate.
     * @return {module:model/Autocomplete} The populated <code>Autocomplete</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Autocomplete();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');

          if ('id' !== 'id') {
            Object.defineProperty(obj, 'id', {
              get: function get() {
                return obj['id'];
              }
            });
          }
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');

          if ('text' !== 'text') {
            Object.defineProperty(obj, 'text', {
              get: function get() {
                return obj['text'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Autocomplete;
}();
/**
 * ID of the autocomplete
 * @member {String} id
 */


Autocomplete.prototype['id'] = undefined;
/**
 * Text of the autocomplete
 * @member {String} text
 */

Autocomplete.prototype['text'] = undefined;
var _default = Autocomplete;
exports["default"] = _default;