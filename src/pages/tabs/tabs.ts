import { Component } from '@angular/core';
import { ScannerPage } from '../scanner/scanner';
import { ContactPage } from '../contact/contact';
import { ProductsPage } from '../products/products';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProductsPage;
  tab2Root = ScannerPage;
  tab3Root = ContactPage;

  constructor() {}
}
