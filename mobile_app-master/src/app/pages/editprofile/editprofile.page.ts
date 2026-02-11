import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AlertController, LoadingController, MenuController, ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PopuplogsignPage } from '../popuplogsign/popuplogsign.page';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  loginuserId: any;
  username: any;
  email: any;
  userData: any;
  firstName: any;
  responseData: any;
  phone: any;
  token: any;

  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private googlePlus: GooglePlus,
    private modalController: ModalController,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getResponseDataFromLocalStorage();

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      console.log(this.loginuserId);
      this.username =user.name;
      this.email=user.email;
    } else {
      console.log('No user information found in local storage.');
    }

    // const storedUserData = localStorage.getItem('userData');
    //   if (storedUserData) {
    //     this.userData = JSON.parse(storedUserData);
    //     console.log(this.userData);
    //     // this.token = this.userData.accesstoken;
    //     this.email = this.userData.email;
    //     this.username = this.userData.displayName;
    //     this.loginuserId = this.userData.userId;
    //     console.log(this.loginuserId);
    //   }else {
    //     console.log('No google user information found in local storage.');
    //   }


  }



    async presentSignInModal() {
      const modal = await this.modalController.create({
        component: PopuplogsignPage,
      });
      return await modal.present();
    }

    async close() {
      await this.modalController.dismiss();
    }

  // getResponseDataFromLocalStorage() {
  //   // Get the stored response_data from localStorage
  //   const storedResponseData = localStorage.getItem('response_data');

  //   // Check if there is stored data
  //   if (storedResponseData) {
  //     // Parse the JSON string back into an object or array
  //     this.responseData = JSON.parse(storedResponseData);

  //     // Access specific data, such as id
  //     if (Array.isArray(this.responseData) && this.responseData.length > 0) {
  //       this.loginuserId = this.responseData[0].id; // Extract the 'id'
  //       console.log('User ID:', this.loginuserId);
  //       console.log('Full Response Data:', this.responseData);
  //     } else {
  //       console.error('response_data is not an array or is empty.');
  //     }
  //   } else {
  //     console.error('No response_data found in localStorage.');
  //   }
  // }


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

        console.log('User ID:', this.loginuserId);
        console.log('First Name:', this.username);
        console.log('Email:', this.email);
        console.log('Phone:', this.phone);
        console.log('Token:', this.token);
      } else {
        console.log('No user data found in response_data.');
      }
    } else {
      console.log('No response_data found in local storage.');
    }
  }


  async logout() {
    try {
      // Clear Google session to force account selection next time
      await this.googlePlus.logout();

      // Clear user data from local storage
      localStorage.removeItem('user');
      localStorage.removeItem('response_data');
      localStorage.clear();  // Clears all local storage

      // Navigate to the welcome page
      this.router.navigate(['/welcomepage']);

      console.log('User successfully logged out');
    } catch (error) {
      console.error('Error during logout:', error);
      // await this.presentToast('Logout failed. Please try again.', 'danger');
      
    }
  }




  logout1() {
     localStorage.removeItem('user');
     localStorage.removeItem('response_data');

    localStorage.clear();

    // Navigate to the welcome page
    this.router.navigate(['/welcomepage']);
  }



}
