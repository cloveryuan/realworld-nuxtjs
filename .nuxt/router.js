import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62cb4e68 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _4f0f5301 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _d9d954f2 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _168a3f72 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _33e13945 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _7a6901e2 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _48f5b8d8 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _62cb4e68,
    children: [{
      path: "/",
      component: _4f0f5301,
      name: "home"
    }, {
      path: "/login",
      component: _d9d954f2,
      name: "login"
    }, {
      path: "/register",
      component: _d9d954f2,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _168a3f72,
      name: "profile"
    }, {
      path: "/settings",
      component: _33e13945,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _7a6901e2,
      name: "editor"
    }, {
      path: "/article/:slug?",
      component: _48f5b8d8,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
