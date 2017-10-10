import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from 'ionic-angular';

import {TabsPage} from '../../pages/tabs/tabs';

@Component({
    templateUrl: 'intro.html'
})

export class IntroSlider {

    constructor(private nav: NavController, private storage: Storage) {

    }

    complete() {
        this.storage.set('introShown', true);
        this.nav.setRoot(TabsPage);
    }
}
