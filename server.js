var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

app.use(express.static('./app/public'));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Body Parser 
// =============================================================
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());

// Include routes
// =============================================================
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});






