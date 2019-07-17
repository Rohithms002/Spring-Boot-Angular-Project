import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rohith',
  templateUrl: './rohith.component.html',
  styleUrls: ['./rohith.component.css']
})
export class RohithComponent implements OnInit {
 
  imgURL="https://cdn.pixabay.com/photo/2018/10/06/16/40/elephant-3728225__340.jpg"
  name1= "Rohith"
  imgClasses= "rounded img:thumbnail  img:fluid" 
  color= "red"
 
flag =true;
  users =[
   {
     name:"Rohith",
     email : "ro@gmail.com",
     phoneNo: "9538772247",
     city : "Bangalore"
   },
   {
    name:"Ranjit",
    email : "ranj@gmail.com",
    phoneNo: "9538772247",
    city : "TeluguPilla"
   },
{
   name:"Shubham",
   email : "sh@gmail.com",
   phoneNo: "953874455",
   city : "Nagpur"
}
  ];
 
  constructor() { }
  outfile(){
    prompt();
  };

  removeObject(user){

    let index = this.users.indexOf(user);
    this.users.splice(index,1);
  }
  ngOnInit() {
  }

}