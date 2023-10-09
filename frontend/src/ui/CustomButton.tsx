import { Box, ButtonProps, SvgIcon, Typography } from '@mui/material'
import React, { FunctionComponent, SVGProps } from 'react'
import { CustomButtonContent, CustomButtonVariant } from '../types'
import { useGetSxPropsForButton } from './styles/useGetSxPropsForButton'
import { LoadingButton, LoadingButtonProps } from '@mui/lab'

interface ICustomButton
  extends Omit<LoadingButtonProps & ButtonProps, 'variant'> {
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
  loading,
  ...props
}) => {
  const sx = useGetSxPropsForButton(variant)

  return (
    <LoadingButton loading={loading} sx={sx} {...props}>
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
    </LoadingButton>
  )
}

CustomButton.displayName = 'CustomButton'
export default CustomButton
