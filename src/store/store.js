import { createStore } from "vuex";

export const store = createStore({
    state: {
        name: "Vue",
        cart: [],
    },
    getters: {
        // if amount of the same product in cart equals stockCount -> out of stock
        // !! this method is just a placeholder and NOT needed after the database integration
        outOfStockCartProducts: (state) => {
            return state.cart.filter((p) => p.stockCount === p.quantity);
        },
        cartProduct: (state) => (product) => {
            return state.cart.find((p) => p.id === product.id);
        },
    },
    mutations: {
        addToCart(state, product) {
            // check if product is already in cart
            const productInCart = state.cart.find((p) => p.id === product.id);

            if (productInCart) {
                if (productInCart.quantity < productInCart.stockCount) {
                    // increment quantity
                    productInCart.quantity++;
                }
            } else {
                // add new product to cart
                state.cart.push({ ...product, quantity: 1 });
            }
            // TODO: Update Database - decrement stock count
            console.log(state.cart);
        },
        removeFromCart(state, product) {
            const foundProductId = state.cart.findIndex(
                (p) => p.id === product.id
            );
            if (product.quantity > 1) state.cart[foundProductId].quantity--;
            else state.cart.splice(foundProductId, 1);
        },
    },
    actions: {},
    modules: {},
});
