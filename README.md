
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
App is ready to be deployed!

## Docker deploy

### docker build

docker build . -t reactdocker

### start the docker

docker run -it -d -p 80:80 --name rdocker reactdocker

now the server lisen on ::80