import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
 color= 'red'
  constructor(el:ElementRef) {
    el.nativeElement.style.background="blue"
   }

  ngOnInit() {
  }

}
