# Currency Converter Mobile App

A React Native application for converting currency using real-time exchange rates. Built with Expo.

## Features
- Convert between different currencies
- Real-time exchange rate updates
- User-friendly interface

## Screenshots

### Main Screen
![Main Screen](./assets/images/appScreenshots/mainScreen.jpg)

### Currency Choice Screen 1
![Currency Choice Screen 1](./assets/images/appScreenshots/currencyChoiceScreen1.jpg)

### Currency Choice Screen 2
![Currency Choice Screen 2](./assets/images/appScreenshots/currencyChoiceScreen2.jpg)

### Enter Value Screen
![Enter Value Screen](./assets/images/appScreenshots/enterValue.jpg)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A code editor, such as [Visual Studio Code](https://code.visualstudio.com/)

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/CurrencyConverter_mobileApp.git
   cd CurrencyConverter_mobileApp
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the Expo server:**
   ```
   npx expo start
   ```
   or
   ```
   npx expo start --tunnel
   ```

   This will start the development server and open the Expo DevTools in your browser.

### Running the App

You can run the app on an iOS simulator, Android emulator, or physical device:

- **iOS Simulator:**
  - Make sure you have Xcode installed.
  - Press `i` in the terminal to open the app in the iOS simulator.

- **Android Emulator:**
  - Make sure you have Android Studio installed and an emulator running.
  - Press `a` in the terminal to open the app in the Android emulator.

- **Physical Device:**
  - Download the Expo Go app from the App Store (iOS) or Google Play (Android).
  - Scan the QR code in the Expo DevTools with the Expo Go app.

## API Integration

The app fetches real-time currency exchange rates from a public API. Ensure you have an API key from a provider like [ExchangeRate-API](https://www.exchangerate-api.com/).

Replace `YOUR_API_KEY` in the `api.js` file with your actual API key:
```javascript
const API_URL = "https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/"
```

## Project Structure

```
CurrencyConverter_mobileApp/
├── App.js
├── assets/
│   └── images/
│           ├── background.png
│           ├── logo.png
│           └── reverse.png
├── components/
│   ├── Button.js
│   ├── ConversionInput.js
│   ├── KeyboardSpacer.js
│   └── RowItem.js
├── constants/
│   └── colors.js
├── config/
│   └── Navigation.js
├── data/
│   └── currencies.json
├── screens/
│   ├── Home.js
│   ├── Options.js
│   └── CurrencyList.js
└── util/
    ├── api.js
    └── ConversionContext.js
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License



```
