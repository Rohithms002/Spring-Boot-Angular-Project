import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit ,OnChanges, OnDestroy , AfterViewInit ,
 AfterContentChecked , AfterContentInit , AfterViewChecked, DoCheck {

  constructor() { 
    console.log("Constructor running");
  }

  ngOnInit() {
    console.log("ngOnInit running");
  }

  ngOnChanges(change){
    console.log("onchanges running");
    console.log("change")
  }

  ngOnDestroy(){
    console.log("nDestroy is running");
  }

  ngAfterViewInit(){
    console.log("AfterViewInit is running");
  }

  ngAfterContentChecked(){
    console.log("AfterContentCHeke is running");
  }
  ngAfterContentInit(){
    console.log("AfterContentInit is running");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is running");
  }

  ngDoCheck(){
    console.log("ngDoCheck is running");
  }

}
