/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ButtonLoader = exports.TokenBridge = exports.DestroyAccountButton = exports.UpdatePasswordForm = exports.OAuthSignInButton = exports.RequestPasswordResetForm = exports.SignOutButton = exports.EmailSignUpForm = exports.EmailSignInForm = exports.AuthGlobals = undefined;

	var _AuthGlobals2 = __webpack_require__(55);

	var _AuthGlobals3 = _interopRequireDefault(_AuthGlobals2);

	var _EmailSignInForm2 = __webpack_require__(57);

	var _EmailSignInForm3 = _interopRequireDefault(_EmailSignInForm2);

	var _EmailSignUpForm2 = __webpack_require__(58);

	var _EmailSignUpForm3 = _interopRequireDefault(_EmailSignUpForm2);

	var _SignOutButton2 = __webpack_require__(62);

	var _SignOutButton3 = _interopRequireDefault(_SignOutButton2);

	var _RequestPasswordResetForm2 = __webpack_require__(61);

	var _RequestPasswordResetForm3 = _interopRequireDefault(_RequestPasswordResetForm2);

	var _OAuthSignInButton2 = __webpack_require__(60);

	var _OAuthSignInButton3 = _interopRequireDefault(_OAuthSignInButton2);

	var _UpdatePasswordForm2 = __webpack_require__(63);

	var _UpdatePasswordForm3 = _interopRequireDefault(_UpdatePasswordForm2);

	var _DestroyAccountButton2 = __webpack_require__(56);

	var _DestroyAccountButton3 = _interopRequireDefault(_DestroyAccountButton2);

	var _TokenBridge2 = __webpack_require__(18);

	var _TokenBridge3 = _interopRequireDefault(_TokenBridge2);

	var _ButtonLoader2 = __webpack_require__(14);

	var _ButtonLoader3 = _interopRequireDefault(_ButtonLoader2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.AuthGlobals = _AuthGlobals3.default;
	exports.EmailSignInForm = _EmailSignInForm3.default;
	exports.EmailSignUpForm = _EmailSignUpForm3.default;
	exports.SignOutButton = _SignOutButton3.default;
	exports.RequestPasswordResetForm = _RequestPasswordResetForm3.default;
	exports.OAuthSignInButton = _OAuthSignInButton3.default;
	exports.UpdatePasswordForm = _UpdatePasswordForm3.default;
	exports.DestroyAccountButton = _DestroyAccountButton3.default;
	exports.TokenBridge = _TokenBridge3.default;
	exports.ButtonLoader = _ButtonLoader3.default;

	// "export * from './views/bootstrap' is broken in babel 6

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = react;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ./index;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = react-redux;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = immutable;

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	var _ErrorList = __webpack_require__(59);

	var _ErrorList2 = _interopRequireDefault(_ErrorList);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseModal = (function (_React$Component) {
	  _inherits(BaseModal, _React$Component);

	  function BaseModal() {
	    _classCallCheck(this, BaseModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseModal).apply(this, arguments));
	  }

	  _createClass(BaseModal, [{
	    key: "close",
	    value: function close() {
	      this.props.dispatch(this.props.closeAction());
	    }
	  }, {
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "getErrorList",
	    value: function getErrorList() {
	      var _props$errorAddr = _toArray(this.props.errorAddr);

	      var base = _props$errorAddr[0];

	      var rest = _props$errorAddr.slice(1);

	      return _react2.default.createElement(_ErrorList2.default, { errors: this.props.auth.getIn([base, this.getEndpoint()].concat(_toConsumableArray(rest))) });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var body = this.props.errorAddr ? this.getErrorList() : this.props.children;

	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        {
	          show: this.props.show,
	          className: "redux-auth-modal " + this.props.containerClass,
	          onHide: this.close.bind(this) },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            this.props.title
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          body
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            {
	              onClick: this.close.bind(this),
	              className: this.props.containerClass + "-close" },
	            this.props.closeBtnLabel
	          )
	        )
	      );
	    }
	  }]);

	  return BaseModal;
	})(_react2.default.Component);

	BaseModal.propTypes = {
	  show: _react.PropTypes.bool,
	  errorAddr: _react.PropTypes.array,
	  closeBtnLabel: _react.PropTypes.string
	};
	BaseModal.defaultProps = {
	  show: false,
	  errorAddr: null,
	  closeBtnLabel: "Ok"
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(BaseModal);

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = react-bootstrap;

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	var _reactLoader = __webpack_require__(24);

	var _reactLoader2 = _interopRequireDefault(_reactLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonLoader = (function (_React$Component) {
	  _inherits(ButtonLoader, _React$Component);

	  function ButtonLoader() {
	    _classCallCheck(this, ButtonLoader);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonLoader).apply(this, arguments));
	  }

	  _createClass(ButtonLoader, [{
	    key: "renderIcon",
	    value: function renderIcon() {
	      var icon = undefined;

	      if (this.props.loading) {
	        var spinColor = !this.props.bsStyle || this.props.bsStyle === "default" ? this.props.spinColorDark : this.props.spinColorLight;

	        icon = _react2.default.createElement(_reactLoader2.default, _extends({ ref: "spinner" }, this.props.spinConfig, { color: spinColor, loaded: false }));
	      } else {
	        icon = this.props.icon;
	      }

	      return _react2.default.createElement(
	        "div",
	        { style: {
	            position: "relative",
	            display: "inline-block",
	            marginRight: "6px",
	            width: "10px",
	            height: "10px",
	            top: "1px"
	          } },
	        icon
	      );
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Button,
	        {
	          onClick: this.props.onClick,
	          disabled: this.props.disabled || this.props.loading,
	          bsStyle: this.props.bsStyle,
	          className: this.props.className,
	          type: this.props.type,
	          style: this.props.style,
	          bsSize: this.props.bsSize },
	        this.renderIcon(),
	        " ",
	        this.props.children
	      );
	    }
	  }]);

	  return ButtonLoader;
	})(_react2.default.Component);

	ButtonLoader.propTypes = {
	  icon: _react.PropTypes.node,
	  loading: _react.PropTypes.bool,
	  spinConfig: _react.PropTypes.object,
	  spinColorDark: _react.PropTypes.string,
	  spinColorLight: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  onClick: _react.PropTypes.func.isRequired,
	  style: _react.PropTypes.object
	};
	ButtonLoader.defaultProps = {
	  icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "heart" }),
	  loading: false,
	  spinConfig: {
	    lines: 10,
	    length: 4,
	    width: 2,
	    radius: 3
	  },
	  spinColorDark: "#444",
	  spinColorLight: "#fff",
	  children: _react2.default.createElement(
	    "span",
	    null,
	    "Submit"
	  ),
	  style: {}
	};
	exports.default = ButtonLoader;

/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TokenBridge = (function (_React$Component) {
	  _inherits(TokenBridge, _React$Component);

	  function TokenBridge() {
	    _classCallCheck(this, TokenBridge);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TokenBridge).apply(this, arguments));
	  }

	  _createClass(TokenBridge, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("script", { id: "token-bridge",
	        type: "application/json",
	        dangerouslySetInnerHTML: { __html: this.props.initialCredentials } });
	    }
	  }]);

	  return TokenBridge;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;

	  var headers = auth.getIn(["server", "headers"]);

	  return {
	    initialCredentials: headers && JSON.stringify({
	      user: auth.getIn(["server", "user"]),
	      mustResetPassword: auth.getIn(["server", "mustResetPassword"]),
	      firstTimeLogin: auth.getIn(["server", "firstTimeLogin"]),
	      currentEndpointKey: auth.getIn(["configure", "currentEndpointKey"]),
	      defaultEndpointKey: auth.getIn(["configure", "defaultEndpointKey"]),
	      headers: headers
	    })
	  };
	})(TokenBridge);

/***/ },
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AuthInput = (function (_React$Component) {
	  _inherits(AuthInput, _React$Component);

	  function AuthInput() {
	    _classCallCheck(this, AuthInput);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AuthInput).apply(this, arguments));
	  }

	  _createClass(AuthInput, [{
	    key: "handleInput",
	    value: function handleInput(ev) {
	      this.props.onChange(ev.target.value);
	    }
	  }, {
	    key: "renderErrorList",
	    value: function renderErrorList() {
	      var _this2 = this;

	      if (this.props.errors.size) {
	        return _react2.default.createElement(
	          "div",
	          { className: "auth-error-message has-error" },
	          this.props.errors.map(function (err, i) {
	            return _react2.default.createElement(
	              "p",
	              { className: "control-label inline-error-item",
	                style: { paddingLeft: "20px", position: "relative", marginBottom: "28px" },
	                key: i },
	              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign",
	                style: {
	                  position: "absolute",
	                  left: 0,
	                  top: 2
	                }
	              }),
	              " ",
	              _this2.props.label,
	              " ",
	              err
	            );
	          })
	        );
	      } else {
	        return _react2.default.createElement("span", null);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_reactBootstrap.Input, _extends({}, this.props, {
	          bsStyle: this.props.errors.size ? "error" : null,
	          onChange: this.handleInput.bind(this) })),
	        this.renderErrorList()
	      );
	    }
	  }]);

	  return AuthInput;
	})(_react2.default.Component);

	AuthInput.propTypes = {
	  label: _react.PropTypes.string,
	  value: _react.PropTypes.string,
	  errors: _react.PropTypes.object
	};
	AuthInput.defaultProps = {
	  label: "",
	  value: null,
	  errors: _immutable2.default.fromJS([])
	};
	exports.default = AuthInput;

/***/ },
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	module.exports = react-loader;

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _EmailSignInSuccessModal = __webpack_require__(67);

	var _EmailSignInSuccessModal2 = _interopRequireDefault(_EmailSignInSuccessModal);

	var _EmailSignInErrorModal = __webpack_require__(66);

	var _EmailSignInErrorModal2 = _interopRequireDefault(_EmailSignInErrorModal);

	var _OAuthSignInSuccessModal = __webpack_require__(73);

	var _OAuthSignInSuccessModal2 = _interopRequireDefault(_OAuthSignInSuccessModal);

	var _OAuthSignInErrorModal = __webpack_require__(72);

	var _OAuthSignInErrorModal2 = _interopRequireDefault(_OAuthSignInErrorModal);

	var _EmailSignUpSuccessModal = __webpack_require__(69);

	var _EmailSignUpSuccessModal2 = _interopRequireDefault(_EmailSignUpSuccessModal);

	var _EmailSignUpErrorModal = __webpack_require__(68);

	var _EmailSignUpErrorModal2 = _interopRequireDefault(_EmailSignUpErrorModal);

	var _SignOutSuccessModal = __webpack_require__(78);

	var _SignOutSuccessModal2 = _interopRequireDefault(_SignOutSuccessModal);

	var _SignOutErrorModal = __webpack_require__(77);

	var _SignOutErrorModal2 = _interopRequireDefault(_SignOutErrorModal);

	var _FirstTimeLoginSuccessModal = __webpack_require__(71);

	var _FirstTimeLoginSuccessModal2 = _interopRequireDefault(_FirstTimeLoginSuccessModal);

	var _FirstTimeLoginErrorModal = __webpack_require__(70);

	var _FirstTimeLoginErrorModal2 = _interopRequireDefault(_FirstTimeLoginErrorModal);

	var _RequestPasswordResetErrorModal = __webpack_require__(75);

	var _RequestPasswordResetErrorModal2 = _interopRequireDefault(_RequestPasswordResetErrorModal);

	var _RequestPasswordResetSuccessModal = __webpack_require__(76);

	var _RequestPasswordResetSuccessModal2 = _interopRequireDefault(_RequestPasswordResetSuccessModal);

	var _UpdatePasswordErrorModal = __webpack_require__(79);

	var _UpdatePasswordErrorModal2 = _interopRequireDefault(_UpdatePasswordErrorModal);

	var _UpdatePasswordSuccessModal = __webpack_require__(80);

	var _UpdatePasswordSuccessModal2 = _interopRequireDefault(_UpdatePasswordSuccessModal);

	var _DestroyAccountErrorModal = __webpack_require__(64);

	var _DestroyAccountErrorModal2 = _interopRequireDefault(_DestroyAccountErrorModal);

	var _DestroyAccountSuccessModal = __webpack_require__(65);

	var _DestroyAccountSuccessModal2 = _interopRequireDefault(_DestroyAccountSuccessModal);

	var _PasswordResetSuccessModal = __webpack_require__(74);

	var _PasswordResetSuccessModal2 = _interopRequireDefault(_PasswordResetSuccessModal);

	var _TokenBridge = __webpack_require__(18);

	var _TokenBridge2 = _interopRequireDefault(_TokenBridge);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AuthGlobals = (function (_React$Component) {
	  _inherits(AuthGlobals, _React$Component);

	  function AuthGlobals() {
	    _classCallCheck(this, AuthGlobals);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AuthGlobals).apply(this, arguments));
	  }

	  _createClass(AuthGlobals, [{
	    key: "render",
	    value: function render() {
	      var showEmailSignInSuccess = this.props.emailSignInSuccessEnabled && this.props.auth.getIn(["ui", "emailSignInSuccessModalVisible"]);

	      var showEmailSignInError = this.props.emailSignInErrorEnabled && this.props.auth.getIn(["ui", "emailSignInErrorModalVisible"]);

	      var showEmailSignUpSuccess = this.props.emailSignUpSuccessEnabled && this.props.auth.getIn(["ui", "emailSignUpSuccessModalVisible"]);

	      var showEmailSignUpError = this.props.emailSignUpErrorEnabled && this.props.auth.getIn(["ui", "emailSignUpErrorModalVisible"]);

	      var showSignOutSuccess = this.props.signOutSuccessEnabled && this.props.auth.getIn(["ui", "signOutSuccessModalVisible"]);

	      var showSignOutError = this.props.signOutErrorEnabled && this.props.auth.getIn(["ui", "signOutErrorModalVisible"]);

	      var showFirstTimeLoginSuccess = this.props.firstTimeLoginSuccessEnabled && this.props.auth.getIn(["ui", "firstTimeLoginSuccessModalVisible"]);

	      var showFirstTimeLoginError = this.props.firstTimeLoginErrorEnabled && this.props.auth.getIn(["ui", "firstTimeLoginErrorModalVisible"]);

	      var showRequestPasswordResetError = this.props.requestPasswordResetErrorEnabled && this.props.auth.getIn(["ui", "requestPasswordResetErrorModalVisible"]);

	      var showRequestPasswordResetSuccess = this.props.requestPasswordResetSuccessEnabled && this.props.auth.getIn(["ui", "requestPasswordResetSuccessModalVisible"]);

	      var showOAuthSignInSuccess = this.props.oAuthSignInSuccessEnabled && this.props.auth.getIn(["ui", "oAuthSignInSuccessModalVisible"]);

	      var showOAuthSignInError = this.props.oAuthSignInErrorEnabled && this.props.auth.getIn(["ui", "oAuthSignInErrorModalVisible"]);

	      var updatePasswordSuccess = this.props.updatePasswordSuccessEnabled && this.props.auth.getIn(["ui", "updatePasswordSuccessModalVisible"]);

	      var updatePasswordError = this.props.updatePasswordErrorEnabled && this.props.auth.getIn(["ui", "updatePasswordErrorModalVisible"]);

	      var destroyAccountSuccess = this.props.destroyAccountSuccessEnabled && this.props.auth.getIn(["ui", "destroyAccountSuccessModalVisible"]);

	      var destroyAccountError = this.props.destroyAccountErrorEnabled && this.props.auth.getIn(["ui", "destroyAccountErrorModalVisible"]);

	      var passwordResetSuccess = this.props.passwordResetSuccessEnabled && this.props.auth.getIn(["ui", "passwordResetSuccessModalVisible"]);

	      //let passwordResetError = (
	      //this.props.passwordResetErrorEnabled &&
	      //this.props.auth.getIn(["ui", "passwordResetErrorModalVisible"])
	      //);

	      return _react2.default.createElement(
	        "div",
	        { id: "auth-modals" },
	        _react2.default.createElement(_EmailSignInSuccessModal2.default, { show: showEmailSignInSuccess }),
	        _react2.default.createElement(_EmailSignInErrorModal2.default, { show: showEmailSignInError }),
	        _react2.default.createElement(_OAuthSignInSuccessModal2.default, { show: showOAuthSignInSuccess }),
	        _react2.default.createElement(_OAuthSignInErrorModal2.default, { show: showOAuthSignInError }),
	        _react2.default.createElement(_EmailSignUpSuccessModal2.default, { show: showEmailSignUpSuccess }),
	        _react2.default.createElement(_EmailSignUpErrorModal2.default, { show: showEmailSignUpError }),
	        _react2.default.createElement(_SignOutSuccessModal2.default, { show: showSignOutSuccess }),
	        _react2.default.createElement(_SignOutErrorModal2.default, { show: showSignOutError }),
	        _react2.default.createElement(_FirstTimeLoginSuccessModal2.default, { show: showFirstTimeLoginSuccess }),
	        _react2.default.createElement(_FirstTimeLoginErrorModal2.default, { show: showFirstTimeLoginError }),
	        _react2.default.createElement(_RequestPasswordResetErrorModal2.default, { show: showRequestPasswordResetError }),
	        _react2.default.createElement(_RequestPasswordResetSuccessModal2.default, { show: showRequestPasswordResetSuccess }),
	        _react2.default.createElement(_UpdatePasswordErrorModal2.default, { show: updatePasswordError }),
	        _react2.default.createElement(_UpdatePasswordSuccessModal2.default, { show: updatePasswordSuccess }),
	        _react2.default.createElement(_DestroyAccountErrorModal2.default, { show: destroyAccountError }),
	        _react2.default.createElement(_DestroyAccountSuccessModal2.default, { show: destroyAccountSuccess }),
	        _react2.default.createElement(_PasswordResetSuccessModal2.default, { show: passwordResetSuccess }),
	        _react2.default.createElement(_TokenBridge2.default, null)
	      );
	    }
	  }]);

	  return AuthGlobals;
	})(_react2.default.Component);

	AuthGlobals.propTypes = {
	  signOutSuccessEnabled: _react.PropTypes.bool,
	  signOutErrorEnabled: _react.PropTypes.bool,
	  emailSignInSuccessEnabled: _react.PropTypes.bool,
	  emailSignInErrorEnabled: _react.PropTypes.bool,
	  oAuthSignInSuccessEnabled: _react.PropTypes.bool,
	  oAuthSignInErrorEnabled: _react.PropTypes.bool,
	  emailSignUpSuccessEnabled: _react.PropTypes.bool,
	  emailSignUpErrorEnabled: _react.PropTypes.bool,
	  firstTimeLoginSuccessEnabled: _react.PropTypes.bool,
	  firstTimeLoginErrorEnabled: _react.PropTypes.bool,
	  requestPasswordResetErrorEnabled: _react.PropTypes.bool,
	  requestPasswordResetSuccessEnabled: _react.PropTypes.bool,
	  updatePasswordErrorEnabled: _react.PropTypes.bool,
	  updatePasswordSuccessEnabled: _react.PropTypes.bool,
	  destroyAccountErrorEnabled: _react.PropTypes.bool,
	  destroyAccountSuccessEnabled: _react.PropTypes.bool,
	  passwordResetSuccessEnabled: _react.PropTypes.bool,
	  passwordResetErrorEnabled: _react.PropTypes.bool
	};
	AuthGlobals.defaultProps = {
	  signOutSuccessEnabled: true,
	  signOutErrorEnabled: true,
	  emailSignInSuccessEnabled: true,
	  emailSignInErrorEnabled: true,
	  oAuthSignInSuccessEnabled: true,
	  oAuthSignInErrorEnabled: true,
	  emailSignUpSuccessEnabled: true,
	  emailSignUpErrorEnabled: true,
	  firstTimeLoginSuccessEnabled: true,
	  firstTimeLoginErrorEnabled: true,
	  requestPasswordResetErrorEnabled: true,
	  requestPasswordResetSuccessEnabled: true,
	  updatePasswordErrorEnabled: true,
	  updatePasswordSuccessEnabled: true,
	  destroyAccountErrorEnabled: true,
	  destroyAccountSuccessEnabled: true,
	  passwordResetSuccessEnabled: true,
	  passwordResetErrorEnabled: true
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(AuthGlobals);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ButtonLoader = __webpack_require__(14);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _destroyAccount = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	var _reactBootstrap = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DestroyAccountButton = (function (_React$Component) {
	  _inherits(DestroyAccountButton, _React$Component);

	  function DestroyAccountButton() {
	    _classCallCheck(this, DestroyAccountButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DestroyAccountButton).apply(this, arguments));
	  }

	  _createClass(DestroyAccountButton, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleClick",
	    value: function handleClick() {
	      this.props.dispatch((0, _destroyAccount.destroyAccount)(this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
	      return _react2.default.createElement(_ButtonLoader2.default, _extends({
	        loading: this.props.auth.getIn(["destroyAccount", this.getEndpoint(), "loading"]),
	        icon: this.props.icon,
	        disabled: disabled,
	        className: "destroy-account-submit",
	        onClick: this.handleClick.bind(this)
	      }, this.props));
	    }
	  }]);

	  return DestroyAccountButton;
	})(_react2.default.Component);

	DestroyAccountButton.propTypes = {
	  endpoint: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  icon: _react.PropTypes.node
	};
	DestroyAccountButton.defaultProps = {
	  children: _react2.default.createElement(
	    "span",
	    null,
	    "Destroy Account"
	  ),
	  icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "remove" })
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(DestroyAccountButton);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ButtonLoader = __webpack_require__(14);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _Input = __webpack_require__(21);

	var _Input2 = _interopRequireDefault(_Input);

	var _emailSignIn = __webpack_require__(2);

	var _reactBootstrap = __webpack_require__(10);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignInForm = (function (_React$Component) {
	  _inherits(EmailSignInForm, _React$Component);

	  function EmailSignInForm() {
	    _classCallCheck(this, EmailSignInForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignInForm).apply(this, arguments));
	  }

	  _createClass(EmailSignInForm, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _emailSignIn.emailSignInFormUpdate)(this.getEndpoint(), key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      var formData = this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form"]).toJS();
	      this.props.dispatch((0, _emailSignIn.emailSignIn)(formData, this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = this.props.auth.getIn(["user", "isSignedIn"]) || this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"]);

	      return _react2.default.createElement(
	        "form",
	        { className: "redux-auth email-sign-in-form clearfix",
	          onSubmit: this.handleSubmit.bind(this) },
	        _react2.default.createElement(_Input2.default, _extends({ type: "text",
	          className: "email-sign-in-email",
	          label: "Email",
	          placeholder: "Email",
	          disabled: disabled,
	          value: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "email"]),
	          errors: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "email"]),
	          onChange: this.handleInput.bind(this, "email")
	        }, this.props.inputProps.email)),
	        _react2.default.createElement(_Input2.default, _extends({ type: "password",
	          label: "Password",
	          className: "email-sign-in-password",
	          placeholder: "Password",
	          disabled: disabled,
	          value: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "password"]),
	          errors: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "password"]),
	          onChange: this.handleInput.bind(this, "password")
	        }, this.props.inputProps.password)),
	        _react2.default.createElement(
	          _ButtonLoader2.default,
	          _extends({ loading: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"]),
	            type: "submit",
	            icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "log-in" }),
	            className: "email-sign-in-submit pull-right",
	            disabled: disabled,
	            onClick: this.handleSubmit.bind(this)
	          }, this.props.inputProps.submit),
	          "Sign In"
	        )
	      );
	    }
	  }]);

	  return EmailSignInForm;
	})(_react2.default.Component);

	EmailSignInForm.propTypes = {
	  endpoint: _react.PropTypes.string,
	  inputProps: _react.PropTypes.shape({
	    email: _react.PropTypes.object,
	    password: _react.PropTypes.object,
	    submit: _react.PropTypes.object
	  })
	};
	EmailSignInForm.defaultProps = {
	  inputProps: {
	    email: {},
	    password: {},
	    submit: {}
	  }
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(EmailSignInForm);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(21);

	var _Input2 = _interopRequireDefault(_Input);

	var _ButtonLoader = __webpack_require__(14);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _emailSignUp = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	var _reactBootstrap = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignUpForm = (function (_React$Component) {
	  _inherits(EmailSignUpForm, _React$Component);

	  function EmailSignUpForm() {
	    _classCallCheck(this, EmailSignUpForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignUpForm).apply(this, arguments));
	  }

	  _createClass(EmailSignUpForm, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _emailSignUp.emailSignUpFormUpdate)(this.getEndpoint(), key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      var formData = this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form"]).toJS();
	      this.props.dispatch((0, _emailSignUp.emailSignUp)(formData, this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = this.props.auth.getIn(["user", "isSignedIn"]) || this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"]);

	      return _react2.default.createElement(
	        "form",
	        { className: "redux-auth email-sign-up-form clearfix",
	          onSubmit: this.handleSubmit.bind(this) },
	        _react2.default.createElement(_Input2.default, _extends({ type: "text",
	          label: "Email",
	          placeholder: "Email",
	          className: "email-sign-up-email",
	          disabled: disabled,
	          value: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "email"]),
	          errors: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "email"]),
	          onChange: this.handleInput.bind(this, "email")
	        }, this.props.inputProps.email)),
	        _react2.default.createElement(_Input2.default, _extends({ type: "password",
	          label: "Password",
	          placeholder: "Password",
	          className: "email-sign-up-password",
	          disabled: disabled,
	          value: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password"]),
	          errors: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password"]),
	          onChange: this.handleInput.bind(this, "password")
	        }, this.props.inputProps.password)),
	        _react2.default.createElement(_Input2.default, _extends({ type: "password",
	          label: "Password Confirmation",
	          placeholder: "Password Confirmation",
	          className: "email-sign-up-password-confirmation",
	          disabled: disabled,
	          value: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password_confirmation"]),
	          errors: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password_confirmation"]),
	          onChange: this.handleInput.bind(this, "password_confirmation")
	        }, this.props.inputProps.passwordConfirmation)),
	        _react2.default.createElement(
	          _ButtonLoader2.default,
	          _extends({ loading: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"]),
	            type: "submit",
	            className: "email-sign-up-submit pull-right",
	            icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "send" }),
	            disabled: disabled,
	            onClick: this.handleSubmit.bind(this)
	          }, this.props.inputProps.submit),
	          "Sign Up"
	        )
	      );
	    }
	  }]);

	  return EmailSignUpForm;
	})(_react2.default.Component);

	EmailSignUpForm.propTypes = {
	  endpoint: _react.PropTypes.string,
	  inputProps: _react.PropTypes.shape({
	    email: _react.PropTypes.object,
	    password: _react.PropTypes.object,
	    passwordConfirmation: _react.PropTypes.object,
	    submit: _react.PropTypes.object
	  })
	};
	EmailSignUpForm.defaultProps = {
	  inputProps: {
	    email: {},
	    password: {},
	    submit: {}
	  }
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(EmailSignUpForm);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ErrorList = (function (_React$Component) {
	  _inherits(ErrorList, _React$Component);

	  function ErrorList() {
	    _classCallCheck(this, ErrorList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ErrorList).apply(this, arguments));
	  }

	  _createClass(ErrorList, [{
	    key: "renderErrorList",
	    value: function renderErrorList() {
	      var errorCount = (this.props.errors || _immutable2.default.fromJS([])).size;

	      if (errorCount > 0) {
	        // pluralize message
	        var errorWord = "error";
	        errorWord += errorCount === 1 ? "" : "s";

	        return _react2.default.createElement(
	          "div",
	          { className: "has-error" },
	          _react2.default.createElement(
	            "p",
	            null,
	            "Please correct the following ",
	            errorWord,
	            ":"
	          ),
	          this.props.errors.map(function (err, i) {
	            return _react2.default.createElement(
	              "p",
	              {
	                key: i,
	                className: "control-label modal-error-item",
	                style: { paddingLeft: "20px", position: "relative" } },
	              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign",
	                style: { position: "absolute", left: 0, top: 2 } }),
	              " ",
	              err
	            );
	          })
	        );
	      } else {
	        return _react2.default.createElement(
	          "p",
	          null,
	          _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign" }),
	          " There was an error processing this form. Please check each field and try again."
	        );
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "auth-error-message" },
	        this.renderErrorList()
	      );
	    }
	  }]);

	  return ErrorList;
	})(_react2.default.Component);

	ErrorList.propTypes = {
	  errors: _react.PropTypes.object
	};
	ErrorList.defaultProps = {
	  errors: _immutable2.default.fromJS([])
	};
	exports.default = ErrorList;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _ButtonLoader = __webpack_require__(14);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _reactBootstrap = __webpack_require__(10);

	var _oauthSignIn = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// hook for rewire
	var oAuthSignIn = _oauthSignIn.oAuthSignIn;

	var OAuthSignInButton = (function (_React$Component) {
	  _inherits(OAuthSignInButton, _React$Component);

	  function OAuthSignInButton() {
	    _classCallCheck(this, OAuthSignInButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(OAuthSignInButton).apply(this, arguments));
	  }

	  _createClass(OAuthSignInButton, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleClick",
	    value: function handleClick() {
	      this.props.dispatch(oAuthSignIn({
	        provider: this.props.provider,
	        params: this.props.signInParams,
	        endpointKey: this.getEndpoint()
	      }));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = this.props.auth.getIn(["user", "isSignedIn"]);
	      var loading = this.props.auth.getIn(["ui", "oAuthSignInLoadingProvider"]) === this.props.provider && this.props.auth.getIn(["oAuthSignIn", this.getEndpoint(), "loading"]);

	      return _react2.default.createElement(_ButtonLoader2.default, _extends({
	        loading: loading,
	        icon: this.props.icon,
	        className: "oauth-sign-in-submit",
	        disabled: disabled,
	        onClick: this.handleClick.bind(this)
	      }, this.props));
	    }
	  }]);

	  return OAuthSignInButton;
	})(_react2.default.Component);

	OAuthSignInButton.propTypes = {
	  provider: _react.PropTypes.string.isRequired,
	  label: _react.PropTypes.string,
	  signInParams: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  icon: _react.PropTypes.node
	};
	OAuthSignInButton.defaultProps = {
	  signInParams: {},
	  children: _react2.default.createElement(
	    "span",
	    null,
	    "OAuth Sign In"
	  ),
	  icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "log-in" })
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(OAuthSignInButton);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(21);

	var _Input2 = _interopRequireDefault(_Input);

	var _ButtonLoader = __webpack_require__(14);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _reactBootstrap = __webpack_require__(10);

	var _reactRedux = __webpack_require__(3);

	var _requestPasswordReset = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RequestPasswordResetForm = (function (_React$Component) {
	  _inherits(RequestPasswordResetForm, _React$Component);

	  function RequestPasswordResetForm() {
	    _classCallCheck(this, RequestPasswordResetForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RequestPasswordResetForm).apply(this, arguments));
	  }

	  _createClass(RequestPasswordResetForm, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _requestPasswordReset.requestPasswordResetFormUpdate)(this.getEndpoint(), key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      var formData = this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form"]).toJS();
	      this.props.dispatch((0, _requestPasswordReset.requestPasswordReset)(formData, this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var loading = this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "loading"]);
	      var inputDisabled = this.props.auth.getIn(["user", "isSignedIn"]);
	      var submitDisabled = !this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form", "email"]);

	      return _react2.default.createElement(
	        "form",
	        {
	          className: "redux-auth request-password-reset-form clearfix",
	          onSubmit: this.handleSubmit.bind(this) },
	        _react2.default.createElement(_Input2.default, _extends({
	          type: "text",
	          label: "Email Address",
	          className: "request-password-reset-email",
	          placeholder: "Email Address",
	          disabled: loading || inputDisabled,
	          value: this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form", "email"]),
	          errors: this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "errors", "email"]),
	          onChange: this.handleInput.bind(this, "email")
	        }, this.props.inputProps.email)),
	        _react2.default.createElement(
	          _ButtonLoader2.default,
	          _extends({
	            loading: loading,
	            type: "submit",
	            icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "lock" }),
	            className: "pull-right request-password-reset-submit",
	            disabled: inputDisabled || submitDisabled,
	            onClick: this.handleSubmit.bind(this)
	          }, this.props.inputProps.submit),
	          "Request Password Reset"
	        )
	      );
	    }
	  }]);

	  return RequestPasswordResetForm;
	})(_react2.default.Component);

	RequestPasswordResetForm.propTypes = {
	  endpoint: _react.PropTypes.string,
	  inputProps: _react.PropTypes.shape({
	    email: _react.PropTypes.object,
	    submit: _react.PropTypes.object
	  })
	};
	RequestPasswordResetForm.defaultProps = {
	  inputProps: {
	    email: {},
	    submit: {}
	  }
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(RequestPasswordResetForm);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ButtonLoader = __webpack_require__(14);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _reactBootstrap = __webpack_require__(10);

	var _reactRedux = __webpack_require__(3);

	var _signOut = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignOutButton = (function (_React$Component) {
	  _inherits(SignOutButton, _React$Component);

	  function SignOutButton() {
	    _classCallCheck(this, SignOutButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SignOutButton).apply(this, arguments));
	  }

	  _createClass(SignOutButton, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleClick",
	    value: function handleClick() {
	      this.props.dispatch((0, _signOut.signOut)(this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
	      return _react2.default.createElement(_ButtonLoader2.default, _extends({
	        loading: this.props.auth.getIn(["signOut", this.getEndpoint(), "loading"]),
	        icon: this.props.icon,
	        disabled: disabled,
	        className: "sign-out-submit",
	        onClick: this.handleClick.bind(this)
	      }, this.props));
	    }
	  }]);

	  return SignOutButton;
	})(_react2.default.Component);

	SignOutButton.propTypes = {
	  children: _react.PropTypes.node,
	  icon: _react.PropTypes.node
	};
	SignOutButton.defaultProps = {
	  children: _react2.default.createElement(
	    "span",
	    null,
	    "Sign Out"
	  ),
	  icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "log-out" })
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(SignOutButton);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(21);

	var _Input2 = _interopRequireDefault(_Input);

	var _ButtonLoader = __webpack_require__(14);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _updatePassword = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UpdatePasswordForm = (function (_React$Component) {
	  _inherits(UpdatePasswordForm, _React$Component);

	  function UpdatePasswordForm() {
	    _classCallCheck(this, UpdatePasswordForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UpdatePasswordForm).apply(this, arguments));
	  }

	  _createClass(UpdatePasswordForm, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _updatePassword.updatePasswordFormUpdate)(this.getEndpoint(), key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      var formData = this.props.auth.getIn(["updatePassword", this.getEndpoint(), "form"]).toJS();
	      this.props.dispatch((0, _updatePassword.updatePassword)(formData, this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var endpoint = this.getEndpoint();
	      var loading = this.props.auth.getIn(["updatePassword", endpoint, "loading"]);
	      var disabled = !this.props.auth.getIn(["user", "isSignedIn"]) || loading || this.props.auth.getIn(["user", "attributes", "provider"]) !== "email";

	      return _react2.default.createElement(
	        "form",
	        { className: "redux-auth update-password-form clearfix",
	          onSubmit: this.handleSubmit.bind(this) },
	        _react2.default.createElement(_Input2.default, _extends({ type: "password",
	          label: "Password",
	          placeholder: "Password",
	          disabled: disabled,
	          className: "update-password-password",
	          value: this.props.auth.getIn(["updatePassword", endpoint, "form", "password"]),
	          errors: this.props.auth.getIn(["updatePassword", endpoint, "errors", "password"]),
	          onChange: this.handleInput.bind(this, "password")
	        }, this.props.inputProps.password)),
	        _react2.default.createElement(_Input2.default, _extends({ type: "password",
	          label: "Password Confirmation",
	          placeholder: "Password Confirmation",
	          disabled: disabled,
	          className: "update-password-password-confirmation",
	          value: this.props.auth.getIn(["updatePassword", endpoint, "form", "password_confirmation"]),
	          errors: this.props.auth.getIn(["updatePassword", endpoint, "errors", "password_confirmation"]),
	          onChange: this.handleInput.bind(this, "password_confirmation")
	        }, this.props.inputProps.passwordConfirmation)),
	        _react2.default.createElement(
	          _ButtonLoader2.default,
	          _extends({ loading: loading,
	            type: "submit",
	            className: "pull-right",
	            icon: this.props.icon,
	            disabled: disabled,
	            className: "update-password-submit",
	            onClick: this.handleSubmit.bind(this)
	          }, this.props.inputProps.submit),
	          "Update Password"
	        )
	      );
	    }
	  }]);

	  return UpdatePasswordForm;
	})(_react2.default.Component);

	UpdatePasswordForm.propTypes = {
	  endpoint: _react.PropTypes.string,
	  inputProps: _react.PropTypes.shape({
	    password: _react.PropTypes.object,
	    passwordConfirmation: _react.PropTypes.object
	  })
	};
	UpdatePasswordForm.defaultProps = {
	  inputProps: {
	    password: {},
	    passwordConfirmation: {}
	  }
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(UpdatePasswordForm);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DestroyAccountErrorModal = (function (_React$Component) {
	  _inherits(DestroyAccountErrorModal, _React$Component);

	  function DestroyAccountErrorModal() {
	    _classCallCheck(this, DestroyAccountErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DestroyAccountErrorModal).apply(this, arguments));
	  }

	  _createClass(DestroyAccountErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, {
	        containerClass: "destroy-account-error-modal",
	        show: this.props.show,
	        closeAction: _ui.hideDestroyAccountErrorModal,
	        title: "Error",
	        errorAddr: ["destroyAccount", "errors"] });
	    }
	  }]);

	  return DestroyAccountErrorModal;
	})(_react2.default.Component);

	exports.default = DestroyAccountErrorModal;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DestroyAccountSuccessModal = (function (_React$Component) {
	  _inherits(DestroyAccountSuccessModal, _React$Component);

	  function DestroyAccountSuccessModal() {
	    _classCallCheck(this, DestroyAccountSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DestroyAccountSuccessModal).apply(this, arguments));
	  }

	  _createClass(DestroyAccountSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "destroy-account-success-modal",
	          closeAction: _ui.hideDestroyAccountSuccessModal,
	          title: "Destroy Account Success" },
	        _react2.default.createElement(
	          "p",
	          null,
	          this.props.auth.getIn(["ui", "destroyAccountMessage"])
	        )
	      );
	    }
	  }]);

	  return DestroyAccountSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(DestroyAccountSuccessModal);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignInErrorModal = (function (_React$Component) {
	  _inherits(EmailSignInErrorModal, _React$Component);

	  function EmailSignInErrorModal() {
	    _classCallCheck(this, EmailSignInErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignInErrorModal).apply(this, arguments));
	  }

	  _createClass(EmailSignInErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, {
	        show: this.props.show,
	        containerClass: "email-sign-in-error-modal",
	        closeAction: _ui.hideEmailSignInErrorModal,
	        title: "Sign In Error",
	        errorAddr: ["emailSignIn", "errors"] });
	    }
	  }]);

	  return EmailSignInErrorModal;
	})(_react2.default.Component);

	exports.default = EmailSignInErrorModal;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignInSuccessModal = (function (_React$Component) {
	  _inherits(EmailSignInSuccessModal, _React$Component);

	  function EmailSignInSuccessModal() {
	    _classCallCheck(this, EmailSignInSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignInSuccessModal).apply(this, arguments));
	  }

	  _createClass(EmailSignInSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "email-sign-in-success-modal",
	          closeAction: _ui.hideEmailSignInSuccessModal,
	          closeBtnLabel: "Close",
	          title: "Welcome Back" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "You are now signed in as ",
	          this.props.auth.getIn(["user", "attributes", "email"]),
	          "."
	        )
	      );
	    }
	  }]);

	  return EmailSignInSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(EmailSignInSuccessModal);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignUpErrorModal = (function (_React$Component) {
	  _inherits(EmailSignUpErrorModal, _React$Component);

	  function EmailSignUpErrorModal() {
	    _classCallCheck(this, EmailSignUpErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignUpErrorModal).apply(this, arguments));
	  }

	  _createClass(EmailSignUpErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, {
	        show: this.props.show,
	        containerClass: "email-sign-up-error-modal",
	        title: "Sign Up Error",
	        errorAddr: ["emailSignUp", "errors", "full_messages"],
	        closeAction: _ui.hideEmailSignUpErrorModal });
	    }
	  }]);

	  return EmailSignUpErrorModal;
	})(_react2.default.Component);

	exports.default = EmailSignUpErrorModal;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignUpSuccessModal = (function (_React$Component) {
	  _inherits(EmailSignUpSuccessModal, _React$Component);

	  function EmailSignUpSuccessModal() {
	    _classCallCheck(this, EmailSignUpSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignUpSuccessModal).apply(this, arguments));
	  }

	  _createClass(EmailSignUpSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          containerClass: "email-sign-up-success-modal",
	          show: this.props.show,
	          closeAction: _ui.hideEmailSignUpSuccessModal,
	          title: "Sign Up Success" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "A confirmation email was sent to your account at ",
	          this.props.auth.getIn(["ui", "emailSignUpAddress"]),
	          ". Follow the instructions in the email to complete registration."
	        )
	      );
	    }
	  }]);

	  return EmailSignUpSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(EmailSignUpSuccessModal);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FirstTimeLoginErrorModal = (function (_React$Component) {
	  _inherits(FirstTimeLoginErrorModal, _React$Component);

	  function FirstTimeLoginErrorModal() {
	    _classCallCheck(this, FirstTimeLoginErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FirstTimeLoginErrorModal).apply(this, arguments));
	  }

	  _createClass(FirstTimeLoginErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "first-time-login-error-modal",
	          closeAction: _ui.hideFirstTimeLoginErrorModal,
	          title: "Confirmation Error" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "There was a problem confirming your account. Please try again."
	        )
	      );
	    }
	  }]);

	  return FirstTimeLoginErrorModal;
	})(_react2.default.Component);

	exports.default = FirstTimeLoginErrorModal;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FirstTimeLoginSuccessModal = (function (_React$Component) {
	  _inherits(FirstTimeLoginSuccessModal, _React$Component);

	  function FirstTimeLoginSuccessModal() {
	    _classCallCheck(this, FirstTimeLoginSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FirstTimeLoginSuccessModal).apply(this, arguments));
	  }

	  _createClass(FirstTimeLoginSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "first-time-login-success-modal",
	          title: "Welcome " + this.props.auth.getIn(["user", "attributes", "email"]) + "!",
	          closeBtnLabel: "Close",
	          closeAction: _ui.hideFirstTimeLoginSuccessModal },
	        _react2.default.createElement(
	          "p",
	          null,
	          "Your account has been confirmed."
	        )
	      );
	    }
	  }]);

	  return FirstTimeLoginSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(FirstTimeLoginSuccessModal);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _ui = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OAuthSignInErrorModal = (function (_React$Component) {
	  _inherits(OAuthSignInErrorModal, _React$Component);

	  function OAuthSignInErrorModal() {
	    _classCallCheck(this, OAuthSignInErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(OAuthSignInErrorModal).apply(this, arguments));
	  }

	  _createClass(OAuthSignInErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "oauth-sign-in-error-modal",
	          closeAction: _ui.hideOAuthSignInErrorModal,
	          title: "OAuth Sign In Error" },
	        _react2.default.createElement(
	          "p",
	          null,
	          _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign" }),
	          " There was an error authenticating your account. Please try again."
	        )
	      );
	    }
	  }]);

	  return OAuthSignInErrorModal;
	})(_react2.default.Component);

	exports.default = OAuthSignInErrorModal;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OAuthSignInSuccessModal = (function (_React$Component) {
	  _inherits(OAuthSignInSuccessModal, _React$Component);

	  function OAuthSignInSuccessModal() {
	    _classCallCheck(this, OAuthSignInSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(OAuthSignInSuccessModal).apply(this, arguments));
	  }

	  _createClass(OAuthSignInSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "oauth-sign-in-success-modal",
	          closeAction: _ui.hideOAuthSignInSuccessModal,
	          title: "Welcome" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "You are now signed in via ",
	          this.props.auth.getIn(["user", "attributes", "provider"]),
	          "."
	        )
	      );
	    }
	  }]);

	  return OAuthSignInSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(OAuthSignInSuccessModal);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	var _ButtonLoader = __webpack_require__(14);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _Input = __webpack_require__(21);

	var _Input2 = _interopRequireDefault(_Input);

	var _reactRedux = __webpack_require__(3);

	var _ui = __webpack_require__(2);

	var _updatePasswordModal = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PasswordResetSuccessModal = (function (_React$Component) {
	  _inherits(PasswordResetSuccessModal, _React$Component);

	  function PasswordResetSuccessModal() {
	    _classCallCheck(this, PasswordResetSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PasswordResetSuccessModal).apply(this, arguments));
	  }

	  _createClass(PasswordResetSuccessModal, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _updatePasswordModal.updatePasswordModalFormUpdate)(this.getEndpoint(), key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      console.log("@-->submitting");
	      var formData = this.props.auth.getIn(["updatePasswordModal", this.getEndpoint(), "form"]).toJS();
	      this.props.dispatch((0, _updatePasswordModal.updatePasswordModal)(formData, this.getEndpoint()));
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      this.props.dispatch((0, _ui.hidePasswordResetSuccessModal)(this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var loading = this.props.auth.getIn(["updatePasswordModal", this.getEndpoint(), "loading"]),
	          endpoint = this.getEndpoint();

	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        {
	          show: this.props.show,
	          className: "password-reset-success-modal",
	          onHide: this.close.bind(this) },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            "Reset Your Password"
	          )
	        ),
	        _react2.default.createElement(
	          "form",
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Body,
	            null,
	            _react2.default.createElement(_Input2.default, _extends({
	              type: "password",
	              label: "Password",
	              placeholder: "Password",
	              disabled: loading,
	              className: "password-reset-success-modal-password",
	              value: this.props.auth.getIn(["updatePasswordModal", endpoint, "form", "password"]),
	              errors: this.props.auth.getIn(["updatePasswordModal", endpoint, "errors", "password"]),
	              onChange: this.handleInput.bind(this, "password")
	            }, this.props.inputProps.password)),
	            _react2.default.createElement(_Input2.default, _extends({
	              type: "password",
	              label: "Password Confirmation",
	              placeholder: "Password Confirmation",
	              disabled: loading,
	              className: "password-reset-success-modal-password-confirmation",
	              value: this.props.auth.getIn(["updatePasswordModal", endpoint, "form", "password_confirmation"]),
	              errors: this.props.auth.getIn(["updatePasswordModal", endpoint, "errors", "password_confirmation"]),
	              onChange: this.handleInput.bind(this, "password_confirmation")
	            }, this.props.inputProps.passwordConfirmation))
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Footer,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Button,
	              _extends({
	                className: "password-reset-success-modal-close",
	                onClick: this.close.bind(this)
	              }, this.props.inputProps.cancel),
	              "Cancel"
	            ),
	            _react2.default.createElement(_ButtonLoader2.default, _extends({}, this.props, {
	              loading: loading,
	              type: "submit",
	              className: "password-reset-success-modal-submit",
	              icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "lock" }),
	              onClick: this.handleSubmit.bind(this)
	            }, this.props.inputProps.submit))
	          )
	        )
	      );
	    }
	  }]);

	  return PasswordResetSuccessModal;
	})(_react2.default.Component);

	PasswordResetSuccessModal.propTypes = {
	  show: _react.PropTypes.bool,
	  inputProps: _react.PropTypes.object
	};
	PasswordResetSuccessModal.defaultProps = {
	  show: false,
	  inputProps: {}
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(PasswordResetSuccessModal);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RequestPasswordResetErrorModal = (function (_React$Component) {
	  _inherits(RequestPasswordResetErrorModal, _React$Component);

	  function RequestPasswordResetErrorModal() {
	    _classCallCheck(this, RequestPasswordResetErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RequestPasswordResetErrorModal).apply(this, arguments));
	  }

	  _createClass(RequestPasswordResetErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, {
	        show: this.props.show,
	        containerClass: "request-password-reset-error-modal",
	        closeAction: _ui.hidePasswordResetRequestErrorModal,
	        title: "Error",
	        errorAddr: ["requestPasswordReset", "errors"] });
	    }
	  }]);

	  return RequestPasswordResetErrorModal;
	})(_react2.default.Component);

	exports.default = RequestPasswordResetErrorModal;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RequestPasswordResetSuccessModal = (function (_React$Component) {
	  _inherits(RequestPasswordResetSuccessModal, _React$Component);

	  function RequestPasswordResetSuccessModal() {
	    _classCallCheck(this, RequestPasswordResetSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RequestPasswordResetSuccessModal).apply(this, arguments));
	  }

	  _createClass(RequestPasswordResetSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "request-password-reset-success-modal",
	          title: "Password Reset Request Success",
	          closeAction: _ui.hidePasswordResetRequestSuccessModal },
	        _react2.default.createElement(
	          "p",
	          null,
	          this.props.auth.getIn(["ui", "requestPasswordResetSuccessMessage"])
	        )
	      );
	    }
	  }]);

	  return RequestPasswordResetSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(RequestPasswordResetSuccessModal);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignOutErrorModal = (function (_React$Component) {
	  _inherits(SignOutErrorModal, _React$Component);

	  function SignOutErrorModal() {
	    _classCallCheck(this, SignOutErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SignOutErrorModal).apply(this, arguments));
	  }

	  _createClass(SignOutErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "sign-out-error-modal",
	          closeAction: _ui.hideSignOutErrorModal,
	          title: "Sign Out Error" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "The server encountered an error while trying to sign you out. Your account information has been wiped from this browser, but you may want to sign in and then sign back out again to resolve any issues."
	        )
	      );
	    }
	  }]);

	  return SignOutErrorModal;
	})(_react2.default.Component);

	exports.default = SignOutErrorModal;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignOutSuccessModal = (function (_React$Component) {
	  _inherits(SignOutSuccessModal, _React$Component);

	  function SignOutSuccessModal() {
	    _classCallCheck(this, SignOutSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SignOutSuccessModal).apply(this, arguments));
	  }

	  _createClass(SignOutSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "sign-out-success-modal",
	          title: "Goodbye!",
	          closeAction: _ui.hideSignOutSuccessModal },
	        _react2.default.createElement(
	          "p",
	          null,
	          "You have been successfully signed out."
	        )
	      );
	    }
	  }]);

	  return SignOutSuccessModal;
	})(_react2.default.Component);

	exports.default = SignOutSuccessModal;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UpdatePasswordErrorModal = (function (_React$Component) {
	  _inherits(UpdatePasswordErrorModal, _React$Component);

	  function UpdatePasswordErrorModal() {
	    _classCallCheck(this, UpdatePasswordErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UpdatePasswordErrorModal).apply(this, arguments));
	  }

	  _createClass(UpdatePasswordErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, {
	        show: this.props.show,
	        containerClass: "update-password-error-modal",
	        title: "Error",
	        closeAction: _ui.hideUpdatePasswordErrorModal,
	        errorAddr: ["updatePassword", "errors", "full_messages"] });
	    }
	  }]);

	  return UpdatePasswordErrorModal;
	})(_react2.default.Component);

	exports.default = UpdatePasswordErrorModal;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(6);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UpdatePasswordSuccessModal = (function (_React$Component) {
	  _inherits(UpdatePasswordSuccessModal, _React$Component);

	  function UpdatePasswordSuccessModal() {
	    _classCallCheck(this, UpdatePasswordSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UpdatePasswordSuccessModal).apply(this, arguments));
	  }

	  _createClass(UpdatePasswordSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "update-password-success-modal",
	          closeAction: _ui.hideUpdatePasswordSuccessModal,
	          title: "Success" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "Your password has been successfully changed."
	        )
	      );
	    }
	  }]);

	  return UpdatePasswordSuccessModal;
	})(_react2.default.Component);

	exports.default = UpdatePasswordSuccessModal;

/***/ }
/******/ ]);