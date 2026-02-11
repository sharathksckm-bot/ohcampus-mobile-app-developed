import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { PredictadmissionPage } from '../predictadmission/predictadmission.page';
import { PopuplogsignPage } from '../popuplogsign/popuplogsign.page';
import { ShortlistService } from '../../services/shortlist.service';

@Component({
  selector: 'app-populerclg',
  templateUrl: './populerclg.page.html',
  styleUrls: ['./populerclg.page.scss'],
})
export class PopulerclgPage implements OnInit {
  [x: string]: any;
  clgArry: any[] = [];
  clg: any;
  id: any;
 
  loginuserId: string | null = null;
  crsename: any;
  coursesArray: any[];
  courseId: any;
  catid: any;
  collegeId: string;
  userId: string;
  active: string;
  event: string;
  isBookmarked = false;
  shortlistedColleges: Set<string> = new Set();
  responseData: any;
  userData: any;
  email: any;
  username: any;
  isLoading: boolean;
  phone: any;
  token: any;
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
    this.getResponseDataFromLocalStorage();

    const param = this.activatedRoute.snapshot.params;
    console.log(param);
    if (param) {
      const coursetenmp = param.id;
      this.crsename = param.name;
      localStorage.getItem('courses');
      this.coursesArray =JSON.parse(localStorage.getItem('courses'));
      console.log(this.coursesArray[0].id);
      this.courseId=this.coursesArray[0].id;
      console.log(this.courseId);
      this.catid = JSON.parse(localStorage.getItem('catID'));
    }



    this. getpopulrclg();

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      console.log(this.loginuserId);
    } else {
      console.log('No user information found in local storage.');
    }
  }


 

  async getpopulrclg() {
    const loading = await this.loadingController.create({
      message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
      spinner: null, // Disable the default spinner
      translucent: true,
      cssClass: 'custom-loading'
    });

   
    this.isLoading = true;
    await loading.present();

    this.id = this.courseId;
    this.catid
    console.log('Fetching popular colleges with course ID:', this.id);
let selectpara={
  "courseId":this.id,
    "categoryid":this.catid
}
    this.service.popularclg(selectpara).subscribe(
      async (res) => {
        console.log('Response received:', res);
        this.clgArry = res.response_data;

        // Set the loading flag to false after data is loaded
        this.isLoading = false;
        await loading.dismiss();
        console.log('Loading completed');
      },
      async (err) => {
        console.error('Error fetching popular colleges:', err);

        // Set the loading flag to false in case of error
        this.isLoading = false;
        await loading.dismiss();
      }
    );
  }



  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');
    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData);
      // Ensure that responseData is not empty and has at least one entry
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

  toggleIconColor(collegeId: string): void {
    
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



  async Alert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }



  async brochure(collegeId: string) {
    // Check if token exists in local storage
    // this.token = localStorage.getItem('token');

    if (!this.loginuserId) {
      // Token is not present, so present sign-in modal
      this.presentSignInModal();
      return; // Exit function if token is missing
    }

    try {
      this.collegeId = collegeId;
      this.userId = this.loginuserId;
      // Call your service method to get the brochure
      const res = await this.service.getbrochure(this.collegeId, this.userId).toPromise();
      console.log(this.collegeId);
      console.log(this.userId);


      // Handle different response codes
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

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }



  async clgpredict(id: string, CatId: string, subCatName: string) {
    // this.token = localStorage.getItem('token');
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    } else {
      await this.predictadmission(id, CatId, subCatName);
    }
  }

}




