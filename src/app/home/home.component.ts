import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // url = 'http://127.0.0.1:5000/'
  url = 'https://bn-stackoverflow-sai.herokuapp.com/'
  // url = 'https://app-stackoverflow-sai.herokuapp.com/'
  content:any
 
  constructor(private http: HttpClient) {
    this.http.post<any>(this.url+'content',{}).subscribe(
      res => {
        console.log(res);
        this.content = res
        
      }
    )
   }

  ngOnInit(): void {
  }

}
