# Documentation

## Folder structure

```sh
client/
    ├── node_modules
    ├── public
    ├── src
    |    ├── assets/                          # Static content to be served
    |    |       └── img
    |    ├── components/
    |    |       └── component/
    |    |              ├── index.js          # Import structuring
    |    |              ├── styles.js         # Styling for the component
    |    |              ├── foo.jsx           # The component's JSX
    |    |              └── foo.test.js
    |    ├── containers/                      # Views to be generated
    |    |       └── container
    |    |              ├── styles.js
    |    |              ├── index.js
    |    |              └── bar.test.js
    |    ├── constants/
    |    ├── app.js
    |    └── index.js
    ├── .gitignore
    └── package.json
```

## Running the project

In the project directory, you can run:

```javascript
npm start       // Runs the application
npm test        // Tests the application
npm build       // Builds the application for production
```
