import {
  ListItemIcon,
  Menu,
  MenuItem,
  SvgIcon,
  Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton'

interface ListAction {
  onClick: () => void
  text: string
  icon: React.FC
}
interface IIconMenu {
  toggleActionsIcon: React.FC
  actions: ListAction[]
  onClick?: () => void
  onClose?: () => void
}
const IconMenu: React.FC<IIconMenu> = ({
  toggleActionsIcon,
  actions,
  onClick,
  onClose
}) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handlePopoverOpen = (event: any) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
    onClick?.()
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  useEffect(() => {
    if (open) {
      onClick?.()
    } else {
      onClose?.()
    }
  }, [onClick, onClose, open])

  return (
    <>
      <CustomButton
        variant="secondary"
        content="icon"
        onClick={handlePopoverOpen}
        icon={toggleActionsIcon}
      />

      <Menu
        elevation={1}
        open={open}
        onClick={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        {actions.map((action) => (
          <MenuItem onClick={action.onClick} key={action.text}>
            <ListItemIcon>
              <SvgIcon
                component={action.icon}
                sx={{ width: '20px', height: '20px' }}
              />
            </ListItemIcon>
            <Typography variant="body1"> {action.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

IconMenu.displayName = 'IconMenu'
export default IconMenu
