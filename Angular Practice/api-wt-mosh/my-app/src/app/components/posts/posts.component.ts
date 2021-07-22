import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  data: Array<any>;
  postData: String;


  constructor(private apiData: DataServiceService) {
    this.data = new Array<any>();
    this.postData = new String();

  }

  ngOnInit(): void {
  }

  getDataFromAPI() {
    this.apiData.getData().subscribe((data) => {
      console.log(data);
      return this.data = data;
    });
  }

  postDataFromAPI() {
    this.apiData.postData().subscribe((data) => {
      console.log(data);
      return this.postData = data;
    });
  }


}
