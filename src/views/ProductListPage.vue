<template>
    <header>
        <h1>Products</h1>
    </header>
    <div class="products-wrapper">
        <ProductListCard />
        <ProductListCard />
        <ProductListCard />
        <ProductListCard />
        <ProductListCard />
        <ProductListCard />
    </div>
</template>

<script>
import ProductListCard from "../components/ProductListCard";

export default {
    name: "Product Listing Page",
    components: {
        ProductListCard,
    },
};
</script>

<style scoped>
.products-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    margin: 10px;
}
</style>
