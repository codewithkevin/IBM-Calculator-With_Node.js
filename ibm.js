var http = require('http');
var router = require('./router.js');

var server = http.createServer(function (request, response) {

response.writeHead(200,{"Content-type" : "text/css"});
var fileContents = fs.readFileSync('./views/styles.css', {encoding: "utf8"}, function(err, data) {
 if (!err) {
   response.write(data);
} else {
  console.log(err);
}
});

  router.home(request, response);
  router.user(request, response);

});

server.listen(3000);