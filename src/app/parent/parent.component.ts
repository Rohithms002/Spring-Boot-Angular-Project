import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentData="hi this is parent data"
  messageFromChild='';
  @ViewChild(ChildComponent, { static : true}) Child;

  constructor() { }
  sendData(){
    this.parentData = 'hi this is parent';
    // this.imgAddress = 'https://cdn.pixabay.com/photo/2019/07/03/20/59/abendstimmung-4315445__340.jpg';
  }
  revertData(){
    this.parentData = '';
    // this.imgAddress = '';
  }
  ngOnInit() {

    this.messageFromChild= this.Child.message;
  }

}
