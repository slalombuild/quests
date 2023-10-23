# Interfaces

So far, we've been using declared types when we needed to specify the shape of a custom object. However, we can also use interfaces to achieve the same effect.

Instead of:

```ts
type Quote = {
    text: string
    author: string
    tags: string[]
}
```

We could do:

```ts
interface Quote {
    text: string
    author: string
    tags: string[]
}
```

The only differences between the two are the keywords used and the presence of the equals sign in the type definition.
