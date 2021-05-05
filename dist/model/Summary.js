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
 * The Summary model module.
 * @module model/Summary
 * @version 4.4.0
 */
var Summary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Summary</code>.
   * @alias module:model/Summary
   */
  function Summary() {
    _classCallCheck(this, Summary);

    Summary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Summary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Summary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Summary} obj Optional instance to populate.
     * @return {module:model/Summary} The populated <code>Summary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Summary();

        if (data.hasOwnProperty('sentences')) {
          obj['sentences'] = _ApiClient["default"].convertToType(data['sentences'], ['String']);

          if ('sentences' !== 'sentences') {
            Object.defineProperty(obj, 'sentences', {
              get: function get() {
                return obj['sentences'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Summary;
}();
/**
 * An array of the suggested summary sentences
 * @member {Array.<String>} sentences
 */


Summary.prototype['sentences'] = undefined;
var _default = Summary;
exports["default"] = _default;