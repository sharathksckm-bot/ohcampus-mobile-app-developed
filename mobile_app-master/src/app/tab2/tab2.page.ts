



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  colleges: any[] = [];
  exams: any[] = [];
  articles: any[] = [];
  text: string = '';
  collegeid: any;
  constructor(public router: Router,
              public service: ServiceService) {}

  ngOnInit(): void {}

  bck() {
    this.router.navigateByUrl('/tabs/tabs/tab1');
  }

  onSearchInput() {
    if (this.text.trim() !== '') {
      forkJoin([
        this.service.getcollegesrch(this.text),
        this.service.getarticlesrch(this.text),
        this.service.getexamsearch(this.text)
      ]).subscribe(
        ([collegeRes, articleRes, examRes]) => {
          this.colleges = collegeRes.colleges || [];
          this.articles = articleRes.article || [];
          this.exams = examRes.Exams || [];
        },
        (error) => {
          console.error('Error fetching search results:', error);
          // Handle error, e.g., show a toast message
        }
      );
    } else {
      this.colleges = [];
      this.exams = [];
      this.articles = [];
    }
  }
  getclgid(collegeid: string){
    this.router.navigate(['/clgdetails',collegeid]);
  }
  getexmeid(examId: string){
    this.router.navigate(['/examdetails',examId]);
  }
  getarticleid(blogId: string){
    this.router.navigate(['/articledetails',blogId]);
  }
  notification() {
    this.router.navigateByUrl('/notification');
  }
}

