import { Box, Typography } from '@mui/material'
import React from 'react'

const ErrorDisplay: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3">Error, try again later</Typography>
    </Box>
  )
}

ErrorDisplay.displayName = 'ErrorDisplay'
export default ErrorDisplay
