import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from './../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router= express.Router();

//create new tour

router.post('/',verifyAdmin,createTour)
// update tour

router.put('/:id',updateTour)
//delete new tour

router.delete('/:id',verifyAdmin,deleteTour)
//get single tour

router.get('/:id',getSingleTour)
//get all tour 

router.get('/',getAllTour)

//get tour by search

router.get('/search/getTourBySearch',getTourBySearch)

// get Featured Tour
router.get('/search/getFeaturedTour',getFeaturedTour)

// get Tour count
router.get('/search/getTourCount',getTourCount)


export default router;
