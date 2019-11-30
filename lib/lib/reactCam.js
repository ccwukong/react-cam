"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Camera =
/*#__PURE__*/
function (_Component) {
  _inherits(Camera, _Component);

  function Camera(props) {
    var _this;

    _classCallCheck(this, Camera);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Camera).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "success", function (stream) {
      var video = _this.camRef.current;
      video.srcObject = stream;
      video.play();
    });

    _defineProperty(_assertThisInitialized(_this), "error", function (err) {
      var onError = _this.props.onError;

      if (onError) {
        onError(err);
      } else {
        console.log(err);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "capture", function () {
      var capture = _this.props.capture;
      var canvas = _this.canvasRef.current;
      var video = _this.camRef.current;
      var context = canvas.getContext('2d');
      context.drawImage(video, 0, 0);
      capture(canvas.toDataURL('image/jpeg'));
    });

    var _this$props = _this.props,
        width = _this$props.width,
        height = _this$props.height,
        front = _this$props.front;
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: {
          ideal: width
        },
        height: {
          ideal: height
        },
        facingMode: front ? 'user' : 'environment'
      }
    }).then(_this.success)["catch"](_this.error);
    _this.camRef = _react["default"].createRef();
    _this.canvasRef = _react["default"].createRef();
    return _this;
  }

  _createClass(Camera, [{
    key: "render",
    value: function render() {
      var defaultColor = '#2acef5';
      var _this$props2 = this.props,
          showFocus = _this$props2.showFocus,
          btnColor = _this$props2.btnColor,
          width = _this$props2.width,
          height = _this$props2.height,
          focusWidth = _this$props2.focusWidth,
          focusHeight = _this$props2.focusHeight;
      return _react["default"].createElement("div", {
        className: "camera-container"
      }, _react["default"].createElement("video", {
        id: "video",
        width: width,
        height: height,
        autoPlay: true,
        playsInline: true,
        ref: this.camRef
      }), showFocus ? _react["default"].createElement("div", {
        className: "camera-focus",
        style: {
          borderColor: btnColor || defaultColor,
          width: focusWidth || '80%',
          height: focusHeight || '50%'
        }
      }) : null, _react["default"].createElement("canvas", {
        id: "canvas",
        width: width,
        height: height,
        ref: this.canvasRef,
        style: {
          display: 'none'
        }
      }));
    }
  }]);

  return Camera;
}(_react.Component);

Camera.propTypes = {
  front: _propTypes["default"].bool,
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  capture: _propTypes["default"].func.isRequired,
  showFocus: _propTypes["default"].bool,
  btnColor: _propTypes["default"].string,
  focusWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  focusHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onError: _propTypes["default"].func
};
var _default = Camera;
exports["default"] = _default;