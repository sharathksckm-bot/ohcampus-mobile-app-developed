import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-editstate',
  templateUrl: './editstate.page.html',
  styleUrls: ['./editstate.page.scss'],
})
export class EditstatePage implements OnInit {

 clist: any[] = [];
  catID: any;
  listid: any;
  selectedOptions: any = [];
  statelist: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public service: ServiceService,
    public router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // this.catID = params.id;
      // this.listid = params.Lid;
      // localStorage.setItem('catID', JSON.stringify(this.catID));
      // this.getsubclist();
      this.getstate()
    });
  }

  getsubclist() {
    this.service.getsubclist(this.catID, this.listid).subscribe(res => {
      this.clist = res.data;
      console.log( this.clist);
    });
  }
  getstate()
  {
    this.service.statelist().subscribe(res=>{
      this.statelist=res.res_data
      console.log(res)
    })
  }

  // toggleSelection(event, value) {
  //   if (event.detail.checked) {
  //     if (!this.selectedOptions.includes(value)) {
  //       this.selectedOptions.push(value);
  //     }
      
  //     console.log( this.selectedOptions.push(value))
  //   } else {
  //     const index = this.selectedOptions.indexOf(value);
  //     if (index !== -1) {
  //       this.selectedOptions.splice(index, 1);
  //     }
  //   }
  // }

  toggleSelection(event: any, value: string) {
    if (event.detail.checked) {
      if (!this.selectedOptions.includes(value)) {
        this.selectedOptions.push(value);
      }
    } else {
      this.selectedOptions = this.selectedOptions.filter(item => item !== value);
    }
    console.log('Selected options:', this.selectedOptions);
  }

  async  getCollegelist() {
    const selectedStateNames = this.selectedOptions.map(item => item.statename);
       localStorage.setItem('state', JSON.stringify(selectedStateNames));
    this.router.navigate(['/tabs/tabs/tab1']).then(()=>{
      window.location.reload();
    });


  }





  handleButtonClick() {
   
    this.getCollegelist();
}
}