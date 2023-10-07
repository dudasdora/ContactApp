import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  SvgIcon,
  Typography
} from '@mui/material'
import React, { useState } from 'react'

interface ListAction {
  onClick: () => void
  text: string
  icon: React.FC
}

const IconMenu: React.FC<{
  toggleActionsIcon: React.FC
  actions: ListAction[]
}> = ({ toggleActionsIcon, actions }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handlePopoverOpen = (event: any) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <>
      <IconButton onClick={handlePopoverOpen}>
        <SvgIcon component={toggleActionsIcon} />
      </IconButton>
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
