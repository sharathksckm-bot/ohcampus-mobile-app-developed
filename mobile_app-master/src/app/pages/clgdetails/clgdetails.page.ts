/* eslint-disable @typescript-eslint/naming-convention */
import { Component, EventEmitter, OnInit, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { PredictadmissionPage } from '../predictadmission/predictadmission.page';
import { PopuplogsignPage } from '../popuplogsign/popuplogsign.page';
import { Subscription } from 'rxjs';
import { CoursesfeesPage } from './coursesfees/coursesfees.page';
import { ShortlistService } from '../../services/shortlist.service';
import { IonContent } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx'; 
@Component({
  selector: 'app-clgdetails',
  templateUrl: './clgdetails.page.html',
  styleUrls: ['./clgdetails.page.scss'],
})
export class ClgdetailsPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;


  subscription: Subscription;
  showMore: boolean = false;
  coureseinfotab:boolean=false;
  slidepic = {
    initialSlide: 0,
    slidesPerView: 1.3,
  };

  slideOpts1 = {
    initialSlide: 0,
    slidesPerView: 1.3,
  };

  slideOptspage = {
    initialSlide: 0,
    slidesPerView: 1.3,
  };

  slideOptssuited =
    {
      initialSlide: 0,
      slidesPerView: 1.1,
    };

  yearsArray: string[] = [];

  isThumbsUpClicked: boolean = false; // Initially not clicked
  isThumbsDownClicked: boolean = false; // Initially not clicked

  rankingarray: any[] = null;
  public segment = 'tabsA';

  public segmentStud = 'tabs1';
  selectedSegment = 'Latest';
  clgdetailArry: any = []; clgimgArry: any[] = []; cityidArry: any; details: any; collegeId: any; college: any;
  clgid: any; data: any; item: any; whatnew: any; tableOfContent: any = []; collegename: any; currentYear: any;
  clghightlight: any[] = []; popprogrmmArry: any[] = []; qunanswer: any[] = []; admissionQarray: any[] = [];
  prosesarray: any[] = []; examinfoarray: any[]; placementarray: any[] = []; placementQarray: any[]; searchYear: any;
  searchCategory: any; placementForm!: FormGroup; PlaceCategoryArr: any[]; latenpopArr: any[]; popularArr: any[];
  rankingQarray: any[] = []; coursefeesarray: any[] = []; coursfeeQarray: any[] = []; scholershiparray: any[] = [];
  scholershipQarray: any[] = []; faqsarray: any[] = []; notificationarry: any[] = []; detailsarry: any[] = [];
  suitclgarry: any; popularclgarry: any; cityid: any; categories: any; reviewsArry: any; overallrating: any;
  reviewsArr: any = []; totalPlacementRateCount: any; totalInfrastructureRateCount: any; totalFacultyRateCount: any;
  totalHostelRateCount: any; totalCampusRateCount: any; totalMoneyRateCount: any; one2twoRate: any; two2threeRate: any;
  three2fourRate: any; four2fiveRate: any; reviewvotearray: any; value: any; YearValue: any; id: any; totalRateCount: any;
  userId: any; brochurearr: any; clglogo: any; cityname: any; clgcategory: any; estd: any; showShearDiv = false;
  title: any; image: any; loginuserId: string | null = null; crsename: any; coursesArray: any[]; courseId: any; catid: any;
  active: string; event: string; isBookmarked = false; shortlistedColleges: Set<string> = new Set();
  description: any; user_id: any; questionInput: any; studentForum: FormGroup; courselevel: any; course: any; courseid: any;
  TabselectedIndex = 0; PlaceCategoryyearArr: any[];

  segmentIndex: number;
  segmentButtons = [
    { value: 'tabsA', label: 'College info' },
    { value: 'tabsB', label: 'Courses & Fees' },
    { value: 'tabsC', label: 'Reviews' },
    { value: 'tabsD', label: 'Admissions' },
    { value: 'tabsE', label: 'Placements' },
    { value: 'tabsF', label: 'Cut-Offs' },
    { value: 'tabsG', label: 'Infrastructure' },
    { value: 'tabsI', label: 'Compare' },
    { value: 'tabsJ', label: 'Q&A' },
    { value: 'tabsK', label: 'Scholarships' },
    { value: 'tabsL', label: 'Articles' },
    { value: 'tabsM', label: 'Course Info' },
  ];
  Year: any;
  responseData: any;
  showCourseInfoTab: any;
  logo: any;
  city: any;
  state: any;
  userData: any;
  email: any;
  username: any;
  viewPDF: any;
  subcategory: any;
  phone: any;
  token: any;
  tblecontentArry: any = []
  // selectedCourseIdB: any;
  selectedCourseName:string | null = null;
  facility_titles: any;
  popprogrmmArrydata:  any[] = [];
  sharelink: any;
  constructor(
      private socialSharing: SocialSharing,
      private iab: InAppBrowser,
    public router: Router, public service: ServiceService, public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder, public loadingController: LoadingController, private platform: Platform,
    private modalController: ModalController, private alertController: AlertController, private shortlistService: ShortlistService,
    private el: ElementRef, private cdr: ChangeDetectorRef,
  ) {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 25; i++) {
      const startYear = currentYear - i;
      const endYear = startYear + 1;
      const yearLabel = `${startYear}-${String(endYear).slice(2)}`;
      this.yearsArray.push(yearLabel);
    }
  }
  toggleShowMore() {
    this.showMore = !this.showMore;
  }
  ngOnInit() {

    // this.selectedCourseIdB = localStorage.getItem('selectedCourseIdB');
    // console.log(this.selectedCourseIdB);
    // const selectedCourseName = localStorage.getItem('selectedCourseName');
    // console.log('Selected Course Name:', selectedCourseName);

    this.selectedCourseName = localStorage.getItem('selectedCourseName');
    if (this.selectedCourseName) {
      console.log('Selected Course Name exists:', this.selectedCourseName);
    } else {
      console.log('Selected Course Name is null or undefined.');
    }

    this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      
      this.loginuserId = user.id;
      
    } else {
     
    }
    this.studentForum = this.formBuilder.group({
      studentque: ['']
    });






    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.clgrankingdata();
      this.getclgdetail();
      this.hightlightqns();
      this.admissionproces();
      this.tbleofcontent();
      this.getlatestnpop();
      this.cousesnfees();
      this.scholership();
      this.FAqs();
      this.notifications();
      this.contactdetail();
      this.review();


    });
    this.placementForm = this.formBuilder.group({
      course_category: ['',],
      year: [''],
    });
    this.placementcat();

    this.placement();
    this.getCollegeFacilitiesByID()
this.getCollegeAdmissionProcess()

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




  compclg1(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
  }
  

  onCourseClicked(courseid: string,course_category:string, tabName: string) {
    this.segment = tabName;
    localStorage.setItem('course_category',course_category)
    localStorage.setItem('selectedCourseId', courseid);
    console.log('Selected Course ID:', courseid);

  }


   async shareBlog(collegeId)
  {
    this.id=collegeId
 

  
    let selectpara=
    {
      "id":this.id,
      "type":"college"
   
    }
      const loader = await this.loadingController.create({
      message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
      spinner: null, // Disable the default spinner to use custom
      translucent: true,
      cssClass: 'custom-loading'
    });

    await loader.present(); 
    this.service.generateLink_req(selectpara).subscribe(async(res:any)=>
    {
       await loader.dismiss();
     this.sharelink =res.data.share_link
  
      this.socialSharing.share(this.sharelink).then(() => {
        console.log("Shared successfully");
      })

    })
  }

  onCourseClicked1(event) {
    console.log(event);
    this.segment = 'tabsM';
    this.coureseinfotab = true
    this.segment = 'tabsM';
    console.log(this.TabselectedIndex);

  }




  oncourseinfo(event) {
    console.log(event);
  }

  scrollTo(sectionName: string,): void {
    console.log(sectionName);
    const element = this.el.nativeElement.querySelector(`[name="${sectionName}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  onTabChange(event) {
    console.log(event);
  }

  toggleAccordion(item) {
    item.isOpen = !item.isOpen;
  }



  clgDetailTabs(ev: any) {
    this.segment = ev.detail.value;

  }

  studentSay(ev: any) {
    this.segmentStud = ev.detail.value;
  }

  toggleShearDiv() {
    this.showShearDiv = !this.showShearDiv;
  }


  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
  toggleDescription(item: any) {
    item.showMore = !item.showMore;
  }


  getMapUrl(location: string): string {
    
    const encodedLocation = encodeURIComponent(location);
    
    return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  }



  async getclgdetail() {
    const loading = await this.loadingController.create({
      message: `
            <div class="custom-spinner-container">
              <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
              <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
            </div>
            <span style="margin-top: 10px;"></span>`,
      spinner: null,  // Setting spinner to null to use the custom spinner
      translucent: true,
      cssClass: 'custom-loading'
    });
    await loading.present();  // Ensure the loader is presented
    this.service.getclgdetails(this.collegeId).subscribe(
      res => {
        console.log(res.response_code);
        if (res.response_code == 200) {
          this.clgdetailArry = res.college_detail;
          console.log(this.clgdetailArry);
          this.description = res.college_detail[0].description;
          this.catid = res.college_detail[0].categoryid;
          this.clglogo = res.college_detail[0].logo;
          this.collegename = res.college_detail[0].title;
          this.cityname = res.college_detail[0].city;
          this.state = res.college_detail[0].state;
          this.description = res.college_detail[0].description;
          this.clgcategory = res.college_detail[0].Collage_category;
          this.estd = res.college_detail[0].estd;
          this.image = res.college_detail[0].image;
          this.currentYear = (new Date()).getFullYear();
          this.whatnew = res.college_detail[0].what_new;
          this.tableOfContent = res.table_of_content;

          this.clgimgArry = res.college_images;
          this.cityidArry = res.college_detail[0].cityid;
          this.courseId = res.college_detail[0].coursesandfees[0].sub_category;
          console.log('Sub Category:', this.courseId);

          this.popularclg();


          this.categories = res.college_detail[0].categoryid;
          console.log(this.categories);
          this.suitedclg();
          this.popprogrammes();
          loading.dismiss();
        } else {
          loading.dismiss();
        }
      },
      error => {
        console.error('Error fetching college details:', error);
        if (error.status === 400) {
          loading.dismiss();
        } else {
        }
      }
    );
  }




  popularclg() {
    this.service.clgpopular(this.courseId).subscribe(res => {

      this.popularclgarry = res.response_data;

    });
  }

  popprogrammes() {
    this.subcategory = '';
    console.log(this.courseId);
    let collegeTypeId=this.clgcategory
    this.service.getpopprogrammes(this.collegeId, this.subcategory,collegeTypeId).subscribe(res => {  
      this.popprogrmmArrydata = res.popular_programmes;
      this.qunanswer = res.Commonaly_Asked_Questions;

    });
  }

  suitedclg() {
    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      this.suitclgarry = res.bestSuitedColleges;
    });
  }


  getclgid(collegeid: string) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

 

  tbleofcontent() {
    this.service.tableofcontent(this.collegeId).subscribe(res => {
      this.tblecontentArry = res.response_data;
    });
  }



  hightlightqns() {
    this.service.gethighlightqan(this.collegeId).subscribe(res => {
      // console.log(res);
      this.clghightlight = res.CollegeHighlight;
      this.qunanswer = res.Commonaly_Asked_Questions;

    });
  }

  async postQuestion() {
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    }

    if (this.studentForum.invalid) {
      this.studentForum.markAllAsTouched();
    } else {
      this.user_id = this.loginuserId;
      this.service.userqnspost(this.collegeId, this.courselevel, this.course, this.user_id, this.studentForum.value.studentque).subscribe(
        async res => {
          await this.showAlert('Success', 'Question has been submitted. We will get back to you soon!');
          this.studentForum.reset();
        },
      );
    }
  }


  admissionproces() {

    this.service.getAdmissionprosess(this.collegeId).subscribe(res => {
      
      this.prosesarray = res.AdmissionProcess;
      this.admissionQarray = res.Commonaly_Asked_Questions;
      this.examinfoarray = res.Examnotification_or_ImportantDates;
      
    });
  }


  placementcat() {
    this.service.getplacecategory(this.collegeId).subscribe((res) => {
      this.PlaceCategoryArr = res.response_data;
      console.log('Place Category Array:', this.PlaceCategoryArr);
  
      if (this.PlaceCategoryArr && this.PlaceCategoryArr.length > 0) {
        // Set the first item's ID to the course_category field
        const firstCategoryId = this.PlaceCategoryArr[0].id;
        this.placementForm.patchValue({
          course_category: firstCategoryId,
        });
  
        console.log('First Category Name:', this.PlaceCategoryArr[0].name);
        console.log('First Category ID:', firstCategoryId);
  
        // Call the year function with the first category ID
        this.placemtyear(firstCategoryId);
      }
    });
  }
  
  placemtyear(selectedCategoryId: string) {
    this.service.getplacecategoryyear(this.collegeId, selectedCategoryId).subscribe((res) => {
      console.log('Year Response:', res);
      if (res && res.year) {
        // Map the years and update the yearsArray
        this.yearsArray = res.year.map((item) => item.year);
        console.log('Years Array:', this.yearsArray);
  
        if (this.yearsArray.length > 0) {
          // Set the first year into the form
          const firstYear = this.yearsArray[0];
          this.placementForm.get('year')?.setValue(firstYear);
  
          // Call the placement function with both category and year
          this.placement();
        }
      }
    });
  }
  
  placement() {
    const selectedYear = this.placementForm.value.year; // Get selected year
    const selectedCategory = this.placementForm.value.course_category; // Get selected course category
  
    console.log('Selected Year:', selectedYear);
    console.log('Selected Course Category:', selectedCategory);
  
    if (selectedYear && selectedCategory) {
      // Fetch placement data
      this.service
        .getplacement(selectedYear, selectedCategory, this.collegeId)
        .subscribe((res) => {
          this.placementarray = res.placementlist;
          console.log('Placement List:', this.placementarray);
  
          this.placementQarray = res.Commonaly_Asked_Questions;
          console.log('Questions:', this.placementQarray);
        });
    } else {
      console.warn('Please select both Year and Course Category.');
    }
  }
  



  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }


  clgrankingdata() {
    this.service.getclgranking(this.collegeId).subscribe((response: any) => {
      if (response && response.length > 0) {
        this.rankingarray = response;
      } else {
        this.rankingarray = null; 
      }
    });
  }



  cousesnfees() {
    this.service.getcoursfeesnfees(this.collegeId).subscribe(res => {
      this.coursefeesarray = res.courselist;
      console.log(this.coursefeesarray);
      this.coursfeeQarray = res.Commonaly_Asked_Questions;
    });
  }

  scholership() {

    this.service.getscholarship(this.collegeId).subscribe(res => {
      this.scholershiparray = res.scholarship_data;
      this.scholershipQarray = res.Commonaly_Asked_Questions;
    });
  }

  FAqs() {
    this.service.getFaqs(this.collegeId).subscribe(res => {
      this.faqsarray = res.FAQs;
    });
  }

  notifications() {
    this.service.getnotification(this.collegeId).subscribe(res => {
      this.notificationarry = res.response_data;
    });
  }

  contactdetail() {
    this.service.contactdetails(this.collegeId).subscribe(res => {
      this.detailsarry = res.ContactDetails;
    });
  }

  review() {
    this.service.getclgreview(this.collegeId).subscribe(res => {
      this.reviewsArry = res.data;
      console.log(this.reviewsArry);
      this.reviewsArr = res.data.reviews;
      this.overallrating = res.data.reviews.totalRateCount;
      this.totalRateCount = res.data.totalRateCount;
      this.totalPlacementRateCount = res.data.totalPlacementRateCount;
      this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
      this.totalFacultyRateCount = res.data.totalFacultyRateCount;
      this.totalHostelRateCount = res.data.totalHostelRateCount;
      this.totalCampusRateCount = res.data.totalCampusRateCount;
      this.totalMoneyRateCount = res.data.totalMoneyRateCount;
      this.one2twoRate = res.data.one2twoRate;
      this.two2threeRate = res.data.two2threeRate;
      this.three2fourRate = res.data.three2fourRate;
      this.four2fiveRate = res.data.four2fiveRate;
    });
  }





  Articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  compclg(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
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

  toggleIconColor(collegeId: number): void {
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


    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    }
// alert(collegeId)
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
  async brochuresuit(collegeId: any)
  {
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    }
// alert(collegeId)
    try {
  
      // this.collegeId = collegeId;
      this.userId = this.loginuserId;
  
      const res = await this.service.getbrochure(collegeId, this.userId).toPromise();
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
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async clgpredict(id: string, CatId: string, subCatName: string) {
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    } else {
      await this.predictadmission(id, CatId, subCatName);
    }
  }


  addmissiondatepdf(sub_category) {
    this.service.addmisiondatepdf(this.collegeId, sub_category).subscribe(res => {
      this.viewPDF = res;
      window.open(this.viewPDF.PDF, '_blank');
    });
  }

  // shareOnWhatsApp(collegeId): void {
  //   const shareText = `Check out this event: ${'https://ohcampus.com/'}${window.location.pathname}`;
  //   const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent
  //     ('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;

  //   window.open(whatsappUrl, '_blank');
  // }
  shareOnWhatsApp(collegeId: string): void {
  const shareLink = `http://api.ohcampus.com?id=${collegeId}&type=college`;
  this.iab.create(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareLink)}`, '_system');
}

  shareOnFacebook(collegeId): void {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent
      ('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
    this.iab.create(url, '_blank');

  }

  shareOnTwitter(collegeId): void {
    const shareText = `Check out this exam: ${'https://ohcampus.com/'}${window.location.pathname}`;
    // const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareText)}`;
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent
      ('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
    this.iab.create(url, '_blank');
  }


  shareOnLinkedin(collegeId): void {
    const shareText = `Check out this exam: ${'https://ohcampus.com/'}${window.location.pathname}`;
    const url = `https://www.linkedin.com/send?text=$
    {encodeURIComponent('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
    this.iab.create(url, '_blank');
  }
  getCollegeAdmissionProcess()
  {
    let selctpara={
      "collegeId":this.collegeId
    }
    this.service.getCollegeAdmissionProcess(selctpara).subscribe(res=>{

    })
  }
  getCollegeFacilitiesByID()
  {
    let selctpara={
      "collegeId":this.collegeId
    }
    this.service.getCollegeFacilitiesByID(selctpara).subscribe(res=>{
     this.facility_titles= res.CollegeFac.facility_titles
   console.log( this.facility_titles)
    })
  }
}
