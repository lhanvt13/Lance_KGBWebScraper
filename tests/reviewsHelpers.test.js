const { Reviews } = require("../dist/reviews");
const {
    calculateExcitementLevel,
} = require("../dist/functions/reviewsHelpers");

describe("Testing review helper functions", () => {
    test("calculateExcitementLevel takes a review and properly returns excitement level", () => {
        let rev = new Reviews();
        rev.addReview(
            0,
            "Everyone was very friendly and we got a good deal.  We were pleased with the attention and pricing received.",
            50,
            5,
            2,
            2
        );
        let review_to_calculate = rev.getAllReviews()[0];

        expect(calculateExcitementLevel(review_to_calculate)).toEqual(14);
    });
});
