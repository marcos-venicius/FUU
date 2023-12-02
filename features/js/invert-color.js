import { validateHexColor } from "../../validators/js/validate-hex-color";

/**
 *
 * @param {string} hex
 * @returns
 */
export function invertColor(hex) {
  hex = hex.replace("#", "");

  if (!validateHexColor(hex)) {
    throw new Error("Invalid hex color: " + hex);
  }

  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
  const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
  const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

  return "#" + r.padStart(2, "0") + g.padStart(2, "0") + b.padStart(2, "0");
}
