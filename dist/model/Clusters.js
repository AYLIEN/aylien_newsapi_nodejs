"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Cluster = _interopRequireDefault(require("./Cluster"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Clusters model module.
 * @module model/Clusters
 * @version 5.0.0
 */
var Clusters = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Clusters</code>.
   * @alias module:model/Clusters
   */
  function Clusters() {
    _classCallCheck(this, Clusters);

    Clusters.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Clusters, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Clusters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Clusters} obj Optional instance to populate.
     * @return {module:model/Clusters} The populated <code>Clusters</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Clusters();

        if (data.hasOwnProperty('cluster_count')) {
          obj['cluster_count'] = _ApiClient["default"].convertToType(data['cluster_count'], 'Number');

          if ('cluster_count' !== 'clusterCount') {
            Object.defineProperty(obj, 'clusterCount', {
              get: function get() {
                return obj['cluster_count'];
              }
            });
          }
        }

        if (data.hasOwnProperty('clusters')) {
          obj['clusters'] = _ApiClient["default"].convertToType(data['clusters'], [_Cluster["default"]]);

          if ('clusters' !== 'clusters') {
            Object.defineProperty(obj, 'clusters', {
              get: function get() {
                return obj['clusters'];
              }
            });
          }
        }

        if (data.hasOwnProperty('next_page_cursor')) {
          obj['next_page_cursor'] = _ApiClient["default"].convertToType(data['next_page_cursor'], 'String');

          if ('next_page_cursor' !== 'nextPageCursor') {
            Object.defineProperty(obj, 'nextPageCursor', {
              get: function get() {
                return obj['next_page_cursor'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Clusters;
}();
/**
 * The total number of clusters
 * @member {Number} cluster_count
 */


Clusters.prototype['cluster_count'] = undefined;
/**
 * An array of clusters
 * @member {Array.<module:model/Cluster>} clusters
 */

Clusters.prototype['clusters'] = undefined;
/**
 * The next page cursor
 * @member {String} next_page_cursor
 */

Clusters.prototype['next_page_cursor'] = undefined;
var _default = Clusters;
exports["default"] = _default;