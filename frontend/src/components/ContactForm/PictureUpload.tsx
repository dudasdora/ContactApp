import { Avatar, Button, IconButton, SvgIcon } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useGetAvatarSource } from '../../hooks/useGetAvatarSource'
import { ReactComponent as DeleteIcon } from '../../assets/icons/Delete.svg'
import { ReactComponent as ChangeIcon } from '../../assets/icons/Change.svg'
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

  const addButtonText = useMemo(() => {
    if (pictureUrl) {
      return (
        <>
          <SvgIcon component={ChangeIcon} />
          Change picture
        </>
      )
    }
    return '+ Add picture'
  }, [pictureUrl])

  const src = useGetAvatarSource(pictureUrl)
  return (
    <>
      <Avatar src={src} />
      <Button variant="contained" component="label">
        {addButtonText}
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
    </>
  )
}

PictureUpload.displayName = 'PictureUpload'
export default PictureUpload
