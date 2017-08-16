(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dojo/_base/declare"), require("dojo/dom"), require("dojo/dom-construct"), require("mxui/widget/_WidgetBase"), require("dojo/dom-class"));
	else if(typeof define === 'function' && define.amd)
		define(["dojo/_base/declare", "dojo/dom", "dojo/dom-construct", "mxui/widget/_WidgetBase", "dojo/dom-class"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("dojo/_base/declare"), require("dojo/dom"), require("dojo/dom-construct"), require("mxui/widget/_WidgetBase"), require("dojo/dom-class")) : factory(root["dojo/_base/declare"], root["dojo/dom"], root["dojo/dom-construct"], root["mxui/widget/_WidgetBase"], root["dojo/dom-class"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, domClass) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PullToRefresh = (function () {
        function PullToRefresh(params) {
            this.distance = 0;
            this.distanceResisted = 0;
            this.lastDistance = 0;
            this.onTouchStart = this.onTouchStart.bind(this);
            this.onTouchMove = this.onTouchMove.bind(this);
            this.onTouchEnd = this.onTouchEnd.bind(this);
            this.resetDom = this.resetDom.bind(this);
            var classPrefix = "pull-to-refresh-";
            this.settings = {
                classPrefix: classPrefix,
                cssProp: "min-height",
                iconArrow: "&#8675;",
                iconElement: params.pullToRefreshElement.querySelector("." + classPrefix + "icon"),
                iconRefreshing: "&hellip;",
                mainElement: params.mainElement,
                maximumDistance: 150,
                onRefresh: params.onRefresh,
                pullToRefreshElement: params.pullToRefreshElement,
                pullToRefreshText: params.pullToRefreshText || "",
                refreshText: params.refreshText || "",
                releaseToRefreshText: params.releaseToRefreshText || "",
                reloadDistance: 50,
                resistanceFunction: function (distance) { return Math.min(1, distance / 2.5); },
                textElement: params.pullToRefreshElement.querySelector("." + classPrefix + "text"),
                thresholdDistance: 80,
                triggerElement: params.mainElement
            };
            this.state = "pending";
            this.pullStart = { screenX: 0, screenY: 0 };
        }
        PullToRefresh.prototype.setupEvents = function () {
            window.addEventListener("touchstart", this.onTouchStart);
            window.addEventListener("touchend", this.onTouchEnd);
            window.addEventListener("touchmove", this.onTouchMove, { passive: false });
        };
        PullToRefresh.prototype.removeEvents = function () {
            window.removeEventListener("touchstart", this.onTouchStart);
            window.removeEventListener("touchend", this.onTouchEnd);
            window.removeEventListener("touchmove", this.onTouchMove, { passive: false });
        };
        PullToRefresh.prototype.update = function (nextState) {
            var _a = this.settings, iconElement = _a.iconElement, textElement = _a.textElement, pullToRefreshElement = _a.pullToRefreshElement, classPrefix = _a.classPrefix, iconRefreshing = _a.iconRefreshing, iconArrow = _a.iconArrow, refreshText = _a.refreshText, pullToRefreshText = _a.pullToRefreshText, releaseToRefreshText = _a.releaseToRefreshText, reloadDistance = _a.reloadDistance;
            if (iconElement && textElement && nextState !== this.state) {
                if (nextState === "refreshing") {
                    pullToRefreshElement.style.minHeight = reloadDistance + "px";
                    domClass.replace(pullToRefreshElement, classPrefix + "refresh", classPrefix + "release");
                    iconElement.innerHTML = iconRefreshing;
                    textElement.innerHTML = refreshText;
                }
                else {
                    iconElement.innerHTML = iconArrow;
                }
                if (nextState === "releaseToRefresh") {
                    domClass.add(pullToRefreshElement, classPrefix + "release");
                    textElement.innerHTML = releaseToRefreshText;
                }
                else if (nextState === "pulling" || nextState === "pending") {
                    textElement.innerHTML = pullToRefreshText;
                }
                if (nextState === "pulling") {
                    domClass.replace(pullToRefreshElement, classPrefix + "pull", classPrefix + "release");
                }
            }
            this.state = nextState;
        };
        PullToRefresh.prototype.onTouchStart = function (event) {
            this.state = "pending";
            if (this.isScrollActive(event.target)) {
                this.state = "scrolling";
                return;
            }
            this.pullStart.screenX = event.touches[0].screenX;
            this.pullStart.screenY = event.touches[0].screenY;
            this.enable = this.settings.triggerElement.contains(event.target);
            this.lastDistance = 0;
            this.distanceResisted = 0;
            this.update("pending");
        };
        PullToRefresh.prototype.onTouchMove = function (event) {
            if (!this.enable || this.state === "refreshing" || this.state === "scrolling")
                return;
            var _a = this.settings, pullToRefreshElement = _a.pullToRefreshElement, maximumDistance = _a.maximumDistance, thresholdDistance = _a.thresholdDistance;
            this.pullMoveY = event.touches[0].screenY;
            if (this.state === "pending") {
                this.update("pulling");
            }
            if (this.pullStart.screenY && this.pullMoveY) {
                this.distance = this.pullMoveY - this.pullStart.screenY;
            }
            if (this.distance > 0 && Math.abs(this.lastDistance - this.distance) > 1) {
                event.preventDefault();
                var distanceResisted = this.settings.resistanceFunction(this.distance / thresholdDistance)
                    * Math.min(maximumDistance, this.distance);
                this.lastDistance = this.distance;
                if (this.distanceResisted !== distanceResisted) {
                    pullToRefreshElement.style.minHeight = this.distanceResisted + "px";
                }
                if (this.state === "pulling" && distanceResisted > thresholdDistance) {
                    this.update("releaseToRefresh");
                }
                if (this.state === "releaseToRefresh" && distanceResisted < thresholdDistance) {
                    this.update("pulling");
                }
                this.distanceResisted = distanceResisted;
            }
        };
        PullToRefresh.prototype.onTouchEnd = function () {
            var _this = this;
            var _a = this.settings, pullToRefreshElement = _a.pullToRefreshElement, onRefresh = _a.onRefresh, classPrefix = _a.classPrefix;
            if (this.state === "releaseToRefresh") {
                pullToRefreshElement.style.minHeight = this.settings.reloadDistance + "px";
                domClass.add(pullToRefreshElement, classPrefix + "refresh");
                onRefresh(function () { return _this.resetDom(); });
                this.update("refreshing");
            }
            else if (this.state === "refreshing") {
                return;
            }
            else {
                this.resetDom();
            }
        };
        PullToRefresh.prototype.isScrollActive = function (element) {
            if (element === null) {
                return false;
            }
            if (element.scrollTop > 5) {
                return true;
            }
            else {
                return this.isScrollActive(element.parentNode);
            }
        };
        PullToRefresh.prototype.resetDom = function () {
            var _a = this.settings, pullToRefreshElement = _a.pullToRefreshElement, classPrefix = _a.classPrefix;
            domClass.remove(pullToRefreshElement, classPrefix + "release " + classPrefix + "pull " + classPrefix + "refresh");
            pullToRefreshElement.style.minHeight = "0px";
            this.pullStart = { screenY: 0, screenX: 0 };
            this.lastDistance = 0;
            this.distance = 0;
            this.distanceResisted = 0;
            this.pullMoveY = 0;
            this.state = "pending";
        };
        return PullToRefresh;
    }());
    exports.PullToRefresh = PullToRefresh;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, dojoDeclare, dojoDom, domConstruct, WidgetBase, PullToRefresh_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PullToRefreshWrapper = (function (_super) {
        __extends(PullToRefreshWrapper, _super);
        function PullToRefreshWrapper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PullToRefreshWrapper.prototype.postCreate = function () {
            this.onRefresh = this.onRefresh.bind(this);
            this.onSyncFailure = this.onSyncFailure.bind(this);
            if (!window.mx.data.synchronizeOffline && !window.mx.data.synchronizeDataWithFiles) {
                domConstruct.create("div", {
                    class: "alert alert-danger",
                    innerHTML: "The pull to refresh widget is not compatible with this version of Mendix"
                }, this.domNode);
            }
            else {
                this.setUpWidgetDom();
                this.pullToRefresh.setupEvents();
            }
        };
        PullToRefreshWrapper.prototype.uninitialize = function () {
            this.pullToRefresh.removeEvents();
            return true;
        };
        PullToRefreshWrapper.prototype.setUpWidgetDom = function () {
            this.pullToRefreshElement = dojoDom.byId("widget-pull-to-refresh");
            if (!this.pullToRefreshElement) {
                this.pullToRefreshElement = domConstruct.create("div", {
                    class: "pull-to-refresh-pull-to-refresh",
                    id: "widget-pull-to-refresh",
                    innerHTML: "\n                    <div class='pull-to-refresh-box'>\n                        <div class='pull-to-refresh-content'>\n                            <div class='pull-to-refresh-icon'></div>\n                            <div class='pull-to-refresh-text'></div>\n                        </div>\n                    </div>\n                "
                }, document.body, "first");
            }
            this.pullToRefresh = new PullToRefresh_1.PullToRefresh({
                mainElement: document.body,
                onRefresh: this.onRefresh,
                pullToRefreshElement: this.pullToRefreshElement,
                pullToRefreshText: this.pullToRefreshText,
                refreshText: this.refreshText,
                releaseToRefreshText: this.releaseToRefreshText
            });
        };
        PullToRefreshWrapper.prototype.onRefresh = function (callback) {
            var _this = this;
            this.progressId = window.mx.ui.showProgress(null, true);
            this.pullToRefresh.removeEvents();
            if (window.mx.data.synchronizeOffline) {
                window.mx.data.synchronizeOffline({ fast: false }, function () { return _this.onSyncSuccess(callback); }, this.onSyncFailure);
            }
            else if (window.mx.data.synchronizeDataWithFiles) {
                window.mx.data.synchronizeDataWithFiles(function () { return _this.onSyncSuccess(callback); }, this.onSyncFailure);
            }
        };
        PullToRefreshWrapper.prototype.onSyncSuccess = function (callback) {
            var _this = this;
            window.mx.ui.reload(function () {
                if (_this.progressId) {
                    window.mx.ui.hideProgress(_this.progressId);
                }
                _this.pullToRefresh.setupEvents();
                if (callback)
                    callback();
            });
        };
        PullToRefreshWrapper.prototype.onSyncFailure = function () {
            if (this.progressId)
                window.mx.ui.hideProgress(this.progressId);
            window.mx.ui.info(window.mx.ui.translate("mxui.sys.UI", "sync_error"), true);
            this.pullToRefresh.setupEvents();
        };
        return PullToRefreshWrapper;
    }(WidgetBase));
    dojoDeclare("PullToRefresh.widget.PullToRefresh", [WidgetBase], function (Source) {
        var result = {};
        for (var property in Source.prototype) {
            if (property !== "constructor" && Source.prototype.hasOwnProperty(property)) {
                result[property] = Source.prototype[property];
            }
        }
        return result;
    }(PullToRefreshWrapper));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })
/******/ ]);
});