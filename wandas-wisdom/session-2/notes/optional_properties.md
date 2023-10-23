# Optional Properties

Sometimes you have an object that may or may not have a value for a given key. In which case, it can be useful to keep a single interface but mark the optional key as optional. You can do this by using the question mark symbol (`?`):

```ts
interface Quote {
    text: string
    author: string
    tags?: string[]
}
```

An object created using that interface may have a `tags` property or it may not.
