import express from 'express'
import multer from 'multer'
import { deleteImage, uploadImage } from '../controllers/imageController'

const router = express.Router()

const storage = multer.memoryStorage()

const upload = multer({ storage })

router.post('/', upload.single('file'), (request, response) =>
  uploadImage(request, response)
)
router.delete('/:path', async (request, response) => {
  deleteImage(request, response)
})

export default router
