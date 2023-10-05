import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  SvgIcon
} from '@mui/material'
import React, { useState } from 'react'

interface ListAction {
  onClick: () => void
  text: string
  icon: React.FC
}

const NestedActions: React.FC<{
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
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <List>
          {actions.map((action) => (
            <ListItemButton onClick={action.onClick} key={action.text}>
              <ListItemIcon>
                <SvgIcon component={action.icon} />
              </ListItemIcon>
              <ListItemText primary={action.text} />
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </>
  )
}

NestedActions.displayName = 'NestedActions'
export default NestedActions
