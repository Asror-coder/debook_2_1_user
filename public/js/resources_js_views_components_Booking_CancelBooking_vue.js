"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_components_Booking_CancelBooking_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/CancelBooking.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/CancelBooking.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: 'CancelBooking',
  data: function data() {
    return {
      id: this.$route.params.id,
      booking: null,
      message: ''
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('bookings', ['fetchActiveBookings', 'fetchNotActiveBookings'])), {}, {
    cancel: function cancel() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.put("/api/booking/cancel/".concat(_this.id)).then(function (response) {
                  if (response.data.message[0] == 'Success') {
                    _this.fetchActiveBookings();

                    _this.fetchNotActiveBookings();

                    _this.$router.push({
                      name: 'SuccessCancelBooking',
                      params: {
                        booking: _this.booking
                      }
                    });
                  } else _this.message = response.data.message[0];
                })["catch"](function (error) {
                  _this.message = error.response.data.message;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
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
  }),
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get("/api/booking/show/".concat(_this2.id)).then(function (response) {
                _this2.booking = response.data[0];
              })["catch"](function (error) {
                _this2.message = error.response.data.message;
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/views/components/Booking/CancelBooking.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/components/Booking/CancelBooking.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CancelBooking_vue_vue_type_template_id_aa93f462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CancelBooking.vue?vue&type=template&id=aa93f462& */ "./resources/js/views/components/Booking/CancelBooking.vue?vue&type=template&id=aa93f462&");
/* harmony import */ var _CancelBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CancelBooking.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Booking/CancelBooking.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CancelBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CancelBooking_vue_vue_type_template_id_aa93f462___WEBPACK_IMPORTED_MODULE_0__.render,
  _CancelBooking_vue_vue_type_template_id_aa93f462___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Booking/CancelBooking.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Booking/CancelBooking.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/components/Booking/CancelBooking.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CancelBooking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/CancelBooking.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Booking/CancelBooking.vue?vue&type=template&id=aa93f462&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/components/Booking/CancelBooking.vue?vue&type=template&id=aa93f462& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelBooking_vue_vue_type_template_id_aa93f462___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelBooking_vue_vue_type_template_id_aa93f462___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelBooking_vue_vue_type_template_id_aa93f462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CancelBooking.vue?vue&type=template&id=aa93f462& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/CancelBooking.vue?vue&type=template&id=aa93f462&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/CancelBooking.vue?vue&type=template&id=aa93f462&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Booking/CancelBooking.vue?vue&type=template&id=aa93f462& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.translation
      ? _c("div", { staticClass: "hidden md:grid grid-cols-4 gap-4" }, [
          _c("main", { staticClass: "col-span-2 col-start-2 mt-4 2xl:px-20" }, [
            _c("div", { staticClass: "flex flex-row" }, [
              _c(
                "div",
                { staticClass: "flex-none text-2xl text-white font-bold" },
                [_vm._v(_vm._s(_vm.translation.booking.cancelPage.title))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex-grow" }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "flex-none h-8 bg-red-500 text-white px-8 focus:outline-none hover:bg-red-600",
                  on: { click: _vm.cancel }
                },
                [
                  _vm._v(
                    " " + _vm._s(_vm.translation.booking.cancelPage.btn) + " "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm.message
              ? _c("div", { staticClass: "text-red-600 my-2" }, [
                  _vm._v(_vm._s(_vm.message))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "grid grid-cols-2 gap-4 my-4" }, [
              _vm.currentUser
                ? _c("div", { staticClass: "bg-white p-3" }, [
                    _c(
                      "div",
                      { staticClass: "text-lg font-bold text-gray-600" },
                      [_vm._v(_vm._s(_vm.translation.booking.about_you))]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "grid grid-cols-3" }, [
                      _c("div", [
                        _c(
                          "div",
                          { staticClass: "font-bold text-gray-500 mr-2" },
                          [_vm._v(_vm._s(_vm.translation.dashboard.name) + ":")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "font-bold text-gray-500 mr-2" },
                          [
                            _vm._v(
                              _vm._s(_vm.translation.dashboard.email) + ":"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "font-bold text-gray-500 mr-2" },
                          [
                            _vm._v(
                              _vm._s(_vm.translation.dashboard.phone) + ":"
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-span-2" }, [
                        _c("div", [
                          _vm._v(
                            " " +
                              _vm._s(_vm.currentUser.name) +
                              " " +
                              _vm._s(_vm.currentUser.lastname) +
                              " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(" " + _vm._s(_vm.currentUser.email) + " ")
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(" " + _vm._s(_vm.currentUser.phone) + " ")
                        ])
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.booking
                ? _c("div", { staticClass: "bg-white p-3" }, [
                    _c(
                      "div",
                      { staticClass: "text-lg font-bold text-gray-600" },
                      [_vm._v(_vm._s(_vm.translation.booking.about_booking))]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "grid grid-cols-3" }, [
                      _c("div", [
                        _c(
                          "div",
                          { staticClass: "font-bold text-gray-500 mr-2" },
                          [_vm._v("Club:")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "font-bold text-gray-500 mr-2" },
                          [_vm._v("Sport:")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "font-bold text-gray-500 mr-2" },
                          [_vm._v(_vm._s(_vm.translation.booking.venue) + ":")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "font-bold text-gray-500 mr-2" },
                          [_vm._v(_vm._s(_vm.translation.booking.date) + ":")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "font-bold text-gray-500 mr-2" },
                          [_vm._v(_vm._s(_vm.translation.booking.time) + ":")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "font-bold text-gray-500 mr-2" },
                          [_vm._v(_vm._s(_vm.translation.booking.price) + ":")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-span-2" }, [
                        _c("div", [
                          _vm._v(" " + _vm._s(_vm.booking.clubName) + " ")
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(" " + _vm._s(_vm.booking.sport) + " ")
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.booking.venueName) +
                              " (" +
                              _vm._s(_vm.booking.surface) +
                              ",\n                                "
                          ),
                          _vm.booking.indoor == 1
                            ? _c("span", [
                                _vm._v(_vm._s(_vm.translation.booking.indoor))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.booking.indoor == 0
                            ? _c("span", [
                                _vm._v(_vm._s(_vm.translation.booking.outdoor))
                              ])
                            : _vm._e(),
                          _vm._v(")\n                            ")
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            _vm._s(_vm.changeDateFormat(_vm.booking.date)) + " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm.changeTimeFormat(_vm.booking.start_time)
                              ) +
                              " - " +
                              _vm._s(
                                _vm.changeTimeFormat(_vm.booking.end_time)
                              ) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [_vm._v("€" + _vm._s(_vm.booking.price))])
                      ])
                    ])
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "bg-white p-3" }, [
              _c(
                "div",
                { staticClass: "text-lg font-bold text-gray-600 mb-2" },
                [_vm._v(_vm._s(_vm.translation.booking.payment))]
              ),
              _vm._v(" "),
              _c("div", [
                _vm._v(_vm._s(_vm.translation.booking.cancelPage.infoAmount))
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(_vm._s(_vm.translation.booking.cancelPage.infoDate))
              ])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.translation
      ? _c("div", { staticClass: "md:hidden px-3" }, [
          _c("div", { staticClass: "flex justify-between items-center my-3" }, [
            _c(
              "div",
              { staticClass: "flex-none text-2xl text-white font-bold" },
              [_vm._v(_vm._s(_vm.translation.booking.cancelPage.title))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "flex-none h-8 bg-red-500 text-white px-8 focus:outline-none rounded-lg",
                on: { click: _vm.cancel }
              },
              [
                _vm._v(
                  " " + _vm._s(_vm.translation.booking.cancelPage.btn) + " "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _vm.message
            ? _c("div", { staticClass: "text-red-600 my-2" }, [
                _vm._v(_vm._s(_vm.message))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.currentUser
            ? _c("div", { staticClass: "bg-white p-3 my-3 rounded-lg" }, [
                _c("div", { staticClass: "text-lg font-bold text-gray-600" }, [
                  _vm._v(_vm._s(_vm.translation.booking.about_you))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "grid grid-cols-3" }, [
                  _c("div", [
                    _c("div", { staticClass: "font-bold text-gray-500 mr-2" }, [
                      _vm._v(_vm._s(_vm.translation.dashboard.name) + ":")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-bold text-gray-500 mr-2" }, [
                      _vm._v(_vm._s(_vm.translation.dashboard.email) + ":")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-bold text-gray-500 mr-2" }, [
                      _vm._v(_vm._s(_vm.translation.dashboard.phone) + ":")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-span-2" }, [
                    _c("div", [
                      _vm._v(
                        " " +
                          _vm._s(_vm.currentUser.name) +
                          " " +
                          _vm._s(_vm.currentUser.lastname) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(" " + _vm._s(_vm.currentUser.email) + " ")
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(" " + _vm._s(_vm.currentUser.phone) + " ")
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.booking
            ? _c("div", { staticClass: "bg-white p-3 my-3 rounded-lg" }, [
                _c("div", { staticClass: "text-lg font-bold text-gray-600" }, [
                  _vm._v(_vm._s(_vm.translation.booking.about_booking))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "grid grid-cols-3" }, [
                  _c("div", [
                    _c("div", { staticClass: "font-bold text-gray-500 mr-2" }, [
                      _vm._v("Club:")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-bold text-gray-500 mr-2" }, [
                      _vm._v("Sport:")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-bold text-gray-500 mr-2" }, [
                      _vm._v(_vm._s(_vm.translation.booking.venue) + ":")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-bold text-gray-500 mr-2" }, [
                      _vm._v(_vm._s(_vm.translation.booking.date) + ":")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-bold text-gray-500 mr-2" }, [
                      _vm._v(_vm._s(_vm.translation.booking.time) + ":")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-bold text-gray-500 mr-2" }, [
                      _vm._v(_vm._s(_vm.translation.booking.price) + ":")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-span-2" }, [
                    _c("div", [
                      _vm._v(" " + _vm._s(_vm.booking.clubName) + " ")
                    ]),
                    _vm._v(" "),
                    _c("div", [_vm._v(" " + _vm._s(_vm.booking.sport) + " ")]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.booking.venueName) +
                          " (" +
                          _vm._s(_vm.booking.surface) +
                          ",\n                        "
                      ),
                      _vm.booking.indoor == 1
                        ? _c("span", [
                            _vm._v(_vm._s(_vm.translation.booking.indoor))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.booking.indoor == 0
                        ? _c("span", [
                            _vm._v(_vm._s(_vm.translation.booking.outdoor))
                          ])
                        : _vm._e(),
                      _vm._v(")\n                    ")
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(_vm.changeDateFormat(_vm.booking.date)) + " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.changeTimeFormat(_vm.booking.start_time)) +
                          " - " +
                          _vm._s(_vm.changeTimeFormat(_vm.booking.end_time)) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [_vm._v("€" + _vm._s(_vm.booking.price))])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "bg-white p-3 my-3 rounded-lg" }, [
            _c("div", { staticClass: "text-lg font-bold text-gray-600 mb-2" }, [
              _vm._v(_vm._s(_vm.translation.booking.payment))
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(_vm._s(_vm.translation.booking.cancelPage.infoAmount))
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(_vm._s(_vm.translation.booking.cancelPage.infoDate))
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);