export function getFirstName(name) {
  const n = name.split(' ')[0];

  return n[0].toUpperCase() + n.slice(1, n.length).toLowerCase();
}
