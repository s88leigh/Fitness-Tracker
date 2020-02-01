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
    addExercise: ({ body, params }, res) => {
        //find or update an excercise  by id
        db.Workout.findByIdAndUpdate(params.id, body)
            //then return it as json object
            .then(response => res.json(response))
            .catch(err => res.sendStatus(404).json(err))
    },
    createWorkout: ({ body }, res) => {
        //creates an excercise
        db.Workout.create(body)
            //request for the di
            .then(dbExcercise => res.json(dbExcercise))
            .catch(err => res.sendStatus(404).json(err))
     },
    getWorkoutsInRange: ({ body }, res) => {
        //not sure what the range is...
        db.Workout.find({})
        .then(response => res.json(response))
        .catch(err => res.sendStatus(404).json(err))
     },
} 