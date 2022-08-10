Aluxion app in React Native :rocket:
===

## demo

![demo](src/assets/giphy.gif)

This app was created using [React Native](https://github.com/facebook/react-native/).

## How to start developing this project :gear:

1. Before starting, make sure your environment is ready for React Native development, as per the official instructions described here. [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content).
2. Clone this repository using the command: ``` git clone < project-url.git > ```.
3. Install project dependencies using: ``` yarn ```.
4. Use the command: ``` yarn start ``` to start a local server.

### Starting the project on Android :robot:

1. Launch a virtual device from Android Studio.
2. If you have never done this before, follow the instructions described [in this link](https://developer.android.com/studio/run/managing-avds.html#createavd).
3. To run your project on the virtual device you started, use the command: ``` yarn android ```.

### Starting project in iOS emulator :iphone:

Attention: you can only launch the project on iOS if you are in a macOS environment.

1. Install xcode from the App Store.
2. Install the project's pods with the command: ```cd ios && pod install```.
3. To run the project on iOS, use the command: ``` cd .. && yarn ios ```.
4. You can specify a device using the command: `--simulator` followed by the device name, example:    
`yarn ios -- --simulator="iPhone 7"`.
5. To obtain the list of simulators installed on your machine, use the command: `xcrun simctl list devices`.
6. If you want to run the project on a different version of iOs, you will have to download the simulator with the desired version from    
```Xcode > Preferences... > Components```.

## Starting the project on iOS device :calling:

> **WARNING**:
We are assuming that you have the certificates and profiles configured on your machine.
If you don't have it yet, you must log in to the development portal of [Apple](https://developer.apple.com), generate and configure all certificates and profiles.
needed to run any application on an Apple device.

### Installing ios-deploy
1. React Native uses a framework called `ios-deploy` to generate the ipa file and install it on an Apple device.
2. Install this framework globally using the command ```yarn install -g ios-deploy --unsafe-perm=true```.

### Deploy Debug Configuration
1. Make sure your computer and your phone are connected to the same Wi-Fi connection.
2. To run the project using the device name, use the command ```yarn run ios -- --device "DEVICE_NAME"```.
3. 3. To run the project using `udid` use the command ````yarn run ios -- --udid "UDID"````. The `udid` can be obtained from iTunes with the device connected.

### Deploy Configuration Release
1. To deploy in release mode, use the ```yarn run ios:release``` command.

Example:
     ```yarn run ios:release -- --device "DEVICE_NAME"```
     
2. In release mode, devices do not need to be on the same network.






