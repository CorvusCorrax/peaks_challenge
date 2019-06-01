# Marvel test for Peaks

This project was made for a test by Peaks. It's powered by Angular and should have used the marvel API (developer.marvel.com) as data source.
Unfortunately, the tha marvel API was unresponsive, so I used mock data sets. While working, this solution is not ideal and accounts for the deviations
between the tests and the final product : it should have been 20 heroes per page, with a more precise comic collection. I also simulate the loading time
when "loading" the next/previous set of heroes.

## Purpose

The application shows two 7 heroes list (should have been 20 if the API worked) with paging. A click on a hero shows you his details : name, description, number of comics he appeared in and the first 3 comics he appeared in. You can also click on the star icon to favor up to 5 heroes. You can access your favorite heroes list by clicking the button on the top left. Clicking the star button again will unfavor the hero and probably make him sad, don't do it. Unfavoring heroes such as the Punisher or Ghost Rider may bring grave consequences on your health or immortal soul.

## Setup

If you don't have it yet, install angular as global : `npm install -g @angular/cli`.
Clone the repository in a folder and then run `npm install` to get all dependencies.
Once this is done, run `ng serve` and navigate to `http://localhost:4200/`;

## Running tests

Run `npm test`.
