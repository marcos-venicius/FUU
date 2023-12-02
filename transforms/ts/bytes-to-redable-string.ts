type Sizes = "Byte" | "Bytes" | "KB" | "MB" | "GB" | "TB";
type Output = `${number} ${Sizes}`;

export function transformBytesToRedableString(size: number): Output {
  const sizes: Array<Sizes> = ["Bytes", "KB", "MB", "GB", "TB"];

  if (size === 0) return "0 Byte";
  const i = parseInt(
    Math.floor(Math.log(size) / Math.log(1024)).toString(),
    10
  );

  return `${Math.round(size / Math.pow(1024, i))} ${sizes[i]}`;
}
