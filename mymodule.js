// var fs = require("fs")

// module.exports = function (dir, extFilter, callback){
//     fs.readdir(dir, function (err, list){
//         if (err) {
//             return callback(err)
//          }
//          else{
//             for(var i=0;i<list.length;i++){
            
//                 if (list[i].match('.' + extFilter)){
//                     return callback(null,list)
//                 }
                
//             }
//          }
//     })
// }

    
var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) return callback(err);
        else {
            list = list.filter(function (file) {
                if(path.extname(file) === '.' + extension) return true;
            })
            return callback(null, list);
        }
    })
}

