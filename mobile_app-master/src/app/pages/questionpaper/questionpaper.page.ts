import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'; 
@Component({
  selector: 'app-questionpaper',
  templateUrl: './questionpaper.page.html',
  styleUrls: ['./questionpaper.page.scss'],
})
export class QuestionpaperPage implements OnInit {
  examId: any;
  exampaper: any;
  examdescription: any;
  examtitle: any;
  questionpaper: any;
  questionpaperdata: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: ServiceService,
    private iab: InAppBrowser
  ) {
    let paras = this.router.getCurrentNavigation()?.extras.queryParams;
    let paramjson = JSON.parse(JSON.stringify(paras));
    this.examId = paramjson.examId
    console.log( this.examId)
   }

  ngOnInit() {
    this.getQue_PaperByExamId()
  }

  getQue_PaperByExamId()
  {
    let selctpara={
      "examId":this.examId
    }

    this.service.getQue_PaperByExamId(selctpara).subscribe(res=>{
      this.examdescription=res.examslist[0]?.description
      this.exampaper=res.examslist[0]?.questionpaper
      this.examtitle=res.examslist[0]?.title
      this.questionpaper=res.docsData[0]
      this.questionpaperdata=res.docsData
      console.log(  this.questionpaper)
    })
  }
  openExamPaper(url:string)
  {
    // exampaper.exam_question_paper
this.iab.create(url, '_system');
  }

}
