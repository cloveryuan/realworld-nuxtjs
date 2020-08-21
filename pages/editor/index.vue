<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input type="text" required v-model="article.title" class="form-control form-control-lg" placeholder="Article Title" />
              </fieldset>
              <fieldset class="form-group">
                <input type="text" required v-model="article.description" class="form-control" placeholder="What's this article about?" />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  required
                  v-model="article.body"
                  v-html="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control" v-model="newTag" placeholder="Enter tags" v-on:keyup.enter="enterTag"/>
                <div class="tag-list">
                  <span v-for="(tag,i) in article.tagList" class="tag-default tag-pill" :key="i">
                    <i class="ion-close-round" @click="removeTag(i)"></i>
                    {{tag}}
                </span>
                </div>
              </fieldset>
              <button :disabled="publishDisabled" class="btn btn-lg pull-xs-right btn-primary" type="button" @click.prevent="submitArticle">Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle,updateArticle,createArticle } from "@/api/article.js";
export default {
  middleware: ["authenticated"],
  name: "EditorArticle",
  data() {
    return {
      newTag:'',
      publishDisabled:false,
      article: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
    };
  },
  components: {},
  mounted() {
    this.getArticle();
  },
  computed:{
    slug(){
      return  this.$route.params.slug
    }
  },
  methods: {
    async getArticle() {
      try {
        if (!this.slug) return;
        const { data } = await getArticle(this.slug);
        this.article = data.article
      } catch (err) {
        console.log(err);
      }
    },
    enterTag(){
      this.article.tagList.push(this.newTag)
      this.newTag = ''
    },
    removeTag(i){
      this.article.tagList.splice(i,1)
    },
    async submitArticle () {
      try{
        this.publishDisabled=true
        const {data} = this.slug? await updateArticle(this.slug,this.article): await createArticle(this.article)
        if(data.article){
          this.article = data.article
          this.$router.push({
            name:'article',
            params:{
              slug:this.article.slug
            }
          })
        }else{
          console.log('出错了')
        }
        this.publishDisabled=false
      }catch(err){
        console.log(err)
      }
    }
  },
};
</script>

<style scoped>
</style>
