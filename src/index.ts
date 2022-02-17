import axios, { AxiosResponse } from "axios";
import type { ReviewObj } from "./types";
import cheerio from "cheerio";
const { Reviews } = require("../dist/reviews");
import {
    extractDealershipRating,
    extractEmployeeRatings,
} from "./functions/ratingsHelpers";

const BASE_URL: string =
    "https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685/page";
const NUM_PAGES: number = 5;
const NUM_TOP_REVIEWS: number = 3;

// initialize Reviews
const reviews_list = new Reviews();

// main: run axios requests, scrape, populate reviews_list, then console.log them
async function main() {
    // resolve multiple pages
    await axios
        .all(getURLToScrape(BASE_URL, NUM_PAGES))
        .then(
            axios.spread((...responses) => {
                responses.forEach((response, index) => {
                    // for each page, scrape and store all the reviews
                    getReviews(response.data, index);
                });
            })
        )
        .catch(({ response }) => {
            throw new Error(response.status);
        });

    // print it out
    reviews_list
        .getTopReviews(NUM_TOP_REVIEWS)
        .forEach((rev: ReviewObj, index: number) => {
            console.log(`---------------Rank: ${index + 1} ---------------`);
            console.log("Review: ", rev);
        });
}

// create promises for each url to scrape then return those promises in an array
function getURLToScrape(base_url: string, pages: number) {
    let request_list: Promise<AxiosResponse<any, any>>[] = [];
    if (!base_url.length || !pages) return request_list;
    // for the number of pages to scrape, push axios.get promise into a list of requests
    for (let i = 1; i <= pages; i++) {
        const request = axios.get(`${base_url}${i}`);
        request_list.push(request);
    }

    return request_list;
}

// Scrape and add all the reviews from the html
function getReviews(html: string, page: number) {
    const $ = cheerio.load(html);
    $(".review-entry").each((i, div) => {
        const review_title: string = $(div).find(".review-title").text(); // Bolded part of the review's text
        const review_text: string = $(div).find(".review-whole").text(); // Unbolded part of the review's text
        const reviewer_username: string = $(div)
            .find(".review-wrapper")
            .children(":first-child")
            .next()
            .text()
            .replace(/\s+/g, "")
            .substring(2); // grab the username of the reviewer; .substring(2) gets rid of the "by" before the username
        const rating: number = extractDealershipRating(div) || 0; // get the rating for the dealership
        const { employee_ratings_avg, num_employee_ratings } =
            extractEmployeeRatings(div); // get the ratings and the number of ratings made for individual employees
        const num_exclamations: number =
            review_title.split("!").length -
            1 +
            (review_text.split("!").length - 1); // grab how many exclamations there are

        // add the review to the reviews_list
        /**
         * (page: number, review_text: string, rating_dealership: number, rating_employee_avg: number, num_employee_ratings: number, num_exclamations: number)
         */
        reviews_list.addReview(
            page,
            `${review_title}${review_text}`,
            rating,
            employee_ratings_avg,
            num_employee_ratings,
            num_exclamations,
            reviewer_username
        );
    });
}

main();
