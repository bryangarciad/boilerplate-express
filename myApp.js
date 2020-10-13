
const { json } = require('body-parser');
var express = require('express');
var app = express();
require('dotenv').config()



// --> 7)  Mount the Logger middleware here
app.use(function middleware(req, res, next) {
    // Do something
    // Call the next function in line:
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
  });

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 app.get("/json", (req, res)=>{
    if(process.env.MESSAGE_STYLE=="uppercase"){
        res.json({message: "HELLO JSON"});
    }
    else{
        res.json({message: "Hello json"});
    }
 })
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */
app.get('/now', function(req, res, next) {
    req.now = new Date().toString();;  // Hypothetical synchronous operation

    next();
  }, function(req, res) {
    res.send({time: req.now});
  });

/** 9)  Get input from client - Route parameters */
app.get('/:word/echo', (req, res)=>{
    let {word} = req.params;
    res.json({
        echo: word
      });
})

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.get('/name', (req, res)=>{
    let {first: firstName, last: lastName} = req.query;
    res.json({
        name: `${firstName} ${lastName}`
      });
})

app.get("/api/timestamp/", (req, res) => {
    res.json({ unix: Date.now(), utc: Date() });
  });
  
  app.get("/api/timestamp/:date_string", (req, res) => {
    let dateString = req.params.date_string;
  
    //A 4 digit number is a valid ISO-8601 for the beginning of that year
    //5 digits or more must be a unix time, until we reach a year 10,000 problem
    if (/\d{5,}/.test(dateString)) {
      dateInt = parseInt(dateString);
      //Date regards numbers as unix timestamps, strings are processed differently
      res.json({ unix: dateString, utc: new Date(dateInt).toUTCString() });
    }
  
    let dateObject = new Date(dateString);
  
    if (dateObject.toString() === "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } else {
      res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
    }
  });
// your first API endpoint... 
    app.get("/api/whoami", function (req, res) {
    //Store all requester's headers
    const requestHeaders = req.headers;
    
    //Create object storing necessary info
    const headerParserInfo = {
      "ipaddress": req.ip,
      "language": requestHeaders["accept-language"],
      "software": requestHeaders["user-agent"]
    };
  
    res.json(headerParserInfo);
  });
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
// app.listen(process.env.PORT || 3000 ); 

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
