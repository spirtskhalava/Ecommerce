import { useStore } from 'vuex';
export default function useCart() {

    const store = useStore();


    const addToCart = (product) => store.dispatch('cart/add', product);
    const decreaseProduct = (product) => store.commit('cart/decrease', product);




    return {
        total: store.getters['cart/total'],
        addToCart,
        decreaseProduct
    };
}