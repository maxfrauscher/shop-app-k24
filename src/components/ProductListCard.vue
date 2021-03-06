<template>
    <section class="product">
        <div class="image">
            <img :src="product.image" :alt="product.name" />
        </div>
        <div class="details">
            <div class="top-grid bottom-grid-col1">
                <h2 id="product-name">{{ product.name }}</h2>
                <span id="product-price" class="price bottom-grid-col2">
                    {{ product.price }} {{ product.currency }}
                </span>
            </div>
            <div>
                <span id="product-description">{{ product.description }} </span>
            </div>
            <hr />
            <div class="bottom-grid">
                <span
                    id="product-items-left"
                    class="bottom-grid-col1"
                    :class="stockCountLeft == 0 ? 'disabled' : ''"
                    >{{ stockCountLeft }} left</span
                >
                <button
                    id="add-to-cart-btn"
                    class="btn bottom-grid-col2"
                    :disabled="outOfStock"
                    @click="addToCart()"
                >
                    {{ outOfStock ? "Sold Out" : "Add to Cart" }}
                </button>
            </div>
            <!-- stockCount will be updated after database integration -->
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "ProductListCard",
    props: ["product"],
    methods: {
        addToCart() {
            this.$store.commit("addToCart", this.product);
        },
    },
    computed: {
        ...mapGetters(["outOfStockCartProducts", "cartProduct"]),
        outOfStock() {
            const oosProducts = this.outOfStockCartProducts;
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
            const cartProduct = this.cartProduct(this.product);
            let quantity = cartProduct ? cartProduct.quantity : 0;

            // subtract the amounts of products in the cart from the "stockCount"
            return this.product.stockCount - quantity;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../public/scss/global-colors.scss";

section {
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0px;
    grid-auto-rows: minmax(100px, auto);
    border-radius: 2px;
    background: white;
    height: auto;
    margin: 10px;
}

.disabled {
    background-color: $grey !important;
}

.top-grid {
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
    grid-auto-rows: minmax(auto, auto);
}

.bottom-grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    grid-auto-rows: minmax(auto, auto);
}

#product-description {
    display: flex;
    height: 100px;

    overflow: hidden;
}

.bottom-grid-col1 {
    grid-column: 1;
    grid-row: 1;
}
.bottom-grid-col2 {
    grid-column: 2;
    grid-row: 1;
}

.price {
    height: 42px;
    line-height: 42px;
    text-align: center;
    font-weight: 200;
    margin-left: 0;
    color: $text-black;
    bottom: 0px;
}

#product-items-left {
    font-weight: 200;
    background-color: $orange;
    color: white;
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
}

.image {
    grid-column: 1;
    grid-row: 1;
}

.details {
    margin: 10px;
}
</style>
