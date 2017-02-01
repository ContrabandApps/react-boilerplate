const express = require('express');
const app = express();
const port = 3000;

// Set static file directory
app.use(express.static('public'));

// Set server port
app.listen(port, function(){
  console.log('Listening at http://localhost' + port);
});
