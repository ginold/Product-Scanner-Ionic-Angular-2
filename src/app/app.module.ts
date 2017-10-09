import { NgModule, ErrorHandler } from '@angular/core';
//import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { ScannerPage } from '../pages/scanner/scanner';
import { ContactPage } from '../pages/contact/contact';
import { ProductsPage } from '../pages/products/products';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ArrayFilterPipe } from "../utils/array-filter";

@NgModule({
  declarations: [
    MyApp,
    ScannerPage,
    ContactPage,
    ProductsPage,
    ProductDetailsPage,
    TabsPage,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, 
      {
      links: [
        { component: ProductsPage, segment: 'products'},
        { component: ProductDetailsPage, segment: 'products/:id'},
        { component: ScannerPage, segment: 'scanner'},
        { component: ContactPage, segment: 'about'}
      ]
    }
  )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScannerPage,
    ContactPage,
    ProductDetailsPage,
    ProductsPage,
    TabsPage
  ],
  providers: [
     //{ provide: LocationStrategy, useClass: PathLocationStrategy },
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
