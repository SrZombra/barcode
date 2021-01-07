// Simple HTTP server that renders barcode images using bwip-js.

const bwipjs = require('bwip-js');
var cors = require('cors')
var express = require('express');
// This shows how to load the Inconsolata font, supplied with the bwip-js distribution.
// The path to your fonts will be different.
//bwipjs.loadFont('Inconsolata', 100,
//      require('fs').readFileSync('./fonts/Inconsolata.otf', 'binary'));

var app = express();
app.use(cors());


app.get('/', function(req, res) {
    // If the url does not begin /?bcid= then 404.  Otherwise, we end up
    // returning 400 on requests like favicon.ico.
    if (req.url.indexOf('/?bcid=') != 0) {
        res.writeHead(404, { 'Content-Type':'text/plain' });
        res.end('BWIPJS: Unknown request format.', 'utf8');
    } else {
        bwipjs.request(req, res); // Executes asynchronously
    }

});



app.listen(3030, function () {
    console.log('CORS-enabled web server listening on port 80');
});