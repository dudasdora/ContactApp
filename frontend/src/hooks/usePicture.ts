import axios from 'axios'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import config from '../config'

const apiUrl = config.apiUrl

export const usePicture = (currentPictureUrl: string) => {
  const [file, setFile] = useState(new Blob())
  const [pictureUrl, setPictureUrl] = useState<string>(currentPictureUrl)

  const uploadPicture = async () => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await axios.post(`${apiUrl}/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setPictureUrl(response.data.pictureUrl)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const uploadPictureMutation = useMutation(async () => await uploadPicture())

  const handleUpload = () => {
    uploadPictureMutation.mutate()
  }

  useEffect(() => {
    if (file.size !== 0) {
      handleUpload()
    }
  }, [file])

  return {
    setPictureUrl,
    setFile,
    pictureUrl
  }
}
