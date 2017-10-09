import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProductArray} from '../../assets/products'


@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  private product: Object;
  private products: Array<Object>;
  private productId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products = ProductArray.products;
    this.productId = navParams.data.id;
    this.product = this.getProduct(this.productId);
  }

  private getProduct = (id) => {
    console.log(id)
    for (let product of this.products) {
      if(product['id'] == this.productId) {
        return product;
      }
    }
    return null;
  }
}
