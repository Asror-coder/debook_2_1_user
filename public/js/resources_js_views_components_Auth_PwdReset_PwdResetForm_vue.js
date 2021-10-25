"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_components_Auth_PwdReset_PwdResetForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PwdResetForm',
  data: function data() {
    return {
      form: {
        token: this.$route.params.token,
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: []
    };
  },
  methods: {
    sendRequest: function sendRequest() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/api/reset-password', _this.form).then(function (response) {
                  _this.$router.push({
                    name: "PwdResetSuccess"
                  });
                })["catch"](function (error) {
                  _this.errors = error.response.data.errors;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PwdResetForm_vue_vue_type_template_id_2b153476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PwdResetForm.vue?vue&type=template&id=2b153476& */ "./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=template&id=2b153476&");
/* harmony import */ var _PwdResetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PwdResetForm.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PwdResetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PwdResetForm_vue_vue_type_template_id_2b153476___WEBPACK_IMPORTED_MODULE_0__.render,
  _PwdResetForm_vue_vue_type_template_id_2b153476___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Auth/PwdReset/PwdResetForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PwdResetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PwdResetForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PwdResetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=template&id=2b153476&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=template&id=2b153476& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PwdResetForm_vue_vue_type_template_id_2b153476___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PwdResetForm_vue_vue_type_template_id_2b153476___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PwdResetForm_vue_vue_type_template_id_2b153476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PwdResetForm.vue?vue&type=template&id=2b153476& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=template&id=2b153476&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=template&id=2b153476&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/PwdReset/PwdResetForm.vue?vue&type=template&id=2b153476& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "grid grid-cols-4 gap-4" }, [
    _c("div", { staticClass: "col-span-1" }),
    _vm._v(" "),
    _vm.translation
      ? _c("main", { staticClass: "col-span-2 flex justify-center mt-16" }, [
          _c(
            "div",
            { staticClass: "flex flex-col w-10/12 bg-white p-6 shadow-xl" },
            [
              _c("h1", { staticClass: "text-2xl text-center pb-5" }, [
                _vm._v(_vm._s(_vm.translation.auth.forgot.resetTitle))
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "mx-10 my-2",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.sendRequest($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "mb-4" }, [
                    _c(
                      "label",
                      { staticClass: "sr-only", attrs: { for: "email" } },
                      [_vm._v("Email")]
                    ),
                    _vm._v(" "),
                    _vm.errors.email
                      ? _c("span", { staticClass: "w-full text-red-500" }, [
                          _vm._v(" " + _vm._s(_vm.errors.email[0]) + " ")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email"
                        }
                      ],
                      staticClass:
                        "bg-gray-200 border-2 w-full p-2 focus:outline-none",
                      attrs: {
                        type: "text",
                        name: "email",
                        id: "email",
                        placeholder: _vm.translation.auth.email
                      },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-4" }, [
                    _c(
                      "label",
                      { staticClass: "sr-only", attrs: { for: "password" } },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _vm.errors.password
                      ? _c("span", { staticClass: "w-full text-red-500" }, [
                          _vm._v(" " + _vm._s(_vm.errors.password[0]) + " ")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password,
                          expression: "form.password"
                        }
                      ],
                      staticClass:
                        "bg-gray-200 border-2 w-full p-2 focus:outline-none",
                      attrs: {
                        type: "password",
                        name: "password",
                        id: "password",
                        placeholder: _vm.translation.auth.pwd
                      },
                      domProps: { value: _vm.form.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "password", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-4" }, [
                    _c(
                      "label",
                      {
                        staticClass: "sr-only",
                        attrs: { for: "password_confirmation" }
                      },
                      [_vm._v("Password again")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password_confirmation,
                          expression: "form.password_confirmation"
                        }
                      ],
                      staticClass:
                        "bg-gray-200 border-2 w-full p-2 focus:outline-none",
                      attrs: {
                        type: "password",
                        name: "password_confirmation",
                        id: "password_confirmation",
                        placeholder: _vm.translation.auth.repPwd
                      },
                      domProps: { value: _vm.form.password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "password_confirmation",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "bg-blue-500 text-white p-2 font-medium w-full",
                        attrs: { type: "submit" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.sendRequest($event)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.translation.auth.forgot.submit))]
                    )
                  ])
                ]
              )
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "col-span-1" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);