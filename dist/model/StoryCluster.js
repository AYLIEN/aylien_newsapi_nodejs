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
 * The StoryCluster model module.
 * @module model/StoryCluster
 * @version 3.0.0
 */
var StoryCluster =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>StoryCluster</code>.
   * @alias module:model/StoryCluster
   */
  function StoryCluster() {
    _classCallCheck(this, StoryCluster);

    StoryCluster.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StoryCluster, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StoryCluster</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryCluster} obj Optional instance to populate.
     * @return {module:model/StoryCluster} The populated <code>StoryCluster</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StoryCluster();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('phrases')) {
          obj['phrases'] = _ApiClient["default"].convertToType(data['phrases'], ['String']);
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('stories')) {
          obj['stories'] = _ApiClient["default"].convertToType(data['stories'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return StoryCluster;
}();
/**
 * A unique identification for the cluster
 * @member {Number} id
 */


StoryCluster.prototype['id'] = undefined;
/**
 * Suggested labels for the cluster
 * @member {Array.<String>} phrases
 */

StoryCluster.prototype['phrases'] = undefined;
/**
 * The cluster score
 * @member {Number} score
 */

StoryCluster.prototype['score'] = undefined;
/**
 * Size of the cluster
 * @member {Number} size
 */

StoryCluster.prototype['size'] = undefined;
/**
 * Story ids which are in the cluster
 * @member {Array.<Number>} stories
 */

StoryCluster.prototype['stories'] = undefined;
var _default = StoryCluster;
exports["default"] = _default;