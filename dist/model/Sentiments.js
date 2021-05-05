"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Sentiment = _interopRequireDefault(require("./Sentiment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Sentiments model module.
 * @module model/Sentiments
 * @version 4.4.0
 */
var Sentiments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Sentiments</code>.
   * @alias module:model/Sentiments
   */
  function Sentiments() {
    _classCallCheck(this, Sentiments);

    Sentiments.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Sentiments, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Sentiments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Sentiments} obj Optional instance to populate.
     * @return {module:model/Sentiments} The populated <code>Sentiments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Sentiments();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _Sentiment["default"].constructFromObject(data['body']);

          if ('body' !== 'body') {
            Object.defineProperty(obj, 'body', {
              get: function get() {
                return obj['body'];
              }
            });
          }
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _Sentiment["default"].constructFromObject(data['title']);

          if ('title' !== 'title') {
            Object.defineProperty(obj, 'title', {
              get: function get() {
                return obj['title'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Sentiments;
}();
/**
 * @member {module:model/Sentiment} body
 */


Sentiments.prototype['body'] = undefined;
/**
 * @member {module:model/Sentiment} title
 */

Sentiments.prototype['title'] = undefined;
var _default = Sentiments;
exports["default"] = _default;