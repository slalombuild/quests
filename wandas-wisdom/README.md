# Wanda's Wisdom

This repository presents a simple **JavaScript** web application and demonstrates how it can be converted into **TypeScript** with some basic alterations. To facilitate some of this, the app uses **Node** and the **webpack** module under the hood.

The app itself merely displays a random quote, which the user can change with the click of a button. The quotes come from _Bartlett's Familiar Quotations_ (18th edition).

## Sessions

We will go through the transformations and upgrades to the app over the course of three sessions. The code necessary for each session is stored in its own subfolder.

- [session-1](session-1): basic types
- [session-2](session-2): advanced features

## Slalom Town Narrative

Wanda is a resident of Slalom Town. She runs a website called Wanda's Wisdom where she shares quotes she obtained from the distant realm of Earth. Currently, her site is written in JavaScript, but she's learned that static typing could make her site easier to maintain for future developers. As a result, she needs someone to convert her site to TypeScript in order to gain those benefits.

## Installing and Running the Repo

1. Make sure you have already forked the main repository to your own account and cloned it to your local computer
2. Within the Slalom Quests directory, enter into this app's folder: `cd wandas-wisdom`
3. Enter into the subfolder related to the session you want to work off of; for example, to work with the code for the first session: `cd session-1`
4. Switch to the start branch: `git checkout start`
5. Install all Node modules: `npm i`
6. Start the app: `npm run start`

The last command will build then serve the app by using webpack, allowing you to view it at `http://localhost:8080`. Any changes you make to the code will automatically update the running site. Any errors will be displayed in your terminal.

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
  - [Common Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
  - [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
  - [Function Types](https://www.typescriptlang.org/docs/handbook/2/functions.html)
  - [DOM Types](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)
  - [CLI Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html#handbook-content)
- [DOM Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
  - [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
  - [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
  - [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
  - [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
  - [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
  - [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
