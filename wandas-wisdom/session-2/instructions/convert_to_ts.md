# Convert JavaScript to TypeScript

## 1. Adjust the environment

If you're running the app, kill it, since the changes to the environment will be significant enough that continuing to run the app may result in unexpected behavior.

Install the necessary modules for TypeScript:

```bash
npm i typescript ts-loader --save-dev
```

Update the `webpack.config.js` file to handle TypeScript by adding this code block below the `output` property:

```js
module: {
    rules: [
        {
            use: {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                }
            },
            exclude: /node_modules/,
        }
    ],
},
resolve: {
    extensions: [ '.ts', '.js' ],
    extensionAlias: {
        '.ts': [ '.js', '.ts' ]
    }
},
```

Specify the configurations that TypeScript should use by creating a `tsconfig.json` file at the root of your repo, then add this code to it:

```json
{
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "ES5",
        "module": "ESNext",
        "strict": true,
        "sourceMap": true
    }
}
```

## 2. Change the file extensions

For each file that currently has a `.js` extension, change it to `.ts`.

For example, convert `app.js` to `app.ts`.

Hint: You will also need to change the entry property in the `webpack.config.js` file as well.

## 3. Add type annotations

After the previous step, you'll see many errors flagged in your code. To get rid of those errors, you'll need to add type annotations. For each variable declared, add a type annotation. Even for primitive types that may otherwise be inferred! Make sure to specify the types of parameters and the return type for all functions.

### 3A. Add simple types

Go through all the files, and add simple types (e.g., `string`, `number`, `boolean`). For the time being, you can skip adding more advanced types (e.g., DOM types) and override the errors by typing those elements with `any`. Start with the files in the data folder, then move on to those in the utilities folder. See if you can add any simple types to the generators or mutators.

### 3B. Declare a new type

There's a common object that appears periodically throughout the code base. You'll need to create a new type to represent it. Create a new file called `types.ts` at the root of the `src` folder. Within that file, declare a new type for that object, and be sure to export it.

### 3C. Add advanced types

Go back through all the files with variables that couldn't be typed using simple types (they should all be typed as `any` currently). You can now add types for them, using either the new type you just created or a DOM type. When typing a DOM element, pay attention to the hints your code editor provides if you're unsure about what type (or types) to use. Remember: You will need to import the new type you just created into every file in which you want to use it. (You don't need to import DOM types, though.)

### 3D. Ensure nothing left untyped

Do a final pass through all your TS files to ensure that no variable has been left untyped. If you haven't typed your `app.ts` yet, then do so now. Remember: Functions that don't return anything should specify a return type of `void`.

## 4. Adjust code for errors

Especially with the DOM queries, you will notice that it's possible that something may be undefined. Adjust your code to deal with these scenarios. Use conditionals and throw errors where applicable, and only use type coercion where appropriate.

Recursion also requires special attention. You must ensure that any recursive function explicitly returns something matching the type indicated by the function's signature.

## 5. Confirm app runs

Restart the app:

```bash
npm run start
```

Go to the live site, and confirm that everything still works as expected. If any errors appear, follow the messages and make the necessary adjustments.
