import { useMemo } from 'react'
import defaultImage from '../assets/contactImages/Default.png'

export const useGetAvatarSource = (pictureUrl: string | null): string => {
  const storageUrl = localStorage.getItem(`${pictureUrl}`)

  return useMemo(() => {
    return pictureUrl
      ? storageUrl === null
        ? pictureUrl
        : storageUrl
      : defaultImage
  }, [pictureUrl, storageUrl])
}
