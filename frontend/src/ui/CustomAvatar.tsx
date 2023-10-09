import { Avatar, AvatarProps } from '@mui/material'

const CustomAvatar: React.FC<AvatarProps> = ({ src, ...props }) => {
  return (
    <Avatar src={src} {...props}>
      <img
        src={require('../assets/contactImages/Default.png')}
        alt={'default-img'}
        style={{ width: '100%', height: '100%' }}
      />
    </Avatar>
  )
}
export default CustomAvatar
