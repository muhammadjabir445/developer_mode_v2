(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/setting/color.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/setting/color.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/middleware */ \"./resources/js/mixins/middleware.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'users',\n  data: function data() {\n    return {\n      color: \"\",\n      swatches: [['#FF0000', '#AA0000', '#550000'], ['#FFFF00', '#AAAA00', '#555500'], ['#00FF00', '#00AA00', '#005500'], ['#00FFFF', '#00AAAA', '#005555'], ['#0000FF', '#0000AA', '#000055']],\n      snackbar: false,\n      text: 'My timeout is set to 2000.',\n      timeout: 2000\n    };\n  },\n  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapActions\"])({\n    setColor: 'color/setColor'\n  }), {\n    inputColor: function inputColor() {\n      this.setColor(this.color);\n      var varcolor = this.color;\n      var data = varcolor.replace('#', '%23');\n      this.axios.get(\"/setting-color?color=\".concat(data)).then(function (ress) {})[\"catch\"](function (err) {\n        console.log(err.response);\n      });\n    }\n  }),\n  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])({\n    color_get: 'color/color'\n  })),\n  created: function created() {\n    this.color = this.color_get;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL3NldHRpbmcvY29sb3IudnVlPzU1NzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0E7QUFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBO0FBQUE7QUFDQSxlQURBO0FBRUEsaUJBQ0EsaUNBREEsRUFFQSxpQ0FGQSxFQUdBLGlDQUhBLEVBSUEsaUNBSkEsRUFLQSxpQ0FMQSxDQUZBO0FBU0EscUJBVEE7QUFVQSx3Q0FWQTtBQVdBO0FBWEE7QUFBQSxHQUZBO0FBZ0JBLDZCQUNBO0FBQ0E7QUFEQSxJQURBO0FBSUEsY0FKQSx3QkFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUNBLElBREEsQ0FDQSxpQkFFQSxDQUhBLFdBSUE7QUFDQTtBQUNBLE9BTkE7QUFPQTtBQWhCQSxJQWhCQTtBQWtDQSw4QkFDQTtBQUNBO0FBREEsSUFEQSxDQWxDQTtBQXVDQSxTQXZDQSxxQkF1Q0E7QUFDQTtBQUNBO0FBekNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy92aWV3cy9zZXR0aW5nL2NvbG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHYtYXBwPlxuICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgICA8di1yb3c+XG4gICAgICAgICAgICAgICAgPHYtY29sXG4gICAgICAgICAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx2LWNvbG9yLXBpY2tlclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJpbnB1dENvbG9yKClcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hLTJcIlxuICAgICAgICAgICAgICAgICAgICBzaG93LXN3YXRjaGVzXG4gICAgICAgICAgICAgICAgPjwvdi1jb2xvci1waWNrZXI+XG4gICAgICAgICAgICAgICAgPC92LWNvbD5cblxuICAgICAgICAgICAgICAgIDwhLS0gPHYtY29sXG4gICAgICAgICAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgICAgICAgICBtZD1cIjZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICA8L3YtdGV4dC1maWVsZD5cblxuICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhdmFsaWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgdGlsZVxuICAgICAgICAgICAgICAgIEBjbGljaz1cInNhdmUoKVwiXG4gICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2ltcGFuXG4gICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtY29sPiAtLT5cbiAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgPC92LWFwcD5cblxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gJy4uLy4uL21peGlucy9taWRkbGV3YXJlJ1xuaW1wb3J0IHttYXBBY3Rpb25zLG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ3VzZXJzJyxcbiAgICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgIGNvbG9yOlwiXCIsXG4gICAgICBzd2F0Y2hlczogW1xuICAgICAgICBbJyNGRjAwMDAnLCAnI0FBMDAwMCcsICcjNTUwMDAwJ10sXG4gICAgICAgIFsnI0ZGRkYwMCcsICcjQUFBQTAwJywgJyM1NTU1MDAnXSxcbiAgICAgICAgWycjMDBGRjAwJywgJyMwMEFBMDAnLCAnIzAwNTUwMCddLFxuICAgICAgICBbJyMwMEZGRkYnLCAnIzAwQUFBQScsICcjMDA1NTU1J10sXG4gICAgICAgIFsnIzAwMDBGRicsICcjMDAwMEFBJywgJyMwMDAwNTUnXSxcbiAgICAgIF0sXG4gICAgICAgIHNuYWNrYmFyOiBmYWxzZSxcbiAgICAgIHRleHQ6ICdNeSB0aW1lb3V0IGlzIHNldCB0byAyMDAwLicsXG4gICAgICB0aW1lb3V0OiAyMDAwLFxuICAgIH0pLFxuXG4gICAgbWV0aG9kczp7XG4gICAgICAgIC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgc2V0Q29sb3I6J2NvbG9yL3NldENvbG9yJ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5wdXRDb2xvcigpIHtcblxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcih0aGlzLmNvbG9yKVxuICAgICAgICAgICAgbGV0IHZhcmNvbG9yID0gdGhpcy5jb2xvclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB2YXJjb2xvci5yZXBsYWNlKCcjJywnJTIzJylcbiAgICAgICAgICAgIHRoaXMuYXhpb3MuZ2V0KGAvc2V0dGluZy1jb2xvcj9jb2xvcj0ke2RhdGF9YClcbiAgICAgICAgICAgIC50aGVuKHJlc3M9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOntcbiAgICAgICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICAgICAgICBjb2xvcl9nZXQ6J2NvbG9yL2NvbG9yJ1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuY29sb3JfZ2V0XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/setting/color.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/setting/color.vue?vue&type=template&id=1ef5f275&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/setting/color.vue?vue&type=template&id=1ef5f275& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-app\",\n    [\n      _c(\n        \"v-container\",\n        [\n          _c(\n            \"v-row\",\n            [\n              _c(\n                \"v-col\",\n                { attrs: { cols: \"12\", align: \"center\" } },\n                [\n                  _c(\"v-color-picker\", {\n                    staticClass: \"ma-2\",\n                    attrs: { \"show-swatches\": \"\" },\n                    on: {\n                      input: function($event) {\n                        return _vm.inputColor()\n                      }\n                    },\n                    model: {\n                      value: _vm.color,\n                      callback: function($$v) {\n                        _vm.color = $$v\n                      },\n                      expression: \"color\"\n                    }\n                  })\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3Mvc2V0dGluZy9jb2xvci52dWU/NTIzZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyw4QkFBOEIsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy92aWV3cy9zZXR0aW5nL2NvbG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY1ZjI3NSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgYWxpZ246IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1jb2xvci1waWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYS0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwic2hvdy1zd2F0Y2hlc1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5pbnB1dENvbG9yKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29sb3IgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/setting/color.vue?vue&type=template&id=1ef5f275&\n");

/***/ }),

/***/ "./resources/js/views/setting/color.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/setting/color.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color_vue_vue_type_template_id_1ef5f275___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.vue?vue&type=template&id=1ef5f275& */ \"./resources/js/views/setting/color.vue?vue&type=template&id=1ef5f275&\");\n/* harmony import */ var _color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.vue?vue&type=script&lang=js& */ \"./resources/js/views/setting/color.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _color_vue_vue_type_template_id_1ef5f275___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _color_vue_vue_type_template_id_1ef5f275___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/views/setting/color.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3Mvc2V0dGluZy9jb2xvci52dWU/ZjA0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy92aWV3cy9zZXR0aW5nL2NvbG9yLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29sb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFlZjVmMjc1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29sb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxtdWhhbW1hZFxcXFxEZXNrdG9wXFxcXERldmVsb3BlclxcXFxkZXZlbG9wZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWVmNWYyNzUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWVmNWYyNzUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWVmNWYyNzUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY1ZjI3NSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxZWY1ZjI3NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL3NldHRpbmcvY29sb3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/views/setting/color.vue\n");

/***/ }),

/***/ "./resources/js/views/setting/color.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/setting/color.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./color.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/setting/color.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3Mvc2V0dGluZy9jb2xvci52dWU/ZTkzMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmlld3Mvc2V0dGluZy9jb2xvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb2xvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/views/setting/color.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/views/setting/color.vue?vue&type=template&id=1ef5f275&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/setting/color.vue?vue&type=template&id=1ef5f275& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_color_vue_vue_type_template_id_1ef5f275___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./color.vue?vue&type=template&id=1ef5f275& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/setting/color.vue?vue&type=template&id=1ef5f275&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_color_vue_vue_type_template_id_1ef5f275___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_color_vue_vue_type_template_id_1ef5f275___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3Mvc2V0dGluZy9jb2xvci52dWU/MjNkMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmlld3Mvc2V0dGluZy9jb2xvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWVmNWYyNzUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY1ZjI3NSZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/views/setting/color.vue?vue&type=template&id=1ef5f275&\n");

/***/ })

}]);