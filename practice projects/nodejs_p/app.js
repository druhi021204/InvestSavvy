// with the help of express, we are building the app that runs the server.

const express = require('express');

//exress is used inplace of nodeJS so that specifying path and req,res can be done together and also content type need not be specified.

const app = express();            //any variable can be created


//register view engine
app.set('view engine', 'ejs');       //by default it searches into view folder and gets the ejs file. 


app.listen(8080);

// app.get('/', (req, res) =>{
//     res.send('<p>Home page</p>');     //automatically identifies the type of data.
// })

// app.get('/about', (req, res) =>
// {
//     res.send('<p> About pg </p>');
// })

//to send a file:

// app.get('/', (req, res) => {
//     //when we use express
//     // res.sendFile('./index.html', {root: __dirname});
//     //when we use view engine, i.e ejs
//     // res.render('index');
// });

// app.get('/', (req, res) => 
// {
//     res.render('about');
// });

//to redirect to a file

// app.get('/about-us', (req, res) => {
//     res.redirect'./about.html');
// })

//to make a 404 page
//used for any url, so written at the last.
// app.use( (req, res) => {
    //after express
//     res.status(404).sendFile('./index.html', {root: __dirname});
   //after express
    //   res.status(404).render('404'); 
// });

