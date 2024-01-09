const express = require('express');

//exress is used inplace of nodeJS so that specifying path and req,res can be done together and also content type need not be specified.

const app = express();            //any variable can be created

app.listen(8080);

app.get('/', (req, res) =>{
    res.send('<p>Home page</p>');     //automatically identifies the type of data.
})

app.get('/about', (req, res) =>
{
    res.send('<p> About pg </p>');
})

//to send a file:

// app.get('/', (req, res) => {
//     res.sendFile('./index.html', {root: __dirname});
// })

//to redirect to a file

// app.get('/about-us', (req, res) => {
//     res.redirect'./about.html');
// })

//to make a 404 page
//used for any url, so written at the last.
// app.use( (req, res) => {
//     res.status(404).sendFile('./index.html', {root: __dirname});
// });

