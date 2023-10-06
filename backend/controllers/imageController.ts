import { Request, Response } from 'express'
import s3 from '../aws/awsConfig'
import { v4 } from 'uuid'
import multer from 'multer'

export const uploadImage = async (request: Request, response: Response) => {
  try {
    const file = request.file as Express.Multer.File

    const key = `${v4()}-${file.originalname}`

    const params = {
      Bucket: 'contact-app-bucket-dd',
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype
    }

    const data = await s3.upload(params).promise()

    response.json({ pictureUrl: data.Location })
  } catch (error) {
    response.status(500).json({ error: 'Image upload failed' })
  }
}
