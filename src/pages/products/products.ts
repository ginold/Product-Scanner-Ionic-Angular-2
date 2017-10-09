import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery'
import {ProductArray} from '../../assets/products'
import { ProductDetailsPage } from '../../pages/product-details/product-details';

declare var $: any;

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})

export class ProductsPage {
  public readonly products: Array<Object>;
  private view: string;
  private sortByWhat: string;

  constructor(public navCtrl: NavController) {
    this.products = ProductArray.products;
    this.view = 'row';
    this.sortByWhat = 'type';
    this.sortBy('type');
  }

   public changeView(viewType: string) {
     if(viewType == 'row') {
      $('#product-list ion-card').removeClass('item-square').addClass('item-row');
     } else{
      $('#product-list ion-card').removeClass('item-row').addClass('item-square');
     }
   }

   public goToProductDetails(id) {
     this.navCtrl.push(ProductDetailsPage, {id: id});
   }

   private sortBy(sortByname: string) {
     switch(sortByname){
       case 'type':
       break;
       case 'nameDesc':
       break;
       case 'nameAsc':
       break;
       case 'priceAsc':
       break;
       case 'priceDesc':
       break;
       default: return;
     }
   }

}
