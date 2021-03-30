/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/main.scss */ \"./scss/main.scss\");\n/* harmony import */ var glsl_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glsl-canvas-js */ \"./node_modules/glsl-canvas-js/dist/umd/glsl-canvas.js\");\n/* harmony import */ var glsl_canvas_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glsl_canvas_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_trails_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/trails.jpg */ \"./images/trails.jpg\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  console.log('loaded');\n});\nvar segmentSize = document.getElementById('segmentSize');\nvar sizeValue = document.getElementById('sizeValue');\nvar segmentNumber = document.getElementById('segmentNumber');\nvar numberValue = document.getElementById('numberValue');\nvar segmentCompression = document.getElementById('segmentCompression');\nvar compressionValue = document.getElementById('compressionValue');\nvar s1 = Number(segmentSize.value).toFixed(2);\nvar s2 = Number(segmentNumber.value).toFixed(2);\nvar s3 = Number(segmentCompression.value).toFixed(2);\nsegmentSize.addEventListener('change', function () {\n  sizeValue.innerHTML = segmentSize.value;\n  s1 = Number(segmentSize.value).toFixed(2);\n  var frag2 = \"\\n        #ifdef GL_ES\\n        precision highp float;\\n        #endif\\n\\n        #define SEGMENTS 32.0\\n        #define PI 3.141592653589\\n\\n        uniform float u_time;\\n        uniform vec2 resolution;\\n        uniform vec2 mouse;\\n\\n        uniform sampler2D image;\\n        varying vec2 v_texcoord;\\n\\n        void main(void)\\n        {\\n            vec2 uv = v_texcoord;\\n            uv *= 2.0;\\n            uv -= 1.0;\\n            \\n            // get the angle and radius\\n            float radius = length(uv);\\n            float angle = atan(uv.y, uv.x);\\n            \\n            //get segment\\n            angle /= PI * \".concat(s1, \";\\n            angle *= SEGMENTS + \").concat(s2, \";\\n\\n            //repeat segment\\n            if (mod(angle, 2.0) >= 1.0) {\\n                angle = fract(angle);\\n            } else {\\n                angle = 1.0 - fract(angle);\\n            }\\n            angle += u_time;\\n            \\n            //unsquash segment\\n            angle /= SEGMENTS;\\n            angle *= PI * \").concat(s3, \";\\n            \\n            vec2 point = vec2(radius * cos(angle), radius * sin(angle));\\n            point = fract(point);\\n            \\n            vec4 color = texture2D(image, point);\\n            gl_FragColor = color;\\n        }\\n        \");\n  sandbox.load(frag2);\n  sandbox.setUniform('displacement', _images_trails_jpg__WEBPACK_IMPORTED_MODULE_1__.default);\n});\nsegmentNumber.addEventListener('change', function () {\n  numberValue.innerHTML = Number(segmentNumber.value) + 32;\n  s2 = Number(segmentNumber.value).toFixed(2);\n  console.log(segmentNumber);\n  var frag2 = \"\\n        #ifdef GL_ES\\n        precision highp float;\\n        #endif\\n\\n        #define SEGMENTS 32.0\\n        #define PI 3.141592653589\\n\\n        uniform float u_time;\\n        uniform vec2 resolution;\\n        uniform vec2 mouse;\\n\\n        uniform sampler2D image;\\n        varying vec2 v_texcoord;\\n\\n        void main(void)\\n        {\\n            vec2 uv = v_texcoord;\\n            uv *= 2.0;\\n            uv -= 1.0;\\n            \\n            // get the angle and radius\\n            float radius = length(uv);\\n            float angle = atan(uv.y, uv.x);\\n            \\n            //get segment\\n            angle /= PI * \".concat(s1, \";\\n            angle *= SEGMENTS + \").concat(s2, \";\\n\\n            //repeat segment\\n            if (mod(angle, 2.0) >= 1.0) {\\n                angle = fract(angle);\\n            } else {\\n                angle = 1.0 - fract(angle);\\n            }\\n            angle += u_time;\\n            \\n            //unsquash segment\\n            angle /= SEGMENTS;\\n            angle *= PI * \").concat(s3, \";\\n            \\n            vec2 point = vec2(radius * cos(angle), radius * sin(angle));\\n            point = fract(point);\\n            \\n            vec4 color = texture2D(image, point);\\n            gl_FragColor = color;\\n        }\\n        \");\n  sandbox.load(frag2);\n  sandbox.setUniform('displacement', _images_trails_jpg__WEBPACK_IMPORTED_MODULE_1__.default);\n});\nsegmentCompression.addEventListener('change', function () {\n  compressionValue.innerHTML = Number(segmentCompression.value) + 32;\n  s3 = Number(segmentCompression.value).toFixed(2);\n  var frag2 = \"\\n        #ifdef GL_ES\\n        precision highp float;\\n        #endif\\n\\n        #define SEGMENTS 32.0\\n        #define PI 3.141592653589\\n\\n        uniform float u_time;\\n        uniform vec2 resolution;\\n        uniform vec2 mouse;\\n\\n        uniform sampler2D image;\\n        varying vec2 v_texcoord;\\n\\n        void main(void)\\n        {\\n            vec2 uv = v_texcoord;\\n            uv *= 2.0;\\n            uv -= 1.0;\\n            \\n            // get the angle and radius\\n            float radius = length(uv);\\n            float angle = atan(uv.y, uv.x);\\n            \\n            //get segment\\n            angle /= PI * \".concat(s1, \";\\n            angle *= SEGMENTS + \").concat(s2, \";\\n\\n            //repeat segment\\n            if (mod(angle, 2.0) >= 1.0) {\\n                angle = fract(angle);\\n            } else {\\n                angle = 1.0 - fract(angle);\\n            }\\n            angle += u_time;\\n            \\n            //unsquash segment\\n            angle /= SEGMENTS;\\n            angle *= PI * \").concat(s3, \";\\n            \\n            vec2 point = vec2(radius * cos(angle), radius * sin(angle));\\n            point = fract(point);\\n            \\n            vec4 color = texture2D(image, point);\\n            gl_FragColor = color;\\n        }\\n        \");\n  sandbox.load(frag2);\n  sandbox.setUniform('displacement', _images_trails_jpg__WEBPACK_IMPORTED_MODULE_1__.default);\n});\nvar frag = \"\\n#ifdef GL_ES\\nprecision highp float;\\n#endif\\n\\n#define SEGMENTS 32.0\\n#define PI 3.141592653589\\n\\nuniform float u_time;\\nuniform vec2 resolution;\\nuniform vec2 mouse;\\n\\nuniform sampler2D image;\\nvarying vec2 v_texcoord;\\n\\nvoid main(void)\\n{\\n    vec2 uv = v_texcoord;\\n    uv *= 2.0;\\n    uv -= 1.0;\\n    \\n    // get the angle and radius\\n    float radius = length(uv);\\n    float angle = atan(uv.y, uv.x);\\n    \\n    //get segment\\n    angle /= PI * \".concat(s1, \";\\n    angle *= SEGMENTS;\\n\\n    //repeat segment\\n    if (mod(angle, 2.0) >= 1.0) {\\n        angle = fract(angle);\\n    } else {\\n        angle = 1.0 - fract(angle);\\n    }\\n    angle += u_time;\\n    \\n    //unsquash segment\\n    angle /= SEGMENTS;\\n    angle *= PI * 2.0;\\n    \\n    vec2 point = vec2(radius * cos(angle), radius * sin(angle));\\n    point = fract(point);\\n    \\n    vec4 color = texture2D(image, point);\\n    gl_FragColor = color;\\n}\\n\");\n\n\nvar canvas = document.querySelector('canvas');\nvar sandbox = new glsl_canvas_js__WEBPACK_IMPORTED_MODULE_2__.Canvas(canvas, {// vertexString: ``,\n  // fragmentString: ``\n});\nsandbox.load(frag);\nsandbox.setUniform('displacement', _images_trails_jpg__WEBPACK_IMPORTED_MODULE_1__.default);\n\n//# sourceURL=webpack://app/./src/js/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_sprat_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/sprat.woff2 */ \"./fonts/sprat.woff2\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_sprat_woff2__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Sprat\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); }\\n\\nbody {\\n  font-family: \\\"Sprat\\\";\\n  font-size: 16px;\\n  line-height: 1.5;\\n  background-color: #000;\\n  color: #fafafa; }\\n\\nsection {\\n  height: 100%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n  text-align: center;\\n  font-size: 9rem;\\n  z-index: 100;\\n  font-weight: 500; }\\n\\nsection div {\\n  width: 5em; }\\n\\n@-webkit-keyframes inhale {\\n  0% {\\n    font-variation-settings: \\\"wght\\\" 10, \\\"wdth\\\" 120;\\n    opacity: 0.75; }\\n  100% {\\n    font-variation-settings: \\\"wght\\\" 100, \\\"wdth\\\" 120;\\n    opacity: 1; } }\\n\\n@keyframes inhale {\\n  0% {\\n    font-variation-settings: \\\"wght\\\" 10, \\\"wdth\\\" 120;\\n    opacity: 0.75; }\\n  100% {\\n    font-variation-settings: \\\"wght\\\" 100, \\\"wdth\\\" 120;\\n    opacity: 1; } }\\n\\n@-webkit-keyframes exhale {\\n  0% {\\n    font-variation-settings: \\\"wght\\\" 100, \\\"wdth\\\" 120;\\n    opacity: 1; }\\n  100% {\\n    font-variation-settings: \\\"wght\\\" 10, \\\"wdth\\\" 120;\\n    opacity: 0.75; } }\\n\\n@keyframes exhale {\\n  0% {\\n    font-variation-settings: \\\"wght\\\" 100, \\\"wdth\\\" 120;\\n    opacity: 1; }\\n  100% {\\n    font-variation-settings: \\\"wght\\\" 10, \\\"wdth\\\" 120;\\n    opacity: 0.75; } }\\n\\n@-webkit-keyframes throb {\\n  0% {\\n    -webkit-transform: translate(-50%, -50%) scale(1);\\n            transform: translate(-50%, -50%) scale(1); }\\n  100% {\\n    -webkit-transform: translate(-50%, -50%) scale(1.1);\\n            transform: translate(-50%, -50%) scale(1.1); } }\\n\\n@keyframes throb {\\n  0% {\\n    -webkit-transform: translate(-50%, -50%) scale(1);\\n            transform: translate(-50%, -50%) scale(1); }\\n  100% {\\n    -webkit-transform: translate(-50%, -50%) scale(1.1);\\n            transform: translate(-50%, -50%) scale(1.1); } }\\n\\ncanvas {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  -webkit-transform: translate(-50%, -50%);\\n          transform: translate(-50%, -50%);\\n  border-radius: 50%;\\n  z-index: -1;\\n  width: 100%;\\n  height: 700px;\\n  max-height: 90vmin;\\n  max-width: 90vmin;\\n  -webkit-animation: throb 5s infinite alternate;\\n          animation: throb 5s infinite alternate; }\\n\\nsection div.left {\\n  -webkit-animation: exhale 3s infinite alternate;\\n          animation: exhale 3s infinite alternate; }\\n\\nsection div.exhale {\\n  -webkit-animation: inhale 3s infinite alternate;\\n          animation: inhale 3s infinite alternate; }\\n\\n.edit {\\n  position: fixed;\\n  right: 0;\\n  top: 0;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  width: 200px;\\n  height: 300px;\\n  background: rgba(255, 255, 255, 0.25);\\n  font-family: sans-serif;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://app/./scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./images/trails.jpg":
/*!***************************!*\
  !*** ./images/trails.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/images/trails.jpg\");\n\n//# sourceURL=webpack://app/./images/trails.jpg?");

/***/ }),

/***/ "./fonts/sprat.woff2":
/*!***************************!*\
  !*** ./fonts/sprat.woff2 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/fonts/sprat.woff2\");\n\n//# sourceURL=webpack://app/./fonts/sprat.woff2?");

/***/ }),

/***/ "./node_modules/glsl-canvas-js/dist/umd/glsl-canvas.js":
/*!*************************************************************!*\
  !*** ./node_modules/glsl-canvas-js/dist/umd/glsl-canvas.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("/**\n * @license glsl-canvas-js v0.2.2\n * (c) 2020 Luca Zampetti <lzampetti@gmail.com>\n * License: MIT\n */\n\n(function (global, factory) {\n   true ? factory(exports) :\n  0;\n}(this, (function (exports) { 'use strict';\n\n  function _defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }\n\n  function _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n  }\n\n  function _inheritsLoose(subClass, superClass) {\n    subClass.prototype = Object.create(superClass.prototype);\n    subClass.prototype.constructor = subClass;\n    subClass.__proto__ = superClass;\n  }\n\n  function _assertThisInitialized(self) {\n    if (self === void 0) {\n      throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n\n    return self;\n  }\n\n  var DefaultWebGLVertexAttributes_ = \"\\n#ifdef GL_ES\\nprecision mediump float;\\n#endif\\n\\nattribute vec4 a_position;\\nattribute vec4 a_normal;\\nattribute vec2 a_texcoord;\\nattribute vec4 a_color;\\n\\nvarying vec4 v_position;\\nvarying vec4 v_normal;\\nvarying vec2 v_texcoord;\\nvarying vec4 v_color;\\n\";\n  var DefaultWebGLFragmentAttributes_ = \"\\n#ifdef GL_ES\\nprecision mediump float;\\n#endif\\n\\nvarying vec4 v_position;\\nvarying vec4 v_normal;\\nvarying vec2 v_texcoord;\\nvarying vec4 v_color;\\n\";\n  var DefaultWebGL2VertexAttributes_ = \"#version 300 es\\n\\nprecision mediump float;\\n\\nin vec4 a_position;\\nin vec4 a_normal;\\nin vec2 a_texcoord;\\nin vec4 a_color;\\n\\nout vec4 v_position;\\nout vec4 v_normal;\\nout vec2 v_texcoord;\\nout vec4 v_color;\\n\";\n  var DefaultWebGL2FragmentAttributes_ = \"#version 300 es\\n\\nprecision mediump float;\\n\\nin vec4 v_position;\\nin vec4 v_normal;\\nin vec2 v_texcoord;\\nin vec4 v_color;\\n\\nout vec4 outColor;\\n\";\n  var DefaultWebGLUniform_ = \"\\nuniform mat4 u_projectionMatrix;\\nuniform mat4 u_modelViewMatrix;\\nuniform mat4 u_normalMatrix;\\n\\nuniform vec2 u_resolution;\\nuniform float u_time;\\n\";\n  var DefaultWebGLFlatVertex_ = \"\\nvoid main() {\\n\\tv_position = a_position;\\n\\tv_normal = a_normal;\\n\\tv_texcoord = a_texcoord;\\n\\tv_color = a_color;\\n\\tgl_Position = a_position;\\n}\\n\";\n  var DefaultWebGLMeshVertex_ = \"\\nvoid main(void) {\\n\\tv_position = u_projectionMatrix * u_modelViewMatrix * a_position;\\n\\tv_normal = u_normalMatrix * a_normal;\\n\\tv_texcoord = a_texcoord;\\n\\tv_color = a_color;\\n\\tgl_Position = v_position;\\n}\\n\";\n  var DefaultWebGLFlatFragment_ = \"\\nvoid main() {\\n\\tvec2 st = gl_FragCoord.xy / u_resolution.xy;\\n\\tst.x *= u_resolution.x / u_resolution.y;\\n\\tvec3 color = vec3(\\n\\t\\tabs(cos(u_time * 0.1)) * st.y,\\n\\t\\tabs(cos(u_time * 0.2)) * st.y,\\n\\t\\tabs(sin(u_time)) * st.y\\n\\t);\\n\\tgl_FragColor = vec4(color, 1.0);\\n}\\n\";\n  var DefaultWebGL2FlatFragment_ = \"\\nvoid main() {\\n\\tvec2 st = gl_FragCoord.xy / u_resolution.xy;\\n\\tst.x *= u_resolution.x / u_resolution.y;\\n\\tvec3 color = vec3(\\n\\t\\tabs(cos(u_time * 0.1)) * st.y,\\n\\t\\tabs(cos(u_time * 0.2)) * st.y,\\n\\t\\tabs(sin(u_time)) * st.y\\n\\t);\\n\\toutColor = vec4(color, 1.0);\\n}\\n\";\n  var DefaultWebGLMeshFragment_ = \"\\nvoid main() {\\n\\tvec2 uv = v_texcoord;\\n\\tvec3 color = vec3(\\n\\t\\tabs(cos(u_time * 0.1)) * uv.y,\\n\\t\\tabs(cos(u_time * 0.2)) * uv.y,\\n\\t\\tabs(sin(u_time)) * uv.y\\n\\t);\\n\\tfloat incidence = max(dot(v_normal.xyz, vec3(0.0, 1.0, 0.0)), 0.0);\\n\\tvec3 light = vec3(0.2) + (vec3(1.0) * incidence);\\n\\tgl_FragColor = vec4(v_color.rgb * color * light, 1.0);\\n}\\n\";\n  var DefaultWebGL2MeshFragment_ = \"\\nvoid main() {\\n\\tvec2 uv = v_texcoord;\\n\\tvec3 color = vec3(\\n\\t\\tabs(cos(u_time * 0.1)) * uv.y,\\n\\t\\tabs(cos(u_time * 0.2)) * uv.y,\\n\\t\\tabs(sin(u_time)) * uv.y\\n\\t);\\n\\tfloat incidence = max(dot(v_normal.xyz, vec3(0.0, 1.0, 0.0)), 0.0);\\n\\tvec3 light = vec3(0.2) + (vec3(1.0) * incidence);\\n\\toutColor = vec4(v_color.rgb * color * light, 1.0);\\n}\\n\";\n  var DefaultWebGLBufferFragment_ = \"\\nvoid main(){\\n\\tgl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\\n}\";\n  var DefaultWebGL2BufferFragment_ = \"\\nvoid main() {\\n\\toutColor = vec4(0.0, 0.0, 0.0, 1.0);\\n}\\n\"; //\n\n  var DefaultWebGLMeshVertex = DefaultWebGLVertexAttributes_ + DefaultWebGLUniform_ + DefaultWebGLMeshVertex_;\n  var DefaultWebGL2MeshVertex = DefaultWebGL2VertexAttributes_ + DefaultWebGLUniform_ + DefaultWebGLMeshVertex_;\n  var DefaultWebGLFlatFragment = DefaultWebGLFragmentAttributes_ + DefaultWebGLUniform_ + DefaultWebGLFlatFragment_;\n  var DefaultWebGL2FlatFragment = DefaultWebGL2FragmentAttributes_ + DefaultWebGLUniform_ + DefaultWebGL2FlatFragment_;\n  var DefaultWebGLMeshFragment = DefaultWebGLFragmentAttributes_ + DefaultWebGLUniform_ + DefaultWebGLMeshFragment_;\n  var DefaultWebGL2MeshFragment = DefaultWebGL2FragmentAttributes_ + DefaultWebGLUniform_ + DefaultWebGL2MeshFragment_; //\n\n  var DefaultWebGLBufferVertex = DefaultWebGLVertexAttributes_ + DefaultWebGLUniform_ + DefaultWebGLFlatVertex_;\n  var DefaultWebGL2BufferVertex = DefaultWebGL2VertexAttributes_ + DefaultWebGLUniform_ + DefaultWebGLFlatVertex_;\n  var DefaultWebGLBufferFragment = DefaultWebGLFragmentAttributes_ + DefaultWebGLUniform_ + DefaultWebGLBufferFragment_;\n  var DefaultWebGL2BufferFragment = DefaultWebGL2FragmentAttributes_ + DefaultWebGLUniform_ + DefaultWebGL2BufferFragment_; //\n\n  /**\n   * @this {Promise}\n   */\n  function finallyConstructor(callback) {\n    var constructor = this.constructor;\n    return this.then(\n      function(value) {\n        // @ts-ignore\n        return constructor.resolve(callback()).then(function() {\n          return value;\n        });\n      },\n      function(reason) {\n        // @ts-ignore\n        return constructor.resolve(callback()).then(function() {\n          // @ts-ignore\n          return constructor.reject(reason);\n        });\n      }\n    );\n  }\n\n  // Store setTimeout reference so promise-polyfill will be unaffected by\n  // other code modifying setTimeout (like sinon.useFakeTimers())\n  var setTimeoutFunc = setTimeout;\n\n  function isArray(x) {\n    return Boolean(x && typeof x.length !== 'undefined');\n  }\n\n  function noop() {}\n\n  // Polyfill for Function.prototype.bind\n  function bind(fn, thisArg) {\n    return function() {\n      fn.apply(thisArg, arguments);\n    };\n  }\n\n  /**\n   * @constructor\n   * @param {Function} fn\n   */\n  function Promise$1(fn) {\n    if (!(this instanceof Promise$1))\n      throw new TypeError('Promises must be constructed via new');\n    if (typeof fn !== 'function') throw new TypeError('not a function');\n    /** @type {!number} */\n    this._state = 0;\n    /** @type {!boolean} */\n    this._handled = false;\n    /** @type {Promise|undefined} */\n    this._value = undefined;\n    /** @type {!Array<!Function>} */\n    this._deferreds = [];\n\n    doResolve(fn, this);\n  }\n\n  function handle(self, deferred) {\n    while (self._state === 3) {\n      self = self._value;\n    }\n    if (self._state === 0) {\n      self._deferreds.push(deferred);\n      return;\n    }\n    self._handled = true;\n    Promise$1._immediateFn(function() {\n      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;\n      if (cb === null) {\n        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);\n        return;\n      }\n      var ret;\n      try {\n        ret = cb(self._value);\n      } catch (e) {\n        reject(deferred.promise, e);\n        return;\n      }\n      resolve(deferred.promise, ret);\n    });\n  }\n\n  function resolve(self, newValue) {\n    try {\n      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure\n      if (newValue === self)\n        throw new TypeError('A promise cannot be resolved with itself.');\n      if (\n        newValue &&\n        (typeof newValue === 'object' || typeof newValue === 'function')\n      ) {\n        var then = newValue.then;\n        if (newValue instanceof Promise$1) {\n          self._state = 3;\n          self._value = newValue;\n          finale(self);\n          return;\n        } else if (typeof then === 'function') {\n          doResolve(bind(then, newValue), self);\n          return;\n        }\n      }\n      self._state = 1;\n      self._value = newValue;\n      finale(self);\n    } catch (e) {\n      reject(self, e);\n    }\n  }\n\n  function reject(self, newValue) {\n    self._state = 2;\n    self._value = newValue;\n    finale(self);\n  }\n\n  function finale(self) {\n    if (self._state === 2 && self._deferreds.length === 0) {\n      Promise$1._immediateFn(function() {\n        if (!self._handled) {\n          Promise$1._unhandledRejectionFn(self._value);\n        }\n      });\n    }\n\n    for (var i = 0, len = self._deferreds.length; i < len; i++) {\n      handle(self, self._deferreds[i]);\n    }\n    self._deferreds = null;\n  }\n\n  /**\n   * @constructor\n   */\n  function Handler(onFulfilled, onRejected, promise) {\n    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;\n    this.onRejected = typeof onRejected === 'function' ? onRejected : null;\n    this.promise = promise;\n  }\n\n  /**\n   * Take a potentially misbehaving resolver function and make sure\n   * onFulfilled and onRejected are only called once.\n   *\n   * Makes no guarantees about asynchrony.\n   */\n  function doResolve(fn, self) {\n    var done = false;\n    try {\n      fn(\n        function(value) {\n          if (done) return;\n          done = true;\n          resolve(self, value);\n        },\n        function(reason) {\n          if (done) return;\n          done = true;\n          reject(self, reason);\n        }\n      );\n    } catch (ex) {\n      if (done) return;\n      done = true;\n      reject(self, ex);\n    }\n  }\n\n  Promise$1.prototype['catch'] = function(onRejected) {\n    return this.then(null, onRejected);\n  };\n\n  Promise$1.prototype.then = function(onFulfilled, onRejected) {\n    // @ts-ignore\n    var prom = new this.constructor(noop);\n\n    handle(this, new Handler(onFulfilled, onRejected, prom));\n    return prom;\n  };\n\n  Promise$1.prototype['finally'] = finallyConstructor;\n\n  Promise$1.all = function(arr) {\n    return new Promise$1(function(resolve, reject) {\n      if (!isArray(arr)) {\n        return reject(new TypeError('Promise.all accepts an array'));\n      }\n\n      var args = Array.prototype.slice.call(arr);\n      if (args.length === 0) return resolve([]);\n      var remaining = args.length;\n\n      function res(i, val) {\n        try {\n          if (val && (typeof val === 'object' || typeof val === 'function')) {\n            var then = val.then;\n            if (typeof then === 'function') {\n              then.call(\n                val,\n                function(val) {\n                  res(i, val);\n                },\n                reject\n              );\n              return;\n            }\n          }\n          args[i] = val;\n          if (--remaining === 0) {\n            resolve(args);\n          }\n        } catch (ex) {\n          reject(ex);\n        }\n      }\n\n      for (var i = 0; i < args.length; i++) {\n        res(i, args[i]);\n      }\n    });\n  };\n\n  Promise$1.resolve = function(value) {\n    if (value && typeof value === 'object' && value.constructor === Promise$1) {\n      return value;\n    }\n\n    return new Promise$1(function(resolve) {\n      resolve(value);\n    });\n  };\n\n  Promise$1.reject = function(value) {\n    return new Promise$1(function(resolve, reject) {\n      reject(value);\n    });\n  };\n\n  Promise$1.race = function(arr) {\n    return new Promise$1(function(resolve, reject) {\n      if (!isArray(arr)) {\n        return reject(new TypeError('Promise.race accepts an array'));\n      }\n\n      for (var i = 0, len = arr.length; i < len; i++) {\n        Promise$1.resolve(arr[i]).then(resolve, reject);\n      }\n    });\n  };\n\n  // Use polyfill for setImmediate for performance gains\n  Promise$1._immediateFn =\n    // @ts-ignore\n    (typeof setImmediate === 'function' &&\n      function(fn) {\n        // @ts-ignore\n        setImmediate(fn);\n      }) ||\n    function(fn) {\n      setTimeoutFunc(fn, 0);\n    };\n\n  Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {\n    if (typeof console !== 'undefined' && console) {\n      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console\n    }\n  };\n\n  var Common = /*#__PURE__*/function () {\n    function Common() {}\n\n    Common.fetch = function fetch(url) {\n      // console.log('Common.fetch', url);\n      return new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n\n        xhr.onload = function () {\n          resolve(xhr.response || xhr.responseText);\n        };\n\n        xhr.onerror = function (error) {\n          console.log('Common.error', error);\n          reject(new Error(\"Network request failed for url \" + url));\n        };\n\n        xhr.ontimeout = function (error) {\n          // console.log(error);\n          reject(new Error(\"Network request failed for url \" + url));\n        };\n\n        xhr.onabort = function () {\n          reject(new Error('Aborted'));\n        };\n\n        xhr.open('GET', url, true);\n        xhr.send(null);\n      });\n    };\n\n    return Common;\n  }();\n\n  var LoggerLevel;\n\n  (function (LoggerLevel) {\n    LoggerLevel[LoggerLevel[\"None\"] = 0] = \"None\";\n    LoggerLevel[LoggerLevel[\"Error\"] = 1] = \"Error\";\n    LoggerLevel[LoggerLevel[\"Warn\"] = 2] = \"Warn\";\n    LoggerLevel[LoggerLevel[\"Log\"] = 3] = \"Log\";\n  })(LoggerLevel || (LoggerLevel = {}));\n\n  var Logger = /*#__PURE__*/function () {\n    function Logger() {}\n\n    Logger.log = function log() {\n      if (Logger.enabled && Logger.level >= LoggerLevel.Log) {\n        var _console;\n\n        (_console = console).log.apply(_console, arguments);\n      }\n    };\n\n    Logger.warn = function warn() {\n      if (Logger.enabled && Logger.level >= LoggerLevel.Warn) {\n        var _console2;\n\n        (_console2 = console).warn.apply(_console2, arguments);\n      }\n    };\n\n    Logger.error = function error() {\n      if (Logger.enabled && Logger.level >= LoggerLevel.Error) {\n        var _console3;\n\n        (_console3 = console).error.apply(_console3, arguments);\n      }\n    };\n\n    return Logger;\n  }();\n  Logger.level = LoggerLevel.Warn;\n  Logger.enabled = true;\n\n  (function (ContextVersion) {\n    ContextVersion[\"WebGl\"] = \"webgl\";\n    ContextVersion[\"WebGl2\"] = \"webgl2\";\n  })(exports.ContextVersion || (exports.ContextVersion = {}));\n\n  var ContextPrecision;\n\n  (function (ContextPrecision) {\n    ContextPrecision[\"LowP\"] = \"lowp\";\n    ContextPrecision[\"MediumP\"] = \"mediump\";\n    ContextPrecision[\"HighP\"] = \"highp\";\n  })(ContextPrecision || (ContextPrecision = {}));\n\n  var ContextMode;\n\n  (function (ContextMode) {\n    ContextMode[\"Flat\"] = \"flat\";\n    ContextMode[\"Box\"] = \"box\";\n    ContextMode[\"Sphere\"] = \"sphere\";\n    ContextMode[\"Torus\"] = \"torus\";\n    ContextMode[\"Mesh\"] = \"mesh\";\n  })(ContextMode || (ContextMode = {}));\n\n  var ContextDefault = {\n    'webgl': {\n      'flat': {\n        vertex: DefaultWebGLMeshVertex,\n        fragment: DefaultWebGLFlatFragment\n      },\n      'mesh': {\n        vertex: DefaultWebGLMeshVertex,\n        fragment: DefaultWebGLMeshFragment\n      }\n    },\n    'webgl2': {\n      'flat': {\n        vertex: DefaultWebGL2MeshVertex,\n        fragment: DefaultWebGL2FlatFragment\n      },\n      'mesh': {\n        vertex: DefaultWebGL2MeshVertex,\n        fragment: DefaultWebGL2MeshFragment\n      }\n    }\n  };\n\n  (function (ContextError) {\n    ContextError[ContextError[\"BrowserSupport\"] = 1] = \"BrowserSupport\";\n    ContextError[ContextError[\"Other\"] = 2] = \"Other\";\n  })(exports.ContextError || (exports.ContextError = {}));\n\n  var ContextVertexBuffers = function ContextVertexBuffers() {};\n\n  var Context = /*#__PURE__*/function () {\n    function Context() {}\n\n    Context.getContext_ = function getContext_(canvas, options) {\n      var names = ['webgl', 'experimental-webgl'];\n      var context = null;\n\n      for (var i = 0; i < names.length; ++i) {\n        try {\n          context = canvas.getContext(names[i], options);\n        } catch (e) {\n          if (context) {\n            break;\n          }\n        }\n      }\n\n      return context;\n    };\n\n    Context.getContext2_ = function getContext2_(canvas, options) {\n      var context = null;\n\n      try {\n        context = canvas.getContext('webgl2', options);\n      } catch (e) {// console.error('GlslCanvas.Context.getContext2_.error', e);\n      }\n\n      return context;\n    };\n\n    Context.getFragmentVertex = function getFragmentVertex(gl, fragmentString) {\n      var vertexString;\n\n      if (fragmentString) {\n        if (Context.isWebGl2(gl)) {\n          fragmentString = fragmentString.replace(/^\\#version\\s*300\\s*es\\s*\\n/, '');\n        }\n\n        var regexp = /(?:^\\s*)((?:#if|#elif)(?:\\s*)(defined\\s*\\(\\s*VERTEX)(?:\\s*\\))|(?:#ifdef)(?:\\s*VERTEX)(?:\\s*))/gm;\n        var matches = regexp.exec(fragmentString);\n\n        if (matches !== null) {\n          vertexString = Context.isWebGl2(gl) ? \"#version 300 es\\n#define VERTEX\\n\" + fragmentString : \"#define VERTEX\\n\" + fragmentString;\n        }\n      } // console.log('vertexString', vertexString);\n\n\n      return vertexString;\n    };\n\n    Context.getIncludes = function getIncludes(input) {\n      if (input === undefined) {\n        return Promise.resolve(input);\n      }\n\n      var regex = /#include\\s*['|\"](.*.glsl)['|\"]/gm;\n      var promises = [];\n      var i = 0;\n      var match;\n\n      while ((match = regex.exec(input)) !== null) {\n        promises.push(Promise.resolve(input.slice(i, match.index)));\n        i = match.index + match[0].length;\n        promises.push(Common.fetch(match[1]));\n      }\n\n      promises.push(Promise.resolve(input.slice(i)));\n      return Promise.all(promises).then(function (chunks) {\n        return chunks.join('');\n      });\n    };\n\n    Context.isWebGl = function isWebGl(context) {\n      return context instanceof WebGLRenderingContext;\n    };\n\n    Context.isWebGl2 = function isWebGl2(context) {\n      // console.log(context);\n      // return context !== undefined && typeof (context as any).bindBufferRange === 'function';\n      return window.WebGL2RenderingContext && context instanceof WebGL2RenderingContext;\n    };\n\n    Context.inferVersion = function inferVersion(vertexString, fragmentString) {\n      var source = vertexString || fragmentString;\n\n      if (source) {\n        return source.indexOf('#version 300 es') === 0 ? exports.ContextVersion.WebGl2 : exports.ContextVersion.WebGl;\n      } else {\n        return exports.ContextVersion.WebGl;\n      }\n    };\n\n    Context.inferPrecision = function inferPrecision(fragmentString) {\n      var precision = fragmentString.match(/precision\\s+(.+)\\s+float/);\n\n      if (precision && precision.length > 1) {\n        Context.precision = precision[1];\n      } // console.log('precision', Context.precision);\n\n\n      return Context.precision;\n    };\n\n    Context.versionDiffers = function versionDiffers(gl, vertexString, fragmentString) {\n      if (gl) {\n        var currentVersion = this.isWebGl2(gl) ? exports.ContextVersion.WebGl2 : exports.ContextVersion.WebGl;\n        var newVersion = Context.inferVersion(vertexString, fragmentString);\n        return newVersion !== currentVersion;\n      } else {\n        return false;\n      }\n    };\n\n    Context.getBufferVertex = function getBufferVertex(gl) {\n      return this.isWebGl2(gl) ? DefaultWebGL2BufferVertex : DefaultWebGLBufferVertex;\n    };\n\n    Context.getVertex = function getVertex(vertexString, fragmentString, mode) {\n      if (mode === void 0) {\n        mode = ContextMode.Flat;\n      }\n\n      if (vertexString) {\n        return vertexString;\n      } else {\n        var version = this.inferVersion(vertexString, fragmentString);\n        return ContextDefault[version][mode === ContextMode.Flat ? 'flat' : 'mesh'].vertex;\n      }\n    };\n\n    Context.getFragment = function getFragment(vertexString, fragmentString, mode) {\n      if (mode === void 0) {\n        mode = ContextMode.Flat;\n      }\n\n      if (fragmentString) {\n        return fragmentString;\n      } else {\n        var version = this.inferVersion(vertexString, fragmentString);\n        return ContextDefault[version][mode === ContextMode.Flat ? 'flat' : 'mesh'].fragment;\n      }\n    };\n\n    Context.tryInferContext = function tryInferContext(vertexString, fragmentString, canvas, attributes, extensions, errorCallback) {\n      if (extensions === void 0) {\n        extensions = [];\n      }\n\n      function handleError(errorCode, html) {\n        if (typeof errorCallback === 'function') {\n          errorCallback(errorCode);\n        } else {\n          var container = canvas.parentNode;\n\n          if (container) {\n            container.innerHTML = \"<div class=\\\"glsl-canvas--error\\\">\" + html + \"</div>\";\n          }\n        }\n      }\n\n      if (!WebGLRenderingContext) {\n        handleError(exports.ContextError.BrowserSupport, \"This page requires a browser that supports WebGL.<br/>\\n\\t\\t\\t<a href=\\\"http://get.webgl.org\\\">Click here to upgrade your browser.</a>\");\n        return null;\n      }\n\n      var context = Context.inferContext(vertexString, fragmentString, canvas, attributes);\n\n      if (!context) {\n        handleError(exports.ContextError.Other, \"It does not appear your computer can support WebGL.<br/>\\n\\t\\t\\t<a href=\\\"http://get.webgl.org/troubleshooting/\\\">Click here for more information.</a>\");\n      } else {\n        if (!this.isWebGl2(context) && extensions.indexOf('OES_standard_derivatives') === -1) {\n          extensions.push('OES_standard_derivatives');\n        }\n\n        var supportedExtensions = context.getSupportedExtensions();\n        extensions.forEach(function (key) {\n          if (supportedExtensions.indexOf(key) !== -1) {\n            context.getExtension(key);\n          } else {\n            Logger.warn(\"GlslCanvas \" + key + \" not supported\");\n          }\n        }); // context.getExtension('OES_standard_derivatives');\n      }\n\n      return context;\n    };\n\n    Context.tryGetContext = function tryGetContext(canvas, attributes, errorCallback) {\n      function handleError(errorCode, html) {\n        if (typeof errorCallback === 'function') {\n          errorCallback(errorCode);\n        } else {\n          var container = canvas.parentNode;\n\n          if (container) {\n            container.innerHTML = \"<div class=\\\"glsl-canvas--error\\\">\" + html + \"</div>\";\n          }\n        }\n      }\n\n      if (!WebGLRenderingContext) {\n        handleError(exports.ContextError.BrowserSupport, \"This page requires a browser that supports WebGL.<br/>\\n\\t\\t\\t<a href=\\\"http://get.webgl.org\\\">Click here to upgrade your browser.</a>\");\n        return null;\n      }\n\n      var context = Context.getContext_(canvas, attributes);\n\n      if (!context) {\n        handleError(exports.ContextError.Other, \"It does not appear your computer can support WebGL.<br/>\\n\\t\\t\\t<a href=\\\"http://get.webgl.org/troubleshooting/\\\">Click here for more information.</a>\");\n      } else {\n        context.getExtension('OES_standard_derivatives');\n      }\n\n      return context;\n    };\n\n    Context.inferContext = function inferContext(vertexString, fragmentString, canvas, options) {\n      var version = this.inferVersion(vertexString, fragmentString);\n      return version === exports.ContextVersion.WebGl2 ? this.getContext2_(canvas, options) : this.getContext_(canvas, options);\n    };\n\n    Context.createShader = function createShader(gl, source, type, offset) {\n      if (offset === void 0) {\n        offset = 0;\n      }\n\n      var shader = gl.createShader(type);\n      source = source.replace(/precision\\s+(.+)\\s+float/, \"precision \" + Context.precision + \" float\");\n      gl.shaderSource(shader, source);\n      gl.compileShader(shader);\n      var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n\n      if (!compiled) {\n        // Something went wrong during compilation; get the error\n        Context.lastError = gl.getShaderInfoLog(shader); // console.log('lastError', Context.lastError);\n\n        Logger.error(\"*** Error compiling shader: \" + Context.lastError); // main.trigger('error', {\n\n        gl.deleteShader(shader);\n        throw {\n          shader: shader,\n          source: source,\n          type: type,\n          error: Context.lastError,\n          offset: offset\n        };\n      }\n\n      return shader;\n    };\n\n    Context.createProgram = function createProgram(gl, shaders, attributes, locations) {\n      var program = gl.createProgram();\n\n      for (var i = 0; i < shaders.length; ++i) {\n        gl.attachShader(program, shaders[i]);\n      }\n\n      if (attributes && locations) {\n        for (var _i = 0; _i < attributes.length; ++_i) {\n          gl.bindAttribLocation(program, locations ? locations[_i] : _i, attributes[_i]);\n        }\n      }\n\n      gl.linkProgram(program);\n      gl.validateProgram(program); // Check the link status\n\n      var linked = gl.getProgramParameter(program, gl.LINK_STATUS);\n\n      if (!linked) {\n        // something went wrong with the link\n        Context.lastError = gl.getProgramInfoLog(program);\n        Logger.error(\"Error in program linking: \" + Context.lastError);\n        gl.deleteProgram(program);\n        return null;\n      }\n\n      gl.useProgram(program);\n      return program;\n    };\n\n    Context.createVertexBuffers = function createVertexBuffers(gl, program) {\n      var vertexBuffers = new ContextVertexBuffers();\n      var texcoordIndex = gl.getAttribLocation(program, 'a_texcoord');\n      vertexBuffers.texcoord = gl.createBuffer();\n      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers.texcoord);\n      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);\n      gl.enableVertexAttribArray(texcoordIndex);\n      gl.vertexAttribPointer(texcoordIndex, 2, gl.FLOAT, false, 0, 0);\n      var positionIndex = gl.getAttribLocation(program, 'a_position');\n      vertexBuffers.position = gl.createBuffer();\n      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers.position);\n      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]), gl.STATIC_DRAW);\n      gl.enableVertexAttribArray(positionIndex);\n      gl.vertexAttribPointer(positionIndex, 2, gl.FLOAT, false, 0, 0);\n      return vertexBuffers;\n    };\n\n    return Context;\n  }();\n  Context.precision = ContextPrecision.MediumP;\n  Context.lastError = '';\n\n  var StringMap = function StringMap() {};\n\n  var IterableStringMap = /*#__PURE__*/function () {\n    function IterableStringMap() {\n      this.values = new StringMap();\n    }\n\n    var _proto = IterableStringMap.prototype;\n\n    _proto.has = function has(key) {\n      return this.values.hasOwnProperty(key);\n    };\n\n    _proto.set = function set(key, item) {\n      this.values[key] = item;\n    };\n\n    _proto.get = function get(key) {\n      return this.values[key];\n    };\n\n    _proto.forEach = function forEach(callbackfn) {\n      var i = 0;\n\n      for (var key in this.values) {\n        callbackfn(this.values[key], i, this.values);\n        i++;\n      }\n    };\n\n    _proto.reduce = function reduce(callbackfn, initialValue) {\n      var previous = initialValue,\n          i = 0;\n\n      for (var key in this.values) {\n        previous = callbackfn(previous, this.values[key], i, this.values);\n        i++;\n      }\n\n      return previous;\n    };\n\n    return IterableStringMap;\n  }();\n\n  var Geometry = /*#__PURE__*/function () {\n    function Geometry(options) {\n      if (options) {\n        Object.assign(this, options);\n\n        if (this.positions) {\n          this.size = this.positions.length / 3;\n        } // this.positions = Geometry.fromIndices(options.indices, options.positions, 3);\n        // this.normals = Geometry.fromIndices(options.indices, options.normals, 3);\n        // this.texcoords = Geometry.fromIndices(options.indices, options.texcoords, 2);\n        // this.colors = Geometry.fromIndices(options.indices, options.colors, 4);\n\n      }\n    }\n\n    var _proto = Geometry.prototype;\n\n    _proto.create = function create(gl, program) {\n      this.createData_();\n      this.createAttributes_(gl, program);\n    };\n\n    _proto.createBufferData_ = function createBufferData_(gl, type, array) {\n      var buffer = gl.createBuffer();\n      gl.bindBuffer(type, buffer);\n      gl.bufferData(type, array, gl.STATIC_DRAW);\n      return buffer;\n    };\n\n    _proto.createAttribLocation_ = function createAttribLocation_(gl, program, name, size, type) {\n      var location = gl.getAttribLocation(program, name);\n      gl.enableVertexAttribArray(location);\n      gl.vertexAttribPointer(location, size, type, false, 0, 0);\n      return location;\n    };\n\n    _proto.createAttributes_ = function createAttributes_(gl, program) {\n      if (this.positions) {\n        this.positionBuffer = this.createBufferData_(gl, gl.ARRAY_BUFFER, new Float32Array(this.positions));\n        this.positionLocation = this.createAttribLocation_(gl, program, 'a_position', this.positions.length / this.size, gl.FLOAT);\n        gl.bindAttribLocation(program, this.positionLocation, 'a_position');\n      }\n\n      if (this.texcoords) {\n        this.texcoordBuffer = this.createBufferData_(gl, gl.ARRAY_BUFFER, new Float32Array(this.texcoords));\n        this.texcoordLocation = this.createAttribLocation_(gl, program, 'a_texcoord', this.texcoords.length / this.size, gl.FLOAT);\n        gl.bindAttribLocation(program, this.texcoordLocation, 'a_texcoord');\n      }\n\n      if (this.normals) {\n        this.normalBuffer = this.createBufferData_(gl, gl.ARRAY_BUFFER, new Float32Array(this.normals));\n        this.normalLocation = this.createAttribLocation_(gl, program, 'a_normal', this.normals.length / this.size, gl.FLOAT);\n        gl.bindAttribLocation(program, this.normalLocation, 'a_normal');\n      }\n\n      if (this.colors) {\n        this.colorBuffer = this.createBufferData_(gl, gl.ARRAY_BUFFER, new Float32Array(this.colors));\n        this.colorLocation = this.createAttribLocation_(gl, program, 'a_color', this.colors.length / this.size, gl.FLOAT);\n        gl.bindAttribLocation(program, this.colorLocation, 'a_color');\n      } // console.log('positionLocation', this.positionLocation);\n      // console.log('texcoordLocation', this.texcoordLocation);\n      // console.log('normalLocation', this.normalLocation);\n      // console.log('colorLocation', this.colorLocation);\n\n    };\n\n    _proto.attachAttributes_ = function attachAttributes_(gl, program) {\n      var attribLocation;\n\n      if (this.positions) {\n        // this.positionLocation = this.createAttribLocation_(gl, program, 'a_position', this.positions.length / this.size, gl.FLOAT);\n        attribLocation = gl.getAttribLocation(program, 'a_position');\n        gl.enableVertexAttribArray(attribLocation);\n        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);\n        gl.vertexAttribPointer(attribLocation, this.positions.length / this.size, gl.FLOAT, false, 0, 0); // gl.bindAttribLocation(program, this.positionLocation, 'a_position');\n        // console.log('positionLocation', attribLocation);\n      }\n\n      if (this.texcoords) {\n        // this.texcoordLocation = this.createAttribLocation_(gl, program, 'a_texcoord', this.texcoords.length / this.size, gl.FLOAT);\n        attribLocation = gl.getAttribLocation(program, 'a_texcoord');\n        gl.enableVertexAttribArray(this.texcoordLocation);\n        gl.bindBuffer(gl.ARRAY_BUFFER, this.texcoordBuffer);\n        gl.vertexAttribPointer(this.texcoordLocation, this.texcoords.length / this.size, gl.FLOAT, false, 0, 0); // gl.bindAttribLocation(program, this.texcoordLocation, 'a_texcoord');\n        // console.log('texcoordLocation', attribLocation);\n      }\n\n      if (this.normals) {\n        // this.normalLocation = this.createAttribLocation_(gl, program, 'a_normal', this.normals.length / this.size, gl.FLOAT);\n        attribLocation = gl.getAttribLocation(program, 'a_normal');\n        gl.enableVertexAttribArray(this.normalLocation);\n        gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);\n        gl.vertexAttribPointer(this.normalLocation, this.normals.length / this.size, gl.FLOAT, false, 0, 0); // gl.bindAttribLocation(program, this.normalLocation, 'a_normal');\n        // console.log('normalLocation', attribLocation);\n      }\n\n      if (this.colors) {\n        // this.colorLocation = this.createAttribLocation_(gl, program, 'a_color', this.colors.length / this.size, gl.FLOAT);\n        attribLocation = gl.getAttribLocation(program, 'a_color');\n        gl.enableVertexAttribArray(this.colorLocation);\n        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);\n        gl.vertexAttribPointer(this.colorLocation, this.colors.length / this.size, gl.FLOAT, false, 0, 0); // gl.bindAttribLocation(program, this.colorLocation, 'a_color');\n        // console.log('colorLocation', attribLocation);\n      }\n    };\n\n    _proto.bindAttributes_ = function bindAttributes_(gl, program) {\n      if (this.positions) {\n        gl.bindAttribLocation(program, this.positionLocation, 'a_position');\n      }\n\n      if (this.texcoords) {\n        gl.bindAttribLocation(program, this.texcoordLocation, 'a_texcoord');\n      }\n\n      if (this.normals) {\n        gl.bindAttribLocation(program, this.normalLocation, 'a_normal');\n      }\n\n      if (this.colors) {\n        gl.bindAttribLocation(program, this.colorLocation, 'a_color');\n      }\n    };\n\n    _proto.createData_ = function createData_() {\n      // Now create an array of positions for the cube.\n      this.positions = [];\n      this.normals = [];\n      this.texcoords = [];\n      this.colors = [];\n      this.size = 0; // console.log('positions', this.positions.length);\n      // console.log('normals', this.normals.length);\n      // console.log('texcoords', this.texcoords.length);\n      // console.log('colors', this.colors.length);\n    };\n\n    Geometry.fromIndices = function fromIndices(indices, array, size) {\n      var buffer = [];\n      indices.forEach(function (i) {\n        buffer.push.apply(buffer, array.slice(i * size, i * size + size));\n      });\n      return buffer;\n    };\n\n    return Geometry;\n  }();\n\n  var FlatGeometry = /*#__PURE__*/function (_Geometry) {\n    _inheritsLoose(FlatGeometry, _Geometry);\n\n    function FlatGeometry() {\n      return _Geometry.apply(this, arguments) || this;\n    }\n\n    var _proto = FlatGeometry.prototype;\n\n    _proto.createData_ = function createData_() {\n      this.size = 6;\n      this.positions = [-1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, 1.0, 0.0];\n      this.texcoords = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0];\n      this.normals = [0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0];\n      this.colors = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]; // console.log('positions', this.positions.length);\n      // console.log('normals', this.normals.length);\n      // console.log('texcoords', this.texcoords.length);\n      // console.log('colors', this.colors.length);\n    };\n\n    return FlatGeometry;\n  }(Geometry);\n\n  (function (BufferFloatType) {\n    BufferFloatType[BufferFloatType[\"FLOAT\"] = 0] = \"FLOAT\";\n    BufferFloatType[BufferFloatType[\"HALF_FLOAT\"] = 1] = \"HALF_FLOAT\";\n  })(exports.BufferFloatType || (exports.BufferFloatType = {}));\n\n  var Buffer = /*#__PURE__*/function () {\n    function Buffer(gl, BW, BH, index) {\n      // BW = BH = 1024;\n      var buffer = gl.createFramebuffer();\n      var texture = this.getTexture(gl, BW, BH, index);\n      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);\n      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);\n      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n      this.texture = texture;\n      this.buffer = buffer;\n      this.BW = BW;\n      this.BH = BH;\n      this.index = index;\n    }\n\n    var _proto = Buffer.prototype;\n\n    _proto.getFloatType = function getFloatType(gl) {\n      var floatType, extension;\n\n      if (Buffer.floatType === exports.BufferFloatType.FLOAT) {\n        var extensionName = Context.isWebGl2(gl) ? 'EXT_color_buffer_float' : 'OES_texture_float';\n        extension = gl.getExtension(extensionName);\n\n        if (extension) {\n          floatType = gl.FLOAT;\n        } else {\n          Buffer.floatType = exports.BufferFloatType.HALF_FLOAT;\n          return this.getFloatType(gl);\n        }\n      } else {\n        var _extensionName = Context.isWebGl2(gl) ? 'EXT_color_buffer_half_float' : 'OES_texture_half_float';\n\n        extension = gl.getExtension(_extensionName);\n\n        if (extension) {\n          floatType = extension.HALF_FLOAT_OES;\n        } else {\n          Buffer.floatType = exports.BufferFloatType.FLOAT;\n          return this.getFloatType(gl);\n        }\n      }\n\n      return floatType;\n    };\n\n    _proto.getTexture = function getTexture(gl, BW, BH, index) {\n      // BW = BH = 1024;\n      var floatType = this.getFloatType(gl);\n      var texture = gl.createTexture();\n      gl.activeTexture(gl.TEXTURE0 + index);\n      gl.bindTexture(gl.TEXTURE_2D, texture);\n      gl.texImage2D(gl.TEXTURE_2D, 0, Context.isWebGl2(gl) ? gl.RGBA16F : gl.RGBA, BW, BH, 0, gl.RGBA, floatType, null);\n      var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);\n\n      if (status !== gl.FRAMEBUFFER_COMPLETE) {\n        if (Buffer.floatType === exports.BufferFloatType.FLOAT) {\n          Buffer.floatType = exports.BufferFloatType.HALF_FLOAT;\n        } else {\n          Buffer.floatType = exports.BufferFloatType.FLOAT;\n        }\n\n        return this.getTexture(gl, BW, BH, index);\n      }\n\n      return texture;\n    };\n\n    _proto.resize = function resize(gl, BW, BH) {\n      // BW = BH = 1024;\n      if (BW !== this.BW || BH !== this.BH) {\n        var buffer = this.buffer;\n        var texture = this.texture;\n        var index = this.index;\n        gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);\n        var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);\n        var minW = Math.min(BW, this.BW);\n        var minH = Math.min(BH, this.BH);\n        var pixels;\n        var floatType = this.getFloatType(gl);\n\n        if (status === gl.FRAMEBUFFER_COMPLETE) {\n          pixels = new Float32Array(minW * minH * 4);\n          gl.readPixels(0, 0, minW, minH, gl.RGBA, floatType, pixels);\n        }\n\n        gl.bindFramebuffer(gl.FRAMEBUFFER, null);\n        var newIndex = index + 1; // temporary index\n\n        var newTexture = this.getTexture(gl, BW, BH, newIndex);\n        floatType = this.getFloatType(gl);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n\n        if (pixels) {\n          gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, minW, minH, gl.RGBA, floatType, pixels);\n        }\n\n        var newBuffer = gl.createFramebuffer();\n        /*\r\n        if (!newBuffer) {\r\n            Logger.error('Failed to create the frame buffer object');\r\n            return null;\r\n        }\r\n        */\n\n        gl.bindFramebuffer(gl.FRAMEBUFFER, null);\n        gl.deleteTexture(texture);\n        gl.activeTexture(gl.TEXTURE0 + index);\n        gl.bindTexture(gl.TEXTURE_2D, newTexture);\n        this.index = index;\n        this.texture = newTexture;\n        this.buffer = newBuffer;\n        this.BW = BW;\n        this.BH = BH;\n      }\n    };\n\n    return Buffer;\n  }();\n  Buffer.floatType = exports.BufferFloatType.HALF_FLOAT;\n  var IOBuffer = /*#__PURE__*/function () {\n    function IOBuffer(index, key, vertexString, fragmentString) {\n      this.isValid = false;\n      this.index = index;\n      this.key = key;\n      this.vertexString = vertexString;\n      this.fragmentString = fragmentString;\n      this.geometry = new FlatGeometry();\n    }\n\n    var _proto2 = IOBuffer.prototype;\n\n    _proto2.create = function create(gl, BW, BH) {\n      // BW = BH = 1024;\n      var vertexShader = Context.createShader(gl, this.vertexString, gl.VERTEX_SHADER);\n      var fragmentShader = Context.createShader(gl, this.fragmentString, gl.FRAGMENT_SHADER, 1);\n\n      if (!fragmentShader) {\n        fragmentShader = Context.createShader(gl, Context.isWebGl2(gl) ? DefaultWebGL2BufferFragment : DefaultWebGLBufferFragment, gl.FRAGMENT_SHADER);\n        this.isValid = false;\n      } else {\n        this.isValid = true;\n      }\n\n      var program = Context.createProgram(gl, [vertexShader, fragmentShader]);\n\n      if (!program) {\n        this.isValid = false;\n        gl.deleteShader(vertexShader);\n        gl.deleteShader(fragmentShader);\n        return;\n      }\n\n      this.geometry.create(gl, program);\n      gl.deleteShader(vertexShader);\n      gl.deleteShader(fragmentShader);\n      var input = new Buffer(gl, BW, BH, this.index + 0);\n      var output = new Buffer(gl, BW, BH, this.index + 2);\n      this.program = program;\n      this.input = input;\n      this.output = output; // console.log(geometry.position.length / 3, geometry.size);\n      // console.log(gl.getProgramInfoLog(program));\n      // Context.lastError = gl.getProgramInfoLog(program);\n      // Logger.warn(`Error in program linking: ${Context.lastError}`);\n    };\n\n    _proto2.render = function render(gl, BW, BH) {\n      // BW = BH = 1024;\n      gl.useProgram(this.program); // gl.activeTexture(gl.TEXTURE0);\n      // gl.bindTexture(gl.TEXTURE_2D, this.input.texture);\n\n      gl.bindFramebuffer(gl.FRAMEBUFFER, this.output.buffer); // gl.bindTexture(gl.TEXTURE_2D, this.output.texture);\n      // console.log(this.output.texture);\n      // console.log('binding', gl.getParameter(gl.FRAMEBUFFER_BINDING));\n      // gl.enable(gl.DEPTH_TEST); // Enable depth testing\n      // gl.depthFunc(gl.LEQUAL); // Near things obscure far things\n\n      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.output.texture, 0);\n      var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);\n\n      if (status === gl.FRAMEBUFFER_COMPLETE) {\n        // Clear the canvas before we start drawing on it.\n        gl.clearColor(0, 0, 0, 1); // black\n\n        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\n      } // this.geometry.createAttributes_(gl, this.program);\n      // this.geometry.bindAttributes_(gl, this.program);\n\n\n      gl.viewport(0, 0, BW, BH);\n      gl.drawArrays(gl.TRIANGLES, 0, this.geometry.size); // console.log(this.geometry.size);\n      // gl.bindFramebuffer(gl.FRAMEBUFFER, null);\n      // console.log(BW, BH);\n      // console.log(gl.getProgramInfoLog(this.program));\n      // swap\n\n      var input = this.input; // const output = this.output;\n\n      this.input = this.output;\n      this.output = input; // console.log('swap');\n    };\n\n    _proto2.resize = function resize(gl, BW, BH) {\n      // BW = BH = 1024;\n      gl.useProgram(this.program);\n      gl.viewport(0, 0, BW, BH);\n      this.input.resize(gl, BW, BH);\n      this.output.resize(gl, BW, BH);\n    };\n\n    _proto2.destroy = function destroy(gl) {\n      gl.deleteProgram(this.program);\n      this.program = null;\n      this.input = null;\n      this.output = null;\n    };\n\n    return IOBuffer;\n  }();\n\n  var Buffers = /*#__PURE__*/function (_IterableStringMap) {\n    _inheritsLoose(Buffers, _IterableStringMap);\n\n    function Buffers() {\n      return _IterableStringMap.apply(this, arguments) || this;\n    }\n\n    Buffers.getBuffers = function getBuffers(gl, fragmentString, vertexString) {\n      var buffers = new Buffers();\n      var count = 0;\n\n      if (fragmentString) {\n        if (Context.isWebGl2(gl)) {\n          fragmentString = fragmentString.replace(/^\\#version\\s*300\\s*es\\s*\\n/, '');\n        }\n\n        var regexp = /(?:^\\s*)((?:#if|#elif)(?:\\s*)(defined\\s*\\(\\s*BUFFER_)(\\d+)(?:\\s*\\))|(?:#ifdef)(?:\\s*BUFFER_)(\\d+)(?:\\s*))/gm;\n        var matches;\n\n        while ((matches = regexp.exec(fragmentString)) !== null) {\n          var i = matches[3] || matches[4];\n          var key = 'u_buffer' + i;\n          var bufferFragmentString = Context.isWebGl2(gl) ? \"#version 300 es\\n#define BUFFER_\" + i + \"\\n\" + fragmentString : \"#define BUFFER_\" + i + \"\\n\" + fragmentString;\n          var buffer = new IOBuffer(count, key, vertexString, bufferFragmentString);\n          buffer.create(gl, gl.drawingBufferWidth, gl.drawingBufferHeight);\n\n          if (buffer.program) {\n            buffers.set(key, buffer);\n          } else {\n            throw \"buffer error \" + key;\n          }\n\n          count += 4;\n        }\n      }\n\n      return buffers;\n    };\n\n    _createClass(Buffers, [{\n      key: \"count\",\n      get: function get() {\n        return Object.keys(this.values).length * 4;\n      }\n    }]);\n\n    return Buffers;\n  }(IterableStringMap);\n\n  var Vector2 = /*#__PURE__*/function () {\n    function Vector2(x, y) {\n      if (x === void 0) {\n        x = 0;\n      }\n\n      if (y === void 0) {\n        y = 0;\n      }\n\n      this.isVector2 = true;\n      this.x = x;\n      this.y = y;\n    }\n\n    var _proto = Vector2.prototype;\n\n    _proto.copy = function copy(v) {\n      this.x = v.x;\n      this.y = v.y;\n      return this;\n    };\n\n    _proto.length = function length() {\n      return Math.sqrt(this.x * this.x + this.y * this.y);\n    };\n\n    _proto.normalize = function normalize() {\n      return this.divideScalar(this.length() || 1);\n    };\n\n    _proto.divideScalar = function divideScalar(scalar) {\n      return this.multiplyScalar(1 / scalar);\n    };\n\n    _proto.multiplyScalar = function multiplyScalar(scalar) {\n      this.x *= scalar;\n      this.y *= scalar;\n      return this;\n    };\n\n    _proto.subVectors = function subVectors(a, b) {\n      this.x = a.x - b.x;\n      this.y = a.y - b.y;\n      return this;\n    };\n\n    _proto.addVectors = function addVectors(a, b) {\n      this.x = a.x + b.x;\n      this.y = a.y + b.y;\n      return this;\n    };\n\n    return Vector2;\n  }();\n\n  var Vector3 = /*#__PURE__*/function () {\n    function Vector3(x, y, z) {\n      if (x === void 0) {\n        x = 0;\n      }\n\n      if (y === void 0) {\n        y = 0;\n      }\n\n      if (z === void 0) {\n        z = 0;\n      }\n\n      this.isVector3 = true;\n      this.x = x;\n      this.y = y;\n      this.z = z;\n    }\n\n    var _proto = Vector3.prototype;\n\n    _proto.copy = function copy(v) {\n      this.x = v.x;\n      this.y = v.y;\n      this.z = v.z;\n      return this;\n    };\n\n    _proto.length = function length() {\n      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);\n    };\n\n    _proto.normalize = function normalize() {\n      return this.divideScalar(this.length() || 1);\n    };\n\n    _proto.divideScalar = function divideScalar(scalar) {\n      return this.multiplyScalar(1 / scalar);\n    };\n\n    _proto.multiplyScalar = function multiplyScalar(scalar) {\n      this.x *= scalar;\n      this.y *= scalar;\n      this.z *= scalar;\n      return this;\n    };\n\n    _proto.subVectors = function subVectors(a, b) {\n      this.x = a.x - b.x;\n      this.y = a.y - b.y;\n      this.z = a.z - b.z;\n      return this;\n    };\n\n    _proto.addVectors = function addVectors(a, b) {\n      this.x = a.x + b.x;\n      this.y = a.y + b.y;\n      this.z = a.z + b.z;\n      return this;\n    };\n\n    _proto.crossVectors = function crossVectors(a, b) {\n      var ax = a.x,\n          ay = a.y,\n          az = a.z;\n      var bx = b.x,\n          by = b.y,\n          bz = b.z;\n      this.x = ay * bz - az * by;\n      this.y = az * bx - ax * bz;\n      this.z = ax * by - ay * bx;\n      return this;\n    };\n\n    return Vector3;\n  }();\n\n  var PI = Math.PI;\n  var RAD = PI / 180;\n\n  var OrbitCamera = /*#__PURE__*/function (_Vector) {\n    _inheritsLoose(OrbitCamera, _Vector);\n\n    function OrbitCamera(theta, phi, radius) {\n      var _this;\n\n      _this = _Vector.call(this) || this;\n      _this.position = new Vector3();\n      _this.value = new Float32Array([0, 0, 0]);\n      _this.mouse = null;\n      _this.dirty = false;\n      _this.theta = (theta || 0) * RAD;\n      _this.phi = (phi || 0) * RAD;\n      _this.radius = radius || 6.0; // this.update();\n\n      return _this;\n    }\n\n    var _proto = OrbitCamera.prototype;\n\n    _proto.down = function down(x, y) {\n      this.mouse = new Vector2(x, y);\n    };\n\n    _proto.move = function move(x, y) {\n      var mouse = this.mouse;\n\n      if (mouse && (mouse.x !== x || mouse.y !== y)) {\n        var theta = (x - mouse.x) * 180 * RAD;\n        var phi = (y - mouse.y) * 180 * RAD;\n        mouse.x = x;\n        mouse.y = y;\n        this.theta += theta;\n        this.phi = Math.max(-60 * RAD, Math.min(60 * RAD, this.phi + phi)); // this.update();\n      }\n    };\n\n    _proto.up = function up() {\n      this.mouse = null;\n    };\n\n    _proto.wheel = function wheel(d) {\n      this.radius = Math.max(4.0, Math.min(10.0, this.radius + d * 0.02));\n    };\n\n    OrbitCamera.fromVector = function fromVector(vector) {\n      var radius = vector.length();\n      var theta = Math.acos(vector.y / radius); //theta\n\n      var phi = Math.atan(vector.x / vector.z); //phi\n\n      return new OrbitCamera(theta, phi, radius);\n    };\n\n    return OrbitCamera;\n  }(Vector3);\n\n  /**\r\n   * Common utilities\r\n   * @module glMatrix\r\n   */\n  // Configuration Constants\n  var EPSILON = 0.000001;\n  var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;\n  if (!Math.hypot) Math.hypot = function () {\n    var y = 0,\n        i = arguments.length;\n\n    while (i--) {\n      y += arguments[i] * arguments[i];\n    }\n\n    return Math.sqrt(y);\n  };\n\n  /**\r\n   * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.\r\n   * @module mat4\r\n   */\n\n  /**\r\n   * Creates a new identity mat4\r\n   *\r\n   * @returns {mat4} a new 4x4 matrix\r\n   */\n\n  function create() {\n    var out = new ARRAY_TYPE(16);\n\n    if (ARRAY_TYPE != Float32Array) {\n      out[1] = 0;\n      out[2] = 0;\n      out[3] = 0;\n      out[4] = 0;\n      out[6] = 0;\n      out[7] = 0;\n      out[8] = 0;\n      out[9] = 0;\n      out[11] = 0;\n      out[12] = 0;\n      out[13] = 0;\n      out[14] = 0;\n    }\n\n    out[0] = 1;\n    out[5] = 1;\n    out[10] = 1;\n    out[15] = 1;\n    return out;\n  }\n  /**\r\n   * Set a mat4 to the identity matrix\r\n   *\r\n   * @param {mat4} out the receiving matrix\r\n   * @returns {mat4} out\r\n   */\n\n  function identity(out) {\n    out[0] = 1;\n    out[1] = 0;\n    out[2] = 0;\n    out[3] = 0;\n    out[4] = 0;\n    out[5] = 1;\n    out[6] = 0;\n    out[7] = 0;\n    out[8] = 0;\n    out[9] = 0;\n    out[10] = 1;\n    out[11] = 0;\n    out[12] = 0;\n    out[13] = 0;\n    out[14] = 0;\n    out[15] = 1;\n    return out;\n  }\n  /**\r\n   * Transpose the values of a mat4\r\n   *\r\n   * @param {mat4} out the receiving matrix\r\n   * @param {mat4} a the source matrix\r\n   * @returns {mat4} out\r\n   */\n\n  function transpose(out, a) {\n    // If we are transposing ourselves we can skip a few steps but have to cache some values\n    if (out === a) {\n      var a01 = a[1],\n          a02 = a[2],\n          a03 = a[3];\n      var a12 = a[6],\n          a13 = a[7];\n      var a23 = a[11];\n      out[1] = a[4];\n      out[2] = a[8];\n      out[3] = a[12];\n      out[4] = a01;\n      out[6] = a[9];\n      out[7] = a[13];\n      out[8] = a02;\n      out[9] = a12;\n      out[11] = a[14];\n      out[12] = a03;\n      out[13] = a13;\n      out[14] = a23;\n    } else {\n      out[0] = a[0];\n      out[1] = a[4];\n      out[2] = a[8];\n      out[3] = a[12];\n      out[4] = a[1];\n      out[5] = a[5];\n      out[6] = a[9];\n      out[7] = a[13];\n      out[8] = a[2];\n      out[9] = a[6];\n      out[10] = a[10];\n      out[11] = a[14];\n      out[12] = a[3];\n      out[13] = a[7];\n      out[14] = a[11];\n      out[15] = a[15];\n    }\n\n    return out;\n  }\n  /**\r\n   * Inverts a mat4\r\n   *\r\n   * @param {mat4} out the receiving matrix\r\n   * @param {mat4} a the source matrix\r\n   * @returns {mat4} out\r\n   */\n\n  function invert(out, a) {\n    var a00 = a[0],\n        a01 = a[1],\n        a02 = a[2],\n        a03 = a[3];\n    var a10 = a[4],\n        a11 = a[5],\n        a12 = a[6],\n        a13 = a[7];\n    var a20 = a[8],\n        a21 = a[9],\n        a22 = a[10],\n        a23 = a[11];\n    var a30 = a[12],\n        a31 = a[13],\n        a32 = a[14],\n        a33 = a[15];\n    var b00 = a00 * a11 - a01 * a10;\n    var b01 = a00 * a12 - a02 * a10;\n    var b02 = a00 * a13 - a03 * a10;\n    var b03 = a01 * a12 - a02 * a11;\n    var b04 = a01 * a13 - a03 * a11;\n    var b05 = a02 * a13 - a03 * a12;\n    var b06 = a20 * a31 - a21 * a30;\n    var b07 = a20 * a32 - a22 * a30;\n    var b08 = a20 * a33 - a23 * a30;\n    var b09 = a21 * a32 - a22 * a31;\n    var b10 = a21 * a33 - a23 * a31;\n    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant\n\n    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;\n\n    if (!det) {\n      return null;\n    }\n\n    det = 1.0 / det;\n    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;\n    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;\n    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;\n    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;\n    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;\n    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;\n    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;\n    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;\n    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;\n    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;\n    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;\n    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;\n    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;\n    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;\n    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;\n    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;\n    return out;\n  }\n  /**\r\n   * Translate a mat4 by the given vector\r\n   *\r\n   * @param {mat4} out the receiving matrix\r\n   * @param {mat4} a the matrix to translate\r\n   * @param {vec3} v vector to translate by\r\n   * @returns {mat4} out\r\n   */\n\n  function translate(out, a, v) {\n    var x = v[0],\n        y = v[1],\n        z = v[2];\n    var a00, a01, a02, a03;\n    var a10, a11, a12, a13;\n    var a20, a21, a22, a23;\n\n    if (a === out) {\n      out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];\n      out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];\n      out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];\n      out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];\n    } else {\n      a00 = a[0];\n      a01 = a[1];\n      a02 = a[2];\n      a03 = a[3];\n      a10 = a[4];\n      a11 = a[5];\n      a12 = a[6];\n      a13 = a[7];\n      a20 = a[8];\n      a21 = a[9];\n      a22 = a[10];\n      a23 = a[11];\n      out[0] = a00;\n      out[1] = a01;\n      out[2] = a02;\n      out[3] = a03;\n      out[4] = a10;\n      out[5] = a11;\n      out[6] = a12;\n      out[7] = a13;\n      out[8] = a20;\n      out[9] = a21;\n      out[10] = a22;\n      out[11] = a23;\n      out[12] = a00 * x + a10 * y + a20 * z + a[12];\n      out[13] = a01 * x + a11 * y + a21 * z + a[13];\n      out[14] = a02 * x + a12 * y + a22 * z + a[14];\n      out[15] = a03 * x + a13 * y + a23 * z + a[15];\n    }\n\n    return out;\n  }\n  /**\r\n   * Rotates a mat4 by the given angle around the given axis\r\n   *\r\n   * @param {mat4} out the receiving matrix\r\n   * @param {mat4} a the matrix to rotate\r\n   * @param {Number} rad the angle to rotate the matrix by\r\n   * @param {vec3} axis the axis to rotate around\r\n   * @returns {mat4} out\r\n   */\n\n  function rotate(out, a, rad, axis) {\n    var x = axis[0],\n        y = axis[1],\n        z = axis[2];\n    var len = Math.hypot(x, y, z);\n    var s, c, t;\n    var a00, a01, a02, a03;\n    var a10, a11, a12, a13;\n    var a20, a21, a22, a23;\n    var b00, b01, b02;\n    var b10, b11, b12;\n    var b20, b21, b22;\n\n    if (len < EPSILON) {\n      return null;\n    }\n\n    len = 1 / len;\n    x *= len;\n    y *= len;\n    z *= len;\n    s = Math.sin(rad);\n    c = Math.cos(rad);\n    t = 1 - c;\n    a00 = a[0];\n    a01 = a[1];\n    a02 = a[2];\n    a03 = a[3];\n    a10 = a[4];\n    a11 = a[5];\n    a12 = a[6];\n    a13 = a[7];\n    a20 = a[8];\n    a21 = a[9];\n    a22 = a[10];\n    a23 = a[11]; // Construct the elements of the rotation matrix\n\n    b00 = x * x * t + c;\n    b01 = y * x * t + z * s;\n    b02 = z * x * t - y * s;\n    b10 = x * y * t - z * s;\n    b11 = y * y * t + c;\n    b12 = z * y * t + x * s;\n    b20 = x * z * t + y * s;\n    b21 = y * z * t - x * s;\n    b22 = z * z * t + c; // Perform rotation-specific matrix multiplication\n\n    out[0] = a00 * b00 + a10 * b01 + a20 * b02;\n    out[1] = a01 * b00 + a11 * b01 + a21 * b02;\n    out[2] = a02 * b00 + a12 * b01 + a22 * b02;\n    out[3] = a03 * b00 + a13 * b01 + a23 * b02;\n    out[4] = a00 * b10 + a10 * b11 + a20 * b12;\n    out[5] = a01 * b10 + a11 * b11 + a21 * b12;\n    out[6] = a02 * b10 + a12 * b11 + a22 * b12;\n    out[7] = a03 * b10 + a13 * b11 + a23 * b12;\n    out[8] = a00 * b20 + a10 * b21 + a20 * b22;\n    out[9] = a01 * b20 + a11 * b21 + a21 * b22;\n    out[10] = a02 * b20 + a12 * b21 + a22 * b22;\n    out[11] = a03 * b20 + a13 * b21 + a23 * b22;\n\n    if (a !== out) {\n      // If the source and destination differ, copy the unchanged last row\n      out[12] = a[12];\n      out[13] = a[13];\n      out[14] = a[14];\n      out[15] = a[15];\n    }\n\n    return out;\n  }\n  /**\r\n   * Generates a perspective projection matrix with the given bounds.\r\n   * Passing null/undefined/no value for far will generate infinite projection matrix.\r\n   *\r\n   * @param {mat4} out mat4 frustum matrix will be written into\r\n   * @param {number} fovy Vertical field of view in radians\r\n   * @param {number} aspect Aspect ratio. typically viewport width/height\r\n   * @param {number} near Near bound of the frustum\r\n   * @param {number} far Far bound of the frustum, can be null or Infinity\r\n   * @returns {mat4} out\r\n   */\n\n  function perspective(out, fovy, aspect, near, far) {\n    var f = 1.0 / Math.tan(fovy / 2),\n        nf;\n    out[0] = f / aspect;\n    out[1] = 0;\n    out[2] = 0;\n    out[3] = 0;\n    out[4] = 0;\n    out[5] = f;\n    out[6] = 0;\n    out[7] = 0;\n    out[8] = 0;\n    out[9] = 0;\n    out[11] = -1;\n    out[12] = 0;\n    out[13] = 0;\n    out[15] = 0;\n\n    if (far != null && far !== Infinity) {\n      nf = 1 / (near - far);\n      out[10] = (far + near) * nf;\n      out[14] = 2 * far * near * nf;\n    } else {\n      out[10] = -1;\n      out[14] = -2 * near;\n    }\n\n    return out;\n  }\n\n  var CanvasTimer = /*#__PURE__*/function () {\n    function CanvasTimer() {\n      this.delay = 0.0;\n      this.current = 0.0;\n      this.delta = 0.0;\n      this.paused = false;\n      this.start = this.previous = this.now();\n    }\n\n    var _proto = CanvasTimer.prototype;\n\n    _proto.now = function now() {\n      return performance.now();\n    };\n\n    _proto.play = function play() {\n      if (this.previous) {\n        var now = this.now();\n        this.delay += now - this.previous;\n        this.previous = now;\n      } // Logger.log(this.delay);\n\n\n      this.paused = false;\n    };\n\n    _proto.pause = function pause() {\n      this.paused = true;\n    };\n\n    _proto.next = function next() {\n      var now = this.now();\n      this.delta = now - this.previous;\n      this.current = now - this.start - this.delay;\n      this.previous = now;\n      return this;\n    };\n\n    return CanvasTimer;\n  }();\n\n  var Listener = function Listener(event, callback) {\n    this.event = event;\n    this.callback = callback;\n  };\n\n  var Subscriber = /*#__PURE__*/function () {\n    function Subscriber() {\n      this.listeners = new Set();\n    }\n\n    var _proto = Subscriber.prototype;\n\n    _proto.logListeners = function logListeners() {\n      this.listeners.forEach(function (x) {\n        return Logger.log(x);\n      });\n    };\n\n    _proto.subscribe = function subscribe(listener) {\n      this.listeners.add(listener);\n    };\n\n    _proto.unsubscribe = function unsubscribe(listener) {\n      this.listeners.delete(listener);\n    };\n\n    _proto.unsubscribeAll = function unsubscribeAll() {\n      this.listeners.clear();\n    };\n\n    _proto.on = function on(event, callback) {\n      this.listeners.add(new Listener(event, callback));\n      return this;\n    };\n\n    _proto.off = function off(event, callback) {\n      var _this = this;\n\n      if (callback) {\n        this.listeners.delete(new Listener(event, callback));\n      } else {\n        this.listeners.forEach(function (x) {\n          if (x.event === event) {\n            _this.listeners.delete(x);\n          }\n        });\n      }\n\n      return this;\n    };\n\n    _proto.trigger = function trigger(event) {\n      for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        data[_key - 1] = arguments[_key];\n      }\n\n      this.listeners.forEach(function (x) {\n        if (x.event === event && typeof x.callback === 'function') {\n          x.callback.apply(x, data);\n        }\n      });\n      return this;\n    };\n\n    return Subscriber;\n  }();\n\n  var BoxGeometry = /*#__PURE__*/function (_Geometry) {\n    _inheritsLoose(BoxGeometry, _Geometry);\n\n    function BoxGeometry() {\n      return _Geometry.apply(this, arguments) || this;\n    }\n\n    var _proto = BoxGeometry.prototype;\n\n    _proto.createData_ = function createData_() {\n      this.size = 36; // Now create an array of positions for the cube.\n\n      this.positions = [// Front face\n      -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, // Back face\n      -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, // Top face\n      -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, // Bottom face\n      -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0, // Right face\n      1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, // Left face\n      -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0];\n      this.texcoords = [// Front\n      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, // Back\n      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, // Top\n      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, // Bottom\n      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, // Right\n      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, // Left\n      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0];\n      this.normals = [// Front\n      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, // Back\n      0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, // Top\n      0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, // Bottom\n      0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, // Right\n      1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, // Left\n      -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0]; // Now set up the colors for the faces. We'll use solid colors\n      // for each face.\n\n      var faceColors = [[1.0, 1.0, 1.0, 1.0], [1.0, 0.0, 0.0, 1.0], [0.0, 1.0, 0.0, 1.0], [0.0, 0.0, 1.0, 1.0], [1.0, 1.0, 0.0, 1.0], [1.0, 0.0, 1.0, 1.0]]; // Convert the array of colors into a table for all the vertices.\n\n      var colors = [];\n\n      for (var j = 0; j < faceColors.length; ++j) {\n        var c = faceColors[j]; // Repeat each color four times for the four vertices of the face\n\n        colors = colors.concat(c, c, c, c, c, c);\n      }\n\n      this.colors = colors; // console.log('positions', this.positions.length);\n      // console.log('normals', this.normals.length);\n      // console.log('texcoords', this.texcoords.length);\n      // console.log('colors', this.colors.length);\n    };\n\n    return BoxGeometry;\n  }(Geometry);\n\n  var SphereGeometry = /*#__PURE__*/function (_Geometry) {\n    _inheritsLoose(SphereGeometry, _Geometry);\n\n    function SphereGeometry() {\n      return _Geometry.apply(this, arguments) || this;\n    }\n\n    var _proto = SphereGeometry.prototype;\n\n    _proto.createData_ = function createData_() {\n      var radius = 1.4;\n      var widthDivisions = 80;\n      var heightDivisions = 60;\n      var phiStart = 0;\n      var phiLength = Math.PI * 2;\n      var thetaStart = 0;\n      var thetaLength = Math.PI;\n      var p = new Vector3();\n      var n = new Vector3(); // buffers\n\n      var indices = [];\n      var positions = [];\n      var normals = [];\n      var texcoords = [];\n      var colors = []; //\n\n      var thetaEnd = Math.min(thetaStart + thetaLength, Math.PI);\n      var ix, iy;\n      var index = 0;\n      var grid = []; // generate positions, normals and uvs\n\n      for (iy = 0; iy <= heightDivisions; iy++) {\n        var positionRow = [];\n        var v = iy / heightDivisions; // special case for the poles\n\n        var uOffset = 0;\n\n        if (iy == 0 && thetaStart == 0) {\n          uOffset = 0.5 / widthDivisions;\n        } else if (iy == heightDivisions && thetaEnd == Math.PI) {\n          uOffset = -0.5 / widthDivisions;\n        }\n\n        for (ix = 0; ix <= widthDivisions; ix++) {\n          var u = ix / widthDivisions; // position\n\n          p.x = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);\n          p.y = radius * Math.cos(thetaStart + v * thetaLength);\n          p.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);\n          positions.push(p.x, p.y, p.z); // normal\n\n          n.copy(p).normalize();\n          normals.push(n.x, n.y, n.z); // uv\n\n          var uvx = u + uOffset;\n          var uvy = 1 - v;\n          texcoords.push(uvx, uvy);\n          colors.push(1.0, 1.0, 1.0, 1.0);\n          positionRow.push(index++);\n        }\n\n        grid.push(positionRow);\n      } // indices\n\n\n      for (iy = 0; iy < heightDivisions; iy++) {\n        for (ix = 0; ix < widthDivisions; ix++) {\n          var a = grid[iy][ix + 1];\n          var b = grid[iy][ix];\n          var c = grid[iy + 1][ix];\n          var d = grid[iy + 1][ix + 1];\n          if (iy !== 0 || thetaStart > 0) indices.push(a, b, d);\n          if (iy !== heightDivisions - 1 || thetaEnd < Math.PI) indices.push(b, c, d);\n        }\n      } // build geometry\n\n\n      this.size = indices.length; // Now create an array of positions for the cube.\n\n      this.positions = Geometry.fromIndices(indices, positions, 3);\n      this.texcoords = Geometry.fromIndices(indices, texcoords, 2);\n      this.normals = Geometry.fromIndices(indices, normals, 3); // Now set up the colors for the faces. We'll use solid colors\n      // for each face.\n\n      this.colors = Geometry.fromIndices(indices, colors, 4); // this.unrapUvw(this.positions);\n      // console.log('positions', this.positions.length);\n      // console.log('normals', this.normals.length);\n      // console.log('texcoords', this.texcoords.length);\n      // console.log('colors', this.colors.length);\n    };\n\n    return SphereGeometry;\n  }(Geometry);\n\n  var TorusGeometry = /*#__PURE__*/function (_Geometry) {\n    _inheritsLoose(TorusGeometry, _Geometry);\n\n    function TorusGeometry() {\n      return _Geometry.apply(this, arguments) || this;\n    }\n\n    var _proto = TorusGeometry.prototype;\n\n    _proto.createData_ = function createData_() {\n      var radius = 1;\n      var tube = 0.25;\n      var tubularDivisions = 200;\n      var radialDivisions = 40;\n      var p = 2;\n      var q = 3;\n      var indices = [];\n      var positions = [];\n      var normals = [];\n      var texcoords = [];\n      var colors = [];\n      var vertex = new Vector3();\n      var normal = new Vector3();\n      var p1 = new Vector3();\n      var p2 = new Vector3();\n      var B = new Vector3();\n      var T = new Vector3();\n      var N = new Vector3();\n\n      for (var i = 0; i <= tubularDivisions; ++i) {\n        var u = i / tubularDivisions * p * Math.PI * 2;\n        this.calculatePositionOnCurve(u, p, q, radius, p1);\n        this.calculatePositionOnCurve(u + 0.01, p, q, radius, p2);\n        T.subVectors(p2, p1);\n        N.addVectors(p2, p1);\n        B.crossVectors(T, N);\n        N.crossVectors(B, T);\n        B.normalize();\n        N.normalize();\n\n        for (var j = 0; j <= radialDivisions; ++j) {\n          var v = j / radialDivisions * Math.PI * 2;\n          var cx = -tube * Math.cos(v);\n          var cy = tube * Math.sin(v);\n          vertex.x = p1.x + (cx * N.x + cy * B.x);\n          vertex.y = p1.y + (cx * N.y + cy * B.y);\n          vertex.z = p1.z + (cx * N.z + cy * B.z);\n          positions.push(vertex.x, vertex.y, vertex.z);\n          normal.subVectors(vertex, p1).normalize();\n          normals.push(normal.x, normal.y, normal.z);\n          texcoords.push(i / tubularDivisions * 2.0 * Math.round(q));\n          texcoords.push(j / radialDivisions);\n          colors.push(1.0, 1.0, 1.0, 1.0);\n        }\n      }\n\n      for (var _j = 1; _j <= tubularDivisions; _j++) {\n        for (var _i = 1; _i <= radialDivisions; _i++) {\n          var a = (radialDivisions + 1) * (_j - 1) + (_i - 1);\n          var b = (radialDivisions + 1) * _j + (_i - 1);\n          var c = (radialDivisions + 1) * _j + _i;\n          var d = (radialDivisions + 1) * (_j - 1) + _i;\n          indices.push(a, b, d);\n          indices.push(b, c, d);\n        }\n      }\n\n      this.size = indices.length;\n      this.positions = Geometry.fromIndices(indices, positions, 3);\n      this.texcoords = Geometry.fromIndices(indices, texcoords, 2);\n      this.normals = Geometry.fromIndices(indices, normals, 3);\n      this.colors = Geometry.fromIndices(indices, colors, 4); // console.log('positions', this.positions.length);\n      // console.log('normals', this.normals.length);\n      // console.log('texcoords', this.texcoords.length);\n      // console.log('colors', this.colors.length);\n    };\n\n    _proto.calculatePositionOnCurve = function calculatePositionOnCurve(u, p, q, radius, position) {\n      var cu = Math.cos(u);\n      var su = Math.sin(u);\n      var quOverP = q / p * u;\n      var cs = Math.cos(quOverP);\n      position.x = radius * (2 + cs) * 0.5 * cu;\n      position.y = radius * (2 + cs) * su * 0.5;\n      position.z = radius * Math.sin(quOverP) * 0.5;\n    };\n\n    return TorusGeometry;\n  }(Geometry);\n\n  var COLORS = [[1, 1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0], [0, 1, 1]];\n  var CI = 0;\n\n  var ObjLoader = /*#__PURE__*/function () {\n    function ObjLoader() {}\n\n    var _proto = ObjLoader.prototype;\n\n    _proto.load = function load(url) {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        Common.fetch(url) // .then((response) => response.text())\n        .then(function (text) {\n          // console.log(text);\n          var data = _this.parse(text);\n\n          if (data.positions.length) {\n            var geometry = new Geometry(data);\n            resolve(geometry);\n          } else {\n            reject('ObjLoader error: empty positions');\n          }\n        }, function (error) {\n          reject(error);\n        });\n      });\n    };\n\n    _proto.parseIndices = function parseIndices(faceIndices, k, l, source, output, name) {\n      var i = 0;\n\n      while (i <= faceIndices.length - 3) {\n        var a = void 0,\n            b = void 0,\n            c = void 0;\n\n        if (i === 0) {\n          a = i;\n          b = i + 1;\n          c = i + 2;\n        } else {\n          a = i - 1;\n          b = i + 1;\n          c = i + 2;\n        }\n\n        i++;\n        var indices = [a, b, c];\n\n        for (var j = 0; j < indices.length; j++) {\n          var index = faceIndices[indices[j]][k];\n          var values = void 0;\n\n          if (index && index !== NaN) {\n            values = source[index - 1];\n\n            if (values) {\n              values = values.slice(0, l);\n              output.push.apply(output, values);\n            }\n            /*\r\n            else {\r\n                console.log('error', name, source.length, index - 1);\r\n            }\r\n            */\n\n          }\n          /*\r\n          else {\r\n              values = new Array(l).fill(0);\r\n              output.push.apply(output, values);\r\n          }\r\n          */\n\n        }\n      }\n    };\n\n    _proto.parseFaces = function parseFaces(F, V, VN, VT, positions, normals, texcoords, colors) {\n      var _this2 = this;\n\n      var si = positions.length;\n      F.forEach(function (faceIndices) {\n        // console.log(faceIndices);\n        _this2.parseIndices(faceIndices, 0, 3, V, positions, 'positions');\n\n        _this2.parseIndices(faceIndices, 2, 3, VN, normals, 'normals');\n\n        _this2.parseIndices(faceIndices, 1, 2, VT, texcoords, 'texcoords');\n      });\n      var vl = positions.length - si;\n\n      if (vl > 0) {\n        // console.log(faceIndices.length - 2);\n        var c = new Array(vl / 3).fill(0);\n        c.forEach(function () {\n          var rgb = COLORS[CI % COLORS.length];\n          colors.push(rgb[0], rgb[1], rgb[2], 1.0);\n        });\n        CI++; // console.log(positions.length, normals.length, texcoords.length, colors.length, positions.length / 3 * 2 === texcoords.length, positions.length / 3 * 4 === colors.length);\n      }\n    };\n\n    _proto.parse = function parse(text) {\n      var _this3 = this;\n\n      var positions = [],\n          normals = [],\n          texcoords = [],\n          colors = [];\n      CI = 0;\n      var V = [],\n          VN = [],\n          VT = [],\n          F = [];\n\n      if (text.indexOf('\\r\\n') !== -1) {\n        text = text.replace(/\\r\\n/g, '\\n');\n      }\n      /*\r\n      if (text.indexOf('\\\\\\n') !== - 1) {\r\n          text = text.replace(/\\\\\\n/g, '');\r\n      }\r\n      */\n\n\n      text = text.replace(/  /g, ' ');\n      var lines = text.split('\\n');\n      lines.forEach(function (line, i) {\n        if (line.indexOf('v ') === 0) {\n          if (F.length) {\n            _this3.parseFaces(F, V, VN, VT, positions, normals, texcoords, colors);\n\n            F = []; // V = [];\n            // VN = [];\n            // VT = [];\n          } // v  0.0012 -0.0055 0.0090\n\n\n          var a = line.replace('v', '').trim().split(' ');\n          var v = a.map(function (x) {\n            return parseFloat(x);\n          });\n          V.push(v);\n        } else if (line.indexOf('vn ') === 0) {\n          // vn 0.0128 0.9896 0.1431\n          var _a = line.replace('vn', '').trim().split(' ');\n\n          var _v = _a.map(function (x) {\n            return parseFloat(x);\n          });\n\n          var n = new Vector3(_v[0], _v[1], _v[2]).normalize();\n          VN.push([n.x, n.y, n.z]);\n        } else if (line.indexOf('vt ') === 0) {\n          // vt 0.5955 0.0054 0.0000\n          var _a2 = line.replace('vt', '').trim().split(' ');\n\n          var _v2 = _a2.map(function (x) {\n            return parseFloat(x);\n          });\n\n          VT.push(_v2);\n        } else if (line.indexOf('f ') === 0) {\n          // f 1//1 2//2 3//3 4//4\n          var _a3 = line.replace('f', '').trim().split(' ');\n\n          var f = _a3.map(function (x) {\n            var indices = x.split('/').map(function (y) {\n              return parseInt(y);\n            });\n\n            if (indices.length === 2) {\n              indices.push(null);\n            }\n\n            return indices;\n          });\n\n          F[F.length] = f;\n        }\n      });\n\n      if (F.length) {\n        this.parseFaces(F, V, VN, VT, positions, normals, texcoords, colors);\n      }\n\n      var boundingBox = {\n        min: new Vector3(Number.POSITIVE_INFINITY),\n        max: new Vector3(Number.NEGATIVE_INFINITY)\n      };\n\n      for (var i = 0; i < positions.length; i += 3) {\n        boundingBox.min.x = Math.min(boundingBox.min.x, positions[i]);\n        boundingBox.min.y = Math.min(boundingBox.min.y, positions[i + 1]);\n        boundingBox.min.z = Math.min(boundingBox.min.z, positions[i + 2]);\n        boundingBox.max.x = Math.max(boundingBox.max.x, positions[i]);\n        boundingBox.max.y = Math.max(boundingBox.max.y, positions[i + 1]);\n        boundingBox.max.z = Math.max(boundingBox.max.z, positions[i + 2]);\n      }\n      var dx = -(boundingBox.min.x + boundingBox.max.x) / 2;\n      var dy = -(boundingBox.min.y + boundingBox.max.y) / 2;\n      var dz = -(boundingBox.min.z + boundingBox.max.z) / 2; // console.log(dx, dy, dz);\n\n      for (var _i = 0; _i < positions.length; _i += 3) {\n        positions[_i] +=  dx ;\n        positions[_i + 1] +=  dy ;\n        positions[_i + 2] +=  dz ;\n      }\n\n      var radius = positions.reduce(function (p, c) {\n        return Math.max(p, c);\n      }, 0);\n      positions.forEach(function (x, i) {\n        return positions[i] = x / radius * 2.0;\n      });\n\n      if (!normals.length) {\n        normals = positions.slice();\n      }\n\n      if (!texcoords.length) {\n        texcoords = this.unrapUvw(positions);\n      }\n      /*\r\n      console.log(positions.length, normals.length, texcoords.length, colors.length,\r\n          positions.length / 3 * 2 === texcoords.length,\r\n          positions.length / 3 * 4 === colors.length);\r\n      */\n\n\n      return {\n        positions: positions,\n        normals: normals,\n        texcoords: texcoords,\n        colors: colors\n      };\n    };\n\n    _proto.unrapUvw = function unrapUvw(positions) {\n      var texcoords = [];\n\n      for (var i = 0; i < positions.length; i += 3) {\n        var v = new Vector3(positions[i], positions[i + 1], positions[i + 2]);\n        v.normalize();\n        var pitch = Math.asin(-v.y);\n        var yaw = Math.atan2(v.x, v.z);\n        var tx = 0.5 + pitch / Math.PI; // * 360;\n\n        var ty = 0.5 + yaw / (Math.PI * 2); // * 180;\n\n        texcoords.push(tx, ty);\n      }\n\n      return texcoords;\n    };\n\n    return ObjLoader;\n  }();\n\n  var TextureImageExtensions = ['jpg', 'jpeg', 'png'];\n  var TextureVideoExtensions = ['ogv', 'webm', 'mp4'];\n  var TextureExtensions = TextureImageExtensions.concat(TextureVideoExtensions);\n\n  (function (TextureSourceType) {\n    TextureSourceType[TextureSourceType[\"Data\"] = 0] = \"Data\";\n    TextureSourceType[TextureSourceType[\"Element\"] = 1] = \"Element\";\n    TextureSourceType[TextureSourceType[\"Url\"] = 2] = \"Url\";\n  })(exports.TextureSourceType || (exports.TextureSourceType = {}));\n\n  (function (TextureFilteringType) {\n    TextureFilteringType[\"MipMap\"] = \"mipmap\";\n    TextureFilteringType[\"Linear\"] = \"linear\";\n    TextureFilteringType[\"Nearest\"] = \"nearest\";\n  })(exports.TextureFilteringType || (exports.TextureFilteringType = {}));\n\n  function isTextureData(object) {\n    return 'data' in object && 'width' in object && 'height' in object;\n  } // GL texture wrapper object for keeping track of a global set of textures, keyed by a unique user-defined name\n\n  var Texture = /*#__PURE__*/function (_Subscriber) {\n    _inheritsLoose(Texture, _Subscriber);\n\n    function Texture(gl, key, index, options, workpath) {\n      var _this;\n\n      if (options === void 0) {\n        options = {\n          filtering: exports.TextureFilteringType.Linear\n        };\n      }\n\n      _this = _Subscriber.call(this) || this;\n      _this.valid = false;\n      _this.dirty = false;\n      _this.animated = false;\n      _this.powerOf2 = false;\n      _this.key = key;\n      _this.index = index;\n      _this.options = options;\n      _this.workpath = workpath;\n\n      _this.create(gl);\n\n      return _this;\n    }\n\n    Texture.isPowerOf2 = function isPowerOf2(value) {\n      return (value & value - 1) === 0;\n    };\n\n    Texture.isSafari = function isSafari() {\n      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);\n    };\n\n    Texture.isTextureUrl = function isTextureUrl(text) {\n      return text && /\\.(jpg|jpeg|png|ogv|webm|mp4)$/i.test(text.split('?')[0]);\n    };\n\n    Texture.isTexture = function isTexture(urlElementOrData) {\n      var options = Texture.getTextureOptions(urlElementOrData);\n      return options !== undefined;\n    };\n\n    Texture.getMaxTextureSize = function getMaxTextureSize(gl) {\n      return gl.getParameter(gl.MAX_TEXTURE_SIZE);\n    };\n\n    Texture.getTextureOptions = function getTextureOptions(urlElementOrData, options) {\n      if (options === void 0) {\n        options = {};\n      }\n\n      if (typeof urlElementOrData === 'string' && urlElementOrData !== '') {\n        if (Texture.isTextureUrl(urlElementOrData)) {\n          options.url = urlElementOrData;\n\n          if (urlElementOrData.indexOf('?') !== -1) {\n            options = urlElementOrData.split('?')[1].split('&').reduce(function (prev, curr) {\n              var params = curr.split('=');\n              var key = decodeURIComponent(params[0]);\n              var value = decodeURIComponent(params[1]);\n\n              switch (key) {\n                case 'filtering':\n                  prev[key] = value;\n                  break;\n\n                case 'repeat':\n                case 'UNPACK_FLIP_Y_WEBGL':\n                  prev[key] = Boolean(value);\n                  break;\n\n                case 'UNPACK_PREMULTIPLY_ALPHA_WEBGL':\n                case 'TEXTURE_WRAP_S':\n                case 'TEXTURE_WRAP_T':\n                  prev[key] = Number(value);\n                  break;\n              }\n\n              return prev;\n            }, options);\n          }\n\n          return options;\n        }\n\n        if (document) {\n          urlElementOrData = document.querySelector(urlElementOrData); // Logger.log(urlElementOrData);\n        }\n      }\n\n      if (urlElementOrData instanceof HTMLCanvasElement || urlElementOrData instanceof HTMLImageElement || urlElementOrData instanceof HTMLVideoElement) {\n        options.element = urlElementOrData;\n        return options;\n      } else if (isTextureData(urlElementOrData)) {\n        options.data = urlElementOrData.data;\n        options.width = urlElementOrData.width;\n        options.height = urlElementOrData.height;\n        return options;\n      } else {\n        return null;\n      }\n    };\n\n    var _proto = Texture.prototype;\n\n    _proto.create = function create(gl) {\n      this.texture = gl.createTexture();\n\n      if (this.texture) {\n        this.valid = true;\n      } // Default to a 1-pixel black texture so we can safely render while we wait for an image to load\n      // See: http://stackoverflow.com/questions/19722247/webgl-wait-for-texture-to-load\n      // [255, 255, 255, 255]\n\n\n      this.setData(gl, 1, 1, new Uint8Array([0, 0, 0, 0]), this.options); // this.bindTexture();\n      // this.load(options);\n    };\n\n    _proto.load = function load(gl, options) {\n      if (options === void 0) {\n        options = {};\n      }\n\n      this.options = options;\n\n      if (typeof options.url === 'string') {\n        if (this.url === undefined || options.url !== this.url) {\n          return this.setUrl(gl, options.url, options);\n        } else {\n          return Promise.resolve(this);\n        }\n      } else if (options.element) {\n        return this.setElement(gl, options.element, options);\n      } else if (options.data && options.width && options.height) {\n        return this.setData(gl, options.width, options.height, options.data, options);\n      } else {\n        return Promise.reject(this);\n      }\n    };\n\n    _proto.setUrl = function setUrl(gl, url, options) {\n      if (options === void 0) {\n        options = {};\n      }\n\n      if (!this.valid) {\n        return Promise.reject(this);\n      }\n\n      this.url = url; // save URL reference (will be overwritten when element is loaded below)\n\n      this.source = url;\n      this.sourceType = exports.TextureSourceType.Url;\n      this.options = Object.assign(this.options, options);\n      var src = String(url.indexOf(':/') === -1 && this.workpath !== undefined ? this.workpath + \"/\" + url : url);\n      var ext = url.split('?')[0].split('.').pop().toLowerCase();\n      var isVideo = TextureVideoExtensions.indexOf(ext) !== -1;\n      var element;\n      var promise;\n\n      if (isVideo) {\n        Logger.log('GlslCanvas.setUrl video', src);\n        element = document.createElement('video'); // new HTMLVideoElement();\n\n        element.setAttribute('preload', 'auto'); // element.setAttribute('autoplay', 'true');\n\n        element.setAttribute('loop', 'true');\n        element.setAttribute('muted', 'true');\n        element.setAttribute('playsinline', 'true'); // element.autoplay = true;\n\n        element.loop = true;\n        element.muted = true;\n        /*\r\n        if (!(Texture.isSafari() && /(?<!http|https):\\//.test(url))) {\r\n            element.crossOrigin = 'anonymous';\r\n        }\r\n        */\n\n        promise = this.setElement(gl, element, options);\n        element.src = src;\n        element.addEventListener('canplay', function () {\n          element.play();\n        });\n      } else {\n        Logger.log('GlslCanvas.setUrl image', src);\n        element = document.createElement('img'); // new HTMLImageElement();\n\n        promise = this.setElement(gl, element, options);\n\n        if (!(Texture.isSafari() && url.slice(0, 5) === 'data:')) {\n          element.crossOrigin = 'anonymous';\n        }\n\n        element.src = src;\n      }\n\n      return promise;\n    };\n\n    _proto.setElement = function setElement(gl, element, options) {\n      var _this2 = this;\n\n      if (options === void 0) {\n        options = {};\n      }\n\n      options = this.options = Object.assign(this.options, options);\n      return new Promise(function (resolve, reject) {\n        var originalElement = element; // a string element is interpeted as a CSS selector\n\n        if (typeof element === 'string') {\n          element = document.querySelector(element);\n        }\n\n        if (element instanceof HTMLCanvasElement || element instanceof HTMLImageElement || element instanceof HTMLVideoElement) {\n          _this2.source = element;\n          _this2.sourceType = exports.TextureSourceType.Element;\n\n          if (element instanceof HTMLVideoElement) {\n            var video = element;\n            video.addEventListener('loadeddata', function (event) {\n              _this2.update(gl, options);\n\n              _this2.setFiltering(gl, options);\n\n              resolve(_this2);\n            });\n            video.addEventListener('error', function (error) {\n              reject(error);\n            });\n            video.load();\n          } else if (element instanceof HTMLImageElement) {\n            element.addEventListener('load', function () {\n              _this2.update(gl, options);\n\n              _this2.setFiltering(gl, options);\n\n              resolve(_this2);\n            });\n            element.addEventListener('error', function (error) {\n              reject(error);\n            });\n          } else {\n            _this2.update(gl, options);\n\n            _this2.setFiltering(gl, options);\n\n            resolve(_this2);\n          }\n        } else {\n          var message = \"the 'element' parameter (`element: \" + JSON.stringify(originalElement) + \"`) must be a CSS selector string, or a <canvas>, <image> or <video> object\";\n          Logger.log(\"Texture '\" + _this2.key + \"': \" + message, options);\n          reject(message);\n        }\n      });\n    };\n\n    _proto.setData = function setData(gl, width, height, data, options) {\n      if (options === void 0) {\n        options = {};\n      }\n\n      this.width = width;\n      this.height = height;\n      this.options = Object.assign(this.options, options);\n      this.source = data;\n      this.sourceType = exports.TextureSourceType.Data;\n      this.update(gl, options);\n      this.setFiltering(gl, options);\n      return Promise.resolve(this);\n    } // Uploads current image or buffer to the GPU (can be used to update animated textures on the fly)\n    ;\n\n    _proto.update = function update(gl, options) {\n      if (!this.valid) {\n        return;\n      }\n\n      gl.activeTexture(gl.TEXTURE0 + this.index);\n      gl.bindTexture(gl.TEXTURE_2D, this.texture);\n      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, options.UNPACK_FLIP_Y_WEBGL === false ? 0 : 1);\n      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.UNPACK_PREMULTIPLY_ALPHA_WEBGL || 0);\n\n      if (this.sourceType === exports.TextureSourceType.Element) {\n        if (this.source instanceof HTMLImageElement && this.source.naturalWidth && this.source.naturalHeight) {\n          this.width = this.source.naturalWidth;\n          this.height = this.source.naturalHeight;\n          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.source);\n        } else if (this.source instanceof HTMLVideoElement && this.source.videoWidth && this.source.videoHeight) {\n          this.width = this.source.videoWidth;\n          this.height = this.source.videoHeight;\n          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.source);\n        } else if (this.source instanceof HTMLCanvasElement) {\n          this.width = this.source.width;\n          this.height = this.source.height;\n          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.source);\n        }\n      } else if (this.sourceType === exports.TextureSourceType.Data) {\n        var imageBuffer = this.source;\n        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageBuffer);\n      }\n\n      this.trigger('loaded', this);\n    };\n\n    _proto.tryUpdate = function tryUpdate(gl) {\n      var dirty = false;\n\n      if (this.animated) {\n        dirty = true;\n        this.update(gl, this.options);\n      }\n\n      return dirty;\n    };\n\n    _proto.destroy = function destroy(gl) {\n      if (!this.valid) {\n        return;\n      }\n\n      gl.deleteTexture(this.texture);\n      this.texture = null;\n      delete this.source;\n      this.source = null;\n      this.valid = false;\n    };\n\n    _proto.setFiltering = function setFiltering(gl, options) {\n      if (!this.valid) {\n        return;\n      }\n\n      var powerOf2 = Texture.isPowerOf2(this.width) && Texture.isPowerOf2(this.height);\n      var filtering = options.filtering || exports.TextureFilteringType.MipMap;\n      var wrapS = options.TEXTURE_WRAP_S || (options.repeat ? gl.REPEAT : gl.CLAMP_TO_EDGE);\n      var wrapT = options.TEXTURE_WRAP_T || (options.repeat ? gl.REPEAT : gl.CLAMP_TO_EDGE);\n\n      if (!powerOf2) {\n        filtering = filtering === exports.TextureFilteringType.MipMap ? exports.TextureFilteringType.Linear : filtering;\n        wrapS = wrapT = gl.CLAMP_TO_EDGE;\n\n        if (options.repeat || options.TEXTURE_WRAP_S || options.TEXTURE_WRAP_T) {\n          Logger.warn(\"GlslCanvas: cannot repeat texture \" + options.url + \" cause is not power of 2.\");\n        }\n      }\n\n      this.powerOf2 = powerOf2;\n      this.filtering = filtering; // this.bindTexture();\n      // WebGL has strict requirements on non-power-of-2 textures:\n      // No mipmaps and must clamp to edge\n      // For power-of-2 textures, the following presets are available:\n      // mipmap: linear blend from nearest mip\n      // linear: linear blend from original image (no mips)\n      // nearest: nearest pixel from original image (no mips, 'blocky' look)\n\n      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);\n      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);\n\n      if (this.filtering === exports.TextureFilteringType.MipMap) {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); // TODO: use trilinear filtering by defualt instead?\n\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);\n        gl.generateMipmap(gl.TEXTURE_2D);\n      } else if (this.filtering === exports.TextureFilteringType.Nearest) {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);\n      } else if (this.filtering === exports.TextureFilteringType.Linear) {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);\n      }\n    };\n\n    return Texture;\n  }(Subscriber);\n\n  var Textures = /*#__PURE__*/function (_IterableStringMap) {\n    _inheritsLoose(Textures, _IterableStringMap);\n\n    function Textures() {\n      var _this3;\n\n      _this3 = _IterableStringMap.apply(this, arguments) || this;\n      _this3.count = 0;\n      _this3.dirty = false;\n      _this3.animated = false;\n      return _this3;\n    }\n\n    var _proto2 = Textures.prototype;\n\n    _proto2.clean = function clean() {\n      for (var key in this.values) {\n        this.values[key].dirty = false;\n      }\n\n      this.dirty = false;\n    };\n\n    _proto2.createOrUpdate = function createOrUpdate(gl, key, urlElementOrData, index, options, workpath) {\n      var _this4 = this;\n\n      if (index === void 0) {\n        index = 0;\n      }\n\n      if (options === void 0) {\n        options = {};\n      }\n\n      var texture;\n      var textureOptions = Texture.getTextureOptions(urlElementOrData, options);\n      texture = this.get(key);\n\n      if (!texture) {\n        texture = new Texture(gl, key, index + this.count, textureOptions, workpath);\n        this.count++;\n        this.set(key, texture);\n      }\n\n      if (textureOptions !== undefined) {\n        return texture.load(gl, textureOptions).then(function (texture) {\n          if (texture.source instanceof HTMLVideoElement) {\n            var video = texture.source; // Logger.log('video', video);\n\n            video.addEventListener('play', function () {\n              // Logger.log('play', texture.key);\n              texture.animated = true;\n              _this4.animated = true;\n            });\n            video.addEventListener('pause', function () {\n              // Logger.log('pause', texture.key);\n              texture.animated = false;\n              _this4.animated = _this4.reduce(function (flag, texture) {\n                return flag || texture.animated;\n              }, false);\n            });\n            video.addEventListener('seeked', function () {\n              // Logger.log('seeked');\n              texture.update(gl, texture.options);\n              _this4.dirty = true;\n            }); // Logger.log('video');\n\n            /*\r\n            video.addEventListener('canplaythrough', () => {\r\n                // !!!\r\n                this.intervalID = setInterval(() => {\r\n                    this.update(gl, options);\r\n                }, 15);\r\n            }, true);\r\n            video.addEventListener('ended', () => {\r\n                video.currentTime = 0;\r\n                video.play();\r\n            }, true);\r\n            */\n          }\n\n          return texture;\n        });\n      } else {\n        return Promise.resolve(texture);\n      }\n    };\n\n    return Textures;\n  }(IterableStringMap);\n\n  (function (UniformMethod) {\n    UniformMethod[UniformMethod[\"Unknown\"] = 0] = \"Unknown\";\n    UniformMethod[\"Uniform1i\"] = \"uniform1i\"; // Uniform1i  = 'uniform1i', // (boolUniformLoc,   v);                // for bool\n    // Uniform1i  = 'uniform1i', // (sampler2DUniformLoc,   v);           // for sampler2D\n    // Uniform1i  = 'uniform1i', // (samplerCubeUniformLoc,   v);         // for samplerCube\n\n    UniformMethod[\"Uniform2i\"] = \"uniform2i\";\n    UniformMethod[\"Uniform3i\"] = \"uniform3i\";\n    UniformMethod[\"Uniform4i\"] = \"uniform4i\";\n    UniformMethod[\"Uniform1f\"] = \"uniform1f\";\n    UniformMethod[\"Uniform2f\"] = \"uniform2f\";\n    UniformMethod[\"Uniform3f\"] = \"uniform3f\";\n    UniformMethod[\"Uniform4f\"] = \"uniform4f\"; //\n\n    UniformMethod[\"Uniform1iv\"] = \"uniform1iv\"; // Uniform1iv = 'uniform1iv', // (boolUniformLoc, [v]);                // for bool or bool array\n    // Uniform1iv = 'uniform1iv', // (sampler2DUniformLoc, [v]);           // for sampler2D or sampler2D array\n    // Uniform1iv = 'uniform1iv', // (samplerCubeUniformLoc, [v]);         // for samplerCube or samplerCube array\n\n    UniformMethod[\"Uniform2iv\"] = \"uniform2iv\";\n    UniformMethod[\"Uniform3iv\"] = \"uniform3iv\";\n    UniformMethod[\"Uniform4iv\"] = \"uniform4iv\"; //\n\n    UniformMethod[\"Uniform1fv\"] = \"uniform1fv\";\n    UniformMethod[\"Uniform2fv\"] = \"uniform2fv\";\n    UniformMethod[\"Uniform3fv\"] = \"uniform3fv\";\n    UniformMethod[\"Uniform4fv\"] = \"uniform4fv\"; //\n\n    UniformMethod[\"UniformMatrix2fv\"] = \"uniformMatrix2fv\";\n    UniformMethod[\"UniformMatrix3fv\"] = \"uniformMatrix3fv\";\n    UniformMethod[\"UniformMatrix4fv\"] = \"uniformMatrix4fv\";\n  })(exports.UniformMethod || (exports.UniformMethod = {}));\n\n  (function (UniformType) {\n    UniformType[UniformType[\"Unknown\"] = 0] = \"Unknown\";\n    UniformType[UniformType[\"Float\"] = 1] = \"Float\";\n    UniformType[UniformType[\"Int\"] = 2] = \"Int\";\n    UniformType[UniformType[\"Bool\"] = 3] = \"Bool\";\n    UniformType[UniformType[\"Sampler2D\"] = 4] = \"Sampler2D\";\n    UniformType[UniformType[\"SamplerCube\"] = 5] = \"SamplerCube\";\n    UniformType[UniformType[\"Matrix2fv\"] = 6] = \"Matrix2fv\";\n    UniformType[UniformType[\"Matrix3fv\"] = 7] = \"Matrix3fv\";\n    UniformType[UniformType[\"Matrix4fv\"] = 8] = \"Matrix4fv\";\n  })(exports.UniformType || (exports.UniformType = {}));\n\n  var METHODS_INT = [exports.UniformMethod.Uniform1i, exports.UniformMethod.Uniform2i, exports.UniformMethod.Uniform3i, exports.UniformMethod.Uniform4i];\n  var METHODS_FLOAT = [exports.UniformMethod.Uniform1f, exports.UniformMethod.Uniform2f, exports.UniformMethod.Uniform3f, exports.UniformMethod.Uniform4f];\n  var METHODS_INTV = [exports.UniformMethod.Uniform1iv, exports.UniformMethod.Uniform2iv, exports.UniformMethod.Uniform3iv, exports.UniformMethod.Uniform4iv];\n  var METHODS_FLOATV = [exports.UniformMethod.Uniform1fv, exports.UniformMethod.Uniform2fv, exports.UniformMethod.Uniform3fv, exports.UniformMethod.Uniform4fv];\n  var Uniform = function Uniform(options) {\n    var _this = this;\n\n    this.dirty = true;\n\n    if (options) {\n      Object.assign(this, options);\n    }\n\n    switch (this.method) {\n      case exports.UniformMethod.UniformMatrix2fv:\n      case exports.UniformMethod.UniformMatrix3fv:\n      case exports.UniformMethod.UniformMatrix4fv:\n        this.apply = function (gl, program) {\n          if (_this.dirty) {\n            gl.useProgram(program);\n            var location = gl.getUniformLocation(program, _this.key); // Logger.log(this.key, this.method, this.values);\n            // (gl as any)[this.method].apply(gl, [location].concat(this.values));\n\n            gl[_this.method].apply(gl, [location, false].concat(_this.values));\n          }\n        };\n\n        break;\n\n      default:\n        this.apply = function (gl, program) {\n          if (_this.dirty) {\n            gl.useProgram(program);\n            var location = gl.getUniformLocation(program, _this.key); // Logger.log(this.key, this.method, this.values);\n            // (gl as any)[this.method].apply(gl, [location].concat(this.values));\n\n            gl[_this.method].apply(gl, [location].concat(_this.values));\n          }\n        };\n\n    }\n  };\n  var UniformTexture = /*#__PURE__*/function (_Uniform) {\n    _inheritsLoose(UniformTexture, _Uniform);\n\n    function UniformTexture(options) {\n      return _Uniform.call(this, options) || this;\n    }\n\n    return UniformTexture;\n  }(Uniform);\n\n  var Uniforms = /*#__PURE__*/function (_IterableStringMap) {\n    _inheritsLoose(Uniforms, _IterableStringMap);\n\n    function Uniforms() {\n      var _this2;\n\n      _this2 = _IterableStringMap.apply(this, arguments) || this;\n      _this2.dirty = false;\n      return _this2;\n    }\n\n    Uniforms.isArrayOfInteger = function isArrayOfInteger(array) {\n      return array.reduce(function (flag, value) {\n        return flag && Number.isInteger(value);\n      }, true);\n    };\n\n    Uniforms.isArrayOfNumber = function isArrayOfNumber(array) {\n      return array.reduce(function (flag, value) {\n        return flag && typeof value === 'number';\n      }, true);\n    };\n\n    Uniforms.isArrayOfBoolean = function isArrayOfBoolean(array) {\n      return array.reduce(function (flag, value) {\n        return flag && typeof value === 'boolean';\n      }, true);\n    };\n\n    Uniforms.isArrayOfTexture = function isArrayOfTexture(array) {\n      return array.reduce(function (flag, value) {\n        return flag && Texture.isTexture(value);\n      }, true);\n    };\n\n    Uniforms.isArrayOfSampler2D = function isArrayOfSampler2D(array) {\n      return array.reduce(function (flag, value) {\n        return flag && value.type === exports.UniformType.Sampler2D;\n      }, true);\n    };\n\n    Uniforms.getType_ = function getType_(values) {\n      var type = exports.UniformType.Unknown;\n      var isVector = values.length === 1 && Array.isArray(values[0]);\n      var subject = isVector ? values[0] : values;\n\n      if (Uniforms.isArrayOfNumber(subject)) {\n        type = exports.UniformType.Float;\n      } else if (Uniforms.isArrayOfBoolean(subject)) {\n        type = exports.UniformType.Bool;\n      } else if (Uniforms.isArrayOfTexture(subject)) {\n        type = exports.UniformType.Sampler2D;\n      }\n\n      return type;\n    };\n\n    Uniforms.getMethod_ = function getMethod_(type, values) {\n      var method = exports.UniformMethod.Unknown;\n      var isVector = values.length === 1 && Array.isArray(values[0]);\n      var subject = isVector ? values[0] : values;\n      var length = subject.length;\n      var i = length - 1;\n\n      switch (type) {\n        case exports.UniformType.Float:\n          if (isVector) {\n            method = i < METHODS_FLOATV.length ? METHODS_FLOATV[i] : exports.UniformMethod.Unknown;\n          } else {\n            method = i < METHODS_FLOAT.length ? METHODS_FLOAT[i] : exports.UniformMethod.Uniform1fv;\n          }\n\n          break;\n\n        case exports.UniformType.Int:\n        case exports.UniformType.Bool:\n          if (isVector) {\n            method = i < METHODS_INTV.length ? METHODS_INTV[i] : exports.UniformMethod.Unknown;\n          } else {\n            method = i < METHODS_INT.length ? METHODS_INT[i] : exports.UniformMethod.Uniform1iv;\n          }\n\n          break;\n\n        case exports.UniformType.Sampler2D:\n          if (isVector) {\n            method = exports.UniformMethod.Uniform1iv;\n          } else {\n            method = length === 1 ? exports.UniformMethod.Uniform1i : exports.UniformMethod.Uniform1iv;\n          }\n\n          break;\n      }\n\n      return method;\n    };\n\n    Uniforms.parseUniform = function parseUniform(key, values, type) {\n      if (type === void 0) {\n        type = null;\n      }\n\n      var uniform;\n      type = type || Uniforms.getType_(values);\n      var method = Uniforms.getMethod_(type, values);\n\n      if (type !== exports.UniformType.Unknown && method !== exports.UniformMethod.Unknown) {\n        // Logger.log('Uniforms.parseUniform', key, UniformType[type], method, values);\n        if (type === exports.UniformType.Sampler2D && method === exports.UniformMethod.Uniform1iv) {\n          return values[0].map(function (texture, index) {\n            return new Uniform({\n              method: method,\n              type: type,\n              key: key + \"[\" + index + \"]\",\n              values: [texture]\n            });\n          });\n        } else {\n          uniform = new Uniform({\n            method: method,\n            type: type,\n            key: key,\n            values: values\n          });\n        }\n      } else {\n        Logger.error('Uniforms.parseUniform.Unknown', key, values);\n      } // return this.parseUniform__bak(key, values);\n\n\n      return uniform;\n    };\n\n    var _proto = Uniforms.prototype;\n\n    _proto.create = function create(method, type, key, values) {\n      var uniform = new Uniform({\n        method: method,\n        type: type,\n        key: key,\n        values: values\n      });\n      this.set(key, uniform);\n      this.dirty = true;\n      return uniform;\n    };\n\n    _proto.createTexture = function createTexture(key, index) {\n      var uniform;\n\n      if (key.indexOf(']') !== -1) {\n        uniform = new UniformTexture({\n          method: exports.UniformMethod.Uniform1iv,\n          type: exports.UniformType.Sampler2D,\n          key: key,\n          values: [[index]]\n        });\n      } else {\n        uniform = new UniformTexture({\n          method: exports.UniformMethod.Uniform1i,\n          type: exports.UniformType.Sampler2D,\n          key: key,\n          values: [index]\n        });\n      }\n\n      this.set(key, uniform);\n      this.dirty = true;\n      return uniform;\n    };\n\n    _proto.update = function update(method, type, key, values) {\n      var uniform = this.get(key);\n\n      if (uniform) {\n        // !!! consider performance\n        // && (uniform.method !== method || uniform.type !== type || Uniforms.isDifferent(uniform.values, values))) {\n        uniform.method = method;\n        uniform.type = type;\n        uniform.values = values;\n        uniform.dirty = true;\n        this.dirty = true;\n      }\n    };\n\n    _proto.createOrUpdate = function createOrUpdate(method, type, key, values) {\n      if (this.has(key)) {\n        this.update(method, type, key, values);\n      } else {\n        this.create(method, type, key, values);\n      }\n    };\n\n    _proto.apply = function apply(gl, program) {\n      gl.useProgram(program);\n\n      for (var key in this.values) {\n        // if (typeof this.values[key].apply === 'function') {\n        this.values[key].apply(gl, program); // }\n      } // this.forEach(uniform => uniform.apply(gl, program));\n\n    };\n\n    _proto.clean = function clean() {\n      for (var key in this.values) {\n        this.values[key].dirty = false;\n      }\n\n      this.dirty = false;\n    }\n    /*\r\n    // slow\r\n    static isDifferent(a: any, b: any): boolean {\r\n        return JSON.stringify(a) !== JSON.stringify(b);\r\n    }\r\n    */\n    ;\n\n    Uniforms.isDifferent = function isDifferent(a, b) {\n      return a.length !== b.length || a.reduce(function (f, v, i) {\n        return f || v !== b[i];\n      }, false);\n    };\n\n    return Uniforms;\n  }(IterableStringMap);\n\n  var Renderer = /*#__PURE__*/function (_Subscriber) {\n    _inheritsLoose(Renderer, _Subscriber);\n\n    function Renderer() {\n      var _this;\n\n      _this = _Subscriber.call(this) || this;\n      _this.uniforms = new Uniforms();\n      _this.buffers = new Buffers();\n      _this.textures = new Textures();\n      _this.textureList = [];\n      _this.W = 0;\n      _this.H = 0;\n      _this.mouse = new Vector2();\n      _this.radians = 0;\n      _this.dirty = true;\n      _this.animated = false;\n      _this.camera = new OrbitCamera();\n      _this.cache = {};\n      _this.drawFunc_ = _this.drawArrays_;\n      return _this;\n    }\n\n    var _proto = Renderer.prototype;\n\n    _proto.render = function render() {\n      var gl = this.gl;\n\n      if (!gl) {\n        return;\n      }\n\n      var BW = gl.drawingBufferWidth;\n      var BH = gl.drawingBufferHeight;\n      this.update_();\n      gl.viewport(0, 0, BW, BH);\n\n      for (var key in this.buffers.values) {\n        var buffer = this.buffers.values[key];\n        buffer.geometry.attachAttributes_(gl, buffer.program); // this.uniforms.get('u_resolution').values = [1024, 1024];\n\n        this.uniforms.apply(gl, buffer.program);\n        /*\r\n        console.log('uniforms');\r\n        for (const key in this.uniforms.values) {\r\n            if (key.indexOf('u_buff') === 0) {\r\n                console.log(key);\r\n            }\r\n        }\r\n        */\n\n        buffer.render(gl, BW, BH);\n      } // this.uniforms.get('u_resolution').values = [BW, BH];\n\n\n      this.geometry.attachAttributes_(gl, this.program);\n      this.uniforms.apply(gl, this.program); // gl.viewport(0, 0, BW, BH);\n\n      this.drawFunc_(this.timer.delta);\n      this.uniforms.clean();\n      this.textures.clean();\n      this.dirty = false;\n      this.trigger('render', this);\n    };\n\n    _proto.drawArrays_ = function drawArrays_(deltaTime) {\n      var gl = this.gl;\n      gl.bindFramebuffer(gl.FRAMEBUFFER, null); // Clear\n\n      gl.viewport(0, 0, this.W, this.H);\n      gl.clearColor(0.0, 0.0, 0.0, 1.0);\n      gl.clearDepth(1.0); // Clear the canvas before we start drawing on it.\n      // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\n\n      gl.enable(gl.DEPTH_TEST);\n      gl.depthFunc(gl.LEQUAL);\n      gl.enable(gl.CULL_FACE);\n\n      if (this.doubleSided && this.mode !== ContextMode.Flat) {\n        // back\n        // gl.frontFace(gl.CW);\n        gl.cullFace(gl.FRONT);\n        gl.drawArrays(gl.TRIANGLES, 0, this.geometry.size); // front\n\n        gl.enable(gl.BLEND);\n        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);\n      } // gl.frontFace(gl.CCW);\n\n\n      gl.cullFace(gl.BACK);\n      gl.drawArrays(gl.TRIANGLES, 0, this.geometry.size); // gl.drawElements(gl.TRIANGLES, this.geometry.size, gl.UNSIGNED_SHORT, 0);\n    };\n\n    _proto.create_ = function create_() {\n      this.createGeometry_();\n      this.createUniforms_();\n    };\n\n    _proto.createGeometry_ = function createGeometry_() {\n      // console.log('Geometry', Geometry);\n      // console.log('FlatGeometry', FlatGeometry);\n      // console.log('BoxGeometry', BoxGeometry);\n      this.parseGeometry_();\n      this.setMode(this.mode);\n    };\n\n    _proto.parseGeometry_ = function parseGeometry_() {\n      var regexp = /^attribute\\s+vec4\\s+a_position\\s*;\\s*\\/\\/\\s*([\\w|\\:\\/\\/|\\.|\\-|\\_|\\?|\\&|\\=]+)/gm;\n      var match = regexp.exec(this.vertexString);\n\n      if (match && match.length > 1) {\n        this.mesh = match[1];\n      } else {\n        this.mesh = this.defaultMesh;\n      }\n    };\n\n    _proto.createUniforms_ = function createUniforms_() {\n      var gl = this.gl;\n      var fragmentString = this.fragmentString;\n      var BW = gl.drawingBufferWidth;\n      var BH = gl.drawingBufferHeight;\n      var timer = this.timer = new CanvasTimer();\n      var hasDelta = (fragmentString.match(/u_delta/g) || []).length > 1;\n      var hasTime = (fragmentString.match(/u_time/g) || []).length > 1;\n      var hasDate = (fragmentString.match(/u_date/g) || []).length > 1;\n      var hasMouse = (fragmentString.match(/u_mouse/g) || []).length > 1;\n      this.animated = hasTime || hasDate || hasMouse;\n      this.uniforms.create(exports.UniformMethod.Uniform2f, exports.UniformType.Float, 'u_resolution', [BW, BH]);\n\n      if (hasDelta) {\n        this.uniforms.create(exports.UniformMethod.Uniform1f, exports.UniformType.Float, 'u_delta', [timer.delta / 1000.0]);\n      }\n\n      if (hasTime) {\n        this.uniforms.create(exports.UniformMethod.Uniform1f, exports.UniformType.Float, 'u_time', [timer.current / 1000.0]);\n      }\n\n      if (hasDate) {\n        var date = new Date();\n        this.uniforms.create(exports.UniformMethod.Uniform4f, exports.UniformType.Float, 'u_date', [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + date.getMilliseconds() * 0.001]);\n      }\n\n      if (hasMouse) {\n        this.uniforms.create(exports.UniformMethod.Uniform2f, exports.UniformType.Float, 'u_mouse', [0, 0]);\n      } // if (this.mode !== ContextMode.Flat) {\n\n\n      this.projectionMatrix = create();\n      this.uniforms.create(exports.UniformMethod.UniformMatrix4fv, exports.UniformType.Float, 'u_projectionMatrix', this.projectionMatrix);\n      this.modelViewMatrix = create();\n      this.uniforms.create(exports.UniformMethod.UniformMatrix4fv, exports.UniformType.Float, 'u_modelViewMatrix', this.modelViewMatrix);\n      this.normalMatrix = create();\n      this.uniforms.create(exports.UniformMethod.UniformMatrix4fv, exports.UniformType.Float, 'u_normalMatrix', this.normalMatrix); // }\n    };\n\n    _proto.update_ = function update_() {\n      this.updateUniforms_();\n    };\n\n    _proto.updateUniforms_ = function updateUniforms_() {\n      var gl = this.gl;\n      var BW = gl.drawingBufferWidth;\n      var BH = gl.drawingBufferHeight;\n\n      if (!this.timer) {\n        return;\n      }\n\n      var timer = this.timer.next();\n      this.uniforms.update(exports.UniformMethod.Uniform2f, exports.UniformType.Float, 'u_resolution', [BW, BH]);\n\n      if (this.uniforms.has('u_delta')) {\n        this.uniforms.update(exports.UniformMethod.Uniform1f, exports.UniformType.Float, 'u_delta', [timer.delta / 1000.0]);\n      }\n\n      if (this.uniforms.has('u_time')) {\n        this.uniforms.update(exports.UniformMethod.Uniform1f, exports.UniformType.Float, 'u_time', [timer.current / 1000.0]);\n      }\n\n      if (this.uniforms.has('u_date')) {\n        var date = new Date();\n        this.uniforms.update(exports.UniformMethod.Uniform4f, exports.UniformType.Float, 'u_date', [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + date.getMilliseconds() * 0.001]);\n      }\n\n      if (this.uniforms.has('u_mouse')) {\n        var mouse = this.mouse;\n        this.uniforms.update(exports.UniformMethod.Uniform2f, exports.UniformType.Float, 'u_mouse', [mouse.x, mouse.y]);\n        /*\r\n        const rect = this.rect;\r\n        if (mouse.x >= rect.left && mouse.x <= rect.right &&\r\n            mouse.y >= rect.top && mouse.y <= rect.bottom) {\r\n            const MX = (mouse.x - rect.left) * this.devicePixelRatio;\r\n            const MY = (this.canvas.height - (mouse.y - rect.top) * this.devicePixelRatio);\r\n            this.uniforms.update(UniformMethod.Uniform2f, UniformType.Float, 'u_mouse', [MX, MY]);\r\n        }\r\n        */\n      }\n\n      if (this.mode !== ContextMode.Flat) {\n        this.uniforms.update(exports.UniformMethod.UniformMatrix4fv, exports.UniformType.Float, 'u_projectionMatrix', this.updateProjectionMatrix_());\n        this.uniforms.update(exports.UniformMethod.UniformMatrix4fv, exports.UniformType.Float, 'u_modelViewMatrix', this.updateModelViewMatrix_(this.timer.delta));\n        this.uniforms.update(exports.UniformMethod.UniformMatrix4fv, exports.UniformType.Float, 'u_normalMatrix', this.updateNormalMatrix_(this.modelViewMatrix));\n      }\n    };\n\n    _proto.updateProjectionMatrix_ = function updateProjectionMatrix_() {\n      var gl = this.gl;\n      var fieldOfView = 45 * Math.PI / 180;\n      var aspect = gl.drawingBufferWidth / gl.drawingBufferHeight;\n      var zNear = 0.1;\n      var zFar = 100.0;\n      perspective(this.projectionMatrix, fieldOfView, aspect, zNear, zFar);\n      return this.projectionMatrix;\n    };\n\n    _proto.updateModelViewMatrix_ = function updateModelViewMatrix_(deltaTime) {\n      this.modelViewMatrix = identity(this.modelViewMatrix);\n      translate(this.modelViewMatrix, this.modelViewMatrix, [0.0, 0.0, -this.camera.radius]); // amount to translate\n\n      rotate(this.modelViewMatrix, this.modelViewMatrix, this.camera.theta + this.radians, [0, 1, 0]); // axis to rotate around (Y)\n\n      rotate(this.modelViewMatrix, this.modelViewMatrix, this.camera.phi, [1, 0, 0]); // axis to rotate around (X)\n\n      if (!this.camera.mouse) {\n        this.camera.theta += (0 - this.camera.theta) / 20;\n        this.camera.phi += (0 - this.camera.phi) / 20;\n        this.radians += deltaTime * 0.0005;\n      }\n\n      return this.modelViewMatrix;\n    };\n\n    _proto.updateNormalMatrix_ = function updateNormalMatrix_(modelViewMatrix) {\n      // this.normalMatrix = mat4.create();\n      this.normalMatrix = identity(this.normalMatrix);\n      invert(this.normalMatrix, modelViewMatrix);\n      transpose(this.normalMatrix, this.normalMatrix);\n      return this.normalMatrix;\n    };\n\n    _proto.setMode = function setMode(mode) {\n      var _this2 = this;\n\n      var geometry;\n\n      if (mode === ContextMode.Mesh) {\n        geometry = this.cache[this.mesh];\n\n        if (geometry) {\n          this.geometry = geometry;\n          this.mode = ContextMode.Mesh;\n          this.dirty = true;\n          return;\n        }\n      }\n\n      var loader;\n\n      switch (mode) {\n        case ContextMode.Flat:\n          geometry = new FlatGeometry();\n          this.uniforms.update(exports.UniformMethod.UniformMatrix4fv, exports.UniformType.Float, 'u_projectionMatrix', create());\n          this.uniforms.update(exports.UniformMethod.UniformMatrix4fv, exports.UniformType.Float, 'u_modelViewMatrix', create());\n          this.uniforms.update(exports.UniformMethod.UniformMatrix4fv, exports.UniformType.Float, 'u_normalMatrix', create());\n          break;\n\n        case ContextMode.Box:\n          geometry = new BoxGeometry();\n          break;\n\n        case ContextMode.Sphere:\n          geometry = new SphereGeometry();\n          break;\n\n        case ContextMode.Torus:\n          geometry = new TorusGeometry();\n          break;\n\n        case ContextMode.Mesh:\n          geometry = new FlatGeometry();\n\n          if (this.mesh) {\n            loader = new ObjLoader();\n            loader.load(this.getResource(this.mesh)).then(function (geometry) {\n              geometry.createAttributes_(_this2.gl, _this2.program);\n              var cache = {};\n              cache[_this2.mesh] = geometry;\n              _this2.cache = cache;\n              _this2.geometry = geometry;\n              _this2.dirty = true;\n            }, function (error) {\n              Logger.warn('GlslCanvas', error);\n              _this2.mode = ContextMode.Flat;\n            });\n          } else {\n            mode = ContextMode.Flat;\n          }\n\n          break;\n      }\n\n      geometry.create(this.gl, this.program);\n      this.geometry = geometry;\n      this.mode = mode;\n      this.dirty = true;\n    };\n\n    _proto.setMesh = function setMesh(mesh) {\n      this.mesh = mesh;\n    };\n\n    _proto.getResource = function getResource(url) {\n      return String(url.indexOf(':/') === -1 && this.workpath !== undefined ? this.workpath + \"/\" + url : url);\n    };\n\n    return Renderer;\n  }(Subscriber);\n\n  var Canvas = /*#__PURE__*/function (_Renderer) {\n    _inheritsLoose(Canvas, _Renderer);\n\n    function Canvas(canvas, options) {\n      var _this;\n\n      if (options === void 0) {\n        options = {// alpha: true,\n          // antialias: true,\n          // premultipliedAlpha: true\n        };\n      }\n\n      _this = _Renderer.call(this) || this;\n      _this.valid = false;\n      _this.visible = false;\n      _this.controls = false;\n\n      if (!canvas) {\n        return _assertThisInitialized(_this);\n      }\n\n      _this.options = options;\n      _this.canvas = canvas;\n      _this.width = 0;\n      _this.height = 0;\n      _this.rect = canvas.getBoundingClientRect();\n      _this.devicePixelRatio = window.devicePixelRatio || 1;\n      _this.mode = options.mode || ContextMode.Flat;\n      _this.mesh = options.mesh || undefined;\n      _this.doubleSided = options.doubleSided || false;\n      _this.defaultMesh = _this.mesh;\n      _this.workpath = options.workpath;\n      canvas.style.backgroundColor = options.backgroundColor || 'rgba(0,0,0,0)';\n\n      _this.getShaders_().then(function (success) {\n        _this.load().then(function (success) {\n          if (!_this.program) {\n            return;\n          }\n\n          _this.addListeners_();\n\n          _this.onLoop();\n        });\n      }, function (error) {\n        Logger.error('GlslCanvas.getShaders_.error', error);\n      });\n\n      Canvas.items.push(_assertThisInitialized(_this));\n      return _this;\n    }\n\n    var _proto = Canvas.prototype;\n\n    _proto.getShaders_ = function getShaders_() {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        _this2.vertexString = _this2.options.vertexString || _this2.vertexString;\n        _this2.fragmentString = _this2.options.fragmentString || _this2.fragmentString;\n        var canvas = _this2.canvas;\n        var urls = {};\n\n        if (canvas.hasAttribute('data-vertex-url')) {\n          urls.vertex = canvas.getAttribute('data-vertex-url');\n        }\n\n        if (canvas.hasAttribute('data-fragment-url')) {\n          urls.fragment = canvas.getAttribute('data-fragment-url');\n        }\n\n        if (canvas.hasAttribute('data-vertex')) {\n          _this2.vertexString = canvas.getAttribute('data-vertex');\n        }\n\n        if (canvas.hasAttribute('data-fragment')) {\n          _this2.fragmentString = canvas.getAttribute('data-fragment');\n        }\n\n        if (Object.keys(urls).length) {\n          Promise.all(Object.keys(urls).map(function (key, i) {\n            var url = urls[key];\n            return Common.fetch(url) // .then((response) => response.text())\n            .then(function (body) {\n              if (key === 'vertex') {\n                return _this2.vertexString = body;\n              } else {\n                return _this2.fragmentString = body;\n              }\n            });\n          })).then(function (shaders) {\n            resolve([_this2.vertexString, _this2.fragmentString]);\n          });\n        } else {\n          resolve([_this2.vertexString, _this2.fragmentString]);\n        }\n      });\n    };\n\n    _proto.addListeners_ = function addListeners_() {\n      /*\r\n      const resize = (e: Event) => {\r\n          this.rect = this.canvas.getBoundingClientRect();\r\n          this.trigger('resize', e);\r\n      };\r\n      */\n      this.onScroll = this.onScroll.bind(this);\n      this.onWheel = this.onWheel.bind(this);\n      this.onClick = this.onClick.bind(this);\n      this.onMove = this.onMove.bind(this);\n      this.onMouseDown = this.onMouseDown.bind(this);\n      this.onMouseMove = this.onMouseMove.bind(this);\n      this.onMouseOver = this.onMouseOver.bind(this);\n      this.onMouseOut = this.onMouseOut.bind(this);\n      this.onMouseUp = this.onMouseUp.bind(this);\n      this.onTouchMove = this.onTouchMove.bind(this);\n      this.onTouchEnd = this.onTouchEnd.bind(this);\n      this.onTouchStart = this.onTouchStart.bind(this);\n      this.onLoop = this.onLoop.bind(this); // window.addEventListener('resize', this.onResize);\n\n      window.addEventListener('scroll', this.onScroll);\n      document.addEventListener('mousemove', this.onMouseMove, false);\n      document.addEventListener('touchmove', this.onTouchMove);\n      this.addCanvasListeners_();\n    };\n\n    _proto.addCanvasListeners_ = function addCanvasListeners_() {\n      this.controls = this.canvas.hasAttribute('controls');\n      this.canvas.addEventListener('wheel', this.onWheel);\n      this.canvas.addEventListener('click', this.onClick);\n      this.canvas.addEventListener('mousedown', this.onMouseDown);\n      this.canvas.addEventListener('touchstart', this.onTouchStart);\n\n      if (this.controls) {\n        this.canvas.addEventListener('mouseover', this.onMouseOver);\n        this.canvas.addEventListener('mouseout', this.onMouseOut);\n\n        if (!this.canvas.hasAttribute('data-autoplay')) {\n          this.pause();\n        }\n      }\n    };\n\n    _proto.removeCanvasListeners_ = function removeCanvasListeners_() {\n      this.canvas.removeEventListener('wheel', this.onWheel);\n      this.canvas.removeEventListener('click', this.onClick);\n      this.canvas.removeEventListener('mousedown', this.onMouseDown);\n      this.canvas.removeEventListener('mouseup', this.onMouseUp);\n      this.canvas.removeEventListener('touchstart', this.onTouchStart);\n      this.canvas.removeEventListener('touchend', this.onTouchEnd);\n\n      if (this.controls) {\n        this.canvas.removeEventListener('mouseover', this.onMouseOver);\n        this.canvas.removeEventListener('mouseout', this.onMouseOut);\n      }\n    };\n\n    _proto.removeListeners_ = function removeListeners_() {\n      window.cancelAnimationFrame(this.rafId); // window.removeEventListener('resize', this.onResize);\n\n      window.removeEventListener('scroll', this.onScroll);\n      document.removeEventListener('mousemove', this.onMouseMove);\n      document.removeEventListener('touchmove', this.onTouchMove);\n      this.removeCanvasListeners_();\n    };\n\n    _proto.onScroll = function onScroll(e) {\n      this.rect = this.canvas.getBoundingClientRect();\n    };\n\n    _proto.onWheel = function onWheel(e) {\n      this.camera.wheel(e.deltaY);\n      this.dirty = this.mode !== ContextMode.Flat;\n      this.trigger('wheel', e);\n    };\n\n    _proto.onClick = function onClick(e) {\n      if (this.controls) {\n        this.toggle();\n      }\n\n      this.trigger('click', e);\n    };\n\n    _proto.onDown = function onDown(mx, my) {\n      this.mouse.x = mx * this.devicePixelRatio;\n      this.mouse.y = my * this.devicePixelRatio;\n      var rect = this.rect;\n      var min = Math.min(rect.width, rect.height);\n      this.camera.down(mx / min, my / min);\n      this.trigger('down', this.mouse);\n    };\n\n    _proto.onMove = function onMove(mx, my) {\n      var rect = this.rect;\n      var x = (mx - rect.left) * this.devicePixelRatio;\n      var y = (rect.height - (my - rect.top)) * this.devicePixelRatio;\n\n      if (x !== this.mouse.x || y !== this.mouse.y) {\n        this.mouse.x = x;\n        this.mouse.y = y;\n        var min = Math.min(rect.width, rect.height);\n        this.camera.move(mx / min, my / min);\n        this.dirty = this.mode !== ContextMode.Flat && this.camera.mouse !== null;\n        this.trigger('move', this.mouse);\n      }\n    };\n\n    _proto.onUp = function onUp(e) {\n      this.camera.up();\n\n      if (this.controls) {\n        this.pause();\n      }\n\n      this.trigger('out', e);\n    };\n\n    _proto.onMouseDown = function onMouseDown(e) {\n      this.onDown(e.clientX, e.clientY);\n      document.addEventListener('mouseup', this.onMouseUp);\n      document.removeEventListener('touchstart', this.onTouchStart);\n      document.removeEventListener('touchmove', this.onTouchMove);\n    };\n\n    _proto.onMouseMove = function onMouseMove(e) {\n      this.onMove(e.clientX, e.clientY);\n    };\n\n    _proto.onMouseUp = function onMouseUp(e) {\n      this.onUp(e);\n    };\n\n    _proto.onMouseOver = function onMouseOver(e) {\n      this.play();\n      this.trigger('over', e);\n    };\n\n    _proto.onMouseOut = function onMouseOut(e) {\n      this.pause();\n      this.trigger('out', e);\n    };\n\n    _proto.onTouchStart = function onTouchStart(e) {\n      var touch = [].slice.call(e.touches).reduce(function (p, touch) {\n        p = p || new Vector2();\n        p.x += touch.clientX;\n        p.y += touch.clientY;\n        return p;\n      }, null);\n\n      if (touch) {\n        this.onDown(touch.x / e.touches.length, touch.y / e.touches.length);\n      }\n\n      if (this.controls) {\n        this.play();\n      }\n\n      this.trigger('over', e);\n      document.addEventListener('touchend', this.onTouchEnd);\n      document.removeEventListener('mousedown', this.onMouseDown);\n      document.removeEventListener('mousemove', this.onMouseMove);\n\n      if (this.controls) {\n        this.canvas.removeEventListener('mouseover', this.onMouseOver);\n        this.canvas.removeEventListener('mouseout', this.onMouseOut);\n      }\n    };\n\n    _proto.onTouchMove = function onTouchMove(e) {\n      var touch = [].slice.call(e.touches).reduce(function (p, touch) {\n        p = p || new Vector2();\n        p.x += touch.clientX;\n        p.y += touch.clientY;\n        return p;\n      }, null);\n\n      if (touch) {\n        this.onMove(touch.x / e.touches.length, touch.y / e.touches.length);\n      }\n    };\n\n    _proto.onTouchEnd = function onTouchEnd(e) {\n      this.onUp(e);\n      document.removeEventListener('touchend', this.onTouchEnd);\n    };\n\n    _proto.onLoop = function onLoop(time) {\n      this.checkRender();\n      this.rafId = window.requestAnimationFrame(this.onLoop);\n    };\n\n    _proto.setUniform_ = function setUniform_(key, values, options, type) {\n      var _this3 = this;\n\n      if (options === void 0) {\n        options = {};\n      }\n\n      if (type === void 0) {\n        type = null;\n      }\n\n      var uniform = Uniforms.parseUniform(key, values, type);\n\n      if (Array.isArray(uniform)) {\n        if (Uniforms.isArrayOfSampler2D(uniform)) {\n          uniform.forEach(function (x) {\n            return _this3.loadTexture(x.key, x.values[0], options);\n          });\n        } else {\n          uniform.forEach(function (x) {\n            return _this3.uniforms.set(x.key, x.values[0]);\n          });\n        }\n      } else if (uniform) {\n        switch (uniform.type) {\n          case exports.UniformType.Sampler2D:\n            this.loadTexture(key, values[0], options);\n            break;\n\n          default:\n            this.uniforms.set(key, uniform);\n        }\n      }\n    };\n\n    _proto.isVisible_ = function isVisible_() {\n      var rect = this.rect;\n      return rect.top + rect.height > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);\n    };\n\n    _proto.isAnimated_ = function isAnimated_() {\n      return (this.animated || this.textures.animated || this.mode !== ContextMode.Flat) && !this.timer.paused;\n    };\n\n    _proto.isDirty_ = function isDirty_() {\n      return this.dirty || this.uniforms.dirty || this.textures.dirty;\n    } // check size change at start of requestFrame\n    ;\n\n    _proto.sizeDidChanged_ = function sizeDidChanged_() {\n      var gl = this.gl;\n      var CW = Math.ceil(this.canvas.clientWidth),\n          CH = Math.ceil(this.canvas.clientHeight);\n\n      if (this.width !== CW || this.height !== CH) {\n        this.width = CW;\n        this.height = CH; // Lookup the size the browser is displaying the canvas in CSS pixels\n        // and compute a size needed to make our drawingbuffer match it in\n        // device pixels.\n\n        var W = Math.ceil(CW * this.devicePixelRatio);\n        var H = Math.ceil(CH * this.devicePixelRatio);\n        this.W = W;\n        this.H = H;\n        this.canvas.width = W;\n        this.canvas.height = H;\n        /*\r\n        if (gl.canvas.width !== W ||\r\n            gl.canvas.height !== H) {\r\n            gl.canvas.width = W;\r\n            gl.canvas.height = H;\r\n            // Set the viewport to match\r\n            // gl.viewport(0, 0, W, H);\r\n        }\r\n        */\n\n        for (var key in this.buffers.values) {\n          var buffer = this.buffers.values[key];\n          buffer.resize(gl, W, H);\n        }\n\n        this.rect = this.canvas.getBoundingClientRect();\n        this.trigger('resize'); // gl.useProgram(this.program);\n\n        return true;\n      } else {\n        return false;\n      }\n    };\n\n    _proto.parseTextures_ = function parseTextures_(fragmentString) {\n      var _this4 = this;\n\n      // const regexp = /uniform\\s*sampler2D\\s*([\\w]*);(\\s*\\/\\/\\s*([\\w|\\:\\/\\/|\\.|\\-|\\_]*)|\\s*)/gm;\n      var regexp = /uniform\\s*sampler2D\\s*([\\w]*);(\\s*\\/\\/\\s*([\\w|\\:\\/\\/|\\.|\\-|\\_|\\?|\\&|\\=]*)|\\s*)/gm; // const regexp = /uniform\\s*sampler2D\\s*([\\w]*);(\\s*\\/\\/\\s*([\\w|\\://|\\.|\\-|\\_]*)|\\s*)((\\s*\\:\\s)(\\{(\\s*\\w*\\:\\s*['|\"]{0,1}\\w*['|\"]{0,1}\\s*[,]{0,1})+\\}))*/gm;\n\n      var matches;\n\n      while ((matches = regexp.exec(fragmentString)) !== null) {\n        var key = matches[1];\n        var url = matches[3];\n\n        if (Texture.isTextureUrl(url)) {\n          this.textureList.push({\n            key: key,\n            url: url\n          });\n        } else if (!this.buffers.has(key)) {\n          // create empty texture\n          this.textureList.push({\n            key: key,\n            url: null\n          });\n        }\n      }\n\n      if (this.canvas.hasAttribute('data-textures')) {\n        var urls = this.canvas.getAttribute('data-textures').split(',');\n        urls.forEach(function (url, i) {\n          var key = 'u_texture' + i;\n\n          _this4.textureList.push({\n            key: key,\n            url: url\n          });\n        });\n      }\n\n      return this.textureList.length > 0;\n    };\n\n    _proto.load = function load(fragmentString, vertexString) {\n      var _this5 = this;\n\n      var fragmentVertexString = Context.getFragmentVertex(this.gl, fragmentString || this.fragmentString);\n      return Promise.all([Context.getIncludes(fragmentString || this.fragmentString), Context.getIncludes(fragmentVertexString || vertexString || this.vertexString)]).then(function (array) {\n        _this5.fragmentString = array[0];\n        _this5.vertexString = array[1];\n        return _this5.createContext_();\n      });\n    };\n\n    _proto.getContext_ = function getContext_() {\n      var vertexString = this.vertexString;\n      var fragmentString = this.fragmentString;\n      this.vertexString = Context.getVertex(vertexString, fragmentString, this.mode);\n      this.fragmentString = Context.getFragment(vertexString, fragmentString, this.mode);\n\n      if (Context.versionDiffers(this.gl, vertexString, fragmentString)) {\n        this.destroyContext_();\n        this.swapCanvas_();\n        this.uniforms = new Uniforms();\n        this.buffers = new Buffers();\n        this.textures = new Textures();\n        this.textureList = [];\n      }\n\n      if (!this.gl) {\n        var gl = Context.tryInferContext(vertexString, fragmentString, this.canvas, this.options, this.options.extensions, this.options.onError);\n\n        if (!gl) {\n          return null;\n        }\n\n        this.gl = gl;\n      }\n\n      return this.gl;\n    };\n\n    _proto.createContext_ = function createContext_() {\n      var gl = this.getContext_();\n\n      if (!gl) {\n        return false;\n      }\n\n      var vertexShader, fragmentShader;\n\n      try {\n        Context.inferPrecision(this.fragmentString);\n        vertexShader = Context.createShader(gl, this.vertexString, gl.VERTEX_SHADER);\n        fragmentShader = Context.createShader(gl, this.fragmentString, gl.FRAGMENT_SHADER); // If Fragment shader fails load a empty one to sign the error\n\n        if (!fragmentShader) {\n          var defaultFragment = Context.getFragment(null, null, this.mode);\n          fragmentShader = Context.createShader(gl, defaultFragment, gl.FRAGMENT_SHADER);\n          this.valid = false;\n        } else {\n          this.valid = true;\n        }\n      } catch (e) {\n        // !!!\n        // console.error(e);\n        this.trigger('error', e);\n        return false;\n      } // Create and use program\n\n\n      var program = Context.createProgram(gl, [vertexShader, fragmentShader]); //, [0,1],['a_texcoord','a_position']);\n\n      if (!program) {\n        this.trigger('error', Context.lastError);\n        return false;\n      } // console.log(this.vertexString, this.fragmentString, program);\n      // Delete shaders\n      // gl.detachShader(program, vertexShader);\n      // gl.detachShader(program, fragmentShader);\n\n\n      gl.deleteShader(vertexShader);\n      gl.deleteShader(fragmentShader);\n      this.program = program;\n\n      if (this.valid) {\n        try {\n          this.buffers = Buffers.getBuffers(gl, this.fragmentString, Context.getBufferVertex(gl));\n        } catch (e) {\n          // console.error('load', e);\n          this.valid = false;\n          this.trigger('error', e);\n          return false;\n        }\n\n        this.create_();\n\n        if (this.animated) {\n          this.canvas.classList.add('animated');\n        } else {\n          this.canvas.classList.remove('animated');\n        }\n      } // Trigger event\n\n\n      this.trigger('load', this);\n      return this.valid;\n    };\n\n    _proto.create_ = function create_() {\n      this.parseMode_();\n      this.parseMesh_();\n\n      _Renderer.prototype.create_.call(this);\n\n      this.createBuffers_();\n      this.createTextures_();\n    };\n\n    _proto.parseMode_ = function parseMode_() {\n      if (this.canvas.hasAttribute('data-mode')) {\n        var data = this.canvas.getAttribute('data-mode');\n\n        if (['flat', 'box', 'sphere', 'torus', 'mesh'].indexOf(data) !== -1) {\n          this.mode = data;\n        }\n      }\n    };\n\n    _proto.parseMesh_ = function parseMesh_() {\n      if (this.canvas.hasAttribute('data-mesh')) {\n        var data = this.canvas.getAttribute('data-mesh');\n\n        if (data.indexOf('.obj') !== -1) {\n          this.mesh = this.defaultMesh = data;\n        }\n      }\n    };\n\n    _proto.createBuffers_ = function createBuffers_() {\n      for (var key in this.buffers.values) {\n        var buffer = this.buffers.values[key];\n        this.uniforms.create(exports.UniformMethod.Uniform1i, exports.UniformType.Sampler2D, buffer.key, [buffer.input.index]);\n      }\n    };\n\n    _proto.createTextures_ = function createTextures_() {\n      var _this6 = this;\n\n      var hasTextures = this.parseTextures_(this.fragmentString);\n\n      if (hasTextures) {\n        this.textureList.filter(function (x) {\n          return x.url;\n        }).forEach(function (x) {\n          _this6.setTexture(x.key, x.url, x.options);\n        });\n        this.textureList = [];\n      }\n    };\n\n    _proto.update_ = function update_() {\n      _Renderer.prototype.update_.call(this);\n\n      this.updateBuffers_();\n      this.updateTextures_();\n    };\n\n    _proto.updateBuffers_ = function updateBuffers_() {\n      for (var key in this.buffers.values) {\n        var buffer = this.buffers.values[key];\n        this.uniforms.update(exports.UniformMethod.Uniform1i, exports.UniformType.Sampler2D, buffer.key, [buffer.input.index]);\n      }\n    };\n\n    _proto.updateTextures_ = function updateTextures_() {\n      var gl = this.gl;\n\n      for (var key in this.textures.values) {\n        var texture = this.textures.values[key];\n        texture.tryUpdate(gl);\n        this.uniforms.update(exports.UniformMethod.Uniform1i, exports.UniformType.Sampler2D, texture.key, [texture.index]);\n      }\n    };\n\n    _proto.destroyContext_ = function destroyContext_() {\n      var gl = this.gl;\n      gl.useProgram(null);\n\n      if (this.program) {\n        gl.deleteProgram(this.program);\n      }\n\n      for (var key in this.buffers.values) {\n        var buffer = this.buffers.values[key];\n        buffer.destroy(gl);\n      }\n\n      for (var _key in this.textures.values) {\n        var texture = this.textures.values[_key];\n        texture.destroy(gl);\n      }\n\n      this.buffers = null;\n      this.textures = null;\n      this.uniforms = null;\n      this.program = null;\n      this.gl = null;\n    };\n\n    _proto.swapCanvas_ = function swapCanvas_() {\n      var canvas = this.canvas;\n      var canvas_ = canvas.cloneNode();\n      canvas.parentNode.replaceChild(canvas_, canvas);\n      this.canvas = canvas_;\n      this.addCanvasListeners_();\n    };\n\n    _proto.destroy = function destroy() {\n      this.removeListeners_();\n      this.destroyContext_();\n      this.animated = false;\n      this.valid = false;\n      var index = Canvas.items.indexOf(this);\n\n      if (index !== -1) {\n        Canvas.items.splice(index, 1);\n      }\n    };\n\n    _proto.loadTexture = function loadTexture(key, urlElementOrData, options) {\n      var _this7 = this;\n\n      if (options === void 0) {\n        options = {};\n      }\n\n      if (this.valid) {\n        // Logger.log('GlslCanvas.loadTexture', key, urlElementOrData);\n        this.textures.createOrUpdate(this.gl, key, urlElementOrData, this.buffers.count, options, this.options.workpath).then(function (texture) {\n          var index = texture.index;\n\n          var uniform = _this7.uniforms.createTexture(key, index);\n\n          uniform.texture = texture;\n          var keyResolution = key.indexOf('[') !== -1 ? key.replace('[', 'Resolution[') : key + 'Resolution'; // const uniformResolution = ;\n\n          _this7.uniforms.create(exports.UniformMethod.Uniform2f, exports.UniformType.Float, keyResolution, [texture.width, texture.height]); // Logger.log('loadTexture', key, url, index, texture.width, texture.height);\n\n\n          return texture;\n        }, function (error) {\n          var message = Array.isArray(error.path) ? error.path.map(function (x) {\n            return x.error ? x.error.message : '';\n          }).join(', ') : error.message;\n          Logger.error('GlslCanvas.loadTexture.error', key, urlElementOrData, message);\n\n          _this7.trigger('textureError', {\n            key: key,\n            urlElementOrData: urlElementOrData,\n            message: message\n          });\n        });\n      } else {\n        this.textureList.push({\n          key: key,\n          url: urlElementOrData,\n          options: options\n        });\n      }\n    };\n\n    _proto.setTexture = function setTexture(key, urlElementOrData, options) {\n      if (options === void 0) {\n        options = {};\n      }\n\n      return this.setUniform_(key, [urlElementOrData], options);\n    };\n\n    _proto.setUniform = function setUniform(key) {\n      for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {\n        values[_key2 - 1] = arguments[_key2];\n      }\n\n      return this.setUniform_(key, values);\n    };\n\n    _proto.setUniformOfInt = function setUniformOfInt(key, values) {\n      return this.setUniform_(key, values, null, exports.UniformType.Int);\n    };\n\n    _proto.setUniforms = function setUniforms(values) {\n      for (var key in values) {\n        this.setUniform(key, values[key]);\n      }\n    };\n\n    _proto.pause = function pause() {\n      if (this.valid) {\n        this.timer.pause();\n        this.canvas.classList.add('paused');\n        this.trigger('pause');\n      }\n    };\n\n    _proto.play = function play() {\n      if (this.valid) {\n        this.timer.play();\n        this.canvas.classList.remove('paused');\n        this.trigger('play');\n      }\n    };\n\n    _proto.toggle = function toggle() {\n      if (this.valid) {\n        if (this.timer.paused) {\n          this.play();\n        } else {\n          this.pause();\n        }\n      }\n    };\n\n    _proto.checkRender = function checkRender() {\n      if (this.isVisible_() && (this.sizeDidChanged_() || this.isDirty_() || this.isAnimated_())) {\n        this.render();\n        this.canvas.classList.add('playing');\n      } else {\n        this.canvas.classList.remove('playing');\n      }\n    };\n\n    return Canvas;\n  }(Renderer);\n  Canvas.items = [];\n\n  function of(canvas, options) {\n    return Canvas.items.find(function (x) {\n      return x.canvas === canvas;\n    }) || new Canvas(canvas, options);\n  }\n  function loadAll() {\n    var canvases = [].slice.call(document.getElementsByClassName('glsl-canvas')).filter(function (x) {\n      return x instanceof HTMLCanvasElement;\n    });\n    return canvases.map(function (x) {\n      return of(x);\n    });\n  }\n\n  if (document) {\n    document.addEventListener('DOMContentLoaded', function () {\n      loadAll();\n    });\n  }\n\n  exports.BoxGeometry = BoxGeometry;\n  exports.Buffer = Buffer;\n  exports.Buffers = Buffers;\n  exports.Canvas = Canvas;\n  exports.CanvasTimer = CanvasTimer;\n  exports.Common = Common;\n  exports.Context = Context;\n  exports.ContextVertexBuffers = ContextVertexBuffers;\n  exports.DefaultWebGL2BufferFragment = DefaultWebGL2BufferFragment;\n  exports.DefaultWebGL2BufferVertex = DefaultWebGL2BufferVertex;\n  exports.DefaultWebGL2FlatFragment = DefaultWebGL2FlatFragment;\n  exports.DefaultWebGL2MeshFragment = DefaultWebGL2MeshFragment;\n  exports.DefaultWebGL2MeshVertex = DefaultWebGL2MeshVertex;\n  exports.DefaultWebGLBufferFragment = DefaultWebGLBufferFragment;\n  exports.DefaultWebGLBufferVertex = DefaultWebGLBufferVertex;\n  exports.DefaultWebGLFlatFragment = DefaultWebGLFlatFragment;\n  exports.DefaultWebGLMeshFragment = DefaultWebGLMeshFragment;\n  exports.DefaultWebGLMeshVertex = DefaultWebGLMeshVertex;\n  exports.FlatGeometry = FlatGeometry;\n  exports.Geometry = Geometry;\n  exports.IOBuffer = IOBuffer;\n  exports.IterableStringMap = IterableStringMap;\n  exports.Listener = Listener;\n  exports.Logger = Logger;\n  exports.METHODS_FLOAT = METHODS_FLOAT;\n  exports.METHODS_FLOATV = METHODS_FLOATV;\n  exports.METHODS_INT = METHODS_INT;\n  exports.METHODS_INTV = METHODS_INTV;\n  exports.ObjLoader = ObjLoader;\n  exports.OrbitCamera = OrbitCamera;\n  exports.Renderer = Renderer;\n  exports.SphereGeometry = SphereGeometry;\n  exports.Subscriber = Subscriber;\n  exports.Texture = Texture;\n  exports.TextureExtensions = TextureExtensions;\n  exports.TextureImageExtensions = TextureImageExtensions;\n  exports.TextureVideoExtensions = TextureVideoExtensions;\n  exports.Textures = Textures;\n  exports.TorusGeometry = TorusGeometry;\n  exports.Uniform = Uniform;\n  exports.UniformTexture = UniformTexture;\n  exports.Uniforms = Uniforms;\n  exports.Vector2 = Vector2;\n  exports.Vector3 = Vector3;\n  exports.isTextureData = isTextureData;\n  exports.loadAll = loadAll;\n  exports.of = of;\n\n  Object.defineProperty(exports, '__esModule', { value: true });\n\n})));\n\n\n//# sourceURL=webpack://app/./node_modules/glsl-canvas-js/dist/umd/glsl-canvas.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://app/./scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => "main." + __webpack_require__.h() + ".hot-update.json";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "896afb81cd81e287ffaf"
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "https://lbaker15.github.io/Shaders2";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateapp"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ })()
;