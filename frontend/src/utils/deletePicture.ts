import axios from 'axios'
import config from '../config'

const apiUrl = config.apiUrl

export const deletePicture = async (picturePath: string) => {
  return await axios.delete(
    `${apiUrl}/image/${picturePath.split('/').slice(-1)}`
  )
}
