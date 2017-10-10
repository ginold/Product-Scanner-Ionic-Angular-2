import { Component } from '@angular/core';
import { NavController, NavParams, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-qrmodal',
  templateUrl: 'qrmodal.html',
})
export class QrmodalPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }
  public close() {
    this.viewCtrl.dismiss();
  }
}
