# Wanda's Wisdom: Session 2

In this session, we look at how to level up a basic **TypeScript** app with advanced features. Wanda wants to allow users to only view quotes matching their interests, so she's added a form to let user choose quotes by tag. She wrote the first two tags out by hand, but she realizes there should be a more efficient way to do this. She wants to make use of the button function she already created with her now form, but she's not sure what refactoring she will need to do to achieve that. She will also need to adjust her existing functions to only return the filtered quotes.

## Installing and Running the Repo

1. Make sure you have already forked the main repository to your own account and cloned it to your local computer
2. Within the Slalom Quests directory, enter into this app's folder and the subfolder for the second session: `cd wandas-wisdom/session-2`
3. Switch to the start branch: `git checkout start`
4. Install all Node modules: `npm i`
5. Start the app: `npm run start`

The last command will build then serve the app by using webpack, allowing you to view it at `http://localhost:8080`. Any changes you make to the code will automatically update the running site. Any errors will be displayed in your terminal.

## Guides for the Session

### Notes

Markdown files walking through the key concepts covered in this session have been provided in the [notes](notes) folder:

-   Interfaces
-   Optional Properties
-   Type Extensions
-   Typing Function Expressions

### Instructions

Markdown files with steps for how to solve the problem for this session have been provided in the [instructions](instructions) folder:

1.  Interfaces and Types
2.  New Utilities
3.  Adjust Existing Code

They should be completed in the above order.

## Explaining the Code

To work with state, we'll use the browser's native `sessionStorage` object. As a result, we have some helpers to interact with that object.

### File Structure

-   _public_: HTML and CSS files
-   _src_: JS files
    -   _data_: non-functional files with raw data to use in other files (e.g., the `quotes` array)
    -   _utilities_: helper functions (e.g., `makeAllCaps`)
    -   _generators_: functions to create DOM elements (e.g., `createDescription`)
    -   _mutators_: functions to change DOM elements (e.g., `replaceTags`)
    -   _storage_: functions to get and set values in session storage (e.g., `getValue`)
