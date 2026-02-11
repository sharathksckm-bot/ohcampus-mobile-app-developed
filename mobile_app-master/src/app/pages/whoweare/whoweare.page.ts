import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.page.html',
  styleUrls: ['./whoweare.page.scss'],
})
export class WhowearePage implements OnInit {

  constructor(public router: Router,) { }
  ngOnInit() {
  }
  notification() {
    this.router.navigateByUrl('/notification');
  }


}
