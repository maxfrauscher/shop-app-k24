import { shallowMount } from "@vue/test-utils";
import Component from "@/components/CartList.vue";

function factory(cart = []) {
    return shallowMount(Component, {
        global: {
            mocks: {
                $store: {
                    state: { cart },
                },
            },
        },
    });
}

describe("CartList.vue", () => {
    it("exists.", () => {
        const wrapper = factory();

        expect(wrapper.exists()).toBeTruthy();
    });

    it("shows the 'cart is empty' message when the cart is empty.", () => {
        const cart = [];
        const wrapper = factory(cart);

        const outputText = wrapper.find("#cart-is-empty").exists();

        expect(outputText).toBeTruthy();
    });

    it("hides the 'cart is empty' message when the cart is not empty.", () => {
        const cart = ["product1"];
        const wrapper = factory(cart);

        const outputText = wrapper.find("#cart-is-empty").exists();

        expect(outputText).toBeFalsy();
    });

    it("shows the products in the cart.", () => {
        const cart = ["product1", "product2"];
        const wrapper = factory(cart);

        const outputHtml = wrapper.find(".cartlist-wrapper").html();

        expect(outputHtml).toContain("product");
    });

    it("calculates and shows the total price", () => {
        const cart = [
            {
                price: 100,
                quantity: 1,
            },
            {
                price: 100,
                quantity: 2,
            },
        ];
        const wrapper = factory(cart);
        const outputTotalPrice = wrapper.find("#total-price").html();

        expect(outputTotalPrice).toContain(300);
    });
});
