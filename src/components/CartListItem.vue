<template>
    <div class="cartlist-item">
        <h2 id="cartproduct-name">{{ cartProduct.name }}</h2>
        <p>Amount: {{ cartProduct.quantity }}</p>
        <p>
            Price:
            <span id="cartproduct-group-price">{{
                cartProductGroupPrice
            }}</span>
            {{ cartProduct.currency }}
            <span id="cartproduct-price">({{ cartProduct.price }} </span>
            {{ cartProduct.currency }} each)
        </p>
        <p>
            <button
                id="remove-from-cart-btn"
                class="btn"
                @click="removeFromCart()"
            >
                remove
            </button>
        </p>
    </div>
</template>

<script>
export default {
    props: ["cartProduct"],
    computed: {
        cartProductGroupPrice() {
            return this.cartProduct.price * this.cartProduct.quantity;
        },
    },
    methods: {
        removeFromCart() {
            this.$store.commit("removeFromCart", this.cartProduct);
            // console.log(this.cartProduct);
        },
    },
};
</script>

<style scoped>
.cartlist-item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
    grid-auto-rows: minmax(auto, auto);
    background-color: white;
    padding: 10px;
    margin-top: 20px;
    line-height: 40px;
}

@media (max-width: 600px) {
    .cartlist-item {
        display: inline;
    }
}
</style>
