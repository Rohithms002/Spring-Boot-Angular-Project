import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
newsArray : any[];
  constructor(private http : HttpClient) { }
  showNews(category){
    this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5ffceb0e4c1041349987acb18b4f73c1`).subscribe((data)=>{
    this.newsArray = data;
    console.log(data);
  });
 }
  ngOnInit() {
  }

}
