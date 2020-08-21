exports.ids = [6];
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=7cbd2872&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-7cbd2872><div class=\"row\" data-v-7cbd2872><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-7cbd2872><h1 class=\"text-xs-center\" data-v-7cbd2872>Your Settings</h1> <ul class=\"error-messages\" data-v-7cbd2872>"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-7cbd2872>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(messages)+"\n            ")+"</li>")})))}))+"</ul> <form data-v-7cbd2872><fieldset data-v-7cbd2872><fieldset class=\"form-group\" data-v-7cbd2872><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.user.image)))+" class=\"form-control\" data-v-7cbd2872></fieldset> <fieldset class=\"form-group\" data-v-7cbd2872><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-7cbd2872></fieldset> <fieldset class=\"form-group\" data-v-7cbd2872><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\" data-v-7cbd2872>"+_vm._ssrEscape(_vm._s(_vm.user.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-7cbd2872><input type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-7cbd2872></fieldset> <fieldset class=\"form-group\" data-v-7cbd2872><input type=\"password\" placeholder=\"Password\" class=\"form-control form-control-lg\" data-v-7cbd2872></fieldset> <button"+(_vm._ssrAttr("disabled",_vm.updateDisabled))+" class=\"btn btn-lg btn-primary pull-xs-right\" data-v-7cbd2872>\n                Update Settings\n              </button></fieldset></form> <hr data-v-7cbd2872> <button class=\"btn btn-outline-danger\" data-v-7cbd2872>\n          Or click here to logout.\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=7cbd2872&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const Cookie =  false ? undefined : '';


/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: ['authenticated'],
  name: 'settingsIndex',

  data() {
    return {
      user: {
        bio: '',
        email: '',
        image: '',
        password: '',
        username: ''
      },
      errors: {},
      updateDisabled: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      storeUser: 'user'
    })
  },

  mounted() {
    const {
      bio,
      email,
      image,
      password,
      username
    } = this.storeUser;
    this.user = {
      bio,
      email,
      image,
      password,
      username
    };
  },

  methods: {
    async UpdateSettings() {
      try {
        this.updateDisabled = true;
        const {
          data
        } = await Object(user["c" /* updateUser */])({
          user: this.user
        });

        if (data && data.user) {
          // 更新客户端缓存数据
          this.$store.commit('setUser', data.user); // 更新服务端数据持久化

          Cookie.set('user', data.user);
          this.$router.push(`/profile/${data.user.username}`);
        } else {
          this.errors = {
            error: '出错了'
          };
        }

        this.updateDisabled = false;
      } catch (err) {
        this.errors = err.response.data.errors;
        this.updateDisabled = false;
      }
    },

    logout() {
      // 删除客户端缓存数据
      this.$store.commit('setUser', null); // 删除服务端数据持久化

      Cookie.set('user', null);
      this.$router.push('/');
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7cbd2872",
  "ab51c72e"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map