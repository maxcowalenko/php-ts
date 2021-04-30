# PHP Technical Specification

The database table stores countries. Write the html, css, js, php interface for adding a new country to the table and viewing the list of countries from the table.
Create the table structure yourself. You don't need to delete or edit it.

## Downloading the source code

Clone the repository:
```bash
git clone https://github.com/maxcowalenko/php-ts.git
cd php-ts
```

To update the source code to the latest commit, run the following command inside the `php-ts` directory:
```bash
git pull
```
## Docker

### Run
Builds, (re)creates, starts, and attaches to containers for a service:
```bash
yarn up
```
Follow the link: <http://localhost:8080/>

### Stop
Forces running containers to stop by sending a `SIGKILL` signal:
```bash
yarn kill
```

### Remove
Stops containers and removes containers, networks, volumes, and images created by up:
```bash
yarn down
```

## Interface development

### Downloading packages
This command installs a package and any packages that it depends on:
```bash
yarn
```

### Start
Runs the app in the development mode. Open <http://localhost:3000> to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console:
```bash
yarn start
```

### Build
Builds the app for production to the `build` folder. It correctly bundles `React` and `Webpack` in production mode and optimizes the build for the best performance:
```bash
yarn webpackbuild
```