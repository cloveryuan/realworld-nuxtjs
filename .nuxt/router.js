import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d6591cc = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _3954cc01 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _1d0606f2 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _5f56c747 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _1cc23245 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _3196b80f = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _46210a94 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3d6591cc,
    children: [{
      path: "/",
      component: _3954cc01,
      name: "home"
    }, {
      path: "/login",
      component: _1d0606f2,
      name: "login"
    }, {
      path: "/register",
      component: _1d0606f2,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _5f56c747,
      name: "profile"
    }, {
      path: "/settings",
      component: _1cc23245,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _3196b80f,
      name: "editor"
    }, {
      path: "/article/:slug?",
      component: _46210a94,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
