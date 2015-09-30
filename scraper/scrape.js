//https://scotch.io/tutorials/scraping-the-web-with-node-js
var request = require("request"),
    cheerio = require("cheerio"),
    mkdirp  = require("mkdirp"),
    fs      = require("fs"),
    path    = require("path");

// polyfill for Promise (and other stuff)
require("es6-shim");


var outputFile = path.resolve("../app/data/heros.json");

// list of hero urls
var heroUrls = require("./heroUrls.js");

// generate heros.json
Promise.all(
    // go through all the hero urls, and scrape the data
    heroUrls.map(function(heroUrl, i){
        return fetchHero(heroUrl, i * 500);
    })
).then(function(allHeros){

    var output = {
        heros: allHeros
    };

    // write the data to the json file
    mkdirp.sync(path.dirname(outputFile));
    fs.writeFile(outputFile, JSON.stringify(output, null, 4), {encoding: "utf8"});     
    
    console.log("Hooray! ", outputFile, " was generated!");
})
.catch(function(error){
    console.log("failed to scrape :( ", error);
});


// eg url: http://www.superherodb.com/superman/10-791/
function fetchHero(url, delay){

    // returns a promise
    return new Promise(function (resolve, reject) {

        setTimeout(function(){
            makeRequest(resolve, reject);
        }, delay);

    });


    function makeRequest(resolve, reject){

        // make an http request to get the html of the page
        request(url, function(error, response, html){

            // abort if there is an error
            if(error){ console.error(error); reject(error); return; }

            console.log("scraping:", url);

            // load the html into cheerio https://github.com/cheeriojs/cheerio
            var $ = cheerio.load(html);


            if ($(".titlehome h1").text() === ""){
                console.error("failed:", html);
            }

            // create our hero object
            var hero = {
                name: $(".titlehome h1").text(),
                nickName: $(".titlehome h2").text(),
                url: url
            };

            var imgBase = "http://www.superherodb.com";

            // profile img
            var imgCssUrl = $(".profileportrait").css("background-image");      
            hero.profileImg = imgBase + imgCssUrl.replace(/url\(\'?(.*?)\'?\)/, "$1");
            

            // banner img
            var bannerImgCssUrl = $(".imgheader").css("background-image");
            hero.bannerImg = imgBase + bannerImgCssUrl.replace(/url\(\'?(.*?)\'?\)/, "$1");


            // publisher and alignment
            var pubAndAlign = $("h3").filter(function(i, el) {
                    return $(el).text() === "Biography";
                })
                .next(".content")
                .find(".table tr")
                .filter(function(i, el){

                    var tds = $(el).find("td");
                    var label = $(tds[0]).text();

                    return (label === "Publisher") || (label === "Alignment");
                })
                .map(function(i, el){

                    var tds = $(el).find("td");
                    return $(tds[1]).text().toLowerCase();
                })
                .toArray();

            hero.publisher = pubAndAlign[0];
            hero.alignment = pubAndAlign[1];
                

            // stats
            hero.stats = $("h3").filter(function(i, el) {
                    return $(el).text() === "Powerstats";
                })
                .next(".content")
                .find(".gridbarholder")
                .map(function(i, el){
                    return  {
                        label: $(el).find(".gridbarlabel").text().toLowerCase(),
                        value: parseInt($(el).find(".gridbarvalue").text().toLowerCase())
                    };
                })
                .toArray()
                .reduce(function(prev, cur){
                    prev[cur.label] = cur.value;
                    return prev;
                }, {});


            // appearance
            hero.appearance = $("h3").filter(function(i, el) {
                    return $(el).text() === "Appearence";
                })
                .next(".content")
                .find(".table tr")
                .map(function(i, el){

                    var tds = $(el).find("td");

                    return {
                        label: $(tds[0]).text().toLowerCase().toCamelCase(),
                        value: $(tds[1]).text().toLowerCase()
                    };
                })
                .toArray()
                .reduce(function(prev, cur){
                    prev[cur.label] = cur.value;
                    return prev;
                }, {});


            // resolve this promise with our constructed hero object
            resolve(hero);
            
        });

    }
}

// helper funtion to convert a string to camelCase
String.prototype.toCamelCase = function(){

    return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};

