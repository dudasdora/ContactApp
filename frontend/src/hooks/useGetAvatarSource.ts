import { useMemo } from 'react'

export const useGetAvatarSource = (pictureUrl: string | null): string => {
  return useMemo(() => {
    return pictureUrl
      ? process.env.NODE_ENV === 'production'
        ? pictureUrl
        : `${localStorage.getItem(`${pictureUrl}`)}`
      : require('../assets/contactImages/Default.png')
  }, [pictureUrl])
}
