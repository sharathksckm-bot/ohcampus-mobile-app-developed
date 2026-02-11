import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';
import { PopuplogsignPage } from '../../popuplogsign/popuplogsign.page';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-questionans',
  templateUrl: './questionans.page.html',
  styleUrls: ['./questionans.page.scss'],
})
export class QuestionansPage implements OnInit {
  @Output() courseClicked = new EventEmitter<string>();
  public segmentStud = 'tabs1';
  isFollowing: boolean = false;
  aplicationForm: FormGroup;
  selectedSegment = 'Questions';
  collegeId: any;
  details: string;
  collegename: any;
  clgdetailArry: any[] = [];
  clgimgArry: any[] = [];
  currentYear: number;
  length: any;
  draw: any;
  ansArry: any = [];
  unansArry: any = [];
  CourseCategoryArr: any = [];
  courseLoader: boolean;
  segment: string;
  segmentIndex: number;
  filtersegment = 'tabsA';
  studentForum: FormGroup;
  CoursesByCatArr: any = [];
  close: any;
  showAlert: any;
  loginuserId: any;
  user_id: any;
  courselevel: any;
  course: any;
  modal: any;
  // QaCollegeArr: any = []; 
  isClicked: boolean[] = [];
isClicked2: boolean[] = [];
// isFollowing: boolean[] = [];
  pageSize: any;
  userId: any;
  userData: any;
  email: any;
  username: any;
  phone: any;
  token: any;
  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private alertController: AlertController,
    private modalController: ModalController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.loginuserId = user.id;
    } else {
    }
    this.aplicationForm = this.formBuilder.group({
      course_category: ['', Validators.required],
      coursename: ['', Validators.required],
      college: ['', Validators.required],

    });
    this.studentForum = this.formBuilder.group({
      studentque: ['']
    });
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params['collegeid'];

      this.getclgdetail();
      this.getans();
      this.getUnanswer();
      this.toggleFollow('item: any');
    });
  }
  getCourseByCategoryClg() {
    this.service.getcourcatogorybyclg(this.aplicationForm.value.course_category, this.collegeId).subscribe(res => {
      this.courseLoader = false;
      this.CoursesByCatArr = res.data;

    });
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
  responseData(responseData: any) {
    throw new Error('Method not implemented.');
  }

  onCourseClicked(tabName: string) {
    alert(1);
    this.courseClicked.emit(tabName);

    this.segment = tabName;
  }

  studentSay(ev: any) {
    this.segmentStud = ev.detail.value;
  }
  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
  filterTabs(ev: any) {
    this.filtersegment = ev.detail.value;
  }

  getcourscategory(){

    this.service.getCoursescategory().subscribe(res => {
      console.log(res);
      this.CourseCategoryArr = res.data;

    });
  }

 

  getclgdetail() {

    this.service.getclgdetails(this.collegeId).subscribe(res => {
      
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.currentYear = (new Date()).getFullYear();
      
      this.clgimgArry = res.college_images;
     
    });
  }



async getans() {
  const loading = await this.loadingController.create({
    message: `
      <div class="custom-spinner-container">
        <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
        <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
      </div>
      <span style="margin-top: 10px;"></span>`,
    spinner: null,  // Custom spinner with logo
    translucent: true,
    cssClass: 'custom-loading'
  });

  await loading.present();  // Display the loader

  this.length = '5';
  this.draw = '1';

  this.service.qnsandans(this.collegeId, this.length, this.draw).subscribe(
    res => {
      this.ansArry = res.response_data;
      loading.dismiss();  // Dismiss the loader once data is fetched
    },
    error => {
      console.error('Error fetching Q&A:', error);
      loading.dismiss();  // Dismiss the loader in case of an error
    }
  );
}


getUnanswer(){
  this.length='5';
  this.draw='1';
  this.service.unanser(this.collegeId,this.length,this.draw).subscribe(res => {
    this. unansArry = res.response_data;
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
this.user_id = this.loginuserId ;
    this.service.userqnspost(this.collegeId,this.courselevel, this.course, this.user_id, this.studentForum.value.studentque).subscribe(
      async res => {
        await this.showAlert('Success', 'Question has been submitted. We will get back to you soon!');
        this.studentForum.reset();
      },
    );
  }
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
cancel() {
  this.modal.dismiss('/tabM');
 this.modalController.dismiss({
   dismissed: true,
 }).then(() => {
    
 });
}




toggleFollow(item: any) {
 
  const action = item.isFollowing ? 'unfollow' : 'follow';
  this.user_id = this.loginuserId ;
  
  this.service.followQuestion(action, this.user_id, item.question_id)
    .subscribe(
      (res) => {
        
        item.isFollowing = !item.isFollowing;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
}








toggleLikeDislike(answer: any, action: string) {
 
  answer.likeCount = answer.like || 0;
  answer.dislikeCount = answer.dis_like || 0;

  if (!answer || !answer.answer_id) {
    console.error('Answer ID is missing or undefined');
    return;
  }

  const user_id = this.loginuserId; 
  const answer_id = answer.answer_id;
  this.service.voteAnswere(action, answer_id, user_id).subscribe(res => {
    if (res.response_code === '200') {
      if (action === 'like') {
        // Toggle like state
        answer.isLiked = !answer.isLiked;
        if (answer.isLiked) {
          // Increment likeCount if the user liked
          answer.likeCount += 1;
          // Remove dislike if previously disliked
          if (answer.isDisliked) {
            answer.isDisliked = false;
            answer.dislikeCount -= 1;
          }
        } else {
          // Decrement likeCount if unliked
          answer.likeCount -= 1;
        }
      } else if (action === 'dislike') {
        // Toggle dislike state
        answer.isDisliked = !answer.isDisliked;
        if (answer.isDisliked) {
          // Increment dislikeCount if the user disliked
          answer.dislikeCount += 1;
          // Remove like if previously liked
          if (answer.isLiked) {
            answer.isLiked = false;
            answer.likeCount -= 1;
          }
        } else {
          // Decrement dislikeCount if undisliked
          answer.dislikeCount -= 1;
        }
      }
    }
  }, error => {
    console.error('Error in voting:', error);
  });
}

}
