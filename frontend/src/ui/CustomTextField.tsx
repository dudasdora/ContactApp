import {
  BaseTextFieldProps,
  Box,
  InputLabel,
  TextField,
  Typography
} from '@mui/material'
import React, { Ref, forwardRef } from 'react'

interface ICustomTextField extends BaseTextFieldProps {
  label: string
  ref?: Ref<any> | undefined
}

const CustomTextField: React.FC<ICustomTextField> = forwardRef(
  ({ label, ...props }, ref) => {
    return (
      <Box>
        <InputLabel>
          <Typography sx={{ lineHeight: 2 }} variant="body2">
            {label}
          </Typography>
        </InputLabel>
        <TextField sx={{ width: '100%' }} ref={ref} {...props} />
      </Box>
    )
  }
)

CustomTextField.displayName = 'CustomTextField'
export default CustomTextField
