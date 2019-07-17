import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
api= "http://www.omdbapi.com/?&apikey=8114f151"

movieArray : any[];
  constructor(private http : HttpClient) { }
 searchMovies(search){
   this.http.get<any>(`http://www.omdbapi.com/?s=${search}&apikey=8114f151`).subscribe((data)=>{
   this.movieArray=data.Search;
   console.log(this.movieArray);
 });
}

  ngOnInit() {
  }

}