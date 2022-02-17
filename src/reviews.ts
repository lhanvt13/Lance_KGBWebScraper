import type { ReviewObj } from "./types";
import { calculateExcitementLevel } from "./functions/reviewsHelpers";

export default class Reviews {
    reviews: ReviewObj[];

    constructor() {
        this.reviews = [];
    }

    addReview(
        page: number,
        review_text: string,
        rating_dealership: number,
        rating_employee_avg: number,
        num_employee_ratings: number,
        num_exclamations: number
    ) {
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
    getAllReviews(): ReviewObj[] {
        if (!this.reviews) return [];
        return this.reviews;
    }

    // gets the top "num" number of reviews based on "excitement level"
    getTopReviews(num: number): ReviewObj[] {
        if (!this.reviews) return [];
        let reviews_list = this.reviews;

        // sort the list of reviews by "excitement level"
        reviews_list.sort((a, b) => {
            return calculateExcitementLevel(b) - calculateExcitementLevel(a);
        });
        return reviews_list.slice(0, num);
    }
}

module.exports = { Reviews };
