# FUU - **F**requently **U**sed **U**tilities

### Hooks

- TS
  - [debounce](./hooks/use-debounce.ts) - [docs](https://github.com/marcos-venicius/FUU/edit/main/README.md#hooks---debounce)

### Features

- JS
  - [file picker](./features/js/filePicker.js)
  - [generate random hex color](./features/js/generate-random-hex-color.js)
  - [get color contrast](./features/js/get-color-contrast.js)
  - [get first name](./features/js/get-first-name.js)
  - [invert color](./features/js/invertColor.js)
- TS
  - [file picker](./features/ts/file-picker.ts)
  - [accent folding](./features/ts/accent-folding.ts)
  - [cache](./features/ts/cache)
  - [get years list](./features/ts/get-years-list.ts) _gets a list from specified year until current year_
  - [join generic elements](./features/ts/join-generic-elements.ts)
  - [darken color](./features/ts/darken-color.ts) _transform a hexadecimal color a little darker_
 
### Algorithms

- PY
  - [Singly Linked List](./algorithms/py/singly-linked-list.py)
  - [Stack O(1)](./algorithms/py/stack.py) - _**implemented with linked list**_
  - [Queue O(1)](./algorithms/py/queue.py) - _**implemented with linked list**_
 
### Masks

- JS
  - [CNPJ](./masks/js/cnpj.js)
  - [CPF](./masks/js/cpf.js)
  - [date age](./masks/js/date-age.js)
  - [date](./masks/js/date.js)
  - [email](./masks/js/email.js)
  - [money](./masks/js/money.js)
  - [phone numnber](./masks/js/phone.js)
  
### Transforms

- JS
  - [bytes to readable string](./transforms/js/bytes-to-redable-string.js)
- TS
  - [color name to hex](./transforms/ts/color-name-to-hex.ts)
  
### Validators

- JS
  - [CNPJ](./validators/js/cnpj.js)
  - [CPF](./validators/js/cpf.js)
  - [date age](./validators/js/date-age.js)
  - [date](./validators/js/date.js)
  - [email](./validators/js/email.js)
  - [hex color](./validators/js/hex-color.js)
- CS
  - [CNPJ](./validators/cs/ValidateCnpj.cs)
  - [CPF](./validators/cs/ValidateCpf.cs)


## Documentation


### Hooks -> Debounce

imagine you have an input to search for a client, and you want to search this client after the user type his name.

if you search for the client every key typed when the user search a name like "Marcos", the backend will receive at least 6 requests.
this is not good.
to solve this problem use the [debounce hook](./hooks/use-debounce.ts).

```tsx
function Search() {
  const debounce = useDebounce()
  
  return (
    <input
      type='text'
      onChange={event => {
        debounce(() => {
          console.log(`searching for: ${event.target.value}`)
        })
      }}
    />
  )
}
```

you will se the console just if the user type the name and wait 10 seconds.
if the user types a large name with 10 chars and the typing interval between the chars is less than 1 second, the console log will not be executed,
after the user stop to type or type with a interval larger than 1 second the console log will be executed.

you can update the interval between types:

```tsx
function Search() {
  const debounce = useDebounce({ intervalInMilliseconds: 500 }) // 500 ms
  
  ...
}
```



