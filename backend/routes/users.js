import express from 'express'
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router();


import { verifyUser,verifyAdmin } from '../utils/verifyToken.js';

router.post('/',createUser)
// update user

router.put('/:id',verifyUser,updateUser)
//deleteuser

router.delete('/:id',verifyUser,deleteUser)
//get single user

router.get('/:id',verifyUser,getSingleUser)
//get all users

router.get('/',verifyAdmin,getAllUser)



export default router