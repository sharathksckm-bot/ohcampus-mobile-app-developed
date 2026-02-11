import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  constructor(public router: Router,) { }

  ngOnInit() {
  }

  bck(){
    this.router.navigateByUrl('/tabs/tabs/tab1/:id');
  }

}
