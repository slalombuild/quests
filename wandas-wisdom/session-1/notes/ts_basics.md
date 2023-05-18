# Introduction to TypeScript

## Static versus Dynamic Typing

JavaScript is a dynamically typed programming language. This means that the types of the variables are determined at run-time, as in only immediately before your app is displayed to the end user. Other languages, like C and Java, are statically typed. This means that the types of variables are determined at compile-time, as in after the code is initially built but before it runs. The major benefit of static typing is that it allows the developer to catch any errors related to types much earlier than with a dynamically typed language. Often, IDEs can highlight any errors while writing the code instead of needing to wait to compile. TypeScript is a superset of JavaScript that allows developers to gain those benefits of static typing.

## Transpiling

All TypeScript code must be transpiled into JavaScript code in order for the app to run. You can think of transpiling as compiling or converting the code from one format to another. For simplicity, the webpack will handle all the transpiling that we need to do for this app. It will output the transpiled JS code into a single file in the `dist` folder.

## Primitive Types

Most programming languages, including JavaScript, include the following built-in types:

- string
- number
- boolean

Here are some examples of variables using those types:

```js
const someString = 'example'
const someNumber = 453
const someBoolean = true
```

When annotating types, notice that primitive types are lowercased. In contrast, declared types (like objects) are capitalized.

Here's how the above variable declarations would appear with type annotations:

```ts
const someString: string = 'example'
const someNumber: number = 453
const someBoolean: boolean = true
```

You can also specify an array by appending brackets to the type of elements in the array. Keep in mind that all elements in the array must be of this single type. Here's how you could declare an array of numbers:

```ts
const firstPrimes: number[] = [2, 3, 5, 7, 11]
```

## Function Signatures

The most useful things to type, for documentation purposes, are functions. It helps future developers know what type of data a function will return, as well as what type of data must initially be provided to it in order to work.

```ts
function addTwoNumbers(first: number, second: number): number {
    const result: number = first + second
    return result
}
```

In that example, the parameters are `first` and `second`, which are both typed as numbers. The colon after the closing parenthesis introduces the return type of the function. In this case, the return type specifies that the function will return a number.

Functions that do not return anything can be specified by using the data type `void`.

```ts
let name: string = 'Wanda'

function changeName(newName: string): void {
    name = newName
}
```

## Declared Types

In order to add a type annotation to an object, declare a new type specifying the types of all of the object's properties. This creates a type alias. You can then use that type for any new object that happens to have the shape specified by that type. You would get an error if you attempted to use that type on an object with different properties than those specified by the type alias.

```ts
type Person = {
    name: string
    age: number
}

const wanda: Person = {
    name: 'Wanda',
    age: 77
}

// Results in an error since age is a required property but it is missing, and location is a property that does not exist on the type
const me: Person = {
    name: 'Jackson',
    location: 'Atlanta'
}
```

## DOM Types

Elements in the DOM have a set of pre-defined types that can be used. Often, a DOM element can be specified using either a general type or a more specific type. For example, both of these variable declarations are valid:

```ts
// In general, a button is an HTMLElement
const someButton: HTMLElement = document.createElement('button')
// Specifically, a button is an HTMLButtonElement
const someOtherButton: HTMLButtonElement = document.createElement('button')
```

When querying for anything, it's possible that the query returns no results. This often leads to a gotcha when dealing with DOM types. For instance, when querying for a `button` element, it's possible that no such element exists in the DOM, in which case the result of the query would be `null`. As a result, this variable declaration is incorrect:

```ts
const someButton: HTMLElement = document.querySelector('button')
```

Since it's possible there is no button in the DOM, we need to include that possibility in the variable type. We need to indicate that this variable could be either an `HTMLElement` or `null`. This declaration would be correct:

```ts
const someButton: HTMLElement | null = document.querySelector('button')
```

## Other Types

We can't cover every possible type that you might run into, but here are some special types and scenarios with which you should be familiar.

### Any Type

TypeScript has a special type called `any`, which you can use when you don't want to be too specific about the type of entity you're dealing with. In many ways, it just tells TypeScript to ignore the data type. As a result, you should rarely use it in practice since it eliminates many of the benefits that we would otherwise get from using TypeScript.

There are two exceptions to the guideline that you should avoid `any` in your codebase:

- you temporarily give an object a type of `any` since you haven't yet declared a special type for it; in this scenario, you will replace it with a proper type later, so this shouldn't end up in your production code
- you need to specify that an element really could be of any type; in this scenario, it will end up in your production code, but there should be a bare minimum of these instances

Here's an example of the first scenario. You start off with an object without a corresponding type declared:

```ts
const wanda: any = {
    name: 'Wanda',
    age: 77
}
```

Later, you declare a type for it, then use that type instead:

```ts
type Person = {
    name: string
    age: number
}

const wanda: Person = {
    name: 'Wanda',
    age: 77
}
```

### Union Types

As we saw in the DOM notes, it's possible to specify that a variable may be of one of two types:

```ts
const someButton: HTMLElement | null = document.querySelector('button')
```

This is called a union type. It's a type formed by combining two or more other types. It means the object could end up being of the first type or of the second type (or however many other types are listed). You separate individual types within a union type by using the vertical bar symbol. In the above example, `someButton` might end up being an `HTMLElement` if the query returns something in the DOM, or it might end up being `null` if the query returns nothing.

### Inferred Types

So far, we've been adding types to everything. However, often TypeScript can infer the type of a variable without our providing anything specific. This is especially true with primitive types declared using `const`, but it gets tricky with non-primitive types or variables declared using `let`.

This variable declaration:

```ts
let name: string = 'Wanda'
```

Will have the same effect as this variable declaration:

```ts
let name = 'Wanda'
```

In both cases, you can later reassign the variable to a different value, as long as it's a string. In the first case, we explicitly designate the type; in the latter case, TypeScript easily infers the case of the primitive type.

### Type Assertions

TypeScript provides the `as` keyword to allow you to assert that a variable is of a specific type. When you use that keyword when declaring a variable, you are demanding that TypeScript treat the variable as being of that type. Similar to `any`, this is a way of overriding TypeScript. As a result, you should only use it if you _know_ that a variable will be of that type and have no fear of needing to handle an error in the event that it isn't. A common case is with those pesky DOM queries. If you are confident that a DOM element will exist, then you can sidestep needing to add error handling for it by coercing it to be recognized as a certain type:

```ts
const someButton: HTMLElement = document.querySelector('button') as HTMLElement
```

Remember, this won't magically make `someButton` be an `HTMLElement` no matter what. If there is no `button` element in the DOM, then `someElement` will be `null`. All you achieve with type assertion is a loss of type checking for that variable.

## Using TypeScript

As mentioned at the beginning, one of the biggest benefits of static typing is that it allows you see any errors in your code based on the type of data you are using much earlier than you otherwise would. It also highlights potential errors that you may need to handle in your app before you run into a crashed app in production.

### Noticing Errors Early

In JavaScript, this code will not raise any error but it also will not return what the developer probably hopes to receive. In an IDE, this probably won't be flagged either.

```js
const wanda = {
    name: 'Wanda',
    age: 77
}

console.log(wanda.firstName)
```

The developer probably wants to log the string `'Wanda'`, but the `wanda` object does not have a `firstName` property. It has a `name` property instead. As a result, it will just log `undefined`.

While using TypeScript won't suddenly make the `wanda` object have a `firstName` property, it will preemptively flag that the object does not have the accessed property, and it will notify you of that in your IDE by giving the property `firstName` a red underline. If you hovered on that property, you would see a note that there is no `firstName` property on that type.

### Handling Otherwise Hidden Errors

Looking back at the DOM notes about how it's possible for a DOM query to return no results, we can (and probably should) add error handling to deal with that issue.

In JavaScript, you can have this code:

```js
const someButton = document.querySelector('button')
someButton.innerText = 'Updated Text'
```

However, what happens if your DOM doesn't actually have a `button` element in it? The text wouldn't be updated, and you'd have no way of knowing why. Again, using TypeScript won't magically add a `button` element to your DOM, but it _will_ allow you to see that this error may occur by flagging the pitfall in your IDE. Once you see it, you can adjust the code to throw an error if that ever occurs:

```ts
const someButton: HTMLElement | null = document.querySelector('button')
if (someButton) {
    someButton.innerText = 'Updated Text'
} else {
    throw new Error('No button element found in DOM')
}
```

This is only beneficial if you provide the error with a descriptive message, so if this ever occurs with your app, you can immediately know what's causing the error.

You may think that such error handling is unnecessary because you're unlikely to ever miss a DOM element. But consider this scenario: You start your app with a `button` element in your HTML, and you design your JS code with that in mind. However, after some months, you decide that you no longer want to use semantic HTML and you instead want to use a `div` element with a class of `button`. You'll need to update your JS code to accommodate for that change, but what happens if you forget to immediately make that update? Without a clear error message, you will need to find the error based on JavaScript's built-in errors. That will probably mean dealing with a statement that `undefined` does not have an `innerText` property, which is far less helpful when it comes to fixing the error than the custom message you could have written yourself.
