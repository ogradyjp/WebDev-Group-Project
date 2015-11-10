/**
 *  index.js
 *  @author John O'Grady
 *  @date 10/11/2015
 *  @note index javascript file, handle routing and server requets
 */

 var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');
 var Feed = require('feed');
 var orm = require('orm');
 var Cipher = require('./public/res/js/cipher.js');

 orm.connect('postgres://wmznuqubnhpoqp:ETFxj9YgaezDqQhA-OrIeou-7x@ec2-107-21-219-201.compute-1.amazonaws.com:5432/d3nm324q5l4nb6?ssl=true', function(err, db) {
    if (err) { throw err; }
    console.log('successfully connected to sql database!');
    var person = db.define('test', {
        name: String
    });
 });

/**
 *  for calling js, and css files, etc...
 */
 app.use(express.static(__dirname + '/public'));

 app.use(bodyParser.urlencoded({extended: false}));

/** routes... **/
 app.get('/', function(request, response) {
     response.sendFile(__dirname + '/public/views/index.html');
 });

 app.post('/test', function(request, response) {
     if (request.body.inputtext) {
         var cipher = new Cipher(request.body.inputtext);
         response.send(cipher.caesar(cipher.string));
     }
 });

 app.get('/rss', function(request, response) {
     var feed = new Feed({
        title: 'My Feed Title',
        description: 'This is my personal feed',
        link: 'http://cipher-com.herokuapp.com/',
        image: 'http://localhost/public/res/img/brand_logo_new.png'
     });
     response.set('Content-Type', 'text/xml');
     response.send(feed.render('rss-2.0'));
 });

/** start an instance of the app/server **/
 var server = app.listen((process.env.PORT || 80), function () {
     var hostname = server.address().address;
     var port = server.address().port;
     console.log('App listening at http://%s%s', hostname, port);
 });
