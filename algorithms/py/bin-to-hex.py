def bin_to_hex(bin: str):
  map = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 'A',
      11: 'B',
      12: 'C',
      13: 'D',
      14: 'E',
      15: 'F'
  }

  if len(bin) % 4 != 0:
    bin = ('0' * (len(bin) % 4)) + bin

  groups = [[j for j in bin[i:i+4][::-1]] for i in range(0, len(bin), 4)]

  hex = []

  for group in groups:
    x = 0
    for k, v in enumerate(group):
      if v == '1':
        x += 1 * 2 ** k

    hex.append(str(map[x]))

  return ''.join(hex)
