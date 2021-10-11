# React Native Weather App 🌤️

## About ℹ️

This project is a simple weather app using [React Native](https://reactnative.dev/) and [OpenWeatherMap API](https://openweathermap.org/api).

Features:

1. Get the current user location (coordinates) and display the current weather and forecast data. Also, displays the forecast for the next five days
2. Search by city
3. Add and remove cities to a favorite list

## Project Setup 🔨

🚩 If you are new to mobile development please follow the [setup the development environment](https://reactnative.dev/docs/environment-setup).

To get the project up and running you'll need to:

1. Clone the project
   > `git clone https://github.com/carolinafbarros/react-weather-app.git`
2. Run `nvm use` to configure node to the project node version(node version `16.9.1`)
3. Run `yarn` to install the node dependencies

## iOS

This section contains instructions on how to configure and start up an iOS project.

1. Navigate to `./ios` and run:
   > `pod install`
2. Go back to the root and run (the app will be launch and the metro bundler server will start automatically)
   > `yarn ios`

## Android

This section contains instructions on how to configure and start up an iOS project.

1. Run (the app will be launch and the metro bundler server will start automatically):
   > `yarn android`

## Node Scripts

> `yarn test`

Run all the unit tests accordingly with `jest.config.js` configuration.

> `yarn test:watch`

Allow to watch files for changes and rerun tests related to changed files.

> `yarn test:coverage`

Run all the unit tests. The coverage information is collect and report in inside `coverage` folder.

> `yarn lint`

Run eslint accordingly with `.eslintrc.json` file.

> `yarn lint:fix`

Run eslint accordingly with `.eslintrc.json` file and try to fix some errors and warnings.

Applies prettier code formatter to all `.js`, `.tsx` and `.ts` files.

> `yarn format`

Applies prettier code formatter to all `.js`, `.tsx` and `.ts` files.

## Documentation 📖

- [Start Guide](docs/start-guide.md)
