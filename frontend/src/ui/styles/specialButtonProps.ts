import { SxProps, alpha } from '@mui/material'

const buttonBottom = '#282828B2'
const buttonBorderBottom = '#3C3C3C'
const buttonTop = alpha(buttonBottom, 0.7)
const buttonBorderTop = alpha(buttonBorderBottom, 0)

const whiteOverlay = alpha('#FFFFFF0A', 0.4)

export const specialButtonProps: SxProps = {
  padding: '1px',
  border: 'solid 1px transparent',
  borderRadius: '1000px',
  backgroundColor: '#141414',
  backgroundImage: `linear-gradient(${buttonBottom},${buttonTop}), linear-gradient(${buttonBorderBottom},${buttonBorderTop})`,
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
  ':hover': {
    backgroundImage: `linear-gradient(${buttonBottom},${buttonTop}), linear-gradient(${buttonBorderBottom},${buttonBorderTop}), linear-gradient(${whiteOverlay}, ${whiteOverlay})`
  }
}
