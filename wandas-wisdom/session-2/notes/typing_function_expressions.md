# Typing Function Expressions

## Different Types of Functions

While there are many ways to write a function in JavaScript, we'll focus on two major types: declarations and expressions.

### Declarations

Function declarations begin with the keyword `function`, don't separate the name from the parameters, and don't use any additional symbols. They are hoisted to the top of their scope (i.e., you can use them before you define them).

```js
function addTwoNumbers(first, second) {
    const sum = first + second

    return sum
}
```

### Expressions

Function expressions begin with `const`, separate the name from the parameters with an equals sign, and use the arrow symbol (`=>`). They are not hoisted to the top of their scope (i.e., you must define them before you can use them).

```js
const addTwoNumbers = (first, second) => {
    const sum = first + second

    return sum
}
```

## Typings

With function declarations, we only had two things to type: the parameters and the return type. With function expressions, we now have an additional thing to type: the function overall. A library may already provide typings for core functions. If not, a custom interface may need to be created that essentially combines the typings of the parameters and the return type.

For the above function, we would need an interface to describe a function that takes in two numbers and returns a number, like this:

```ts
interface NumbersFunction {
    (first: number, second: number): number
}
```

We could then use it:

```ts
const addTwoNumbers: NumbersFunction = (
    first: number,
    second: number
): number => {
    const sum = first + second

    return sum
}
```

Note that the interface defining the function exactly matches what happens between the two equals signs in the function expression. As a result, explicitly typing the function itself may seem redundant. However, when using libraries that provide interfaces for functions, it can be useful to explicitly type them in your code.
