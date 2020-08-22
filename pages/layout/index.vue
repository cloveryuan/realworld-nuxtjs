<template>
  <div>
    <!-- 顶部导航 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/" exact>conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{
                name:'profile',
                params:{username:user.username}
              }"
              >
                <img :src="user.image" class="user-pic" />
                {{user.username}}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click.prevent="logout">退出</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <!-- 子路由出口 -->
    <nuxt-child></nuxt-child>

    <!-- 底部 -->
    <footer>
      <div class="container">
        <nuxt-link to="/" class="logo-font">conduit</nuxt-link>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
const Cookie = process.client ? require("js-cookie") : "";
export default {
  name: "LayoutIndex",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    logout() {
      // 删除客户端缓存数据
      this.$store.commit("setUser", null);
      // 删除服务端数据持久化
      Cookie.set("user", null);
      this.$router.push("/");
    },
  },
  components: {},
};
</script>

<style scoped>
</style>
