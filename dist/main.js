/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0px;\n}\n\n.main-cont{\n    gap: 20px;\n    font-size: 30px;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    width: 100vw;\n    align-items: center;\n    height: 100vh;\n    flex-direction: column;\n    box-sizing: border-box;\n    padding-top: 40px;\n    background: #292C6D;\n}\n\n.title-cont{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.8);\n    border: 1px solid rgb(0, 0, 0, 0.8);\n    width: 500px;\n    border-radius: 7px;\n    background: #EC255A;\n    margin-bottom: 50px;\n    color: #FAEDF0;\n}\n\nh1{\n    font-size: 60px;\n    color: #fff;\n    font-weight: bold;\n    text-shadow: 2px 2px 4px rgb(49, 84, 93);\n}\n\n#input:focus{\n    outline: none;\n}\n\n#input{\n    padding:8px;\n    width: 417px;\n    height: 25px;\n    border-radius: 3px;\n    border: none;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    background: #FAEDF0;\n    margin-bottom: 20px;\n}\n\nform{\n    display: flex;\n    flex-direction: row;\n    gap: 3px;\n}\n\n#button{\n    padding: 8px;\n    border-radius: 3px;\n    background: #EC255A;\n    color: #FAEDF0;\n    cursor: pointer;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: bold;\n    border-radius: 4px;\n    font-size: 16px;\n    transition: 0.4s;\n    height: 25px;\n}\n\n#button:hover{\n    background: #e45178;\n\n}\n\n#button:active{\n    background: #ad1a41;\n}   \n\n.card-cont{\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    padding-left: 157px;\n    width: 715px;\n}\n\n.weather-card, .error-cont{\n    display: flex;\n    flex-direction: column;\n    width: 500px;\n    height: 430px;\n    border-radius: 7px;\n    box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.5);\n    background: #161853;\n    padding: 30px;\n    color: #FAEDF0;\n    gap: 8px;\n    border: 1px solid rgb(0, 0, 0, 0.5);\n}\n\n.error-cont{\n    justify-content: center;\n    align-items: center;\n    font-size: 22px;\n}\n\n.config-cont-hide{\n    display: flex;\n    justify-content: center;\n    padding-left: 10px;\n    gap: 8px;\n    color: #FAEDF0;\n    background: #161853;\n    box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.5);\n    border-radius: 7px;\n    flex-direction: column;\n    font-size: 20px;\n    transition: 0.6s;\n    max-height: 0px;\n    max-width: 0px;\n    overflow: hidden;\n}\n\n.config-cont-show{\n    border: 1px solid rgb(0, 0, 0, 0.5);\n    max-width: 130px;\n    max-height: 100px;\n    width: 130px;\n    height: 100px;\n}\n\n.config-option{\n    cursor: pointer;\n    transition: 0.2s;\n}\n\n.config-option:hover{\n    transform: scale(1.02);\n}\n\n.config-option-clicked{\n    font-weight: bolder;\n}\n\n.name-cont{\n    display: flex;\n    margin-bottom: 15px;\n    font-weight: bolder;\n    align-items: center;\n    font-size: 20px;\n    gap: 8px;\n    height: 50px;\n}\n\n.main-cont-top{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 6px\n}\n\n.upper-cont{\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.lower-cont{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 25px;\n}\n\n.min-max-cont{\n    display: flex;\n    border-left: 1px solid rgb(197, 197, 197);\n    flex-direction: column;\n    font-size: 21px;\n    padding-left: 8px;\n    gap: 8px;\n}\n\n.icon-img{\n    width: 85px;\n    height: 85px;\n}\n\n.location-img{\n    width: 25px;\n    height: 25px;\n}\n\n.mini-cards-container{\n    display: flex;\n    flex-direction: row;\n    gap: 13px;\n    height: 377px;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    border-radius: 7px;\n    background-color:#1d1f6e;\n    font-size: 19px;\n    color: #FAEDF0;\n}\n\n#mini-card-day{\n    font-weight: bold;\n}\n\n#error-img{\n    width: 35px;\n    height: 35px;\n}\n\n.tuerca-img{\n    width: 23px;\n    height: 23px;\n    margin-left: 310px;\n    align-self: flex-start;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.tuerca-img:hover{\n    transform: scale(1.1);\n}\n\n.tuerca-img:active{\n    transform: scale(0.9);\n}\n\n.grados-grandes-text{\n    font-size: 62px;\n}\n\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    background: #161853;\n    color: #FAEDF0;\n    flex-direction: column;\n    font-family: 'Roboto', sans-serif;\n    margin-top: auto;\n}\n\n#footer-title{\n    font-size: 30px;\n    font-weight: bold;\n}\n\n#footer-subtitle{\n    font-size: 17px;\n    color: rgb(165, 165, 165);\n}\n\np{\n    margin:8px\n}", "",{"version":3,"sources":["webpack://./src/app/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\n    margin: 0px;\n}\n\n.main-cont{\n    gap: 20px;\n    font-size: 30px;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    width: 100vw;\n    align-items: center;\n    height: 100vh;\n    flex-direction: column;\n    box-sizing: border-box;\n    padding-top: 40px;\n    background: #292C6D;\n}\n\n.title-cont{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.8);\n    border: 1px solid rgb(0, 0, 0, 0.8);\n    width: 500px;\n    border-radius: 7px;\n    background: #EC255A;\n    margin-bottom: 50px;\n    color: #FAEDF0;\n}\n\nh1{\n    font-size: 60px;\n    color: #fff;\n    font-weight: bold;\n    text-shadow: 2px 2px 4px rgb(49, 84, 93);\n}\n\n#input:focus{\n    outline: none;\n}\n\n#input{\n    padding:8px;\n    width: 417px;\n    height: 25px;\n    border-radius: 3px;\n    border: none;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    background: #FAEDF0;\n    margin-bottom: 20px;\n}\n\nform{\n    display: flex;\n    flex-direction: row;\n    gap: 3px;\n}\n\n#button{\n    padding: 8px;\n    border-radius: 3px;\n    background: #EC255A;\n    color: #FAEDF0;\n    cursor: pointer;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: bold;\n    border-radius: 4px;\n    font-size: 16px;\n    transition: 0.4s;\n    height: 25px;\n}\n\n#button:hover{\n    background: #e45178;\n\n}\n\n#button:active{\n    background: #ad1a41;\n}   \n\n.card-cont{\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    padding-left: 157px;\n    width: 715px;\n}\n\n.weather-card, .error-cont{\n    display: flex;\n    flex-direction: column;\n    width: 500px;\n    height: 430px;\n    border-radius: 7px;\n    box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.5);\n    background: #161853;\n    padding: 30px;\n    color: #FAEDF0;\n    gap: 8px;\n    border: 1px solid rgb(0, 0, 0, 0.5);\n}\n\n.error-cont{\n    justify-content: center;\n    align-items: center;\n    font-size: 22px;\n}\n\n.config-cont-hide{\n    display: flex;\n    justify-content: center;\n    padding-left: 10px;\n    gap: 8px;\n    color: #FAEDF0;\n    background: #161853;\n    box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.5);\n    border-radius: 7px;\n    flex-direction: column;\n    font-size: 20px;\n    transition: 0.6s;\n    max-height: 0px;\n    max-width: 0px;\n    overflow: hidden;\n}\n\n.config-cont-show{\n    border: 1px solid rgb(0, 0, 0, 0.5);\n    max-width: 130px;\n    max-height: 100px;\n    width: 130px;\n    height: 100px;\n}\n\n.config-option{\n    cursor: pointer;\n    transition: 0.2s;\n}\n\n.config-option:hover{\n    transform: scale(1.02);\n}\n\n.config-option-clicked{\n    font-weight: bolder;\n}\n\n.name-cont{\n    display: flex;\n    margin-bottom: 15px;\n    font-weight: bolder;\n    align-items: center;\n    font-size: 20px;\n    gap: 8px;\n    height: 50px;\n}\n\n.main-cont-top{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 6px\n}\n\n.upper-cont{\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.lower-cont{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 25px;\n}\n\n.min-max-cont{\n    display: flex;\n    border-left: 1px solid rgb(197, 197, 197);\n    flex-direction: column;\n    font-size: 21px;\n    padding-left: 8px;\n    gap: 8px;\n}\n\n.icon-img{\n    width: 85px;\n    height: 85px;\n}\n\n.location-img{\n    width: 25px;\n    height: 25px;\n}\n\n.mini-cards-container{\n    display: flex;\n    flex-direction: row;\n    gap: 13px;\n    height: 377px;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    border-radius: 7px;\n    background-color:#1d1f6e;\n    font-size: 19px;\n    color: #FAEDF0;\n}\n\n#mini-card-day{\n    font-weight: bold;\n}\n\n#error-img{\n    width: 35px;\n    height: 35px;\n}\n\n.tuerca-img{\n    width: 23px;\n    height: 23px;\n    margin-left: 310px;\n    align-self: flex-start;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.tuerca-img:hover{\n    transform: scale(1.1);\n}\n\n.tuerca-img:active{\n    transform: scale(0.9);\n}\n\n.grados-grandes-text{\n    font-size: 62px;\n}\n\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    background: #161853;\n    color: #FAEDF0;\n    flex-direction: column;\n    font-family: 'Roboto', sans-serif;\n    margin-top: auto;\n}\n\n#footer-title{\n    font-size: 30px;\n    font-weight: bold;\n}\n\n#footer-subtitle{\n    font-size: 17px;\n    color: rgb(165, 165, 165);\n}\n\np{\n    margin:8px\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/app/assets/icono-location.png":
/*!*******************************************!*\
  !*** ./src/app/assets/icono-location.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/icono-location.png");

/***/ }),

/***/ "./src/app/assets/tuerca.png":
/*!***********************************!*\
  !*** ./src/app/assets/tuerca.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/tuerca.png");

/***/ }),

/***/ "./src/app/assets/warning.png":
/*!************************************!*\
  !*** ./src/app/assets/warning.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/warning.png");

/***/ }),

/***/ "./src/app/style.css":
/*!***************************!*\
  !*** ./src/app/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/app/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/utils/card_creator.js":
/*!***************************************!*\
  !*** ./src/app/utils/card_creator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherCard)
/* harmony export */ });
/* harmony import */ var _assets_icono_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icono-location.png */ "./src/app/assets/icono-location.png");
/* harmony import */ var _assets_tuerca_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/tuerca.png */ "./src/app/assets/tuerca.png");



class WeatherCard {
  constructor(weatherData, div) {
    this.weatherData = weatherData;
    this.div = div;
  }

  init() {
    this.weatherCardDomCreator();
    this.htmlNammer();
    this.weatherCardImgSetter();
    this.weatherCardDomInnerHtmlSetter();
    this.domBinder();
    this.appender();
  }

  weatherCardDomCreator() {
    this.weatherCardCont = document.createElement('div');
    this.weatherImg = document.createElement('img');
    this.tuercaImg = document.createElement('img');
    this.locationImg = document.createElement('img');
    this.nameCont = document.createElement('div');
    this.gradosUpperCont = document.createElement('div');
    this.gradosLowerCont = document.createElement('div');
    this.cityName = document.createElement('div');
    this.gradosGrandesText = document.createElement('div');
    this.gradosMaxText = document.createElement('div');
    this.gradosMinText = document.createElement('div');
    this.weatherDescriptionText = document.createElement('p');
    this.weatherRealFeelText = document.createElement('p');
    this.mainContTop = document.createElement('div');
    this.minMaxCont = document.createElement('div');
    this.configCont = document.createElement('div');
    this.celciusText = document.createElement('p');
    this.fahrenheitText = document.createElement('p');
    this.miniCardsContainer = document.createElement('div');
  }

  weatherCardImgSetter() {
    this.weatherImg.src = `https://openweathermap.org/img/w/${this.weatherData.icon}.png`;
    this.locationImg.src = _assets_icono_location_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.tuercaImg.src = _assets_tuerca_png__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  weatherCardDomInnerHtmlSetter() {
    this.cityName.innerHTML = `${this.weatherData.cityName}, ${this.weatherData.countryName}`;
    this.gradosGrandesText.innerHTML = `${this.weatherData.temp.toFixed()}°`;
    this.gradosMaxText.innerHTML = `${this.weatherData.tempMax.toFixed()}°`;
    this.gradosMinText.innerHTML = `${this.weatherData.tempMin.toFixed()}°`;
    this.weatherDescriptionText.innerHTML = this.weatherData.weatherDesc.charAt(0).toUpperCase()
                                            + this.weatherData.weatherDesc.slice(1);
    this.weatherRealFeelText.innerHTML = `RealFeel ${this.weatherData.tempFeelsLike.toFixed()}°`;
    this.celciusText.innerHTML = 'Celcius';
    this.fahrenheitText.innerHTML = 'Fahrenheit';
  }

  htmlNammer() {
    this.mainContTop.className = 'main-cont-top';
    this.weatherCardCont.className = 'weather-card';
    this.weatherImg.className = 'icon-img';
    this.tuercaImg.className = 'tuerca-img';
    this.locationImg.className = 'location-img';
    this.nameCont.className = 'name-cont';
    this.gradosUpperCont.className = 'upper-cont';
    this.gradosLowerCont.className = 'lower-cont';
    this.gradosGrandesText.className = 'grados-grandes-text';
    this.minMaxCont.className = 'min-max-cont';
    this.configCont.className = 'config-cont-hide';
    this.celciusText.className = 'config-option';
    this.fahrenheitText.className = 'config-option';
    this.celciusText.id = 'config-option-celcius';
    this.fahrenheitText.id = 'config-option-fahrenheit';
    this.miniCardsContainer.className = 'mini-cards-container';
  }

  domBinder() {
    this.tuercaImg.addEventListener('click', () => {
      this.configCont.classList.toggle('config-cont-show');
    });
    this.celciusText.addEventListener('click', () => {
      this.celciusText.classList.add('config-option-clicked');
      this.fahrenheitText.classList.remove('config-option-clicked');
      this.configCont.classList.toggle('config-cont-show');
    });
    this.fahrenheitText.addEventListener('click', () => {
      this.celciusText.classList.remove('config-option-clicked');
      this.fahrenheitText.classList.add('config-option-clicked');
      this.configCont.classList.toggle('config-cont-show');
    });
  }

  appender() {
    this.minMaxCont.appendChild(this.gradosMaxText);
    this.minMaxCont.appendChild(this.gradosMinText);
    this.gradosUpperCont.appendChild(this.gradosGrandesText);
    this.gradosUpperCont.appendChild(this.minMaxCont);
    this.gradosLowerCont.appendChild(this.weatherDescriptionText);
    this.gradosLowerCont.appendChild(this.weatherRealFeelText);
    this.nameCont.appendChild(this.locationImg);
    this.nameCont.appendChild(this.cityName);
    this.nameCont.appendChild(this.tuercaImg);
    this.weatherCardCont.appendChild(this.nameCont);
    this.mainContTop.appendChild(this.weatherImg);
    this.mainContTop.appendChild(this.gradosUpperCont);
    this.weatherCardCont.appendChild(this.mainContTop);
    this.weatherCardCont.appendChild(this.gradosLowerCont);
    this.weatherCardCont.appendChild(this.miniCardsContainer);
    this.configCont.appendChild(this.fahrenheitText);
    this.configCont.appendChild(this.celciusText);
    this.div.appendChild(this.weatherCardCont);
    this.div.appendChild(this.configCont);
  }
}


/***/ }),

/***/ "./src/app/utils/city_class.js":
/*!*************************************!*\
  !*** ./src/app/utils/city_class.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CityWeather)
/* harmony export */ });
class CityWeather {
  constructor(
    countryName,
    cityName,
    weatherDesc,
    temp,
    tempFeelsLike,
    tempMax,
    tempMin,
    humidity,
    icon,
  ) {
    this.countryName = countryName;
    this.cityName = cityName;
    this.weatherDesc = weatherDesc;
    this.temp = temp;
    this.tempFeelsLike = tempFeelsLike;
    this.tempMax = tempMax;
    this.tempMin = tempMin;
    this.humidity = humidity;
    this.icon = icon;
  }
}


/***/ }),

/***/ "./src/app/utils/error_class.js":
/*!**************************************!*\
  !*** ./src/app/utils/error_class.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var _assets_warning_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/warning.png */ "./src/app/assets/warning.png");


class NotFound {
  constructor(div, searchTerm) {
    this.div = div;
    this.searchTerm = searchTerm;
  }

  init() {
    this.domCreator();
    this.domHtmlSetter();
    this.domHtmlNamer();
    this.domAppender();
  }

  domCreator() {
    this.errorImg = document.createElement('img');
    this.errorTxt = document.createElement('P');
    this.errorCont = document.createElement('div');
  }

  domHtmlSetter() {
    this.errorImg.src = _assets_warning_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.errorTxt.innerHTML = `Could not find any match for "${this.searchTerm}"`;
  }

  domHtmlNamer() {
    this.errorImg.id = 'error-img';
    this.errorTxt.id = 'error-txt';
    this.errorCont.classList = 'error-cont';
  }

  domAppender() {
    this.errorCont.appendChild(this.errorImg);
    this.errorCont.appendChild(this.errorTxt);
    this.div.appendChild(this.errorCont);
  }
}


/***/ }),

/***/ "./src/app/utils/mini_card_creator.js":
/*!********************************************!*\
  !*** ./src/app/utils/mini_card_creator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniCard)
/* harmony export */ });
class MiniCard {
  constructor(maxTemp, minTemp, icon, div, dayName) {
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.icon = icon;
    this.div = div;
    this.dayName = dayName;
  }

  init() {
    this.domCreator();
    this.domHtmlSetter();
    this.domHtmlNamer();
    this.domAppender();
  }

  domCreator() {
    this.miniCardCont = document.createElement('div');
    this.dayNameP = document.createElement('p');
    this.iconImg = document.createElement('img');
    this.maxTempP = document.createElement('p');
    this.minTempP = document.createElement('p');
  }

  domHtmlSetter() {
    this.iconImg.src = `https://openweathermap.org/img/w/${this.icon}.png`;
    this.dayNameP.innerHTML = `${this.dayName}`;
    this.minTempP.innerHTML = `${this.minTemp.toFixed()}°`;
    this.maxTempP.innerHTML = `${this.maxTemp.toFixed()}°`;
  }

  domHtmlNamer() {
    this.miniCardCont.classList = 'mini-card-cont';
    this.dayNameP.id = 'mini-card-day';
    this.iconImg.id = 'mini-card-icon';
    this.maxTempP.id = 'mini-card-temp';
    this.minTempP.id = 'mini-card-temp';
  }

  domAppender() {
    this.miniCardCont.appendChild(this.dayNameP);
    this.miniCardCont.appendChild(this.iconImg);
    this.miniCardCont.appendChild(this.maxTempP);
    this.miniCardCont.appendChild(this.minTempP);
    this.div.appendChild(this.miniCardCont);
  }
}


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/style.css */ "./src/app/style.css");
/* harmony import */ var _app_utils_city_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/utils/city_class */ "./src/app/utils/city_class.js");
/* harmony import */ var _app_utils_card_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/utils/card_creator */ "./src/app/utils/card_creator.js");
/* harmony import */ var _app_utils_mini_card_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/utils/mini_card_creator */ "./src/app/utils/mini_card_creator.js");
/* harmony import */ var _app_utils_error_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/utils/error_class */ "./src/app/utils/error_class.js");






class MainPage {
  constructor() {
    this.units = 'metric';
    this.day = new Date();
    this.dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT',
      'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT',
    ];
  }

  init() {
    this.domCache();
    this.domBind();
  }

  domCache() {
    this.searchBut = document.querySelector('#button');
    this.inputField = document.querySelector('#input');
    this.weatherCardCont = document.querySelector('.card-cont');
    this.mainCont = document.querySelector('.main-cont');
  }

  domBind() {
    this.searchBut.addEventListener('click', async () => {
      this.weatherCardDomClear();
      const cityName = this.inputField.value;
      let auxNumber = 0;
      try {
        const latLon = await this.getLatLon(cityName);
        const forecastData = await this.getForecastData(latLon);
        const forecastFutureData = forecastData.daily.slice(1);
        const todayData = new _app_utils_city_class__WEBPACK_IMPORTED_MODULE_1__["default"](
          latLon.country,
          latLon.name,
          forecastData.current.weather[0].description,
          forecastData.current.temp,
          forecastData.current.feels_like,
          forecastData.daily[0].temp.max,
          forecastData.daily[0].temp.min,
          forecastData.current.humidity,
          forecastData.current.weather[0].icon,
        );
        this.createWeatherCard(todayData, this.weatherCardCont);
        document.getElementById('config-option-celcius').addEventListener('click', () => {
          this.celciusOnClick();
        });
        document.getElementById('config-option-fahrenheit').addEventListener('click', () => {
          this.fahrenheitOnClick();
        });
        forecastFutureData.forEach((e) => {
          this.createMiniCards(
            e.temp.max,
            e.temp.min,
            e.weather[0].icon,
            document.querySelector('.mini-cards-container'),
            this.dayNames[this.day.getDay() + 1 + auxNumber],
          );
          auxNumber++;
        });
      } catch {
        const errorCard = new _app_utils_error_class__WEBPACK_IMPORTED_MODULE_4__["default"](this.weatherCardCont, this.inputField.value);
        errorCard.init();
      }
    });
    this.inputField.addEventListener('keypress', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.searchBut.click();
      }
    });
  }

  async getForecastData(geoCoordinate) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoCoordinate.lat}&lon=${geoCoordinate.lon}&exclude=minutely,alerts&units=${this.units}&appid=7eac41afe56160a477bb9b88c7ca09a3`, { mode: 'cors' });
      const data = await response.json();
      return data;
    } catch {
      console.log('ERROR');
    }
  }

  async getLatLon(searchTerm) {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&appid=7eac41afe56160a477bb9b88c7ca09a3`, { mode: 'cors' });
    const data = await response.json();
    return ({
      lat: data[0].lat, lon: data[0].lon, name: data[0].name, country: data[0].country,
    });
  }

  createMiniCards(maxTemp, minTemp, icon, div, dayName) {
    const miniCard = new _app_utils_mini_card_creator__WEBPACK_IMPORTED_MODULE_3__["default"](maxTemp, minTemp, icon, div, dayName);
    miniCard.init();
  }

  createWeatherCard(todayData, cont) {
    const weatherCard = new _app_utils_card_creator__WEBPACK_IMPORTED_MODULE_2__["default"](todayData, cont);
    weatherCard.init();
  }

  celciusOnClick() {
    this.units = 'metric';
    this.searchBut.click();
  }

  fahrenheitOnClick() {
    this.units = 'imperial';
    this.searchBut.click();
  }

  weatherCardDomClear() {
    this.weatherCardCont.innerHTML = '';
  }
}

const gifPage = new MainPage();
gifPage.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFB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QUNBO0FBQ0EsMEZBQTBGLGtCQUFrQixPQUFPLGtCQUFrQixpQ0FBaUMsV0FBVyw0Q0FBNEMsY0FBYztBQUMzTztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFvRixXQUFXLDRDQUE0QyxjQUFjO0FBQ3pKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHlCQUF5QixvRUFBUTtBQUNqQztBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLCtEQUFXO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2FwcC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvYXBwL2Fzc2V0cy9pY29uby1sb2NhdGlvbi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvYXBwL2Fzc2V0cy90dWVyY2EucG5nIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2FwcC9hc3NldHMvd2FybmluZy5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvYXBwL3N0eWxlLmNzcz9kODhlIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvYXBwL3V0aWxzL2NhcmRfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9hcHAvdXRpbHMvY2l0eV9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9hcHAvdXRpbHMvZXJyb3JfY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvYXBwL3V0aWxzL21pbmlfY2FyZF9jcmVhdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250e1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkyQzZEO1xcbn1cXG5cXG4udGl0bGUtY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYigwLCAwLCAwLCAwLjgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC44KTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJhY2tncm91bmQ6ICNFQzI1NUE7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIGNvbG9yOiAjRkFFREYwO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2IoNDksIDg0LCA5Myk7XFxufVxcblxcbiNpbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2lucHV0e1xcbiAgICBwYWRkaW5nOjhweDtcXG4gICAgd2lkdGg6IDQxN3B4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJhY2tncm91bmQ6ICNGQUVERjA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4jYnV0dG9ue1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZDogI0VDMjU1QTtcXG4gICAgY29sb3I6ICNGQUVERjA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbiNidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICNlNDUxNzg7XFxuXFxufVxcblxcbiNidXR0b246YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kOiAjYWQxYTQxO1xcbn0gICBcXG5cXG4uY2FyZC1jb250e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTU3cHg7XFxuICAgIHdpZHRoOiA3MTVweDtcXG59XFxuXFxuLndlYXRoZXItY2FyZCwgLmVycm9yLWNvbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2IoMCwgMCwgMCwgMC41KTtcXG4gICAgYmFja2dyb3VuZDogIzE2MTg1MztcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgY29sb3I6ICNGQUVERjA7XFxuICAgIGdhcDogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmVycm9yLWNvbnR7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5jb25maWctY29udC1oaWRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgY29sb3I6ICNGQUVERjA7XFxuICAgIGJhY2tncm91bmQ6ICMxNjE4NTM7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYigwLCAwLCAwLCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogMC42cztcXG4gICAgbWF4LWhlaWdodDogMHB4O1xcbiAgICBtYXgtd2lkdGg6IDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbmZpZy1jb250LXNob3d7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjUpO1xcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uY29uZmlnLW9wdGlvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY29uZmlnLW9wdGlvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuXFxuLmNvbmZpZy1vcHRpb24tY2xpY2tlZHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLm5hbWUtY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubWFpbi1jb250LXRvcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNnB4XFxufVxcblxcbi51cHBlci1jb250e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmxvd2VyLWNvbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLm1pbi1tYXgtY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTk3LCAxOTcsIDE5Nyk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uaWNvbi1pbWd7XFxuICAgIHdpZHRoOiA4NXB4O1xcbiAgICBoZWlnaHQ6IDg1cHg7XFxufVxcblxcbi5sb2NhdGlvbi1pbWd7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5taW5pLWNhcmRzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxM3B4O1xcbiAgICBoZWlnaHQ6IDM3N3B4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDFmNmU7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgY29sb3I6ICNGQUVERjA7XFxufVxcblxcbiNtaW5pLWNhcmQtZGF5e1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Vycm9yLWltZ3tcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuLnR1ZXJjYS1pbWd7XFxuICAgIHdpZHRoOiAyM3B4O1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMTBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4udHVlcmNhLWltZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udHVlcmNhLWltZzphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxuLmdyYWRvcy1ncmFuZGVzLXRleHR7XFxuICAgIGZvbnQtc2l6ZTogNjJweDtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZDogIzE2MTg1MztcXG4gICAgY29sb3I6ICNGQUVERjA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuI2Zvb3Rlci10aXRsZXtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Zvb3Rlci1zdWJ0aXRsZXtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBjb2xvcjogcmdiKDE2NSwgMTY1LCAxNjUpO1xcbn1cXG5cXG5we1xcbiAgICBtYXJnaW46OHB4XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlDQUF5QztJQUN6QyxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3SUFBd0k7SUFDeEksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysd0lBQXdJO0lBQ3hJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QsUUFBUTtJQUNSLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250e1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkyQzZEO1xcbn1cXG5cXG4udGl0bGUtY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYigwLCAwLCAwLCAwLjgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC44KTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJhY2tncm91bmQ6ICNFQzI1NUE7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIGNvbG9yOiAjRkFFREYwO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2IoNDksIDg0LCA5Myk7XFxufVxcblxcbiNpbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2lucHV0e1xcbiAgICBwYWRkaW5nOjhweDtcXG4gICAgd2lkdGg6IDQxN3B4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJhY2tncm91bmQ6ICNGQUVERjA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4jYnV0dG9ue1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZDogI0VDMjU1QTtcXG4gICAgY29sb3I6ICNGQUVERjA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbiNidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICNlNDUxNzg7XFxuXFxufVxcblxcbiNidXR0b246YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kOiAjYWQxYTQxO1xcbn0gICBcXG5cXG4uY2FyZC1jb250e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTU3cHg7XFxuICAgIHdpZHRoOiA3MTVweDtcXG59XFxuXFxuLndlYXRoZXItY2FyZCwgLmVycm9yLWNvbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2IoMCwgMCwgMCwgMC41KTtcXG4gICAgYmFja2dyb3VuZDogIzE2MTg1MztcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgY29sb3I6ICNGQUVERjA7XFxuICAgIGdhcDogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmVycm9yLWNvbnR7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5jb25maWctY29udC1oaWRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgY29sb3I6ICNGQUVERjA7XFxuICAgIGJhY2tncm91bmQ6ICMxNjE4NTM7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYigwLCAwLCAwLCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogMC42cztcXG4gICAgbWF4LWhlaWdodDogMHB4O1xcbiAgICBtYXgtd2lkdGg6IDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbmZpZy1jb250LXNob3d7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjUpO1xcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uY29uZmlnLW9wdGlvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY29uZmlnLW9wdGlvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuXFxuLmNvbmZpZy1vcHRpb24tY2xpY2tlZHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLm5hbWUtY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubWFpbi1jb250LXRvcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNnB4XFxufVxcblxcbi51cHBlci1jb250e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmxvd2VyLWNvbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLm1pbi1tYXgtY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTk3LCAxOTcsIDE5Nyk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uaWNvbi1pbWd7XFxuICAgIHdpZHRoOiA4NXB4O1xcbiAgICBoZWlnaHQ6IDg1cHg7XFxufVxcblxcbi5sb2NhdGlvbi1pbWd7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5taW5pLWNhcmRzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxM3B4O1xcbiAgICBoZWlnaHQ6IDM3N3B4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDFmNmU7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgY29sb3I6ICNGQUVERjA7XFxufVxcblxcbiNtaW5pLWNhcmQtZGF5e1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Vycm9yLWltZ3tcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuLnR1ZXJjYS1pbWd7XFxuICAgIHdpZHRoOiAyM3B4O1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMTBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4udHVlcmNhLWltZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udHVlcmNhLWltZzphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxuLmdyYWRvcy1ncmFuZGVzLXRleHR7XFxuICAgIGZvbnQtc2l6ZTogNjJweDtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZDogIzE2MTg1MztcXG4gICAgY29sb3I6ICNGQUVERjA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuI2Zvb3Rlci10aXRsZXtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Zvb3Rlci1zdWJ0aXRsZXtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBjb2xvcjogcmdiKDE2NSwgMTY1LCAxNjUpO1xcbn1cXG5cXG5we1xcbiAgICBtYXJnaW46OHB4XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy9pY29uby1sb2NhdGlvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy90dWVyY2EucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZ3Mvd2FybmluZy5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvY2F0aW9uSW1nIGZyb20gJy4uL2Fzc2V0cy9pY29uby1sb2NhdGlvbi5wbmcnO1xuaW1wb3J0IHR1ZXJjYUltZyBmcm9tICcuLi9hc3NldHMvdHVlcmNhLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJDYXJkIHtcbiAgY29uc3RydWN0b3Iod2VhdGhlckRhdGEsIGRpdikge1xuICAgIHRoaXMud2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YTtcbiAgICB0aGlzLmRpdiA9IGRpdjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy53ZWF0aGVyQ2FyZERvbUNyZWF0b3IoKTtcbiAgICB0aGlzLmh0bWxOYW1tZXIoKTtcbiAgICB0aGlzLndlYXRoZXJDYXJkSW1nU2V0dGVyKCk7XG4gICAgdGhpcy53ZWF0aGVyQ2FyZERvbUlubmVySHRtbFNldHRlcigpO1xuICAgIHRoaXMuZG9tQmluZGVyKCk7XG4gICAgdGhpcy5hcHBlbmRlcigpO1xuICB9XG5cbiAgd2VhdGhlckNhcmREb21DcmVhdG9yKCkge1xuICAgIHRoaXMud2VhdGhlckNhcmRDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy53ZWF0aGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGhpcy50dWVyY2FJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0aGlzLmxvY2F0aW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGhpcy5uYW1lQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZ3JhZG9zVXBwZXJDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5ncmFkb3NMb3dlckNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5ncmFkb3NHcmFuZGVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZ3JhZG9zTWF4VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZ3JhZG9zTWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMud2VhdGhlckRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aGlzLndlYXRoZXJSZWFsRmVlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGhpcy5tYWluQ29udFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMubWluTWF4Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY29uZmlnQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY2VsY2l1c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGhpcy5mYWhyZW5oZWl0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aGlzLm1pbmlDYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgd2VhdGhlckNhcmRJbWdTZXR0ZXIoKSB7XG4gICAgdGhpcy53ZWF0aGVySW1nLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3RoaXMud2VhdGhlckRhdGEuaWNvbn0ucG5nYDtcbiAgICB0aGlzLmxvY2F0aW9uSW1nLnNyYyA9IGxvY2F0aW9uSW1nO1xuICAgIHRoaXMudHVlcmNhSW1nLnNyYyA9IHR1ZXJjYUltZztcbiAgfVxuXG4gIHdlYXRoZXJDYXJkRG9tSW5uZXJIdG1sU2V0dGVyKCkge1xuICAgIHRoaXMuY2l0eU5hbWUuaW5uZXJIVE1MID0gYCR7dGhpcy53ZWF0aGVyRGF0YS5jaXR5TmFtZX0sICR7dGhpcy53ZWF0aGVyRGF0YS5jb3VudHJ5TmFtZX1gO1xuICAgIHRoaXMuZ3JhZG9zR3JhbmRlc1RleHQuaW5uZXJIVE1MID0gYCR7dGhpcy53ZWF0aGVyRGF0YS50ZW1wLnRvRml4ZWQoKX3CsGA7XG4gICAgdGhpcy5ncmFkb3NNYXhUZXh0LmlubmVySFRNTCA9IGAke3RoaXMud2VhdGhlckRhdGEudGVtcE1heC50b0ZpeGVkKCl9wrBgO1xuICAgIHRoaXMuZ3JhZG9zTWluVGV4dC5pbm5lckhUTUwgPSBgJHt0aGlzLndlYXRoZXJEYXRhLnRlbXBNaW4udG9GaXhlZCgpfcKwYDtcbiAgICB0aGlzLndlYXRoZXJEZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MID0gdGhpcy53ZWF0aGVyRGF0YS53ZWF0aGVyRGVzYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHRoaXMud2VhdGhlckRhdGEud2VhdGhlckRlc2Muc2xpY2UoMSk7XG4gICAgdGhpcy53ZWF0aGVyUmVhbEZlZWxUZXh0LmlubmVySFRNTCA9IGBSZWFsRmVlbCAke3RoaXMud2VhdGhlckRhdGEudGVtcEZlZWxzTGlrZS50b0ZpeGVkKCl9wrBgO1xuICAgIHRoaXMuY2VsY2l1c1RleHQuaW5uZXJIVE1MID0gJ0NlbGNpdXMnO1xuICAgIHRoaXMuZmFocmVuaGVpdFRleHQuaW5uZXJIVE1MID0gJ0ZhaHJlbmhlaXQnO1xuICB9XG5cbiAgaHRtbE5hbW1lcigpIHtcbiAgICB0aGlzLm1haW5Db250VG9wLmNsYXNzTmFtZSA9ICdtYWluLWNvbnQtdG9wJztcbiAgICB0aGlzLndlYXRoZXJDYXJkQ29udC5jbGFzc05hbWUgPSAnd2VhdGhlci1jYXJkJztcbiAgICB0aGlzLndlYXRoZXJJbWcuY2xhc3NOYW1lID0gJ2ljb24taW1nJztcbiAgICB0aGlzLnR1ZXJjYUltZy5jbGFzc05hbWUgPSAndHVlcmNhLWltZyc7XG4gICAgdGhpcy5sb2NhdGlvbkltZy5jbGFzc05hbWUgPSAnbG9jYXRpb24taW1nJztcbiAgICB0aGlzLm5hbWVDb250LmNsYXNzTmFtZSA9ICduYW1lLWNvbnQnO1xuICAgIHRoaXMuZ3JhZG9zVXBwZXJDb250LmNsYXNzTmFtZSA9ICd1cHBlci1jb250JztcbiAgICB0aGlzLmdyYWRvc0xvd2VyQ29udC5jbGFzc05hbWUgPSAnbG93ZXItY29udCc7XG4gICAgdGhpcy5ncmFkb3NHcmFuZGVzVGV4dC5jbGFzc05hbWUgPSAnZ3JhZG9zLWdyYW5kZXMtdGV4dCc7XG4gICAgdGhpcy5taW5NYXhDb250LmNsYXNzTmFtZSA9ICdtaW4tbWF4LWNvbnQnO1xuICAgIHRoaXMuY29uZmlnQ29udC5jbGFzc05hbWUgPSAnY29uZmlnLWNvbnQtaGlkZSc7XG4gICAgdGhpcy5jZWxjaXVzVGV4dC5jbGFzc05hbWUgPSAnY29uZmlnLW9wdGlvbic7XG4gICAgdGhpcy5mYWhyZW5oZWl0VGV4dC5jbGFzc05hbWUgPSAnY29uZmlnLW9wdGlvbic7XG4gICAgdGhpcy5jZWxjaXVzVGV4dC5pZCA9ICdjb25maWctb3B0aW9uLWNlbGNpdXMnO1xuICAgIHRoaXMuZmFocmVuaGVpdFRleHQuaWQgPSAnY29uZmlnLW9wdGlvbi1mYWhyZW5oZWl0JztcbiAgICB0aGlzLm1pbmlDYXJkc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbWluaS1jYXJkcy1jb250YWluZXInO1xuICB9XG5cbiAgZG9tQmluZGVyKCkge1xuICAgIHRoaXMudHVlcmNhSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jb25maWdDb250LmNsYXNzTGlzdC50b2dnbGUoJ2NvbmZpZy1jb250LXNob3cnKTtcbiAgICB9KTtcbiAgICB0aGlzLmNlbGNpdXNUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jZWxjaXVzVGV4dC5jbGFzc0xpc3QuYWRkKCdjb25maWctb3B0aW9uLWNsaWNrZWQnKTtcbiAgICAgIHRoaXMuZmFocmVuaGVpdFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnY29uZmlnLW9wdGlvbi1jbGlja2VkJyk7XG4gICAgICB0aGlzLmNvbmZpZ0NvbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29uZmlnLWNvbnQtc2hvdycpO1xuICAgIH0pO1xuICAgIHRoaXMuZmFocmVuaGVpdFRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNlbGNpdXNUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbmZpZy1vcHRpb24tY2xpY2tlZCcpO1xuICAgICAgdGhpcy5mYWhyZW5oZWl0VGV4dC5jbGFzc0xpc3QuYWRkKCdjb25maWctb3B0aW9uLWNsaWNrZWQnKTtcbiAgICAgIHRoaXMuY29uZmlnQ29udC5jbGFzc0xpc3QudG9nZ2xlKCdjb25maWctY29udC1zaG93Jyk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRlcigpIHtcbiAgICB0aGlzLm1pbk1heENvbnQuYXBwZW5kQ2hpbGQodGhpcy5ncmFkb3NNYXhUZXh0KTtcbiAgICB0aGlzLm1pbk1heENvbnQuYXBwZW5kQ2hpbGQodGhpcy5ncmFkb3NNaW5UZXh0KTtcbiAgICB0aGlzLmdyYWRvc1VwcGVyQ29udC5hcHBlbmRDaGlsZCh0aGlzLmdyYWRvc0dyYW5kZXNUZXh0KTtcbiAgICB0aGlzLmdyYWRvc1VwcGVyQ29udC5hcHBlbmRDaGlsZCh0aGlzLm1pbk1heENvbnQpO1xuICAgIHRoaXMuZ3JhZG9zTG93ZXJDb250LmFwcGVuZENoaWxkKHRoaXMud2VhdGhlckRlc2NyaXB0aW9uVGV4dCk7XG4gICAgdGhpcy5ncmFkb3NMb3dlckNvbnQuYXBwZW5kQ2hpbGQodGhpcy53ZWF0aGVyUmVhbEZlZWxUZXh0KTtcbiAgICB0aGlzLm5hbWVDb250LmFwcGVuZENoaWxkKHRoaXMubG9jYXRpb25JbWcpO1xuICAgIHRoaXMubmFtZUNvbnQuYXBwZW5kQ2hpbGQodGhpcy5jaXR5TmFtZSk7XG4gICAgdGhpcy5uYW1lQ29udC5hcHBlbmRDaGlsZCh0aGlzLnR1ZXJjYUltZyk7XG4gICAgdGhpcy53ZWF0aGVyQ2FyZENvbnQuYXBwZW5kQ2hpbGQodGhpcy5uYW1lQ29udCk7XG4gICAgdGhpcy5tYWluQ29udFRvcC5hcHBlbmRDaGlsZCh0aGlzLndlYXRoZXJJbWcpO1xuICAgIHRoaXMubWFpbkNvbnRUb3AuYXBwZW5kQ2hpbGQodGhpcy5ncmFkb3NVcHBlckNvbnQpO1xuICAgIHRoaXMud2VhdGhlckNhcmRDb250LmFwcGVuZENoaWxkKHRoaXMubWFpbkNvbnRUb3ApO1xuICAgIHRoaXMud2VhdGhlckNhcmRDb250LmFwcGVuZENoaWxkKHRoaXMuZ3JhZG9zTG93ZXJDb250KTtcbiAgICB0aGlzLndlYXRoZXJDYXJkQ29udC5hcHBlbmRDaGlsZCh0aGlzLm1pbmlDYXJkc0NvbnRhaW5lcik7XG4gICAgdGhpcy5jb25maWdDb250LmFwcGVuZENoaWxkKHRoaXMuZmFocmVuaGVpdFRleHQpO1xuICAgIHRoaXMuY29uZmlnQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNlbGNpdXNUZXh0KTtcbiAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLndlYXRoZXJDYXJkQ29udCk7XG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy5jb25maWdDb250KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2l0eVdlYXRoZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb3VudHJ5TmFtZSxcbiAgICBjaXR5TmFtZSxcbiAgICB3ZWF0aGVyRGVzYyxcbiAgICB0ZW1wLFxuICAgIHRlbXBGZWVsc0xpa2UsXG4gICAgdGVtcE1heCxcbiAgICB0ZW1wTWluLFxuICAgIGh1bWlkaXR5LFxuICAgIGljb24sXG4gICkge1xuICAgIHRoaXMuY291bnRyeU5hbWUgPSBjb3VudHJ5TmFtZTtcbiAgICB0aGlzLmNpdHlOYW1lID0gY2l0eU5hbWU7XG4gICAgdGhpcy53ZWF0aGVyRGVzYyA9IHdlYXRoZXJEZXNjO1xuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgdGhpcy50ZW1wRmVlbHNMaWtlID0gdGVtcEZlZWxzTGlrZTtcbiAgICB0aGlzLnRlbXBNYXggPSB0ZW1wTWF4O1xuICAgIHRoaXMudGVtcE1pbiA9IHRlbXBNaW47XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gIH1cbn1cbiIsImltcG9ydCBlcnJvckltZyBmcm9tICcuLi9hc3NldHMvd2FybmluZy5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGRpdiwgc2VhcmNoVGVybSkge1xuICAgIHRoaXMuZGl2ID0gZGl2O1xuICAgIHRoaXMuc2VhcmNoVGVybSA9IHNlYXJjaFRlcm07XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZG9tQ3JlYXRvcigpO1xuICAgIHRoaXMuZG9tSHRtbFNldHRlcigpO1xuICAgIHRoaXMuZG9tSHRtbE5hbWVyKCk7XG4gICAgdGhpcy5kb21BcHBlbmRlcigpO1xuICB9XG5cbiAgZG9tQ3JlYXRvcigpIHtcbiAgICB0aGlzLmVycm9ySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGhpcy5lcnJvclR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICB0aGlzLmVycm9yQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgZG9tSHRtbFNldHRlcigpIHtcbiAgICB0aGlzLmVycm9ySW1nLnNyYyA9IGVycm9ySW1nO1xuICAgIHRoaXMuZXJyb3JUeHQuaW5uZXJIVE1MID0gYENvdWxkIG5vdCBmaW5kIGFueSBtYXRjaCBmb3IgXCIke3RoaXMuc2VhcmNoVGVybX1cImA7XG4gIH1cblxuICBkb21IdG1sTmFtZXIoKSB7XG4gICAgdGhpcy5lcnJvckltZy5pZCA9ICdlcnJvci1pbWcnO1xuICAgIHRoaXMuZXJyb3JUeHQuaWQgPSAnZXJyb3ItdHh0JztcbiAgICB0aGlzLmVycm9yQ29udC5jbGFzc0xpc3QgPSAnZXJyb3ItY29udCc7XG4gIH1cblxuICBkb21BcHBlbmRlcigpIHtcbiAgICB0aGlzLmVycm9yQ29udC5hcHBlbmRDaGlsZCh0aGlzLmVycm9ySW1nKTtcbiAgICB0aGlzLmVycm9yQ29udC5hcHBlbmRDaGlsZCh0aGlzLmVycm9yVHh0KTtcbiAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLmVycm9yQ29udCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmlDYXJkIHtcbiAgY29uc3RydWN0b3IobWF4VGVtcCwgbWluVGVtcCwgaWNvbiwgZGl2LCBkYXlOYW1lKSB7XG4gICAgdGhpcy5tYXhUZW1wID0gbWF4VGVtcDtcbiAgICB0aGlzLm1pblRlbXAgPSBtaW5UZW1wO1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgdGhpcy5kaXYgPSBkaXY7XG4gICAgdGhpcy5kYXlOYW1lID0gZGF5TmFtZTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kb21DcmVhdG9yKCk7XG4gICAgdGhpcy5kb21IdG1sU2V0dGVyKCk7XG4gICAgdGhpcy5kb21IdG1sTmFtZXIoKTtcbiAgICB0aGlzLmRvbUFwcGVuZGVyKCk7XG4gIH1cblxuICBkb21DcmVhdG9yKCkge1xuICAgIHRoaXMubWluaUNhcmRDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5kYXlOYW1lUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aGlzLmljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0aGlzLm1heFRlbXBQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRoaXMubWluVGVtcFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIH1cblxuICBkb21IdG1sU2V0dGVyKCkge1xuICAgIHRoaXMuaWNvbkltZy5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHt0aGlzLmljb259LnBuZ2A7XG4gICAgdGhpcy5kYXlOYW1lUC5pbm5lckhUTUwgPSBgJHt0aGlzLmRheU5hbWV9YDtcbiAgICB0aGlzLm1pblRlbXBQLmlubmVySFRNTCA9IGAke3RoaXMubWluVGVtcC50b0ZpeGVkKCl9wrBgO1xuICAgIHRoaXMubWF4VGVtcFAuaW5uZXJIVE1MID0gYCR7dGhpcy5tYXhUZW1wLnRvRml4ZWQoKX3CsGA7XG4gIH1cblxuICBkb21IdG1sTmFtZXIoKSB7XG4gICAgdGhpcy5taW5pQ2FyZENvbnQuY2xhc3NMaXN0ID0gJ21pbmktY2FyZC1jb250JztcbiAgICB0aGlzLmRheU5hbWVQLmlkID0gJ21pbmktY2FyZC1kYXknO1xuICAgIHRoaXMuaWNvbkltZy5pZCA9ICdtaW5pLWNhcmQtaWNvbic7XG4gICAgdGhpcy5tYXhUZW1wUC5pZCA9ICdtaW5pLWNhcmQtdGVtcCc7XG4gICAgdGhpcy5taW5UZW1wUC5pZCA9ICdtaW5pLWNhcmQtdGVtcCc7XG4gIH1cblxuICBkb21BcHBlbmRlcigpIHtcbiAgICB0aGlzLm1pbmlDYXJkQ29udC5hcHBlbmRDaGlsZCh0aGlzLmRheU5hbWVQKTtcbiAgICB0aGlzLm1pbmlDYXJkQ29udC5hcHBlbmRDaGlsZCh0aGlzLmljb25JbWcpO1xuICAgIHRoaXMubWluaUNhcmRDb250LmFwcGVuZENoaWxkKHRoaXMubWF4VGVtcFApO1xuICAgIHRoaXMubWluaUNhcmRDb250LmFwcGVuZENoaWxkKHRoaXMubWluVGVtcFApO1xuICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKHRoaXMubWluaUNhcmRDb250KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vYXBwL3N0eWxlLmNzcyc7XG5pbXBvcnQgQ2l0eVdlYXRoZXIgZnJvbSAnLi9hcHAvdXRpbHMvY2l0eV9jbGFzcyc7XG5pbXBvcnQgV2VhdGhlckNhcmQgZnJvbSAnLi9hcHAvdXRpbHMvY2FyZF9jcmVhdG9yJztcbmltcG9ydCBNaW5pQ2FyZCBmcm9tICcuL2FwcC91dGlscy9taW5pX2NhcmRfY3JlYXRvcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9hcHAvdXRpbHMvZXJyb3JfY2xhc3MnO1xuXG5jbGFzcyBNYWluUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudW5pdHMgPSAnbWV0cmljJztcbiAgICB0aGlzLmRheSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5kYXlOYW1lcyA9IFsnU1VOJywgJ01PTicsICdUVUUnLCAnV0VEJywgJ1RIVScsICdGUkknLCAnU0FUJyxcbiAgICAgICdTVU4nLCAnTU9OJywgJ1RVRScsICdXRUQnLCAnVEhVJywgJ0ZSSScsICdTQVQnLFxuICAgIF07XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZG9tQ2FjaGUoKTtcbiAgICB0aGlzLmRvbUJpbmQoKTtcbiAgfVxuXG4gIGRvbUNhY2hlKCkge1xuICAgIHRoaXMuc2VhcmNoQnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbicpO1xuICAgIHRoaXMuaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dCcpO1xuICAgIHRoaXMud2VhdGhlckNhcmRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udCcpO1xuICAgIHRoaXMubWFpbkNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250Jyk7XG4gIH1cblxuICBkb21CaW5kKCkge1xuICAgIHRoaXMuc2VhcmNoQnV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy53ZWF0aGVyQ2FyZERvbUNsZWFyKCk7XG4gICAgICBjb25zdCBjaXR5TmFtZSA9IHRoaXMuaW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgIGxldCBhdXhOdW1iZXIgPSAwO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbGF0TG9uID0gYXdhaXQgdGhpcy5nZXRMYXRMb24oY2l0eU5hbWUpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCB0aGlzLmdldEZvcmVjYXN0RGF0YShsYXRMb24pO1xuICAgICAgICBjb25zdCBmb3JlY2FzdEZ1dHVyZURhdGEgPSBmb3JlY2FzdERhdGEuZGFpbHkuc2xpY2UoMSk7XG4gICAgICAgIGNvbnN0IHRvZGF5RGF0YSA9IG5ldyBDaXR5V2VhdGhlcihcbiAgICAgICAgICBsYXRMb24uY291bnRyeSxcbiAgICAgICAgICBsYXRMb24ubmFtZSxcbiAgICAgICAgICBmb3JlY2FzdERhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGZvcmVjYXN0RGF0YS5jdXJyZW50LnRlbXAsXG4gICAgICAgICAgZm9yZWNhc3REYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSxcbiAgICAgICAgICBmb3JlY2FzdERhdGEuZGFpbHlbMF0udGVtcC5tYXgsXG4gICAgICAgICAgZm9yZWNhc3REYXRhLmRhaWx5WzBdLnRlbXAubWluLFxuICAgICAgICAgIGZvcmVjYXN0RGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICAgIGZvcmVjYXN0RGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbixcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jcmVhdGVXZWF0aGVyQ2FyZCh0b2RheURhdGEsIHRoaXMud2VhdGhlckNhcmRDb250KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZy1vcHRpb24tY2VsY2l1cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2VsY2l1c09uQ2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maWctb3B0aW9uLWZhaHJlbmhlaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZhaHJlbmhlaXRPbkNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3JlY2FzdEZ1dHVyZURhdGEuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3JlYXRlTWluaUNhcmRzKFxuICAgICAgICAgICAgZS50ZW1wLm1heCxcbiAgICAgICAgICAgIGUudGVtcC5taW4sXG4gICAgICAgICAgICBlLndlYXRoZXJbMF0uaWNvbixcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW5pLWNhcmRzLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgdGhpcy5kYXlOYW1lc1t0aGlzLmRheS5nZXREYXkoKSArIDEgKyBhdXhOdW1iZXJdLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYXV4TnVtYmVyKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGNvbnN0IGVycm9yQ2FyZCA9IG5ldyBOb3RGb3VuZCh0aGlzLndlYXRoZXJDYXJkQ29udCwgdGhpcy5pbnB1dEZpZWxkLnZhbHVlKTtcbiAgICAgICAgZXJyb3JDYXJkLmluaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNlYXJjaEJ1dC5jbGljaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0Rm9yZWNhc3REYXRhKGdlb0Nvb3JkaW5hdGUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Z2VvQ29vcmRpbmF0ZS5sYXR9Jmxvbj0ke2dlb0Nvb3JkaW5hdGUubG9ufSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZ1bml0cz0ke3RoaXMudW5pdHN9JmFwcGlkPTdlYWM0MWFmZTU2MTYwYTQ3N2JiOWI4OGM3Y2EwOWEzYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1InKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRMYXRMb24oc2VhcmNoVGVybSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7c2VhcmNoVGVybX0mYXBwaWQ9N2VhYzQxYWZlNTYxNjBhNDc3YmI5Yjg4YzdjYTA5YTNgLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiAoe1xuICAgICAgbGF0OiBkYXRhWzBdLmxhdCwgbG9uOiBkYXRhWzBdLmxvbiwgbmFtZTogZGF0YVswXS5uYW1lLCBjb3VudHJ5OiBkYXRhWzBdLmNvdW50cnksXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVNaW5pQ2FyZHMobWF4VGVtcCwgbWluVGVtcCwgaWNvbiwgZGl2LCBkYXlOYW1lKSB7XG4gICAgY29uc3QgbWluaUNhcmQgPSBuZXcgTWluaUNhcmQobWF4VGVtcCwgbWluVGVtcCwgaWNvbiwgZGl2LCBkYXlOYW1lKTtcbiAgICBtaW5pQ2FyZC5pbml0KCk7XG4gIH1cblxuICBjcmVhdGVXZWF0aGVyQ2FyZCh0b2RheURhdGEsIGNvbnQpIHtcbiAgICBjb25zdCB3ZWF0aGVyQ2FyZCA9IG5ldyBXZWF0aGVyQ2FyZCh0b2RheURhdGEsIGNvbnQpO1xuICAgIHdlYXRoZXJDYXJkLmluaXQoKTtcbiAgfVxuXG4gIGNlbGNpdXNPbkNsaWNrKCkge1xuICAgIHRoaXMudW5pdHMgPSAnbWV0cmljJztcbiAgICB0aGlzLnNlYXJjaEJ1dC5jbGljaygpO1xuICB9XG5cbiAgZmFocmVuaGVpdE9uQ2xpY2soKSB7XG4gICAgdGhpcy51bml0cyA9ICdpbXBlcmlhbCc7XG4gICAgdGhpcy5zZWFyY2hCdXQuY2xpY2soKTtcbiAgfVxuXG4gIHdlYXRoZXJDYXJkRG9tQ2xlYXIoKSB7XG4gICAgdGhpcy53ZWF0aGVyQ2FyZENvbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cbn1cblxuY29uc3QgZ2lmUGFnZSA9IG5ldyBNYWluUGFnZSgpO1xuZ2lmUGFnZS5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=