# React JSON schema editor

A sample project to play with React, Redux, Typescript, Webpack, and hot reloading.

- The infrastructural parts are based on: https://github.com/gaearon/react-hot-boilerplate
- Typescript support added by idea of: https://twitter.com/dan_abramov/status/654189362045919232

## Setup and Run

After fork/clone of the repo:

    npm install
    npm start  # for development mode with hot reloading
    npm build  # for static building and bundling to ./dist folder

## Issues

### Hot reloading works only partially

In those cases the HMR prints to console that a full reload is required:

- syntactical or semantical error happened
- the main module changed

Sadly this full reload does not happen automatically. :-(
