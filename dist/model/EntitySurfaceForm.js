"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntityMention = _interopRequireDefault(require("./EntityMention"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntitySurfaceForm model module.
 * @module model/EntitySurfaceForm
 * @version 5.0.0
 */
var EntitySurfaceForm = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntitySurfaceForm</code>.
   * @alias module:model/EntitySurfaceForm
   */
  function EntitySurfaceForm() {
    _classCallCheck(this, EntitySurfaceForm);

    EntitySurfaceForm.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntitySurfaceForm, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntitySurfaceForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntitySurfaceForm} obj Optional instance to populate.
     * @return {module:model/EntitySurfaceForm} The populated <code>EntitySurfaceForm</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntitySurfaceForm();

        if (data.hasOwnProperty('frequency')) {
          obj['frequency'] = _ApiClient["default"].convertToType(data['frequency'], 'Number');

          if ('frequency' !== 'frequency') {
            Object.defineProperty(obj, 'frequency', {
              get: function get() {
                return obj['frequency'];
              }
            });
          }
        }

        if (data.hasOwnProperty('mentions')) {
          obj['mentions'] = _ApiClient["default"].convertToType(data['mentions'], [_EntityMention["default"]]);

          if ('mentions' !== 'mentions') {
            Object.defineProperty(obj, 'mentions', {
              get: function get() {
                return obj['mentions'];
              }
            });
          }
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');

          if ('text' !== 'text') {
            Object.defineProperty(obj, 'text', {
              get: function get() {
                return obj['text'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return EntitySurfaceForm;
}();
/**
 * Amount of entity surface form mentions in the article
 * @member {Number} frequency
 */


EntitySurfaceForm.prototype['frequency'] = undefined;
/**
 * Mentions of the entity text
 * @member {Array.<module:model/EntityMention>} mentions
 */

EntitySurfaceForm.prototype['mentions'] = undefined;
/**
 * The entity text
 * @member {String} text
 */

EntitySurfaceForm.prototype['text'] = undefined;
var _default = EntitySurfaceForm;
exports["default"] = _default;