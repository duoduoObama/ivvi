function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delon-delon-module"], {
  /***/
  "./node_modules/@delon/cache/fesm2015/cache.js":
  /*!*****************************************************!*\
    !*** ./node_modules/@delon/cache/fesm2015/cache.js ***!
    \*****************************************************/

  /*! exports provided: CacheService, DelonCacheConfig, DelonCacheModule, ɵa, ɵb, ɵc */

  /***/
  function node_modulesDelonCacheFesm2015CacheJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CacheService", function () {
      return CacheService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DelonCacheConfig", function () {
      return DelonCacheConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DelonCacheModule", function () {
      return DelonCacheModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DC_STORE_STORAGE_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DC_STORE_STORAGE_TOKEN_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return LocalStorageCacheService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! date-fns/add_seconds */
    "./node_modules/date-fns/add_seconds/index.js");
    /* harmony import */


    var date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/interface.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function ICache() {}

    if (false) {}
    /**
     * @record
     */


    function ICacheStore() {}

    if (false) {}
    /**
     * @record
     */


    function CacheNotifyResult() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cache.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DelonCacheConfig = function DelonCacheConfig() {
      _classCallCheck(this, DelonCacheConfig);

      /**
       * Cache mode, default: `promise`
       * - `promise` Convention mode, allowing `key` to get data as http
       * - `none` Normal mode
       */
      this.mode = 'promise';
      /**
       * Rename the return parameters, for example:
       * - `null` The response body is content
       * - `list` The response body should be `{ list: [] }`
       * - `result.list` The response body should be `{ result: { list: [] } }`
       */

      this.reName = '';
      /**
       * Key prefix of persistent data
       */

      this.prefix = '';
      /**
       * Key name of persistent data metadata storage
       */

      this.meta_key = '__cache_meta';
    };

    DelonCacheConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    DelonCacheConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function DelonCacheConfig_Factory() {
        return new DelonCacheConfig();
      },
      token: DelonCacheConfig,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/local-storage-cache.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DC_STORE_STORAGE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('DC_STORE_STORAGE_TOKEN', {
      providedIn: 'root',
      factory: DC_STORE_STORAGE_TOKEN_FACTORY
    });
    /**
     * @return {?}
     */

    function DC_STORE_STORAGE_TOKEN_FACTORY() {
      return new LocalStorageCacheService();
    }

    var LocalStorageCacheService =
    /*#__PURE__*/
    function () {
      function LocalStorageCacheService() {
        _classCallCheck(this, LocalStorageCacheService);
      }

      _createClass(LocalStorageCacheService, [{
        key: "get",

        /**
         * @param {?} key
         * @return {?}
         */
        value: function get(key) {
          return JSON.parse(localStorage.getItem(key) || 'null') || null;
        }
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "set",
        value: function set(key, value) {
          localStorage.setItem(key, JSON.stringify(value));
          return true;
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(key) {
          localStorage.removeItem(key);
        }
      }]);

      return LocalStorageCacheService;
    }();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cache.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CacheService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _
       * @param {?} store
       * @param {?} http
       */
      function CacheService(_, store, http) {
        _classCallCheck(this, CacheService);

        this.store = store;
        this.http = http;
        this.memory = new Map();
        this.notifyBuffer = new Map();
        this.meta = new Set();
        this.freqTick = 3000;
        this.cog = {};
        Object.assign(this.cog, Object.assign({}, new DelonCacheConfig(), _));
        this.loadMeta();
        this.startExpireNotify();
      }
      /**
       * @private
       * @param {?} obj
       * @param {?} path
       * @param {?=} defaultValue
       * @return {?}
       */


      _createClass(CacheService, [{
        key: "deepGet",
        value: function deepGet(obj, path, defaultValue) {
          if (!obj) return defaultValue;

          if (path.length <= 1) {
            /** @type {?} */
            var checkObj = path.length ? obj[path[0]] : obj;
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
          }

          return path.reduce(
          /**
          * @param {?} o
          * @param {?} k
          * @return {?}
          */
          function (o, k) {
            return o[k];
          }, obj) || defaultValue;
        } // #region meta

        /**
         * @private
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "pushMeta",
        value: function pushMeta(key) {
          if (this.meta.has(key)) return;
          this.meta.add(key);
          this.saveMeta();
        }
        /**
         * @private
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "removeMeta",
        value: function removeMeta(key) {
          if (!this.meta.has(key)) return;
          this.meta.delete(key);
          this.saveMeta();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "loadMeta",
        value: function loadMeta() {
          var _this = this;

          /** @type {?} */
          var ret = this.store.get(
          /** @type {?} */
          this.cog.meta_key);

          if (ret && ret.v) {
            /** @type {?} */
            ret.v.forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              return _this.meta.add(key);
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "saveMeta",
        value: function saveMeta() {
          /** @type {?} */
          var metaData = [];
          this.meta.forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return metaData.push(key);
          });
          this.store.set(
          /** @type {?} */
          this.cog.meta_key, {
            v: metaData,
            e: 0
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getMeta",
        value: function getMeta() {
          return this.meta;
        }
        /**
         * 缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "set",
        value: function set(key, data) {
          var _this2 = this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var e = 0;
          var _this$cog = this.cog,
              type = _this$cog.type,
              expire = _this$cog.expire;
          options = Object.assign({
            type: type,
            expire: expire
          }, options);

          if (options.expire) {
            e = date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2___default()(new Date(), options.expire).valueOf();
          }

          if (!(data instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])) {
            this.save(
            /** @type {?} */
            options.type, key, {
              v: data,
              e: e
            });
            return;
          }

          return data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            _this2.save(
            /** @type {?} */
            options.type, key, {
              v: v,
              e: e
            });
          }));
        }
        /**
         * @private
         * @param {?} type
         * @param {?} key
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "save",
        value: function save(type, key, value) {
          if (type === 'm') {
            this.memory.set(key, value);
          } else {
            this.store.set(this.cog.prefix + key, value);
            this.pushMeta(key);
          }

          this.runNotify(key, 'set');
        }
        /**
         * @param {?} key
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(key) {
          var _this3 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          /** @type {?} */
          var isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
          /** @type {?} */

          var value = this.memory.has(key) ?
          /** @type {?} */
          this.memory.get(key) : this.store.get(this.cog.prefix + key);

          if (!value || value.e && value.e > 0 && value.e < new Date().valueOf()) {
            if (isPromise) {
              return this.http.get(key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} ret
              * @return {?}
              */
              function (ret) {
                return _this3.deepGet(ret,
                /** @type {?} */
                _this3.cog.reName, null);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
              /**
              * @param {?} v
              * @return {?}
              */
              function (v) {
                return _this3.set(key, v, {
                  type:
                  /** @type {?} */
                  options.type,
                  expire: options.expire
                });
              }));
            }

            return null;
          }

          return isPromise ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value.v) : value.v;
        }
        /**
         * 获取缓存数据，若 `key` 不存在或已过期则返回 null
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getNone",
        value: function getNone(key) {
          return this.get(key, {
            mode: 'none'
          });
        }
        /**
         * 获取缓存，若不存在则设置缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "tryGet",
        value: function tryGet(key, data) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var ret = this.getNone(key);

          if (ret === null) {
            if (!(data instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])) {
              this.set(key, data,
              /** @type {?} */
              options);
              return data;
            }

            return this.set(key,
            /** @type {?} */
            data,
            /** @type {?} */
            options);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(ret);
        } // #endregion
        // #region has

        /**
         * 是否缓存 `key`
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "has",
        value: function has(key) {
          return this.memory.has(key) || this.meta.has(key);
        } // #endregion
        // #region remove

        /**
         * @private
         * @param {?} key
         * @param {?} needNotify
         * @return {?}
         */

      }, {
        key: "_remove",
        value: function _remove(key, needNotify) {
          if (needNotify) this.runNotify(key, 'remove');

          if (this.memory.has(key)) {
            this.memory.delete(key);
            return;
          }

          this.store.remove(this.cog.prefix + key);
          this.removeMeta(key);
        }
        /**
         * 移除缓存
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(key) {
          this._remove(key, true);
        }
        /**
         * 清空所有缓存
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          var _this4 = this;

          this.notifyBuffer.forEach(
          /**
          * @param {?} _v
          * @param {?} k
          * @return {?}
          */
          function (_v, k) {
            return _this4.runNotify(k, 'remove');
          });
          this.memory.clear();
          this.meta.forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return _this4.store.remove(_this4.cog.prefix + key);
          });
        } // #endregion
        // #region notify

        /**
         * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "startExpireNotify",

        /**
         * @private
         * @return {?}
         */
        value: function startExpireNotify() {
          this.checkExpireNotify();
          this.runExpireNotify();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "runExpireNotify",
        value: function runExpireNotify() {
          var _this5 = this;

          this.freqTime = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this5.checkExpireNotify();

            _this5.runExpireNotify();
          }, this.freqTick);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkExpireNotify",
        value: function checkExpireNotify() {
          var _this6 = this;

          /** @type {?} */
          var removed = [];
          this.notifyBuffer.forEach(
          /**
          * @param {?} _v
          * @param {?} key
          * @return {?}
          */
          function (_v, key) {
            if (_this6.has(key) && _this6.getNone(key) === null) removed.push(key);
          });
          removed.forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this6.runNotify(key, 'expire');

            _this6._remove(key, false);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "abortExpireNotify",
        value: function abortExpireNotify() {
          clearTimeout(this.freqTime);
        }
        /**
         * @private
         * @param {?} key
         * @param {?} type
         * @return {?}
         */

      }, {
        key: "runNotify",
        value: function runNotify(key, type) {
          if (!this.notifyBuffer.has(key)) return;

          /** @type {?} */
          this.notifyBuffer.get(key).next({
            type: type,
            value: this.getNone(key)
          });
        }
        /**
         * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
         *
         * - 调用后除再次调用 `cancelNotify` 否则永远不过期
         * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "notify",
        value: function notify(key) {
          if (!this.notifyBuffer.has(key)) {
            /** @type {?} */
            var change$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.getNone(key));
            this.notifyBuffer.set(key, change$);
          }

          return (
            /** @type {?} */
            this.notifyBuffer.get(key).asObservable()
          );
        }
        /**
         * 取消 `key` 监听
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "cancelNotify",
        value: function cancelNotify(key) {
          if (!this.notifyBuffer.has(key)) return;

          /** @type {?} */
          this.notifyBuffer.get(key).unsubscribe();
          this.notifyBuffer.delete(key);
        }
        /**
         * `key` 是否已经监听
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "hasNotify",
        value: function hasNotify(key) {
          return this.notifyBuffer.has(key);
        }
        /**
         * 清空所有 `key` 的监听
         * @return {?}
         */

      }, {
        key: "clearNotify",
        value: function clearNotify() {
          this.notifyBuffer.forEach(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return v.unsubscribe();
          });
          this.notifyBuffer.clear();
        } // #endregion

        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.memory.clear();
          this.abortExpireNotify();
          this.clearNotify();
        }
      }, {
        key: "freq",
        set: function set(value) {
          this.freqTick = Math.max(20, value);
          this.abortExpireNotify();
          this.startExpireNotify();
        }
      }]);

      return CacheService;
    }();

    CacheService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    CacheService.ctorParameters = function () {
      return [{
        type: DelonCacheConfig
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DC_STORE_STORAGE_TOKEN]
        }]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }];
    };
    /** @nocollapse */


    CacheService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function CacheService_Factory() {
        return new CacheService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DelonCacheConfig), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DC_STORE_STORAGE_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      },
      token: CacheService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cache.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DelonCacheModule = function DelonCacheModule() {
      _classCallCheck(this, DelonCacheModule);
    };

    DelonCacheModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{}]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: cache.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=cache.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/acl/acl.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/acl/acl.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonAclAclComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>\n    ACL 访问控制\n    <small\n      >注意观察左边的菜单；ACLService提供一个完整的基于角色的访问控制的服务，若需要支持路由守卫，请配合ACLService与Route\n      Guard配合简便实现。</small\n    >\n  </h1>\n</div>\n<div nz-row [nzGutter]=\"8\">\n  <div nz-col [nzSpan]=\"24\">\n    <nz-card nzTitle=\"按钮粒度\">\n      ACL原始数据：{{ aclSrv.data | json }}\n      <button nz-button [acl]=\"'role-a'\">role-a</button>\n      <button nz-button [acl]=\"'role-b'\" class=\"ml-sm\">role-b</button>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"8\">\n  <div nz-col [nzSpan]=\"8\">\n    <nz-card nzTitle=\"全量\">\n      <button nz-button (click)=\"toggleFull()\">\n        <span>{{ full ? '离开' : '设置' }}权限</span>\n      </button>\n      <p class=\"pt-md\">全量类指系统管理员角色，无任何受限。</p>\n    </nz-card>\n  </div>\n  <div nz-col [nzSpan]=\"8\">\n    <nz-card nzTitle=\"角色[role-a]\">\n      <button nz-button (click)=\"toggleRoleA()\">\n        <span>{{ roleA.length > 0 ? '离开' : '设置' }}权限</span>\n      </button>\n    </nz-card>\n  </div>\n  <div nz-col [nzSpan]=\"8\">\n    <nz-card nzTitle=\"角色[role-b]\">\n      <button nz-button (click)=\"toggleRoleB()\">\n        <span>{{ roleB.length > 0 ? '离开' : '设置' }}权限</span>\n      </button>\n    </nz-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/cache/cache.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/cache/cache.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonCacheCacheComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>\n    Cache 缓存,\n    <a href=\"https://ng-alain.com/components/cache\" target=\"_blank\">Document</a>\n  </h1>\n</div>\n<nz-card nzTitle=\"Service\">\n  <button nz-button (click)=\"set()\">设置</button>\n  <button nz-button (click)=\"get()\" class=\"ml-sm\">获取</button>\n</nz-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/downfile/downfile.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/downfile/downfile.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonDownfileDownfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>Download a file</h1>\n</div>\n<nz-card nzTitle=\"DEMO\">\n  <button\n    nz-button\n    *ngFor=\"let i of fileTypes\"\n    class=\"mr-sm\"\n    down-file\n    [http-data]=\"data\"\n    http-url=\"assets/tmp/demo{{ i }}\"\n    file-name=\"demo中文\"\n  >\n    {{ i }}\n  </button>\n</nz-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/form/form.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/form/form.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<page-header [title]=\"'Page Name'\"></page-header>\n<nz-card>\n  <sf\n    mode=\"search\"\n    [schema]=\"searchSchema\"\n    [formData]=\"params\"\n    (formSubmit)=\"st.reset($event)\"\n    (formReset)=\"st.reset(params)\"\n  ></sf>\n  <st #st [data]=\"url\" [columns]=\"columns\" [req]=\"{ params: params }\"></st>\n</nz-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/guard/guard.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/guard/guard.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonGuardGuardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>\n    路由守卫\n  </h1>\n</div>\n<nz-button-group>\n  <button nz-button [routerLink]=\"['/delon/guard/leave']\">\n    <span>离开确认页</span>\n  </button>\n</nz-button-group>\n<nz-button-group class=\"ml-sm\">\n  <button nz-button (click)=\"setRole(true)\">\n    <span>设置管理员</span>\n  </button>\n  <button nz-button (click)=\"setRole('user1')\">\n    <span>设置员工1</span>\n  </button>\n  <button nz-button (click)=\"setRole('user2')\">\n    <span>设置员工2</span>\n  </button>\n</nz-button-group>\n<nz-button-group class=\"ml-sm\">\n  <button nz-button [routerLink]=\"['/delon/guard/auth']\">\n    <span>需要user1</span>\n  </button>\n  <button nz-button [routerLink]=\"['/delon/guard/admin']\">\n    <span>需要管理员</span>\n  </button>\n</nz-button-group>\n<p class=\"mb-lg\">当前ACL信息：{{ aclSrv.data | json }}</p>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/print/print.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/print/print.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonPrintPrintComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>\n    Lodop打印\n    <small\n      >更多体验请至\n      <a href=\"https://ng-alain.com/components/lodop\" target=\"_blank\">ng-alain.com</a>\n    </small>\n  </h1>\n</div>\n<nz-card>\n  <nz-alert *ngIf=\"error\" [nzType]=\"'warning'\" [nzMessage]=\"message\">\n    <ng-template #message>\n      请先下载\n      <a href=\"http://c-lodop.com/download.html\" target=\"_blank\">Lodop插件</a>。\n    </ng-template>\n  </nz-alert>\n  <form *ngIf=\"!error\" nz-form>\n    <nz-form-item nz-row>\n      <nz-form-label nz-col [nzSm]=\"6\">打印服务器</nz-form-label>\n      <nz-form-control nz-col [nzSm]=\"18\">\n        <nz-input-group>\n          <div nz-col [nzSpan]=\"16\">\n            <input nz-input nzPlaceHolder=\"https://localhost:8443/CLodopfuncs.js\" [(ngModel)]=\"cog.url\" name=\"url\" />\n          </div>\n          <div nz-col [nzSpan]=\"8\">\n            <button nz-button (click)=\"reload(null)\">重新加载打印机</button>\n          </div>\n        </nz-input-group>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item nz-row>\n      <nz-form-label nz-col [nzSm]=\"6\">打印机</nz-form-label>\n      <nz-form-control nz-col [nzSm]=\"18\">\n        <nz-select\n          style=\"width:90%;\"\n          nzPlaceHolder=\"请选择打印机\"\n          nzShowSearch\n          nzAllowClear\n          [(ngModel)]=\"cog.printer\"\n          name=\"printer\"\n          (ngModelChange)=\"changePinter($event)\"\n        >\n          <nz-option *ngFor=\"let name of pinters\" [nzLabel]=\"name\" [nzValue]=\"name\"> </nz-option>\n        </nz-select>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item nz-row>\n      <nz-form-label nz-col [nzSm]=\"6\">纸张类型</nz-form-label>\n      <nz-form-control nz-col [nzSm]=\"18\">\n        <nz-select\n          style=\"width:90%;\"\n          nzPlaceHolder=\"请选择纸张类型\"\n          nzShowSearch\n          nzAllowClear\n          [(ngModel)]=\"cog.paper\"\n          name=\"paper\"\n        >\n          <nz-option *ngFor=\"let name of papers\" [nzLabel]=\"name\" [nzValue]=\"name\"> </nz-option>\n        </nz-select>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item nz-row>\n      <nz-form-label nz-col [nzSm]=\"6\">打印内容</nz-form-label>\n      <nz-form-control nz-col [nzSm]=\"18\">\n        <textarea nz-input [(ngModel)]=\"cog.html\" name=\"html\" nzAutosize></textarea>\n        <div nz-form-extra>仅限HTML，更多类型支持请参考官网</div>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item nz-row>\n      <nz-form-control nz-col [nzSm]=\"18\" [nzOffset]=\"6\">\n        <button nz-button (click)=\"print(true)\" [nzLoading]=\"printing\">打印预览</button>\n        <button nz-button (click)=\"print()\" [nzLoading]=\"printing\">直接打印</button>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</nz-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/qr/qr.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/qr/qr.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonQrQrComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>\n    二维码\n    <a href=\"//ng-alain.com/components/qr\" target=\"_blank\">Document</a>\n  </h1>\n</div>\n<nz-card>\n  <nz-row [nzGutter]=\"24\">\n    <nz-col [nzSpan]=\"8\" class=\"text-center\">\n      <qr\n        [value]=\"value\"\n        [background]=\"background\"\n        [backgroundAlpha]=\"backgroundAlpha\"\n        [foreground]=\"foreground\"\n        [foregroundAlpha]=\"foregroundAlpha\"\n        [level]=\"level\"\n        [mime]=\"mime\"\n        [padding]=\"padding\"\n        [size]=\"size\"\n        style=\"border:1px solid #999\"\n      ></qr>\n    </nz-col>\n    <nz-col [nzSpan]=\"16\">\n      <form nz-form>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">背景</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-input-group>\n              <div nz-col nzSpan=\"12\">\n                <input nz-input type=\"color\" [(ngModel)]=\"background\" [ngModelOptions]=\"{ standalone: true }\" />\n              </div>\n              <div nz-col nzSpan=\"12\">\n                <nz-input-number\n                  [(ngModel)]=\"backgroundAlpha\"\n                  [nzMin]=\"0\"\n                  [nzMax]=\"1\"\n                  [nzStep]=\"0.1\"\n                  [ngModelOptions]=\"{ standalone: true }\"\n                ></nz-input-number>\n              </div>\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">前景</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-input-group>\n              <div nz-col nzSpan=\"12\">\n                <input nz-input type=\"color\" [(ngModel)]=\"foreground\" [ngModelOptions]=\"{ standalone: true }\" />\n              </div>\n              <div nz-col nzSpan=\"12\">\n                <nz-input-number\n                  [(ngModel)]=\"foregroundAlpha\"\n                  [nzMin]=\"0\"\n                  [nzMax]=\"1\"\n                  [nzStep]=\"0.1\"\n                  [ngModelOptions]=\"{ standalone: true }\"\n                ></nz-input-number>\n              </div>\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">误差</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-select [(ngModel)]=\"level\" [ngModelOptions]=\"{ standalone: true }\">\n              <nz-option nzValue=\"L\" nzLabel=\"L\"></nz-option>\n              <nz-option nzValue=\"M\" nzLabel=\"M\"></nz-option>\n              <nz-option nzValue=\"Q\" nzLabel=\"Q\"></nz-option>\n              <nz-option nzValue=\"H\" nzLabel=\"H\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">Mime</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-select [(ngModel)]=\"mime\" [ngModelOptions]=\"{ standalone: true }\">\n              <nz-option nzValue=\"image/png\" nzLabel=\"image/png\"></nz-option>\n              <nz-option nzValue=\"image/jpeg\" nzLabel=\"image/jpeg\"></nz-option>\n              <nz-option nzValue=\"image/gif\" nzLabel=\"image/gif\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">内边距</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-input-number\n              [(ngModel)]=\"padding\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              [nzMin]=\"0\"\n              [nzMax]=\"100\"\n            ></nz-input-number\n            >px\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">大小</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-input-number\n              [(ngModel)]=\"size\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              [nzMin]=\"100\"\n              [nzMax]=\"1000\"\n              [nzStep]=\"padding\"\n            ></nz-input-number\n            >px\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n    </nz-col>\n  </nz-row>\n</nz-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/st/st.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/st/st.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonStStComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>\n    Fullscreen & ST\n    <small\n      >使用 <a href=\"//ng-alain.com/components/table\" target=\"_blank\">st</a>、\n      <a href=\"//ng-alain.com/components/full-content\" target=\"_blank\">full-content</a> 组合，由于 nz-table\n      固定表头暂不支持自适应，因此表格的展示的效果在响应式里面效果并不是特别好。</small\n    >\n  </h1>\n</div>\n<full-content (fullscreenChange)=\"fullChange($event)\">\n  <nz-card>\n    <div nz-row class=\"mb-md\">\n      <div nz-col nzSpan=\"12\">\n        <form nz-form nzLayout=\"inline\" se-container>\n          <se label=\"User ID\" labelWidth=\"0\">\n            <input nz-input [(ngModel)]=\"args.userid\" name=\"userid\" id=\"userid\" />\n          </se>\n          <se>\n            <button nz-button [nzType]=\"'primary'\" (click)=\"st.load()\" [nzLoading]=\"http.loading\">Search</button>\n            <button nz-button (click)=\"st.load({ _allow_anonymous: true })\" [disabled]=\"http.loading\">Clear</button>\n          </se>\n        </form>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <div class=\"text-right\">\n          <button nz-button nz-dropdown [nzDropdownMenu]=\"exportMenu\">\n            <span>Export</span>\n            <i nz-icon nzType=\"down\"></i>\n          </button>\n          <nz-dropdown-menu #exportMenu=\"nzDropdownMenu\">\n            <ul nz-menu>\n              <li nz-menu-item>Excel</li>\n              <li nz-menu-item>JSON</li>\n              <li nz-menu-item>PNG</li>\n            </ul>\n          </nz-dropdown-menu>\n          <button nz-button [nzType]=\"'default'\" full-toggle class=\"ml-sm\">Full</button>\n        </div>\n      </div>\n    </div>\n    <st\n      #st\n      [data]=\"url\"\n      [req]=\"{ params: args }\"\n      [res]=\"{ reName: { list: 'results' } }\"\n      [total]=\"total\"\n      [ps]=\"ps\"\n      [columns]=\"columns\"\n      [scroll]=\"scroll\"\n    >\n      <ng-template st-row=\"events\" let-item let-index=\"index\">\n        <g2-mini-bar\n          height=\"15\"\n          theme=\"mini\"\n          color=\"#999\"\n          borderWidth=\"3\"\n          [padding]=\"[0, 0, 0, 0]\"\n          [data]=\"events\"\n          tooltipType=\"mini\"\n        ></g2-mini-bar>\n      </ng-template>\n    </st>\n  </nz-card>\n</full-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/util/util.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/util/util.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonUtilUtilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>\n    工具集\n    <small>@delon/util 日常用法。</small>\n  </h1>\n</div>\n<nz-row [nzGutter]=\"16\">\n  <nz-col [nzSpan]=\"12\">\n    <nz-card nzTitle=\"字符串类\">\n      <nz-card nzType=\"inner\" nzTitle=\"format\">\n        <form nz-form>\n          <nz-form-item>\n            <nz-form-label [nzSm]=\"8\">String</nz-form-label>\n            <nz-form-control [nzSm]=\"16\">\n              <input nz-input [(ngModel)]=\"format_str\" [ngModelOptions]=\"{ standalone: true }\" />\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-label [nzSm]=\"8\">Object</nz-form-label>\n            <nz-form-control [nzSm]=\"16\">\n              <input nz-input [(ngModel)]=\"format_obj\" [ngModelOptions]=\"{ standalone: true }\" />\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-control [nzSpan]=\"16\" [nzOffset]=\"8\">\n              <button (click)=\"onFormat()\" nz-button>Run</button>\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-label [nzSm]=\"8\">Result</nz-form-label>\n            <nz-form-control [nzSm]=\"16\">\n              {{ format_res }}\n            </nz-form-control>\n          </nz-form-item>\n        </form>\n      </nz-card>\n      <nz-card nzType=\"inner\" nzTitle=\"yuan\">\n        <nz-row [nzGutter]=\"16\">\n          <nz-col [nzSpan]=\"12\">\n            <input type=\"number\" nz-input [(ngModel)]=\"yuan_str\" (ngModelChange)=\"onYuan($event)\" />\n          </nz-col>\n          <nz-col [nzSpan]=\"12\">\n            <div [innerHTML]=\"yuan_res\"></div>\n          </nz-col>\n        </nz-row>\n      </nz-card>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzSpan]=\"12\">\n    <nz-card nzTitle=\"其它类\">\n      <button nz-button (click)=\"onCopy()\">Copy</button>\n    </nz-card>\n  </nz-col>\n</nz-row>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/xlsx/xlsx.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/xlsx/xlsx.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonXlsxXlsxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>\n    Import & Export excel file,\n    <a href=\"//ng-alain.com/components/xlsx\" target=\"_blank\">Document</a>\n  </h1>\n</div>\n<nz-card nzTitle=\"Import\">\n  <button nz-button (click)=\"url()\">Via Url</button>\n  <input type=\"file\" (change)=\"change($event)\" multiple=\"false\" class=\"ml-sm\" />\n  <p class=\"mt-sm\">result: {{ data | json }}</p>\n</nz-card>\n<nz-card nzTitle=\"Export\">\n  <button nz-button (click)=\"download()\">Export</button>\n  <st [data]=\"users\" [ps]=\"3\" [columns]=\"columns\" class=\"mt-sm\"></st>\n</nz-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/zip/zip.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/zip/zip.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesDelonZipZipComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>\n    Read & Write zip file,\n    <a href=\"//ng-alain.com/components/zip\" target=\"_blank\">Document</a>\n  </h1>\n</div>\n<nz-card nzTitle=\"解压\">\n  <button nz-button (click)=\"url()\">Via Url</button>\n  <input type=\"file\" (change)=\"change($event)\" multiple=\"false\" class=\"ml-sm\" />\n  <ol>\n    <li *ngFor=\"let i of list\">{{ i | json }}</li>\n  </ol>\n</nz-card>\n<nz-card nzTitle=\"压缩\" *ngIf=\"instance\">\n  <button nz-button (click)=\"data.push({})\" [nzType]=\"'primary'\">new</button>\n  <button nz-button (click)=\"download()\" class=\"ml-sm\">download</button>\n  <nz-table [nzData]=\"data\" [nzFrontPagination]=\"false\" [nzShowPagination]=\"false\" class=\"mt-sm\">\n    <thead>\n      <tr>\n        <th>\n          <span>path</span>\n        </th>\n        <th>\n          <span>url</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let i of data; let index = index\">\n        <td>\n          <input nz-input [(ngModel)]=\"i.path\" name=\"path{{ index }}\" />\n        </td>\n        <td>\n          <input nz-input [(ngModel)]=\"i.url\" name=\"url{{ index }}\" />\n        </td>\n      </tr>\n    </tbody>\n  </nz-table>\n</nz-card>\n";
    /***/
  },

  /***/
  "./src/app/routes/delon/acl/acl.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/routes/delon/acl/acl.component.ts ***!
    \***************************************************/

  /*! exports provided: ACLComponent */

  /***/
  function srcAppRoutesDelonAclAclComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACLComponent", function () {
      return ACLComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _delon_acl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @delon/acl */
    "./node_modules/@delon/acl/fesm2015/acl.js");
    /* harmony import */


    var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @delon/theme */
    "./node_modules/@delon/theme/fesm2015/theme.js");

    var ACLComponent =
    /*#__PURE__*/
    function () {
      function ACLComponent(aclSrv, menuSrv) {
        _classCallCheck(this, ACLComponent);

        this.aclSrv = aclSrv;
        this.menuSrv = menuSrv;
        this.full = true;
        this.roleA = '';
        this.roleB = '';
      }

      _createClass(ACLComponent, [{
        key: "reMenu",
        value: function reMenu() {
          this.menuSrv.resume();
        }
      }, {
        key: "toggleFull",
        value: function toggleFull() {
          this.full = !this.full;
          this.aclSrv.setFull(this.full);
          this.reMenu();
        }
      }, {
        key: "toggleRoleA",
        value: function toggleRoleA() {
          this.full = false;
          this.roleA = this.roleA === 'role-a' ? '' : 'role-a';
          this.aclSrv.setFull(this.full);
          this.aclSrv.setRole([this.roleA]);
          this.reMenu();
        }
      }, {
        key: "toggleRoleB",
        value: function toggleRoleB() {
          this.full = false;
          this.roleB = this.roleB === 'role-b' ? '' : 'role-b';
          this.aclSrv.setFull(this.full);
          this.aclSrv.setRole([this.roleB]);
          this.reMenu();
        }
      }]);

      return ACLComponent;
    }();

    ACLComponent.ctorParameters = function () {
      return [{
        type: _delon_acl__WEBPACK_IMPORTED_MODULE_2__["ACLService"]
      }, {
        type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
      }];
    };

    ACLComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-acl',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./acl.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/acl/acl.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_acl__WEBPACK_IMPORTED_MODULE_2__["ACLService"], _delon_theme__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])], ACLComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/cache/cache.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/routes/delon/cache/cache.component.ts ***!
    \*******************************************************/

  /*! exports provided: CacheComponent */

  /***/
  function srcAppRoutesDelonCacheCacheComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CacheComponent", function () {
      return CacheComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _delon_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @delon/cache */
    "./node_modules/@delon/cache/fesm2015/cache.js");

    var CacheComponent =
    /*#__PURE__*/
    function () {
      function CacheComponent(cache, msg) {
        _classCallCheck(this, CacheComponent);

        this.cache = cache;
        this.msg = msg;
        this.KEY = 'user';
      }

      _createClass(CacheComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "set",
        value: function set() {
          this.cache.set(this.KEY, +new Date());
        }
      }, {
        key: "get",
        value: function get() {
          this.msg.success(this.cache.getNone(this.KEY));
        }
      }]);

      return CacheComponent;
    }();

    CacheComponent.ctorParameters = function () {
      return [{
        type: _delon_cache__WEBPACK_IMPORTED_MODULE_3__["CacheService"]
      }, {
        type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
      }];
    };

    CacheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cache',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cache.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/cache/cache.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_cache__WEBPACK_IMPORTED_MODULE_3__["CacheService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])], CacheComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/delon-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/routes/delon/delon-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: DelonRoutingModule */

  /***/
  function srcAppRoutesDelonDelonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DelonRoutingModule", function () {
      return DelonRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _delon_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @delon/acl */
    "./node_modules/@delon/acl/fesm2015/acl.js");
    /* harmony import */


    var _st_st_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./st/st.component */
    "./src/app/routes/delon/st/st.component.ts");
    /* harmony import */


    var _util_util_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./util/util.component */
    "./src/app/routes/delon/util/util.component.ts");
    /* harmony import */


    var _print_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./print/print.component */
    "./src/app/routes/delon/print/print.component.ts");
    /* harmony import */


    var _acl_acl_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./acl/acl.component */
    "./src/app/routes/delon/acl/acl.component.ts");
    /* harmony import */


    var _guard_guard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./guard/guard.component */
    "./src/app/routes/delon/guard/guard.component.ts");
    /* harmony import */


    var _guard_leave_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./guard/leave.component */
    "./src/app/routes/delon/guard/leave.component.ts");
    /* harmony import */


    var _guard_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guard/auth.component */
    "./src/app/routes/delon/guard/auth.component.ts");
    /* harmony import */


    var _guard_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./guard/admin.component */
    "./src/app/routes/delon/guard/admin.component.ts");
    /* harmony import */


    var _guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./guard/can-leave.provide */
    "./src/app/routes/delon/guard/can-leave.provide.ts");
    /* harmony import */


    var _cache_cache_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./cache/cache.component */
    "./src/app/routes/delon/cache/cache.component.ts");
    /* harmony import */


    var _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./downfile/downfile.component */
    "./src/app/routes/delon/downfile/downfile.component.ts");
    /* harmony import */


    var _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./xlsx/xlsx.component */
    "./src/app/routes/delon/xlsx/xlsx.component.ts");
    /* harmony import */


    var _zip_zip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./zip/zip.component */
    "./src/app/routes/delon/zip/zip.component.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/routes/delon/form/form.component.ts");
    /* harmony import */


    var _qr_qr_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./qr/qr.component */
    "./src/app/routes/delon/qr/qr.component.ts");

    var routes = [{
      path: 'st',
      component: _st_st_component__WEBPACK_IMPORTED_MODULE_4__["STDemoComponent"]
    }, {
      path: 'util',
      component: _util_util_component__WEBPACK_IMPORTED_MODULE_5__["UtilComponent"]
    }, {
      path: 'print',
      component: _print_print_component__WEBPACK_IMPORTED_MODULE_6__["PrintComponent"]
    }, {
      path: 'acl',
      component: _acl_acl_component__WEBPACK_IMPORTED_MODULE_7__["ACLComponent"]
    }, {
      path: 'guard',
      component: _guard_guard_component__WEBPACK_IMPORTED_MODULE_8__["GuardComponent"],
      children: [{
        path: 'leave',
        component: _guard_leave_component__WEBPACK_IMPORTED_MODULE_9__["GuardLeaveComponent"],
        canDeactivate: [_guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_12__["CanLeaveProvide"]]
      }, {
        path: 'auth',
        component: _guard_auth_component__WEBPACK_IMPORTED_MODULE_10__["GuardAuthComponent"],
        canActivate: [_delon_acl__WEBPACK_IMPORTED_MODULE_3__["ACLGuard"]],
        data: {
          guard: 'user1'
        }
      }, {
        path: 'admin',
        component: _guard_admin_component__WEBPACK_IMPORTED_MODULE_11__["GuardAdminComponent"],
        canActivate: [_delon_acl__WEBPACK_IMPORTED_MODULE_3__["ACLGuard"]],
        data: {
          guard: 'admin'
        }
      }]
    }, {
      path: 'cache',
      component: _cache_cache_component__WEBPACK_IMPORTED_MODULE_13__["CacheComponent"]
    }, {
      path: 'qr',
      component: _qr_qr_component__WEBPACK_IMPORTED_MODULE_18__["QRComponent"]
    }, {
      path: 'downfile',
      component: _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_14__["DownFileComponent"]
    }, {
      path: 'xlsx',
      component: _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_15__["XlsxComponent"]
    }, {
      path: 'zip',
      component: _zip_zip_component__WEBPACK_IMPORTED_MODULE_16__["ZipComponent"]
    }, {
      path: 'form',
      component: _form_form_component__WEBPACK_IMPORTED_MODULE_17__["DelonFormComponent"]
    }];

    var DelonRoutingModule = function DelonRoutingModule() {
      _classCallCheck(this, DelonRoutingModule);
    };

    DelonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DelonRoutingModule);
    /***/
  },

  /***/
  "./src/app/routes/delon/delon.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/routes/delon/delon.module.ts ***!
    \**********************************************/

  /*! exports provided: DelonModule */

  /***/
  function srcAppRoutesDelonDelonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DelonModule", function () {
      return DelonModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _delon_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./delon-routing.module */
    "./src/app/routes/delon/delon-routing.module.ts");
    /* harmony import */


    var _st_st_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./st/st.component */
    "./src/app/routes/delon/st/st.component.ts");
    /* harmony import */


    var _util_util_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./util/util.component */
    "./src/app/routes/delon/util/util.component.ts");
    /* harmony import */


    var _print_print_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./print/print.component */
    "./src/app/routes/delon/print/print.component.ts");
    /* harmony import */


    var _acl_acl_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./acl/acl.component */
    "./src/app/routes/delon/acl/acl.component.ts");
    /* harmony import */


    var _guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./guard/can-leave.provide */
    "./src/app/routes/delon/guard/can-leave.provide.ts");
    /* harmony import */


    var _guard_guard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guard/guard.component */
    "./src/app/routes/delon/guard/guard.component.ts");
    /* harmony import */


    var _guard_leave_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./guard/leave.component */
    "./src/app/routes/delon/guard/leave.component.ts");
    /* harmony import */


    var _guard_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./guard/admin.component */
    "./src/app/routes/delon/guard/admin.component.ts");
    /* harmony import */


    var _guard_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./guard/auth.component */
    "./src/app/routes/delon/guard/auth.component.ts");
    /* harmony import */


    var _cache_cache_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./cache/cache.component */
    "./src/app/routes/delon/cache/cache.component.ts");
    /* harmony import */


    var _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./downfile/downfile.component */
    "./src/app/routes/delon/downfile/downfile.component.ts");
    /* harmony import */


    var _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./xlsx/xlsx.component */
    "./src/app/routes/delon/xlsx/xlsx.component.ts");
    /* harmony import */


    var _zip_zip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./zip/zip.component */
    "./src/app/routes/delon/zip/zip.component.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/routes/delon/form/form.component.ts");
    /* harmony import */


    var _qr_qr_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./qr/qr.component */
    "./src/app/routes/delon/qr/qr.component.ts");

    var COMPONENTS = [_st_st_component__WEBPACK_IMPORTED_MODULE_5__["STDemoComponent"], _util_util_component__WEBPACK_IMPORTED_MODULE_6__["UtilComponent"], _print_print_component__WEBPACK_IMPORTED_MODULE_7__["PrintComponent"], _acl_acl_component__WEBPACK_IMPORTED_MODULE_8__["ACLComponent"], _guard_guard_component__WEBPACK_IMPORTED_MODULE_10__["GuardComponent"], _guard_leave_component__WEBPACK_IMPORTED_MODULE_11__["GuardLeaveComponent"], _guard_admin_component__WEBPACK_IMPORTED_MODULE_12__["GuardAdminComponent"], _guard_auth_component__WEBPACK_IMPORTED_MODULE_13__["GuardAuthComponent"], _cache_cache_component__WEBPACK_IMPORTED_MODULE_14__["CacheComponent"], _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_15__["DownFileComponent"], _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_16__["XlsxComponent"], _zip_zip_component__WEBPACK_IMPORTED_MODULE_17__["ZipComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_18__["DelonFormComponent"], _qr_qr_component__WEBPACK_IMPORTED_MODULE_19__["QRComponent"]];
    var COMPONENTS_NOROUNT = [];

    var DelonModule = function DelonModule() {
      _classCallCheck(this, DelonModule);
    };

    DelonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _delon_routing_module__WEBPACK_IMPORTED_MODULE_4__["DelonRoutingModule"]],
      providers: [_guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_9__["CanLeaveProvide"]],
      declarations: [].concat(COMPONENTS, COMPONENTS_NOROUNT),
      entryComponents: COMPONENTS_NOROUNT
    })], DelonModule);
    /***/
  },

  /***/
  "./src/app/routes/delon/downfile/downfile.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/routes/delon/downfile/downfile.component.ts ***!
    \*************************************************************/

  /*! exports provided: DownFileComponent */

  /***/
  function srcAppRoutesDelonDownfileDownfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownFileComponent", function () {
      return DownFileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DownFileComponent = function DownFileComponent() {
      _classCallCheck(this, DownFileComponent);

      this.fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];
      this.data = {
        otherdata: 1,
        time: new Date()
      };
    };

    DownFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-down-file',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./downfile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/downfile/downfile.component.html")).default
    })], DownFileComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/form/form.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/routes/delon/form/form.component.ts ***!
    \*****************************************************/

  /*! exports provided: DelonFormComponent */

  /***/
  function srcAppRoutesDelonFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DelonFormComponent", function () {
      return DelonFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @delon/theme */
    "./node_modules/@delon/theme/fesm2015/theme.js");
    /* harmony import */


    var _delon_abc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @delon/abc */
    "./node_modules/@delon/abc/fesm2015/abc.js");

    var DelonFormComponent =
    /*#__PURE__*/
    function () {
      function DelonFormComponent(http) {
        _classCallCheck(this, DelonFormComponent);

        this.http = http;
        this.params = {};
        this.url = "/user";
        this.searchSchema = {
          properties: {
            no: {
              type: 'string',
              title: '编号'
            }
          }
        };
        this.columns = [{
          title: '编号',
          index: 'no'
        }, {
          title: '调用次数',
          type: 'number',
          index: 'callNo'
        }, {
          title: '头像',
          type: 'img',
          width: '50px',
          index: 'avatar'
        }, {
          title: '时间',
          type: 'date',
          index: 'updatedAt'
        }];
      }

      _createClass(DelonFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DelonFormComponent;
    }();

    DelonFormComponent.ctorParameters = function () {
      return [{
        type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('st', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _delon_abc__WEBPACK_IMPORTED_MODULE_3__["STComponent"])], DelonFormComponent.prototype, "st", void 0);
    DelonFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delon-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/form/form.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"]])], DelonFormComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/guard/admin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/routes/delon/guard/admin.component.ts ***!
    \*******************************************************/

  /*! exports provided: GuardAdminComponent */

  /***/
  function srcAppRoutesDelonGuardAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardAdminComponent", function () {
      return GuardAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GuardAdminComponent = function GuardAdminComponent() {
      _classCallCheck(this, GuardAdminComponent);
    };

    GuardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-guard-admin',
      template: "\n    <p>\u8FD9\u662F\u4E00\u4E2Aadmin\u9875\u9762</p>\n  "
    })], GuardAdminComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/guard/auth.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/routes/delon/guard/auth.component.ts ***!
    \******************************************************/

  /*! exports provided: GuardAuthComponent */

  /***/
  function srcAppRoutesDelonGuardAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardAuthComponent", function () {
      return GuardAuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GuardAuthComponent = function GuardAuthComponent() {
      _classCallCheck(this, GuardAuthComponent);
    };

    GuardAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-guard-auth',
      template: "\n    <p>\u8FD9\u662F\u4E00\u4E2Auser1\u9875\u9762</p>\n  "
    })], GuardAuthComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/guard/can-leave.provide.ts":
  /*!*********************************************************!*\
    !*** ./src/app/routes/delon/guard/can-leave.provide.ts ***!
    \*********************************************************/

  /*! exports provided: CanLeaveProvide */

  /***/
  function srcAppRoutesDelonGuardCanLeaveProvideTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanLeaveProvide", function () {
      return CanLeaveProvide;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");

    var CanLeaveProvide =
    /*#__PURE__*/
    function () {
      function CanLeaveProvide(confirmSrv) {
        _classCallCheck(this, CanLeaveProvide);

        this.confirmSrv = confirmSrv;
      }

      _createClass(CanLeaveProvide, [{
        key: "canDeactivate",
        value: function canDeactivate(component, currentRoute, currentState, nextState) {
          var _this7 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this7.confirmSrv.confirm({
              nzTitle: '确认要离开吗？',
              nzContent: '你已经填写了部分表单离开会放弃已经填写的内容。',
              nzOkText: '离开',
              nzCancelText: '取消',
              nzOnOk: function nzOnOk() {
                observer.next(true);
                observer.complete();
              },
              nzOnCancel: function nzOnCancel() {
                observer.next(false);
                observer.complete();
              }
            });
          });
        }
      }]);

      return CanLeaveProvide;
    }();

    CanLeaveProvide.ctorParameters = function () {
      return [{
        type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"]
      }];
    };

    CanLeaveProvide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"]])], CanLeaveProvide);
    /***/
  },

  /***/
  "./src/app/routes/delon/guard/guard.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/routes/delon/guard/guard.component.ts ***!
    \*******************************************************/

  /*! exports provided: GuardComponent */

  /***/
  function srcAppRoutesDelonGuardGuardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardComponent", function () {
      return GuardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @delon/theme */
    "./node_modules/@delon/theme/fesm2015/theme.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _delon_acl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @delon/acl */
    "./node_modules/@delon/acl/fesm2015/acl.js");

    var GuardComponent =
    /*#__PURE__*/
    function () {
      function GuardComponent(aclSrv, menuSrv, router) {
        _classCallCheck(this, GuardComponent);

        this.aclSrv = aclSrv;
        this.menuSrv = menuSrv;
        this.router = router;
      }

      _createClass(GuardComponent, [{
        key: "setRole",
        value: function setRole(value) {
          this.aclSrv.setFull(typeof value === 'boolean' ? value : false);
          this.aclSrv.set({
            role: [value]
          });
          this.menuSrv.resume();
          this.router.navigate(['/delon/guard']);
        }
      }]);

      return GuardComponent;
    }();

    GuardComponent.ctorParameters = function () {
      return [{
        type: _delon_acl__WEBPACK_IMPORTED_MODULE_4__["ACLService"]
      }, {
        type: _delon_theme__WEBPACK_IMPORTED_MODULE_1__["MenuService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    GuardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-guard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./guard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/guard/guard.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_acl__WEBPACK_IMPORTED_MODULE_4__["ACLService"], _delon_theme__WEBPACK_IMPORTED_MODULE_1__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], GuardComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/guard/leave.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/routes/delon/guard/leave.component.ts ***!
    \*******************************************************/

  /*! exports provided: GuardLeaveComponent */

  /***/
  function srcAppRoutesDelonGuardLeaveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardLeaveComponent", function () {
      return GuardLeaveComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GuardLeaveComponent = function GuardLeaveComponent() {
      _classCallCheck(this, GuardLeaveComponent);
    };

    GuardLeaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-guard-leave',
      template: "\n    <p>\u79BB\u5F00\u65F6\u9700\u8981\u786E\u8BA4</p>\n    <button nz-button [nzType]=\"'primary'\" [routerLink]=\"['/logics/guard']\">\n      <span>\u6211\u8981\u79BB\u5F00</span>\n    </button>\n  "
    })], GuardLeaveComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/print/print.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/routes/delon/print/print.component.ts ***!
    \*******************************************************/

  /*! exports provided: PrintComponent */

  /***/
  function srcAppRoutesDelonPrintPrintComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintComponent", function () {
      return PrintComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _delon_abc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @delon/abc */
    "./node_modules/@delon/abc/fesm2015/abc.js");

    var PrintComponent =
    /*#__PURE__*/
    function () {
      function PrintComponent(lodopSrv, msg, notify) {
        var _this8 = this;

        _classCallCheck(this, PrintComponent);

        this.lodopSrv = lodopSrv;
        this.msg = msg;
        this.notify = notify;
        this.cog = {
          url: 'https://localhost:8443/CLodopfuncs.js',
          printer: '',
          paper: '',
          html: "\n      <h1>Title</h1>\n      <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>\n      <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>\n      <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>\n      <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>\n      <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>\n    "
        };
        this.error = false;
        this.lodop = null;
        this.pinters = [];
        this.papers = [];
        this.printing = false;
        this.lodopSrv.lodop.subscribe(function (_ref) {
          var lodop = _ref.lodop,
              ok = _ref.ok;

          if (!ok) {
            _this8.error = true;
            return;
          }

          _this8.error = false;

          _this8.msg.success("\u6253\u5370\u673A\u52A0\u8F7D\u6210\u529F");

          _this8.lodop = lodop;
          _this8.pinters = _this8.lodopSrv.printer;
        });
      }

      _createClass(PrintComponent, [{
        key: "reload",
        value: function reload() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            url: 'https://localhost:8443/CLodopfuncs.js'
          };
          this.pinters = [];
          this.papers = [];
          this.cog.printer = '';
          this.cog.paper = '';
          this.lodopSrv.cog = Object.assign({}, this.cog, options);
          this.error = false;
          if (options === null) this.lodopSrv.reset();
        }
      }, {
        key: "changePinter",
        value: function changePinter(name) {
          this.papers = this.lodop.GET_PAGESIZES_LIST(name, '\n').split('\n');
        }
      }, {
        key: "print",
        value: function print() {
          var isPrivew = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var LODOP = this.lodop;
          LODOP.PRINT_INITA(10, 20, 810, 610, '测试C-Lodop远程打印四步骤');
          LODOP.SET_PRINTER_INDEXA(this.cog.printer);
          LODOP.SET_PRINT_PAGESIZE(0, 0, 0, this.cog.paper);
          LODOP.ADD_PRINT_TEXT(1, 1, 300, 200, '下面输出的是本页源代码及其展现效果：');
          LODOP.ADD_PRINT_TEXT(20, 10, '90%', '95%', this.cog.html);
          LODOP.SET_PRINT_STYLEA(0, 'ItemType', 4);
          LODOP.NewPageA();
          LODOP.ADD_PRINT_HTM(20, 10, '90%', '95%', this.cog.html);
          if (isPrivew) LODOP.PREVIEW();else LODOP.PRINT();
        }
      }]);

      return PrintComponent;
    }();

    PrintComponent.ctorParameters = function () {
      return [{
        type: _delon_abc__WEBPACK_IMPORTED_MODULE_3__["LodopService"]
      }, {
        type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
      }, {
        type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]
      }];
    };

    PrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-print',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./print.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/print/print.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_abc__WEBPACK_IMPORTED_MODULE_3__["LodopService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]])], PrintComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/qr/qr.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/routes/delon/qr/qr.component.ts ***!
    \*************************************************/

  /*! exports provided: QRComponent */

  /***/
  function srcAppRoutesDelonQrQrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QRComponent", function () {
      return QRComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QRComponent = function QRComponent() {
      _classCallCheck(this, QRComponent);

      this.value = 'https://ng-alain.com/';
      this.background = 'white';
      this.backgroundAlpha = 1.0;
      this.foreground = 'black';
      this.foregroundAlpha = 1.0;
      this.level = 'L';
      this.mime = 'image/png';
      this.padding = 10;
      this.size = 220;
    };

    QRComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qr',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./qr.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/qr/qr.component.html")).default
    })], QRComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/st/st.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/routes/delon/st/st.component.ts ***!
    \*************************************************/

  /*! exports provided: STDemoComponent */

  /***/
  function srcAppRoutesDelonStStComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STDemoComponent", function () {
      return STDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @delon/theme */
    "./node_modules/@delon/theme/fesm2015/theme.js");

    var STDemoComponent =
    /*#__PURE__*/
    function () {
      function STDemoComponent(http, message) {
        var _this9 = this;

        _classCallCheck(this, STDemoComponent);

        this.http = http;
        this.message = message;
        this.ps = 20;
        this.total = 200; // mock total

        this.args = {
          _allow_anonymous: true
        };
        this.url = "https://api.randomuser.me/?results=20";
        this.events = [];
        this.scroll = {
          y: '230px'
        };
        this.columns = [{
          title: 'id',
          index: 'id.value',
          type: 'checkbox'
        }, {
          title: 'Avatar',
          index: 'picture.thumbnail',
          type: 'img',
          width: 80
        }, {
          title: 'Name',
          index: 'name.first',
          width: 150,
          format: function format(item) {
            return "".concat(item.name.first, " ").concat(item.name.last);
          },
          type: 'link',
          click: function click(item) {
            return _this9.message.info("".concat(item.name.first));
          }
        }, {
          title: 'Email',
          index: 'email'
        }, {
          title: 'Gender',
          index: 'gender',
          type: 'yn',
          yn: {
            truth: 'female',
            yes: '男',
            no: '女',
            mode: 'text'
          },
          width: 120
        }, {
          title: 'Events',
          render: 'events',
          width: 90
        }, {
          title: 'Registered',
          index: 'registered.date',
          type: 'date',
          width: 170
        }, {
          title: 'Actions',
          width: 120,
          buttons: [{
            text: 'Edit',
            click: function click(item) {
              return _this9.message.info("edit [".concat(item.id.value, "]"));
            },
            if: function _if(item) {
              return item.gender === 'female';
            }
          }, {
            text: 'Delete',
            type: 'del',
            click: function click(item) {
              return _this9.message.info("deleted [".concat(item.id.value, "]"));
            }
          }]
        }];
      }

      _createClass(STDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.http.get('/chart/visit').subscribe(function (res) {
            return _this10.events = res.slice(0, 8);
          });
        }
      }, {
        key: "fullChange",
        value: function fullChange(val) {
          this.scroll = val ? {
            y: '350px'
          } : {
            y: '230px'
          };
        }
      }]);

      return STDemoComponent;
    }();

    STDemoComponent.ctorParameters = function () {
      return [{
        type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"]
      }, {
        type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
      }];
    };

    STDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-st',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./st.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/st/st.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])], STDemoComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/util/util.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/routes/delon/util/util.component.ts ***!
    \*****************************************************/

  /*! exports provided: UtilComponent */

  /***/
  function srcAppRoutesDelonUtilUtilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilComponent", function () {
      return UtilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @delon/util */
    "./node_modules/@delon/util/fesm2015/util.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared */
    "./src/app/shared/index.ts");

    var UtilComponent =
    /*#__PURE__*/
    function () {
      function UtilComponent(messageSrv) {
        _classCallCheck(this, UtilComponent);

        this.messageSrv = messageSrv; // region: string
        // tslint:disable-next-line: no-invalid-template-strings

        this.format_str = 'this is ${name}';
        this.format_res = '';
        this.format_obj = JSON.stringify({
          name: 'asdf'
        }); // endregion
        // region: other

        this.content = "time ".concat(+new Date(), "\n\n    \u4E2D\u6587\uFF01@#\uFFE5%\u2026\u2026&*");
      }

      _createClass(UtilComponent, [{
        key: "onFormat",
        value: function onFormat() {
          var obj = null;

          try {
            obj = JSON.parse(this.format_obj);
          } catch (_a) {
            this.messageSrv.error("\u65E0\u6CD5\u4F7F\u7528 JSON.parse \u8F6C\u6362");
            return;
          }

          this.format_res = Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["format"])(this.format_str, obj, true);
        }
      }, {
        key: "onYuan",
        value: function onYuan(value) {
          this.yuan_res = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["yuan"])(value);
        }
      }, {
        key: "onCopy",
        value: function onCopy() {
          var _this11 = this;

          Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["copy"])("time ".concat(+new Date())).then(function () {
            return _this11.messageSrv.success("success");
          });
        }
      }]);

      return UtilComponent;
    }();

    UtilComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
      }];
    };

    UtilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-util',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./util.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/util/util.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])], UtilComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/xlsx/xlsx.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/routes/delon/xlsx/xlsx.component.ts ***!
    \*****************************************************/

  /*! exports provided: XlsxComponent */

  /***/
  function srcAppRoutesDelonXlsxXlsxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XlsxComponent", function () {
      return XlsxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _delon_abc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @delon/abc */
    "./node_modules/@delon/abc/fesm2015/abc.js");

    var XlsxComponent =
    /*#__PURE__*/
    function () {
      function XlsxComponent(xlsx) {
        _classCallCheck(this, XlsxComponent);

        this.xlsx = xlsx;
        this.users = Array(100).fill({}).map(function (item, idx) {
          return {
            id: idx + 1,
            name: "name ".concat(idx + 1),
            age: Math.ceil(Math.random() * 10) + 20
          };
        });
        this.columns = [{
          title: '编号',
          index: 'id',
          type: 'checkbox'
        }, {
          title: '姓名',
          index: 'name'
        }, {
          title: '年龄',
          index: 'age'
        }];
      }

      _createClass(XlsxComponent, [{
        key: "url",
        value: function url() {
          var _this12 = this;

          this.xlsx.import("./assets/tmp/demo.xlsx").then(function (res) {
            return _this12.data = res;
          });
        }
      }, {
        key: "change",
        value: function change(e) {
          var _this13 = this;

          var file = e.target.files[0];
          this.xlsx.import(file).then(function (res) {
            return _this13.data = res;
          });
        }
      }, {
        key: "download",
        value: function download() {
          var _this14 = this;

          var data = [this.columns.map(function (i) {
            return i.title;
          })];
          this.users.forEach(function (i) {
            return data.push(_this14.columns.map(function (c) {
              return i[c.index];
            }));
          });
          this.xlsx.export({
            sheets: [{
              data: data,
              name: 'sheet name'
            }]
          });
        }
      }]);

      return XlsxComponent;
    }();

    XlsxComponent.ctorParameters = function () {
      return [{
        type: _delon_abc__WEBPACK_IMPORTED_MODULE_2__["XlsxService"]
      }];
    };

    XlsxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-xlsx',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./xlsx.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/xlsx/xlsx.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_abc__WEBPACK_IMPORTED_MODULE_2__["XlsxService"]])], XlsxComponent);
    /***/
  },

  /***/
  "./src/app/routes/delon/zip/zip.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/routes/delon/zip/zip.component.ts ***!
    \***************************************************/

  /*! exports provided: ZipComponent */

  /***/
  function srcAppRoutesDelonZipZipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZipComponent", function () {
      return ZipComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _delon_abc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @delon/abc */
    "./node_modules/@delon/abc/fesm2015/abc.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");

    var ZipComponent =
    /*#__PURE__*/
    function () {
      function ZipComponent(zip, msg) {
        var _this15 = this;

        _classCallCheck(this, ZipComponent);

        this.zip = zip;
        this.msg = msg; // endregion
        // region: write

        this.instance = null;
        this.data = [{
          path: 'demo.docx',
          url: 'https://ng-alain.com/assets/demo.docx'
        }, {
          path: '小程序标志.zip',
          url: 'https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip'
        }];
        this.zip.create().then(function (ret) {
          return _this15.instance = ret;
        });
      }

      _createClass(ZipComponent, [{
        key: "format",
        value: function format(data) {
          var files = data.files;
          this.list = Object.keys(files).map(function (key) {
            return {
              name: key,
              dir: files[key].dir,
              date: files[key].date
            };
          });
        }
      }, {
        key: "url",
        value: function url() {
          var _this16 = this;

          this.zip.read("./assets/tmp/demo.zip").then(function (res) {
            return _this16.format(res);
          });
        }
      }, {
        key: "change",
        value: function change(e) {
          var _this17 = this;

          var file = e.target.files[0];
          this.zip.read(file).then(function (res) {
            return _this17.format(res);
          });
        }
      }, {
        key: "download",
        value: function download() {
          var _this18 = this;

          var promises = [];
          this.data.forEach(function (item) {
            promises.push(_this18.zip.pushUrl(_this18.instance, item.path, item.url));
          });
          Promise.all(promises).then(function () {
            _this18.zip.save(_this18.instance).then(function () {
              _this18.msg.success('download success');

              _this18.data = [];
            });
          }, function (error) {
            console.warn(error);

            _this18.msg.error(JSON.stringify(error));
          });
        }
      }]);

      return ZipComponent;
    }();

    ZipComponent.ctorParameters = function () {
      return [{
        type: _delon_abc__WEBPACK_IMPORTED_MODULE_2__["ZipService"]
      }, {
        type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]
      }];
    };

    ZipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-zip',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./zip.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/zip/zip.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_abc__WEBPACK_IMPORTED_MODULE_2__["ZipService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])], ZipComponent);
    /***/
  }
}]);
//# sourceMappingURL=delon-delon-module-es5.js.map