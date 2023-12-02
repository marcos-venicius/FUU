export function accentFolding(text: string) {
  return text
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[æ]/g, "ae")
    .replace(/[ç]/g, "c")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[ñ]/g, "n")
    .replace(/[òóôõö]/g, "o")
    .replace(/[œ]/g, "oe")
    .replace(/[ýÿ]/g, "y");
}
