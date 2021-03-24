import { createRouter, createWebHashHistory } from "vue-router";
import ProductListPage from "../views/ProductListPage.vue";
import CartPage from "../views/CartPage.vue";

const routes = [
    {
        path: "/products",
        name: "Product Listing Page",
        component: ProductListPage,
    },
    {
        path: "/cart",
        name: "Cart Page",
        component: CartPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
