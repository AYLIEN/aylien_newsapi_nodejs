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
 * The EntityMentionIndex model module.
 * @module model/EntityMentionIndex
 * @version 5.0.0
 */
var EntityMentionIndex = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntityMentionIndex</code>.
   * @alias module:model/EntityMentionIndex
   * @param end {Number} End index of a single entity mention in the text (counting from 0)
   * @param start {Number} Start index of a single entity mention in the text (counting from 0)
   */
  function EntityMentionIndex(end, start) {
    _classCallCheck(this, EntityMentionIndex);

    EntityMentionIndex.initialize(this, end, start);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntityMentionIndex, null, [{
    key: "initialize",
    value: function initialize(obj, end, start) {
      obj['end'] = end;
      obj['start'] = start;
    }
    /**
     * Constructs a <code>EntityMentionIndex</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityMentionIndex} obj Optional instance to populate.
     * @return {module:model/EntityMentionIndex} The populated <code>EntityMentionIndex</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntityMentionIndex();

        if (data.hasOwnProperty('end')) {
          obj['end'] = _ApiClient["default"].convertToType(data['end'], 'Number');

          if ('end' !== 'end') {
            Object.defineProperty(obj, 'end', {
              get: function get() {
                return obj['end'];
              }
            });
          }
        }

        if (data.hasOwnProperty('start')) {
          obj['start'] = _ApiClient["default"].convertToType(data['start'], 'Number');

          if ('start' !== 'start') {
            Object.defineProperty(obj, 'start', {
              get: function get() {
                return obj['start'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return EntityMentionIndex;
}();
/**
 * End index of a single entity mention in the text (counting from 0)
 * @member {Number} end
 */


EntityMentionIndex.prototype['end'] = undefined;
/**
 * Start index of a single entity mention in the text (counting from 0)
 * @member {Number} start
 */

EntityMentionIndex.prototype['start'] = undefined;
var _default = EntityMentionIndex;
exports["default"] = _default;