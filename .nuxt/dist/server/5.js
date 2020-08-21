exports.ids = [5];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateUser; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
 // 用户登录

const login = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
}; // 修改用户资料

const updateUser = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=7eebf0fe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-7eebf0fe>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-7eebf0fe>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-7eebf0fe>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-7eebf0fe>"+_vm._ssrEscape(_vm._s(_vm.isLogin?'Sign in':'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-7eebf0fe>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-7eebf0fe>"+(_vm._ssrList((_vm.errors),function(message,field){return ((_vm._ssrList((message),function(item,i){return ("<li data-v-7eebf0fe>"+_vm._ssrEscape(_vm._s(field)+" "+_vm._s(item))+"</li>")})))}))+"</ul> <form data-v-7eebf0fe>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-7eebf0fe><input required=\"required\" type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-7eebf0fe></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-7eebf0fe><input required=\"required\" type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-7eebf0fe></fieldset> <fieldset class=\"form-group\" data-v-7eebf0fe><input type=\"password\" required=\"required\" placeholder=\"Password\" minlength=\"8\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-7eebf0fe></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-7eebf0fe>"+_vm._ssrEscape(_vm._s(_vm.isLogin?'Sign in':'Sign up'))+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=7eebf0fe&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // 仅在客户端使用js-cookie

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: ['notAuthenticated'],
  name: "LoginIndex",

  data() {
    return {
      user: {
        email: "",
        password: "",
        username: ""
      },
      errors: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === "login";
    }

  },
  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await Object(user["a" /* login */])({
          user: this.user
        }) : await Object(user["b" /* register */])({
          user: this.user
        }); // 保存用户登录状态

        this.$store.commit('setUser', data.user); // 防止刷新页面store中数据丢失，这里存到cookie中，这样服务端也可以从cookie中拿到数据

        Cookie.set('user', data.user);
        this.$router.push("/");
      } catch (err) {
        // console.log('请求失败', err)
        console.dir(err);
        this.errors = err.response.data.errors;
      }
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7eebf0fe",
  "4e4b763f"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map