import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _c449eff4 = () => import('..\\node_modules\\winter-love\\src\\pages\\auth\\index.vue' /* webpackChunkName: "pages_auth_index" */).then(m => m.default || m)
const _0265fd63 = () => import('..\\node_modules\\winter-love\\src\\pages\\test\\WhiteSpace.vue' /* webpackChunkName: "pages_test_WhiteSpace" */).then(m => m.default || m)
const _c2b295ce = () => import('..\\node_modules\\winter-love\\src\\pages\\test\\keg-request.vue' /* webpackChunkName: "pages_test_keg-request" */).then(m => m.default || m)
const _4da30fe1 = () => import('..\\node_modules\\winter-love\\src\\pages\\test\\FullScreen.vue' /* webpackChunkName: "pages_test_FullScreen" */).then(m => m.default || m)
const _4f1625d7 = () => import('..\\node_modules\\winter-love\\src\\pages\\test\\DecoratorTest.vue' /* webpackChunkName: "pages_test_DecoratorTest" */).then(m => m.default || m)
const _b297fc7c = () => import('..\\node_modules\\winter-love\\src\\pages\\test\\InjectScript.vue' /* webpackChunkName: "pages_test_InjectScript" */).then(m => m.default || m)
const _1a8c46b6 = () => import('..\\node_modules\\winter-love\\src\\pages\\test\\Lottie.vue' /* webpackChunkName: "pages_test_Lottie" */).then(m => m.default || m)
const _6b5c85a4 = () => import('..\\node_modules\\winter-love\\src\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/auth",
			component: _c449eff4,
			name: "auth"
		},
		{
			path: "/test/WhiteSpace",
			component: _0265fd63,
			name: "test-WhiteSpace"
		},
		{
			path: "/test/keg-request",
			component: _c2b295ce,
			name: "test-keg-request"
		},
		{
			path: "/test/FullScreen",
			component: _4da30fe1,
			name: "test-FullScreen"
		},
		{
			path: "/test/DecoratorTest",
			component: _4f1625d7,
			name: "test-DecoratorTest"
		},
		{
			path: "/test/InjectScript",
			component: _b297fc7c,
			name: "test-InjectScript"
		},
		{
			path: "/test/Lottie",
			component: _1a8c46b6,
			name: "test-Lottie"
		},
		{
			path: "/",
			component: _6b5c85a4,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
