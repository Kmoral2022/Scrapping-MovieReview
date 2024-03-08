const request = require('request-promise');
const cheerio = require('cheerio');

const Url = 'https://letterboxd.com/film/jagun-jagun/';

(async () => {

const response = await request(Url)
// console.log(response)

let $ = cheerio.load(response);

let title = $('section[class="film-header-lockup -default"]>h1').text();
// console.log(title);

let directedBy= $('span[class="prettify"]').text();
// console.log(directedBy)

let minutesLong = $('p[class="text-link text-footer"]').text();
// console.log(minutesLong)

let movieSummary = $('div[class="truncate"] >p').text();
// console.log(movieSummary)

let movieViews = $('a[class="has-icon icon-watched icon-16 tooltip"]').text();
// console.log(movieViews)

let jayReview = $('div[class="body-text -prose collapsible-text"] >p').text();
// console.log(jayReview)

let trailerCountries = $('span[class="name"]').text();
// console.log(trailerCountries)
})()


