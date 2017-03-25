/**
* Twitter Test Class Hashtag
* @version 201703242300
*/

// Load Modules
console.log("\033[2m");
var express = require("express");
console.log("- Carregando Modulos");
var twitter = require('twitter');
var credential = require("./credential");

// Express Object
console.log("- Carregando Express");
var app = express();

// Twitter Object
console.log("- Carregando Twitter (API)");
var client = new twitter({
  consumer_key: credential.consumer_key,
  consumer_secret: credential.consumer_secret,
  access_token_key: credential.access_token_key,
  access_token_secret: credential.access_token_secret
});

// Start Monitor
console.log("\033[0m");
console.log("\033[1m");
console.log(" Monitor de Mensagens Ativado! Por favor enviem um tweet com a hashtag #ast06.");
console.log("\033[0m");
var stream = client.stream('statuses/filter', {track: '#love'});
stream.on('data', function(tweet) {
    var text = "";
    // Author
    text += "\033[0m";
    text += "\n--\n";
    text += "\033[1m";
    text += "\033[34m";
    text += " " + tweet.user.name + " (@" + tweet.user.screen_name + ")\n";
    // Tweet
    text += "\033[0m";
    text += "\033[39m";
    text += "\033[3m";
    text += " " + tweet.text + "\n";
    text += "\033[0m";
    text += "--\n"
    console.log(text);
    setTimeout(function(){ /* Wait */}, 2000);
});

// Error Stream
stream.on('error', function() {});
