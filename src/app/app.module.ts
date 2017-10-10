import { NgModule, ErrorHandler } from '@angular/core';
//import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { ScannerPage } from '../pages/scanner/scanner';
import { DiscountsPage } from '../pages/discounts/discounts';
import { ProductsPage } from '../pages/products/products';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroSlider } from '../pages/intro/intro';
import { ArrayFilterPipe } from "../utils/array-filter";
import { QrmodalPage } from '../pages/qrmodal/qrmodal';

@NgModule({
  declarations: [
    MyApp,
    ScannerPage,
    DiscountsPage,
    QrmodalPage,
    ProductsPage,
    ProductDetailsPage,
    TabsPage,
    IntroSlider,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {},
      {
      links: [
        { component: ProductsPage, segment: 'products'},
        { component: ProductDetailsPage, segment: 'products/:id'},
        { component: ScannerPage, segment: 'scanner'},
        { component: DiscountsPage, segment: 'discounts'}
      ]
    }
  )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScannerPage,
    QrmodalPage,
    DiscountsPage,
    ProductDetailsPage,
    IntroSlider,
    ProductsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
