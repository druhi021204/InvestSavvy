require('dotenv').config()

const express = require('express');
const workoutRoutes = require('./routes/workouts');

//express app, stored in app constant
const app = express();


//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//after using Express router 
app.get('/api/workouts', workoutRoutes);

//routes

// app.get('/', (req, res)=>{
//    res.json({mssg: "hello"});
// })

//listen for requests
app.listen(process.env.PORT, () =>
{
    console.log("Listening to server", process.env.PORT);
});