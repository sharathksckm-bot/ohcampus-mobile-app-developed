import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-examdetails',
  templateUrl: './examdetails.page.html',
  styleUrls: ['./examdetails.page.scss'],
})
export class ExamdetailsPage implements OnInit {
  examId: any;
  exmdetailarry: any[];
  // selectedSegment = 'Process';
  selectedSegment: string = 'Process'; // Default segment
  clglogo: any;
  examname: any;
  examcatname: any;
  criteria: any;
  process: any;
  pattern: any;
  relatedExamsarry: any=[];
  examdescription: any;
  relatedExamsSub: any=[];
  constructor(
              public router: Router,
              public service: ServiceService,
              private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   console.log('Query params:', params); // Log query parameters for debugging
    //   const segment = params['segment']; // Get 'segment' query param
    //   if (segment) {
    //     this.selectedSegment = segment; // Set the selected segment based on query param
    //   }
    //   console.log('Selected segment:', this.selectedSegment); // Log selected segment for debugging
    // });

    this.route.queryParams.subscribe(params => {
      const segment = params['segment']; // Get 'segment' query param
      if (segment) {
        this.selectedSegment = segment; // Set the selected segment based on query param
      }
    });
    this.examId = this.route.snapshot.paramMap.get('examId') as string;
    this.examdetail();
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
  examdetail() {
    // this.details = '';
    this.service.examdetails(this.examId).subscribe(res => {
      console.log(res);
      this.exmdetailarry = res.examdetails;
      this.clglogo=res.examdetails[0].image;
      this.examname=res.examdetails[0].title;
      this.examcatname=res.examdetails[0].catname;
      this.examdescription=res.examdetails[0].description;
      this.criteria=res.examdetails[0].criteria;
      this.process=res.examdetails[0].process;
      this.pattern=res.examdetails[0].pattern;
      this.relatedExamsarry=res.relatedExams;
      console.log(this.relatedExamsarry);
      this.relatedExamsarry.forEach((element, index) => {
        console.log(element.relatedExamsSub);
        this.relatedExamsSub=element.relatedExamsSub;

      });


    });
  }
}
