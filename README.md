![End-to-end tests](https://github.com/AnnapurnaPatil/zksystem-coding-test/workflows/End-to-end%20tests/badge.svg)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We use bootstrap for CSS components.
We use cypress to run end to end tests.

## To run the application
First install dependencies
```shell script
npm install
```
Then start the application by
```shell script
npm start
```


## To run end to end tests
First we need to run the application for cypress to access
```
npm start
```

Then run cypress
```
npm run cy:run
```

## Cypress Test reports
Cypress test reports will be in `./results` folder

Cypress test video recording will be saved in `./cypress/videos`