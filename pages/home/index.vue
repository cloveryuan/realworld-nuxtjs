<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user" class="nav-item">
                <nuxt-link :class="['nav-link',{active:tab === 'you_feed'}]" :to="{name:'home',query:{tab:'your_feed'}}" exact>Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :class="['nav-link',{active:tab === 'global_feed'}]" :to="{name:'home'}" exact>Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <a :class="['nav-link',{active:tab==='tag'}]" href="#">#{{tag}}</a>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article  in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link
                :to="{
                name:'profile',
                params:{username:article.author.username}
              }"
              >
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  class="author"
                  :to="{
                    name:'profile',
                    params:{username:article.author.username}
                  }"
                >{{article.author.username}}</nuxt-link>
                <span class="date">{{article.createdAt | date('MMM DD,YYYY')}}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{active:article.favorited}"
                @click="onFavorite(article)"
               :disabled="article.favoriteDisabled"
              >
                <i class="ion-heart"></i>
                {{article.favoritesCount}}
              </button>
            </div>
            <nuxt-link :to="{name:'article',params:{slug:article.slug}}" class="preview-link">
              <h1>{{article.title}}</h1>
              <p>{{article.description}}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
          <!-- 分页 -->
          <nav>
            <ul class="pagination">
              <li
                v-for="item in totalPage"
                :key="item"
                :class="['page-item', {active:item===page}]"
              >
                <nuxt-link class="page-link" :to="{name:'home',query:{page:item,tag,tab}}">{{item}}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                class="tag-pill tag-default"
                v-for="(tag,i) in tags"
                :key="i"
                :to="{name:'home',query:{tag,tab:'tag'}}"
              >{{tag}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  getArticles,
  getYourFeedArticles,
  addFavorite,
  deleteFavorite,
} from "@/api/article.js";
import { getTags } from "@/api/tag.js";
export default {
  name: "HomeIndex",
  watchQuery: ["page", "tag", "tab"],
  async asyncData({ query }) {
    try {
      const page = Number.parseInt(query.page || 1);
      const limit = 10;
      const tab = query.tab || "global_feed";
      const tag = query.tag;
      const loadArticles =
        tab !== "your_feed" ? getArticles : getYourFeedArticles;

      const [articleRes, tagRes] = await Promise.all([
        loadArticles({ limit, offset:(page - 1) * limit, tag }),
        getTags(),
      ]);
      const { articles, articlesCount } = articleRes.data;
      const { tags } = tagRes.data;
      articles.forEach((article) => (article.favoriteDisabled = false));
      return {
        limit,
        page,
        articles,
        articlesCount,
        tags,//标签集合
        tab,//选项卡
        tag,//标签
      };
    } catch (err) {
      console.dir(err);
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
    ...mapState(["user"])
  },
  methods: {
    async onFavorite(article) {
      if (!this.user) return this.$router.push("/login");
      article.favoriteDisabled = true; // 禁用点击
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        // 添加点赞
        await addFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      article.favoriteDisabled = false; // 允许点击
    },
  },
  components: {},
};
</script>

<style scoped>
</style>

