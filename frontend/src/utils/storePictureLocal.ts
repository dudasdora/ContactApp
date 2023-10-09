export const storePictureLocal = async (file: Blob) => {
  const reader = new FileReader()

  const localStorageKey = new Date().getTime().toString()

  const imageDataUrlPromise = new Promise<string>((resolve) => {
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const imageDataUrl = event?.target?.result as string
      resolve(imageDataUrl)
    }
  })

  reader.readAsDataURL(file)

  const imageDataUrl = await imageDataUrlPromise

  localStorage.setItem(localStorageKey, imageDataUrl)

  return localStorageKey
}
