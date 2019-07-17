import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pojo } from '../pojo';
import { RecruitmnetService } from '../recruitmnet.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
users : Observable <Pojo[]>;
  constructor(private RecruitmnetService : RecruitmnetService ) { }
 
  ngOnInit() {
    // this.RecruitmnetService.findAll().subscribe(data => {
    //   this.users = data;
      this.reloadData();
    // });

  }

  reloadData(){
    this.users= this.RecruitmnetService.findAll();
  }


  deleteCandidate(id: number) {
    this.RecruitmnetService.deleteCandidate(id)
      .subscribe(
        data => {
          console.log(data);
          console.log(id);
          this.reloadData();
        },
        error => console.log(error));
  }

}
