export default {
    namespaced: true,
    state() {

        return {
            list: [],
            sum: 0

        }
    },
    mutations: {
        add(state, product) {
            state.sum += product.price;
            const foundItem = state.list.find(item => item.id == product.id);
            if (foundItem) {
                foundItem.quantity++;

            } else {
                product.quantity = 1;
                state.list.push(product);
            }

        }

    }


}