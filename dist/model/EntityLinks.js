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
 * The EntityLinks model module.
 * @module model/EntityLinks
 * @version 4.4.0
 */
var EntityLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntityLinks</code>.
   * @alias module:model/EntityLinks
   */
  function EntityLinks() {
    _classCallCheck(this, EntityLinks);

    EntityLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntityLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntityLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityLinks} obj Optional instance to populate.
     * @return {module:model/EntityLinks} The populated <code>EntityLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntityLinks();

        if (data.hasOwnProperty('dbpedia')) {
          obj['dbpedia'] = _ApiClient["default"].convertToType(data['dbpedia'], 'String');

          if ('dbpedia' !== 'dbpedia') {
            Object.defineProperty(obj, 'dbpedia', {
              get: function get() {
                return obj['dbpedia'];
              }
            });
          }
        }

        if (data.hasOwnProperty('wikidata')) {
          obj['wikidata'] = _ApiClient["default"].convertToType(data['wikidata'], 'String');

          if ('wikidata' !== 'wikidata') {
            Object.defineProperty(obj, 'wikidata', {
              get: function get() {
                return obj['wikidata'];
              }
            });
          }
        }

        if (data.hasOwnProperty('wikipedia')) {
          obj['wikipedia'] = _ApiClient["default"].convertToType(data['wikipedia'], 'String');

          if ('wikipedia' !== 'wikipedia') {
            Object.defineProperty(obj, 'wikipedia', {
              get: function get() {
                return obj['wikipedia'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return EntityLinks;
}();
/**
 * A dbpedia resource URL (deprecated)
 * @member {String} dbpedia
 */


EntityLinks.prototype['dbpedia'] = undefined;
/**
 * A wikidata resource URL
 * @member {String} wikidata
 */

EntityLinks.prototype['wikidata'] = undefined;
/**
 * A wikipedia resource URL
 * @member {String} wikipedia
 */

EntityLinks.prototype['wikipedia'] = undefined;
var _default = EntityLinks;
exports["default"] = _default;