"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntityInText = _interopRequireDefault(require("./EntityInText"));

var _EntityLinks = _interopRequireDefault(require("./EntityLinks"));

var _EntitySentiment = _interopRequireDefault(require("./EntitySentiment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Entity model module.
 * @module model/Entity
 * @version 5.0.0
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

        if (data.hasOwnProperty('body')) {
          obj['body'] = _EntityInText["default"].constructFromObject(data['body']);

          if ('body' !== 'body') {
            Object.defineProperty(obj, 'body', {
              get: function get() {
                return obj['body'];
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

        if (data.hasOwnProperty('overall_frequency')) {
          obj['overall_frequency'] = _ApiClient["default"].convertToType(data['overall_frequency'], 'Number');

          if ('overall_frequency' !== 'overallFrequency') {
            Object.defineProperty(obj, 'overallFrequency', {
              get: function get() {
                return obj['overall_frequency'];
              }
            });
          }
        }

        if (data.hasOwnProperty('overall_prominence')) {
          obj['overall_prominence'] = _ApiClient["default"].convertToType(data['overall_prominence'], 'Number');

          if ('overall_prominence' !== 'overallProminence') {
            Object.defineProperty(obj, 'overallProminence', {
              get: function get() {
                return obj['overall_prominence'];
              }
            });
          }
        }

        if (data.hasOwnProperty('overall_sentiment')) {
          obj['overall_sentiment'] = _EntitySentiment["default"].constructFromObject(data['overall_sentiment']);

          if ('overall_sentiment' !== 'overallSentiment') {
            Object.defineProperty(obj, 'overallSentiment', {
              get: function get() {
                return obj['overall_sentiment'];
              }
            });
          }
        }

        if (data.hasOwnProperty('stock_tickers')) {
          obj['stock_tickers'] = _ApiClient["default"].convertToType(data['stock_tickers'], ['String']);

          if ('stock_tickers' !== 'stockTickers') {
            Object.defineProperty(obj, 'stockTickers', {
              get: function get() {
                return obj['stock_tickers'];
              }
            });
          }
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _EntityInText["default"].constructFromObject(data['title']);

          if ('title' !== 'title') {
            Object.defineProperty(obj, 'title', {
              get: function get() {
                return obj['title'];
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
 * @member {module:model/EntityInText} body
 */


Entity.prototype['body'] = undefined;
/**
 * The unique ID of the entity
 * @member {String} id
 */

Entity.prototype['id'] = undefined;
/**
 * @member {module:model/EntityLinks} links
 */

Entity.prototype['links'] = undefined;
/**
 * Amount of entity surface form mentions in the article
 * @member {Number} overall_frequency
 */

Entity.prototype['overall_frequency'] = undefined;
/**
 * Describes how relevant an entity is to the article
 * @member {Number} overall_prominence
 */

Entity.prototype['overall_prominence'] = undefined;
/**
 * @member {module:model/EntitySentiment} overall_sentiment
 */

Entity.prototype['overall_sentiment'] = undefined;
/**
 * The stock tickers of the entity (might be empty)
 * @member {Array.<String>} stock_tickers
 */

Entity.prototype['stock_tickers'] = undefined;
/**
 * @member {module:model/EntityInText} title
 */

Entity.prototype['title'] = undefined;
/**
 * An array of the entity types
 * @member {Array.<String>} types
 */

Entity.prototype['types'] = undefined;
var _default = Entity;
exports["default"] = _default;