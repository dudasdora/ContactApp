import { Box, Button, ButtonProps, SxProps, alpha } from '@mui/material'
import { ReactNode, useMemo } from 'react'
import { CustomButtonVariant } from '../types'
import { getSxPropsForButton } from './styles/getSxPropsForButton'

interface ICustomButton extends Omit<ButtonProps, 'variant'> {
  variant: CustomButtonVariant
  children: ReactNode
}

const CustomButton: React.FC<ICustomButton> = ({
  variant,
  children,
  ...props
}) => {
  const sx = useMemo(() => getSxPropsForButton(variant), [variant])

  return (
    <Button sx={sx} {...props}>
      <Box
        sx={
          variant === 'special'
            ? { padding: '8px', display: 'flex', alignItems: 'center' }
            : {}
        }
      >
        {children}
      </Box>
    </Button>
  )
}

CustomButton.displayName = 'CustomButton'
export default CustomButton
