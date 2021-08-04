"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScopeLevel = _interopRequireDefault(require("./ScopeLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Scope model module.
 * @module model/Scope
 * @version 5.0.0
 */
var Scope = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Scope</code>.
   * @alias module:model/Scope
   */
  function Scope() {
    _classCallCheck(this, Scope);

    Scope.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Scope, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Scope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scope} obj Optional instance to populate.
     * @return {module:model/Scope} The populated <code>Scope</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Scope();

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');

          if ('city' !== 'city') {
            Object.defineProperty(obj, 'city', {
              get: function get() {
                return obj['city'];
              }
            });
          }
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');

          if ('country' !== 'country') {
            Object.defineProperty(obj, 'country', {
              get: function get() {
                return obj['country'];
              }
            });
          }
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ScopeLevel["default"].constructFromObject(data['level']);

          if ('level' !== 'level') {
            Object.defineProperty(obj, 'level', {
              get: function get() {
                return obj['level'];
              }
            });
          }
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');

          if ('state' !== 'state') {
            Object.defineProperty(obj, 'state', {
              get: function get() {
                return obj['state'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Scope;
}();
/**
 * The scope by city
 * @member {String} city
 */


Scope.prototype['city'] = undefined;
/**
 * The source scope by country code. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. 
 * @member {String} country
 */

Scope.prototype['country'] = undefined;
/**
 * @member {module:model/ScopeLevel} level
 */

Scope.prototype['level'] = undefined;
/**
 * The scope by state
 * @member {String} state
 */

Scope.prototype['state'] = undefined;
var _default = Scope;
exports["default"] = _default;