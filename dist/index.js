"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const { Reviews } = require("../dist/reviews");
const ratingsHelpers_1 = require("./functions/ratingsHelpers");
const BASE_URL = "https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685/page";
const NUM_PAGES = 5;
const NUM_TOP_REVIEWS = 3;
// initialize Reviews
const reviews_list = new Reviews();
// main: run axios requests, scrape, populate reviews_list, then console.log them
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // resolve multiple pages
        yield axios_1.default
            .all(getURLToScrape(BASE_URL, NUM_PAGES))
            .then(axios_1.default.spread((...responses) => {
            responses.forEach((response, index) => {
                // for each page, scrape and store all the reviews
                getReviews(response.data, index);
            });
        }))
            .catch(({ response }) => {
            throw new Error(response.status);
        });
        // print it out
        reviews_list
            .getTopReviews(NUM_TOP_REVIEWS)
            .forEach((rev, index) => {
            console.log(`---------------Rank: ${index + 1} ---------------`);
            console.log("Review: ", rev);
        });
    });
}
// create promises for each url to scrape then return those promises in an array
function getURLToScrape(base_url, pages) {
    let request_list = [];
    if (!base_url.length || !pages)
        return request_list;
    // for the number of pages to scrape, push axios.get promise into a list of requests
    for (let i = 1; i <= pages; i++) {
        const request = axios_1.default.get(`${base_url}${i}`);
        request_list.push(request);
    }
    return request_list;
}
// Scrape and add all the reviews from the html
function getReviews(html, page) {
    const $ = cheerio_1.default.load(html);
    $(".review-entry").each((i, div) => {
        const review_title = $(div).find(".review-title").text(); // Bolded part of the review's text
        const review_text = $(div).find(".review-whole").text(); // Unbolded part of the review's text
        const rating = (0, ratingsHelpers_1.extractDealershipRating)(div) || 0; // get the rating for the dealership
        const { employee_ratings_avg, num_employee_ratings } = (0, ratingsHelpers_1.extractEmployeeRatings)(div); // get the ratings and the number of ratings made for individual employees
        const num_exclamations = review_title.split("!").length -
            1 +
            (review_text.split("!").length - 1); // grab how many exclamations there are
        // add the review to the reviews_list
        reviews_list.addReview(page, `${review_title}${review_text}`, rating, employee_ratings_avg, num_employee_ratings, num_exclamations);
    });
}
main();
