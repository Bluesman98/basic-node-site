var http = require('http');
var fs = require('fs');
const url = require("url");

http.createServer(function (req, res) {

  const reqUrl = url.parse(req.url).pathname

  if(reqUrl == "/") {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}
else if(reqUrl == "/about") {
    fs.readFile('about.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}
else if(reqUrl == "/contact-me") {
    fs.readFile('contact-me.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}

else  {
    fs.readFile('404.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}

}).listen(8080); 