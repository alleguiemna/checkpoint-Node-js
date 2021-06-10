var fs = require("fs");
fs.readdir(process.argv[2], function (err, list) {
    if(err){
    console.log(err)
     }
     else
        {
        for(var i=0; i<list.length; i++)
        {
            if (list[i].match('.' + process.argv[3]))
             {
                console.log(list[i]);
            }
        }
        }
  });


