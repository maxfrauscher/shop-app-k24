import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Offers from "../views/Offers.vue";
import Service from "../views/Service.vue";
import Cart from "../views/Cart.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/products",
        name: "Product",
        component: Products,
    },
    {
        path: "/offers",
        name: "Offers",
        component: Offers,
    },
    {
        path: "/service",
        name: "service",
        component: Service,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
