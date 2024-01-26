const express = require('express')

//to make a post, we need a variable of ('modules/workout.js)



const router = express.Router()
const {
  createWorkout
} = require('../controllers/workoutcontroller')

// GET all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single workout'})
})

// POST a new workout
// router.post('/', async (req, res) => {
 
//   // res.json({mssg: 'POST a new workout'})
// })
router.post('/', createWorkout)
// router.post('/', (req, res) => 
// {
//   res.json({mssg: 'POST a new workout'})
// })



// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'})
})

module.exports = router