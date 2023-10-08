import { Box, Button, ButtonProps } from '@mui/material'
import { ReactNode, useMemo } from 'react'
import { CustomButtonContent, CustomButtonVariant } from '../types'
import { useGetSxPropsForButton } from './styles/useGetSxPropsForButton'

interface ICustomButton extends Omit<ButtonProps, 'variant'> {
  variant: CustomButtonVariant
  content: CustomButtonContent
  children: ReactNode
}

const CustomButton: React.FC<ICustomButton> = ({
  variant,
  content,
  children,
  ...props
}) => {
  const sx = useGetSxPropsForButton(variant, content)

  return (
    <Button sx={sx} {...props}>
      <Box
        sx={
          variant === 'special'
            ? {
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }
            : {
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }
        }
      >
        {children}
      </Box>
    </Button>
  )
}

CustomButton.displayName = 'CustomButton'
export default CustomButton
