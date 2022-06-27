const express = require('express');
const router = express.Router();
const Movie= require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', async (req, res, next) => {
    try {
        const pelis = await Movie.find({});
        console.log('estas son las peliculas', pelis)
        res.render('movies', {pelis:pelis})
    }catch (err) {
        console.log('error', err)
    }
});

router.get('/movies/:id',async (req, res, next) => { 
    try {
        console.log('QUIERO ESTE PUTO ID',req.params.id)
        const peli =await Movie.findById(req.params.id)
        res.render('movieOne', { peli: peli })
        
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;
