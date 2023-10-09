import { useMemo } from 'react'

export const useGetAvatarSource = (pictureUrl: string | null): string => {
  return useMemo(() => {
    return pictureUrl
      ? localStorage.getItem(`${pictureUrl}`) !== null
        ? `${localStorage.getItem(`${pictureUrl}`)}`
        : pictureUrl
      : require('../assets/contactImages/Default.png')
  }, [pictureUrl])
}
