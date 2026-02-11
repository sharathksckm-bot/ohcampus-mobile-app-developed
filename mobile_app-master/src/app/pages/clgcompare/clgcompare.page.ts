








import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'; 
@Component({
  selector: 'app-clgcompare',
  templateUrl: './clgcompare.page.html',
  styleUrls: ['./clgcompare.page.scss'],
})

export class ClgcomparePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('open-modal') modal1: IonModal;
  @ViewChild('open-modal') modal2: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.4,
  };

  slideOptss = {
    initialSlide: 0,
    slidesPerView: 1.4,
  };
  cmprclgArr: any = [];
  btechclg: any;
  collegeId: any;
  clgdetailArry: any=[];
  collegename: any;
  currentYear: number;
  searchTerm = '';
  showResults = true;
  courselts: string;
  degreelts: string;
  hide = false;
  hidediv1:boolean=true;
  hidediv:boolean=true;
  isModalOpen = false;
  isModalOpen2 = false;
  myflag1=false;
  myflag2=false;
  limit = 20;
  start = 0;
  searchResults: any[] = [];
  errorMessage = '';
  locationArry: string[] = []; 
  courselevel: string = ''; 
  courseArry: any[] = [];
  selectedCollegeId: any;
  filteredResults: any;
  addcollegediv = true;
  clgdetailsdiv = true;
  clgdetailsdiv2 = true;
  clgid1: any[] = [];
  clgid2: any[] = null;
  collegeId2: any;
  shareUrl: string | number | boolean;
  shareText: string = 'Check this out!';
  shareTitle: string = 'Example Title';
  shareSummary: string = 'Example Summary';
  shareSource: string = 'Example Source';
  categoryid: any;
  catid: any;
  Courseslist: any[];
  Courseslist2: any[];
  Rating: any;
  Rating2: any;
  totalReview: any;
  totalReview2: any;
  RankArr: any = [];
  RankArr2: any = [];
  coursesandfeesArr: any = [];
  coursesandfeesArr2: any = [];
  AdminssionprocessArr: any = [];
  AdminssionprocessArr2: any = [];
  median_salary: any;
  median_salary2: any;
  no_of_companies_visited: any;
  no_of_companies_visited2: any;
  no_of_student_selected: any;
  no_of_student_selected2: any;
  no_of_students_placed: any;
  no_of_students_placed2: any;
  year: any;
  year2: any;
  facilitiesArr: any = [];
  facilitiesArr2: any = [];
  image: any;
  image2: any;
  Categoryidclg1: any;
  cmprclgid: any;
  clgidclg1: any;
  // courselevel: any;
  subcategory: any;
  selectcourseId: any;
  courselevels: any;

  constructor(
    private iab: InAppBrowser,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private modalController: ModalController,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params['collegeId'];
      console.log(this.collegeId);
      this.collegeId2 = params['collegeId2'];
      console.log(this.collegeId2);
      if (this.collegeId2 != undefined) {
        this.clgcomaprsec(this.collegeId2);
      }
      if (this.collegeId != undefined) {
        this.clgcomaprfir(this.collegeId,this.subcategory,this.courselevel);
      }
    });

  }

  isSupportedIcon(icon: string): boolean {
    const supportedMaterialIcons = ['home', 'star', 'check', 'menu', 'search']; // Valid Material icons.
    return icon.startsWith('fa-') || supportedMaterialIcons.includes(icon);
  }


  getFontAwesomeIconClass(icon: string): string {
    return `fa ${icon}`;
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getclgdetail() {
   
    this.service.cmpclgdetails(this.collegeId,this.subcategory,this.courselevel).subscribe(res => {
      console.log(res);
      this.clgdetailArry = res.college_detail;
      console.log( this.clgdetailArry);
      this.categoryid = res.college_detail[0].categoryid;
       console.log(this.categoryid);
      this.collegename = res.college_detail.title;
       this.currentYear = (new Date()).getFullYear();
    });
  }

  notification() {
    this.router.navigateByUrl('/notification');
  }

  getpopclgcmr(){
    this.categoryid = this.Categoryidclg1 ;

    this.service.popclgcmpre(this.categoryid).subscribe(res => {
      console.log(res);
      this.cmprclgArr = res.CollegeListForCompare;
      console.log(this.cmprclgArr);
      this.cmprclgid = res.CollegeListForCompare[0].id;
      console.log(this.cmprclgid );

    });
  }

  resetSelections() {
    this.searchTerm = '';
    this.searchResults = [];
    this.showResults = false;
    this.hide = false;
    this.courselevel = null;
    this.courseArry = [];
  }

 
  cancel() {
    this.isModalOpen = false;
    this.modal.dismiss('/clgcompare');

    this.modalController.dismiss({
      dismissed: true,
    }).then(() => {
      this.resetSelections();
    });
  }

  cancel2() {
    this.modal.dismiss('/clgcompare');
    this.modalController.dismiss({
      dismissed: true,
    }).then(() => {
      this.resetSelections();
    });
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  search() {
    console.log(this.searchTerm);
    if (
      this.searchTerm !== '') {
      this.service.getcomprclgsrch(this.searchTerm, this.limit, this.start)
        .subscribe(
          (response) => {
            this.searchResults = response.data;
            this.showResults = true;
          },
          (error) => {
            console.error('Error occurred while searching:', error);
            this.errorMessage = 'Error occurred while searching';
          }
        );
    } else {
      this.hide = false;
      this.showResults = false;
    }
  }

  selectResult(result: any) {
    this.hide = true;
    this.searchTerm = result.title;
    this.showResults = false;
    this.collegeId = result.id;// Assuming 'id' is the property holding the selected ID
    this.getcouselevel(); // Call getdgreelts with the selected ID
    this.getcourselts();
    this. getclgdetail();
  }

  closeResults() {
    setTimeout(() => {
      this.showResults = false;
    }, 200);
  }


  getcouselevel() {
  
    this.service.getCourselevel(this.collegeId).subscribe(res => {
      console.log(res);
      this.locationArry = res.response_data;
      console.log(this.locationArry);
    });
  }

  // getcourselts() {
  //   console.log(this.courselts);
  //   console.log('collegeId:', this.collegeId);
  //   console.log('Courselevel:', this.courselevel);
  //    this.service.getcourselts(this.collegeId, this.courselevel).subscribe(res => {
  //     console.log(res);
  //     this.courseArry = res.data;
  //   });
 
  // }
getcollgelevel(item: any) {
  console.log('courselevel:', item.level);
  this.courselevels = item.level;
  console.log('collegeId:', this.collegeId);
  console.log('subcategory:', item.id);
  this.subcategory= item.id;
  this.getcourselts();
}
  getcourselts() {
  // console.log('courselevel:', item.level);
  // console.log('collegeId:', this.collegeId);
  // console.log('selectcourseId:', item.id);


  if (this.collegeId && this.courselevel) {
    this.service.getcourselts(this.collegeId, this.courselevels,  this.subcategory).subscribe(res => {
      console.log('API Response:', res);
      this.courseArry = res.data || [];
    }, err => {
      console.error('API Error:', err);
    });
  } else {
    console.warn('collegeId or courselevel is missing');
  }
}




  clgcomapr(collegeId,selectcourseId,courselevel) {
console.log(this.myflag1+">>>>>>"+this.myflag2);
    if(this.myflag1==true){
    this.clgdetailsdiv = false;
    
    this.service.cmpclgdetails(this.collegeId,selectcourseId,this.courselevels).subscribe(res => {
      this.clgid1 = res.college_detail;
      this.Courseslist = res.college_detail[0].Courses_list;
      this.clgidclg1 = res.college_detail[0].id;
      this.Categoryidclg1 = res.college_detail[0].categoryid;
   
      this.Rating = res.college_detail[0].ReviewRating.totalRateCount;
      this.totalReview = res.college_detail[0].ReviewRating.totalReview;
      this.RankArr = res.college_detail[0].Rank;
      this.coursesandfeesArr = res.college_detail[0]?.coursesandfees
      this.AdminssionprocessArr = res.college_detail[0]?.Adminssionprocess;
      this.median_salary = res.college_detail[0]?.Academic_Date[0]?.median_salary;
      this.no_of_companies_visited = res.college_detail[0]?.Academic_Date[0]?.no_of_companies_visited;
      this.no_of_student_selected = res.college_detail[0]?.Academic_Date[0]?.no_of_student_selected;
      this.no_of_students_placed = res.college_detail[0]?.Academic_Date[0]?.no_of_students_placed;
      this.year = res.college_detail[0]?.Academic_Date[0]?.year;
      this.facilitiesArr = res.college_detail[0].facilities;
      this.image = res.college_detail[0].image;

      if(this.clgid1.length>0){
        this.hidediv=false;
        this.myflag1=false;
      }
      this.isModalOpen = false;
      this.clgdetailsdiv = true;
      this.modalController.dismiss({
        dismissed: true,
      }).then(() => {
        this.resetSelections();
      });
    });

  }
  if(this.myflag2==true){
    this.clgdetailsdiv2 = false;
   
    this.service.cmpclgdetails(this.collegeId,selectcourseId,courselevel).subscribe(res => {
      this.clgid2 = res.college_detail;
      this.Courseslist2 = res.college_detail[0].Courses_list;
      this.Rating2 = res.college_detail[0].ReviewRating.totalRateCount;
      this.totalReview2 = res.college_detail[0].ReviewRating.totalReview;
      this.RankArr2 = res.college_detail[0].Rank;
      this.coursesandfeesArr2 = res.college_detail[0]?.coursesandfees;
      this.AdminssionprocessArr2 = res.college_detail[0]?.Adminssionprocess;
      this.median_salary2 = res.college_detail[0]?.Academic_Date[0]?.median_salary;
      this.no_of_companies_visited2 = res.college_detail[0]?.Academic_Date[0]?.no_of_companies_visited;
      this.no_of_student_selected2 = res.college_detail[0]?.Academic_Date[0]?.no_of_student_selected;
      this.no_of_students_placed2 = res.college_detail[0]?.Academic_Date[0]?.no_of_students_placed;
      this.year2 = res.college_detail[0]?.Academic_Date[0]?.year;
      this.facilitiesArr2 = res.college_detail[0].facilities;
      this.image2 = res.college_detail[0].image;
      if(this.clgid2.length>0){
        this.hidediv1=false;
        this.myflag2=false;
      }
      this.isModalOpen = false;
      this.clgdetailsdiv2 = true;
      this.modalController.dismiss({
        dismissed: true,
      }).then(() => {
        this.resetSelections();
      });
    })
  }
  }


  clgcomaprfir(collegeId,selectcourseId,courselevel) {
    this.clgdetailsdiv = false;
   
    console.log(collegeId)
    this.service.cmpclgdetails(this.collegeId,this.selectcourseId,courselevel).subscribe(res => {
      this.clgid1 = res.college_detail;
      console.log(this.clgid1);
      this.Courseslist = res.college_detail[0].Courses_list;
      this.RankArr = res.college_detail[0].Rank;
      this.coursesandfeesArr = res.college_detail[0]?.coursesandfees;
      this.AdminssionprocessArr = res.college_detail[0]?.Adminssionprocess;
      this.facilitiesArr = res.college_detail[0].facilities;
      console.log(this.facilitiesArr);
      if(this.clgid1.length>0){
        this.hidediv=false;
      }
      this.isModalOpen = false;
      this.clgdetailsdiv = true;
      this.modalController.dismiss({
        dismissed: true,
      }).then(() => {
        this.resetSelections();
      });
    });
  }

  clgcomaprsec(collegeId2) {
    this.clgdetailsdiv2 = false;
   
    console.log(collegeId2)
    this.service.cmpclgdetails(this.collegeId2,this.selectcourseId,this.courselevel).subscribe(res => {
      this.clgid2 = res.college_detail;
      console.log(this.clgid2);
      this.Courseslist2 = res.college_detail[0].Courses_list;
      this.RankArr2 = res.college_detail[0].Rank;
      this.coursesandfeesArr2 = res.college_detail[0]?.coursesandfees;
      this.AdminssionprocessArr2 = res.college_detail[0]?.Adminssionprocess;
      this.facilitiesArr2 = res.college_detail[0].facilities;
      if(this.clgid2.length>0){
        this.hidediv1=false;
      }
      this.isModalOpen = false;
      this.clgdetailsdiv2 = true;
      this.modalController.dismiss({
        dismissed: true,
      }).then(() => {
        this.resetSelections();
      });
    });
  }



  openModal(modalId: string): void {
if(modalId=='open-modal'){
    this.isModalOpen = true;
    this.myflag1=true;

}

if(modalId=='open-modal1'){
  this.isModalOpen = true;
  this.myflag2=true;
}
 
  }

  removeCollege1(index: number) {

    this.clgid1.splice(index, 1);

    if(this.clgid1.length>0){
      this.hidediv=false;
      this.myflag1=false;
    }else{
      this.hidediv=true;
    }
  }

  removeCollege2(index: number) {
    this.clgid2.splice(index, 1);

    if(this.clgid2.length>0){
      this.hidediv1=false;
      this.myflag2=false;
    }else{
      this.hidediv1=true;
    }

  }


  checkValue(value: any): string {
    if (value === null || value === undefined || value === '' || value === '0') {
      return 'N/A'; // Show 'N/A' for null, undefined, empty, or "0" values
    }
    return value; // If value is valid, return the value
  }

  compr2clg(id1, id2) {
    this.clgcomapr(id1,this.selectcourseId,this.courselevel);
    this.clgcomapr(id2,this.selectcourseId,this.courselevel);
  };

  
  shareOnFacebook() {
    const url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.shareUrl);
    // window.open(url, '_blank');
        this.iab.create(url, '_system');
  }

  shareOnWhatsApp(): void {
    const url = 'https://www.ohcampus.com';
    const text = `Check out this link. For more details visit ${url}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        this.iab.create(shareUrl, '_system');
    // window.open(shareUrl, '_blank');
  }

  shareOnTwitter(): void {
    const text = 'Check out this amazing link!';
    const url = 'https://www.ohcampus.com';
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
     this.iab.create(shareUrl, '_system');
    // window.open(shareUrl, '_blank');
  }

  shareOnLinkedIn(): void {
    const url = 'https://www.ohcampus.com';
    const title = 'Amazing Website';
    const summary = 'Check out this amazing link for more details.';
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}
      &title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
           this.iab.create(shareUrl, '_system');
    // window.open(shareUrl, '_blank');
  }


}





