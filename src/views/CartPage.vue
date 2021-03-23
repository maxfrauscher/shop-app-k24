<template>
    <div class="cart">
        <header>
            <h1>Cart</h1>
        </header>
        <CartList />
    </div>
</template>

<script>
import CartList from "../components/CartList.vue";

export default {
    components: {
        CartList,
    },
};
</script>
