# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


slalom-quests-react
# React fundamentals

React is technically not a framework but a declarative Javascript library that allows you to compose complex user interfaces from components. It is used in combination with other libraries to create applications - react and React Native for mobile and React and ReactDOM for web.

React adopts a Declarative approach, which means developers describe how the user interface should look based on its current *state*, and React takes care of updating the DOM (Document Object Model) accordingly.

## Some of the core features of React: 

### Components:
Components are independent and reusable bits of code. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (props) and return React elements describing what should appear on the screen. They have the same purpose as Javascript functions but work in isolation and return HTML. *We will be working with Function components as it is typically standard.*

A React component name must be capitalized. Component names that do not begin with a capital letter are treated like built-in components.

### Props:
Props (short for properties) are the information that you pass to a JSX tag. Props are like function arguments and you send them into the component as attributes. When we want to create multiple instances of a single component with various different values, we need to use props.

*Children Props:*
Sometimes, we might come across situations in which we need to add a specific element to a particular instance of a component only. We pass the specific element between opening and closing tags of the component. In those cases, we use children props

*Key Props:*
A key is a special attribute you need to include when creating lists of elements in React. We use keys to give an identity to elements in lists. We need to specify an id or any unique value to each instance of a component to keep track of their addition or removal.

### JSX:
JSX (short for JavaScript XML) is a syntax extension for Javascript based on ES6 that lets you write HTML-like-markup inside a Javascript file. It's translated into regular JavaScript at runtime.
JSX allows you to return only one element from a given component. This is known as a parent element.

### State:
State is an object that holds information that may change over the lifetime of the component. State is an observable object used for holding data and can be changed in the future. Typically, state can only be used in class-based components but the useState hook allows you to have state variables in functional components. An event handler is created in order to change state. 

Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. This kind of component-specific memory is the **state**.

### Hooks
Hooks are a special kind of function that is used in react components. Some of them can be used to provide a functional component with stateful elements like useState. Others can be used to manage side effects like useEffect. All hook function begins with the word “use.” **React hook functions can only be used in functional components**. For this exercise we will only be using the **useState** and **useEffect** hooks.

*useState*: React Hook that allows you to add state to a functional component. t returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

*useEffect*: The Effect Hook, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount , componentDidUpdate , and componentWillUnmount in React classes, but unified into a single API. The best and optimal use of useEffect is to only include the minimal set of values that the effect depends on in the dependency array. This will ensure that the effect is only run when the dependencies change and that the component re-renders optimally.