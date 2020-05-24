# React x Next.js Framework

## How to run the project
```
yarn
yarn dev
#or 
npm install
npm run dev
```


## Folder structure

```sh
client/
    ├── .github                 # Github actions YAML files
    ├── .next                   # Next generation files
    ├── components              # All components 
    ├── node_modules
    ├── pages                   # All pages (routes) in the application
    ├── public                  # Any static content that needs to be served
    ├── styles                  # Top level stylesheets
    ├── .babelrc                # Babel Settings
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore 
    ├── .prettierignore
    ├── .prettierrc.json
    ├── .next.config.js         # Next.js settings
    ├── package-lock.json       # Packaged dependencies managed by NPM
    ├── package.json            # Project settings
    └── yarn.lock               # Package dependencies managed by Yarn
```

## Naming / Directory Conventions
```sh
# For components, files are to follow this structure
components/
    ├── [FolderNameInCaps]
    |       ├──[component-name.jsx]     # Component (Component name must be in lowercase kebab case.)
    |       ├──[index.js]               # Import/Export for the components
    |       └──[styles.js]              # Styled components assets for the specific component
    |   # Example
    ├── Login
    |       ├──Sign-Up
    |       |   ├──index.js
    |       |   ├──sign-up.jsx
    |       |   └──styles.js   
    |       └──Sign-In
    |           ├──index.js
    |           ├──sign-in.jsx
    |           └──styles.js 
    |    
    └── [OtherComponents]
```

#### Naming
1. Components parent folders are always to be in ```Pascal-Kebab``` format
2. The components itself, will be in ```lowercase-kebab``` format
3. The "styles.js" file must only be named as exactly that.


## Linter
For our application, we have a main linter (eslint) and a code formatter (prettier). The configuration for both are included into the development files already. If you are using VScode, it should piroritize those files over your existing settings. If you are using a different editor, please check if it is linting properly.

#### How to run the linters
```sh
# eslint
npx eslint ./

# prettier (this can be done via format on save option in your editor)
npx prettier ./components
npx prettier ./pages
```

## Contributing
1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.
4. If your code produces linting errors, please address them and append to the PR.
5. Try to not add new dependencies before informing the responsible party.
