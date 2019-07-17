import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  resetForm(form: NgForm){
    if(form) {
      form.resetForm();
    }
  }
 printForm(form)
{
  console.log(form.value);
  this.resetForm(form);
}  

ngOnInit() {
  }

}
