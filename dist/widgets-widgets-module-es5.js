function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-widgets-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/widgets/widgets/widgets.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/widgets/widgets/widgets.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesWidgetsWidgetsWidgetsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alain-default__content-title\">\n  <h1>Widgets</h1>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzXs]=\"24\" [nzSm]=\"8\">\n    <nz-card>\n      <div class=\"text-right text-grey\">\n        <i nz-icon nzType=\"pay-circle\" class=\"display-2\"></i>\n      </div>\n      <h3 class=\"h3\">99.999</h3>\n      <div class=\"text-grey\">Games played last month</div>\n      <nz-progress [nzStatus]=\"'active'\" [nzPercent]=\"60\" [nzShowInfo]=\"false\" [nzStrokeWidth]=\"5\"></nz-progress>\n    </nz-card>\n  </div>\n  <div nz-col [nzXs]=\"24\" [nzSm]=\"8\">\n    <nz-card>\n      <div class=\"text-right text-grey\">\n        <i nz-icon nzType=\"pie-chart\" class=\"display-2\"></i>\n      </div>\n      <h3 class=\"h3\">300</h3>\n      <div class=\"text-grey\">Coffee cups per day</div>\n      <nz-progress [nzStatus]=\"'success'\" [nzPercent]=\"30\" [nzShowInfo]=\"false\" [nzStrokeWidth]=\"5\"></nz-progress>\n    </nz-card>\n  </div>\n  <div nz-col [nzXs]=\"24\" [nzSm]=\"8\">\n    <nz-card>\n      <div class=\"text-right text-grey\">\n        <i nz-icon nzType=\"cloud\" class=\"display-2\"></i>\n      </div>\n      <h3 class=\"h3\">1000 Gb</h3>\n      <div class=\"text-grey\">Average Monthly Uploads</div>\n      <nz-progress [nzStatus]=\"'exception'\" [nzPercent]=\"10\" [nzShowInfo]=\"false\" [nzStrokeWidth]=\"5\"></nz-progress>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzXs]=\"24\" [nzSm]=\"8\">\n    <nz-card class=\"ant-card__body-nopadding\">\n      <div nz-row>\n        <div nz-col [nzSpan]=\"12\" class=\"border-right-1 border-bottom-1\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n            <div nz-col [nzSpan]=\"12\" class=\"text-center text-red\">\n              <i nz-icon nzType=\"user\" class=\"display-2\"></i>\n            </div>\n            <div nz-col [nzSpan]=\"12\" class=\"py-md\">\n              <h4 class=\"h4\">10k</h4>\n              <div class=\"text-grey\">VISITORS</div>\n            </div>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"12\" class=\"border-bottom-1\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n            <div nz-col [nzSpan]=\"12\" class=\"text-center text-pink\">\n              <i nz-icon nzType=\"sound\" class=\"display-2\"></i>\n            </div>\n            <div nz-col [nzSpan]=\"12\" class=\"py-md\">\n              <h4 class=\"h4\">100%</h4>\n              <div class=\"text-grey\">VOLUME</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div nz-row>\n        <div nz-col [nzSpan]=\"12\" class=\"border-right-1\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n            <div nz-col [nzSpan]=\"12\" class=\"text-center text-grey\">\n              <i nz-icon nzType=\"fork\" class=\"display-2\"></i>\n            </div>\n            <div nz-col [nzSpan]=\"12\" class=\"py-md\">\n              <h4 class=\"h4\">150</h4>\n              <div class=\"text-grey\">FORKS</div>\n            </div>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"12\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n            <div nz-col [nzSpan]=\"12\" class=\"text-center text-green\">\n              <i nz-icon nzType=\"message\" class=\"display-2\"></i>\n            </div>\n            <div nz-col [nzSpan]=\"12\" class=\"py-md\">\n              <h4 class=\"h4\">10</h4>\n              <div class=\"text-grey\">MESSAGES</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n    <nz-card class=\"ant-card__body-nopadding\">\n      <div nz-row>\n        <div nz-col [nzSpan]=\"12\" class=\"border-right-1 border-bottom-1\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n            <div nz-col [nzSpan]=\"12\" class=\"text-center\">\n              <g2-mini-bar\n                height=\"35\"\n                color=\"#999\"\n                borderWidth=\"3\"\n                [padding]=\"[36, 30, 30, 30]\"\n                [data]=\"smallData\"\n              ></g2-mini-bar>\n            </div>\n            <div nz-col [nzSpan]=\"12\" class=\"py-md\">\n              <h4 class=\"h4\">10k</h4>\n              <div class=\"text-grey\">VISITORS</div>\n            </div>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"12\" class=\"border-bottom-1\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n            <div nz-col [nzSpan]=\"12\" class=\"text-center\">\n              <g2-mini-bar\n                height=\"35\"\n                color=\"#999\"\n                borderWidth=\"3\"\n                [padding]=\"[36, 30, 30, 30]\"\n                [data]=\"smallData\"\n              ></g2-mini-bar>\n            </div>\n            <div nz-col [nzSpan]=\"12\" class=\"py-md\">\n              <h4 class=\"h4\">100%</h4>\n              <div class=\"text-grey\">VOLUME</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div nz-row>\n        <div nz-col [nzSpan]=\"12\" class=\"border-right-1\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n            <div nz-col [nzSpan]=\"12\" class=\"text-center\">\n              <g2-mini-bar\n                height=\"35\"\n                color=\"#999\"\n                borderWidth=\"3\"\n                [padding]=\"[36, 30, 30, 30]\"\n                [data]=\"smallData\"\n              ></g2-mini-bar>\n            </div>\n            <div nz-col [nzSpan]=\"12\" class=\"py-md\">\n              <h4 class=\"h4\">150</h4>\n              <div class=\"text-grey\">FORKS</div>\n            </div>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"12\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n            <div nz-col [nzSpan]=\"12\" class=\"text-center\">\n              <g2-mini-bar\n                height=\"35\"\n                color=\"#999\"\n                borderWidth=\"3\"\n                [padding]=\"[36, 30, 30, 30]\"\n                [data]=\"smallData\"\n              ></g2-mini-bar>\n            </div>\n            <div nz-col [nzSpan]=\"12\" class=\"py-md\">\n              <h4 class=\"h4\">10</h4>\n              <div class=\"text-grey\">MESSAGES</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col [nzXs]=\"24\" [nzSm]=\"8\">\n    <nz-card class=\"ant-card__body-nopadding\">\n      <div class=\"half-float half-float-md\">\n        <img src=\"./assets/tmp/img/half-float-bg-1.jpg\" />\n        <div class=\"half-float-bottom rounded-circle bg-grey-lighter\">\n          <img class=\"p-sm\" src=\"./assets/tmp/img/1.png\" />\n        </div>\n      </div>\n      <div class=\"text-center\">\n        <h3 class=\"h3\">cipchk</h3>\n        <div class=\"text-grey\">Lead director</div>\n        <div class=\"p-sm\">\n          Voluptate velit id mollit ex. Anim labore non dolore ad cupidatat aute reprehenderit ullamco culpa esse. Esse\n          exercitation laboris culpa ipsum pariatur mollit minim culpa magna.\n        </div>\n      </div>\n      <div class=\"text-center bg-grey-darker text-white\">\n        <div nz-row>\n          <div nz-col [nzSpan]=\"8\" class=\"py-sm\">\n            <h3 class=\"text-white mb0\">400</h3>\n            <div>Photos</div>\n          </div>\n          <div nz-col [nzSpan]=\"8\" class=\"py-sm\">\n            <h3 class=\"text-white mb0\">2000</h3>\n            <div>Likes</div>\n          </div>\n          <div nz-col [nzSpan]=\"8\" class=\"py-sm\">\n            <h3 class=\"text-white mb0\">500</h3>\n            <div>Following</div>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col [nzXs]=\"24\" [nzSm]=\"8\">\n    <nz-card class=\"ant-card__body-nopadding\">\n      <div class=\"text-center bg-center py-lg text-white\" style=\"background-image: url('./assets/tmp/img/bg9.jpg');\">\n        <nz-avatar [nzSrc]=\"'./assets/tmp/img/1.png'\"></nz-avatar>\n        <h3 class=\"text-white\">cipchk</h3>\n        <div>\n          <i class=\"fa fa-github fa-fw\"></i>\n          @cipchk\n        </div>\n      </div>\n      <div class=\"text-center bg-grey-darker text-white\">\n        <div nz-row>\n          <div nz-col [nzSpan]=\"8\" class=\"py-md\">\n            <a (click)=\"msg.success('to twitter')\">\n              <i class=\"fa fa-twitter fa-2x\"></i>\n            </a>\n          </div>\n          <div nz-col [nzSpan]=\"8\" class=\"py-md\">\n            <a (click)=\"msg.success('to facebook')\">\n              <i class=\"fa fa-facebook fa-2x\"></i>\n            </a>\n          </div>\n          <div nz-col [nzSpan]=\"8\" class=\"py-md\">\n            <a (click)=\"msg.success('comment')\">\n              <i class=\"fa fa-comments fa-2x\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n        <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n          <i class=\"fa fa-fw fa-clock-o text-grey\"></i>\n        </div>\n        <div nz-col [nzSpan]=\"17\">Recent Activity</div>\n        <div nz-col [nzSpan]=\"3\">\n          <nz-tag [nzColor]=\"'blue'\">350</nz-tag>\n        </div>\n      </div>\n      <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n        <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n          <i class=\"fa fa-fw fa-user text-grey\"></i>\n        </div>\n        <div nz-col [nzSpan]=\"17\">Following</div>\n        <div nz-col [nzSpan]=\"3\">\n          <nz-tag [nzColor]=\"'pink'\">150</nz-tag>\n        </div>\n      </div>\n      <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n        <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n          <i class=\"fa fa-fw fa-folder-open-o text-grey\"></i>\n        </div>\n        <div nz-col [nzSpan]=\"17\">Photos</div>\n        <div nz-col [nzSpan]=\"3\">\n          <nz-tag [nzColor]=\"'green'\">100</nz-tag>\n        </div>\n      </div>\n      <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n        <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n          <i class=\"fa fa-fw fa-folder-open-o text-grey\"></i>\n        </div>\n        <div nz-col [nzSpan]=\"17\">Article</div>\n        <div nz-col [nzSpan]=\"3\">\n          <nz-tag [nzColor]=\"'purple'\">100</nz-tag>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n<div nz-row nzGutter=\"16\">\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-primary rounded-md\">\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\n        <div class=\"h2 mt0\">123,456</div>\n        <div class=\"text-nowrap\">Website Traffics</div>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <g2-mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"data\"></g2-mini-bar>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-success rounded-md\">\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\n        <div class=\"h2 mt0\">234,567K</div>\n        <div class=\"text-nowrap\">Website Impressions</div>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <g2-mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"data\"></g2-mini-bar>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-orange rounded-md\">\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\n        <div class=\"h2 mt0\">$458,778</div>\n        <div class=\"text-nowrap\">Total Sales</div>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <g2-mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"data\"></g2-mini-bar>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-magenta rounded-md\">\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\n        <div class=\"h2 mt0\">456</div>\n        <div class=\"text-nowrap\">Support Tickets</div>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <g2-mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"data\"></g2-mini-bar>\n      </div>\n    </div>\n  </div>\n</div>\n<div nz-row nzGutter=\"16\">\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-primary text-center rounded-md\">\n      <div nz-col nzSpan=\"8\" class=\"p-md text-white\">\n        <i nz-icon nzType=\"user\" class=\"display-2\"></i>\n      </div>\n      <div nz-col nzSpan=\"16\" class=\"bg-white py-md\">\n        <h3 class=\"h3 mb0\">10k</h3>\n        <div class=\"text-grey-dark\">VISITORS</div>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-magenta text-center rounded-md\">\n      <div nz-col nzSpan=\"8\" class=\"p-md text-white\">\n        <i nz-icon nzType=\"sound\" class=\"display-2\"></i>\n      </div>\n      <div nz-col nzSpan=\"16\" class=\"bg-white py-md\">\n        <h3 class=\"h3 mb0\">100%</h3>\n        <div class=\"text-grey-dark\">VOLUME</div>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-grey-darker text-center rounded-md\">\n      <div nz-col nzSpan=\"8\" class=\"p-md text-white\">\n        <i nz-icon nzType=\"fork\" class=\"display-2\"></i>\n      </div>\n      <div nz-col nzSpan=\"16\" class=\"bg-white py-md\">\n        <h3 class=\"h3 mb0\">150</h3>\n        <div class=\"text-grey-dark\">FORKS</div>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-green text-center rounded-md\">\n      <div nz-col nzSpan=\"8\" class=\"p-md text-white\">\n        <i nz-icon nzType=\"message\" class=\"display-2\"></i>\n      </div>\n      <div nz-col nzSpan=\"16\" class=\"bg-white py-md\">\n        <h3 class=\"h3 mb0\">10</h3>\n        <div class=\"text-grey-dark\">NEW MESSAGES</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"8\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-green-dark text-white rounded-md\">\n      <div nz-col nzSpan=\"8\" class=\"p-md text-center\">\n        <i nz-icon nzType=\"share-alt\" class=\"display-1\"></i>\n      </div>\n      <div nz-col nzSpan=\"16\" class=\"bg-green-light p-md\">\n        <h2 class=\"h2 text-white mb0\">150</h2>\n        <div class=\"text-lg text-uppercase\">New connections</div>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"8\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-red-dark text-white rounded-md\">\n      <div nz-col nzSpan=\"8\" class=\"p-md text-center\">\n        <i nz-icon nzType=\"star\" class=\"display-1\"></i>\n      </div>\n      <div nz-col nzSpan=\"16\" class=\"bg-red-light p-md\">\n        <h2 class=\"h2 text-white mb0\">7000</h2>\n        <div class=\"text-lg text-uppercase\">RATINGS RECEIVED</div>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"8\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-warning-dark text-white rounded-md\">\n      <div nz-col nzSpan=\"8\" class=\"p-md text-center\">\n        <i nz-icon nzType=\"trophy\" class=\"display-1\"></i>\n      </div>\n      <div nz-col nzSpan=\"16\" class=\"bg-warning-light p-md\">\n        <h2 class=\"h2 text-white mb0\">15</h2>\n        <div class=\"text-lg text-uppercase\">ACHIEVEMENTS</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div nz-row nzGutter=\"16\">\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-green text-white text-center rounded-md\">\n      <div nz-col nzSpan=\"10\" class=\"p-md\">\n        <i nz-icon nzType=\"book\" class=\"display-1\"></i>\n      </div>\n      <div nz-col nzSpan=\"14\" class=\"py-md\">\n        <h1 class=\"text-white mb0\">120</h1>\n        <div>New Tasks!</div>\n      </div>\n      <a nz-col nzSpan=\"24\" (click)=\"msg.info('view')\" class=\"d-block p-sm bg-grey-darker text-white\">\n        <div class=\"float-left\">View Details</div>\n        <div class=\"float-right\">\n          <i class=\"fa fa-chevron-circle-right\"></i>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-primary text-white text-center rounded-md\">\n      <div nz-col nzSpan=\"10\" class=\"p-md\">\n        <i nz-icon nzType=\"message\" class=\"display-1\"></i>\n      </div>\n      <div nz-col nzSpan=\"14\" class=\"py-md\">\n        <h1 class=\"text-white mb0\">36</h1>\n        <div>New Comments!</div>\n      </div>\n      <a nz-col nzSpan=\"24\" (click)=\"msg.info('view')\" class=\"d-block p-sm bg-grey-darker text-white\">\n        <div class=\"float-left\">View Details</div>\n        <div class=\"float-right\">\n          <i class=\"fa fa-chevron-circle-right\"></i>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-warning text-white text-center rounded-md\">\n      <div nz-col nzSpan=\"10\" class=\"p-md\">\n        <i nz-icon nzType=\"shopping-cart\" class=\"display-1\"></i>\n      </div>\n      <div nz-col nzSpan=\"14\" class=\"py-md\">\n        <h1 class=\"text-white mb0\">110</h1>\n        <div>New Orders!</div>\n      </div>\n      <a nz-col nzSpan=\"24\" (click)=\"msg.info('view')\" class=\"d-block p-sm bg-grey-darker text-white\">\n        <div class=\"float-left\">View Details</div>\n        <div class=\"float-right\">\n          <i class=\"fa fa-chevron-circle-right\"></i>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-red text-white text-center rounded-md\">\n      <div nz-col nzSpan=\"10\" class=\"p-md\">\n        <i nz-icon nzType=\"customer-service\" class=\"display-1\"></i>\n      </div>\n      <div nz-col nzSpan=\"14\" class=\"py-md\">\n        <h1 class=\"text-white mb0\">19</h1>\n        <div>Support Tickets!</div>\n      </div>\n      <a nz-col nzSpan=\"24\" (click)=\"msg.info('view')\" class=\"d-block p-sm bg-grey-darker text-white\">\n        <div class=\"float-left\">View Details</div>\n        <div class=\"float-right\">\n          <i class=\"fa fa-chevron-circle-right\"></i>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzXs]=\"24\" [nzSm]=\"12\" [nzMd]=\"8\">\n    <nz-card nzTitle=\"服务\" [nzExtra]=\"extra\">\n      <ng-template #extra>\n        <a (click)=\"msg.info('更多服务')\">更多服务</a>\n      </ng-template>\n      <div class=\"pb-md\">\n        <i nz-icon nzType=\"check-circle\" class=\"text-green\"></i> 已开通 16 个\n        <i nz-icon nzType=\"check-circle\" class=\"pl-md\"></i> 未开通 4 个\n      </div>\n      <nz-carousel style=\"overflow: initial;\">\n        <div nz-carousel-content>\n          <div nz-row [nzGutter]=\"24\" class=\"mb-md\">\n            <div nz-col [nzSpan]=\"12\">\n              <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n                <div nz-col [nzSpan]=\"8\">\n                  <i nz-icon nzType=\"laptop\" class=\"display-2 text-blue\"></i>\n                </div>\n                <div nz-col [nzSpan]=\"16\">\n                  <h4 class=\"fs-md text-blue mb0\">服务注册中心</h4>\n                  <div class=\"text-grey\">Register Server</div>\n                </div>\n              </div>\n            </div>\n            <div nz-col [nzSpan]=\"12\">\n              <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n                <div nz-col [nzSpan]=\"8\">\n                  <i nz-icon nzType=\"rocket\" class=\"display-2 text-red\"></i>\n                </div>\n                <div nz-col [nzSpan]=\"16\">\n                  <h4 class=\"fs-md text-blue mb0\">可靠消息</h4>\n                  <div class=\"text-grey\">Msg Broker</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div nz-row [nzGutter]=\"24\">\n            <div nz-col [nzSpan]=\"12\">\n              <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n                <div nz-col [nzSpan]=\"8\">\n                  <i nz-icon nzType=\"usb\" class=\"display-2 text-purple\"></i>\n                </div>\n                <div nz-col [nzSpan]=\"16\">\n                  <h4 class=\"fs-md text-blue mb0\">分布式资源管理</h4>\n                  <div class=\"text-grey\">DRM</div>\n                </div>\n              </div>\n            </div>\n            <div nz-col [nzSpan]=\"12\">\n              <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n                <div nz-col [nzSpan]=\"8\">\n                  <i nz-icon nzType=\"fork\" class=\"display-2 text-pink\"></i>\n                </div>\n                <div nz-col [nzSpan]=\"16\">\n                  <h4 class=\"fs-md text-blue mb0\">分布式数据管理</h4>\n                  <div class=\"text-grey\">ZDC</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div nz-carousel-content>\n          <div nz-row [nzGutter]=\"24\" class=\"mb-md\">\n            <div nz-col [nzSpan]=\"12\">\n              <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n                <div nz-col [nzSpan]=\"8\">\n                  <i nz-icon nzType=\"laptop\" class=\"display-2 text-blue\"></i>\n                </div>\n                <div nz-col [nzSpan]=\"16\">\n                  <h4 class=\"fs-md text-blue mb0\">服务注册中心</h4>\n                  <div class=\"text-grey\">Register Server</div>\n                </div>\n              </div>\n            </div>\n            <div nz-col [nzSpan]=\"12\">\n              <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n                <div nz-col [nzSpan]=\"8\">\n                  <i nz-icon nzType=\"rocket\" class=\"display-2 text-red\"></i>\n                </div>\n                <div nz-col [nzSpan]=\"16\">\n                  <h4 class=\"fs-md text-blue mb0\">可靠消息</h4>\n                  <div class=\"text-grey\">Msg Broker</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div nz-row [nzGutter]=\"24\">\n            <div nz-col [nzSpan]=\"12\">\n              <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n                <div nz-col [nzSpan]=\"8\">\n                  <i nz-icon nzType=\"usb\" class=\"display-2 text-purple\"></i>\n                </div>\n                <div nz-col [nzSpan]=\"16\">\n                  <h4 class=\"fs-md text-blue\">分布式资源管理</h4>\n                  <div class=\"text-grey\">DRM</div>\n                </div>\n              </div>\n            </div>\n            <div nz-col [nzSpan]=\"12\">\n              <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n                <div nz-col [nzSpan]=\"8\">\n                  <i nz-icon nzType=\"fork\" class=\"display-2 text-pink\"></i>\n                </div>\n                <div nz-col [nzSpan]=\"16\">\n                  <h4 class=\"fs-md text-blue\">分布式数据管理</h4>\n                  <div class=\"text-grey\">ZDC</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </nz-carousel>\n    </nz-card>\n  </div>\n  <div nz-col [nzXs]=\"24\" [nzSm]=\"12\" [nzMd]=\"8\">\n    <nz-card nzTitle=\"开发服务器\">\n      <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n        <div nz-col [nzSpan]=\"4\">\n          <i nz-icon nzType=\"database\" class=\"display-1\"></i>\n        </div>\n        <div nz-col [nzSpan]=\"15\">\n          <h3 class=\"font-weight-bold mb0\">暂无服务器</h3>\n          <div class=\"pt-sm text-grey-dark d-flex align-items-center\">\n            <nz-badge [nzStatus]=\"'error'\"></nz-badge>\n            服务器申请失败\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"5\" class=\"text-right\">\n          <button nz-button (click)=\"msg.info('Apply')\" [nzType]=\"'default'\">\n            <span>申请</span>\n          </button>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col [nzXs]=\"24\" [nzSm]=\"12\" [nzMd]=\"8\">\n    <nz-card nzTitle=\"华东 1\" class=\"ant-card__body-nopadding\" [nzExtra]=\"extra\">\n      <ng-template #extra>\n        <i nz-tooltip nzTooltipTitle=\"购买实例\" nz-icon nzType=\"shopping-cart\" class=\"display-3\"></i>\n      </ng-template>\n      <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" [nzGutter]=\"8\">\n        <div nz-col [nzSpan]=\"12\" class=\"text-center\">\n          云服务器\n          <strong class=\"display-1 text-blur\">12</strong>\n        </div>\n        <div nz-col [nzSpan]=\"12\" class=\"my-md pl-md border-left-1\">\n          <div class=\"pb-sm\">\n            <nz-badge [nzStatus]=\"'success'\"></nz-badge>\n            运行中\n            <strong class=\"text-green\">2</strong>\n          </div>\n          <div class=\"pb-sm\">\n            <nz-badge [nzStatus]=\"'default'\"></nz-badge>\n            近期创建\n            <strong class=\"text-grey\">0</strong>\n          </div>\n          <div class=\"pb-sm\">\n            <nz-badge [nzStatus]=\"'error'\"></nz-badge>\n            即将过期\n            <strong class=\"text-red\">0</strong>\n          </div>\n          <div class=\"pb-sm\">\n            <nz-badge [nzStatus]=\"'error'\"></nz-badge>\n            已过期\n            <strong class=\"text-red\">1</strong>\n          </div>\n        </div>\n      </div>\n      <div nz-row class=\"text-center border-top-1\">\n        <div nz-col [nzSpan]=\"8\" class=\"bg-grey-lighter-h py-sm point\">\n          磁盘\n          <strong class=\"text-blue\">18</strong>\n        </div>\n        <div nz-col [nzSpan]=\"8\" class=\"bg-grey-lighter-h py-sm point\">\n          快照\n          <strong>0</strong>\n        </div>\n        <div nz-col [nzSpan]=\"8\" class=\"bg-grey-lighter-h py-sm point\">\n          镜像\n          <strong class=\"text-blue\">2</strong>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzXs]=\"24\" [nzMd]=\"12\" class=\"mb-md\">\n    <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"bg-white py-md rounded-md\">\n      <div nz-col [nzSpan]=\"3\" class=\"text-center\">\n        <span class=\"ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-icon bg-primary\">\n          <i nz-icon nzType=\"dashboard\"></i>\n        </span>\n      </div>\n      <div nz-col [nzSpan]=\"6\">\n        <strong class=\"display-2\">10</strong> 个\n        <div class=\"text-grey\">运行测压任务</div>\n      </div>\n      <div nz-col [nzSpan]=\"5\" class=\"d-flex align-items-center\">\n        <nz-badge [nzStatus]=\"'success'\"></nz-badge>\n        已完成\n        <span class=\"display-3 text-grey-dark pl-sm\">3</span>\n      </div>\n      <div nz-col [nzSpan]=\"5\" class=\"d-flex align-items-center\">\n        <nz-badge [nzStatus]=\"'processing'\"></nz-badge>\n        正在进行\n        <span class=\"display-3 text-grey-dark pl-sm\">5</span>\n      </div>\n      <div nz-col [nzSpan]=\"5\" class=\"d-flex align-items-center\">\n        <nz-badge [nzStatus]=\"'error'\"></nz-badge>\n        已失败\n        <span class=\"display-3 text-grey-dark pl-sm\">2</span>\n      </div>\n    </div>\n  </div>\n  <div nz-col [nzXs]=\"24\" [nzMd]=\"12\" class=\"mb-md\">\n    <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"bg-white rounded-md border p-md\">\n      <div nz-col [nzSpan]=\"16\">\n        你觉得这篇文章如何：\n      </div>\n      <div nz-col [nzSpan]=\"8\" class=\"text-right\">\n        <span\n          nz-popconfirm\n          [(nzVisible)]=\"like\"\n          [nzPopconfirmPlacement]=\"'top'\"\n          [nzPopconfirmTitle]=\"'喜欢就开启此内容提醒吧！'\"\n          [nzOkText]=\"'立即开启'\"\n          [nzCancelText]=\"'下次再说'\"\n          (nzOnConfirm)=\"msg.success('开启提醒')\"\n          (nzOnCancel)=\"msg.error('取消提醒')\"\n          style=\"display:inline-block; padding-top:15px;\"\n        ></span>\n        <span class=\"pr-lg\">\n          <i nz-icon nzType=\"like\" class=\"display-3 point\" [class.text-primary]=\"like\" (click)=\"like = !like\"></i> 赞\n        </span>\n        <i\n          nz-icon\n          nzType=\"dislike\"\n          class=\"display-3 point\"\n          [class.text-primary]=\"dislike\"\n          (click)=\"dislike = !dislike\"\n        ></i>\n        踩\n      </div>\n    </div>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"8\" class=\"mb-md\">\n    <nz-card class=\"ant-card__body-nopadding bg-green rounded-md\">\n      <div class=\"p-md\">\n        <div class=\"h5 pb-sm text-white\">Received all time</div>\n        <g2-mini-area color=\"#fff\" height=\"46\" [data]=\"data\"></g2-mini-area>\n      </div>\n      <div class=\"text-center bg-grey-darker text-white\">\n        <div nz-row>\n          <div nz-col [nzSpan]=\"8\" class=\"py-sm\">\n            <h3 class=\"text-white mb0\">400</h3>\n            <div>Photos</div>\n          </div>\n          <div nz-col [nzSpan]=\"8\" class=\"py-sm\">\n            <h3 class=\"text-white mb0\">2000</h3>\n            <div>Likes</div>\n          </div>\n          <div nz-col [nzSpan]=\"8\" class=\"py-sm\">\n            <h3 class=\"text-white mb0\">500</h3>\n            <div>Following</div>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"8\" class=\"mb-md\">\n    <nz-card class=\"ant-card__body-nopadding bg-green rounded-md\">\n      <div class=\"p-md\">\n        <div class=\"h5 pb-sm text-white\">Monthly incomes</div>\n        <g2-mini-area color=\"#fff\" height=\"46\" [data]=\"data\"></g2-mini-area>\n      </div>\n      <div\n        nz-row\n        [nzType]=\"'flex'\"\n        [nzJustify]=\"'center'\"\n        [nzAlign]=\"'middle'\"\n        class=\"bg-grey-darker py-sm text-center\"\n      >\n        <div nz-col [nzSpan]=\"16\">\n          <g2-mini-bar\n            height=\"35\"\n            color=\"#fff\"\n            borderWidth=\"3\"\n            [padding]=\"[36, 30, 30, 30]\"\n            [data]=\"data\"\n          ></g2-mini-bar>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"text-white\">+150</div>\n          <div class=\"text-grey\">From last month</div>\n        </div>\n      </div>\n      <div class=\"py-sm text-center bg-white text-grey\">\n        <div nz-row>\n          <div nz-col [nzSpan]=\"12\">\n            <div class=\"text-grey-dark\">Gross income</div>\n            <h4 class=\"h4 mb0\">12000</h4>\n          </div>\n          <div nz-col [nzSpan]=\"12\">\n            <div class=\"text-grey-dark\">Net income</div>\n            <h4 class=\"h4 mb0\">5100</h4>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"8\" class=\"mb-md\">\n    <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"rounded-md bg-blue\">\n      <div nz-col nzSpan=\"16\">\n        <img class=\"img-fluid align-middle\" src=\"./assets/tmp/img/bg1.jpg\" alt=\"\" />\n      </div>\n      <div nz-col nzSpan=\"8\" class=\"text-white text-center\">\n        <h2 class=\"h1 text-white mb0\">11°</h2>\n        <div class=\"py-sm\">Cold</div>\n        <i class=\"fa fa-sun-o fa-2x\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n<div nz-row nzGutter=\"16\">\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\n    <nz-card [nzBordered]=\"false\" [nzCover]=\"coverTpl\">\n      <ng-template #coverTpl>\n        <img class=\"img\" src=\"//os.alipayobjects.com/rmsportal/GhjqstwSgxBXrZS.png\" />\n      </ng-template>\n      <h3>ANT DESIGN</h3>\n      <p class=\"text-grey\">A UI Design Language</p>\n      <ol class=\"list-styled text-lg pt-md\">\n        <li>Designed by experienced team, and showcase dozens of inspiring projects.</li>\n        <li>\n          Provide solutions for usual problems that may be encountered while developing enterprise-like complex UIs.\n        </li>\n        <li>Dozens of flexible and practical reusable components that increase your productivity.</li>\n      </ol>\n      <p class=\"pt-md mb0\">\n        <a class=\"text-grey\" href=\"//ng.ant.design\" target=\"_blank\">View Site...</a>\n      </p>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\n    <nz-card [nzTitle]=\"nzTitle\" class=\"ant-card__body-nopadding\" [nzTitle]=\"nzTitle\">\n      <ng-template #nzTitle>\n        Recent Posts\n        <small class=\"text-sm font-weight-normal\">Venenatis portauam Inceptos ameteiam</small>\n      </ng-template>\n      <div\n        nz-row\n        [nzType]=\"'flex'\"\n        [nzJustify]=\"'center'\"\n        [nzAlign]=\"'middle'\"\n        class=\"py-sm bg-grey-lighter-h point\"\n        *ngFor=\"let item of todoData\"\n      >\n        <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n          <nz-avatar [nzSrc]=\"'./assets/tmp/img/' + item.avatar + '.png'\"></nz-avatar>\n        </div>\n        <div nz-col [nzSpan]=\"20\">\n          <strong>{{ item.name }}</strong>\n          <div>{{ item.content }}</div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\n    <nz-card nzTitle=\"Todo lists\" class=\"ant-card__body-nopadding\">\n      <div\n        nz-row\n        [nzType]=\"'flex'\"\n        [nzJustify]=\"'center'\"\n        [nzAlign]=\"'middle'\"\n        class=\"py-sm bg-grey-lighter-h point\"\n        *ngFor=\"let item of todoData\"\n      >\n        <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n          <nz-avatar [nzSrc]=\"'./assets/tmp/img/' + item.avatar + '.png'\"></nz-avatar>\n        </div>\n        <div nz-col [nzSpan]=\"18\">\n          <strong>{{ item.name }}</strong>\n          <div [class.text-deleted]=\"item.completed\">{{ item.content }}</div>\n        </div>\n        <div nz-col [nzSpan]=\"2\" class=\"text-right pr-md\">\n          <i\n            nz-dropdown\n            [nzDropdownMenu]=\"menuTpl\"\n            nzPlacement=\"topRight\"\n            nz-icon\n            nzType=\"ellipsis\"\n            class=\"rotate-90\"\n          ></i>\n          <nz-dropdown-menu #menuTpl=\"nzDropdownMenu\">\n            <ul nz-menu>\n              <li nz-menu-item *ngIf=\"item.completed\" (click)=\"item.completed = false\">Active</li>\n              <li nz-menu-item *ngIf=\"!item.completed\" (click)=\"item.completed = true\">Completed</li>\n              <li nz-menu-item (click)=\"todoData.splice(todoData.indexOf(item), 1)\">Delted</li>\n            </ul>\n          </nz-dropdown-menu>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/routes/widgets/widgets-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/routes/widgets/widgets-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: WidgetsRoutingModule */

  /***/
  function srcAppRoutesWidgetsWidgetsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetsRoutingModule", function () {
      return WidgetsRoutingModule;
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


    var _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./widgets/widgets.component */
    "./src/app/routes/widgets/widgets/widgets.component.ts");

    var routes = [{
      path: '',
      component: _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_3__["WidgetsComponent"]
    }];

    var WidgetsRoutingModule = function WidgetsRoutingModule() {
      _classCallCheck(this, WidgetsRoutingModule);
    };

    WidgetsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WidgetsRoutingModule);
    /***/
  },

  /***/
  "./src/app/routes/widgets/widgets.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/routes/widgets/widgets.module.ts ***!
    \**************************************************/

  /*! exports provided: WidgetsModule */

  /***/
  function srcAppRoutesWidgetsWidgetsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetsModule", function () {
      return WidgetsModule;
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


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./widgets-routing.module */
    "./src/app/routes/widgets/widgets-routing.module.ts");
    /* harmony import */


    var _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./widgets/widgets.component */
    "./src/app/routes/widgets/widgets/widgets.component.ts");

    var COMPONENTS = [_widgets_widgets_component__WEBPACK_IMPORTED_MODULE_4__["WidgetsComponent"]];
    var COMPONENTS_NOROUNT = [];

    var WidgetsModule = function WidgetsModule() {
      _classCallCheck(this, WidgetsModule);
    };

    WidgetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _widgets_routing_module__WEBPACK_IMPORTED_MODULE_3__["WidgetsRoutingModule"]],
      declarations: [].concat(COMPONENTS, COMPONENTS_NOROUNT),
      entryComponents: COMPONENTS_NOROUNT
    })], WidgetsModule);
    /***/
  },

  /***/
  "./src/app/routes/widgets/widgets/widgets.component.less":
  /*!***************************************************************!*\
    !*** ./src/app/routes/widgets/widgets/widgets.component.less ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoutesWidgetsWidgetsWidgetsComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .ant-carousel .slick-dots {\n  bottom: -10px;\n}\n:host ::ng-deep .ant-carousel .slick-dots button {\n  background: #000000;\n}\n:host ::ng-deep .ant-carousel .slick-dots .slick-active button {\n  background: #1890ff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3dpZGdldHMvd2lkZ2V0cy93aWRnZXRzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvd2lkZ2V0cy93aWRnZXRzL0Y6L0JhaWR1WXVuRG93bmxvYWQvdGVzdC9uZy1hbGFpbi1tYXN0ZXIvc3JjL2FwcC9yb3V0ZXMvd2lkZ2V0cy93aWRnZXRzL3dpZGdldHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FDRjdGO0VBR00sYUFBQTtBREVOO0FDTEE7RUFLUSxtQkFBQTtBREdSO0FDUkE7RUFRUSxtQkFBQTtBREdSIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL3dpZGdldHMvd2lkZ2V0cy93aWRnZXRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xuOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMge1xuICBib3R0b206IC0xMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LWNhcm91c2VsIC5zbGljay1kb3RzIC5zbGljay1hY3RpdmUgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzE4OTBmZjtcbn1cbiIsIkBpbXBvcnQgJ35AZGVsb24vdGhlbWUvc3R5bGVzL2RlZmF1bHQnO1xuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmFudC1jYXJvdXNlbCB7XG4gICAgLnNsaWNrLWRvdHMge1xuICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBncmV5LTEwO1xuICAgICAgfVxuICAgICAgLnNsaWNrLWFjdGl2ZSBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/routes/widgets/widgets/widgets.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/routes/widgets/widgets/widgets.component.ts ***!
    \*************************************************************/

  /*! exports provided: WidgetsComponent */

  /***/
  function srcAppRoutesWidgetsWidgetsWidgetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function () {
      return WidgetsComponent;
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

    var WidgetsComponent =
    /*#__PURE__*/
    function () {
      function WidgetsComponent(msg, http, cdr) {
        _classCallCheck(this, WidgetsComponent);

        this.msg = msg;
        this.http = http;
        this.cdr = cdr;
        this.data = [];
        this.smallData = [];
        this.todoData = [{
          completed: true,
          avatar: '1',
          name: '苏先生',
          content: "\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F"
        }, {
          completed: false,
          avatar: '2',
          name: 'はなさき',
          content: "\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA"
        }, {
          completed: false,
          avatar: '3',
          name: 'cipchk',
          content: "this world was never meant for one as beautiful as you."
        }, {
          completed: false,
          avatar: '4',
          name: 'Kent',
          content: "my heart is beating with hers"
        }, {
          completed: false,
          avatar: '5',
          name: 'Are you',
          content: "They always said that I love beautiful girl than my friends"
        }, {
          completed: false,
          avatar: '6',
          name: 'Forever',
          content: "Walking through green fields \uFF0Csunshine in my eyes."
        }];
        this.like = false;
        this.dislike = false;
      }

      _createClass(WidgetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.http.get('/chart/visit').subscribe(function (res) {
            _this.data = res;
            _this.smallData = res.slice(0, 6);

            _this.cdr.detectChanges();
          });
        }
      }]);

      return WidgetsComponent;
    }();

    WidgetsComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
      }, {
        type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    WidgetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-widgets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./widgets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/widgets/widgets/widgets.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./widgets.component.less */
      "./src/app/routes/widgets/widgets/widgets.component.less")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"], _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], WidgetsComponent);
    /***/
  }
}]);
//# sourceMappingURL=widgets-widgets-module-es5.js.map