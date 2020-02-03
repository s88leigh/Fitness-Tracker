const db = require('../models')

module.exports = {
    
    getLastWorkout: ({ body }, res) => {
        //find all of the last workout from the body
        db.Workout.find({})
            //then return it as json object
            .then(response => res.json(response))
            //if error, show status 404
            .catch(err => res.sendStatus(404).json(err))
    },
    createWorkout: ({ body }, res) => {
        //creates a workout array of different exercises
        db.Workout.create(req.body)
       //return as json object
        .then(response=> res.json(response))
        
        .catch(err => res.sendStatus(404).json(err))
     },
    addExercise: ({ body, params }, res) => {
        //find or update an excercise by id
        db.Workout.findByIdAndUpdate(params.id, {
            //adds the exercises to the workout array
            $push: {exercises: body},
        })
            //then return it as json object
            .then(response => res.json(response))
            .catch(err => res.sendStatus(404).json(err))
    },
   
    getWorkoutsInRange: ({ body }, res) => {
        //find all the range of each exercise (duration, weight, reps, sets)
        db.Workout.find({})
        .then(response => res.json(response))
        .catch(err => res.sendStatus(404).json(err))
     },
} 