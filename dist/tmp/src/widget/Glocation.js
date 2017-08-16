(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dojo/_base/declare"), require("dojo/dom-style"), require("mxui/widget/_WidgetBase"));
	else if(typeof define === 'function' && define.amd)
		define(["dojo/_base/declare", "dojo/dom-style", "mxui/widget/_WidgetBase"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("dojo/_base/declare"), require("dojo/dom-style"), require("mxui/widget/_WidgetBase")) : factory(root["dojo/_base/declare"], root["dojo/dom-style"], root["mxui/widget/_WidgetBase"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD7lIMhMh2QPy9EUs97VlbmWx924wp4G_8";
    var GoogleMapsLoader = (function () {
        function GoogleMapsLoader() {
        }
        GoogleMapsLoader.load = function () {
            if (!GoogleMapsLoader.promise) {
                GoogleMapsLoader.promise = new Promise(function (resolve) {
                    window.__onGoogleMapsLoaded = function () {
                        console.log("google maps api loaded");
                        resolve(window.google.maps);
                    };
                    alert("loading..");
                    var node = document.createElement("script");
                    node.src = url;
                    node.type = "text/javascript";
                    document.getElementsByTagName("head")[0].appendChild(node);
                });
            }
            return GoogleMapsLoader.promise;
        };
        return GoogleMapsLoader;
    }());
    exports.GoogleMapsLoader = GoogleMapsLoader;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(2), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, dojoDeclare, WidgetBase, dojoStyle, GoogleMapsLoader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Glocation = (function (_super) {
        __extends(Glocation, _super);
        function Glocation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Glocation.prototype.postCreate = function () {
            this.geoSuccess = this.geoSuccess.bind(this);
        };
        Glocation.prototype.update = function (object, callback) {
            this.contextObject = object;
            if (navigator.onLine) {
                GoogleMapsLoader_1.GoogleMapsLoader.load()
                    .then(function () { return; });
            }
            else {
                mx.ui.error("Please Check your internet connection");
            }
            this.resetSubscriptions();
            if (callback) {
                callback();
            }
            this.updateRendering();
        };
        Glocation.prototype.uninitialize = function () {
            return true;
        };
        Glocation.prototype.updateRendering = function () {
            if (this.contextObject) {
                this.getLocation();
            }
            else {
                dojoStyle.set(this.domNode, "display", "block");
            }
        };
        Glocation.prototype.resetSubscriptions = function () {
            var _this = this;
            this.unsubscribeAll();
            if (this.contextObject) {
                this.subscribe({
                    callback: (function () {
                        _this.updateRendering();
                    }),
                    guid: this.contextObject.getGuid()
                });
            }
        };
        Glocation.prototype.getLocation = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
            }
            else {
                mx.ui.error("Geolocation is not supported by this browser.");
            }
        };
        Glocation.prototype.geoError = function () {
            mx.ui.error("Geocoder failed.");
        };
        Glocation.prototype.geoSuccess = function (position) {
            var latitude = position.coords.latitude;
            var longit = position.coords.longitude;
            if ((latitude && longit == null) || longit == null || latitude == null) {
                alert("Error occured on the coordinates");
            }
            this.geoLocate(latitude, longit);
        };
        Glocation.prototype.geoLocate = function (lat, lng) {
            var _this = this;
            var geocoder = new google.maps.Geocoder();
            var LatLng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({ location: LatLng }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    console.log(results);
                    if (results[1]) {
                        var address = results[0].formatted_address;
                        _this.createData(lat, lng, address);
                    }
                    else {
                        mx.ui.error("No results found");
                    }
                }
                else {
                    mx.ui.error("Geocoder failed due to: " + status);
                }
            });
        };
        Glocation.prototype.executeMicroflow = function (microflow, guid, callbck) {
            if (microflow && guid) {
                mx.ui.action(microflow, {
                    callback: function (objects) {
                        if (callbck && typeof callbck === "function") {
                            callbck(objects);
                        }
                    },
                    error: function (error) {
                        alert("Error executing microflow " + microflow + " : " + error.message);
                    },
                    params: {
                        applyto: "selection",
                        guids: [guid]
                    }
                }, this);
            }
        };
        Glocation.prototype.createData = function (latitude, longitude, cityN) {
            this.contextObject.set(this.cityName, cityN);
            this.contextObject.set(this.latitudeAttribute, latitude);
            this.contextObject.set(this.longitudeAttribute, longitude);
            if (cityN == null || latitude == null || longitude == null || (cityN && latitude && longitude) == null) {
                alert("Error occured on the specifications");
            }
            this.executeMicroflow(this.onChangeMicroflow, this.contextObject.getGuid());
        };
        return Glocation;
    }(WidgetBase));
    dojoDeclare("widget.Glocation", [WidgetBase], function (Source) {
        var result = {};
        for (var i in Source.prototype) {
            if (i !== "constructor" && Source.prototype.hasOwnProperty(i)) {
                result[i] = Source.prototype[i];
            }
        }
        return result;
    }(Glocation));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
});
//# sourceMappingURL=Glocation.js.map