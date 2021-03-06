export default {
    namespaced: true,
    state() {
        return {
            list: []
        };
    },
    mutations: {
        add(state, product) {
            const foundItem = state.list.find(item => item.id == product.id);
            if (foundItem) {
                foundItem.quantity++;
            } else {
                product.quantity = 1;
                state.list.push(product);
            }
            localStorage.setItem('foundItem', JSON.stringify(state.list));
        },
        set(state, list) {
            state.list = list;
        },
        decrease(state, product) {
            const item = state.list.find(item => item.id == product.id);
            if (item.quantity == 1) {
                state.list = state.list.filter(item => item.id !== product.id);
            } else {
                item.quantity--;
            }
        },
        remove(state, id) {
            state.list = state.list.filter(item => item.id !== id);
        }
    },
    getters: {
        total(state) {
            // let sum = 0;
            // state.list.forEach((single) => {
            //     sum += single.quantity * single.price;
            // });
            // return sum;
            return state.list.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        productIds(state) {
            return state.list.map(product => product.id);
        }
    },
    actions: {
        add(context, product) {
            context.commit('add', product);
            context.dispatch('Notification/add', { title: 'welcome', content: 'Product added', image: '' }, { root: true });
        }

    }
};