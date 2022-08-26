import express from 'express'
import {addUser,getUser,fetchUsertoUpdate,deleteUser,UpdateFetehedUser} from '../controller/user_controller.js'
const router  = express.Router(); 


router.post('/add',addUser)

router.get('/fetch',getUser)

router.get('/:mobilenumber',fetchUsertoUpdate)

router.put('/update',UpdateFetehedUser)

router.delete('/:mobilenumber',deleteUser)

export default router;