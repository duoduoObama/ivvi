(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-style-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/colors/colors.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/colors/colors.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    Colors\n    <small>Color Palettes</small>\n  </h1>\n</div>\n<div nz-row [nzGutter]=\"16\" class=\"list\">\n  <div nz-col [nzMd]=\"24\">\n    <nz-card nzTitle=\"Classic colors\">\n      <div nz-row *ngFor=\"let c of c.brands\">\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{ c }}-light p-lg\">\n            <p (click)=\"onCopy('bg-' + c + '-light')\">.bg-{{ c }}-light</p>\n            <p (click)=\"onCopy('text-' + c + '-light')\">.text-{{ c }}-light</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{ c }} p-lg\">\n            <p (click)=\"onCopy('bg-' + c)\">.bg-{{ c }}</p>\n            <p (click)=\"onCopy('text-' + c)\">.text-{{ c }}</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{ c }}-dark p-lg\">\n            <p (click)=\"onCopy('bg-' + c + '-dark')\">.bg-{{ c }}-dark</p>\n            <p (click)=\"onCopy('text-' + c + '-dark')\">.text-{{ c }}-dark</p>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\" class=\"list\">\n  <div nz-col [nzMd]=\"24\">\n    <nz-card nzTitle=\"Name colors\">\n      <div nz-row *ngFor=\"let c of c.names\">\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{ c }}-light p-lg\">\n            <p (click)=\"onCopy('bg-' + c + '-light')\">.bg-{{ c }}-light</p>\n            <p (click)=\"onCopy('text-' + c + '-light')\">.text-{{ c }}-light</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{ c }} p-lg\">\n            <p (click)=\"onCopy('bg-' + c)\">.bg-{{ c }}</p>\n            <p (click)=\"onCopy('text-' + c)\">.text-{{ c }}</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{ c }}-dark p-lg\">\n            <p (click)=\"onCopy('bg-' + c + '-dark')\">.bg-{{ c }}-dark</p>\n            <p (click)=\"onCopy('text-' + c + '-dark')\">.text-{{ c }}-dark</p>\n          </div>\n        </div>\n      </div>\n      <div nz-row>\n        <div nz-col [nzSpan]=\"5\">\n          <div class=\"bg-grey-darker p-lg\">\n            <p (click)=\"onCopy('bg-grey-darker')\">.bg-grey-darker</p>\n            <p (click)=\"onCopy('text-grey-darker')\">.text-grey-darker</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"5\">\n          <div class=\"bg-grey-dark p-lg\">\n            <p (click)=\"onCopy('bg-grey-dark')\">.bg-grey-dark</p>\n            <p (click)=\"onCopy('text-grey-dark')\">.text-grey-dark</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"4\">\n          <div class=\"bg-grey p-lg\">\n            <p (click)=\"onCopy('bg-grey')\">.bg-grey</p>\n            <p (click)=\"onCopy('text-grey')\">.text-grey</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"5\">\n          <div class=\"bg-grey-light p-lg\">\n            <p (click)=\"onCopy('bg-grey-light')\">.bg-grey-light</p>\n            <p (click)=\"onCopy('text-grey-light')\">.text-grey-light</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"5\">\n          <div class=\"bg-grey-lighter p-lg\">\n            <p (click)=\"onCopy('bg-grey-lighter')\">.bg-grey-lighter</p>\n            <p (click)=\"onCopy('text-grey-lighter')\">.text-grey-lighter</p>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\" class=\"list\">\n  <div nz-col [nzMd]=\"24\">\n    <nz-card nzTitle=\"Full Colors\">\n      <div nz-row>\n        <div nz-col [nzSpan]=\"4\" *ngFor=\"let c of c.names\">\n          <div *ngFor=\"let i of nums\" class=\"bg-{{ c }}-{{ i }} p-lg\">\n            <p (click)=\"onCopy('bg-' + c + '-' + i)\">.bg-{{ c }}-{{ i }}</p>\n            <p (click)=\"onCopy('bg-' + c + '-' + i + '-h')\">.bg-{{ c }}-{{ i }}-h</p>\n            <p (click)=\"onCopy('text-' + c + '-' + i)\">.text-{{ c }}-{{ i }}</p>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/gridmasonry/gridmasonry.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/gridmasonry/gridmasonry.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    Grid Masonry\n    <small\n      >Pure CSS and mobile first with a fallback to inline grid, Supported from IE10,\n      <a href=\"//caniuse.com/#feat=multicolumn\" target=\"_blank\">browser compatibility</a>\n    </small>\n  </h1>\n</div>\n<div class=\"row-masonry row-masonry-xl-8 row-masonry-lg-5 row-masonry-md-4 row-masonry-sm-3 row-masonry-xs-2\">\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Ipsum do ullamco laboris excepteur. Do incididunt commodo adipisicing officia sunt tempor. Deserunt exercitation\n        proident enim veniam laboris fugiat ipsum veniam dolore duis sit duis. In deserunt ut nulla ad eu.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Veniam non sunt quis ex consequat ea esse duis esse. Ut incididunt eiusmod occaecat esse aute adipisicing culpa.\n        Voluptate ullamco labore laboris et do in.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Esse elit et aute do aliqua ipsum cillum consectetur deserunt deserunt cupidatat aute aliqua aute. Aliquip ad\n        incididunt dolor cupidatat quis officia cillum sit ex. Irure ut sit Lorem sunt nulla excepteur ipsum ipsum\n        dolore cillum cupidatat ipsum. Do amet aliquip sunt consectetur nulla. Cupidatat ad consectetur veniam aliqua\n        non ullamco laboris eiusmod. In voluptate officia aliquip dolore sit qui consectetur fugiat aliqua duis\n        occaecat. Non mollit elit nisi ea mollit anim excepteur ut qui exercitation.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Ullamco incididunt do deserunt cillum veniam cillum amet ad. Deserunt laborum cupidatat mollit proident\n        adipisicing in culpa consequat adipisicing et non. Aliqua ea elit voluptate esse aliqua dolor ipsum. Ut officia\n        officia fugiat sint esse qui incididunt Lorem occaecat.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Ea non irure qui fugiat aliquip esse adipisicing. Cillum aliquip dolor non fugiat ad aliqua. In voluptate et non\n        irure elit. Tempor qui sunt incididunt amet tempor sint et voluptate sunt qui sit culpa proident ipsum. Sunt\n        duis pariatur officia ut magna pariatur fugiat dolor cillum laboris eu. Qui incididunt minim nostrud\n        exercitation aliquip.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Fugiat commodo ad consectetur reprehenderit. Officia fugiat ea proident exercitation occaecat mollit laboris\n        fugiat consequat deserunt anim ipsum magna ex. Esse do amet cillum aute ut ea.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Magna id fugiat laborum elit ullamco deserunt do laboris non qui. Duis et exercitation nulla labore cupidatat\n        nostrud pariatur reprehenderit in nostrud. Consequat consequat consectetur mollit adipisicing. Laborum amet sit\n        sint aliquip fugiat adipisicing enim reprehenderit. Voluptate nisi reprehenderit voluptate sit enim aute\n        deserunt cupidatat et dolore labore voluptate id dolore.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Reprehenderit non ullamco quis non excepteur irure excepteur anim ullamco labore. Sit occaecat consectetur\n        laborum consequat elit sint sit sunt. Duis aliquip magna ipsum consequat eiusmod officia.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Magna nostrud ex cupidatat id in non labore ad voluptate est irure tempor. Nostrud aliqua magna laborum\n        incididunt deserunt veniam nulla nulla labore cillum. Id laboris Lorem dolore minim reprehenderit eu proident\n        aliqua magna id aute aute. Aliqua est et nulla eu duis id laborum magna.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Sint pariatur eiusmod id sit est exercitation laboris mollit pariatur minim. Ex aliquip commodo nulla\n        reprehenderit et laboris consequat pariatur culpa culpa proident ullamco laboris. Ex aliquip deserunt labore\n        aliquip ea est sit quis amet tempor sunt amet. Id reprehenderit do elit sit consectetur. Aute amet sint tempor\n        ipsum sint laboris est do culpa tempor. Pariatur fugiat aute officia et laboris voluptate sit nisi in anim\n        excepteur amet eu.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Incididunt ut eu fugiat do deserunt voluptate id et est aliqua eu sint. Ad dolore excepteur ipsum nulla proident\n        dolore aute sunt. Aute enim do dolor laborum id eiusmod sit.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Amet elit et ad amet nulla minim deserunt mollit adipisicing. Laboris non ipsum ad laborum non magna velit\n        tempor cillum cillum. Proident dolore eiusmod ex elit cillum. Cupidatat duis pariatur ut id deserunt laboris.\n        Culpa excepteur est deserunt eiusmod do do ut est labore eiusmod. Eu eu veniam excepteur mollit anim est velit\n        nisi. Velit quis tempor laboris culpa.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Nostrud nulla nisi laboris officia anim nostrud nulla cupidatat veniam ea duis. Pariatur ea ullamco irure\n        laborum. Consectetur labore in occaecat ullamco est fugiat nisi sunt deserunt. Non sunt dolor elit culpa dolore\n        adipisicing. Fugiat mollit ex voluptate nulla deserunt dolore ea sunt commodo et qui laborum.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Quis pariatur ea nisi excepteur mollit nulla reprehenderit labore. Exercitation pariatur eu pariatur tempor\n        deserunt ad occaecat ad in pariatur id et dolore. Enim veniam aute magna fugiat eiusmod velit quis. Laborum sit\n        consequat dolore qui minim culpa aliqua pariatur cillum velit. Nostrud enim aliqua ut nisi consectetur pariatur\n        fugiat do esse fugiat enim et tempor ad. Eiusmod ut incididunt proident labore sint sit culpa excepteur id.\n        Fugiat mollit qui eu eu fugiat proident.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Tempor do officia magna do sunt. Nulla cillum anim excepteur adipisicing commodo culpa. Adipisicing pariatur qui\n        voluptate consectetur mollit quis sunt enim veniam ullamco. Duis nostrud anim aliqua adipisicing fugiat aute\n        excepteur deserunt enim occaecat pariatur ad. Qui aliquip aute labore minim ipsum in aute et. Aliqua laboris\n        magna aute incididunt esse ex. Eu ipsum occaecat aliquip enim aute.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Labore cillum id non anim eiusmod officia. Nostrud laboris sint aliquip cillum magna. Minim sit labore proident\n        culpa non nisi cillum non officia est. Proident elit sit adipisicing est cupidatat ex cupidatat labore aliqua\n        ad.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Officia tempor ea adipisicing ad sit qui dolore consequat irure veniam. Est sit magna deserunt sint aute commodo\n        fugiat fugiat irure sint dolore commodo amet. Duis cillum dolor quis consectetur dolor et et culpa id elit. Amet\n        ut nulla sunt non in non duis sit fugiat consequat. Velit incididunt ullamco sunt deserunt nulla ad adipisicing.\n        In fugiat ullamco deserunt amet. Ex voluptate amet magna minim ut incididunt veniam.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Occaecat anim do cillum est dolore sint. Do ut proident exercitation est incididunt irure duis ea laborum minim\n        cillum est. Mollit irure non qui veniam labore eu elit veniam ea amet nisi esse labore. Elit ut nulla\n        exercitation fugiat cupidatat non cupidatat sint id minim.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Voluptate incididunt tempor nulla voluptate esse dolor Lorem veniam voluptate adipisicing laborum in aliqua.\n        Proident voluptate exercitation mollit consectetur qui commodo minim. Ea esse veniam velit minim reprehenderit\n        incididunt reprehenderit do laborum aliqua. In quis et excepteur cupidatat qui duis. Pariatur Lorem laborum ut\n        consectetur deserunt consectetur officia tempor commodo aliqua aliqua ipsum.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Ullamco officia esse ex reprehenderit reprehenderit cupidatat. Sunt excepteur sint consectetur ex aliqua\n        excepteur. Laborum id cupidatat ea reprehenderit sit eiusmod ad exercitation ullamco nostrud. Nulla tempor\n        voluptate magna amet culpa exercitation ad laborum in. Aliqua voluptate deserunt pariatur excepteur. Ullamco\n        voluptate est dolore velit aliquip tempor nostrud deserunt. Minim excepteur dolor nulla commodo incididunt ex\n        ullamco excepteur cillum veniam quis reprehenderit.\n      </p>\n    </div>\n  </div>\n</div>\n<h3 class=\"my-md\">Masonry with any kind of element</h3>\n<div class=\"row-masonry row-masonry-xl-8 row-masonry-lg-5 row-masonry-md-4 row-masonry-sm-3 row-masonry-xs-2\">\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg1.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Proident est cillum magna qui pariatur. Deserunt ut voluptate sint aliquip anim nisi consequat. Elit laboris\n        anim anim dolor incididunt. Nostrud qui labore qui cillum excepteur mollit excepteur consequat esse anim enim ad\n        enim. Esse qui mollit et minim mollit laboris reprehenderit laborum fugiat do id. Mollit labore proident\n        cupidatat aliqua dolore exercitation consectetur commodo sint mollit nostrud esse sunt. Nostrud fugiat duis sit\n        excepteur excepteur mollit.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg2.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg3.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg4.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg5.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg6.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Dolore consequat elit est qui dolore dolore tempor amet magna adipisicing non in commodo. Veniam sint et\n        proident duis eu nulla commodo sunt duis aliquip eiusmod. Occaecat incididunt deserunt consectetur non aliquip\n        velit ullamco eu sit labore proident exercitation. Cillum deserunt voluptate eu eiusmod sint in esse. Velit anim\n        non Lorem proident eu sit nisi Lorem aute do sit ea. Esse nostrud amet excepteur occaecat incididunt amet\n        laborum aliqua qui mollit ullamco. Labore incididunt ullamco non ipsum Lorem duis commodo adipisicing in.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Amet est dolor id esse veniam duis eu ex velit. Id qui deserunt voluptate veniam. Voluptate ea ipsum in eiusmod\n        enim do velit commodo nulla sint. Fugiat ipsum esse pariatur voluptate exercitation magna ut proident\n        consectetur et. Sint qui elit exercitation anim duis nulla commodo aliqua excepteur pariatur.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg7.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg8.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>\n        Culpa amet adipisicing consequat nisi dolore sunt amet labore officia aliquip elit tempor officia aliqua.\n        Deserunt laborum enim ut laboris duis. Cillum non proident dolor ullamco cillum nostrud in sint aliqua cillum.\n        Proident magna incididunt occaecat eiusmod cillum dolor tempor Lorem adipisicing nisi adipisicing mollit ex\n        exercitation. Magna nostrud est sunt incididunt culpa. Duis nulla elit ut ea adipisicing duis esse ullamco.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg9.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg10.jpg\" alt=\"\" />\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/typography/typography.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/typography/typography.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    Typography\n  </h1>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Headings\">\n      <h1 class=\"h1\">\n        class=\"h1\"\n        <small>Sub-heading</small>\n      </h1>\n      <h2 class=\"h2\">\n        class=\"h2\"\n        <small>Sub-heading</small>\n      </h2>\n      <h3 class=\"h3\">\n        class=\"h3\"\n        <small>Sub-heading</small>\n      </h3>\n      <h4 class=\"h4\">\n        class=\"h4\"\n        <small>Sub-heading</small>\n      </h4>\n      <h5 class=\"h5\">\n        class=\"h5\"\n        <small>Sub-heading</small>\n      </h5>\n      <h6 class=\"h6\">\n        class=\"h6\"\n        <small>Sub-heading</small>\n      </h6>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Paragraphs\">\n      <p>\n        <small>This is an example of small, fine print text.</small>\n      </p>\n      <p class=\"mt-sm\">\n        <strong>This is an example of strong, bold text.</strong>\n      </p>\n      <p class=\"mt-sm\">\n        <em>This is an example of emphasized, italic text.</em>\n      </p>\n      <h4 class=\"mt-sm\">Alignment & Sizing Helpers</h4>\n      <p class=\"mt-sm text-left text-sm\">class=\"text-left text-sm\"</p>\n      <p class=\"mt-sm text-center text-md\">class=\"text-center text-md\"</p>\n      <p class=\"text-right text-lg\">class=\"text-right text-lg\"</p>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Text Colors\">\n      <p *ngFor=\"let color of c.names\" class=\"pb-0 text-{{ color }}\">class=\"text-{{ color }} bg-{{ color }}\"</p>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Formatting\">\n      <h4>text-nowrap</h4>\n      <p class=\"pt-sm text-nowrap\">\n        [class=\"text-nowrap\"].Ad eiusmod eu velit veniam laborum voluptate duis aliqua esse eiusmod.\n      </p>\n      <h4 class=\"pt-sm\">text-truncate</h4>\n      <p class=\"pt-sm text-truncate\">\n        [class=\"text-truncate\"].Officia nulla velit minim mollit laborum et irure ullamco nisi dolore qui. Sint aute\n        aliqua tempor commodo officia sunt non do id laborum mollit ex ea cupidatat. Amet ad non fugiat magna. Ut\n        cupidatat labore pariatur esse reprehenderit esse sint in proident elit minim sunt enim sit. Enim sint deserunt\n        exercitation duis. Aliquip cillum irure do incididunt do eu eiusmod excepteur culpa ex consectetur nulla duis\n        sit. Ex officia excepteur officia ea ea cupidatat veniam officia officia est.\n      </p>\n      <h4 class=\"pt-sm\">Transformation</h4>\n      <p class=\"pt-sm text-lowercase\">class=\"text-lowercase\"</p>\n      <p class=\"pt-sm text-uppercase\">class=\"text-uppercase\"</p>\n      <p class=\"pt-sm text-capitalize\">class=\"text-capitalize\"</p>\n      <p class=\"pt-sm text-deleted\">class=\"text-deleted\"</p>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Border\">\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border border-primary\">\n        class=\"border border-primary\"\n      </div>\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border-top-1 border-success rounded-circle\">\n        class=\"border-top-1 border-success rounded-circle\"\n      </div>\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border-bottom-1 border-error\">\n        class=\"border-bottom-1 border-error\"\n      </div>\n      <div class=\"p-sm m-sm text-center width-md d-inline-block border-right-1 border-warning\">\n        class=\"border-right-1 border-warning\"\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Padding & Margin\">\n      <strong>清除间距</strong>\n      <p>\n        <code>[<类型>p|m][<方向>t|r|b|l|x|y]?0</code>\n      </p>\n      <p>eg: p0, pt0, mb0, mt0</p>\n      <strong>间距</strong>\n      <p>\n        <code>[<类型>p|m][<方向>t|r|b|l|x|y]?-[<尺寸>sm|md|lg]</code>\n      </p>\n      <p>eg: p-sm, pb-sm, mt-md, mr-md</p>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Display\">\n      <p class=\"display-1\">class=\"display-1\"</p>\n      <p class=\"display-2\">class=\"display-2\"</p>\n      <p class=\"display-3\">class=\"display-3\"</p>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Code\">\n      <p>\n        This is an example of an inline code element within body copy. Wrap inline code within a <code>...</code>tag.\n      </p>\n      <pre class=\"mt-sm\"><code>This is an example of preformatted text.</code></pre>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Lists\">\n      <h4>list styled</h4>\n      <ol class=\"mt-sm list-styled\">\n        <li>List Item</li>\n        <li>List Item</li>\n        <li>List Item</li>\n      </ol>\n      <h4 class=\"mt-sm\">Unstyled List</h4>\n      <ul class=\"mt-sm list-unstyled\">\n        <li>List Item</li>\n        <li>List Item</li>\n        <li>List Item</li>\n      </ul>\n    </nz-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/routes/style/color.service.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/style/color.service.ts ***!
  \***********************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ColorService = class ColorService {
    constructor() {
        this.APP_COLORS = {
            primary: '#1890ff',
            success: '#52c41a',
            error: '#f5222d',
            warning: '#fadb14',
            red: '#f5222d',
            volcano: '#fa541c',
            orange: '#fa8c16',
            gold: '#faad14',
            yellow: '#fadb14',
            lime: '#a0d911',
            green: '#52c41a',
            cyan: '#13c2c2',
            blue: '#1890ff',
            geekblue: '#2f54eb',
            purple: '#722ed1',
            magenta: '#eb2f96',
        };
    }
    get names() {
        return Object.keys(this.APP_COLORS).filter((name, index) => index > 3);
    }
    get brands() {
        return ['primary', 'success', 'error', 'warning'];
    }
};
ColorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ColorService);



/***/ }),

/***/ "./src/app/routes/style/colors/colors.component.less":
/*!***********************************************************!*\
  !*** ./src/app/routes/style/colors/colors.component.less ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .list p {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n:host ::ng-deep .list p:first-child {\n  margin-bottom: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3N0eWxlL2NvbG9ycy9GOi9CYWlkdVl1bkRvd25sb2FkL3Rlc3QvbmctYWxhaW4tbWFzdGVyL3NyYy9hcHAvcm91dGVzL3N0eWxlL2NvbG9ycy9jb2xvcnMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3JvdXRlcy9zdHlsZS9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVEsZ0JBQUE7RUFDQSxlQUFBO0FDRlI7QURHUTtFQUNFLGtCQUFBO0FDRFYiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvc3R5bGUvY29sb3JzL2NvbG9ycy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgOjpuZy1kZWVwIHtcbiAgICAubGlzdCB7XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IDo6bmctZGVlcCAubGlzdCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5saXN0IHA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/routes/style/colors/colors.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/style/colors/colors.component.ts ***!
  \*********************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color.service */ "./src/app/routes/style/color.service.ts");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm2015/util.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");





let ColorsComponent = class ColorsComponent {
    constructor(c, msg) {
        this.c = c;
        this.msg = msg;
        this.nums = Array(10)
            .fill(1)
            .map((v, i) => v + i);
    }
    onCopy(str) {
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["copy"])(str).then(() => this.msg.success(`Copied Success!`));
    }
};
ColorsComponent.ctorParameters = () => [
    { type: _color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
];
ColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-colors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./colors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/colors/colors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./colors.component.less */ "./src/app/routes/style/colors/colors.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
], ColorsComponent);



/***/ }),

/***/ "./src/app/routes/style/gridmasonry/gridmasonry.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/routes/style/gridmasonry/gridmasonry.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .box-placeholder {\n  margin-bottom: 15px;\n  padding: 20px;\n  color: #444;\n  background: #fafafa;\n  border: 1px dashed #ddd;\n}\n:host ::ng-deep .box-placeholder > :last-child {\n  margin-bottom: 0;\n}\n:host ::ng-deep .box-placeholder-lg {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3N0eWxlL2dyaWRtYXNvbnJ5L0Y6L0JhaWR1WXVuRG93bmxvYWQvdGVzdC9uZy1hbGFpbi1tYXN0ZXIvc3JjL2FwcC9yb3V0ZXMvc3R5bGUvZ3JpZG1hc29ucnkvZ3JpZG1hc29ucnkuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3JvdXRlcy9zdHlsZS9ncmlkbWFzb25yeS9ncmlkbWFzb25yeS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUo7QUROQTtFQVFNLGdCQUFBO0FDQ047QURDSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9zdHlsZS9ncmlkbWFzb25yeS9ncmlkbWFzb25yeS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gIC5ib3gtcGxhY2Vob2xkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZGRkO1xuICAgID4gOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgJi1sZyB7XG4gICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgOjpuZy1kZWVwIC5ib3gtcGxhY2Vob2xkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogIzQ0NDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNkZGQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJveC1wbGFjZWhvbGRlciA+IDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYm94LXBsYWNlaG9sZGVyLWxnIHtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/style/gridmasonry/gridmasonry.component.ts ***!
  \*******************************************************************/
/*! exports provided: GridMasonryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMasonryComponent", function() { return GridMasonryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GridMasonryComponent = class GridMasonryComponent {
};
GridMasonryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gridmasonry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gridmasonry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/gridmasonry/gridmasonry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gridmasonry.component.less */ "./src/app/routes/style/gridmasonry/gridmasonry.component.less")).default]
    })
], GridMasonryComponent);



/***/ }),

/***/ "./src/app/routes/style/style-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/style/style-routing.module.ts ***!
  \******************************************************/
/*! exports provided: StyleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRoutingModule", function() { return StyleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gridmasonry/gridmasonry.component */ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/routes/style/typography/typography.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/routes/style/colors/colors.component.ts");






const routes = [
    { path: 'gridmasonry', component: _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_3__["GridMasonryComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__["TypographyComponent"] },
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"] },
];
let StyleRoutingModule = class StyleRoutingModule {
};
StyleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StyleRoutingModule);



/***/ }),

/***/ "./src/app/routes/style/style.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/style/style.module.ts ***!
  \**********************************************/
/*! exports provided: StyleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleModule", function() { return StyleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _style_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-routing.module */ "./src/app/routes/style/style-routing.module.ts");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color.service */ "./src/app/routes/style/color.service.ts");
/* harmony import */ var _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gridmasonry/gridmasonry.component */ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/routes/style/typography/typography.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/routes/style/colors/colors.component.ts");








const COMPONENTS = [_gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_5__["GridMasonryComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"], _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__["ColorsComponent"]];
const COMPONENTS_NOROUNT = [];
let StyleModule = class StyleModule {
};
StyleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _style_routing_module__WEBPACK_IMPORTED_MODULE_3__["StyleRoutingModule"]],
        providers: [_color_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"]],
        declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
        entryComponents: COMPONENTS_NOROUNT,
    })
], StyleModule);



/***/ }),

/***/ "./src/app/routes/style/typography/typography.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/style/typography/typography.component.ts ***!
  \*****************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color.service */ "./src/app/routes/style/color.service.ts");



let TypographyComponent = class TypographyComponent {
    constructor(c) {
        this.c = c;
    }
};
TypographyComponent.ctorParameters = () => [
    { type: _color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"] }
];
TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-typography',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/typography/typography.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"]])
], TypographyComponent);



/***/ })

}]);
//# sourceMappingURL=style-style-module-es2015.js.map