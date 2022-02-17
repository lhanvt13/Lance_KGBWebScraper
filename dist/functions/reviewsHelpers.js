"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avgOfArray = exports.calculateExcitementLevel = void 0;
/**
 * WHAT: Given a review, calculate the level of enthusiasm/positivity and return that level
 * HOW:
 *      (1) Get the relevant factors
 *          (a) The dealership's overall rating
 *          (b) The number of employees rated
 *          (c) The avg of employee ratings
 *          (d) The number of exclamation marks
 *      (2) multiply the relevant factors (while scaling down the dealership's overall ratings because it is out of 50)
 *      (3) Return the average of the normalized values
 */
function calculateExcitementLevel(review) {
    let result = 0;
    const { num_employee_ratings, rating_employee_avg, rating_dealership, num_exclamations, } = review;
    /**
     * SUM the relevant numbers to get the "excitement" score
     * Note: rating_dealership divided by 10 because it is out of 50
     * See README for reasons for why we use this calculation
     */
    result =
        num_employee_ratings +
            rating_employee_avg +
            rating_dealership / 10 +
            num_exclamations;
    return result;
}
exports.calculateExcitementLevel = calculateExcitementLevel;
function avgOfArray(array) {
    const sum = array.reduce((a, b) => a + b, 0);
    const avg = sum / array.length || 0;
    return avg;
}
exports.avgOfArray = avgOfArray;
module.exports = { calculateExcitementLevel, avgOfArray };
