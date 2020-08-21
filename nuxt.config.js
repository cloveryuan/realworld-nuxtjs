/**
 * Nuxt.js配置
 */
module.exports = {
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    linkActiveClass: "active", //激活路由添加的class名字
    // 自定义路由表规则
    extendRoutes(routes, resolve) {
      // 清除Nuxt.js基于pages目录生成的路由表规则
      routes.splice(0);
      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/layout"),
            children: [
              {
                name: "home",
                path: "/", //默认子路由
                component: resolve(__dirname, "pages/home"),
              },
              {
                name: "login",
                path: "/login",
                component: resolve(__dirname, "pages/login"),
              },
              {
                name: "register",
                path: "/register",
                component: resolve(__dirname, "pages/login"),
              },
              {
                name: "profile",
                path: "/profile/:username",
                component: resolve(__dirname, "pages/profile"),
              },
              {
                name: "settings",
                path: "/settings",
                component: resolve(__dirname, "pages/settings"),
              },
              {
                name: "editor",
                path: "/editor/:slug?",
                component: resolve(__dirname, "pages/editor"),
              },
              {
                name: "article",
                path: "/article/:slug?",
                component: resolve(__dirname, "pages/article"),
              },
            ],
          },
        ]
      );
    }
  },
  server:{
    host:'0.0.0.0',//默认为localhost，只能本地访问，想对外也能访问，要设置成0.0.0.0 （0.0.0.0监听所有外网地址。在生产环境服务器上外网环境就能访问到了，在本地的话，局域网都能访问到了）
    port:2020
  },
  // 插件注册
  plugins: [
    '~/plugins/request.js', // 波浪线开头表示从根路径触发
    '~/plugins/dayjs.js'
  ]
};
