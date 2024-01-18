// require('dotenv').config()

// const express = require('express');
// const workoutRoutes = require('./routes/workouts');
// const mongoose = require('mongoose');

// //express app, stored in app constant
// const app = express();


// //middleware
// app.use(express.json());

// app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next();
// })

// //to listen to server only when data base is connected.
// mongoose.connect(process.env.MONGO_URI)
//     .then(()=>{
//         app.listen(process.env.PORT, () =>
//         {
//             console.log("Listening to server", process.env.PORT);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// //after using Express router 
// app.get('/api/workouts', workoutRoutes);

// //routes

// // app.get('/', (req, res)=>{
// //    res.json({mssg: "hello"});
// // })

// //listen for requests
// // app.listen(process.env.PORT, () =>
// // {
// //     console.log("Listening to server", process.env.PORT);
// // });

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')


// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

// app.listen(process.env.PORT, () =>
// {
//     console.log("Listening to server", process.env.PORT);
// });
 
