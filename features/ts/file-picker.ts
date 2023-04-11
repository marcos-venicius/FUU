export type FilePickerConfigs = {
  multiple?: boolean
  accept?: string
}

/**
 * web file picker
 * @param configs picker configs
 * @param configs.multiple if you want to take multiple files
 * @param configs.accept if you want limit to specific file types
 * @returns  list of selected files
 */
export async function filePicker(configs?: FilePickerConfigs): Promise<globalThis.File[] | null> {
  let closeWithoutSelectAnyFile = true

  const fileInput = document.createElement('input')

  fileInput.hidden = true
  fileInput.type = 'file'
  fileInput.multiple = configs?.multiple || false
  fileInput.accept = configs?.accept || '*/*'

  return await new Promise(resolve => {
    window.onfocus = () => {
      setTimeout(() => {
        if (closeWithoutSelectAnyFile) {
          resolve(null)
        }
      }, 300)
    }

    fileInput.onchange = e => {
      closeWithoutSelectAnyFile = false

      const files = (e.target as any).files as globalThis.FileList

      const fileList: File[] = []

      for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
        fileList.push(files[fileIndex])
      }

      resolve(fileList)
    }

    fileInput.click()
  })
}
