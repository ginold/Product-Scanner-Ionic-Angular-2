import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductArray } from '../../assets/products'
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  private product: Object;
  private products: Array<Object>;
  private productId: number;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.products = ProductArray.products;
    this.productId = navParams.data.id;
    this.product = this.getProduct(this.productId);
  }

  private getProduct = (id) => {
    console.log(id)
    for (let product of this.products) {
      if (product['id'] == this.productId) {
        return product;
      }
    }
    return null;
  }

  public saveDiscount(productId: number, amount: string) {
    let availableDiscounts;

    this.storage.get('discounts').then((discounts) => {
      availableDiscounts = discounts;
      let newDiscount = {productId: productId, amount: amount };

      if (!availableDiscounts) {
        let newDiscount = {productId: productId, amount: amount };
        this.storage.set('discounts', [newDiscount]);
      } else {
        availableDiscounts.push(newDiscount);
        this.storage.set('discounts', availableDiscounts);
      }
      this.showConfirmation();
    });

  }

  private showConfirmation() {
    let alert = this.alertCtrl.create({
      title: 'Discount added!',
      subTitle: 'You just got this discount! You can check it in your Discounts tab.',
      buttons: ['OK']
    });
    alert.present();
  }
}
