import { useMemo } from 'react'

export const useGetAvatarSource = (pictureUrl: string | null) => {
  return useMemo(() => {
    return pictureUrl
      ? pictureUrl
      : require('../assets/contactImages/Default.png')
  }, [pictureUrl])
}
