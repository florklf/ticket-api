'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">ticket-api documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' : 'data-target="#xs-controllers-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' : 'id="xs-controllers-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' : 'data-target="#xs-injectables-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' : 'id="xs-injectables-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' : 'data-target="#xs-controllers-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' : 'id="xs-controllers-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' : 'data-target="#xs-injectables-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' : 'id="xs-injectables-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/JwtStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JwtStrategy</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/LocalStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LocalStrategy</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/EventModule.html\" data-type=\"entity-link\" >EventModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' : 'data-target="#xs-controllers-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' : 'id="xs-controllers-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/EventController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EventController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' : 'data-target="#xs-injectables-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' : 'id="xs-injectables-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/EventService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EventService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/GlobalModule.html\" data-type=\"entity-link\" >GlobalModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-GlobalModule-4ab8cd0c385ef88a3f61ab256418899d107929610acef0496acdac7de8c9f161148ec7c822b85a7deb241c0c6254c6ad875e6da18f4f661cb7e5c72830598132"' : 'data-target="#xs-injectables-links-module-GlobalModule-4ab8cd0c385ef88a3f61ab256418899d107929610acef0496acdac7de8c9f161148ec7c822b85a7deb241c0c6254c6ad875e6da18f4f661cb7e5c72830598132"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-GlobalModule-4ab8cd0c385ef88a3f61ab256418899d107929610acef0496acdac7de8c9f161148ec7c822b85a7deb241c0c6254c6ad875e6da18f4f661cb7e5c72830598132"' : 'id="xs-injectables-links-module-GlobalModule-4ab8cd0c385ef88a3f61ab256418899d107929610acef0496acdac7de8c9f161148ec7c822b85a7deb241c0c6254c6ad875e6da18f4f661cb7e5c72830598132"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PrismaService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PrismaService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UserModule.html\" data-type=\"entity-link\" >UserModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' : 'data-target="#xs-controllers-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' : 'id="xs-controllers-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UserController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' : 'data-target="#xs-injectables-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' : 'id="xs-injectables-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UserService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CreateEventDto.html\" data-type=\"entity-link\" >CreateEventDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PrismaClientExceptionFilter.html\" data-type=\"entity-link\" >PrismaClientExceptionFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateEventDto.html\" data-type=\"entity-link\" >UpdateEventDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateUserDto.html\" data-type=\"entity-link\" >UpdateUserDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/JwtAuthGuard.html\" data-type=\"entity-link\" >JwtAuthGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LocalAuthGuard.html\" data-type=\"entity-link\" >LocalAuthGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/PrismaService.html\" data-type=\"entity-link\" >PrismaService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/RoleGuard.html\" data-type=\"entity-link\" >RoleGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));