const app = require('express')();
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

app.get('/' , function(req , res){
    res.send("No worries its working");
});

app.get('/scrap' , function(req , res){
    console.log("Landed");
    let url = "http://www.imdb.com/title/tt1229340/";
    request(url , function(err , response , htmlPage){
        if(!err){
            let htmlData = cheerio.load(htmlPage);
            console.log(htmlData);
            res.send("done");
        }
    });
    
});

app.listen(5055, function(){
    console.log("App started on port 5055");
});