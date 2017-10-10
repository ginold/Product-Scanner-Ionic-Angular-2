import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {ProductArray} from '../../assets/products'
import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { QrmodalPage } from '../qrmodal/qrmodal';

@Component({
  selector: 'page-discounts',
  templateUrl: 'discounts.html'
})

@Injectable()
export class DiscountsPage {

  public discounts: Array<Object>;
  private products: Array<Object>;
  public availableDiscounts: Array<Object> = [];

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, private storage: Storage) {
    this.products = ProductArray.products;

    this.storage.get('discounts').then((discounts) => {
      this.discounts = discounts;
      console.log(discounts)
      if(discounts) {
        this.getDiscounts();
      }
    });
  }

  private getDiscounts() {
    for(let d of this.discounts) {
      for(let p of this.products){
        if(d['productId'] == p['id']) {
          p['discount'] = d['amount'];
          this.availableDiscounts.push(p);
        }
      }
    }
    return;
  }

  public viewQRCode() {
    let modal = this.modalCtrl.create(QrmodalPage);
    modal.present();
  }
}
