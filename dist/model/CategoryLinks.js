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
 * The CategoryLinks model module.
 * @module model/CategoryLinks
 * @version 4.4.0
 */
var CategoryLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CategoryLinks</code>.
   * @alias module:model/CategoryLinks
   */
  function CategoryLinks() {
    _classCallCheck(this, CategoryLinks);

    CategoryLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CategoryLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CategoryLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CategoryLinks} obj Optional instance to populate.
     * @return {module:model/CategoryLinks} The populated <code>CategoryLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CategoryLinks();

        if (data.hasOwnProperty('parent')) {
          obj['parent'] = _ApiClient["default"].convertToType(data['parent'], 'String');

          if ('parent' !== 'parent') {
            Object.defineProperty(obj, 'parent', {
              get: function get() {
                return obj['parent'];
              }
            });
          }
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');

          if ('self' !== 'self') {
            Object.defineProperty(obj, 'self', {
              get: function get() {
                return obj['self'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return CategoryLinks;
}();
/**
 * A URL pointing to the parent category
 * @member {String} parent
 */


CategoryLinks.prototype['parent'] = undefined;
/**
 * A URL pointing to the category
 * @member {String} self
 */

CategoryLinks.prototype['self'] = undefined;
var _default = CategoryLinks;
exports["default"] = _default;