"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorLinks = _interopRequireDefault(require("./ErrorLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Warning model module.
 * @module model/Warning
 * @version 4.4.0
 */
var Warning = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Warning</code>.
   * @alias module:model/Warning
   */
  function Warning() {
    _classCallCheck(this, Warning);

    Warning.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Warning, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Warning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Warning} obj Optional instance to populate.
     * @return {module:model/Warning} The populated <code>Warning</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Warning();

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], 'String');

          if ('detail' !== 'detail') {
            Object.defineProperty(obj, 'detail', {
              get: function get() {
                return obj['detail'];
              }
            });
          }
        }

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

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ErrorLinks["default"].constructFromObject(data['links']);

          if ('links' !== 'links') {
            Object.defineProperty(obj, 'links', {
              get: function get() {
                return obj['links'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Warning;
}();
/**
 * The detailed description of the warning.
 * @member {String} detail
 */


Warning.prototype['detail'] = undefined;
/**
 * The identfier of the warning, represents its origin.
 * @member {String} id
 */

Warning.prototype['id'] = undefined;
/**
 * @member {module:model/ErrorLinks} links
 */

Warning.prototype['links'] = undefined;
var _default = Warning;
exports["default"] = _default;