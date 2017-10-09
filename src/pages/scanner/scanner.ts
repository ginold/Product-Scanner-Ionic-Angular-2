import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  Instascan  from 'instascan-ngfar';
import { ProductDetailsPage } from '../../pages/product-details/product-details';

@Component({
  selector: 'scanner',
  templateUrl: 'scanner.html'
})

export class ScannerPage implements OnInit {

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    let that = this;

    let scanner = new Instascan.Scanner({ video: document.getElementById('scanner')});
    scanner.addListener('scan', function (content, image) {
      that.navCtrl.push(ProductDetailsPage, {id: content});
    });
    console.log(document.getElementById('scanner'))
    console.log(scanner)
    Instascan.Camera.getCameras().then((cameras) => {
      // camera.0 = front camera or webcam, camera.1 back camera
      if (cameras.length == 1) {
        scanner.start(cameras[0]);
      } else {
        scanner.start(cameras[1]);
      }
    }).catch(function (e) {
      console.log(e)
      alert(e);
    });
  }

}
