//wrting the functions of post, get, delete, etc

const Workout = require('../models/workoutModels')

//get all workouts

//get a singke workout

//create a new workout
const createWorkout = async(req, res) => {
    const {title, load, reps} = req.body
//add doc to db

    try{
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error){
      res.status(400).json({error: error.message})
    }
   
}
//delete a workout

//update a workout





module.exports = {
    createWorkout
}
