"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CategoryLinks = _interopRequireDefault(require("./CategoryLinks"));

var _CategoryTaxonomy = _interopRequireDefault(require("./CategoryTaxonomy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Category model module.
 * @module model/Category
 * @version 5.0.0
 */
var Category = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Category</code>.
   * @alias module:model/Category
   */
  function Category() {
    _classCallCheck(this, Category);

    Category.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Category, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Category} obj Optional instance to populate.
     * @return {module:model/Category} The populated <code>Category</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Category();

        if (data.hasOwnProperty('confident')) {
          obj['confident'] = _ApiClient["default"].convertToType(data['confident'], 'Boolean');

          if ('confident' !== 'confident') {
            Object.defineProperty(obj, 'confident', {
              get: function get() {
                return obj['confident'];
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

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');

          if ('label' !== 'label') {
            Object.defineProperty(obj, 'label', {
              get: function get() {
                return obj['label'];
              }
            });
          }
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ApiClient["default"].convertToType(data['level'], 'Number');

          if ('level' !== 'level') {
            Object.defineProperty(obj, 'level', {
              get: function get() {
                return obj['level'];
              }
            });
          }
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _CategoryLinks["default"].constructFromObject(data['links']);

          if ('links' !== 'links') {
            Object.defineProperty(obj, 'links', {
              get: function get() {
                return obj['links'];
              }
            });
          }
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');

          if ('score' !== 'score') {
            Object.defineProperty(obj, 'score', {
              get: function get() {
                return obj['score'];
              }
            });
          }
        }

        if (data.hasOwnProperty('taxonomy')) {
          obj['taxonomy'] = _CategoryTaxonomy["default"].constructFromObject(data['taxonomy']);

          if ('taxonomy' !== 'taxonomy') {
            Object.defineProperty(obj, 'taxonomy', {
              get: function get() {
                return obj['taxonomy'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Category;
}();
/**
 * It defines whether the extracted category is confident or not
 * @member {Boolean} confident
 */


Category.prototype['confident'] = undefined;
/**
 * The ID of the category
 * @member {String} id
 */

Category.prototype['id'] = undefined;
/**
 * The label of the category
 * @member {String} label
 */

Category.prototype['label'] = undefined;
/**
 * The level of the category
 * @member {Number} level
 */

Category.prototype['level'] = undefined;
/**
 * @member {module:model/CategoryLinks} links
 */

Category.prototype['links'] = undefined;
/**
 * The score of the category
 * @member {Number} score
 */

Category.prototype['score'] = undefined;
/**
 * @member {module:model/CategoryTaxonomy} taxonomy
 */

Category.prototype['taxonomy'] = undefined;
var _default = Category;
exports["default"] = _default;