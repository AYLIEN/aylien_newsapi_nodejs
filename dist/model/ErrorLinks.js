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
 * The ErrorLinks model module.
 * @module model/ErrorLinks
 * @version 4.4.0
 */
var ErrorLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorLinks</code>.
   * @alias module:model/ErrorLinks
   */
  function ErrorLinks() {
    _classCallCheck(this, ErrorLinks);

    ErrorLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorLinks} obj Optional instance to populate.
     * @return {module:model/ErrorLinks} The populated <code>ErrorLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorLinks();

        if (data.hasOwnProperty('about')) {
          obj['about'] = _ApiClient["default"].convertToType(data['about'], 'String');

          if ('about' !== 'about') {
            Object.defineProperty(obj, 'about', {
              get: function get() {
                return obj['about'];
              }
            });
          }
        }

        if (data.hasOwnProperty('docs')) {
          obj['docs'] = _ApiClient["default"].convertToType(data['docs'], 'String');

          if ('docs' !== 'docs') {
            Object.defineProperty(obj, 'docs', {
              get: function get() {
                return obj['docs'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return ErrorLinks;
}();
/**
 * @member {String} about
 */


ErrorLinks.prototype['about'] = undefined;
/**
 * @member {String} docs
 */

ErrorLinks.prototype['docs'] = undefined;
var _default = ErrorLinks;
exports["default"] = _default;