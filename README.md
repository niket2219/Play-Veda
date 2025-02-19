# Expo React Native Project

## 📌 Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/): `npm install -g expo-cli`
- A smartphone with the [Expo Go](https://expo.dev/client) app installed (or an Android/iOS emulator)

## 🚀 Getting Started

### 1️⃣ Clone the Repository

git clone <repository-url>
cd <project-folder>

### 2️⃣ Install Dependencies
npm install
# OR
yarn install

### 3️⃣ Start the Expo Development Server

npx expo start
# OR
npm start
# OR
yarn start


### 4️⃣ Running the App
- **On a physical device:** Scan the QR code using the Expo Go app.
- **On an emulator:** Press `i` for iOS (Xcode Simulator) or `a` for Android (Android Emulator).

## 🛠️ Useful Commands
```sh
npx expo start        # Start development server
npx expo build        # Build standalone app
npx expo eject        # Eject to bare React Native
```

## ❓ Troubleshooting
- If you encounter dependency issues, try:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```
- Clear Expo cache:
  ```sh
  npx expo start -c
  ```
