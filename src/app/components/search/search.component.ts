import { Component, OnInit } from '@angular/core';
import { GetsearchService } from 'src/app/services/getsearch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userInput: any;
  data: any;

  constructor(private searchUserInput: GetsearchService, private response: GetsearchService) { }

  ngOnInit(): void {
  }

  searchInput() {
    this.response.getResponse(this.userInput).subscribe(
      data => {
        this.data.meals = data
        console.log(data)
      }
    )
  }

}
