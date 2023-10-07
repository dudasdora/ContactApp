import { InputLabel, Typography } from '@mui/material'
import { Controller, ControllerProps } from 'react-hook-form'
import { ContactFormData } from '../types'

interface ICustomTextField extends ControllerProps<ContactFormData> {
  label: string
}
const CustomTextField: React.FC<ICustomTextField> = ({ label, ...props }) => {
  return (
    <>
      <InputLabel>
        <Typography sx={{ lineHeight: 2 }} variant="body2">
          {label}
        </Typography>
      </InputLabel>
      <Controller {...props} />
    </>
  )
}

CustomTextField.displayName = 'CustomTextField'
export default CustomTextField
