console.log("hello from express");

var express = require("express");
var app = express();
var url  = require('url');


app.get('/',function(request,response){
    response.send("Hello in the web");
})

app.get('/login',function(request,response){
    response.send("Login");
})

//PART 2
var movies = require("./movies.json");

app.get('/movies', function(req,res){
    res.send(movies);
})

app.get('/movies/tittle', function(req,res){
    var tittles = [];
    for(let i=0;i<movies.length;i++){
        var movie = movies[i];
        tittles[i] = movie.tittle;
    }
    res.send(tittles);
})

//Create a new Entry GET - READ
app.get('/movies/create',function(req,res){
    
    var urlParts = url.parse(req.url,true);
    var query = urlParts.query;
    let moviesCount = movies.length;
    movies[moviesCount] = query;
    res.send(movies);
})


var bodyParser = require('body-parser');
app.use(bodyParser.json());
//POST - CREATING NEW OBJECTS
app.post('/movies/create',function(req,res){
    let body = req.body;
    let movie = {
        "tittle" : body.tittle,
        "genere" : body.genere,
        "grossing": body.grossing,
        "year" : body.year
    }
    movies[movies.length] = movie;
    res.send(movies);
})


app.put('/movies/update',function(req,res){
    //Tittle
    var tittle = req.body.tittle;
    for(var i=0;i<movies.length;i++){
        var movie = movies[i];
        if(movie.tittle === tittle){
            movie.genere = req.body.genere;
            break;
        }
    }
    res.send(movies);
})

//Start the server
app.listen(8080);
