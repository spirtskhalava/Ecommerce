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
            const foundItem = state.list.find(item => item.id == product.id);
            if (foundItem) {
                foundItem.quantity++;
            } else {
                state.list.push(product);
            }

        }

    }


}