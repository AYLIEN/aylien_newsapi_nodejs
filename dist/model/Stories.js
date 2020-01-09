"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Story = _interopRequireDefault(require("./Story"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Stories model module.
 * @module model/Stories
 * @version 3.0.0
 */
var Stories =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Stories</code>.
   * @alias module:model/Stories
   */
  function Stories() {
    _classCallCheck(this, Stories);

    Stories.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Stories, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Stories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stories} obj Optional instance to populate.
     * @return {module:model/Stories} The populated <code>Stories</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Stories();

        if (data.hasOwnProperty('next_page_cursor')) {
          obj['next_page_cursor'] = _ApiClient["default"].convertToType(data['next_page_cursor'], 'String');
        }

        if (data.hasOwnProperty('stories')) {
          obj['stories'] = _ApiClient["default"].convertToType(data['stories'], [_Story["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Stories;
}();
/**
 * The next page cursor
 * @member {String} next_page_cursor
 */


Stories.prototype['next_page_cursor'] = undefined;
/**
 * An array of stories
 * @member {Array.<module:model/Story>} stories
 */

Stories.prototype['stories'] = undefined;
var _default = Stories;
exports["default"] = _default;