"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_components_Auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Register',
  data: function data() {
    return {
      form: {
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: ''
      },
      errors: []
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)('user', ['loginUser'])), {}, {
    register: function register() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/register', _this.form).then(function (response) {
                  _this.$router.push({
                    name: "RegisterSuccess"
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
    },
    checkUser: function checkUser() {
      if (localStorage.getItem('user')) {
        this.$router.push({
          name: "Dashboard"
        });
      }
    }
  }),
  created: function created() {
    this.checkUser();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[type=number][data-v-62332d70]::-webkit-inner-spin-button,\ninput[type=number][data-v-62332d70]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_62332d70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_62332d70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_62332d70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/components/Auth/Register.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/components/Auth/Register.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_62332d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=62332d70&scoped=true& */ "./resources/js/views/components/Auth/Register.vue?vue&type=template&id=62332d70&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_62332d70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css& */ "./resources/js/views/components/Auth/Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_62332d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_62332d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "62332d70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Auth/Register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/components/Auth/Register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Auth/Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/views/components/Auth/Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_62332d70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=style&index=0&id=62332d70&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/components/Auth/Register.vue?vue&type=template&id=62332d70&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/components/Auth/Register.vue?vue&type=template&id=62332d70&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_62332d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_62332d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_62332d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=62332d70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=template&id=62332d70&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=template&id=62332d70&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Auth/Register.vue?vue&type=template&id=62332d70&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass: "hidden md:grid grid-cols-4 gap-4 bg-cover",
        staticStyle: {
          "background-image":
            "url('https://debook.s3.eu-west-1.amazonaws.com/site_images/login-bg.jpeg')"
        }
      },
      [
        _c("div", { staticClass: "col-span-1" }),
        _vm._v(" "),
        _vm.translation
          ? _c(
              "main",
              {
                staticClass:
                  "col-span-2 flex justify-center md:my-4 2xl:px-20 2xl:py-10"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "flex flex-col w-10/12 bg-white p-6 shadow-xl"
                  },
                  [
                    _c("h1", { staticClass: "text-2xl text-center pb-5" }, [
                      _vm._v(_vm._s(_vm.translation.auth.register.title))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mx-10 text-gray-800" }, [
                      _vm._v(_vm._s(_vm.translation.auth.register.please))
                    ]),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        staticClass: "mx-10 my-2",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.register($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "mb-4" }, [
                          _c(
                            "label",
                            { staticClass: "sr-only", attrs: { for: "name" } },
                            [_vm._v("First Name")]
                          ),
                          _vm._v(" "),
                          _vm.errors.name
                            ? _c(
                                "span",
                                { staticClass: "w-full text-red-500" },
                                [_vm._v(" " + _vm._s(_vm.errors.name[0]) + " ")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.name,
                                expression: "form.name"
                              }
                            ],
                            staticClass:
                              "bg-gray-200 border-2 w-full p-2 focus:outline-none",
                            attrs: {
                              type: "text",
                              name: "name",
                              id: "name",
                              placeholder: _vm.translation.auth.register.first
                            },
                            domProps: { value: _vm.form.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "name", $event.target.value)
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
                              attrs: { for: "lastname" }
                            },
                            [_vm._v("Last name")]
                          ),
                          _vm._v(" "),
                          _vm.errors.lastname
                            ? _c(
                                "span",
                                { staticClass: "w-full text-red-500" },
                                [
                                  _vm._v(
                                    " " + _vm._s(_vm.errors.lastname[0]) + " "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.lastname,
                                expression: "form.lastname"
                              }
                            ],
                            staticClass:
                              "bg-gray-200 border-2 w-full p-2 focus:outline-none",
                            attrs: {
                              type: "text",
                              name: "lastname",
                              id: "lastname",
                              placeholder: _vm.translation.auth.register.last
                            },
                            domProps: { value: _vm.form.lastname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "lastname",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-4" }, [
                          _c(
                            "label",
                            { staticClass: "sr-only", attrs: { for: "email" } },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _vm.errors.email
                            ? _c(
                                "span",
                                { staticClass: "w-full text-red-500" },
                                [
                                  _vm._v(
                                    " " + _vm._s(_vm.errors.email[0]) + " "
                                  )
                                ]
                              )
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
                            { staticClass: "sr-only", attrs: { for: "phone" } },
                            [_vm._v("Phone")]
                          ),
                          _vm._v(" "),
                          _vm.errors.phone
                            ? _c(
                                "span",
                                { staticClass: "w-full text-red-500" },
                                [
                                  _vm._v(
                                    " " + _vm._s(_vm.errors.phone[0]) + " "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.phone,
                                expression: "form.phone"
                              }
                            ],
                            staticClass:
                              "bg-gray-200 border-2 w-full p-2 focus:outline-none",
                            attrs: {
                              type: "number",
                              name: "phone",
                              id: "phone",
                              placeholder: _vm.translation.auth.register.phone
                            },
                            domProps: { value: _vm.form.phone },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "phone", $event.target.value)
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
                              attrs: { for: "password" }
                            },
                            [_vm._v("Password")]
                          ),
                          _vm._v(" "),
                          _vm.errors.password
                            ? _c(
                                "span",
                                { staticClass: "w-full text-red-500" },
                                [
                                  _vm._v(
                                    " " + _vm._s(_vm.errors.password[0]) + " "
                                  )
                                ]
                              )
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
                                _vm.$set(
                                  _vm.form,
                                  "password",
                                  $event.target.value
                                )
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
                                  return _vm.register($event)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.translation.auth.register.btn))]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "col-span-1" })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "md:hidden bg-cover px-3 py-10",
        staticStyle: {
          "background-image":
            "url('https://debook.s3.eu-west-1.amazonaws.com/site_images/login-bg.jpeg')"
        }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "flex flex-col w-full bg-white p-6 rounded-lg shadow-xl"
          },
          [
            _c("h1", { staticClass: "text-2xl text-center pb-5" }, [
              _vm._v(_vm._s(_vm.translation.auth.register.title))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-gray-600" }, [
              _vm._v(_vm._s(_vm.translation.auth.register.please))
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "my-2",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.register($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "sr-only", attrs: { for: "name" } },
                    [_vm._v("First Name")]
                  ),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("span", { staticClass: "w-full text-red-500" }, [
                        _vm._v(" " + _vm._s(_vm.errors.name[0]) + " ")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    staticClass:
                      "bg-gray-200 border-2 w-full p-2 focus:outline-none",
                    attrs: {
                      type: "text",
                      name: "name",
                      id: "name",
                      placeholder: _vm.translation.auth.register.first
                    },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "sr-only", attrs: { for: "lastname" } },
                    [_vm._v("Last name")]
                  ),
                  _vm._v(" "),
                  _vm.errors.lastname
                    ? _c("span", { staticClass: "w-full text-red-500" }, [
                        _vm._v(" " + _vm._s(_vm.errors.lastname[0]) + " ")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.lastname,
                        expression: "form.lastname"
                      }
                    ],
                    staticClass:
                      "bg-gray-200 border-2 w-full p-2 focus:outline-none",
                    attrs: {
                      type: "text",
                      name: "lastname",
                      id: "lastname",
                      placeholder: _vm.translation.auth.register.last
                    },
                    domProps: { value: _vm.form.lastname },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "lastname", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
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
                    { staticClass: "sr-only", attrs: { for: "phone" } },
                    [_vm._v("Phone")]
                  ),
                  _vm._v(" "),
                  _vm.errors.phone
                    ? _c("span", { staticClass: "w-full text-red-500" }, [
                        _vm._v(" " + _vm._s(_vm.errors.phone[0]) + " ")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.phone,
                        expression: "form.phone"
                      }
                    ],
                    staticClass:
                      "bg-gray-200 border-2 w-full p-2 focus:outline-none",
                    attrs: {
                      type: "number",
                      name: "phone",
                      id: "phone",
                      placeholder: _vm.translation.auth.register.phone
                    },
                    domProps: { value: _vm.form.phone },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "phone", $event.target.value)
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
                        "bg-blue-500 rounded-md shadow-lg text-white p-2 font-medium w-full",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.register($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.translation.auth.register.btn))]
                  )
                ])
              ]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);