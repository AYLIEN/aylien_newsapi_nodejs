"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Location = _interopRequireDefault(require("./Location"));

var _RepresentativeStory = _interopRequireDefault(require("./RepresentativeStory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Cluster model module.
 * @module model/Cluster
 * @version 3.0.0
 */
var Cluster =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Cluster</code>.
   * @alias module:model/Cluster
   */
  function Cluster() {
    _classCallCheck(this, Cluster);

    Cluster.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Cluster, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Cluster</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Cluster} obj Optional instance to populate.
     * @return {module:model/Cluster} The populated <code>Cluster</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Cluster();

        if (data.hasOwnProperty('earliest_story')) {
          obj['earliest_story'] = _ApiClient["default"].convertToType(data['earliest_story'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('latest_story')) {
          obj['latest_story'] = _ApiClient["default"].convertToType(data['latest_story'], 'Date');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _Location["default"].constructFromObject(data['location']);
        }

        if (data.hasOwnProperty('representative_story')) {
          obj['representative_story'] = _RepresentativeStory["default"].constructFromObject(data['representative_story']);
        }

        if (data.hasOwnProperty('story_count')) {
          obj['story_count'] = _ApiClient["default"].convertToType(data['story_count'], 'Number');
        }

        if (data.hasOwnProperty('time')) {
          obj['time'] = _ApiClient["default"].convertToType(data['time'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Cluster;
}();
/**
 * Publication date of the earliest story in cluster
 * @member {Date} earliest_story
 */


Cluster.prototype['earliest_story'] = undefined;
/**
 * ID of the cluster which is a unique identification
 * @member {Number} id
 */

Cluster.prototype['id'] = undefined;
/**
 * Publication date of the latest story in cluster
 * @member {Date} latest_story
 */

Cluster.prototype['latest_story'] = undefined;
/**
 * @member {module:model/Location} location
 */

Cluster.prototype['location'] = undefined;
/**
 * @member {module:model/RepresentativeStory} representative_story
 */

Cluster.prototype['representative_story'] = undefined;
/**
 * Number of stories associated with the cluster
 * @member {Number} story_count
 */

Cluster.prototype['story_count'] = undefined;
/**
 * Time of the event
 * @member {Date} time
 */

Cluster.prototype['time'] = undefined;
var _default = Cluster;
exports["default"] = _default;