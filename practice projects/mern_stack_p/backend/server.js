require('dotenv').config()

const express = require('express');

//express app, stored in app constant
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes

app.get('/', (req, res)=>{
   res.json({mssg: "hello"});
})

//listen for requests
app.listen(process.env.PORT, () =>
{
    console.log("Listening to server", process.env.PORT);
});