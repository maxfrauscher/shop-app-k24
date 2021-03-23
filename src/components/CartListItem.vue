<template>
    <div class="cartlist-item">
        <p>{{ cartProduct.name }}</p>
        <p>{{ cartProduct.quantity }}</p>
        <p>{{ cartProductGroupPrice }}€ ({{ cartProduct.price }}€ each)</p>
        <p>
            <button @click="removeFromCart()">
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

<style>
.cartlist-item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
    grid-auto-rows: minmax(100px, auto);
    margin: 5px;
    padding: 10px;
    border: 1px solid black;
}
</style>
