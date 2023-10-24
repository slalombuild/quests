# New Utilities

Create two new files in the `utilities` folder to handle some logic that you'll need for the rest of the application. For each function, you may use a function declaration or a function expression.

## 1. List all the tags

Currently, you have an array of quote objects with tags, many of which repeat (e.g., many quotes have the `love` tag). For the drop down, you'll want to see a list of all possible tags from across the quotes, and you won't want any of them repeated (e.g., `love` should only appear once in the final array). Create a function to return an array of all the unique tags from across all the quotes, sorted alphabetically. It should take no arguments and return an array of strings.

## 2. Filter quotes by topic

We want to filter the quotes by tag. Create a function that returns an array of all quotes with a specific tag. It should take a string as an argument and return an array of quote objects.
