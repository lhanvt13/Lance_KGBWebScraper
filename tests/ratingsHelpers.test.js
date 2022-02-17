const {
    extractDealershipRating,
    extractEmployeeRatings,
} = require("../dist/functions/ratingsHelpers");
const TEST_HTML_50_2_5 = `<div class="review-entry col-xs-12 text-left pad-none pad-top-lg  border-bottom-teal-lt">
<a name="r9162312"></a>
<div class="col-xs-12 col-sm-3 pad-left-none text-center review-date margin-bottom-md">
    <div class="italic col-xs-6 col-sm-12 pad-none margin-none font-20">February 11, 2022</div>
    <div class="col-xs-6 col-sm-12 pad-none dealership-rating">
        <div class="rating-static visible-xs pad-none margin-none rating-50 pull-right"></div>
        <div class="rating-static hidden-xs rating-50 margin-center"></div>
        <div class="col-xs-12 hidden-xs pad-none margin-top-sm small-text dr-grey">SALES VISIT - USED</div>
    </div>
</div>
<div class="col-xs-12 col-sm-9 pad-none review-wrapper">
<!-- REVIEW BODY -->

<div class="tr margin-top-md">
    <div class="td text-left valign-top ">
        <p class="font-16 margin-bottom-none line-height-25">

            <span class="review-title bolder font-18 italic">Everyone was very friendly and we got a good deal.  We</span>
            <span class="review-snippet"> were pleased with the attention and pricing received.
</span>
            <span class="review-whole display-none"> were pleased with the attention and pricing received.
</span>
                <a id="9162312" class="read-more-toggle pointer line-height-25 small-text bolder inline margin-bottom-md">More</a>
        </p>
    </div>
</div>
<!--  USER-->
<div class="margin-bottom-sm line-height-150">
    
    <span class="italic font-16 bolder notranslate">by Rita Shar</span>
</div>

<!-- REVIEW RATINGS - ALL -->
<div class="pull-left pad-left-md pad-right-md bg-grey-lt margin-bottom-md review-ratings-all review-hide">
    <!-- REVIEW RATING - CUSTOMER SERVICE -->
    <div class="table width-100 pad-left-none pad-right-none margin-bottom-md">
            <div class="tr">
                <div class="lt-grey small-text td">Customer Service</div>
                <div class="rating-static-indv rating-50 margin-top-none td"></div>
            </div>
                            <!-- REVIEW RATING - FRIENDLINESS -->
            <div class="tr margin-bottom-md">
                <div class="lt-grey small-text td">Friendliness</div>
                <div class="rating-static-indv rating-50 margin-top-none td"></div>
            </div>
                    <!-- REVIEW RATING - PRICING -->
            <div class="tr margin-bottom-md">
                <div class="lt-grey small-text td">Pricing</div>
                <div class="rating-static-indv rating-50 margin-top-none td"></div>
            </div>
                    <!-- REVIEW RATING - EXPERIENCE -->
            <div class="tr margin-bottom-md">
                <div class="td lt-grey small-text">Overall Experience</div>
                <div class="rating-static-indv rating-50 margin-top-none td"></div>
            </div>
        <!-- REVIEW RATING - RECOMMEND DEALER -->
        <div class="tr">
            <div class="lt-grey small-text td">Recommend Dealer</div>
            <div class="td small-text boldest">
                Yes
            </div>
        </div>
    </div>


</div>

<!-- EMPLOYEE SECTION -->
<div class="clear-fix  margin-top-sm">
        <div class="col-xs-12 lt-grey pad-left-none employees-wrapper">
            <div class="small-text">Employees Worked With </div>

                         <div class="col-xs-12 col-sm-6 col-md-4 pad-left-none pad-top-sm pad-bottom-sm review-employee">
                             <div class="table">
                                 <div class="td square-image employee-image" style="background-image: url(https://cdn-user.dealerrater.com/images/dealer/23685/employees/a7dcab6d-fbd7-4f2e-bab4-6c23a1c8e625.jpg)"></div>
                                 
                                 <div class="td valign-bottom pad-left-md pad-top-none pad-bottom-none">
                                         <a class="notranslate pull-left line-height-1 tagged-emp small-text teal  margin-right-sm emp-54375" data-emp-id="54375" href="/sales/Mike-Lambert-review-54375/">
                                             Mike Lambert
                                         </a>
                                                                              <div class="col-xs-12 pad-none margin-none pad-top-sm">


<div class="relative employee-rating-badge-sm">
    <div class="col-xs-12 pad-none">
            <span class="pull-left font-14 boldest lt-grey line-height-1 pad-right-sm margin-right-sm border-right">5.0</span>
            <div class="rating-static rating-50 margin-top-none pull-left"></div>
    </div>
    
</div>

                                         </div>
                                 </div>

                             </div>

                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-4 pad-left-none pad-top-sm pad-bottom-sm review-employee">
                             <div class="table">
                                 <div class="td square-image employee-image" style="background-image: url(https://cdn-user.dealerrater.com/images/dealer/23685/employees/ca22768af3f7.jpg)"></div>
                                 
                                 <div class="td valign-bottom pad-left-md pad-top-none pad-bottom-none">
                                         <a class="notranslate pull-left line-height-1 tagged-emp small-text teal   emp-640356" data-emp-id="640356" href="/sales/Taylor-Prickett-review-640356/">
                                             Taylor Prickett
                                         </a>
                                                                              <div class="col-xs-12 pad-none margin-none pad-top-sm">


<div class="relative employee-rating-badge-sm">
    <div class="col-xs-12 pad-none">
            <span class="pull-left font-14 boldest lt-grey line-height-1 pad-right-sm margin-right-sm border-right">5.0</span>
            <div class="rating-static rating-50 margin-top-none pull-left"></div>
    </div>
    
</div>

                                         </div>
                                 </div>

                             </div>

                         </div>
                    </div>
</div>

<!-- SOCIAL MEDIA AND REVIEW ACTIONS -->
<div class="col-xs-12 pad-none review-hide margin-top-lg">
    <div class="pull-left">
        <a href="https://twitter.com/intent/tweet?url=http://www.dealerrater.com/consumer/social/9162312&amp;via=dealerrater&amp;text=Check+out+the+latest+review+on+McKaig+Chevrolet+Buick+-+A+Dealer+For+The+People" onclick="window.open('https://twitter.com/intent/tweet?url=http://www.dealerrater.com/consumer/social/9162312&amp;via=dealerrater&amp;text=Check+out+the+latest+review+on+McKaig+Chevrolet+Buick+-+A+Dealer+For+The+People', 'sharer', 'toolbar=0,status=0,width=750,height=500');return false;" target="_blank" rel="nofollow" title="Twitter"><img class="align-bottom" height="20" src="https://www.dealerrater.com/ncdn/s/211.20220207.2/Graphics/icons/icon_twitter_sm.png"></a>
        <a href="http://www.facebook.com/share.php?u=http://www.dealerrater.com/consumer/social/9162312" onclick="window.open('http://www.facebook.com/share.php?u=http://www.dealerrater.com/consumer/social/9162312', 'sharer', 'toolbar=0,status=0,width=750,height=500');return false;" target="_blank" rel="nofollow" title="Facebook"><img class="align-bottom" height="20" src="https://www.dealerrater.com/ncdn/s/211.20220207.2/Graphics/icons/icon_facebook_sm.png"></a>
    </div>
    <div class="pull-left margin-left-md">
        <a href="#" onclick="javascript:window.reportReview(9162312); return false;" class="small-text">Report</a> |
        <a href="#" onclick="window.open('/consumer/dealer/23685/review/9162312/print', 'report', 'toolbar=no,scrollbars=yes,location=no,width=720,height=400,resizable=yes'); return false;" class="small-text">Print</a>
    </div>
</div>

<!-- PUBLIC MESSAGES -->

<!-- WAS HELPFUL SECTION -->
<div class="col-xs-12 margin-bottom-lg">
    <div class="pull-right">
        <a href="#" class="helpful-button" onclick="javascript:MarkReviewHelpful(9162312, this); return false;">
            <img class="pull-left margin-right-sm" src="https://www.dealerrater.com/ncdn/s/211.20220207.2/Graphics/icons/icon-thumbsup.png"> Helpful <span class="helpful-count display-none" id="helpful_count_9162312">0</span></a>
    </div>
</div>
</div>

</div>`;
const TEST_HTML_40_1_5 = `<div class="review-entry col-xs-12 text-left pad-none pad-top-lg  border-bottom-teal-lt">
<a name="r9162312"></a>
<div class="col-xs-12 col-sm-3 pad-left-none text-center review-date margin-bottom-md">
    <div class="italic col-xs-6 col-sm-12 pad-none margin-none font-20">February 11, 2022</div>
    <div class="col-xs-6 col-sm-12 pad-none dealership-rating">
        <div class="rating-static visible-xs pad-none margin-none rating-40 pull-right"></div>
        <div class="rating-static hidden-xs rating-40 margin-center"></div>
        <div class="col-xs-12 hidden-xs pad-none margin-top-sm small-text dr-grey">SALES VISIT - USED</div>
    </div>
</div>
<div class="col-xs-12 col-sm-9 pad-none review-wrapper">
<!-- REVIEW BODY -->

<div class="tr margin-top-md">
    <div class="td text-left valign-top ">
        <p class="font-16 margin-bottom-none line-height-25">

            <span class="review-title bolder font-18 italic">Everyone was very friendly and we got a good deal.  We</span>
            <span class="review-snippet"> were pleased with the attention and pricing received.
</span>
            <span class="review-whole display-none"> were pleased with the attention and pricing received.
</span>
                <a id="9162312" class="read-more-toggle pointer line-height-25 small-text bolder inline margin-bottom-md">More</a>
        </p>
    </div>
</div>
<!--  USER-->
<div class="margin-bottom-sm line-height-150">
    
    <span class="italic font-16 bolder notranslate">by Rita Shar</span>
</div>

<!-- REVIEW RATINGS - ALL -->
<div class="pull-left pad-left-md pad-right-md bg-grey-lt margin-bottom-md review-ratings-all review-hide">
    <!-- REVIEW RATING - CUSTOMER SERVICE -->
    <div class="table width-100 pad-left-none pad-right-none margin-bottom-md">
            <div class="tr">
                <div class="lt-grey small-text td">Customer Service</div>
                <div class="rating-static-indv rating-40 margin-top-none td"></div>
            </div>
                            <!-- REVIEW RATING - FRIENDLINESS -->
            <div class="tr margin-bottom-md">
                <div class="lt-grey small-text td">Friendliness</div>
                <div class="rating-static-indv rating-40 margin-top-none td"></div>
            </div>
                    <!-- REVIEW RATING - PRICING -->
            <div class="tr margin-bottom-md">
                <div class="lt-grey small-text td">Pricing</div>
                <div class="rating-static-indv rating-40 margin-top-none td"></div>
            </div>
                    <!-- REVIEW RATING - EXPERIENCE -->
            <div class="tr margin-bottom-md">
                <div class="td lt-grey small-text">Overall Experience</div>
                <div class="rating-static-indv rating-40 margin-top-none td"></div>
            </div>
        <!-- REVIEW RATING - RECOMMEND DEALER -->
        <div class="tr">
            <div class="lt-grey small-text td">Recommend Dealer</div>
            <div class="td small-text boldest">
                Yes
            </div>
        </div>
    </div>


</div>

<!-- EMPLOYEE SECTION -->
<div class="clear-fix  margin-top-sm">
        <div class="col-xs-12 lt-grey pad-left-none employees-wrapper">
            <div class="small-text">Employees Worked With </div>

                         <div class="col-xs-12 col-sm-6 col-md-4 pad-left-none pad-top-sm pad-bottom-sm review-employee">
                             <div class="table">
                                 <div class="td square-image employee-image" style="background-image: url(https://cdn-user.dealerrater.com/images/dealer/23685/employees/a7dcab6d-fbd7-4f2e-bab4-6c23a1c8e625.jpg)"></div>
                                 
                                 <div class="td valign-bottom pad-left-md pad-top-none pad-bottom-none">
                                         <a class="notranslate pull-left line-height-1 tagged-emp small-text teal  margin-right-sm emp-54375" data-emp-id="54375" href="/sales/Mike-Lambert-review-54375/">
                                             Mike Lambert
                                         </a>
                                                                              <div class="col-xs-12 pad-none margin-none pad-top-sm">


<div class="relative employee-rating-badge-sm">
    <div class="col-xs-12 pad-none">
            <span class="pull-left font-14 boldest lt-grey line-height-1 pad-right-sm margin-right-sm border-right">5.0</span>
            <div class="rating-static rating-50 margin-top-none pull-left"></div>
    </div>
    
</div>

                                         </div>
                                 </div>

                             </div>

                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-4 pad-left-none pad-top-sm pad-bottom-sm review-employee">
                             <div class="table">
                                 <div class="td square-image employee-image" style="background-image: url(https://cdn-user.dealerrater.com/images/dealer/23685/employees/ca22768af3f7.jpg)"></div>
                                 
                                 <div class="td valign-bottom pad-left-md pad-top-none pad-bottom-none">
                                         <a class="notranslate pull-left line-height-1 tagged-emp small-text teal   emp-640356" data-emp-id="640356" href="/sales/Taylor-Prickett-review-640356/">
                                             Taylor Prickett
                                         </a>
                                                                              <div class="col-xs-12 pad-none margin-none pad-top-sm">

                                         </div>
                                 </div>

                             </div>

                         </div>
                    </div>
</div>

<!-- SOCIAL MEDIA AND REVIEW ACTIONS -->
<div class="col-xs-12 pad-none review-hide margin-top-lg">
    <div class="pull-left">
        <a href="https://twitter.com/intent/tweet?url=http://www.dealerrater.com/consumer/social/9162312&amp;via=dealerrater&amp;text=Check+out+the+latest+review+on+McKaig+Chevrolet+Buick+-+A+Dealer+For+The+People" onclick="window.open('https://twitter.com/intent/tweet?url=http://www.dealerrater.com/consumer/social/9162312&amp;via=dealerrater&amp;text=Check+out+the+latest+review+on+McKaig+Chevrolet+Buick+-+A+Dealer+For+The+People', 'sharer', 'toolbar=0,status=0,width=750,height=500');return false;" target="_blank" rel="nofollow" title="Twitter"><img class="align-bottom" height="20" src="https://www.dealerrater.com/ncdn/s/211.20220207.2/Graphics/icons/icon_twitter_sm.png"></a>
        <a href="http://www.facebook.com/share.php?u=http://www.dealerrater.com/consumer/social/9162312" onclick="window.open('http://www.facebook.com/share.php?u=http://www.dealerrater.com/consumer/social/9162312', 'sharer', 'toolbar=0,status=0,width=750,height=500');return false;" target="_blank" rel="nofollow" title="Facebook"><img class="align-bottom" height="20" src="https://www.dealerrater.com/ncdn/s/211.20220207.2/Graphics/icons/icon_facebook_sm.png"></a>
    </div>
    <div class="pull-left margin-left-md">
        <a href="#" onclick="javascript:window.reportReview(9162312); return false;" class="small-text">Report</a> |
        <a href="#" onclick="window.open('/consumer/dealer/23685/review/9162312/print', 'report', 'toolbar=no,scrollbars=yes,location=no,width=720,height=400,resizable=yes'); return false;" class="small-text">Print</a>
    </div>
</div>

<!-- PUBLIC MESSAGES -->

<!-- WAS HELPFUL SECTION -->
<div class="col-xs-12 margin-bottom-lg">
    <div class="pull-right">
        <a href="#" class="helpful-button" onclick="javascript:MarkReviewHelpful(9162312, this); return false;">
            <img class="pull-left margin-right-sm" src="https://www.dealerrater.com/ncdn/s/211.20220207.2/Graphics/icons/icon-thumbsup.png"> Helpful <span class="helpful-count display-none" id="helpful_count_9162312">0</span></a>
    </div>
</div>
</div>

</div>`;
const TEST_HTML_50_2_4 = `<div class="review-entry col-xs-12 text-left pad-none pad-top-lg  border-bottom-teal-lt">
<a name="r9162312"></a>
<div class="col-xs-12 col-sm-3 pad-left-none text-center review-date margin-bottom-md">
    <div class="italic col-xs-6 col-sm-12 pad-none margin-none font-20">February 11, 2022</div>
    <div class="col-xs-6 col-sm-12 pad-none dealership-rating">
        <div class="rating-static visible-xs pad-none margin-none rating-40 pull-right"></div>
        <div class="rating-static hidden-xs rating-40 margin-center"></div>
        <div class="col-xs-12 hidden-xs pad-none margin-top-sm small-text dr-grey">SALES VISIT - USED</div>
    </div>
</div>
<div class="col-xs-12 col-sm-9 pad-none review-wrapper">
<!-- REVIEW BODY -->

<div class="tr margin-top-md">
    <div class="td text-left valign-top ">
        <p class="font-16 margin-bottom-none line-height-25">

            <span class="review-title bolder font-18 italic">Everyone was very friendly and we got a good deal.  We</span>
            <span class="review-snippet"> were pleased with the attention and pricing received.
</span>
            <span class="review-whole display-none"> were pleased with the attention and pricing received.
</span>
                <a id="9162312" class="read-more-toggle pointer line-height-25 small-text bolder inline margin-bottom-md">More</a>
        </p>
    </div>
</div>
<!--  USER-->
<div class="margin-bottom-sm line-height-150">
    
    <span class="italic font-16 bolder notranslate">by Rita Shar</span>
</div>

<!-- REVIEW RATINGS - ALL -->
<div class="pull-left pad-left-md pad-right-md bg-grey-lt margin-bottom-md review-ratings-all review-hide">
    <!-- REVIEW RATING - CUSTOMER SERVICE -->
    <div class="table width-100 pad-left-none pad-right-none margin-bottom-md">
            <div class="tr">
                <div class="lt-grey small-text td">Customer Service</div>
                <div class="rating-static-indv rating-40 margin-top-none td"></div>
            </div>
                            <!-- REVIEW RATING - FRIENDLINESS -->
            <div class="tr margin-bottom-md">
                <div class="lt-grey small-text td">Friendliness</div>
                <div class="rating-static-indv rating-40 margin-top-none td"></div>
            </div>
                    <!-- REVIEW RATING - PRICING -->
            <div class="tr margin-bottom-md">
                <div class="lt-grey small-text td">Pricing</div>
                <div class="rating-static-indv rating-40 margin-top-none td"></div>
            </div>
                    <!-- REVIEW RATING - EXPERIENCE -->
            <div class="tr margin-bottom-md">
                <div class="td lt-grey small-text">Overall Experience</div>
                <div class="rating-static-indv rating-40 margin-top-none td"></div>
            </div>
        <!-- REVIEW RATING - RECOMMEND DEALER -->
        <div class="tr">
            <div class="lt-grey small-text td">Recommend Dealer</div>
            <div class="td small-text boldest">
                Yes
            </div>
        </div>
    </div>


</div>

<!-- EMPLOYEE SECTION -->
<div class="clear-fix  margin-top-sm">
        <div class="col-xs-12 lt-grey pad-left-none employees-wrapper">
            <div class="small-text">Employees Worked With </div>

                         <div class="col-xs-12 col-sm-6 col-md-4 pad-left-none pad-top-sm pad-bottom-sm review-employee">
                             <div class="table">
                                 <div class="td square-image employee-image" style="background-image: url(https://cdn-user.dealerrater.com/images/dealer/23685/employees/a7dcab6d-fbd7-4f2e-bab4-6c23a1c8e625.jpg)"></div>
                                 
                                 <div class="td valign-bottom pad-left-md pad-top-none pad-bottom-none">
                                         <a class="notranslate pull-left line-height-1 tagged-emp small-text teal  margin-right-sm emp-54375" data-emp-id="54375" href="/sales/Mike-Lambert-review-54375/">
                                             Mike Lambert
                                         </a>
                                                                              <div class="col-xs-12 pad-none margin-none pad-top-sm">


<div class="relative employee-rating-badge-sm">
    <div class="col-xs-12 pad-none">
            <span class="pull-left font-14 boldest lt-grey line-height-1 pad-right-sm margin-right-sm border-right">4.0</span>
            <div class="rating-static rating-50 margin-top-none pull-left"></div>
    </div>
    
</div>
<div class="relative employee-rating-badge-sm">
    <div class="col-xs-12 pad-none">
            <span class="pull-left font-14 boldest lt-grey line-height-1 pad-right-sm margin-right-sm border-right">5.0</span>
            <div class="rating-static rating-50 margin-top-none pull-left"></div>
    </div>
    
</div>

                                         </div>
                                 </div>

                             </div>

                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-4 pad-left-none pad-top-sm pad-bottom-sm review-employee">
                             <div class="table">
                                 <div class="td square-image employee-image" style="background-image: url(https://cdn-user.dealerrater.com/images/dealer/23685/employees/ca22768af3f7.jpg)"></div>
                                 
                                 <div class="td valign-bottom pad-left-md pad-top-none pad-bottom-none">
                                         <a class="notranslate pull-left line-height-1 tagged-emp small-text teal   emp-640356" data-emp-id="640356" href="/sales/Taylor-Prickett-review-640356/">
                                             Taylor Prickett
                                         </a>
                                                                              <div class="col-xs-12 pad-none margin-none pad-top-sm">

                                         </div>
                                 </div>

                             </div>

                         </div>
                    </div>
</div>

<!-- SOCIAL MEDIA AND REVIEW ACTIONS -->
<div class="col-xs-12 pad-none review-hide margin-top-lg">
    <div class="pull-left">
        <a href="https://twitter.com/intent/tweet?url=http://www.dealerrater.com/consumer/social/9162312&amp;via=dealerrater&amp;text=Check+out+the+latest+review+on+McKaig+Chevrolet+Buick+-+A+Dealer+For+The+People" onclick="window.open('https://twitter.com/intent/tweet?url=http://www.dealerrater.com/consumer/social/9162312&amp;via=dealerrater&amp;text=Check+out+the+latest+review+on+McKaig+Chevrolet+Buick+-+A+Dealer+For+The+People', 'sharer', 'toolbar=0,status=0,width=750,height=500');return false;" target="_blank" rel="nofollow" title="Twitter"><img class="align-bottom" height="20" src="https://www.dealerrater.com/ncdn/s/211.20220207.2/Graphics/icons/icon_twitter_sm.png"></a>
        <a href="http://www.facebook.com/share.php?u=http://www.dealerrater.com/consumer/social/9162312" onclick="window.open('http://www.facebook.com/share.php?u=http://www.dealerrater.com/consumer/social/9162312', 'sharer', 'toolbar=0,status=0,width=750,height=500');return false;" target="_blank" rel="nofollow" title="Facebook"><img class="align-bottom" height="20" src="https://www.dealerrater.com/ncdn/s/211.20220207.2/Graphics/icons/icon_facebook_sm.png"></a>
    </div>
    <div class="pull-left margin-left-md">
        <a href="#" onclick="javascript:window.reportReview(9162312); return false;" class="small-text">Report</a> |
        <a href="#" onclick="window.open('/consumer/dealer/23685/review/9162312/print', 'report', 'toolbar=no,scrollbars=yes,location=no,width=720,height=400,resizable=yes'); return false;" class="small-text">Print</a>
    </div>
</div>

<!-- PUBLIC MESSAGES -->

<!-- WAS HELPFUL SECTION -->
<div class="col-xs-12 margin-bottom-lg">
    <div class="pull-right">
        <a href="#" class="helpful-button" onclick="javascript:MarkReviewHelpful(9162312, this); return false;">
            <img class="pull-left margin-right-sm" src="https://www.dealerrater.com/ncdn/s/211.20220207.2/Graphics/icons/icon-thumbsup.png"> Helpful <span class="helpful-count display-none" id="helpful_count_9162312">0</span></a>
    </div>
</div>
</div>

</div>`;
describe("Testing ratings related functions", () => {
    test("extractDealershipRating takes html containing a 50 dealer rating - should return 50", () => {
        expect(extractDealershipRating(TEST_HTML_50_2_5)).toEqual(50);
    });
    test("extractDealershipRating takes html containing a 40 dealer rating - should return 40", () => {
        expect(extractDealershipRating(TEST_HTML_40_1_5)).toEqual(40);
    });
    test("extractDealershipRating takes html containing no dealer rating - should return 0", () => {
        expect(extractDealershipRating("<div></div>")).toEqual(0);
    });
    test("extractDealershipRating takes no html - should return 0", () => {
        expect(extractDealershipRating("")).toEqual(0);
    });

    test("extractEmployeeRatings takes html containing two (2) employees w/ rating five (5)", () => {
        expect(extractEmployeeRatings(TEST_HTML_50_2_5)).toEqual({
            employee_ratings_avg: 5,
            num_employee_ratings: 2,
        });
    });
    test("extractEmployeeRatings takes html containing one (1) employees w/ rating five (5)", () => {
        expect(extractEmployeeRatings(TEST_HTML_40_1_5)).toEqual({
            employee_ratings_avg: 5,
            num_employee_ratings: 1,
        });
    });
    test("extractEmployeeRatings takes html containing two (2) employees w/ rating four (4) AND five (5)", () => {
        expect(extractEmployeeRatings(TEST_HTML_50_2_4)).toEqual({
            employee_ratings_avg: 4.5,
            num_employee_ratings: 2,
        });
    });
    test("extractEmployeeRatings takes html containing no ratings", () => {
        expect(extractEmployeeRatings("<div></div>")).toEqual({
            employee_ratings_avg: 0,
            num_employee_ratings: 0,
        });
    });
});
