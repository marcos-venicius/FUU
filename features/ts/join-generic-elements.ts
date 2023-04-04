function joinGenericElements<T>(elements: T[], join: T): T[] {
  if (elements.length < 2) return elements

  const newElements: T[] = []

  for (let i = 0; i < elements.length; i++) {
    if (i < elements.length && i > 0) newElements.push(join)

    newElements.push(elements[i])
  }

  return newElements
}
