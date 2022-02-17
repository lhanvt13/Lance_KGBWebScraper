const { Reviews } = require("../dist/reviews");

describe("Testing Reviews functions", () => {
    /**
     * (1) test add 1
     * (2) test add multiple
     * (3) test add 0
     */
    test("add 1 review object", () => {
        let rev = new Reviews();
        rev.addReview(
            0,
            "Everyone was very friendly and we got a good deal.  We were pleased with the attention and pricing received.",
            50,
            5,
            2,
            0
        );
        expect(rev.getAllReviews()).toEqual([
            {
                page: 0,
                review_text:
                    "Everyone was very friendly and we got a good deal.  We were pleased with the attention and pricing received.",
                rating_dealership: 50,
                rating_employee_avg: 5,
                num_employee_ratings: 2,
                num_exclamations: 0,
            },
        ]);
    });
    test("add multiple review objects", () => {
        let rev = new Reviews();
        rev.addReview(
            0,
            "Everyone was very friendly and we got a good deal.  We were pleased with the attention and pricing received.",
            50,
            5,
            2,
            0
        );
        rev.addReview(
            0,
            "Adrian is the best very nice very patient and he got me the car I wanted!",
            40,
            3,
            4,
            0
        );
        rev.addReview(
            1,
            "We drove to Gladewater from Longview after being contacted by the internet monitor that a new Enclave had arrived that day. Adrian Cortes moved the car into a bay so we could be warmer & very patiently reviewed all the features before taking us for a test drive. Adrian was very knowledgeable and professional.  I am going to love driving my 2022 Buick Enclave Avenir and am thankful for his help!",
            22,
            1,
            1,
            0
        );
        expect(rev.getAllReviews()).toEqual([
            {
                page: 0,
                review_text:
                    "Everyone was very friendly and we got a good deal.  We were pleased with the attention and pricing received.",
                rating_dealership: 50,
                rating_employee_avg: 5,
                num_employee_ratings: 2,
                num_exclamations: 0,
            },
            {
                page: 0,
                review_text:
                    "Adrian is the best very nice very patient and he got me the car I wanted!",
                rating_dealership: 40,
                rating_employee_avg: 3,
                num_employee_ratings: 4,
                num_exclamations: 0,
            },
            {
                page: 1,
                review_text:
                    "We drove to Gladewater from Longview after being contacted by the internet monitor that a new Enclave had arrived that day. Adrian Cortes moved the car into a bay so we could be warmer & very patiently reviewed all the features before taking us for a test drive. Adrian was very knowledgeable and professional.  I am going to love driving my 2022 Buick Enclave Avenir and am thankful for his help!",
                rating_dealership: 22,
                rating_employee_avg: 1,
                num_employee_ratings: 1,
                num_exclamations: 0,
            },
        ]);
    });
    test("add 0 review object", () => {
        let rev = new Reviews();

        expect(rev.getAllReviews()).toEqual([]);
    });
});

describe("Testing get top reviews", () => {
    test("top 3 reviews when > 3 reviews are added", () => {
        let rev = new Reviews();
        for (let i = 0; i < 20; i++) {
            rev.addReview(
                getRandomInt(5),
                `Review number: ${i}`,
                getRandomInt(50),
                getRandomInt(5),
                getRandomInt(5),
                1
            );
        }
        rev.addReview(
            0,
            "This is definitely a highly rated comment",
            60,
            6,
            6,
            6
        );
        rev.addReview(1, "This is another highly rated comment", 70, 7, 7, 7);
        rev.addReview(2, "This is a highly rated comment", 80, 8, 8, 7);
        expect(rev.getTopReviews(3)).toEqual([
            {
                page: 2,
                review_text: "This is a highly rated comment",
                rating_dealership: 80,
                rating_employee_avg: 8,
                num_employee_ratings: 8,
                num_exclamations: 7,
            },
            {
                page: 1,
                review_text: "This is another highly rated comment",
                rating_dealership: 70,
                rating_employee_avg: 7,
                num_employee_ratings: 7,
                num_exclamations: 7,
            },
            {
                page: 0,
                review_text: "This is definitely a highly rated comment",
                rating_dealership: 60,
                rating_employee_avg: 6,
                num_employee_ratings: 6,
                num_exclamations: 6,
            },
        ]);
    });
    test("top 3 reviews when less than 3 reviews are added", () => {
        let rev = new Reviews();

        rev.addReview(0, "This is a highly rated comment", 50, 5, 5, 5);
        rev.addReview(0, "This is another highly rated comment", 60, 6, 6, 6);
        expect(rev.getTopReviews(3)).toEqual([
            {
                page: 0,
                review_text: "This is another highly rated comment",
                rating_dealership: 60,
                rating_employee_avg: 6,
                num_employee_ratings: 6,
                num_exclamations: 6,
            },
            {
                page: 0,
                review_text: "This is a highly rated comment",
                rating_dealership: 50,
                rating_employee_avg: 5,
                num_employee_ratings: 5,
                num_exclamations: 5,
            },
        ]);
    });
    test("top 3 reviews when 0 reviews are added", () => {
        let rev = new Reviews();

        expect(rev.getTopReviews(3)).toEqual([]);
    });
});

// get a random integer between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
