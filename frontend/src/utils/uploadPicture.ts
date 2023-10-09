import axios from 'axios'
import config from '../config'

const apiUrl = config.apiUrl

export const uploadPicture = async (file: Blob) => {
  const formData = new FormData()

  formData.append('file', file)
  return await axios.post(`${apiUrl}/image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
