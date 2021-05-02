# PHP Technical Specification

The database table stores countries. Write the html, css, js, php interface for adding a new country to the table and viewing the list of countries from the table.
Create the table structure yourself. You don't need to delete or edit it.

## Required packages

### Work

The following installed packages are required to work:
| Package        | Link                                                               |
| -------------- | ------------------------------------------------------------------ |
| Docker         | [Install Docker Engine](https://docs.docker.com/engine/install/)   |
| Docker compose | [Install Docker Compose](https://docs.docker.com/compose/install/) |

### Development

The following installed packages are also required for development:
| Package | Link                                                                                      |
| ------- | ----------------------------------------------------------------------------------------- |
| Node.js | [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/) |
| Yarn    | [Installing Yarn via package manager](https://classic.yarnpkg.com/en/docs/install)      |

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

## Starting the assembled project

### Run
Builds, (re)creates, starts, and attaches to containers for a service:
```bash
yarn up
```
Open <http://localhost:8080/> to view it in the browser.

### Stop
Forces running containers to stop by sending a **SIGKILL** signal:
```bash
yarn kill
```

### Remove
Stops containers and removes containers, networks, volumes, and images created by up:
```bash
yarn down
```

## Development

### Downloading packages
This command installs a package and any packages that it depends on:
```bash
yarn
```

### Start
Runs the app in the development mode. Open <http://localhost:8080/> to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console:
```bash
yarn start
```

### Build
Builds the app for production to the **build** folder. It correctly bundles **React** and **Webpack** in production mode and optimizes the build for the best performance:
```bash
yarn build
```
### Final
After the final development, stop the running containers:
```bash
yarn kill
```