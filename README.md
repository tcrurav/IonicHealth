# Very first steps using Ionic Health to detect user activity in Android (to start with...)

It's just that... A simple project to demonstrate the use of Ionic Health.

### Installing

Open a command line console and clone this project.

```
git clone https://github.com/tcrurav/IonicHealth
```

Go to the new created directory

```
cd IonicHealth
```

Download all dependencies

```
npm install
```

If you want to try your project with your Android Phone

```
ionic cordova run android
```

You'll soon notice you get empty data only. This is because an App to collect your data from your phone sensors. To do it start with Google Fit App that you can download from Google Play. Start using it so that data starts getting collected in your Android phone.

When some time is gone you can play again with this test project App and show the data collected.

Enjoy!

### Some screenshots

Just after launching the App           |  After "Request permission" and "Show activity" |  After "Request permission" and "Show steps"
:-------------------------------------:|:--------------------------------------:|:-------------------------------------:
![alt text](https://github.com/tcrurav/IonicHealth/blob/master/screenshots/Screenshot-1.png)  |  ![alt text](https://github.com/tcrurav/IonicHealth/blob/master/screenshots/Screenshot-2.png)  |  ![alt text](https://github.com/tcrurav/IonicHealth/blob/master/screenshots/Screenshot-3.png)

After clicking on "Request permission", click on "Show activity" and you'll get raw data as you see above.

Check that the data you get is from the last 3 days, and it's labeled with "still", "walking", "running" and "in_vehicle"... that's what this test App does...

### Step by step

This section is for those who want to do it themselves from the beginning.

To create this test project I have followed the instructions of this link:
https://ionicframework.com/docs/native/health/

Install Android Studio and check you have all SDK requirements:
https://github.com/2dvisio/cordova-plugin-googlefit#sdk-requirements-for-compiling-the-plugin

Don't forget to read this:
https://github.com/dariosalvi78/cordova-plugin-health

To get a Google Api Key follow this:
https://developers.google.com/fit/android/get-api-key

To enable the Google Fitness API for your App:
https://github.com/2dvisio/cordova-plugin-googlefit#how-to-enable-the-google-fitness-api-for-your-application

Check it out! In the last link it's very important that you create the ./platforms/android/ant.properties file; and also is very important that you give a name to your app in config.xml, that match that of the Google Api Key you have created.

### Prerequisites

All you need is... 
* An editor. I have used Visual Studio Code. Other options are Sublime Text, Atom, etc...
* Git is not necessary but desirable.
* A working environment with Ionic.
* A working environment with Android Studio.
* More hours than you first could think of...

## Built With

* [Node JS](https://nodejs.org/es/) - You need it to start working with Ionic. Download the LTS version.
* [Ionic](https://ionicframework.com/docs/intro/installation/) - Follow this steps to start with Ionic.
* [Cordova Health Plugin](https://github.com/dariosalvi78/cordova-plugin-health) - A plugin that abstracts fitness and health repositories like Apple HealthKit or Google Fit
* [Android SDK](https://developer.android.com/studio/?hl=es-419) - The easiest is to install Android Studio.
* [Fitness Api](https://developers.google.com/fit/android/get-api-key) - Google Fitness Api.
* [Visual Studio Code](https://code.visualstudio.com/) - An editor.

## Acknowledgments

* https://ionicframework.com/docs/native/health/. Ionic first instructions using Health.
* https://play.google.com/store/apps/details?id=com.google.android.apps.fitness&hl=es_419. Google Fit App.
