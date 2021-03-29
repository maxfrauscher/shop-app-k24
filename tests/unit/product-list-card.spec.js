import { mount } from "@vue/test-utils";
import Component from "@/components/ProductListCard.vue";

function factory(cartProduct = { quantity: 0 }, stockCount = 4) {
    return mount(Component, {
        props: {
            product: {
                id: 123,
                image: "/images/123.jpg",
                name: "Smartphone",
                description: "The best camera is the one that you carry 24/7.",
                price: 450,
                currency: "€",
                stockCount,
            },
        },
        data() {
            return {
                outOfStockCartProducts: [],
            };
        },
        global: {
            mocks: {
                $store: {
                    state: { cart: [] },
                    commit: () => {},
                    getters: {
                        cartProduct: () => {
                            return cartProduct;
                        },
                    },
                },
            },
        },
    });
}

describe("ProductListCard.vue", () => {
    it("exists.", () => {
        const wrapper = factory();

        expect(wrapper.exists()).toBeTruthy();
    });

    it("shows the image of the product.", () => {
        const wrapper = factory();

        const productImageSrc = wrapper.props("product")["image"];
        const outputImageSrc = wrapper.find("img").attributes("src");

        expect(productImageSrc).toBe(outputImageSrc);
    });

    it("shows the product name.", () => {
        const wrapper = factory();

        const productName = wrapper.props("product")["name"];
        const outputProductName = wrapper.find("#product-name").html();

        expect(outputProductName).toContain(productName);
    });

    it("shows the product price and currency.", () => {
        const wrapper = factory();

        const productPrice = wrapper.props("product")["price"];
        const productCurrency = wrapper.props("product")["currency"];
        const expectedValue = `${productPrice} ${productCurrency}`;

        const outputProductPrice = wrapper.find("#product-price").html();

        expect(outputProductPrice).toContain(expectedValue);
    });

    it("shows the product description.", () => {
        const wrapper = factory();

        const productDescription = wrapper.props("product")["description"];
        const outputProductDescription = wrapper
            .find("#product-description")
            .html();

        expect(outputProductDescription).toContain(productDescription);
    });

    it("shows the amount of products left", () => {
        const wrapper = factory();

        const productStockCount = wrapper.props("product")["stockCount"];
        const outputProductItemsLeft = wrapper
            .find("#product-items-left")
            .html();

        expect(outputProductItemsLeft).toContain(productStockCount);
    });

    // testing of the "stockCountLeft" computed property
    it("shows the amount of products left, after already having one product in cart,", () => {
        const cartProduct = { quantity: 1 };
        const wrapper = factory(cartProduct);

        let productStockCount = wrapper.props("product")["stockCount"];
        const outputProductItemsLeft = wrapper
            .find("#product-items-left")
            .html();

        productStockCount -= cartProduct.quantity;

        expect(outputProductItemsLeft).toContain(productStockCount);
    });

    it("shows the 'Sold Out' button when there is no product left.", () => {
        const stockCount = 0;
        const wrapper = factory({}, stockCount);

        const outputButtonTitle = wrapper.find("#add-to-cart-btn").html();

        expect(outputButtonTitle).toContain("Sold Out");
    });

    it("executes the 'addToCart' after clicking the 'Add to Cart' button.", async () => {
        const wrapper = factory();

        wrapper.vm.addToCart = jest.fn();
        await wrapper.find("#add-to-cart-btn").trigger("click");

        expect(wrapper.vm.addToCart).toHaveBeenCalled();
    });
});
