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
 * The Rank model module.
 * @module model/Rank
 * @version 4.0.0
 */
var Rank = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Rank</code>.
   * @alias module:model/Rank
   */
  function Rank() {
    _classCallCheck(this, Rank);

    Rank.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Rank, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Rank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rank} obj Optional instance to populate.
     * @return {module:model/Rank} The populated <code>Rank</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Rank();

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

        if (data.hasOwnProperty('fetched_at')) {
          obj['fetched_at'] = _ApiClient["default"].convertToType(data['fetched_at'], 'Date');

          if ('fetched_at' !== 'fetchedAt') {
            Object.defineProperty(obj, 'fetchedAt', {
              get: function get() {
                return obj['fetched_at'];
              }
            });
          }
        }

        if (data.hasOwnProperty('rank')) {
          obj['rank'] = _ApiClient["default"].convertToType(data['rank'], 'Number');

          if ('rank' !== 'rank') {
            Object.defineProperty(obj, 'rank', {
              get: function get() {
                return obj['rank'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Rank;
}();
/**
 * The country code which the rank is in it
 * @member {String} country
 */


Rank.prototype['country'] = undefined;
/**
 * The fetched date of the rank
 * @member {Date} fetched_at
 */

Rank.prototype['fetched_at'] = undefined;
/**
 * The rank
 * @member {Number} rank
 */

Rank.prototype['rank'] = undefined;
var _default = Rank;
exports["default"] = _default;