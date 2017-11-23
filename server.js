//require modules =====================
var express=require('express');
var app =express();
var mongoose =require('mongoose');
var bodyParser =require('body-parser');
var methodOverride =require('method-override');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');


//database configuration 


//set db url connnection
var url = "mongodb://localhost:27017/onlineSystem";

//connect to the url
mongoose.connect(url);


var port = process.env.PORT || 8888; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json



app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use('/node_modules', express.static(__dirname + '/node_modules')) //After install AngularJS, we need to call node modules directory before using Angular js in index file
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT


// populated 
var myModel  = require('./server/dbmodel.js');


var testPath = path.resolve(path.join(__dirname, "/public/imgs", "homeimg.jpeg"))


//if(fs.existsSync(testPath)){
//    console.log("r")
//}else{
//    console.log("no");
//}
//var myimg = new myModel({
//    name:"fist Image",
//    discription:"SAVE AND GET",
//    image:fs.readFileSync(testPath),
//    price:23456
//});
//
//myimg.save(function (err, d){
//
//if(err){
//    console.log("something wrong"+ err);
//}
//
// })


//GET request. Set API URL to any URL except the routes to views
app.get('/api/display',(req, res,next)=>{
   
  myModel.find(function(err,data){
      if(err){
          res.send("what is wrong : "+err);
      }
     
               res.json(data);
        
  }) 
})



// application -------------------------------------------------------------
app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app