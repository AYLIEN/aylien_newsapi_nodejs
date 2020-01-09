"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ShareCount = _interopRequireDefault(require("./ShareCount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ShareCounts model module.
 * @module model/ShareCounts
 * @version 3.0.0
 */
var ShareCounts =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ShareCounts</code>.
   * @alias module:model/ShareCounts
   */
  function ShareCounts() {
    _classCallCheck(this, ShareCounts);

    ShareCounts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ShareCounts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ShareCounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShareCounts} obj Optional instance to populate.
     * @return {module:model/ShareCounts} The populated <code>ShareCounts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShareCounts();

        if (data.hasOwnProperty('facebook')) {
          obj['facebook'] = _ApiClient["default"].convertToType(data['facebook'], [_ShareCount["default"]]);
        }

        if (data.hasOwnProperty('google_plus')) {
          obj['google_plus'] = _ApiClient["default"].convertToType(data['google_plus'], [_ShareCount["default"]]);
        }

        if (data.hasOwnProperty('linkedin')) {
          obj['linkedin'] = _ApiClient["default"].convertToType(data['linkedin'], [_ShareCount["default"]]);
        }

        if (data.hasOwnProperty('reddit')) {
          obj['reddit'] = _ApiClient["default"].convertToType(data['reddit'], [_ShareCount["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ShareCounts;
}();
/**
 * Facebook shares count
 * @member {Array.<module:model/ShareCount>} facebook
 */


ShareCounts.prototype['facebook'] = undefined;
/**
 * Google Plus shares count
 * @member {Array.<module:model/ShareCount>} google_plus
 */

ShareCounts.prototype['google_plus'] = undefined;
/**
 * LinkedIn shares count
 * @member {Array.<module:model/ShareCount>} linkedin
 */

ShareCounts.prototype['linkedin'] = undefined;
/**
 * Reddit shares count
 * @member {Array.<module:model/ShareCount>} reddit
 */

ShareCounts.prototype['reddit'] = undefined;
var _default = ShareCounts;
exports["default"] = _default;