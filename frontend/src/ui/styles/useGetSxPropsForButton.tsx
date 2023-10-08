import { customButtonProps } from './customButtonProps'
import { primaryButtonProps } from './primaryButtonProps'
import { secondaryButtonProps } from './secondaryButtonProps'
import { specialButtonProps } from './specialButtonProps'

import { CustomButtonVariant } from '../../types'
import { SxProps } from '@mui/material'
import { useMemo } from 'react'

export const useGetSxPropsForButton = (
  variant: CustomButtonVariant
): SxProps => {
  return useMemo(() => {
    let mergedProps: SxProps = customButtonProps

    if (variant === 'primary') {
      mergedProps = { ...mergedProps, ...primaryButtonProps } as SxProps
    } else if (variant === 'secondary') {
      mergedProps = { ...mergedProps, ...secondaryButtonProps } as SxProps
    } else if (variant === 'special') {
      mergedProps = { ...mergedProps, ...specialButtonProps } as SxProps
    }

    return mergedProps
  }, [variant])
}
