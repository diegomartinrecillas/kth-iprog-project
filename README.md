# Rundbok

RundBok is a service meant to help and allow students at<br/>
KTH Royal Institute of Technology to list and sell their old course literature.

## What we have done

The project skeleton has been setup, intial layout has been implemented and the 3rd party data which will be used in Rundbok is retrieved from the KTH API and Google Books API. A proxy has been implemented at api.rundbok.dev.sharpmind.se in order to solve CORS errors, we plan to let all API requests go through there. Mockups of each view has also been designed.

## What we still plan to do

We plan to start building the backend which we are heavy dependent on since the 3rd party data itself is not what we plan to present in the long run. The 3rd party data is rather supposed to complement and help in the creation process of a book listing/ad. We also plan to integrate Facebook-auth which will be our way of identifying who sells what.

## Directories and files

### src/components

Component classes

### src/components/app

App.tsx - Main component

### src/api

API classes

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
