
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { AlertController, LoadingController, MenuController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editpreferences',
  templateUrl: './editpreferences.page.html',
  styleUrls: ['./editpreferences.page.scss'],
})
export class EditpreferencesPage implements OnInit {

  category: any;
  clevel: any;
  clist: any[] = [];
  selectedCategory: any;
  selectedLevel: any;
  catID: any;
  listid: any;

  // State variables to control visibility
  categorySelected = false;
  levelSelected = false;
  selectedItems: Set<any> = new Set(); // To keep track of selected items
  showMore = false; // Control visibility of "Show More" button
  initialDisplayCount = 3; // Number of items to display initially
  catname: any;

  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }


ngOnInit() {
  this.getCategory();
  // localStorage.setItem('catID', JSON.stringify(this.catID));
}


notification() {
  this.router.navigateByUrl('/notification');
}

getCategory() {
  this.service.getCategory().subscribe(res => {
    this.category = res.response_data;
    console.log(this.category);
  });
}

getLevel() {
  this.service.getlevel().subscribe(res => {
    this.clevel = res.response_data;
    console.log(this.clevel);
  });
}

async selectCategory(category) {
  this.selectedCategory = category.id;
  this.catname=category.catname;
  console.log(category);
  this.catID = category.id;
    localStorage.setItem('catname', JSON.stringify(this.catname));
  localStorage.setItem('catID', JSON.stringify(this.catID));
  this.categorySelected = true;

  const loading = await this.presentLoading();
  this.getLevel();
  await loading.dismiss();
}

async selectLevel(level) {
  this.selectedLevel = level.category_id;
  console.log(level);
  this.listid = level;
  this.levelSelected = true;

  const loading = await this.presentLoading();
  this.updateSubcourses();
  await loading.dismiss();
}

updateSubcourses() {
  if (this.catID && this.listid) {
    this.service.getsubclist(this.catID, this.listid).subscribe(res => {
      this.clist = res.data;
      console.log(this.clist);
    });
  }
}

toggleSelection(item) {
  if (this.selectedItems.has(item)) {
    this.selectedItems.delete(item);
  } else {
    this.selectedItems.add(item);
  }
}

isSelected(item) {
  return this.selectedItems.has(item);
}

async submit() {
  const selectedItemsArray = Array.from(this.selectedItems);
  localStorage.setItem('courses', JSON.stringify(selectedItemsArray));
  // localStorage.setItem('courses', JSON.stringify(this.selectedOptions));
  this.router.navigate(['/editstate']).then(()=>{
// window.location.reload();
});

}




async presentLoading() {

  const loading = await this.loadingController.create({
    message: `
      <div class="custom-spinner-container">
        <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
        <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
      </div>
       <span style="margin-top: 10px;"> </span>`,

    spinner: null, // Disable the default spinner
    translucent: true,
    cssClass: 'custom-loading' // Optional: custom CSS class for additional styling
  });
  await loading.present();
  return loading;
}

}
