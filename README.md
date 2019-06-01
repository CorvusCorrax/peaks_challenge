# Marvel test for Peaks

This project was made for a test by Peaks. It's powered by Angular and should have used the marvel API (developer.marvel.com) as data source.
Unfortunately, the tha marvel API was unresponsive, so I used mock data sets. While working, this solution is not ideal and accounts for the deviations
between the tests and the final product : it should have been 20 heroes per page, with a more precise comic collection. I also simulate the loading time
when "loading" the next/previous set of heroes.

## Setup

If you don't have it yet, install angular as global : `npm install -g @angular/cli`.
Clone the repository in a folder and then run `npm install` to get all dependencies.
Once this is done, run `ng serve` and navigate to `http://localhost:4200/`;

## Running tests

Run `npm test`.
