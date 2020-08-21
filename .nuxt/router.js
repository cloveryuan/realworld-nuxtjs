import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7bfac928 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _27482a5d = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _7c152caa = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _192f092a = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _0ae702a1 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _702bef6b = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _4b9a8290 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _7bfac928,
    children: [{
      path: "/",
      component: _27482a5d,
      name: "home"
    }, {
      path: "/login",
      component: _7c152caa,
      name: "login"
    }, {
      path: "/register",
      component: _7c152caa,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _192f092a,
      name: "profile"
    }, {
      path: "/settings",
      component: _0ae702a1,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _702bef6b,
      name: "editor"
    }, {
      path: "/article/:slug?",
      component: _4b9a8290,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
