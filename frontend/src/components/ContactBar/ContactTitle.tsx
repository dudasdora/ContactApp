import { Box, Typography } from '@mui/material'

const ContactTitle: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'block' },
        justifyContent: { xs: 'center', sm: 'flex-start' },
        paddingBottom: { xs: 0, sm: '16px' }
      }}
    >
      <Typography variant="h1" padding={2} sx={{ paddingBottom: 0 }}>
        Contacts
      </Typography>
    </Box>
  )
}

ContactTitle.displayName = 'ContactTitle'
export default ContactTitle
