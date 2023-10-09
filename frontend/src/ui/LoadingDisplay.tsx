import { Box, Skeleton } from '@mui/material'
import React from 'react'

const LoadingDisplay: React.FC = () => {
  return (
    <Box>
      <Skeleton height={40} />
      <Skeleton height={40} />
      <Skeleton height={40} />
    </Box>
  )
}

LoadingDisplay.displayName = 'LoadingDisplay'
export default LoadingDisplay
