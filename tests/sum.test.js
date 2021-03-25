const sum = require("../src/sum");

describe("Basic math unit test: ", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
});
