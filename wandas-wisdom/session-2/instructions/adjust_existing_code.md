# Adjust Existing Code

## 1. List all tags instead of the first two

In the `createForm` function, use your new utility function to get all the options for the select element, instead of hard-coding the first two tags.

## 2. Provide functionality for `handleSubmit`

Make this function set the value of `topic` in state, after getting it from a certain property on the select element.

_QUESTION: Why can't we define `handleSubmit` in a separate file like we did with `displayRandomQuote` previously?_

## 3. Adjust button to work in multiple scenarios

Since we now have two buttons created from the same generator but performing different actions when clicked, we need to change the event listener since it won't always be the same thing. Pass it in as a parameter.

But wait! Something still isn't right. The button for the form doesn't actually need an event listener (it's `handleSubmit`, which is fired on form submission). Making this function work for both scenarios is tricky, but try following these tips:

-   Make the event handler parameter optional
-   Only add an event listener if an event handler is provided
-   Modify one of the button object's properties if an event handler is not provided (this modification will help it directly work with the form)

## 4. Display filtered quotes

Update the `displayRandomQuote` function to only select a quote with a specific tag if the topic has been set. Otherwise, just continue to select from all quotes. Use the `getValue` storage function and one of your new utility functions to achieve this.

## 5. Avoid infinite loops

Try playing around with your site right now. Why is it that if you select `family` for the topic that your page freezes up? Which function should you change to avoid this infinite loop?
