import { Box, Button, ButtonProps, SvgIcon, Typography } from '@mui/material'
import React, { FunctionComponent, SVGProps } from 'react'
import { CustomButtonContent, CustomButtonVariant } from '../types'
import { useGetSxPropsForButton } from './styles/useGetSxPropsForButton'

interface ICustomButton extends Omit<ButtonProps, 'variant'> {
  variant: CustomButtonVariant
  content: CustomButtonContent
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  label?: string
}

const CustomButton: React.FC<ICustomButton> = ({
  variant,
  content,
  icon,
  label,
  children,
  ...props
}) => {
  const sx = useGetSxPropsForButton(variant)

  return (
    <Button sx={sx} {...props}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        {icon && (
          <SvgIcon
            component={icon}
            sx={label ? { padding: '8px 0px 8px 12px' } : { padding: '8px' }}
          />
        )}
        {label && (
          <Typography
            variant="body1"
            sx={{ padding: `8px 16px 8px ${icon ? 0 : 16}px` }}
          >
            {label}
          </Typography>
        )}
        {children}
      </Box>
    </Button>
  )
}

CustomButton.displayName = 'CustomButton'
export default CustomButton
