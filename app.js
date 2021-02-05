const express = require('express');
const app = express();
const port = 5000;
app.set('view engine', 'hbs');

// Run $ npm install

// Todo
// Add a route that accepts a parameter named user
// Log the parameter in the console
// Then pass the parameter to the view 'profile'

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});