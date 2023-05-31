def convert_between_bases(value_to_convert: int, base_from: int, base_to: int) -> int:
  n = 0

  pos = 0

  while value_to_convert > 0:
    n += (value_to_convert % 10) * base_from ** pos
    value_to_convert //= 10
    pos += 1

  r: int = 0
  p = 0

  while n > 0:
    r += (n % base_to) * 10 ** p
    n //= base_to
    p += 1

  return r
