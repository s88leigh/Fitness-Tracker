const db = require('../models')

module.exports = {
    getLastWorkout: ({ body }, res) => {
        db.Workout.find({})
            .then(response => res.json(response))
            .catch(err => res.sendStatus(404).json(err))
    },
    addExercise: ({ body, params }, res) => {
        db.Workout.findByIdAndUpdate(params.id, body)
            .then(response => res.json(response))
            .catch(err => res.sendStatus(404).json(err))
    },
    createWorkout: ({ body }, res) => { },
    getWorkoutsInRange: ({ body }, res) => { },
}