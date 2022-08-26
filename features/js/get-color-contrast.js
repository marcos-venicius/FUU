export function getColorContrast(hexColor) {
  hexColor = hexColor.replace('#', '');

  let r = 0;
  let g = 0;
  let b = 0;

  if (hexColor.length === 8) {
    hexColor = hexColor.substring(0, 6);
  }

  if (hexColor.length === 6) {
    r = parseInt(hexColor.substring(0, 2), 16);
    g = parseInt(hexColor.substring(2, 4), 16);
    b = parseInt(hexColor.substring(4, 6), 16);
  } else if (hexColor.length === 3) {
    const _r = hexColor[0];
    const _g = hexColor[1];
    const _b = hexColor[2];

    r = parseInt(`${_r}${_r}`, 16);
    g = parseInt(`${_g}${_g}`, 16);
    b = parseInt(`${_b}${_b}`, 16);
  }

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? '#000000' : '#ffffff';
}
