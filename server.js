const fs = require('fs');
var finalhandler = require('finalhandler')
var http = require('http')
var Router = require('router')




var router = Router()
router.get('/', function (req, res) {
  fs.readdir('./img', (err, data) => {
    res.writeHead(200, 'Content-Type', 'application/json')
    res.end(JSON.stringify(data));
  })
})

router.get('/img/:id', function (req, res) {

  fs.readFile(`./img/${req.params.id}.jpg`, function (err, data) {

    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data); // Send the file data to the browser.

  })
})

var server = http.createServer(function (req, res) {
  router(req, res, finalhandler(req, res))
})

server.listen(4000)