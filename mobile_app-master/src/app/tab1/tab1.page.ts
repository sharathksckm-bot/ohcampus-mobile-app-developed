/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { AlertController, LoadingController, MenuController, ModalController, ToastController } from '@ionic/angular';
// import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { PopuplogsignPage } from '../pages/popuplogsign/popuplogsign.page';
import { PredictadmissionPage } from '../pages/predictadmission/predictadmission.page';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, tap } from 'rxjs/operators';
import { ShortlistService } from '../services/shortlist.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'; 
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  [x: string]: any;
 
  stateControl = new FormControl('', [Validators.required]);
  cityControl = new FormControl('', [Validators.required]);
  filteredstate: Observable<any[]>; admissionForm: FormGroup;
  filteredCity: Observable<any[]>;
  cityltsArry: any[] = []; // List of cities fetched from the service
  selectedCityId: string; // Variable to store selected city ID

  getprecityltsarr: any = [];  // Original city list


  isModalOpen = false;
  feesForm: FormGroup; colleges: any = []; locationArr: any = []; search: any; data: any; clglist: any; clg: any; collegelist: any;
  count: any; college: any = []; articleArry: any[]; article: any; eventArry: any = []; event: any; topclge: any = []; CouCat: any;
  ctyclg: any = []; city: any = []; fees: any; min_fees: any; selectcourseid = false; max_fees: any; urlValue: any;
  exam: any; examArry: any = []; ctyArry: any = []; crsename: any;
  slideOpts2 = { initialSlide: 0, slidesPerView: 1.5, spaceBetween: 1.5 };
  getCollegeList = false;
  slideOpts = { initialSlide: 0, slidesPerView: 1.3, };
  slideOptspage = { initialSlide: 0, slidesPerView: 1.3, };
  slideOptssevena = { initialSlide: 0, slidesPerView: 1.3, };
  slideOptsseven = { initialSlide: 0, slidesPerView: 1.3, };
  
  shortlistedColleges = new Set<string>();
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-inferrable-types
  selectedSegmentAB: string = '10000-100000'; selectedSegmenta = 'Trending Courses';
  selectedSegmentb = 'Colleges'; selectedSegmentc = 'segmentarticles'; catid: any;
  cId: any; id: any; course: any; mycourse: any = []; cty: string;
  enquiryForm: FormGroup; searchCategory: any = []; courses: any;
  coursesArray: any = [{ name: 'Course 1' }, { name: 'Course 2' }, { name: 'Course 3' }];
  tabname: any; namesArray: any = []; courseid: any; getCollegeListBy: any[] = []; coursename: any; segmentBtn = ''; subCatName: any;
  expandedStatesCourse: boolean[] = new Array(this.getCollegeListBy.length).fill(false);
  courseCatId: any; collegeid: any; value: any; latestartiarry: any; courseId: any; certificateArry: any[]; trespecialiArry: any[];
  details: string; loginuserId: string | null = null; collegeId: any; token: string;
  active: any; userData: any; email: any; firstName: any; CatId: any; categoryId: any; placementarry: any[]; careerarry: any[];
  tendingcrses: any; userId: string; user: any; username: any; isBookmarked = false; selected_loc: any = [];
  fewclgArr: any[]; apiResponseData: any; googleuserId: any; googledataArry: string; responseData: any;
  Category: any[]; clevel: any[]; courselist: any[] = [];
  stateId: any;
  subcategory: any[];
  categoryID: any;
  clevelid: any;
  cityId: any;
  subcategoryId: any;
  clgltsArry: any[];
  filteredColleges: any[] = [];
  CategoryId: any;
  cityform: any;
  showMore = false;
  stateltsArry: any[] = [];
  selectedStateId: string;
  useremail: any;
  crsname: any;
  phone: any;
  limit: any;
  startLimit: any;
  endLimit: any;

  startLimit1 = 0;
  endLimit1 = 5;
  showViewMoreButton = false;
  showBackwardButton = false;
  displayTendingcrses: any[] = [];
  showViewMoreButtoncrs = false;
  itemsToShow = 5;
  displayCertificates: any[] = [];
  showViewMoreButtonCert = false;
  itemsToShowCert = 5;
  displayPlacements: any[] = [];
  showViewMoreButtonPlacement = false;
  itemsToShowPlacement = 5;
  displayArticles: any[] = [];
  showViewMoreButtonArticle = false;
  itemsToShowArticle = 5;
  displayFewClgArr: any[] = [];
  showViewMoreButtonFewClg = false;
  itemsToShowFewClg = 5;
  displayCareerArr: any[] = [];
  showViewMoreButtonCareer = false;
  itemsToShowCareer = 5;
  initialArticlesToShow = 5;
  isViewMoreButtonVisible = false;
  allArticles: any[] = [];
  displayedArticles: any[] = [];
  initialEventsToShow = 5;
  isEventViewMoreButtonVisible = false;
  displayedEvents: any[] = [];
  careertitle: any;
  activeCourseId: string;


  displayColleges: any[] = [];
  showViewMoreButtonclg = false;
  itemsToShowClg = 5;
  startlimit: any;
  endlimit: any;
  isLoading = false;


  constructor(
    private iab: InAppBrowser,
    public loadingController: LoadingController, public router: Router, public service: ServiceService,
    public activatedRoute: ActivatedRoute, public formBuilder: FormBuilder,
    private platform: Platform, 
    private alertController: AlertController, private googlePlus: GooglePlus,
    private modalController: ModalController,
    private shortlistService: ShortlistService
  ) {
     this.getfooterNotification()
    this.feesForm = this.formBuilder.group({
      segment: ['10000-100000'] // Set initial value here
    });
    this.setupLink();
  
  }

openKCETPredictor() {
  this.iab.create('https://predictor.ohcampus.com', '_system');
}
  ngOnInit(): void {
   
    this.namesArray = [];
    this.course = [];
    const param = this.activatedRoute.snapshot.params;
    if (param) {
      const coursetenmp = param.id;
      this.crsename = param.name;
    
      localStorage.getItem('courses');
       this.maincat = JSON.parse(localStorage.getItem('catname')!);
console.log(this.maincat); 
        
     this.statename= JSON.parse(localStorage.getItem('state'))
      this.coursesArray = JSON.parse(localStorage.getItem('courses') || '[]');
      let data=JSON.parse(localStorage.getItem('courses') || '[]')
      this.Artciledata= JSON.parse(localStorage.getItem('catID'))
      // this.Artciledata = data.map(item => item.id);
      //    console.log(this.Artciledata);
       this.crsname = this.coursesArray[0].name;
      if (this.coursesArray.length > 0) {

        this.courseId = this.coursesArray[0].id;
        this.academic_category = this.coursesArray[0].academic_category;
        localStorage.setItem("academic_category", this.academic_category)
        console.log(this.academic_category)
        localStorage.setItem('selectedCourseId', this.courseId);
        this.coursename = this.coursesArray[0].name;
        console.log( this.coursename);

        localStorage.setItem('selectedCourseName',this.coursename);

        this.catid = this.coursesArray[0].parent_category;
   
      }
    }
    this.admissionForm = this.formBuilder.group({
      studentName: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      category: ['', Validators.required],
      courseLevel: ['', Validators.required],
      interestedCourses: ['', Validators.required],
      preferredLocation: ['', Validators.required],
      preferredCollege: ['',],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
    this.filteredColleges = this.clgltsArry;
    this.feesForm = this.formBuilder.group({
      segment: [''],
    });
    this.cId = param.id;

    this.getarticle(); this.getevent();
    this.certificates(); const coursedata = localStorage.getItem('courses');
    this.coursesArray = JSON.parse(coursedata); this.segmentChangede(this.coursesArray[0], 1); this.trespeciali();
    this.selectedSegmentAB = '10000-100000'; this.segmentChanged('10000-100000');
    this.getexm();
    this.getplacement();
    this.getcareers();
    this.loadTendingCourses();
    this.feuturedclg();
    this.getarticleforstyudentachiever();
    this.getResponseDataFromLocalStorage();
    this.getformstatelist();
    this.getCategory();
    this.getlevel();
    this.getsubcourselist();
    // this.getpreferdclglts();
    this.simpleuserdata();
    this.populateUserData();
    this.getcitylist(); // Fetch city list on init
    this.saveSearchLog()
    this.selected_loc = [];
    localStorage.setItem('selectedLocationIds', this.selected_loc);

    this.filteredstate = this.stateControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterstate(value))
    );

    this.filteredCity = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterCity(value))
    );

    this.shortlistService.shortlist$.subscribe((shortlist) => {
      this.shortlistedColleges = shortlist;
    });
  }



  async segmentChangede(event, type) {
    // Prevent multiple calls to the API if one is already in progress
    if (this.isLoading) {return;}

    // Set isLoading to true to indicate the API call is in progress
    this.isLoading = true;

    // Show loader only for getclgtopclg API call
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

    // Get the selected course ID based on segment/tab
    this.activeCourseId = type === 1 ? event.id : event.detail.value;
    this.segmentBtn = this.activeCourseId;

    // Run getcty and loadCollegeFees without awaiting them to prevent blocking
    this.getcty(this.activeCourseId);
    this.loadCollegeFees(this.activeCourseId);

    const selectpara = { courseId: this.activeCourseId };
    this.startLimit = '0';
    this.endLimit = '20';

    try {
      // Fetch college list data based on selected course ID
      const res = await this.service.getclgtopclg(selectpara, this.startLimit, this.endLimit).toPromise();

      if (res.response_code == 200) {
        this.getCollegeList = true;
        this.subCatName = res.collegelist[0]?.name || '';
        this.getCollegeListBy = res.collegelist;
        this.CatId = res.collegelist.CatId;
      } else {
        this.getCollegeList = false;
      }
    } catch (error) {
      console.error('Error during course data fetch:', error);
    } finally {
      // Reset isLoading to false after the API call completes
      this.isLoading = false;
      await loading.dismiss(); // Dismiss the loader after the main API call
    }
  }



  getfooterNotification()
  {
    this.service.getfooterNotification().subscribe(res=>{
      console.log(res.response_data)
      this.getfooter=res.response_data
    })
  }


saveSearchLog()
{
const courseNames = this.coursesArray.map(x => x.name);

  let selectpara={
    "state":this.statename,
   "course":  courseNames,
        "maincat": this.maincat,
  "studentName": this.username,
        "email": this.email,
        "userid": this.loginuserId 
  }
  this.service.saveSearchLog(selectpara).subscribe(res=>{
    console.log(res)  
  })
}
  


  getcty(selectpara: any) {
    this.courseId = selectpara;
    this.startlimit = '0';
    this.endlimit = '5';
    this.service.getctylist(this.courseId,this.startlimit,this.endlimit,this.statename).subscribe(res => {
      this.ctyArry = res.response_data;
    });
  }


  loadCollegeFees(selectpara: any) {
    this.colleges = '';
    this.courseId = selectpara;
    const fees = this.selectedSegmentAB.split('-');
    const variable1 = fees[0];
    const variable2 = fees[1];
    this.min_fees = parseInt(variable1, 10);
    this.max_fees = parseInt(variable2, 10);

    this.service.getclgfees(this.min_fees, this.max_fees, this.courseId,this.statename).subscribe(res => {
      this.colleges = res.Colleges; // Full list of colleges
      this.displayColleges = this.colleges.slice(0, this.itemsToShowClg); // Show a subset of colleges
      if (this.colleges.length > this.itemsToShowClg) {
        this.showViewMoreButtonclg = true; // Show the 'Show More' button if more colleges exist
      }
    });
  }

  // Function to load more colleges when the 'Show More' button is clicked
  viewMoreColleges() {
    const nextSet = this.itemsToShowClg + 5; // Increase the number of items by 5
    this.displayColleges = this.colleges.slice(0, nextSet); // Update the displayed colleges

    // If there are still more colleges to show, keep the 'Show More' button visible
    if (this.displayColleges.length < this.colleges.length) {
      this.itemsToShowClg = nextSet; // Update the number of colleges to show
    } else {
      this.showViewMoreButtonclg = false; // Hide the 'Show More' button if all colleges are displayed
    }
  }




  getcitylist() {
    this.service.getLocation(this.cityform).subscribe(res => {
      this.getprecityltsarr = res.response_data;
    });
  }

  toggleView() {
    this.showMore = !this.showMore;
  }
  editpreferance() {
    this.router.navigate(['/editpreferences']);
  }

  getformstatelist() {
    this.service.statelist().subscribe(res => {
      this.stateltsArry = res.res_data;
      // You may want to initialize the filteredstate array after getting the list
      this.filteredstate = this.stateControl.valueChanges.pipe(
        startWith(''),
        map(value => this.filterstate(value))
      );
    });
  }

  filterstate(searchTerm: string): any[] {
    if (!searchTerm) {
      return this.stateltsArry; // Return the full list if the search term is empty
    }
    // Make sure to check the correct property for filtering
    return this.stateltsArry.filter(state =>
      state.statename.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }


  onStateSelected(state: any) {
    this.selectedStateId = state.id; // Store the selected state ID
    //  console.log(this.selectedStateId);
    this.admissionForm.controls.state.setValue(this.selectedStateId);
    this.stateControl.setValue(state.statename); // Set the input field to the state's name
    this.getformscitylist();
  }

  onStateInput(inputValue: string) {
    console.log('state input value:', inputValue); // Debugging
  }


  getformscitylist() {
    // Fetch city list based on state ID (or another condition)
    this.service.citylist(this.selectedStateId).subscribe(res => {
      this.cityltsArry = res.res_data;  // Assign API response to the city list
      // console.log('City list:', this.cityltsArry);  // Debugging: log the city list

      // Apply initial filtering after cities are loaded
      this.filteredCity = this.cityControl.valueChanges.pipe(
        startWith(''),
        map(value => this.filterCity(value))

      );
      // console.log(this.filteredCity);
    });
  }

  // Filter function for searching cities
  filterCity(searchTerm: string): any[] {
    if (!searchTerm) {
      return this.cityltsArry;  // Return full list if no search term
    }
    return this.cityltsArry.filter(city =>
      city.city.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive filter
    );
  }

  // Store the selected city ID when a city is chosen
  onCitySelected(selectedCityId: string) {
    this.selectedCityId = selectedCityId;
    // console.log('Selected City ID:', this.selectedCityId); // Debugging
    this.admissionForm.controls.city.setValue(this.selectedCityId);
  }

  // Optional input handler if you need additional logic for input changes
  onCityInput(inputValue: string) {
    // console.log('City input value:', inputValue); // Debugging
  }

  getpreferdclglts() {
   
    const selectedCoursesIds = this.admissionForm.get('interestedCourses')?.value; // Selected course IDs
    const selectedLocationIds = this.admissionForm.get('preferredLocation')?.value; // Selected location IDs

   
    const cityId = selectedLocationIds ? selectedLocationIds.join(',') : ''; // Convert array to string or use empty if null
    const subcategoryId = selectedCoursesIds ? selectedCoursesIds.join(',') : ''; // Convert array to string or use empty if null

   
    // Pass comma-separated strings to the service function
    this.service.preferdclglist(cityId, subcategoryId).subscribe(res => {
      // console.log(res);
      this.clgltsArry = res.res_data;
      // console.log(this.clgltsArry);
      this.filteredColleges = this.clgltsArry;
    });
  }


  onSearchCollege(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;

    if (inputValue) {
      // Filter colleges by the input value (case-insensitive search)
      this.filteredColleges = this.colleges.filter(college =>
        college.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    } else {
      // Show the full list if the input is empty
      this.filteredColleges = this.colleges;
    }
  }


  onStateChange1(stateId: any) {
   
    this.service.citylist(stateId).subscribe(res => {
      this.cityltsArry = res.res_data;
    });
  }

  onCategoryChange(categoryid: any) {
    this.categoryID = categoryid;
  }

  onCourseLevelChange(levelId: any) {
    this.clevelid = levelId;
    this.getsubcourselist();
  }

  getCategory() {
    this.service.getCategory().subscribe(res => {
      this.Category = res.response_data;
    });
  }

  getlevel() {
    this.service.getlevel().subscribe(res => {
      this.clevel = res.response_data;
      
    });
  }

  getsubcourselist() {
    this.service.getsubclist(this.categoryID, this.clevelid).subscribe(res => {
      this.courselist = res.data;
    
    });
  }


  checkValidInputData(event: any, field: string) {
    const inputValue = event.target.value;

    if (field === 'studentName') {
     
      const sanitizedValue = inputValue.replace(/[^a-zA-Z \'-]/g, '');
      this.admissionForm.get('studentName')?.setValue(sanitizedValue, { emitEvent: false });
    } else if (field === 'mobileNumber') {
    
      const sanitizedValue = inputValue.replace(/[^0-9]/g, '').slice(0, 10);
      this.admissionForm.get('mobileNumber')?.setValue(sanitizedValue, { emitEvent: false });
    }
  }



  populateUserData() {
    this.simpleuserdata();
    this.getResponseDataFromLocalStorage();

    if (this.loginuserId) {
      this.admissionForm.patchValue({
        studentName: this.username,
        email: this.email,
      });
    }
  }

 

  // savmanagementform() {
  //  alert(JSON.stringify(this.admissionForm.value, null, 2));

  //   if (this.admissionForm.invalid) {
  
  //     this.admissionForm.markAllAsTouched();
  //     return;
  //   }
  
    
  //   this.service.managementForm(
  //     this.admissionForm.value.studentName,
  //     this.admissionForm.value.state,
  //     this.admissionForm.value.city,
  //     this.admissionForm.value.category,
  //     this.admissionForm.value.courseLevel,
  //     this.admissionForm.value.interestedCourses,
  //     this.admissionForm.value.preferredLocation,
  //     this.admissionForm.value.preferredCollege,
  //     this.admissionForm.value.mobileNumber,
  //   ).subscribe({
  //     next: (res) => {
  //       this.showAlert('Submitted!', 'Thanks for submitting the details. Our counsellor will contact you shortly.');
       
  //       this.close(); 
  //       this.setOpen(false); 
  //       this.admissionForm.value.studentName=null,
  //       this.admissionForm.value.state=null,
  //       this.admissionForm.value.city=null,
  //       this.admissionForm.value.category=null,
  //       this.admissionForm.value.courseLevel=null,
  //       this.admissionForm.value.interestedCourses=null,
  //       this.admissionForm.value.preferredLocation=null,
  //       this.admissionForm.value.preferredCollege=null,
  //       this.admissionForm.value.mobileNumber=null
       
  //     },
  //     error: (err) => {
  //       this.showAlert('Error', 'There was an issue submitting your details. Please try again.');
  //     },
  //   });
  // }
  

savmanagementform() {

  // alert(JSON.stringify(this.admissionForm.value, null, 2));

  if (this.admissionForm.invalid) {
    this.admissionForm.markAllAsTouched();
    return;
  }

  const formValue = this.admissionForm.value;

  this.service.managementForm(
    formValue.studentName,
    formValue.state,
    formValue.city,
    formValue.category,
    formValue.courseLevel,
    formValue.interestedCourses,
    formValue.preferredLocation,
    formValue.preferredCollege,
    formValue.mobileNumber,
  ).subscribe({
    next: (res) => {

      this.showAlert(
        'Submitted!',
        'Thanks for submitting the details. Our counsellor will contact you shortly.'
      );

      // ✅ BLANK ALL VALUES
      this.admissionForm.reset({
        studentName: '',
        state: '',
        city: '',
        category: null,
        courseLevel: null,
        mobileNumber: '',
        interestedCourses: null,
        preferredLocation: null,
        preferredCollege: null
      });

      this.stateControl.reset();
      this.cityControl.reset();

      this.setOpen(false);
    },
    error: () => {
      this.showAlert(
        'Error',
        'There was an issue submitting your details. Please try again.'
      );
    },
  });
}



  async close() {
    await this.modalController.dismiss();
  }


  async onclick(id: any, name: any) {
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

    // Present the loading
    await loading.present();

    // Store both ID and name in localStorage
    localStorage.setItem('selectedCourseId', id);
    // console.log(this.id);
    localStorage.setItem('activeTabId', id);
    localStorage.setItem('selectedCourseName', name);

    // console.log('Selected Tab ID and Name set in localStorage:', id, name);
    this.crsname = name;
    setTimeout(async () => {
      await loading.dismiss();

      // console.log('Loading completed');
    },);
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  simpleuserdata() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.loginuserId = user.id;
      this.email = user.email; 
      this.username = user.name; 
      this.phone = user.phone; 
    } else {
      console.log('No user information found in local storage.');
    }
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
    }
  }


  getarticleforstyudentachiever() {
    this.CategoryId = this.catid;
    this.service.articlbycategory(this.CategoryId).subscribe(res => {
      this.articleArry = res.response_data; 
      this.displayArticles = this.articleArry.slice(0, this.itemsToShowArticle); 
      if (this.articleArry.length > this.itemsToShowArticle) {
        this.showViewMoreButtonArticle = true; 
      }
    });
  }

 
  viewMoreArticle() {
    const nextSet = this.itemsToShowArticle + 5; 
    this.displayArticles = this.articleArry.slice(0, nextSet); 

    if (this.displayArticles.length < this.articleArry.length) {
      this.itemsToShowArticle = nextSet; 
    } else {
      this.showViewMoreButtonArticle = false;
    }
  }


  plcedtails(id) {
    this.router.navigate(['/placemntdetails', id]);

  }
  crsid(id) {
    this.router.navigate(['/trendcrsdetails', id]);

  }

  async presentSignInModal() {
    const modal = await this.modalController.create({
      component: PopuplogsignPage,
    });
    return await modal.present();
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
  segmentChanged(segmentValue: string) {
    this.selectedSegmentAB = segmentValue;
    this.loadCollegeFees(this.courseId);
  }
  segmentChangedAB(segmentValue: string) {
    this.selectedSegmentAB = segmentValue;

  }
  ionViewWillEnter() {

  }


  notification() {
    this.router.navigateByUrl('/notification');
  }

  feuturedclg() {
    this.categoryId = this.catid;
    this.service.getfeatureclg(this.categoryId).subscribe(res => {
      this.fewclgArr = res.data;  
      this.displayFewClgArr = this.fewclgArr.slice(0, this.itemsToShowFewClg); 
      if (this.fewclgArr.length > this.itemsToShowFewClg) {
        this.showViewMoreButtonFewClg = true;
      }
    });
  }

 
  viewMoreFewClg() {
    const nextSet = this.itemsToShowFewClg + 5; 
    this.displayFewClgArr = this.fewclgArr.slice(0, nextSet);  

    if (this.displayFewClgArr.length < this.fewclgArr.length) {
      this.itemsToShowFewClg = nextSet; 
    } else {
      this.showViewMoreButtonFewClg = false; 
    }
  }


  getplacement() {
    this.categoryId = this.catid;
    this.service.placementclg(this.categoryId).subscribe(res => {
      this.placementarry = res.PlacementCollege; 
      this.displayPlacements = this.placementarry.slice(0, this.itemsToShowPlacement); 
      if (this.placementarry.length > this.itemsToShowPlacement) {
        this.showViewMoreButtonPlacement = true; 
      }
    });
  }

 
  viewMorePlacement() {
    const nextSet = this.itemsToShowPlacement + 5; 
    this.displayPlacements = this.placementarry.slice(0, nextSet); 

    if (this.displayPlacements.length < this.placementarry.length) {
      this.itemsToShowPlacement = nextSet; 
    } else {
      this.showViewMoreButtonPlacement = false; 
    }
  }


  getcareers() {
    this.courseCatId = this.catid;
    this.service.getcareer(this.courseCatId).subscribe(res => {
      this.careerarry = res.careerslist;
      this.displayCareerArr = this.careerarry.slice(0, this.itemsToShowCareer); 
      this.showViewMoreButtonCareer = this.careerarry.length > this.itemsToShowCareer;
    });
  }


  viewMoreCareers() {
    const nextSet = this.itemsToShowCareer + 5;  
    this.displayCareerArr = this.careerarry.slice(0, nextSet); 

    if (this.displayCareerArr.length < this.careerarry.length) {
      this.itemsToShowCareer = nextSet; 
    } else {
      this.showViewMoreButtonCareer = false; 
    }
  }


  creerdetails(id: any) {
    this.router.navigate(['/careerdetails', id]);
  }

  segmentChangeda(event) {
    this.selectedSegmenta = event.detail.value;
  }
  segmentChangedb(event) {
    this.selectedSegmentb = event.detail.value;
  }

  segmentChangedc(event) {
    this.selectedSegmentc = event.detail.value;
  }


  loadTendingCourses() {
    this.service.trendincorses(this.categoryId,this.academic_category ).subscribe(res => {
      this.tendingcrses = res.data; 
      this.displayTendingcrses = this.tendingcrses.slice(0, this.itemsToShow); 
      if (this.tendingcrses.length > this.itemsToShow) {
        this.showViewMoreButtoncrs = true; 
      }
    });
  }

 
  viewMorecrse() {
    const nextSet = this.itemsToShow + 5; 
    this.displayTendingcrses = this.tendingcrses.slice(0, nextSet); 
    if (this.displayTendingcrses.length < this.tendingcrses.length) {
      this.itemsToShow = nextSet; 
    } else {
      this.showViewMoreButtoncrs = false; 
    }
  }

  onShowCourse(index: number): void {
    this.expandedStatesCourse[index] = !this.expandedStatesCourse[index];
  }


  getclgctyl(id) {
    this.selected_loc = [];
    localStorage.setItem('selectedLocationIds', this.selected_loc);
    const locId = id;
    this.router.navigate(['clglist', locId, 'clgbyloc']);
  }


  getarticledetailsview()
  {
    this.router.navigateByUrl('/articlcatlist')
  }
  getarticle() {
    this.searchCategory = 0;
    this.value = '';
  
    this.service.article(this.searchCategory, this.value,this.statename ).subscribe(res => {
      this.allArticles = res.response_data;
     
      this.isViewMoreButtonVisible = this.allArticles.length > this.initialArticlesToShow;
    });
  }

  async articlelist(){
    this.router.navigate(['/coursewisearticles']);
  }

 
  getevent() {
    this.service.getevents(this.value).subscribe(res => {
      this.eventArry = res.response_data;
    
    });
  }

  async eventlist(){
    this.router.navigate(['/eventlist']);
  }


  
  loadMoreEvents() {
    const nextSet = this.initialEventsToShow + 5; 
    this.displayedEvents = this.eventArry.slice(0, nextSet);
    this.initialEventsToShow = nextSet;
    this.isEventViewMoreButtonVisible = this.displayedEvents.length < this.eventArry.length;
  }

  getexm() {
    this.courseCatId = this.catid;
    this.service.getexams(this.courseCatId,this.statename, this.academic_category).subscribe(res => {
      this.examArry = res.examslist.slice(this.startLimit1, this.endLimit1); // Show only first 3 exams initially

      if (res.examslist.length > this.endLimit1) {
        this.showViewMoreButton = true;
      } else {
        this.showViewMoreButton = false;
      }
    });
  }

 
  viewMore() {
    this.startLimit1 = this.endLimit1; 
    this.endLimit1 += 3; 
    this.service.getexams(this.courseCatId,this.statename, this.academic_category).subscribe(res => {
      const newExams = res.examslist.slice(this.startLimit1, this.endLimit1);
      this.examArry = [...this.examArry, ...newExams]; 
      if (this.examArry.length >= res.examslist.length) {
        this.showViewMoreButton = false;
      }
    });
  }



  getclgid(collegeid: string) {
    this.router.navigate(['/clgdetails', collegeid]);
  }
  getclgesid(collegeid: string) {

    this.router.navigate(['/clgdetails', collegeid]);
  }

  getarticledetails(id) {
    this.router.navigate(['/articledetails', id]);

  }

  geteventdetails(event_id) {
    this.router.navigate(['/eventdetails', event_id]);
  }


  setupLink() {
    const link = document.getElementById('collegePredictorLink');
    if (link) {
      link.addEventListener('click', async (event) => {
        event.preventDefault();

      });
    }
  }


  certificates() {
    this.courseCatId = this.catid;
    this.service.getcertification(this.courseCatId).subscribe(res => {
      this.certificateArry = res.certificates; 
      this.displayCertificates = this.certificateArry.slice(0, this.itemsToShowCert); 
      if (this.certificateArry.length > this.itemsToShowCert) {
        this.showViewMoreButtonCert = true; 
      }
    });
  }


  viewMoreCert() {
    const nextSet = this.itemsToShowCert + 5; 
    this.displayCertificates = this.certificateArry.slice(0, nextSet); 

    if (this.displayCertificates.length < this.certificateArry.length) {
      this.itemsToShowCert = nextSet; 
    } else {
      this.showViewMoreButtonCert = false; 
    }
  }
  certificatedtl(id) {
    this.router.navigate(['/certificatetdetails', id]);

  }

  trespeciali() {
    this.service.specilization().subscribe(res => {
      // console.log(res);
      this.trespecialiArry = res.TrendingSpecilization;

    });
  }

  async examprocess(examId: any) {
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

    this.router.navigate(['/examdetails', examId], { queryParams: { segment: 'Process' } }).then(async () => {
      await loading.dismiss();
    }).catch(async () => {
      await loading.dismiss();
    });
  }



  async examsyllabus(examId: any) {
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

    this.router.navigate(['/examdetails', examId], { queryParams: { segment: 'Pattern' } }).then(async () => {
      await loading.dismiss();
    }).catch(async () => {
      await loading.dismiss();
    });
  }


  async examdetails(examId: any) {
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

    this.router.navigate(['/examdetails', examId]).then(async () => {
      await loading.dismiss();
    }).catch(async () => {
      await loading.dismiss();
    });
  }


  async clgpredict(id: string, CatId: string, subCatName: string) {
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    } else {
      await this.predictadmission(id, CatId, subCatName);
    }
  }


  


// 2qns
handleQuestionPaperClick(exam)
{

  this.router.navigate(['/questionpaper'], {queryParams:{'examId':exam.examId }})
 
}

  // async handleQuestionPaperClick(event: Event, questionpaperUrls: string[]) {
  //   event.preventDefault();
  
  //   if (this.loginuserId) {
  //     if (questionpaperUrls && questionpaperUrls.length > 0) {
  //       if (questionpaperUrls.length === 1) {
  //         // If there's only one URL, open it directly
  //         window.open(questionpaperUrls[0], '_blank');
  //       } else {
  //         // Show a modal for multiple question papers
  //         await this.showQuestionPaperModal(questionpaperUrls);
  //       }
  //     } else {
  //       await this.showAlert('Question Paper', 'Question paper data not available');
  //     }
  //   } else {
  //     this.presentSignInModal();
  //   }
  // }
  
  // Function to show a modal for multiple question papers with serial numbers and download icons
  async showQuestionPaperModal(questionpaperUrls: string[]) {
    const alert = await this.alertController.create({
      header: 'Available Question Papers',
      message: this.generateQuestionPaperListHtml(questionpaperUrls),
      cssClass: 'custom-alert', // Custom CSS class for styling
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
        },
      ],
    });
  
    await alert.present();
  
    // Add click listeners for download icons
    questionpaperUrls.forEach((url, index) => {
      const downloadBtn = document.getElementById(`download-${index}`);
      if (downloadBtn) {
        downloadBtn.addEventListener('click', () => window.open(url, '_blank'));
      }
    });
  }
  
  
  generateQuestionPaperListHtml(questionpaperUrls: string[]): string {
    return questionpaperUrls
      .map(
        (url, index) => `
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <span style="margin-right: 10px;">${index + 1}.</span>
          <span style="flex-grow: 1;">Question Paper ${index + 1} &nbsp;&nbsp;&nbsp;</span>
          <ion-icon  name="download-outline"  id="download-${index}" class="download" style="cursor: pointer; color: #5d5deee3;"></ion-icon>
        </div>
      `
      )
      .join('');
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

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
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

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    if (this.admissionForm.valid) {
      console.log(this.admissionForm.value);
      this.closeModal();
    } else {
      console.log('Form is invalid');
    }
  }

  async onclickfess() {
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
    setTimeout(() => {
      loading.dismiss();
      console.log('Loading completed');
    }, 1500); 
  }
}
