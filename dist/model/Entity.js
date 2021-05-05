"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntityLinks = _interopRequireDefault(require("./EntityLinks"));

var _EntitySentiment = _interopRequireDefault(require("./EntitySentiment"));

var _EntitySurfaceForm = _interopRequireDefault(require("./EntitySurfaceForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Entity model module.
 * @module model/Entity
 * @version 4.4.0
 */
var Entity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Entity</code>.
   * @alias module:model/Entity
   */
  function Entity() {
    _classCallCheck(this, Entity);

    Entity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Entity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entity} obj Optional instance to populate.
     * @return {module:model/Entity} The populated <code>Entity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Entity();

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

        if (data.hasOwnProperty('links')) {
          obj['links'] = _EntityLinks["default"].constructFromObject(data['links']);

          if ('links' !== 'links') {
            Object.defineProperty(obj, 'links', {
              get: function get() {
                return obj['links'];
              }
            });
          }
        }

        if (data.hasOwnProperty('prominence_score')) {
          obj['prominence_score'] = _ApiClient["default"].convertToType(data['prominence_score'], 'Number');

          if ('prominence_score' !== 'prominenceScore') {
            Object.defineProperty(obj, 'prominenceScore', {
              get: function get() {
                return obj['prominence_score'];
              }
            });
          }
        }

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

        if (data.hasOwnProperty('stock_ticker')) {
          obj['stock_ticker'] = _ApiClient["default"].convertToType(data['stock_ticker'], 'String');

          if ('stock_ticker' !== 'stockTicker') {
            Object.defineProperty(obj, 'stockTicker', {
              get: function get() {
                return obj['stock_ticker'];
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

        if (data.hasOwnProperty('types')) {
          obj['types'] = _ApiClient["default"].convertToType(data['types'], ['String']);

          if ('types' !== 'types') {
            Object.defineProperty(obj, 'types', {
              get: function get() {
                return obj['types'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Entity;
}();
/**
 * The unique ID of the entity
 * @member {String} id
 */


Entity.prototype['id'] = undefined;
/**
 * The indices of the entity text
 * @member {Array.<Array.<Number>>} indices
 */

Entity.prototype['indices'] = undefined;
/**
 * @member {module:model/EntityLinks} links
 */

Entity.prototype['links'] = undefined;
/**
 * Describes how relevant an entity is to the article
 * @member {Number} prominence_score
 */

Entity.prototype['prominence_score'] = undefined;
/**
 * @member {module:model/EntitySentiment} sentiment
 */

Entity.prototype['sentiment'] = undefined;
/**
 * The stock_ticker of the entity (might be null)
 * @member {String} stock_ticker
 */

Entity.prototype['stock_ticker'] = undefined;
/**
 * @member {Array.<module:model/EntitySurfaceForm>} surface_forms
 */

Entity.prototype['surface_forms'] = undefined;
/**
 * The entity text
 * @member {String} text
 */

Entity.prototype['text'] = undefined;
/**
 * An array of the entity types
 * @member {Array.<String>} types
 */

Entity.prototype['types'] = undefined;
var _default = Entity;
exports["default"] = _default;