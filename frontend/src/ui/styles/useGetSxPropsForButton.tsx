import { customButtonProps } from './customButtonProps'
import { primaryButtonProps } from './primaryButtonProps'
import { secondaryButtonProps } from './secondaryButtonProps'
import { specialButtonProps } from './specialButtonProps'
import {
  iconButtonProps,
  iconLabelButtonProps,
  labelButtonProps
} from './buttonPaddings'
import { CustomButtonContent, CustomButtonVariant } from '../../types'
import { SxProps } from '@mui/material'
import { useMemo } from 'react'

export const useGetSxPropsForButton = (
  variant: CustomButtonVariant,
  content: CustomButtonContent
): SxProps => {
  return useMemo(() => {
    let mergedProps: SxProps = customButtonProps

    if (content === 'icon') {
      mergedProps = { ...mergedProps, ...iconButtonProps } as SxProps
    } else if (content === 'iconlabel') {
      mergedProps = { ...mergedProps, ...iconLabelButtonProps } as SxProps
    } else if (content === 'label') {
      mergedProps = { ...mergedProps, ...labelButtonProps } as SxProps
    }

    if (variant === 'primary') {
      mergedProps = { ...mergedProps, ...primaryButtonProps } as SxProps
    } else if (variant === 'secondary') {
      mergedProps = { ...mergedProps, ...secondaryButtonProps } as SxProps
    } else if (variant === 'special') {
      mergedProps = { ...mergedProps, ...specialButtonProps } as SxProps
    }

    return mergedProps
  }, [variant, content])
}
