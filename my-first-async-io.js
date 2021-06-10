const fs= require("fs");
fs.readFile(process.argv[2],function(err,buf)
{
      if (err) {
      return console.error(err);
   }else{
       console.log(buf.toString().split('\n').length-1);
   }
});