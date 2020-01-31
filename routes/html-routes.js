const path = require('path')
const fs = require('fs')
const router = require("express").Router();

// router.get('/')
router.get('/exercise', ({ body }, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})
router.get('/stats', ({ body }, res) => {

    fs.readFile(path.join(__dirname, '../public/stats.html'), 'utf8', function(err, file){
        if(err){
            res.sendStatus(404)
        }

        res.send(file)
    })
})

module.exports = router