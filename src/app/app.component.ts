import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { IntroSlider } from '../pages/intro/intro';
import {Storage} from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  private rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, private storage: Storage) {
    this.storage.get('introShown').then((introShown) => {
      this.rootPage = introShown ? TabsPage : IntroSlider;
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    });
  }
}
