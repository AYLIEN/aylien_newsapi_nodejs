"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Entity = _interopRequireDefault(require("./Entity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Entities model module.
 * @module model/Entities
 * @version 4.0.0
 */
var Entities = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Entities</code>.
   * @alias module:model/Entities
   */
  function Entities() {
    _classCallCheck(this, Entities);

    Entities.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Entities, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Entities</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entities} obj Optional instance to populate.
     * @return {module:model/Entities} The populated <code>Entities</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Entities();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], [_Entity["default"]]);

          if ('body' !== 'body') {
            Object.defineProperty(obj, 'body', {
              get: function get() {
                return obj['body'];
              }
            });
          }
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], [_Entity["default"]]);

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

  return Entities;
}();
/**
 * An array of extracted entities from the story body
 * @member {Array.<module:model/Entity>} body
 */


Entities.prototype['body'] = undefined;
/**
 * An array of extracted entities from the story title
 * @member {Array.<module:model/Entity>} title
 */

Entities.prototype['title'] = undefined;
var _default = Entities;
exports["default"] = _default;