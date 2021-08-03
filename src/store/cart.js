export default {
    namespaced: true,
    state() {

        return {
            list: []

        }
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

        }

    },

    getters: {
        total(state) {
            let sum = 0;
            state.list.forEach((single) => {
                sum += single.quantity * single.price;
            })
            return sum;
        }
    }


}