"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Location = _interopRequireDefault(require("./Location"));

var _Rankings = _interopRequireDefault(require("./Rankings"));

var _Scope = _interopRequireDefault(require("./Scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Source model module.
 * @module model/Source
 * @version 4.0.0
 */
var Source = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Source</code>.
   * @alias module:model/Source
   */
  function Source() {
    _classCallCheck(this, Source);

    Source.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Source, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Source} obj Optional instance to populate.
     * @return {module:model/Source} The populated <code>Source</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Source();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');

          if ('description' !== 'description') {
            Object.defineProperty(obj, 'description', {
              get: function get() {
                return obj['description'];
              }
            });
          }
        }

        if (data.hasOwnProperty('domain')) {
          obj['domain'] = _ApiClient["default"].convertToType(data['domain'], 'String');

          if ('domain' !== 'domain') {
            Object.defineProperty(obj, 'domain', {
              get: function get() {
                return obj['domain'];
              }
            });
          }
        }

        if (data.hasOwnProperty('home_page_url')) {
          obj['home_page_url'] = _ApiClient["default"].convertToType(data['home_page_url'], 'String');

          if ('home_page_url' !== 'homePageUrl') {
            Object.defineProperty(obj, 'homePageUrl', {
              get: function get() {
                return obj['home_page_url'];
              }
            });
          }
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');

          if ('id' !== 'id') {
            Object.defineProperty(obj, 'id', {
              get: function get() {
                return obj['id'];
              }
            });
          }
        }

        if (data.hasOwnProperty('links_in_count')) {
          obj['links_in_count'] = _ApiClient["default"].convertToType(data['links_in_count'], 'Number');

          if ('links_in_count' !== 'linksInCount') {
            Object.defineProperty(obj, 'linksInCount', {
              get: function get() {
                return obj['links_in_count'];
              }
            });
          }
        }

        if (data.hasOwnProperty('locations')) {
          obj['locations'] = _ApiClient["default"].convertToType(data['locations'], [_Location["default"]]);

          if ('locations' !== 'locations') {
            Object.defineProperty(obj, 'locations', {
              get: function get() {
                return obj['locations'];
              }
            });
          }
        }

        if (data.hasOwnProperty('logo_url')) {
          obj['logo_url'] = _ApiClient["default"].convertToType(data['logo_url'], 'String');

          if ('logo_url' !== 'logoUrl') {
            Object.defineProperty(obj, 'logoUrl', {
              get: function get() {
                return obj['logo_url'];
              }
            });
          }
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');

          if ('name' !== 'name') {
            Object.defineProperty(obj, 'name', {
              get: function get() {
                return obj['name'];
              }
            });
          }
        }

        if (data.hasOwnProperty('rankings')) {
          obj['rankings'] = _Rankings["default"].constructFromObject(data['rankings']);

          if ('rankings' !== 'rankings') {
            Object.defineProperty(obj, 'rankings', {
              get: function get() {
                return obj['rankings'];
              }
            });
          }
        }

        if (data.hasOwnProperty('scopes')) {
          obj['scopes'] = _ApiClient["default"].convertToType(data['scopes'], [_Scope["default"]]);

          if ('scopes' !== 'scopes') {
            Object.defineProperty(obj, 'scopes', {
              get: function get() {
                return obj['scopes'];
              }
            });
          }
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');

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

  return Source;
}();
/**
 * A general explanation about the source
 * @member {String} description
 */


Source.prototype['description'] = undefined;
/**
 * The domain name of the source which is extracted from the source URL
 * @member {String} domain
 */

Source.prototype['domain'] = undefined;
/**
 * The home page URL of the source
 * @member {String} home_page_url
 */

Source.prototype['home_page_url'] = undefined;
/**
 * The source id which is a unique value
 * @member {Number} id
 */

Source.prototype['id'] = undefined;
/**
 * The number of websites that link to the source
 * @member {Number} links_in_count
 */

Source.prototype['links_in_count'] = undefined;
/**
 * The source locations which are tend to be the physical locations of the source, e.g. BBC headquarter is located in London. 
 * @member {Array.<module:model/Location>} locations
 */

Source.prototype['locations'] = undefined;
/**
 * A URL which points to the source logo
 * @member {String} logo_url
 */

Source.prototype['logo_url'] = undefined;
/**
 * The source name
 * @member {String} name
 */

Source.prototype['name'] = undefined;
/**
 * @member {module:model/Rankings} rankings
 */

Source.prototype['rankings'] = undefined;
/**
 * The source scopes which is tend to be scope locations of the source, e.g. BBC scopes is international. 
 * @member {Array.<module:model/Scope>} scopes
 */

Source.prototype['scopes'] = undefined;
/**
 * The title of the home page URL
 * @member {String} title
 */

Source.prototype['title'] = undefined;
var _default = Source;
exports["default"] = _default;