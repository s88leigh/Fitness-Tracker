const workoutController = require('../controllers/workoutController')
const router = require("express").Router();

// router.get('/workouts')
router.route("/workouts")
    .get(workoutController.getLastWorkout)
    .post(workoutController.createWorkout)


router.route("/workouts/range")
    .get(workoutController.getWorkoutsInRange)
    
router.route("/workouts/:id")
    .put(workoutController.addExercise)

module.exports = router

