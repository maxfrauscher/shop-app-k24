<template>
    <header>
        <img src="/images/banner.jpg" alt="" />
    </header>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/products">Products</router-link>
            </li>
            <li>
                <router-link to="/"> Offers </router-link>
            </li>
            <li>
                <router-link to="/"> Service </router-link>
            </li>
            <li>
                <router-link to="/cart">
                    <i class="pi pi-shopping-cart"></i>
                    <span v-if="productsInCart" class="small-numbers">
                        {{ productsInCart }}</span
                    >
                </router-link>
            </li>
        </ul>
    </nav>
    <div class="body-grid">
        <div class="space-col"></div>
        <div class="mid-col">
            <router-view />
        </div>
        <div class="space-col"></div>
    </div>
</template>

<script>
export default {
    computed: {
        productsInCart() {
            return this.$store.state.cart.length;
        },
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
// color theme variables
// ----------------------
$dark-grey: #131417;
$text-black: #2f2f3f;
$orange: #f25f29; // hover, active
$grey: #616161; // disabled
// ----------------------

body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    margin: 0;
    color: $text-black;
    background-color: $dark-grey;
}

body::-webkit-scrollbar {
    display: none;
}

.small-numbers {
    position: absolute;
    font-size: 12px;
    margin-top: -5px;
    width: 14px;
    height: 14px;
    vertical-align: top;
    color: white;
    background: $orange;
    border: 2px solid $orange;
    border-radius: 20px;
}

.body-grid {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-gap: 0px;
    grid-auto-rows: minmax(auto, auto);
}

img {
    width: 100%;
    display: block;
}

nav {
    background: white;
    position: relative;
}

nav ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 20px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    margin: 0 auto;
    max-width: 500px;
}

nav ul li {
    display: inline-block;
    flex-grow: 1;
}

nav ul li a {
    text-align: center;
    font-weight: 200;
    color: $text-black;
    padding: 0.5em;
    display: block;
    text-decoration: none;
    border-top: 2px solid rgba(0, 0, 0, 0);
}

nav ul li a.router-link-exact-active {
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    background: $dark-grey;
    color: white;
}

nav ul li a:hover {
    border-top: 2px solid $orange;
}

header {
    background: white;
    text-align: center;
}

h1 {
    color: $text-black;
    font-weight: 100;
    font-size: 35px;
}

h2 {
    color: $text-black;
    font-size: 16px;
}

.btn {
    position: relative;
    display: block;
    width: 100%;
    padding: 10px;
    overflow: hidden;
    border-width: 0;
    outline: none;
    background-color: $dark-grey;
    color: white;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: $orange;
}

.btn:disabled {
    background-color: $grey;
}

@media (max-width: 1400px) {
    .body-grid {
        grid-template-columns: 1fr;
    }
}

/* Application styles */
</style>
