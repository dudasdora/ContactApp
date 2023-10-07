import {
  BaseTextFieldProps,
  InputLabel,
  TextField,
  Typography
} from '@mui/material'
import { Ref, forwardRef } from 'react'
import useStyles from '../hooks/useStyles'

interface ICustomTextField extends BaseTextFieldProps {
  label: string
  ref?: Ref<any> | undefined
}

const CustomTextField: React.FC<ICustomTextField> = forwardRef(
  ({ label, ...props }, ref) => {
    const classes = useStyles()

    return (
      <>
        <InputLabel>
          <Typography sx={{ lineHeight: 2 }} variant="body2">
            {label}
          </Typography>
        </InputLabel>
        <TextField ref={ref} {...props} className={classes.textField} />
      </>
    )
  }
)

CustomTextField.displayName = 'CustomTextField'
export default CustomTextField
