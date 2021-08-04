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
 * The DeprecatedEntitySurfaceForm model module.
 * @module model/DeprecatedEntitySurfaceForm
 * @version 5.0.0
 */
var DeprecatedEntitySurfaceForm = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeprecatedEntitySurfaceForm</code>.
   * @alias module:model/DeprecatedEntitySurfaceForm
   */
  function DeprecatedEntitySurfaceForm() {
    _classCallCheck(this, DeprecatedEntitySurfaceForm);

    DeprecatedEntitySurfaceForm.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeprecatedEntitySurfaceForm, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeprecatedEntitySurfaceForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeprecatedEntitySurfaceForm} obj Optional instance to populate.
     * @return {module:model/DeprecatedEntitySurfaceForm} The populated <code>DeprecatedEntitySurfaceForm</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeprecatedEntitySurfaceForm();

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

        if (data.hasOwnProperty('indices')) {
          obj['indices'] = _ApiClient["default"].convertToType(data['indices'], [['Number']]);

          if ('indices' !== 'indices') {
            Object.defineProperty(obj, 'indices', {
              get: function get() {
                return obj['indices'];
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

  return DeprecatedEntitySurfaceForm;
}();
/**
 * Amount of entity surface form mentions in the article
 * @member {Number} frequency
 */


DeprecatedEntitySurfaceForm.prototype['frequency'] = undefined;
/**
 * The indices of the entity text
 * @member {Array.<Array.<Number>>} indices
 */

DeprecatedEntitySurfaceForm.prototype['indices'] = undefined;
/**
 * The entity text
 * @member {String} text
 */

DeprecatedEntitySurfaceForm.prototype['text'] = undefined;
var _default = DeprecatedEntitySurfaceForm;
exports["default"] = _default;