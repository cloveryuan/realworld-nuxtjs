<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{isLogin?'Sign in':'Sign up'}}</h1>
          <p class="text-xs-center">
            <!-- <a href>Have an account?</a> -->
            <nuxt-link to="/register" v-if="isLogin">Need an account?</nuxt-link>
            <nuxt-link to="/login" v-else>Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(message,field) in errors">
              <li v-for="(item,i) in message" :key="item+i">{{field}} {{item}}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                v-model="user.username"
                class="form-control form-control-lg"
                required
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.email"
                class="form-control form-control-lg"
                required
                type="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.password"
                class="form-control form-control-lg"
                type="password"
                required
                placeholder="Password"
                minlength="8"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">{{isLogin?'Sign in':'Sign up'}}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/api/user";

// 仅在客户端使用js-cookie
const Cookie = process.client?require('js-cookie'):undefined

export default {
  middleware:['notAuthenticated'],
  name: "LoginIndex",
  data() {
    return {
      user: {
        email: "",
        password: "",
        username: "",
      },
      errors: {},
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = this.isLogin
          ? await login({ user: this.user })
          : await register({ user: this.user });
        // 保存用户登录状态
        this.$store.commit('setUser',data.user)
        // 防止刷新页面store中数据丢失，这里存到cookie中，这样服务端也可以从cookie中拿到数据
        Cookie.set('user',data.user)
        this.$router.push("/");
      } catch (err) {
        // console.log('请求失败', err)
        console.dir(err);
        this.errors = err.response.data.errors;
      }
    },
  },
  components: {},
};
</script>

<style scoped>
</style>
