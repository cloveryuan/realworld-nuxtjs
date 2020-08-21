<template>
  <div class="col-xs-12 col-md-8 offset-md-2">
    <!-- 写评论 -->
    <form class="card comment-form">
      <div class="card-block">
        <textarea v-model="body" class="form-control" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button @click.prevent="addComment" class="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
    <!-- 评论展示区 -->
    <div class="card" v-for="item in comments" :key="item.id">
      <div class="card-block">
        <p class="card-text">{{item.body}}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          class="comment-author"
          :to="{
            name:'profile',
            params:{username:item.author.username}
          }"
        >
          <img :src="item.author.image" class="comment-author-img" />
        </nuxt-link>&nbsp;
        <nuxt-link
          class="comment-author"
          :to="{
            name:'profile',
            params:{username:item.author.username}
          }"
        >{{item.author.username}}</nuxt-link>
        <span class="date-posted">{{item.createdAt | date('MMM DD,YYYY')}}</span>
        <span class="mod-options" v-if="user.username===item.author.username" @click="deleteComment(item.id)">
          <i class="ion-trash-a"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments,addComment ,deleteComment} from "@/api/article.js";
export default {
  name: "ArticleComment",
  props: {
    article: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // 文章列表
      comments: [],
      body: "",
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
        const { data } = await getComments(this.article.slug);
        this.comments = data.comments;
      } catch (err) {
        console.log(err);
      }
    },
    async addComment(){
      if(!this.body) return
      try{
        const {data} = await addComment(this.article.slug,this.body)
        if(data.comment){
          this.comments.unshift(data.comment)
          this.body = ''
        }
     }catch(err){
       console.log(err)
     }
    },
    async deleteComment(commentId){
      try{
        const {data} = await deleteComment(this.article.slug,commentId)
        if(JSON.stringify(data)==="{}"){
          this.comments = this.comments.filter(f=> f.id!==commentId)
        }
     }catch(err){
       console.log(err)
     }
    },
  },
};
</script>

<style scoped>
</style>
