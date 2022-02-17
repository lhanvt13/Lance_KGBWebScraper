import cheerio, { Element } from "cheerio";
import { avgOfArray } from "./reviewsHelpers";

/**
 * Given a review, extract the rating given to the dealership
 */
export function extractDealershipRating(div: Element): number {
    const $ = cheerio.load(div);

    // find the relevant div and get its class names using .attr("class"). This is because the rating is embedded into the class name 'rating-50' for 5/5 rating
    let rating_class_names: string =
        $(div)
            .find("div.dealership-rating div.rating-static.visible-xs")
            .attr("class") || "";
    // rating is the 5th element in the array of this div's class names. In the below example, the 5th element is rating-50, which gives us the rating
    // example: <div class="container relevant-class d-flex justify-content-center rating-50"></div>
    let rate_attr: string = rating_class_names?.split(" ")[4] || "";
    // parse the rating
    let rate: number = parseInt(rate_attr?.split("-")[1]) || 0;
    return rate;
}

/**
 * given a review, extract the ratings given to each individual employee
 *  - could have 0 ratings
 *  - ratings can be diff: use avg
 */
export function extractEmployeeRatings(div: Element): {
    employee_ratings_avg: number;
    num_employee_ratings: number;
} {
    const $ = cheerio.load(div);
    const result: number[] = [];
    $(div)
        .find("div.employees-wrapper div.review-employee")
        .each((i, div) => {
            // Get the string that contains the employee individual ratings
            // the .replace(/\s+/g, "") gets rid of white space because string can be: "                 5.0              "
            let rating_string: string = $(div)
                .find(".employee-rating-badge-sm")
                .text()
                .replace(/\s+/g, "");

            // Just double checking if rating_string has at least some ratings in it
            if (rating_string.length > 0) {
                // split rating string into 3 characters each because they're stored like: "5.03.04.0" -> converts to ["5.0", "3.0", "4.0"]
                let rating_temp_arr = rating_string.match(/.{1,3}/g) || [];

                // loop through and push each one into the results array
                rating_temp_arr?.forEach((rate) => {
                    let rating_num = Number(rate);
                    result.push(rating_num);
                });
            }
        });
    const employee_ratings_avg: number = avgOfArray(result) || 0; // get the average of the ratings
    return {
        employee_ratings_avg: employee_ratings_avg,
        num_employee_ratings: result.length,
    };
}
module.exports = { extractDealershipRating, extractEmployeeRatings };
