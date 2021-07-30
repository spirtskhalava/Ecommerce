import { createStore } from 'vuex'

export default createStore({
    state: {
        layout: 'DefaultLayout'
    },
    mutations: {
        SET_LAYOUT(state, payload) {
            state.layout = payload;
        }
    },
    actions: {},
    modules: {}
})