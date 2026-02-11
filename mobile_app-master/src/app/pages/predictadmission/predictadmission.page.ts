
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, ModalController, AlertController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/service.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-predictadmission',
  templateUrl: './predictadmission.page.html',
  styleUrls: ['./predictadmission.page.scss'],
})
export class PredictadmissionPage implements OnInit {
  entranceExamControl = new FormControl(); // Control for the autocomplete field
  predictaddmi: FormGroup; // Form group for prediction
  @Input() id: string;
  @Input() CatId: string;
  @Input() subCatName: string;
  collegeId: string;

  searchTerm: string = ''; // Search term for the filter
  examListArr: any = [];  // Full exam list from API
  filteredExams: Observable<any[]>;  // Filtered list of exams
  CoursesByCatArr: any = [];
  CourseCategoryArr: any = [];
  collegename: any;
  clgdetailsArray: any[] = [];
  loginuserId: any;
  email: any;
  username: any;
  user: any;
  userData: any;
  phone: any;
  token: any;
  courseid: any;
  public selectedCourseId: any;
  selectedCategoryId: any;
  categoryid: any;
  selectedcatid: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: ServiceService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private alertController: AlertController,
    private navParams: NavParams
  ) {
    this.id = this.navParams.get('id'); // Retrieve the id from navigation params
  }

  ngOnInit() {

    this.predictaddmi = this.formBuilder.group({
      student_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \'-]+$')]],
      mobile_no: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      category: ['', [Validators.required]],
      course: ['', [Validators.required]],
      college: ['', [Validators.required]],
      entrance_exam: ['', ], // Ensure the control is added to the form group
      rank: ['', ],
      score: ['', ],
    });

    // Get exam list and set up filtering
   
    this.populateUserData(); // Populate form fields with user data
    this.setupAutocomplete(); // Setup autocomplete for entrance exam
    this.clgdetails(); // Fetch college details
    this.getcourscategory(); // Fetch course categories
    this.populateUserDataFromLocalStorage();
   this. getexamlist();
  }

  // Fetch user data and populate form fields
  populateUserData() {
    this.simpleuserdata();
    this.getResponseDataFromLocalStorage();

    // Populate form fields if user data exists
    if (this.loginuserId) {
      this.predictaddmi.patchValue({
        student_name: this.username,
        email: this.email,
        // mobile_no: this.phone,
      });
    }
  }

  
  getexamlist() {
   
    this.service.getexamlist('').subscribe(res => {
      this.examListArr = res.response_data; 
      console.log(this.examListArr);
    });
  }

  setupAutocomplete() {
    this.filteredExams = this.entranceExamControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterExams(value))
    );

    
    this.entranceExamControl.valueChanges.subscribe(value => {
      this.predictaddmi.patchValue({ entrance_exam: value });
    });
  }

  // Filtering logic for exams based on search term
  filterExams(searchTerm: string): any[] {
    if (!searchTerm) {
      return this.examListArr; // Return the full list if search term is empty
    }
    return this.examListArr.filter(exam =>
      exam.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }



  populateUserDataFromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem('predictFormData'));

    if (storedData) {
      this.predictaddmi.patchValue({
        mobile_no: storedData.mobile_no || '',
        category: storedData.category || '',
        course: storedData.course || '',
        entrance_exam: storedData.entrance_exam || '',
        rank: storedData.rank || '',
        score: storedData.score || '',
      });
    }
  }


  
  savpredictApplication() {
    console.log(this.predictaddmi);
    if (this.predictaddmi.invalid) {
      this.predictaddmi.markAllAsTouched();
      return;
    }
    if (this.predictaddmi.valid) {
      // localStorage.setItem('predictFormData', JSON.stringify(this.predictaddmi.value));

      this.service.predictaddmission(
        this.predictaddmi.value.student_name,
        this.predictaddmi.value.email,
        this.predictaddmi.value.mobile_no,
        this.predictaddmi.value.category,
        this.id,
        this.predictaddmi.value.course,
        // this.predictaddmi.value.entrance_exam,
        // this.predictaddmi.value.rank,
        // this.predictaddmi.value.score

        this.predictaddmi.value.entrance_exam || '', // Handle optional fields
        this.predictaddmi.value.rank || '',         // Handle optional fields
        this.predictaddmi.value.score || ''         // Handle optional fields
      ).subscribe({
        next: (res) => {
     this.showAlert('Submitted!', 'Your request has been successfully submitted...! We will contact you as soon as possible. Thank you.');
          this.close();
          this.predictaddmi.reset();
          this.predictaddmi.patchValue({
            student_name: null,
            email: null,
            mobile_no: null,
            category: null,
            course: null,
            entrance_exam:null,
            rank:null,
            score:null
          });
          
        },
        error: (err) => {
          this.showAlert('Error', 'There was an issue submitting your details. Please try again.');
        }
      });
    }
  }

 
  getcourscategory() {
    this.service.getCoursescategory().subscribe(res => {
      this.CourseCategoryArr = res.data;
    });
  }

  
  getCourseByCategoryClg(selectedCategoryId: any) {
    console.log(selectedCategoryId);
    this.collegeId = this.id; // Ensure `this.id` is assigned with the correct value
    this.service.getcourcatogorybyclg(selectedCategoryId, this.collegeId).subscribe(
      res => {
        this.CoursesByCatArr = res.data;
        console.log(this.CoursesByCatArr);
      },
      error => {
        console.error('Error fetching courses by category:', error);
      }
    );
  }

  simpleuserdata() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      this.email = user.email; // Correctly assign the email
      this.username = user.name; // Correctly assign the username
      this.phone = user.phone; // Assuming the phone is stored in user object
    } else {
      console.log('No user information found in local storage.');
    }
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

  // Fetch college details
  clgdetails() {
    this.collegeId = this.id;
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      this.clgdetailsArray = res.college_detail;
      console.log(this.clgdetailsArray);
      this.collegename = res.college_detail[0].title;
      this.categoryid = res.college_detail[0].categoryid;
      this.getexamlist();
      
    });
  }

 
  async close() {
    await this.modalController.dismiss();
  }

  
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  
  checkValidInputData(event: any, controlName: string) {
    const input = event.target.value;
    const numericValue = input.replace(/\D/g, ''); // Remove non-digit characters

    this.predictaddmi.get(controlName)?.setValue(numericValue);
    if (numericValue.length > 10) {
      this.predictaddmi.get(controlName)?.setValue(numericValue.substring(0, 10));
    }
  }


  checkValidInputDat(event: any, field: string) {
    if (field === 'student_name') {
      const pattern = /^[a-zA-Z \'-]+$/; 
      if (!pattern.test(event.target.value)) {
        this.predictaddmi.get(field)?.setValue(event.target.value.replace(/[^a-zA-Z \'-]/g, ''));
      }
    } else if (field === 'mobile_no') {
      this.checkValidInputData(event, field);
    }
  }
}








