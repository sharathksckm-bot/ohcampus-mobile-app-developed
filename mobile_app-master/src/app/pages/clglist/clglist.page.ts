
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { PredictadmissionPage } from '../predictadmission/predictadmission.page';
import { PopuplogsignPage } from '../popuplogsign/popuplogsign.page';
import { ShortlistService } from '../../services/shortlist.service';

@Component({
  selector: 'app-clglist',
  templateUrl: './clglist.page.html',
  styleUrls: ['./clglist.page.scss'],
})
export class ClglistPage implements OnInit {
  locationArr: any = [];
  college: any = [];
  clglist: any;
  start = 0;
  pageSize = 5;
  order: any = [
    {
      column: 0,
      dir: 'desc'
    }
  ];
  draw = 1;
  courseArry: any[];
  locId: string;
  courseId: any;
  selectedCityIds: number[] = [];
  asasa: any;
  storedIds: any =[];

  id: any;
  loginuserId: string | null = null;
  crsename: any;
  coursesArray: any[];
  catid: any;
  collegeId: string;
  userId: string;
  active: string;
  event: string;
  shortlistedColleges = new Set<number>();
  isBookmarked = false;
  responseData: any;
  subcategory: any;
  userData: any;
  email: any;
  username: any;
  isLoading = false;
  clgArry = [];
  phone: any;
  token: any;
  startlimit: any;
  endlimit: any;
  hasMoreColleges = true;
  dataLoaded = false;
  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loadingController: LoadingController,
    private platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController,
    private shortlistService: ShortlistService


  ) { }

ngOnInit() {
 this.subcategory=localStorage.getItem('selectedCourseId')
console.log(localStorage.getItem('selectedCourseId'));
  this.getResponseDataFromLocalStorage();
  const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      console.log(this.loginuserId);
    } else {
      console.log('No user information found in local storage.');
    }
  this.storedIds = localStorage.getItem('selectedLocationIds');
  console.log(this.storedIds.length);

  if (!this.storedIds || this.storedIds.length === 0) {
    this.locId = this.activatedRoute.snapshot.paramMap.get('locId');
    console.log('Received locId from route:', this.locId);
  } else {
    this.locId = this.storedIds; // Directly use the comma-separated string
    console.log('Selected Location IDs:', this.locId);
  }

  this.courseArry = JSON.parse(localStorage.getItem('courses'));
  this.courseId = this.courseArry[0].id;
  console.log(this.courseId);
this.getclglist();

}

getResponseDataFromLocalStorage() {
  const storedResponseData = localStorage.getItem('response_data');
  if (storedResponseData) {
    const responseData = JSON.parse(storedResponseData);
   
    if (responseData && responseData.length > 0) {
      this.loginuserId = responseData[0].id;
      this.username = responseData[0].f_name;
      this.email = responseData[0].email;
      this.phone = responseData[0].phone;
      this.token = responseData[0].token;
    } else {
      console.log('No user data found in response_data.');
    }
  } else {
    console.log('No response_data found in local storage.');
  }
}


async getclglist() {
  const loading = await this.loadingController.create({
    message: `
    <div class="custom-spinner-container">
        <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
        <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
    </div>
    <span style="margin-top: 10px;"></span>`,
    spinner: null,
    translucent: true,
    cssClass: 'custom-loading'
  });

  await loading.present();
  this.isLoading = true;

  // this.subcategory = this.courseId;

  this.service.getctyclglt('0', '100', this.locId, this.subcategory).subscribe(
    async res => {
      if (res.response_code == '200') {
        this.clgArry = res.Colleges || [];
      } else if (res.response_code == '400') {
        this.clgArry = []; // No data available
      }

      this.dataLoaded = true; // Set dataLoaded to true after response
      this.isLoading = false;
      await loading.dismiss();
    },
    async error => {
      console.error('Error fetching college list:', error);
      this.isLoading = false;
      await loading.dismiss();
      this.dataLoaded = true; // Set dataLoaded to true even if there's an error
    }
  );
}


  async predictadmission(id: string, CatId: string, subCatName: string) {
    const modal = await this.modalController.create({
      component: PredictadmissionPage,
      componentProps: {
        id,
        CatId,
        subCatName
      }
    });
    return await modal.present();
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }
  async presentSignInModal() {
    const modal = await this.modalController.create({
      component: PopuplogsignPage,
    });
    return await modal.present();
  }




  getclgid(collegeid: string) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  toggleIconColor(collegeId: number): void {
    // Toggle the state of the icon
    this.isBookmarked = !this.isBookmarked;

  }

 

  async toggleShortlist(collegeId: string) {
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    }
  
    try {
      if (this.shortlistService.isShortlisted(collegeId)) {
        await this.removeclgshortlist(collegeId);
      } else {
        await this.addclgshortlist(collegeId);
      }
    } catch (error) {
      console.error('Error toggling shortlist:', error);
    }
  }
  
  async addclgshortlist(collegeId: string) {
    const loading = await this.loadingController.create({
          message: `
            <div class="custom-spinner-container">
              <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
              <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
            </div>
            <span style="margin-top: 10px;"></span>`,
          spinner: null,
          translucent: true,
          cssClass: 'custom-loading'
        });
    await loading.present();
  
    try {
      const res = await this.service.addclgshortlist(this.loginuserId, collegeId, '1', 'insert').toPromise();
      if (res.response_code === '200') {
        this.shortlistService.addToShortlist(collegeId);
        await this.showAlert('Success', 'College added to shortlist successfully');
      } else {
        await this.showAlert('Error', 'Failed to add college to shortlist');
      }
    } catch (error) {
      console.error(error);
      await this.showAlert('Error', 'An error occurred while adding to shortlist');
    } finally {
      await loading.dismiss();
    }
  }
  
  async removeclgshortlist(collegeId: string) {
    const loading = await this.loadingController.create({
      message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
      spinner: null,
      translucent: true,
      cssClass: 'custom-loading'
    });
    await loading.present();
  
    try {
      const res = await this.service.addclgshortlist(this.loginuserId, collegeId, '0', 'update').toPromise();
      if (res.response_code === '200') {
        this.shortlistService.removeFromShortlist(collegeId);
        await this.showAlert('Success', 'College removed from shortlist successfully');
      } else {
        await this.showAlert('Error', 'Failed to remove college from shortlist');
      }
    } catch (error) {
      console.error(error);
      await this.showAlert('Error', 'An error occurred while removing from shortlist');
    } finally {
      await loading.dismiss();
    }
  }
  
  isShortlisted(collegeId: string): boolean {
    return this.shortlistService.isShortlisted(collegeId);
  }



  async showAlert(header: string, message: string) {
         const alert = await this.alertController.create({
         header,
         message,
          buttons: ['OK']
        });

         await alert.present();
   }



  async brochure(collegeId: string) {
    
    if (!this.loginuserId) {
      
      this.presentSignInModal();
      return; 
    }

    try {
      this.collegeId = collegeId;
      this.userId = this.loginuserId;
      const res = await this.service.getbrochure(this.collegeId, this.userId).toPromise();
      console.log(this.collegeId);
      console.log(this.userId);

      if (res.response_code === '200') {
        await this.showAlert('Success', 'Brochure sent successfully by mail');
      } else if (res.response_code === '500') {
        await this.showAlert('Error', 'Brochure not available');
      } else {
        await this.showAlert('Error', 'An unexpected error occurred');
      }
    } catch (error) {
      // Handle errors from API call or any unexpected errors
      await this.showAlert('Error', 'An unexpected error occurred');
    }
  }



  async clgpredict(id: string, CatId: string, subCatName: string) {
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    } else {
      await this.predictadmission(id, CatId, subCatName);
    }
  }


}
