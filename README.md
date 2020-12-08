# gas-vue-typescript

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build:dll
yarn build
```

### Create clasp project
```
clasp login
clasp create --type slides --rootDir dist

Move appsscript.json from /dist to /gas, it's moving automatically to dist when build.
```

### Push dist files to GAS
```
clasp push
```

### Vue code structure

- 1 entry point for development (src/main.ts)

- Multiple entry points for production (src/pages/**/main.ts)

- Every page folder is generating an html with same name as folder

- Shared components -> /src/components

- Shared css -> /src/assets/css/main.css



## Google Slides

To access the script in a google slide, go to:
```
tools -> code editor
```
