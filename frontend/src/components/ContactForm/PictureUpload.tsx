import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useGetAvatarSource } from '../../hooks/useGetAvatarSource'
import { ReactComponent as DeleteIcon } from '../../assets/icons/Delete.svg'
import { ReactComponent as ChangeIcon } from '../../assets/icons/Change.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/Add.svg'
import { UseFormSetValue } from 'react-hook-form'
import { ContactFormData } from '../../types'
import CustomButton from '../../ui/CustomButton'
import CustomAvatar from '../../ui/CustomAvatar'
import { storePictureLocal } from '../../utils/storePictureLocal'
interface IPictureUpload {
  setValue: UseFormSetValue<ContactFormData>
  setFile: any
  pictureUrl: any
  setPictureUrl: any
}
const PictureUpload: React.FC<IPictureUpload> = ({
  setValue,

  setFile,
  pictureUrl,
  setPictureUrl
}) => {
  useEffect(() => {
    setValue('pictureUrl', pictureUrl)
  }, [pictureUrl, setValue])

  const avatarSrc = useGetAvatarSource(pictureUrl)

  const handleChangeFile = async (event: any) => {
    if (event.target.files) {
      setFile(event.target.files[0])
      setPictureUrl(await storePictureLocal(event.target.files[0]))
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs="auto">
        <CustomAvatar src={avatarSrc} sx={{ width: '88px', height: '88px' }} />
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
            <input hidden type="file" onChange={handleChangeFile} />
          </CustomButton>

          {!!pictureUrl && (
            <CustomButton
              variant="primary"
              content="icon"
              onClick={() => {
                setPictureUrl(null)
                setFile(null)
              }}
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
