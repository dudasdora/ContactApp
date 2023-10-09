import axios from 'axios'
import config from '../config'
import { storePictureLocal } from './storePictureLocal'

const apiUrl = config.apiUrl

export const uploadPicture = async (file: Blob) => {
  const formData = new FormData()

  formData.append('file', file)
  if (process.env.NODE_ENV === 'production') {
    return await axios.post(`${apiUrl}/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  } else {
    return storePictureLocal(file)
  }
}
