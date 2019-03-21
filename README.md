# Rundbok

RundBok is a service meant to help and allow students at<br/>
KTH Royal Institute of Technology to list and sell their old course literature.

## What we have done

The project skeleton has been setup, intial layout has been implemented and the 3rd party data which will be used in Rundbok is retrieved from the KTH API and Google Books API. A proxy has been implemented at api.rundbok.dev.sharpmind.se in order to solve CORS errors, we plan to let all API requests go through there. Mockups of each view has also been designed.

## What we still plan to do

We plan to start building the backend which we are heavy dependent on since the 3rd party data itself is not what we plan to present in the long run. The 3rd party data is rather supposed to complement and help in the creation process of a book listing/ad. We also plan to integrate Facebook-auth which will be our way of identifying who sells what.

## Technologies

This project is built primarily utilizing React, TypeScript and Sass.

## Directories and files

### src/components

Funtional, reusable, component views.

- All components should be functional components i.e. `const MyComponent = () => { ... }`, avoid the use of class-based components i.e. `class MyComponent extends React.Component { ... }` as they end up being more tighly-coupled and difficult to split into more modular ones.<br>
- If the use of state or life-cycle methods is needed, do so by means of hooks, like `useState()` or `useEffect()`.<br>
- Components can define their own `[*].module.scss` file that makes use of CSS modules to avoid application-wide style collisions.

### src/pages

Page views define the general layout and navigation aspect of the application.

### src/contexts

Contexts manage the global state of the application; once provided they can be consumed anywhere on the application using the hook `useContext()`.<br>

- When using the Context API we need to consider that every time a slice of its state changes it will trigger a rerender of all connected components as well as their children, this is usually the wanted behavior for global state, but if that's not the case we can use the `withContext()` HOC in conjuction with the `useMemo()` hook and the `memo()` functions to memoize the context value and avoid unintended renders.

### src/hooks

Custom hooks that enhance components, i.e. `useProgrammes()`. Must start with the keyword `use`.

### src/hocs

Higher-oder components used to inject extra funtionality into components, i.e. `withContext()`. Must start with the keyword `with`.

### src/App.tsx

App.tsx - Main component of the application that defines the main pages and routes.

### src/api

Requests helpers, methods and types.

### src/scss

Global styles, can be used anywhere on the application.

### src/static

Content like static images and webfonts.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn sass-lint`

Runs the Sass linter (sass-lint) to check for errors and style violations within .scss files.

### `yarn sass-lint:fix`

Runs the Sass linter (sass-lint) to check for errors and style violations within .scss files and attempts to fix them.

### `yarn ts-lint`

Runs the TypeScript linter (tslint) to check for errors and style violations within .ts and .tsx files.

### `yarn ts-lint:fix`

Runs the TypeScript linter (tslint) to check for errors and style violations within .ts and .tsx files and attempts to fix them.

### `yarn lint`

Runs both, `yarn sass-lint` and `yarn ts-lint`.

### `yarn lint:fix`

Runs both, `yarn sass-lint:fix` and `yarn ts-lint:fix`.

### Git pre-commit hook

A pre-commit hook is in place that will run all the linters and attempt to fix any errors and warnings they might find. If these cannot be automagically fixed, the commit will be blocked and further action will be required to fix them!
