<template>
    <div class="cartlist-wrapper">
        <CartListItem
            v-for="cartProduct in cartProducts"
            :key="cartProduct.id"
            :cartProduct="cartProduct"
        />
    </div>
    <div v-if="totalPrice === 0" class="white-bar">
        <p>The cart is empty.</p>
    </div>
    <hr />
    <div class="white-bar">
        <p><strong>Total Cost:</strong> {{ totalPrice }}€</p>
    </div>
</template>

<script>
import CartListItem from "../components/CartListItem.vue";

export default {
    data() {
        return {
            cartProducts: this.$store.state.cart,
        };
    },
    components: {
        CartListItem,
    },
    computed: {
        totalPrice() {
            if (this.cartProducts.length > 1)
                return this.cartProducts.reduce(
                    (a, b) =>
                        b.price * b.quantity +
                        (a.price * a.quantity ? a.price * a.quantity : a)
                );
            else if (this.cartProducts.length == 1) {
                return (
                    this.cartProducts[0].price * this.cartProducts[0].quantity
                );
            }
            return 0;
        },
    },
};
</script>

<style scoped>
.cartlist-wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0px;
    grid-auto-rows: minmax(auto, auto);
    margin-left: 20px;
    margin-right: 20px;
}

hr {
    margin: 20px;
}

.white-bar {
    display: grid;
    margin: 20px;
    padding: 10px;
    background: white;
}
</style>
