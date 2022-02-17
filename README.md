##How to run:##

1. install all packages
    - : `npm install`
2. Run the program
    - `npm start`

How to run tests:

1. run tests
    - `npm test`

Calculating "overly positive" comments:

1. Explanation:

    - In reviewsHelpers.ts, the calculateExcitementLevel() function uses the following to calculate the final "excitement" score: num_employee_ratings, rating_employee_avg, rating_dealership, and num_exclamations_temp

2. definitions:
    1. num_employee_ratings: number of employees rated by the reviewer (number is 0 or more): important because multiple enthusiastic ratings shows a lot of excitement. Note: This could have many negative ratings. This is not a problem because we consider rating_employee_avg as a factor so the ratings should balance out if all of the ratings are negative.
    2. rating_employee_avg: the average of all the individual employees rated by the reviewer (out of 0-5, 5 being positive score)
    3. rating_dealership: the overall rating the reviewer gave the dealership (out of 0-50); important because it is the overall dealership score
    4. num_exclamations: the number of exclamation marks that the reviewer used (number is 0 or more); important because excessive exclamation marks = too obviously excited
3. Calculation:
    1. divide rating_dealership by 10 because the scores are out of 50 and to normalize as much as I can to the other numbers
    2. sum each number and that is the excitement score
4. Result:
   Highest score = "most overly positive"
