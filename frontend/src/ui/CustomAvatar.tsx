import { Avatar, AvatarProps } from '@mui/material'
import React from 'react'
import defaultImage from '../assets/contactImages/Default.png'

const CustomAvatar: React.FC<AvatarProps> = ({ src, ...props }) => {
  return (
    <Avatar src={src} {...props}>
      <img
        src={defaultImage}
        alt={'default-img'}
        style={{ width: '100%', height: '100%' }}
      />
    </Avatar>
  )
}
export default CustomAvatar
