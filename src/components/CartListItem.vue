<template>
    <div class="cartlist-item">
        <p>Smartphone</p>
        <p>2</p>
        <p>399,99€</p>
        <p><button>add</button><button>remove</button></p>
    </div>
</template>

<script>
export default {};
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
