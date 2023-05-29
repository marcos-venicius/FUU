## Debounce

imagine you have an input to search for a client, and you want to search this client after the user type his name.

if you search for the client every key typed when the user search a name like "Marcos", the backend will receive at least 6 requests.
this is not good.
to solve this problem use the [debounce hook](/hooks/use-debounce.ts).

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
