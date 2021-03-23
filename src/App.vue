<template>
    <nav>
        <ul>
            <li><router-link to="/">Product List</router-link></li>
            <li><router-link to="/cart">Cart</router-link></li>
        </ul>
    </nav>
    <router-view />
</template>

<style>
body {
    font: 16px "Titillium Web", sans-serif;
    margin: 0;
}

img {
    width: 100%;
    display: block;
}

nav {
    background: #330099;
}

nav ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    flex-grow: 1;
}

nav ul li a {
    text-align: center;
    color: #fff;
    padding: 0.5em;
    display: block;
    text-transform: uppercase;
    text-decoration: none;
}

nav ul li a.active {
    background: #24006b;
}

nav ul li a:hover {
    background: #aa80ff;
    color: #000;
    font-weight: 700;
}

header {
    text-align: center;
}

h1 {
    color: #777380;
    font-weight: 200;
    font-size: 35px;
}

h2 {
    font-size: 25px;
}

/* Application styles */
</style>
