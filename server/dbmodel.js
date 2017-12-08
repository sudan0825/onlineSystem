var mongoose = require('mongoose');
var fs = require('fs');

//
//var imgSchema = new mongoose.Schema({image:{type:String, data:Buffer, require: true}
//    
//})
var myModel = mongoose.model('productInfo', new mongoose.Schema({
     name:{type: String, require: true },
    
     discription:{type:String, require: true},
    
    
     image:{type: Buffer, require: true},
    
     price:{type: Number, require:true}

}));




module.exports = myModel;