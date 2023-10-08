import { customButtonProps } from './customButtonProps'
import { primaryButtonProps } from './primaryButtonProps'
import { secondaryButtonProps } from './secondaryButtonProps'
import { specialButtonProps } from './specialButtonProps'
import { CustomButtonVariant } from '../../types'
import { SxProps } from '@mui/material'

export const getSxPropsForButton = (variant?: CustomButtonVariant): SxProps => {
  switch (variant) {
    case 'primary':
      return { ...customButtonProps, ...primaryButtonProps } as SxProps
    case 'secondary':
      return { ...customButtonProps, ...secondaryButtonProps } as SxProps
    case 'special':
      return { ...customButtonProps, ...specialButtonProps } as SxProps

    default:
      return customButtonProps
  }
}
