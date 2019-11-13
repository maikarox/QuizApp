# Quizapp
Simple Quizapp using MEAN stack with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## How to run the app

### Node, Express, MongoDB Backend
- Create a .env file with the database connection string.
```bash
DB=connectionString
```
If it's a local database, start the MongoDB Database: `mongod`. 
- Go to backend folder and install npm packages: 
```bash 
cd backend && npm install
``` 
Run `nodemon index.js` to start the server. The app will automatically reload if you change any of the source files. The server will listen on http://localhost/4000/api

### Angular Frontend
Run `npm install` on the main directory to install Angular necesary npm packages
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## TODO
+ User Authentication: Change auth type to jwt model and use passport.
+ Admin panel: Delete questions, add and delete users
