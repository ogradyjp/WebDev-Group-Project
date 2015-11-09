/**
 *  index.js
 *  @author John O'Grady
 *  @note index javascript file, for routing request to correct file
 */

/** Port server will listen for requests on **/
 var PORT = 80;

 var express = require('express');
 var app = express();

/** routes... **/
 app.get('/', function(request, response) {
     response.sendFile(__dirname + '/public/views/index.html');
 });

/** start an instance of the app/server **/
 var server = app.listen(PORT, function () {
     var hostname = server.address().address;
     var port = server.address().port;
     console.log('App listening at http://%s%s', hostname, port);
 });
