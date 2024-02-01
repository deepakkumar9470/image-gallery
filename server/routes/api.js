import express from 'express'
const router  = express.Router()
import { addImage, deleteImage, getAllImages, getSingleImage } from '../controllers/imageController.js'

import upload from '../multerfileupload/fileUpload.js'


//@  /api/v2/uploadimage
router.post('/uploadimage',upload.single('myimage') ,addImage)

//@  /api/v2
router.get('/images', getAllImages)

//@  /api/v2/image/123
router.get('/image/:id', getSingleImage)


//@ /api/v2/image/123
router.delete('/image/:id', deleteImage)


export default router