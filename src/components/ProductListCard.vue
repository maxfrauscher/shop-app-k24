<template>
    <section class="product">
        <div class="image">
            <img :src="product.image" :alt="product.name" />
        </div>
        <div class="description">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <aside>
                <ul>
                    <li>Price: {{ product.price }} {{ product.currency }}</li>
                    <li>In Stock: {{ stockCountLeft }} items</li>
                    <!-- stockCount will be updated after database integration -->
                </ul>
                <button :disabled="outOfStock" @click="addToCart()">
                    {{ outOfStock ? "Sold Out" : "Add to Cart" }}
                </button>
            </aside>
        </div>
    </section>
    <!-- use public/products.js to populate the html -->
</template>

<script>
export default {
    props: ["product"],
    methods: {
        addToCart() {
            this.$store.commit("addToCart", this.product);
        },
    },
    computed: {
        outOfStock() {
            const oosProducts = this.$store.getters.outOfStockCartProducts;
            let isOutOfStock = false;

            // check if there are any products left with the help of the "stockCount"
            // and also if you already add too many items to the cart
            if (
                this.product.stockCount === 0 ||
                oosProducts.find((p) => p.id === this.product.id)
            )
                isOutOfStock = true;

            return isOutOfStock;
        },
        stockCountLeft() {
            const cartProduct = this.$store.getters.cartProduct(this.product);
            let quantity = 0;
            if (cartProduct) quantity = cartProduct.quantity;

            // subtract the amounts of products in the cart from the "stockCount"
            return this.product.stockCount - quantity;
        },
    },
};
</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0px;
    grid-auto-rows: minmax(100px, auto);
    border: 1px solid black;
}

.image {
    grid-column: 1;
    grid-row: 1;
}

.description {
    grid-column: 1;
    grid-row: 2;
}
</style>
