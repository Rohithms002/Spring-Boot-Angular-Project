import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValiator } from './custom.validator';
import { RecruitmnetService } from '../recruitmnet.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  constructor(private recruitService: RecruitmnetService ) { }


  get cname(){
    return this.RecruitmentForm.get('cname');
  }
  
  get ccompany(){
    return this.RecruitmentForm.get('ccompany');
  }
  
  get esalary(){
    return this.RecruitmentForm.get('esalary');
  }
  
  get salary(){
    return this.RecruitmentForm.get('salary');
  }

  RecruitmentForm = new FormGroup({
    cname: new FormControl("", [Validators.required,Validators.minLength(5), CustomValiator.noSpace]),
    ccompany: new FormControl("", [Validators.required,Validators.minLength(5)]),
    esalary: new FormControl
    ("", [Validators.required,Validators.minLength(5)]),
    salary: new FormControl("", [Validators.required,Validators.minLength(5)])
  }

  )

  submitForm(form){
    console.log(form.value)
    this.recruitService.postData(form.value).toPromise().then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err+"helloooo");
    });
  }

  ngOnInit() {
  }

}