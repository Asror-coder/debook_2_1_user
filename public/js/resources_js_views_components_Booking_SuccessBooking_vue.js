(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_components_Booking_SuccessBooking_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SuccessBooking',
  data: function data() {
    return {
      booking: Object
    };
  },
  methods: {
    changeTimeFormat: function changeTimeFormat(time) {
      if (time) {
        if (time.toString().length > 1) return time + ':00';else return '0' + time + ':00';
      }
    },
    changeDateFormat: function changeDateFormat(date) {
      if (date) {
        var dateArr = date.split('-');
        if (dateArr[1] == '01') return dateArr[2] + ' January, ' + dateArr[0];else if (dateArr[1] == '02') return dateArr[2] + ' February, ' + dateArr[0];else if (dateArr[1] == '03') return dateArr[2] + ' March, ' + dateArr[0];else if (dateArr[1] == '04') return dateArr[2] + ' April, ' + dateArr[0];else if (dateArr[1] == '05') return dateArr[2] + ' May, ' + dateArr[0];else if (dateArr[1] == '06') return dateArr[2] + ' June, ' + dateArr[0];else if (dateArr[1] == '07') return dateArr[2] + ' July, ' + dateArr[0];else if (dateArr[1] == '08') return dateArr[2] + ' August, ' + dateArr[0];else if (dateArr[1] == '09') return dateArr[2] + ' September, ' + dateArr[0];else if (dateArr[1] == '10') return dateArr[2] + ' October, ' + dateArr[0];else if (dateArr[1] == '11') return dateArr[2] + ' November, ' + dateArr[0];else if (dateArr[1] == '12') return dateArr[2] + ' December, ' + dateArr[0];
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.$route.params.booking) _this.$router.push('/notfound');else _this.booking = _this.$route.params.booking;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/views/components/Booking/SuccessBooking.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/components/Booking/SuccessBooking.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SuccessBooking_vue_vue_type_template_id_ea552194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuccessBooking.vue?vue&type=template&id=ea552194& */ "./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=template&id=ea552194&");
/* harmony import */ var _SuccessBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuccessBooking.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SuccessBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SuccessBooking_vue_vue_type_template_id_ea552194___WEBPACK_IMPORTED_MODULE_0__.render,
  _SuccessBooking_vue_vue_type_template_id_ea552194___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Booking/SuccessBooking.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SuccessBooking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=template&id=ea552194&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=template&id=ea552194& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessBooking_vue_vue_type_template_id_ea552194___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessBooking_vue_vue_type_template_id_ea552194___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessBooking_vue_vue_type_template_id_ea552194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SuccessBooking.vue?vue&type=template&id=ea552194& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=template&id=ea552194&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=template&id=ea552194&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/SuccessBooking.vue?vue&type=template&id=ea552194& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "grid grid-cols-4 gap-4" }, [
    _c("div", { staticClass: "col-span-1" }),
    _vm._v(" "),
    _c("main", { staticClass: "col-span-2 my-5" }, [
      _c("div", { staticClass: "text-2xl font-bold" }, [
        _vm._v("Your booking was successful")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text text-gray-500" }, [
        _vm._v("Now, it can be seen in your dashboard")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "grid grid-cols-2 gap-4 my-4" }, [
        _c("div", { staticClass: "bg-blue-100 p-3" }, [
          _c("div", { staticClass: "text-lg font-bold text-gray-600" }, [
            _vm._v("Information about booking")
          ]),
          _vm._v(" "),
          _c("div", [
            _c("span", { staticClass: "font-bold text-gray-500 mr-2" }, [
              _vm._v("Club: ")
            ]),
            _vm._v(
              "\n                        " +
                _vm._s(_vm.booking.clubName) +
                "\n                    "
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c("span", { staticClass: "font-bold text-gray-500 mr-2" }, [
              _vm._v("Phone: ")
            ]),
            _vm._v(
              "\n                        " +
                _vm._s(_vm.booking.clubPhone) +
                "\n                    "
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c("span", { staticClass: "font-bold text-gray-500 mr-2" }, [
              _vm._v("Sport: ")
            ]),
            _vm._v(
              "\n                        " +
                _vm._s(_vm.booking.sport_type) +
                "\n                    "
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c("span", { staticClass: "font-bold text-gray-500 mr-2" }, [
              _vm._v("Venue: ")
            ]),
            _vm._v(
              "\n                        " +
                _vm._s(_vm.booking.venueName) +
                " (" +
                _vm._s(_vm.booking.surface) +
                ",\n                        "
            ),
            _vm.booking.indoor == 1 ? _c("span", [_vm._v("indoor")]) : _vm._e(),
            _vm._v(" "),
            _vm.booking.indoor == 0
              ? _c("span", [_vm._v("outdoor")])
              : _vm._e(),
            _vm._v(")\n                    ")
          ]),
          _vm._v(" "),
          _c("div", [
            _c("span", { staticClass: "font-bold text-gray-500 mr-2" }, [
              _vm._v("Date: ")
            ]),
            _vm._v(
              "\n                        " +
                _vm._s(_vm.changeDateFormat(_vm.booking.date)) +
                "\n                    "
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c("span", { staticClass: "font-bold text-gray-500 mr-2" }, [
              _vm._v("Time: ")
            ]),
            _vm._v(
              "\n                        " +
                _vm._s(_vm.changeTimeFormat(_vm.booking.start_time)) +
                " - " +
                _vm._s(_vm.changeTimeFormat(_vm.booking.end_time)) +
                "\n                    "
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c("span", { staticClass: "font-bold text-gray-500 mr-2" }, [
              _vm._v("Price: ")
            ]),
            _vm._v(
              "\n                        €" +
                _vm._s(_vm.booking.price) +
                "\n                    "
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-span-1" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-blue-100 p-3" }, [
      _c("div", { staticClass: "text-lg font-bold text-gray-600" }, [
        _vm._v("Some rules")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-2" }, [
        _c("span", { staticClass: "font-bold text-gray-500 mr-2" }, [
          _vm._v("Be on time: ")
        ]),
        _vm._v(
          "\n                        Please, come to the club at least 10 minutes before the actual start of your booking.\n                    "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-2" }, [
        _c("span", { staticClass: "font-bold text-gray-500 mr-2" }, [
          _vm._v("Bring all equipment: ")
        ]),
        _vm._v(
          "\n                        Don't forget to bring all needed equipment with you.\n                    "
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _c("span", { staticClass: "font-bold text-gray-500 mr-2" }, [
          _vm._v("Have fun: ")
        ]),
        _vm._v(
          "\n                        Most importantly, have fun and enjoy the game!\n                    "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);