<template>
 <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>
        <ul class="error-messages">
          <template v-for="(messages, field) in errors">
            <li v-for="(message, index) in messages" :key="index">
              {{ field }} {{ messages}}
            </li>
          </template>
        </ul>
        <form>
          <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text" v-model="user.image" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name" >
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" v-model="user.bio" rows="8" placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="user.email" type="email" placeholder="Email" >
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" v-on:click.prevent="UpdateSettings" :disabled="updateDisabled">
                Update Settings
              </button>
          </fieldset>
        </form>
        <hr>
        <button class="btn btn-outline-danger" @click.prevent="logout">
          Or click here to logout.
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
const Cookie = process.client?require('js-cookie'):''
import {mapState} from "vuex"
import { updateUser } from '@/api/user'

export default {
  middleware:['authenticated'],
  name: 'settingsIndex',
  data () {
    return {
       user: {
        bio: '',
        email: '',
        image: '',
        password: '',
        username: ''
      },
      errors:{},
      updateDisabled:false
    }
  },
  computed:{
    ...mapState({storeUser:'user'})
  },
  mounted(){
    const { bio,email,image,password,username} = this.storeUser
    this.user = {bio,email,image,password,username}
  },
  methods: {
    async UpdateSettings(){
      try{
        this.updateDisabled=true
        const {data} = await updateUser({user:this.user})
        if(data&&data.user){
          // 更新客户端缓存数据
          this.$store.commit('setUser',data.user)
          // 更新服务端数据持久化
          Cookie.set('user',data.user)
          this.$router.push(`/profile/${data.user.username}`)
        }else{
          this.errors = {error:'出错了'}
        }
        this.updateDisabled=false
      }catch(err){
        this.errors = err.response.data.errors
        this.updateDisabled=false
      }
    },
    logout(){
      // 删除客户端缓存数据
      this.$store.commit('setUser',null)
      // 删除服务端数据持久化
      Cookie.set('user',null)
      this.$router.push('/')
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
