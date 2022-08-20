export function generateRandomHexColor() {
  return "#000000".replace(/\d/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
}
