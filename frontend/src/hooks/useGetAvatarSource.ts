import { useMemo } from 'react'

export const useGetAvatarSource = (pictureUrl?: string) => {
  return useMemo(() => {
    return pictureUrl
      ? pictureUrl
      : require('../assets/contactImages/Default.png')
  }, [pictureUrl])
}
