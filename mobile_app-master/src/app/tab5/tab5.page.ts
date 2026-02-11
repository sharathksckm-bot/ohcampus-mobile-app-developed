import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'; 
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(public router: Router,private iab: InAppBrowser) {

  }

  ngOnInit() {
  }
  openWhatsApp() {
    const phone = '918884560456'; // international format, no '+'
    const message = 'Hello';
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMsg}`;

    // Option 1: Open in system browser
    // window.open(url, '_system');

    // Option 2: Use InAppBrowser (optional)
    this.iab.create(url, '_system');
  }

  bck(){
    this.router.navigateByUrl('/tabs/tabs/tab1');
  }

  notification() {
    this.router.navigateByUrl('/notification');
  }

}
