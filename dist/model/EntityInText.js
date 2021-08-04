"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntitySentiment = _interopRequireDefault(require("./EntitySentiment"));

var _EntitySurfaceForm = _interopRequireDefault(require("./EntitySurfaceForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntityInText model module.
 * @module model/EntityInText
 * @version 5.0.0
 */
var EntityInText = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntityInText</code>.
   * @alias module:model/EntityInText
   */
  function EntityInText() {
    _classCallCheck(this, EntityInText);

    EntityInText.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntityInText, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntityInText</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityInText} obj Optional instance to populate.
     * @return {module:model/EntityInText} The populated <code>EntityInText</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntityInText();

        if (data.hasOwnProperty('sentiment')) {
          obj['sentiment'] = _EntitySentiment["default"].constructFromObject(data['sentiment']);

          if ('sentiment' !== 'sentiment') {
            Object.defineProperty(obj, 'sentiment', {
              get: function get() {
                return obj['sentiment'];
              }
            });
          }
        }

        if (data.hasOwnProperty('surface_forms')) {
          obj['surface_forms'] = _ApiClient["default"].convertToType(data['surface_forms'], [_EntitySurfaceForm["default"]]);

          if ('surface_forms' !== 'surfaceForms') {
            Object.defineProperty(obj, 'surfaceForms', {
              get: function get() {
                return obj['surface_forms'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return EntityInText;
}();
/**
 * @member {module:model/EntitySentiment} sentiment
 */


EntityInText.prototype['sentiment'] = undefined;
/**
 * @member {Array.<module:model/EntitySurfaceForm>} surface_forms
 */

EntityInText.prototype['surface_forms'] = undefined;
var _default = EntityInText;
exports["default"] = _default;