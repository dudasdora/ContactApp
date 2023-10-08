import { Avatar, Box, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useGetAvatarSource } from '../../hooks/useGetAvatarSource'
import { ReactComponent as DeleteIcon } from '../../assets/icons/Delete.svg'
import { ReactComponent as ChangeIcon } from '../../assets/icons/Change.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/Add.svg'
import { usePicture } from '../../hooks/usePicture'
import { UseFormSetValue } from 'react-hook-form'
import { ContactFormData } from '../../types'
import CustomButton from '../../ui/CustomButton'
interface IPictureUpload {
  setValue: UseFormSetValue<ContactFormData>
  defaultPictureUrl: string | null
}
const PictureUpload: React.FC<IPictureUpload> = ({
  setValue,
  defaultPictureUrl
}) => {
  const { setFile, pictureUrl, setPictureUrl } = usePicture(defaultPictureUrl)

  useEffect(() => {
    setValue('pictureUrl', pictureUrl)
  }, [pictureUrl, setValue])

  const src = useGetAvatarSource(pictureUrl)
  return (
    <Grid container spacing={2}>
      <Grid item xs="auto">
        <Avatar src={src} sx={{ width: '88px', height: '88px' }} />
      </Grid>
      <Grid item xs alignSelf="center">
        <Box display="flex" justifyContent="space-between">
          <CustomButton
            variant="primary"
            component="label"
            content="iconlabel"
            icon={pictureUrl ? ChangeIcon : AddIcon}
            label={pictureUrl ? 'Change picture' : 'Add picture'}
          >
            <input
              hidden
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0])
                }
              }}
            />
          </CustomButton>

          {!!pictureUrl && (
            <CustomButton
              variant="primary"
              content="icon"
              onClick={() => setPictureUrl('')}
              icon={DeleteIcon}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  )
}

PictureUpload.displayName = 'PictureUpload'
export default PictureUpload
