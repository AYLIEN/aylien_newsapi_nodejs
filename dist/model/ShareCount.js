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
 * The ShareCount model module.
 * @module model/ShareCount
 * @version 5.0.0
 */
var ShareCount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShareCount</code>.
   * @alias module:model/ShareCount
   */
  function ShareCount() {
    _classCallCheck(this, ShareCount);

    ShareCount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ShareCount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ShareCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShareCount} obj Optional instance to populate.
     * @return {module:model/ShareCount} The populated <code>ShareCount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShareCount();

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
      }

      return obj;
    }
  }]);

  return ShareCount;
}();
/**
 * The number of shares
 * @member {Number} count
 */


ShareCount.prototype['count'] = undefined;
/**
 * The fetched date of the shares
 * @member {Date} fetched_at
 */

ShareCount.prototype['fetched_at'] = undefined;
var _default = ShareCount;
exports["default"] = _default;