<template>
    <div class="cartlist-wrapper">
        <CartListItem />
        <CartListItem />
        <CartListItem />
        <CartListItem />
        <p><strong>Total Cost:</strong> 1999,00€</p>
    </div>
</template>

<script>
import CartListItem from "../components/CartListItem.vue";

export default {
    components: {
        CartListItem,
    },
};
</script>

<style>
.cartlist-wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0px;
    grid-auto-rows: minmax(100px, auto);
}
</style>
