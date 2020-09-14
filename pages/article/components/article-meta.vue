<template>
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
    <!-- 不是自己的 -->
    <span v-if="!isAuthor">
      <button
        :disabled="article.followDisabled"
        @click="onFollow(article)"
        class="btn btn-sm btn-outline-secondary"
        :class="{active:article.author.following}"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        {{article.author.following?`Unfollow&nbsp;`:`Follow `}}{{article.author.username}}
      </button>
      &nbsp;&nbsp;
      <button
        :disabled="article.favoriteDisabled"
        class="btn btn-sm btn-outline-primary"
        :class="{active:article.favorited}"
        @click="onFavorite(article)"
      >
        <i class="ion-heart"></i>
        &nbsp;
        {{article.favorited?'Unfavorite Article&nbsp;':'Favorite Article'}}
        <span
          class="counter"
          v-if="article.favoritesCount>0"
        >({{article.favoritesCount}})</span>
      </button>
    </span>
    <span v-else>
      <nuxt-link
        :to="{name:'editor',params:{slug:article.slug}}"
        exact
        class="btn btn-sm btn-outline-secondary"
      >
        <i class="ion-edit"></i>&nbsp;Edit Article
      </nuxt-link>
      <button :disabled="article.deleteDisabled" class="btn btn-outline-danger btn-sm" @click.prevent="deleteArticle(article)">
        <i class="ion-trash-a"></i>&nbsp;Delete Article
      </button>
    </span>
  </div>
</template>

<script>
import {
  addFollow,
  deleteFollow,
  deleteFavorite,
  addFavorite,
  deleteArticle
} from "@/api/article.js";
import { mapState } from "vuex";
export default {
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true,
    }
  },
    computed: {
    ...mapState(["user"]),
     isAuthor () {
      return this.article.author.username === this.user?.username
    }
  },
  data() {
    return {};
  },
  methods: {
    async onFollow(article) {
      try {
        if (!this.user) return this.$router.push("/login");
        article.followDisabled = true; // 禁用点击
        if (article.author.following) {
          // 取消关注
          await deleteFollow(article.author.username);
          article.author.following = false;
        } else {
          // 添加关注
          await addFollow(article.author.username);
          article.author.following = true;
        }
        article.followDisabled = false; // 允许点击
      } catch (err) {
        console.log(err);
      }
    },
    async onFavorite(article) {
      try {
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
      } catch (err) {
        console.log(err);
      }
    },
    async deleteArticle(article){
      try{
        article.deleteDisabled=true
        const {data} = await deleteArticle(article.slug);
        if(JSON.stringify(data)==="{}"){
          this.$router.push('/')
        }else{
          console.log('出错了');
        }
        article.deleteDisabled=false
      }catch(err){
         console.log(err);
      }
    }
  },
};
</script>

<style scoped>
</style>
