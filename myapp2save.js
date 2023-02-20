const fs = require('fs');
fs.writefile("myapp2.js","Hey There!",function(err) {
  if err {
     return console.log(err);
    }
  console.log("The file was saved!");
 });
