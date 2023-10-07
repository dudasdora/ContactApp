import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  SvgIcon,
  Typography
} from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useGetAvatarSource } from '../../hooks/useGetAvatarSource'
import { ReactComponent as DeleteIcon } from '../../assets/icons/Delete.svg'
import { ReactComponent as ChangeIcon } from '../../assets/icons/Change.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/Add.svg'
import { usePicture } from '../../hooks/usePicture'
import { UseFormSetValue } from 'react-hook-form'
import { ContactFormData } from '../../types'
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
          <Button component="label">
            {pictureUrl ? (
              <>
                <SvgIcon component={ChangeIcon} />
                <Typography>Change picture</Typography>
              </>
            ) : (
              <>
                <SvgIcon component={AddIcon} />
                <Typography>Add picture</Typography>
              </>
            )}
            <input
              hidden
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0])
                }
              }}
            />
          </Button>

          {!!pictureUrl && (
            <IconButton onClick={() => setPictureUrl('')}>
              <SvgIcon component={DeleteIcon} />
            </IconButton>
          )}
        </Box>
      </Grid>
    </Grid>
  )
}

PictureUpload.displayName = 'PictureUpload'
export default PictureUpload
