/* eslint-disable */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  color: red;\\r\\n  margin: 0.1em;\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Segoe UI\\\", Tahoma, Verdana, sans-serif;\\r\\n  background: black;\\r\\n  text-decoration-line: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  text-decoration: none;\\r\\n  font-size: 35px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-family: \\\"Lucida Handwriting\\\", sans-serif;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  gap: 3.5rem;\\r\\n  height: 5rem;\\r\\n  font-weight: 700;\\r\\n  align-items: center;\\r\\n  padding: 10px 15px;\\r\\n  letter-spacing: 0.01em;\\r\\n}\\r\\n\\r\\nheader div i {\\r\\n  font-size: 36px;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n  text-decoration: none;\\r\\n  font-size: 26px;\\r\\n}\\r\\n\\r\\nheader li {\\r\\n  display: flex;\\r\\n  gap: 55px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border: 3px solid red;\\r\\n  text-align: center;\\r\\n  width: 95%;\\r\\n  bottom: 0;\\r\\n  font-size: 15px;\\r\\n  padding-block: 15px;\\r\\n  letter-spacing: 00.2em;\\r\\n  margin-left: 30px;\\r\\n}\\r\\n\\r\\n.card-container {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  padding: 0 1em;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  width: 100%;\\r\\n  max-width: 350px;\\r\\n  padding: 0.5em 0.5em;\\r\\n  margin: 1rem;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.card-img {\\r\\n  width: 300px;\\r\\n  height: 300px;\\r\\n  background: white;\\r\\n  border: 1px solid red;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  width: 70%;\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  color: rgb(224, 221, 221);\\r\\n  align-items: flex-end;\\r\\n  flex-direction: column;\\r\\n  font-size: 0.8em;\\r\\n  width: 12%;\\r\\n}\\r\\n\\r\\n.span {\\r\\n  font-size: 0.5em;\\r\\n  margin-left: 78%;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n  background-color: red;\\r\\n  color: #fff;\\r\\n  padding: 0.8em 1.5em;\\r\\n  border: none;\\r\\n  font-family: inherit;\\r\\n  width: 100%;\\r\\n  border-radius: 13px;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background-color: rgba(58, 47, 66, 0.11);\\r\\n  padding: 1em;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.modal.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  padding: 1em 0.5em;\\r\\n  min-height: 89vh;\\r\\n  max-width: 77%;\\r\\n  max-height: 600px;\\r\\n  overflow-y: auto;\\r\\n  transform: scale(0);\\r\\n  transition: transform 1s ease-in-out;\\r\\n  border-radius: 8px;\\r\\n  flex-direction: column;\\r\\n  text-align: center;\\r\\n  margin-left: 13%;\\r\\n}\\r\\n\\r\\n.content.active {\\r\\n  transform: scale(1);\\r\\n  border: 1px solid;\\r\\n}\\r\\n\\r\\n.modal-img {\\r\\n  width: 33%;\\r\\n  height: 300px;\\r\\n  align-items: center;\\r\\n  border: 1px solid;\\r\\n}\\r\\n\\r\\n.modal-details {\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.modal-details p {\\r\\n  font-size: 0.75rem;\\r\\n  line-height: 1.7;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.bx-x {\\r\\n  position: absolute;\\r\\n  top: 2%;\\r\\n  right: 3%;\\r\\n  color: white;\\r\\n  color: var(--blend-color);\\r\\n  font-size: 1.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  display: flex;\\r\\n  width: 82%;\\r\\n  justify-content: center;\\r\\n  font-size: 0.7rem;\\r\\n  margin-bottom: 0.7rem;\\r\\n  margin-left: 15%;\\r\\n}\\r\\n\\r\\n.comment-msg {\\r\\n  width: 60%;\\r\\n  color: wheat;\\r\\n  text-align: left;\\r\\n  padding-left: 4%;\\r\\n}\\r\\n\\r\\n.comment-date {\\r\\n  color: rgb(69, 121, 101);\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 49%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  background-color: transparent;\\r\\n  border: 1px solid rgb(230, 228, 228);\\r\\n  border-radius: 8px;\\r\\n  padding: 0.5em 0.7em;\\r\\n  color: white;\\r\\n  font-family: inherit;\\r\\n  margin-bottom: 0.4rem;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  text-align: center;\\r\\n  font-weight: 300;\\r\\n  font-size: 1.4rem;\\r\\n  margin: 0.7rem 0;\\r\\n}\\r\\n\\r\\n#count {\\r\\n  margin-left: -55px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _module_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/getData.js */ \"./src/module/getData.js\");\n\n\n\n(0,_module_getData_js__WEBPACK_IMPORTED_MODULE_1__.shows)();\n\n\n//# sourceURL=webpack://capstone-js-project/./src/index.js?");

/***/ }),

/***/ "./src/module/card.js":
/*!****************************!*\
  !*** ./src/module/card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/module/getData.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/module/modal.js\");\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url.js */ \"./src/module/url.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\n\nconst card = (movies, data) => {\n  const card = document.querySelector('.card-container');\n  card.innerHTML = '';\n  movies.forEach((movie, index) => {\n    const id = data.findIndex((like) => +like.item_id === index);\n    const msgLikes = id >= 0 ? data[id].likes : 0;\n    const displayCard = `<div class=\"card\" id=\"card\">\n        <img src=\"${movie.image.original}\" class=\"card-img\" alt=\"Show name\"/>\n        <div class=\"description\">\n          <span class=\"details\">${movie.name}</span>\n          <div class=\"likes\">\n          <i class=\"bx bx-heart\" data-id=\"${index}\"></i> \n          </div>         \n        </div>\n        <div class=\"span\"> <span> ${msgLikes}  Likes</span> </div>\n        <button id=\"comments\" data-id=\"${index}\">Comments</button>\n        `;\n    card.innerHTML += displayCard;\n  });\n\n  const popUp = document.querySelectorAll('#comments');\n  popUp.forEach((pop) => {\n    pop.addEventListener('click', async (e) => {\n      const modals = document.querySelector('.modal');\n      const contents = document.querySelector('.content');\n      modals.classList.remove('hidden');\n      contents.classList.add('active');\n      await (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movies, e.target.dataset.id);\n      const closeBtn = document.querySelector('.bx-x');\n      closeBtn.addEventListener('click', () => {\n        modals.classList.add('hidden');\n        contents.classList.remove('active');\n      });\n    });\n  });\n\n  const likeBtn = document.querySelectorAll('.bx-heart');\n  const url = _url_js__WEBPACK_IMPORTED_MODULE_2__.likeurl;\n  likeBtn.forEach((like) => {\n    like.addEventListener('click', (e) => {\n      (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.requestLikes)(url, e.target.dataset.id);\n      like.classList.remove('bx-heart');\n      like.classList.add('bxs-heart');\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);\n\n//# sourceURL=webpack://capstone-js-project/./src/module/card.js?");

/***/ }),

/***/ "./src/module/comment.js":
/*!*******************************!*\
  !*** ./src/module/comment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   postComment: () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ \"./src/module/url.js\");\n\n\nconst postComment = async (data) => {\n  await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__.commenturl, {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n};\n\nconst getComments = async (cmnt) => {\n  const getUrl = `?item_id=${cmnt}`;\n  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__.commenturl + getUrl);\n  const data = await response.json();\n  return data;\n};\n\n\n\n//# sourceURL=webpack://capstone-js-project/./src/module/comment.js?");

/***/ }),

/***/ "./src/module/getData.js":
/*!*******************************!*\
  !*** ./src/module/getData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   requestLikes: () => (/* binding */ requestLikes),\n/* harmony export */   shows: () => (/* binding */ shows)\n/* harmony export */ });\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ \"./src/module/card.js\");\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ \"./src/module/url.js\");\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/module/itemCounter.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\n\nconst shows = async () => {\n  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_1__.cardapi);\n  const data = await response.json();\n  const result = data.slice(40, 60);\n  (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_2__.itemCount)(result.length);\n  const likes = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_1__.likeurl);\n  const res = await likes.json();\n  (0,_card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(result, res);\n};\nconst requestLikes = async (url, id) => {\n  await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n  shows();\n};\nrequestLikes();\n\n\n//# sourceURL=webpack://capstone-js-project/./src/module/getData.js?");

/***/ }),

/***/ "./src/module/itemCounter.js":
/*!***********************************!*\
  !*** ./src/module/itemCounter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allShows: () => (/* binding */ allShows),\n/* harmony export */   itemCount: () => (/* binding */ itemCount)\n/* harmony export */ });\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ \"./src/module/url.js\");\n\n\nconst itemCount = (item) => {\n  const count = document.getElementById('count');\n  count.innerHTML = `(${item})`;\n};\nconst allShows = async () => {\n  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__.cardapi);\n  const data = await response.json();\n  const result = data.slice(0, 10);\n  return result.length;\n};\n\n\n//# sourceURL=webpack://capstone-js-project/./src/module/itemCounter.js?");

/***/ }),

/***/ "./src/module/modal.js":
/*!*****************************!*\
  !*** ./src/module/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/module/comment.js\");\n\n/* eslint-disable no-return-assign */\nconst modal = async (data, index) => {\n  let commentData = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(index);\n  if (commentData.length === undefined) {\n    commentData = [];\n  }\n  const container = document.querySelector('.content');\n  container.innerHTML = `\n    <div class=\"modal-details\">\n      <img src=\"${data[index].image.original}\" class=\"modal-img\" />\n      <h2 class=\"heading\">${data[index].name}</h2>\n      <p>${data[index].summary}</p>\n    </div>\n    <div class=\"comments\">\n      <div class=\"comment-details\">\n        <h2 class=\"heading\">Comments<span>(${commentData.length})</span></h2>`;\n  commentData.map(\n    (comment) => (container.innerHTML += `<div class=\"comment\">\n          <p class=\"comment-date\">${comment.creation_date}</p>\n          <p class=\"comment-msg\">${comment.username} : &nbsp;${comment.comment}</p>\n          </div>\n          `),\n  );\n  container.innerHTML += `\n          <div class=\"comment-form\">\n          <form>\n            <input type=\"text\" placeholder=\"Enter your name\" />\n            <textarea placeholder=\"Enter your comment here\"></textarea>\n            <button type=\"submit\" class=\"btn flex\">Submit</button>\n          </form>\n          <i class='bx bx-x'></i>\n        </div>`;\n  const form = document.querySelector('form');\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const name = document.querySelector('input').value;\n    const commentMsg = document.querySelector('textarea').value;\n    const commentData = {\n      item_id: index.toString(),\n      username: name,\n      comment: commentMsg,\n    };\n    form.reset();\n    if (commentData.username && commentData.comment) {\n      (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(commentData);\n    }\n    (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(index);\n    setTimeout(() => {\n      window.location.reload();\n    }, 1000);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/module/modal.js?");

/***/ }),

/***/ "./src/module/url.js":
/*!***************************!*\
  !*** ./src/module/url.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardapi: () => (/* binding */ cardapi),\n/* harmony export */   commenturl: () => (/* binding */ commenturl),\n/* harmony export */   likeurl: () => (/* binding */ likeurl)\n/* harmony export */ });\nconst commenturl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Tqb0GccYL7M1RouylYru/comments';\nconst cardapi = 'https://api.tvmaze.com/shows';\nconst likeurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Tqb0GccYL7M1RouylYru/likes';\n\n//# sourceURL=webpack://capstone-js-project/./src/module/url.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;