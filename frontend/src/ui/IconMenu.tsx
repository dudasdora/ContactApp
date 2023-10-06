import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  SvgIcon
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
              <SvgIcon component={action.icon} />
            </ListItemIcon>
            {action.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

IconMenu.displayName = 'IconMenu'
export default IconMenu
