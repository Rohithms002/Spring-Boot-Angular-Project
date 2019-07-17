import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent= '';
  message ="hi this is from viewhild";
  @Output() childEvent = new EventEmitter();
  constructor() { }
  sendData(){
    console.log('send buton working');
   this.childEvent.emit("hi this is frm child")
 };

 revertData(){
  console.log('revert buton working');
  this.childEvent.emit('');
}
  ngOnInit() {
  }

}
