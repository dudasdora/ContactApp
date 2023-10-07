import { Box, Typography } from '@mui/material'

const ContactTitle: React.FC = () => {
  return (
    <>
      <Box sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
        <Typography variant="h1" padding={2}>
          Contacts
        </Typography>
      </Box>
      {/* added a smaller title for mobile size */}
      <Box sx={{ display: { xs: 'inline-block', sm: 'none' } }}>
        <Typography variant="h2" padding={2}>
          Contacts
        </Typography>
      </Box>
    </>
  )
}

ContactTitle.displayName = 'ContactTitle'
export default ContactTitle
