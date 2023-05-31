# Convert between bases

[code implementation](/algorithms/py/convert-between-bases.py)

For example, if you want to convert from binary to decimal: `1010` to decimal, you can use:

```py
print(convert_between_bases(1010, 2, 10)) # 10
```
Which:
- the first argument is the value you want to convert
- the second argument is the base from where you want to convert
- the third argument is the base to where you want to convert

Let's convert from base 10 to base 2

```py
print(convert_between_bases(10, 10, 2)) # 1010
```

Let's convert from base 2 to base 8

```py
print(convert_between_bases(111, 2, 8)) # 7
```
