var http = require ("http")
http.get(process.argv[2],function(res){
res.setEncoding('utf8')
res.on('data',function(data) {console.log(data.toString())})
res.on('error',function(err){console.log(err)})
}).on('error',function(err){console.log(err)})