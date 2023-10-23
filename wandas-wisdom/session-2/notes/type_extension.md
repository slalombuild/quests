# Type Extensions

You can build more complex interfaces from simpler ones by extending them. This can be especially useful if you have different types of objects with lots of overlapping properties. For instance, if you have a cats interface and a dogs interface, you'll notice that they have many overlapping properties and only a few distinct ones:

```ts
interface Cat {
    name: string
    color: string
    age: number
    birthday: Date
    hisses: boolean
}

interface Dog {
    name: string
    color: string
    age: number
    birthday: Date
    barks: boolean
}
```

It would simplify the code to have a separate interface for all the common properties and extend it to define the unique interfaces:

```ts
interface Animal {
    name: string
    color: string
    age: number
    birthday: Date
}

interface Cat extends Animal {
    hisses: boolean
}

interface Dog extends Animal {
    barks: boolean
}
```

The cat and dog interfaces still have the exact same properties as they did previously, but we've factored out the common properties, so their interfaces better help to demonstrate their differences.
