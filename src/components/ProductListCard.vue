<template>
    <section class="product">
        <div class="image">
            <img src="/images/123.jpg" alt="Smartphone" />
        </div>
        <div class="description">
            <h2>Smartphone</h2>
            <p>The best camera is the one that you carry 24/7.</p>
            <aside>
                <ul>
                    <li>Price: 450 €</li>
                    <li>In Stock: 4 items</li>
                </ul>
                <button>Add to Cart/ Out of Stock</button>
            </aside>
        </div>
    </section>
    <!-- use public/products.js to populate the html -->
</template>

<script>
export default {};
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
