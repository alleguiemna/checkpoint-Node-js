// var mymodule = require ('./mymodule')
// var dir= process.argv[2];
// var extFilter=  process.argv[3];

//  mymodule(dir, extFilter, function(err,list){
//      (err) ? console.log(err) :  console.log(list)
//     //  list.forEach(function (file){console.log(list.toString())})
//     })
var path = require('path');
var mymodule = require('./mymodule');
var dir = process.argv[2];
var filterExtension = process.argv[3];

var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}

mymodule(dir, filterExtension, callback);