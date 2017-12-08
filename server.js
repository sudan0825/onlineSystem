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
//    name:"second base64",
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
     
              

     var imagedata = new Buffer(data[0].image).toString('base64');
       res.json(imagedata);
         
//      console.log("check"+ data[2]);
//       console.log("check"+ data[0].image.buffer);
//      console.log("check"+ data[1].image.buffer);
             
        
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

//
///**
// * Module dependencies
// */
//
//var express = require('express');
//var fs = require('fs');
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//var path = require('path');
//
//var bodyParser =require('body-parser');
//var methodOverride =require('method-override');
//var morgan = require('morgan');
//
//
//
//
//
//// img path
//
//var imgPath = path.resolve(path.join(__dirname, "/public/imgs", "homeimg.jpeg"))
//// connect to mongo
//mongoose.connect('localhost', 'testing_storeImg');
//
//// example schema
//var schema = new Schema({
//    img: { data: Buffer, contentType: String }
//});
//
//// our model
//var A = mongoose.model('A', schema);
//var server = express();
//
//
//// get all data/stuff of the body (POST) parameters
//server.use(morgan('dev')); // log every request to the console
//server.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
//server.use(bodyParser.json()); // parse serverlication/json 
//server.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//
//
//
//server.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
//server.use('/node_modules', express.static(__dirname + '/node_modules')) //After install AngularJS, we need to call node modules directory before using Angular js in index file
//server.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate 
//
//mongoose.connection.on('open', function () {
//  console.error('mongo is open');
//
//  // empty the collection
//  A.remove(function (err) {
//    if (err) throw err;
//
//    console.error('removed old docs');
//
//    // store an img in binary in mongo
//    var a = new A;
//    a.img.data = fs.readFileSync(imgPath);
//    a.img.contentType = 'image/jpeg';
//    a.save(function (err, a) {
//      if (err) throw err;
//
//      console.error('saved img to mongo');
//
//      // start a demo server
//      
//      server.get('/api/display', function (req, res, next) {
//        A.findById(a, function (err, doc) {
//          if (err) return next(err);
//          res.contentType(doc.img.contentType);
//          res.send(doc.img.data);
//        });
//      });
//     server.get('*', function (req, res) {
//        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
//    });
//
//      server.on('close', function () {
//        console.error('dropping db');
//        mongoose.connection.db.dropDatabase(function () {
//          console.error('closing db connection');
//          mongoose.connection.close();
//        });
//      });
//
//      server.listen(3333, function (err) {
//       
//        console.error('server listening on http://%s:%d', err);
//        console.error('press CTRL+C to exit');
//      });
//
//      process.on('SIGINT', function () {
//        server.close();
//      });
//    });
//  });
//
//});