def binary_search(array: list[int], target: int) -> int:
  leftPointer = 0
  rightPointer = len(array) - 1
  
  while leftPointer <= rightPointer:
    middle = (rightPointer + leftPointer) // 2

    if array[middle] == target:
      return middle

    if array[middle] > target:
      rightPointer = middle - 1
    elif array[middle] < target:
      leftPointer = middle + 1
    
  return -1
