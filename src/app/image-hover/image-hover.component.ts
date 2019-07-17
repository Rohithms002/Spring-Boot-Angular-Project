import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-hover',
  templateUrl: './image-hover.component.html',
  styleUrls: ['./image-hover.component.css']
})
export class ImageHoverComponent implements OnInit {
  imgURL="https://cdn.pixabay.com/photo/2018/10/06/16/40/elephant-3728225__340.jpg"
  imgURL2= "https://cdn.pixabay.com/photo/2019/07/06/03/30/sand-dune-4319681__340.jpg"
  imgURL3="https://cdn.pixabay.com/photo/2018/10/06/20/54/bastei-3728708__340.jpg"
  imgURL4= "https://cdn.pixabay.com/photo/2014/08/16/10/48/library-419254__340.jpg"
  imgURL5="https://cdn.pixabay.com/photo/2014/08/16/10/48/library-419254__340.jpg"
  imgURL6="https://cdn.pixabay.com/photo/2019/06/20/16/03/poppy-4287463__340.jpg"
  constructor() { }

  ngOnInit() {
  }

}
