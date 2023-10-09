const delay = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

export const storePictureLocal = async (file: Blob) => {
  const reader = new FileReader()

  const localStorageKey = new Date().getTime().toString()

  reader.onload = (e: ProgressEvent<FileReader>) => {
    const imageDataUrl = e?.target?.result as string
    localStorage.setItem(localStorageKey, imageDataUrl)
  }

  reader.readAsDataURL(file)

  await delay()

  return { data: { pictureUrl: localStorageKey } }
}
