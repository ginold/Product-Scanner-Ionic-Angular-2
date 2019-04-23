## Product Scanner Ionic/Angular 2

A very simple Ionic app that uses a QR-code scanner then switches to the product details-view.
You can create your own QR-code: the code should be the a number between 1 and 9 (it's the product hardcoded ID).

### welcome page
![alt text](https://user-images.githubusercontent.com/7814311/56595070-3fe36600-65ee-11e9-9977-0300dc5877f1.png)

![alt text](https://user-images.githubusercontent.com/7814311/56595071-3fe36600-65ee-11e9-9638-2b3e9dbd99a5.png)

### Product list
![alt text](https://user-images.githubusercontent.com/7814311/56595066-3f4acf80-65ee-11e9-9f85-30f6adc4da97.png)

### Scanner - works in browser and on phone
![alt text](https://user-images.githubusercontent.com/7814311/56595072-3fe36600-65ee-11e9-9f86-5257e5e8ec80.png)


This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

To run in the browser use:
$ ionic serve 


