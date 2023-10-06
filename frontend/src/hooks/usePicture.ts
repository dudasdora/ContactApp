import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { uploadPicture } from '../utils/uploadPicture'

export const usePicture = (currentPictureUrl: string | null) => {
  const [file, setFile] = useState(new Blob())
  const [pictureUrl, setPictureUrl] = useState<string | null>(currentPictureUrl)

  const { mutateAsync } = useMutation(uploadPicture)

  useEffect(() => {
    if (file.size !== 0) {
      mutateAsync(file)
        .then((response) => setPictureUrl(response.data.pictureUrl))
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }, [file, mutateAsync])

  return {
    setPictureUrl,
    setFile,
    pictureUrl
  }
}
