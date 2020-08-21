exports.ids = [4];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return deleteFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteComment; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
 // 获取首页公共的文章列表

const getArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取用户关注的文章列表

const getYourFeedArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 添加关注

const addFollow = username => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
}; // 取消关注

const deleteFollow = username => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
}; // 发表文章

const createArticle = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 更新文章详情

const updateArticle = (slug, data) => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 添加文章评论

const addComment = (slug, body) => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: {
      body
    }
  });
}; // 删除评论文章

const deleteComment = (slug, id) => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=ad1626bc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-ad1626bc>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-ad1626bc>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-ad1626bc>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-ad1626bc>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image?_vm.profile.image:'/smiley-cyrus.jpg'))+" class=\"user-img\" data-v-ad1626bc> <h4 data-v-ad1626bc>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p data-v-ad1626bc>"+_vm._ssrEscape(_vm._s(_vm.profile.bio))+"</p> "),(_vm.user.username===_vm.profile.username)?[_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Edit Profile Settings\n            ")])]:_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.profile.followDisabled))+" class=\"btn btn-sm btn-outline-secondary action-btn\" data-v-ad1626bc><i class=\"ion-plus-round\" data-v-ad1626bc></i>"+_vm._ssrEscape("\n               \n              "+_vm._s(_vm.profile.following?"Unfollow ":"Follow ")+_vm._s(_vm.profile.username)+"\n            ")+"</button>")],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-ad1626bc>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-ad1626bc>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-ad1626bc>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-ad1626bc>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-ad1626bc>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-ad1626bc>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active:_vm.tab==='My'},attrs:{"to":{name:'profile',params:{username: _vm.username}},"exact":""}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-ad1626bc>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active:_vm.tab==='Favorited'},attrs:{"exact":"","to":{name:'profile',query:{tab:'Favorited'},params:{username: _vm.username}}}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-ad1626bc>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-ad1626bc>","</div>",[_c('nuxt-link',{attrs:{"to":{name:'article',params:{slug:article.slug}}}},[_c('img',{attrs:{"src":article.author.image?article.author.image:'http://i.imgur.com/N4VcUeJ.jpg'}})]),_vm._ssrNode(" <div class=\"info\" data-v-ad1626bc><a href=\"#\" class=\"author\" data-v-ad1626bc>"+_vm._ssrEscape(_vm._s(article.author.username))+"</a> <span class=\"date\" data-v-ad1626bc>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span></div> <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-sm pull-xs-right",article.favorited?'btn-primary':'btn-outline-primary'))+" data-v-ad1626bc><i class=\"ion-heart\" data-v-ad1626bc></i>"+_vm._ssrEscape("\n              "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{name:'article',params:{slug:article.slug}}}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(tag,i){return _c('li',{key:i,staticClass:"tag-default tag-pill tag-outline"},[_vm._v(_vm._s(tag))])}),0)])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-ad1626bc>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-ad1626bc>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass(null,['page-item', {active:item===_vm.page}]))+" data-v-ad1626bc>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{name:'profile',query:{page:item,tab: _vm.tab},params:{username: _vm.username}}}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=ad1626bc&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(7);

// CONCATENATED MODULE: ./api/profile.js
 // 获取用户信息

const getProfiles = username => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};
// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: ["authenticated"],
  name: "profileIndex",
  watchQuery: ["tab", "page"],

  data() {
    return {};
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },

  async asyncData({
    params,
    query
  }) {
    try {
      const {
        tab = "My",
        page = 1
      } = query;
      const {
        username
      } = params;
      const limit = 10;
      const offset = (page - 1) * limit;
      const articleType = tab === "My" ? "author" : "favorited";
      const [profileRes, articlesRes] = await Promise.all([getProfiles(encodeURI(username)), Object(api_article["j" /* getArticles */])({
        limit,
        offset,
        [articleType]: username
      })]);
      const {
        profile
      } = profileRes.data;
      const {
        articles,
        articlesCount
      } = articlesRes.data;
      profile.followDisabled = false;
      articles.forEach(f => f.favoriteDisabled = false);
      return {
        tab,
        page,
        limit,
        profile,
        articles,
        articlesCount,
        username
      };
    } catch (err) {
      console.log(err);
    }
  },

  methods: {
    async onFollow(profile) {
      try {
        if (!profile.username) return this.$router.push("/login");
        profile.followDisabled = true; // 禁用点击

        if (profile.following) {
          // 取消关注
          await Object(api_article["h" /* deleteFollow */])(profile.username);
          profile.following = false;
        } else {
          // 添加关注
          await Object(api_article["c" /* addFollow */])(profile.username);
          profile.following = true;
        }

        profile.followDisabled = false; // 允许点击
      } catch (err) {
        console.log(err);
        profile.followDisabled = false; // 允许点击
      }
    },

    async onFavorite(article) {
      try {
        if (!this.profile.username) return this.$router.push("/login");
        article.favoriteDisabled = true; // 禁用点击

        if (article.favorited) {
          // 取消点赞
          await Object(api_article["g" /* deleteFavorite */])(article.slug);
          article.favorited = false;
          article.favoritesCount -= 1;
        } else {
          // 添加点赞
          await Object(api_article["b" /* addFavorite */])(article.slug);
          article.favorited = true;
          article.favoritesCount += 1;
        }

        article.favoriteDisabled = false; // 允许点击
      } catch (err) {
        console.log(err);
        article.favoriteDisabled = true; // 禁用点击
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ad1626bc",
  "13cf3e7f"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map