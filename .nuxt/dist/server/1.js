exports.ids = [1];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=7f150763&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-7f150763>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-7f150763>","</div>",[_vm._ssrNode("<h1 data-v-7f150763>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article,"username":_vm.user.username}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-7f150763>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-7f150763><div class=\"col-md-12\" data-v-7f150763>"+(_vm._s(_vm.article.body))+"</div> <ul class=\"tag-list\" data-v-7f150763>"+(_vm._ssrList((_vm.article.tagList),function(tag){return ("<li class=\"tag-default tag-pill tag-outline\" data-v-7f150763>"+_vm._ssrEscape(_vm._s(tag))+"</li>")}))+"</ul></div> <hr data-v-7f150763> "),_vm._ssrNode("<div class=\"article-actions\" data-v-7f150763>","</div>",[_c('article-meta',{attrs:{"article":_vm.article,"username":_vm.user.username}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-7f150763>","</div>",[(_vm.user)?_c('article-comments',{attrs:{"article":_vm.article,"user":_vm.user}}):_vm._e()],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=7f150763&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=04f548de&scoped=true&
var article_metavue_type_template_id_04f548de_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name:'profile',
      params:{username:_vm.article.author.username}
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-04f548de>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name:'profile',
        params:{username:_vm.article.author.username}
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-04f548de>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMM DD,YYYY')))+"</span>")],2),_vm._ssrNode(" "),(_vm.article.author.username!==_vm.username)?_vm._ssrNode("<span data-v-04f548de>","</span>",[_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.article.followDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active:_vm.article.author.following}))+" data-v-04f548de><i class=\"ion-plus-round\" data-v-04f548de></i>"+_vm._ssrEscape("\n       \n      "+_vm._s(_vm.article.author.following?"Unfollow ":"Follow ")+_vm._s(_vm.article.author.username)+"\n    ")+"</button>\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.article.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active:_vm.article.favorited}))+" data-v-04f548de><i class=\"ion-heart\" data-v-04f548de></i>"+_vm._ssrEscape("\n       \n      "+_vm._s(_vm.article.favorited?'Unfavorite Article ':'Favorite Article')+"\n      ")+((_vm.article.favoritesCount>0)?("<span class=\"counter\" data-v-04f548de>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span>"):"<!---->")+"</button>")],2):_vm._ssrNode("<span data-v-04f548de>","</span>",[_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary",attrs:{"to":{name:'editor',params:{slug:_vm.article.slug}},"exact":""}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n    ")]),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.article.deleteDisabled))+" class=\"btn btn-outline-danger btn-sm\" data-v-04f548de><i class=\"ion-trash-a\" data-v-04f548de></i> Delete Article\n    </button>")],2)],2)}
var article_metavue_type_template_id_04f548de_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=04f548de&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },

  data() {
    return {};
  },

  methods: {
    async onFollow(article) {
      try {
        if (!this.username) return this.$router.push("/login");
        article.followDisabled = true; // 禁用点击

        if (article.author.following) {
          // 取消关注
          await Object(api_article["h" /* deleteFollow */])(article.author.username);
          article.author.following = false;
        } else {
          // 添加关注
          await Object(api_article["c" /* addFollow */])(article.author.username);
          article.author.following = true;
        }

        article.followDisabled = false; // 允许点击
      } catch (err) {
        console.log(err);
      }
    },

    async onFavorite(article) {
      try {
        if (!this.username) return this.$router.push("/login");
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
      }
    },

    async deleteArticle(article) {
      try {
        article.deleteDisabled = true;
        const {
          data
        } = await Object(api_article["e" /* deleteArticle */])(article.slug);

        if (JSON.stringify(data) === "{}") {
          this.$router.push('/');
        } else {
          console.log('出错了');
        }

        article.deleteDisabled = false;
      } catch (err) {
        console.log(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_04f548de_scoped_true_render,
  article_metavue_type_template_id_04f548de_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "04f548de",
  "50bfdbbc"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=0fd275e0&scoped=true&
var article_commentsvue_type_template_id_0fd275e0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-12 col-md-8 offset-md-2"},[_vm._ssrNode("<form class=\"card comment-form\" data-v-0fd275e0><div class=\"card-block\" data-v-0fd275e0><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-0fd275e0>"+_vm._ssrEscape(_vm._s(_vm.body))+"</textarea></div> <div class=\"card-footer\" data-v-0fd275e0><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\" data-v-0fd275e0> <button class=\"btn btn-sm btn-primary\" data-v-0fd275e0>Post Comment</button></div></form> "),_vm._l((_vm.comments),function(item){return _vm._ssrNode("<div class=\"card\" data-v-0fd275e0>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-0fd275e0><p class=\"card-text\" data-v-0fd275e0>"+_vm._ssrEscape(_vm._s(item.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-0fd275e0>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name:'profile',
          params:{username:item.author.username}
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":item.author.image}})]),_vm._ssrNode(" \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name:'profile',
          params:{username:item.author.username}
        }}},[_vm._v(_vm._s(item.author.username))]),_vm._ssrNode(" <span class=\"date-posted\" data-v-0fd275e0>"+_vm._ssrEscape(_vm._s(_vm._f("date")(item.createdAt,'MMM DD,YYYY')))+"</span> "+((_vm.user.username===item.author.username)?("<span class=\"mod-options\" data-v-0fd275e0><i class=\"ion-trash-a\" data-v-0fd275e0></i></span>"):"<!---->"))],2)],2)})],2)}
var article_commentsvue_type_template_id_0fd275e0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=0fd275e0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: "ArticleComment",
  props: {
    article: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      // 文章列表
      comments: [],
      body: ""
    };
  },

  mounted() {
    // 不要求SEO，请求数据放到mounted里面，只走客户端渲染
    this.getComments();
  },

  components: {},
  conputed: {},
  methods: {
    async getComments() {
      try {
        const {
          data
        } = await Object(api_article["k" /* getComments */])(this.article.slug);
        this.comments = data.comments;
      } catch (err) {
        console.log(err);
      }
    },

    async addComment() {
      if (!this.body) return;

      try {
        const {
          data
        } = await Object(api_article["a" /* addComment */])(this.article.slug, this.body);

        if (data.comment) {
          this.comments.unshift(data.comment);
          this.body = '';
        }
      } catch (err) {
        console.log(err);
      }
    },

    async deleteComment(commentId) {
      try {
        const {
          data
        } = await Object(api_article["f" /* deleteComment */])(this.article.slug, commentId);

        if (JSON.stringify(data) === "{}") {
          this.comments = this.comments.filter(f => f.id !== commentId);
        }
      } catch (err) {
        console.log(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_0fd275e0_scoped_true_render,
  article_commentsvue_type_template_id_0fd275e0_scoped_true_staticRenderFns,
  false,
  article_comments_injectStyles,
  "0fd275e0",
  "643b2cab"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "ArticleIndx",

  data() {
    return {};
  },

  async asyncData({
    params
  }) {
    try {
      const {
        data
      } = await Object(api_article["i" /* getArticle */])(params.slug);
      const {
        article
      } = data;
      const md = new external_markdown_it_default.a();
      article.body = md.render(article.body);
      article.favoriteDisabled = false;
      article.followDisabled = false;
      article.deleteDisabled = false;
      return {
        article
      };
    } catch (err) {
      console.log(err);
    }
  },

  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: "description",
        //覆盖父组件大的meta
        name: "description",
        content: this.article.description
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {}
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "7f150763",
  "29ab858c"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map