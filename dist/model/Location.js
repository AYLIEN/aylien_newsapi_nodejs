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
 * The Location model module.
 * @module model/Location
 * @version 5.0.0
 */
var Location = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Location</code>.
   * @alias module:model/Location
   */
  function Location() {
    _classCallCheck(this, Location);

    Location.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Location, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Location} obj Optional instance to populate.
     * @return {module:model/Location} The populated <code>Location</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Location();

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

  return Location;
}();
/**
 * The city of the location
 * @member {String} city
 */


Location.prototype['city'] = undefined;
/**
 * The country code of the location. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. 
 * @member {String} country
 */

Location.prototype['country'] = undefined;
/**
 * The state of the location
 * @member {String} state
 */

Location.prototype['state'] = undefined;
var _default = Location;
exports["default"] = _default;