<template>
<!-- 文章 -->
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{article.title}}</h1>
       <article-meta :article="article" :username="user.username"/>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
        <ul class="tag-list">
          <li
            class="tag-default tag-pill tag-outline"
            v-for="tag in article.tagList"
            :key="tag"
          >{{tag}}</li>
        </ul>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article" :username="user.username"/>
      </div>

      <div class="row">
        <article-comments :article="article" :user="user" v-if="user"></article-comments>
      </div>
    </div>
  </div>
</template>
<script>
import { getArticle } from "@/api/article.js";
import { mapState } from "vuex";
import MarkdownIt from "markdown-it";
import ArticleMeta from './components/article-meta'
import ArticleComments from './components/article-comments'

export default {
  name: "ArticleIndx",
  async asyncData({ params }) {
    try {
      const { data } = await getArticle(params.slug);
      const { article } = data;
      const md = new MarkdownIt();
      article.body = md.render(article.body);
      article.favoriteDisabled = false
      article.followDisabled = false
      article.deleteDisabled = false
      return {
        article,
      };
    } catch (err) {
      console.log(err);
    }
  },
  components: {
    ArticleMeta,
    ArticleComments
  },
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: "description",//覆盖父组件大的meta
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {}
};
</script>

<style scoped>
</style>
