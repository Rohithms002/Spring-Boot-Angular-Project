import { Component, OnInit } from '@angular/core';
import { InterviewRecruitmentService } from '../interview-recruitment.service';

@Component({
  selector: 'app-interview-recruitment',
  templateUrl: './interview-recruitment.component.html',
  styleUrls: ['./interview-recruitment.component.css']
})
export class InterviewRecruitmentComponent implements OnInit {

  constructor(private interviewRecruitment : InterviewRecruitmentService ) { }
  submitForm(form){
    console.log(form.value)
    this.interviewRecruitment.postData(form.value).toPromise().then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err+"helloooo");
    });
  }
  ngOnInit() {
  }

}
