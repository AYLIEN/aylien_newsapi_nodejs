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
 * @version 4.0.0
 */
var Trends = /*#__PURE__*/function () {
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

          if ('field' !== 'field') {
            Object.defineProperty(obj, 'field', {
              get: function get() {
                return obj['field'];
              }
            });
          }
        }

        if (data.hasOwnProperty('trends')) {
          obj['trends'] = _ApiClient["default"].convertToType(data['trends'], [_Trend["default"]]);

          if ('trends' !== 'trends') {
            Object.defineProperty(obj, 'trends', {
              get: function get() {
                return obj['trends'];
              }
            });
          }
        }

        if (data.hasOwnProperty('published_at.end')) {
          obj['published_at.end'] = _ApiClient["default"].convertToType(data['published_at.end'], 'Date');

          if ('published_at.end' !== 'publishedAtEnd') {
            Object.defineProperty(obj, 'publishedAtEnd', {
              get: function get() {
                return obj['published_at.end'];
              }
            });
          }
        }

        if (data.hasOwnProperty('published_at.start')) {
          obj['published_at.start'] = _ApiClient["default"].convertToType(data['published_at.start'], 'Date');

          if ('published_at.start' !== 'publishedAtStart') {
            Object.defineProperty(obj, 'publishedAtStart', {
              get: function get() {
                return obj['published_at.start'];
              }
            });
          }
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
/**
 * The end of a period in which searched stories were published
 * @member {Date} published_at.end
 */

Trends.prototype['published_at.end'] = undefined;
/**
 * The start of a period in which searched stories were published
 * @member {Date} published_at.start
 */

Trends.prototype['published_at.start'] = undefined;
var _default = Trends;
exports["default"] = _default;