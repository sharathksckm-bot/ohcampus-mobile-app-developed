


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ServiceService } from 'src/app/service.service';
// import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
// import { PopuplogsignPage } from '../pages/popuplogsign/popuplogsign.page';
// import { FormBuilder } from '@angular/forms';
// import { PredictadmissionPage } from '../pages/predictadmission/predictadmission.page';

// @Component({
//   selector: 'app-tab4',
//   templateUrl: './tab4.page.html',
//   styleUrls: ['./tab4.page.scss'],
// })
// export class Tab4Page implements OnInit {

//   userId: any;
//   clglistarray: any[] = [];
//   loginuserId: any;
//   responseData: any;
//   collegeId: string;
//   userData: any;
//   email: any;
//   username: any;
//   active: string;
//   event: string;
//   phone: any;
//   token: any;

//   constructor(
//     public router: Router,
//     public service: ServiceService,
//     public activatedRoute: ActivatedRoute,
//     private toastController: ToastController,
//     private modalController: ModalController,
//     public formBuilder: FormBuilder,
//     public loadingController: LoadingController,
//     private alertController: AlertController,
//   ) { }

//   async ngOnInit() {
//      this.checkUserData();

//      this.shortlistclg();
//   }


//   clgdetails(collegeid: string) {
//     this.router.navigate(['/clgdetails', collegeid]);
//   }

//   ionViewWillEnter() {
//     // Recheck user data when page is about to be entered
//      this.checkUserData();
//   }

//   async checkUserData() {
//     // First, check if 'user' data exists in localStorage
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user.id) {
//       this.loginuserId = user.id;
//       this.username = user.name;
//       this.email = user.email;
//       this.phone = user.phone;
//     }
//     // If 'user' data does not exist, check for 'response_data'
//     else {
//       const storedResponseData = localStorage.getItem('response_data');
//       if (storedResponseData) {
//         const responseData = JSON.parse(storedResponseData);
//         if (responseData && responseData.length > 0) {
//           this.loginuserId = responseData[0].id;
//           this.username = responseData[0].f_name;
//           this.email = responseData[0].email;
//           this.phone = responseData[0].phone;
//           this.token = responseData[0].token;
//         }
//         // If no valid data is found, prompt the user to log in
//         else {
//           await this.checkuser();
//         }
//       }
//       // If neither 'user' nor 'response_data' exists, open the login modal
//       else {
//         await this.checkuser();
//       }
//     }
//   }




//   async checkuser() {
//     const modal = await this.modalController.create({
//       component: PopuplogsignPage,
//       componentProps: { fromTab: 'tab4' }
//     });
//     return await modal.present();
//   }

//   // async shortlistclg() {
//   //   const loading = await this.loadingController.create({
//   //     message: `
//   //       <div class="custom-spinner-container">
//   //         <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
//   //         <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
//   //       </div>
//   //        <span style="margin-top: 10px;"> </span>`,

//   //     spinner: null, // Disable the default spinner
//   //     translucent: true,
//   //     cssClass: 'custom-loading' // Optional: custom CSS class for additional styling
//   //   });
//   //   await loading.present();
//   //   this.userId = this.loginuserId;
//   //   this.service.getusrshortlistclg(this.userId).subscribe(res => {
//   //     console.log(res);
//   //     this.clglistarray = res.response_data;
//   //     console.log(this.clglistarray);
//   //   });
//   // }

//   async shortlistclg() {
//     const loading = await this.loadingController.create({
//       message: `
//         <div class="custom-spinner-container">
//           <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
//           <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
//         </div>
//          <span style="margin-top: 10px;"> </span>`,

//       spinner: null, // Disable the default spinner
//       translucent: true,
//       cssClass: 'custom-loading' // Optional: custom CSS class for additional styling
//     });

//     await loading.present(); // Show loading spinner

//     this.userId = this.loginuserId;

//     // Fetch user shortlist data
//     this.service.getusrshortlistclg(this.userId).subscribe(
//       res => {
//         console.log(res);
//         this.clglistarray = res.response_data;
//         console.log(this.clglistarray);
//         loading.dismiss(); // Dismiss loading once data is fetched
//       },
//       err => {
//         console.error('Error fetching shortlist data:', err);
//         loading.dismiss(); // Dismiss loading in case of error
//       }
//     );
//   }


//   async removeclgshortlist(collegeId: string) {
//     try {
//       this.collegeId = collegeId;
//       this.userId = this.loginuserId;
//       this.active = '0';
//       this.event = 'update';

//       const res = await this.service.addclgshortlist(this.userId, this.collegeId, this.active, this.event).toPromise();

//       if (res.response_code === '200') {
//         // this.shortlistedColleges.add(collegeId);  // Add college to shortlisted set
//         // this.isBookmarked = true; // Ensure bookmark is set to true for UI update
//         await this.showAlert('Success', 'Shortlisted college removed successfully', true);
//         // location.reload();
//       } else if (res.response_code === '100') {
//         await this.showAlert('', 'College already added to shortlist');
//       } else {
//         await this.showAlert('Error', 'An unexpected error occurred');
//       }
//     } catch (error) {
//       await this.showAlert('', 'An unexpected error occurred');
//     }
//   }
//   async showAlert(header: string, message: string, reload: boolean = false) {
//     const alert = await this.alertController.create({
//       header,
//       message,
//       buttons: [{
//         text: 'OK',
//         handler: () => {
//           // Reload the page if the reload parameter is set to true
//           if (reload) {
//             location.reload();
//           }
//         }
//       }]
//     });

//   await alert.present();
//   }


//   notification() {
//     this.router.navigateByUrl('/notification');
//   }

//   async predictadmission(id: string, CatId: string, subCatName: string) {
//     const modal = await this.modalController.create({
//       component: PredictadmissionPage,
//       componentProps: { id, CatId, subCatName }
//     });
//     return await modal.present();
//   }

//   async presentSignInModal() {
//     const modal = await this.modalController.create({
//       component: PopuplogsignPage,
//     });
//     return await modal.present();
//   }

//   async brochure(collegeId: string) {
//     try {
//       this.collegeId = collegeId;
//       this.userId = this.loginuserId;
//       const res = await this.service.getbrochure(this.collegeId, this.userId).toPromise();
//       console.log(this.collegeId);
//       console.log(this.userId);

//       if (res.response_code === '200') {
//         await this.showAlert('Success', 'Brochure sent successfully by mail');
//       } else if (res.response_code === '500') {
//         await this.showAlert('Error', 'Brochure not available');
//       } else {
//         await this.showAlert('Error', 'An unexpected error occurred');
//       }
//     } catch (error) {
//       await this.showAlert('Error', 'An unexpected error occurred');
//     }
//   }

//   async clgpredict(id: string, CatId: string, subCatName: string) {
//     if (!this.loginuserId) {
//       await this.checkuser();
//       return;
//     }
//     await this.predictadmission(id, CatId, subCatName);
//   }
// }




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { PopuplogsignPage } from '../pages/popuplogsign/popuplogsign.page';
import { FormBuilder } from '@angular/forms';
import { PredictadmissionPage } from '../pages/predictadmission/predictadmission.page';
import { ShortlistService } from '../services/shortlist.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  userId: any;
  clglistarray: any[] = [];
  loginuserId: any;
  responseData: any;
  collegeId: string;
  userData: any;
  email: any;
  username: any;
  active: string;
  event: string;
  phone: any;
  token: any;
  shortlistedColleges: any;
  isBookmarked: boolean;

  constructor(
    private shortlistService: ShortlistService,
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private modalController: ModalController,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private alertController: AlertController,
  ) { }

  async ngOnInit() {
     this.checkUserData();
     this.fetchShortlist();
  }


  clgdetails(collegeid: string) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

 

  ionViewWillEnter() {
    // Recheck user data when page is about to be entered
     this.checkUserData();
     this.shortlistclg();
  }

  async checkUserData() {
    // First, check if 'user' data exists in localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      this.loginuserId = user.id;
      this.username = user.name;
      this.email = user.email;
      this.phone = user.phone;
    }
    // If 'user' data does not exist, check for 'response_data'
    else {
      const storedResponseData = localStorage.getItem('response_data');
      if (storedResponseData) {
        const responseData = JSON.parse(storedResponseData);
        if (responseData && responseData.length > 0) {
          this.loginuserId = responseData[0].id;
          this.username = responseData[0].f_name;
          this.email = responseData[0].email;
          this.phone = responseData[0].phone;
          this.token = responseData[0].token;
        }
        // If no valid data is found, prompt the user to log in
        else {
          await this.checkuser();
        }
      }
      // If neither 'user' nor 'response_data' exists, open the login modal
      else {
        await this.checkuser();
      }
    }
  }

  async checkuser() {
    const modal = await this.modalController.create({
      component: PopuplogsignPage,
      componentProps: { fromTab: 'tab4' }
    });
    return await modal.present();
  }


  fetchShortlist() {
    this.service.getusrshortlistclg(this.loginuserId).subscribe((res) => {
      if (res.response_code === '200') {
        const collegeIds = res.response_data.map((college) => college.collegeid);
        this.shortlistService.setInitialShortlist(collegeIds); // Initialize shared state
      }
    });

  }



  async shortlistclg() {
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

    await loading.present(); // Show loading spinner

    this.userId = this.loginuserId;

    // Fetch user shortlist data
    this.service.getusrshortlistclg(this.userId).subscribe(
      res => {
        console.log(res);
        this.clglistarray = res.response_data;
        console.log(this.clglistarray);
        loading.dismiss(); // Dismiss loading once data is fetched
      },
      err => {
        console.error('Error fetching shortlist data:', err);
        loading.dismiss(); // Dismiss loading in case of error
      }
    );
  }


  // Show alert with customizable header and message
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
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
      this.collegeId = collegeId;
      this.userId = this.loginuserId;
      this.active = '0';
      this.event = 'update';
  
      const res = await this.service.addclgshortlist(this.userId, this.collegeId, this.active, this.event).toPromise();
      if (res.response_code === '200' && res.response_data === true) {
        this.clglistarray = this.clglistarray.filter(item => item.collegeid !== collegeId);
        this.shortlistService.removeFromShortlist(collegeId); // Update shared state
        await this.showAlert('Success', 'Shortlisted college removed successfully');
      } else {
        await this.showAlert('Error', 'An unexpected error occurred');
      }
    } catch (error) {
      await this.showAlert('Error', 'An unexpected error occurred');
    } finally {
      await loading.dismiss();
    }
  }

 
  


  notification() {
    this.router.navigateByUrl('/notification');
  }

  async predictadmission(id: string, CatId: string, subCatName: string) {
    const modal = await this.modalController.create({
      component: PredictadmissionPage,
      componentProps: { id, CatId, subCatName }
    });
    return await modal.present();
  }

  async presentSignInModal() {
    const modal = await this.modalController.create({
      component: PopuplogsignPage,
    });
    return await modal.present();
  }

  async brochure(collegeId: string) {
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
      await this.showAlert('Error', 'An unexpected error occurred');
    }
  }

  async clgpredict(id: string, CatId: string, subCatName: string) {
    if (!this.loginuserId) {
      await this.checkuser();
      return;
    }
    await this.predictadmission(id, CatId, subCatName);
  }
}
