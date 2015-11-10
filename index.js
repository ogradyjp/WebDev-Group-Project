/**
 *  index.js
 *  @author John O'Grady
 *  @date 10/11/2015
 *  @note index javascript file, handle routing and server requets
 */

 var express = require('express');
 var app = express();

/**
 *  for calling js, and css files, etc...
 */
 app.use(express.static(__dirname + '/public'));

/** routes... **/
 app.get('/', function(request, response) {
     response.sendFile(__dirname + '/public/views/index.html');
 });

/** start an instance of the app/server **/
 var server = app.listen((process.env.PORT || 80), function () {
     var hostname = server.address().address;
     var port = server.address().port;
     console.log('App listening at http://%s%s', hostname, port);
 });
