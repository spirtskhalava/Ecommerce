import { createStore } from 'vuex';
import cart from './cart'
export default createStore({
    state: {
        layout: 'DefaultLayout'
    },
    mutations: {
        SET_LAYOUT(state, payload) {
            state.layout = payload;
        }
    },
    getters: {
        currentLayout: state => state.layout
    },
    actions: {},
    modules: {
        cart

    }
});