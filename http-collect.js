var http = require("http")
const bl = require('bl')
http.get(process.argv[2],function(res){
    res.pipe(bl(function(err,data){
        if(err){
             console.log(err)
        }
        else{
            data=data.toString()
             console.log(data.length)
             console.log(data)
        }
    }))
})
