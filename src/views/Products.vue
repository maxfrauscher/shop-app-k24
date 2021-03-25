<template>
    <div class="products-wrapper">
        <ProductListCard
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<script>
import products from "../../public/products.js";
import ProductListCard from "../components/ProductListCard";

export default {
    name: "Product Listing Page",
    components: {
        ProductListCard,
    },
    data() {
        return {
            products,
        };
    },
};
</script>

<style scoped>
.products-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0px;
    grid-auto-rows: minmax(50px, auto);
    margin: 10px;
}

@media (max-width: 600px) {
    .products-wrapper {
        grid-template-columns: 1fr 1fr;
        margin: 10px;
    }
}

@media (max-width: 400px) {
    .products-wrapper {
        grid-template-columns: 1fr;
        margin: 10px;
    }
}
</style>
