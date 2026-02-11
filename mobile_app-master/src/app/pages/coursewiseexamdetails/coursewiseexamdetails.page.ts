import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-coursewiseexamdetails',
  templateUrl: './coursewiseexamdetails.page.html',
  styleUrls: ['./coursewiseexamdetails.page.scss'],
})
export class CoursewiseexamdetailsPage implements OnInit {

  selectedSegment = 'Criteria';

  showDetails: boolean = false;
  courseId: any;
  coursesArray: any[];
  courseCatId: any;
  details: any[];
  criteria: any[];
  pattern: any[];
  process: any[];
  examId: string;

  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.examId = this.activatedRoute.snapshot.paramMap.get('id') as string; // Ensure 'id' matches the param name in the URL
    this.getexamdetails();

  }



  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  getexamdetails() {
    this.service. examdetailsbycorce(this.examId).subscribe(res => {
       console.log(res);
        this.coursesArray =res.examdetails;
        this.details= res.data[0].description;
        this.criteria= res.data[0].criteria;
        this.pattern= res.data[0].pattern;
        this.process= res.data[0].process;
      
    });
  }
}

