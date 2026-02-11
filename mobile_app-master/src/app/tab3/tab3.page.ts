


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { PopuplogsignPage } from '../pages/popuplogsign/popuplogsign.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PredictadmissionPage } from '../pages/predictadmission/predictadmission.page';
import { ShortlistService } from '../services/shortlist.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  admissionForm: FormGroup;
  formSubmitted = false;
  courseId: any;
  coursename: string;
  fewclgArr: any[] = [];
  coursesArray: any = [];
  categoryId: any;
  loginuserId: any;
  userId: string;
  active: string;
  responseData: any;
  isBookmarked: any;
  shortlistedColleges: any;
  isModalOpen = false;
  stateltsArry: any = [];
  cityltsArry: any = [];
  lastFiveYears: any = [];
  stateId: any;
  cityId: any;
  subcategoryId: any;
  userData: any;
  email: any;
  username: any;
  phone: any;
  token: any;

  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private modalController: ModalController,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private alertController: AlertController,
    private shortlistService: ShortlistService

  ) { }

  async ngOnInit() {
    this.checkUserData();

    this.admissionForm = this.formBuilder.group({
      StudentName: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      passingstatus: ['', Validators.required],
      passingYear: ['', Validators.required],
      interestedCourses: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });

    const coursedata = localStorage.getItem('courses');
    if (coursedata) {
      this.coursesArray = JSON.parse(coursedata);
      this.courseId = this.coursesArray[0].id;
      this.coursename = this.coursesArray[0].name;
      this.categoryId = this.coursesArray[0].parent_category;
      this.feuturedclg();
      this.getformscitylist();
      this.getformstatelist();
      this. populateUserData();
    }

    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
      this.lastFiveYears.push(currentYear - i);
    }
  }

  ionViewWillEnter() {
    // Check for user data when the view is about to enter
    this.checkUserData();
  }

 populateUserData() {
   this.checkUserData();

    // Populate form fields if user data exists
    if (this.loginuserId) {
      this.admissionForm.patchValue({
        StudentName: this.username,
        email: this.email,
        mobileNumber: this.phone,
      });
    }
  }

  async checkUserData() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      this.loginuserId = user.id;
      this.username = user.name;
      this.email = user.email;
      this.phone = user.phone;
    }
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
        else {
          await this.checkuser();
        }
      }
      else {
        await this.checkuser();
      }
    }
  }



  async checkuser() {
    const modal = await this.modalController.create({
      component: PopuplogsignPage,
      componentProps: { fromTab: 'tab3' }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data && data.loggedIn) {
      this.setUserData(data.user);
    }
  }

  setUserData(user: any) {
    this.loginuserId = user.id;
    this.username = user.name;
    this.email = user.email;
    this.phone = user.phone;
    localStorage.setItem('user', JSON.stringify(user));
  }



  savconsellingform() {
    if (this.admissionForm.invalid) {
      this.admissionForm.markAllAsTouched();
      return;
    }
    if (this.admissionForm.valid) {
      this.service.ConsellingForm(
        this.admissionForm.controls.StudentName.value,
        this.admissionForm.controls.state.value,
        this.admissionForm.controls.city.value,
        this.admissionForm.controls.passingstatus.value,
        this.admissionForm.controls.passingYear.value,
        this.admissionForm.controls.interestedCourses.value,
        this.admissionForm.controls.mobileNumber.value
      ).subscribe(response => {
      
        this.showAlert('Submitted!', 'Thanks for submitting the details. Our counsellor will contact you shortly.');
        this.admissionForm.reset();
        this.setOpen(false); 
      }, error => {
        this.showAlert('failed!','Submission failed. Please try again.');
      });
    }
  }

  async close() {
    await this.modalController.dismiss();
  }

  getformstatelist() {
    this.service.statelist().subscribe(res => {
      this.stateltsArry = res.res_data;
    });
  }

  getformscitylist() {
    this.service.citylist(this.stateId).subscribe(res => {
      this.cityltsArry = res.res_data;
    });
  }

  onStateChange(stateId: any) {
    this.service.citylist(stateId).subscribe(res => {
      this.cityltsArry = res.res_data;
    });
  }

  async feuturedclg() {
    const loader = await this.loadingController.create({
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

    await loader.present();

    this.service.getfeatureclg(this.categoryId).subscribe(
      async (res) => {
        this.fewclgArr = res.data;
        await loader.dismiss();
      },
      async (err) => {
        console.error('Error fetching featured colleges:', err);
        await loader.dismiss();
      }
    );
  }

  


  async toggleShortlist(collegeId: string) {
   
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

  setOpen(isOpen: boolean) {
        this.isModalOpen = isOpen;
      }
      openModal() {
        this.isModalOpen = true;
      }

      closeModal() {
        this.isModalOpen = false;
      }

        checkValidInputData(event: any, field: string) {
    if (field === 'studentName') {
      const pattern = /^[a-zA-Z \'-]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^a-zA-Z \'-]/g, '');
      }
    } else if (field === 'mobileNumber') {
      const pattern = /^[0-9]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
      }
      if (event.target.value.length > 10) {
        event.target.value = event.target.value.slice(0, 10);
      }
    }
  }
    async brochure(collegeId: string) {
    try {
      this.userId = this.loginuserId;
      const res = await this.service.getbrochure(collegeId, this.userId).toPromise();

      if (res.response_code === '200') {
        await this.showAlert('Success', 'Brochure sent successfully by mail');
      } else if (res.response_code === '500') {
        await this.showAlert('Error', 'Brochure not available');
      } else {
        await this.showAlert('Error', 'An unexpected error occurred');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      await this.showAlert('Error', 'An error occurred while sending the brochure.');
    }
  }

  async clgpredict(id: string, CatId: string, subCatName: string) {
    if (!this.loginuserId) {
      await this.checkuser();
      return;
    }
    await this.predictadmission(id, CatId, subCatName);
  }

  async predictadmission(id: string, CatId: string, subCatName: string) {
    const modal = await this.modalController.create({
      component: PredictadmissionPage,
      componentProps: { id, CatId, subCatName }
    });
    return await modal.present();
  }

    clgdetails(collegeid: string) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  notification() {
        this.router.navigateByUrl('/notification');
      }
}
