/**
 * web file picker
 * @param {Object} configs picker configs
 * @param {boolean} [configs.multiple=] if you want to take multiple files
 * @param {string} [configs.accept=] if you want limit to specific file types
 * @returns {Promise<globalThis.File[]>} list of selected files
 */
export async function filePicker(configs) {
  let closeWithoutSelectAnyFile = true;

  const fileInput = document.createElement("input");

  fileInput.hidden = true;
  fileInput.type = "file";
  fileInput.multiple = configs?.multiple || false;
  fileInput.accept = configs?.accept || "*/*";

  return await new Promise((resolve) => {
    window.onfocus = () => {
      setTimeout(() => {
        if (closeWithoutSelectAnyFile) {
          resolve([]);
        }
      }, 300);
    };

    fileInput.onchange = (e) => {
      closeWithoutSelectAnyFile = false;

      const files = e.target.files;

      if (files) {
        resolve(files);
      } else {
        const fileList = [];
        for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
          fileList.push(files[fileIndex]);
        }
        resolve(fileList);
      }
    };

    fileInput.click();
  });
}
