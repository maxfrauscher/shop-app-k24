import { mount } from "@vue/test-utils";
import Component from "@/components/CartListItem.vue";

function factory(cartProduct = {}) {
    return mount(Component, {
        props: {
            cartProduct,
        },
    });
}

describe("CartListItem.vue", () => {
    it("exists.", () => {
        const wrapper = factory();

        expect(wrapper.exists()).toBeTruthy();
    });

    it("shows the product name.", () => {
        const cartProduct = { name: "Smartphone" };
        const wrapper = factory(cartProduct);

        const cartProductName = wrapper.props("cartProduct")["name"];
        const outputCartProductName = wrapper.find("#cartproduct-name").html();

        expect(outputCartProductName).toContain(cartProductName);
    });

    it("shows the price of a single product.", () => {
        const cartProduct = { price: 100, quantity: 1 };
        const wrapper = factory(cartProduct);

        const outputCartProductPrice = wrapper
            .find("#cartproduct-price")
            .html();

        expect(outputCartProductPrice).toContain(cartProduct.price);
    });

    it("calculates and shows the price of a product group .", () => {
        const cartProduct = { price: 100, quantity: 2 };
        const wrapper = factory(cartProduct);

        const outputCartProductGroupPrice = wrapper
            .find("#cartproduct-group-price")
            .html();

        expect(outputCartProductGroupPrice).toContain(200);
    });

    it("executes the 'removeFromCart' after clicking the 'Add to Cart' button.", async () => {
        const wrapper = factory();

        wrapper.vm.removeFromCart = jest.fn();
        await wrapper.find("#remove-from-cart-btn").trigger("click");

        expect(wrapper.vm.removeFromCart).toHaveBeenCalled();
    });
});
