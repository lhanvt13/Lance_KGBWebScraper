"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reviewsHelpers_1 = require("./functions/reviewsHelpers");
class Reviews {
    constructor() {
        this.reviews = [];
    }
    addReview(page, review_text, rating_dealership, rating_employee_avg, num_employee_ratings, num_exclamations) {
        this.reviews.push({
            page,
            review_text,
            rating_dealership,
            rating_employee_avg,
            num_employee_ratings,
            num_exclamations,
        });
    }
    // Returns all the reviews
    getAllReviews() {
        if (!this.reviews)
            return [];
        return this.reviews;
    }
    // gets the top "num" number of reviews based on "excitement level"
    getTopReviews(num) {
        if (!this.reviews)
            return [];
        let reviews_list = this.reviews;
        // sort the list of reviews by "excitement level"
        reviews_list.sort((a, b) => {
            return (0, reviewsHelpers_1.calculateExcitementLevel)(b) - (0, reviewsHelpers_1.calculateExcitementLevel)(a);
        });
        return reviews_list.slice(0, num);
    }
}
exports.default = Reviews;
module.exports = { Reviews };
