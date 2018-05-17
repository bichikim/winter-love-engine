import assign from '~/assign'
const CALL_NAME = '__vuex_init__'

/**
 * Set env in Vuex store
 * @param context
 */
export default (context) => {
  const {store, env} = context
  if(!process.browser){
    return
  }

  store.hotUpdate({
    mutations: {
      [CALL_NAME](state, payload) {
        assign(state, payload, {safeMode: true})
      },
    },
  })
  store.commit(CALL_NAME, env)
}
